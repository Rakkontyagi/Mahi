const fs = require('fs');
const path = require('path');

console.log('🔗 COMPREHENSIVE NAVIGATION CLEANUP');
console.log('===================================');

// Load removal report
if (!fs.existsSync('duplicate-removal-report.json')) {
    console.error('❌ Removal report not found. Run intelligentDuplicateRemoval.cjs first.');
    process.exit(1);
}

const removalReport = JSON.parse(fs.readFileSync('duplicate-removal-report.json', 'utf8'));
const removedPages = removalReport.removedPages;

console.log(`📊 Processing ${removedPages.length} removed pages for navigation cleanup...`);

// Files to update
const navigationFiles = [
    'src/components/Navigation/EnhancedNavigation.tsx',
    'src/components/Footer/EnhancedFooter.tsx', 
    'src/components/Layout/ContextualSidebar.tsx',
    'src/App.tsx',
    'src/data/comprehensiveLocations.ts'
];

// Helper function to extract URL patterns from removed pages
function extractUrlPatterns(removedPages) {
    const patterns = [];
    
    for (const page of removedPages) {
        if (page.city && page.service) {
            patterns.push(`/${page.city}/${page.service}/`);
            patterns.push(`"/${page.city}/${page.service}"`);
            patterns.push(`'/${page.city}/${page.service}'`);
            patterns.push(`\`/${page.city}/${page.service}\``);
            
            // Industry page patterns
            if (page.isIndustryPage) {
                const industryMatch = page.path.match(/industries\/([^\/]+)\//);
                if (industryMatch) {
                    const industry = industryMatch[1];
                    patterns.push(`/${page.city}/industries/${industry}/${page.service}/`);
                    patterns.push(`"/${page.city}/industries/${industry}/${page.service}"`);
                    patterns.push(`'/${page.city}/industries/${industry}/${page.service}'`);
                }
            }
        }
    }
    
    return [...new Set(patterns)]; // Remove duplicates
}

// Helper function to clean navigation content
function cleanNavigationContent(content, urlPatterns) {
    let cleanedContent = content;
    let changesCount = 0;
    
    for (const pattern of urlPatterns) {
        const originalLength = cleanedContent.length;
        
        // Remove direct URL references
        cleanedContent = cleanedContent.replace(new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), '#removed-duplicate');
        
        // Remove menu items containing these URLs
        const menuItemPattern = new RegExp(`\\{[^}]*${pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^}]*\\}`, 'g');
        cleanedContent = cleanedContent.replace(menuItemPattern, '');
        
        // Remove array items containing these URLs
        const arrayItemPattern = new RegExp(`\\[[^\\]]*${pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^\\]]*\\]`, 'g');
        cleanedContent = cleanedContent.replace(arrayItemPattern, '[]');
        
        if (cleanedContent.length !== originalLength) {
            changesCount++;
        }
    }
    
    // Clean up empty objects and arrays
    cleanedContent = cleanedContent.replace(/\{\s*\}/g, '');
    cleanedContent = cleanedContent.replace(/\[\s*\]/g, '[]');
    cleanedContent = cleanedContent.replace(/,\s*,/g, ',');
    cleanedContent = cleanedContent.replace(/,\s*\]/g, ']');
    cleanedContent = cleanedContent.replace(/,\s*\}/g, '}');
    
    return { content: cleanedContent, changes: changesCount };
}

// Helper function to remove broken route definitions
function cleanRouteDefinitions(content, removedPages) {
    let cleanedContent = content;
    let changesCount = 0;
    
    for (const page of removedPages) {
        if (page.city && page.service) {
            // Remove route definitions
            const routePattern = new RegExp(`\\s*if\\s*\\([^)]*${page.city}[^)]*${page.service}[^)]*\\)\\s*\\{[^}]*\\}`, 'g');
            const originalLength = cleanedContent.length;
            cleanedContent = cleanedContent.replace(routePattern, '');
            
            if (cleanedContent.length !== originalLength) {
                changesCount++;
            }
        }
    }
    
    return { content: cleanedContent, changes: changesCount };
}

// Main cleanup function
function cleanupNavigationFiles() {
    const urlPatterns = extractUrlPatterns(removedPages);
    console.log(`🔍 Found ${urlPatterns.length} URL patterns to clean...`);
    
    let totalFilesUpdated = 0;
    let totalChanges = 0;
    
    for (const filePath of navigationFiles) {
        if (fs.existsSync(filePath)) {
            try {
                console.log(`\n🔧 Processing: ${filePath}`);
                
                let content = fs.readFileSync(filePath, 'utf8');
                const originalLength = content.length;
                
                // Clean navigation content
                const navResult = cleanNavigationContent(content, urlPatterns);
                content = navResult.content;
                
                // Clean route definitions (for App.tsx)
                if (filePath.includes('App.tsx')) {
                    const routeResult = cleanRouteDefinitions(content, removedPages);
                    content = routeResult.content;
                    totalChanges += routeResult.changes;
                }
                
                totalChanges += navResult.changes;
                
                if (content.length !== originalLength) {
                    fs.writeFileSync(filePath, content);
                    console.log(`   ✅ Updated: ${filePath} (${navResult.changes} changes)`);
                    totalFilesUpdated++;
                } else {
                    console.log(`   ℹ️  No changes needed: ${filePath}`);
                }
                
            } catch (error) {
                console.error(`   ❌ Error processing ${filePath}:`, error.message);
            }
        } else {
            console.log(`   ⚠️  File not found: ${filePath}`);
        }
    }
    
    return { filesUpdated: totalFilesUpdated, totalChanges };
}

// Update sitemap to remove deleted pages
function updateSitemap() {
    console.log('\n🗺️  Updating sitemap...');
    
    const sitemapPath = 'public/sitemap.xml';
    if (fs.existsSync(sitemapPath)) {
        try {
            let sitemap = fs.readFileSync(sitemapPath, 'utf8');
            let changesCount = 0;
            
            for (const page of removedPages) {
                if (page.city && page.service) {
                    const urlPattern = `https://goddigitalmarketing.com/${page.city}/${page.service}/`;
                    if (sitemap.includes(urlPattern)) {
                        sitemap = sitemap.replace(new RegExp(`<url>.*?${urlPattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}.*?</url>`, 'gs'), '');
                        changesCount++;
                    }
                }
            }
            
            if (changesCount > 0) {
                fs.writeFileSync(sitemapPath, sitemap);
                console.log(`   ✅ Updated sitemap: removed ${changesCount} URLs`);
            } else {
                console.log(`   ℹ️  No sitemap changes needed`);
            }
            
        } catch (error) {
            console.error(`   ❌ Error updating sitemap:`, error.message);
        }
    } else {
        console.log(`   ⚠️  Sitemap not found: ${sitemapPath}`);
    }
}

// Clean up any remaining broken imports
function cleanupBrokenImports() {
    console.log('\n🔧 Cleaning up broken imports...');
    
    const filesToCheck = [
        'src/App.tsx',
        'src/components/Navigation/EnhancedNavigation.tsx'
    ];
    
    for (const filePath of filesToCheck) {
        if (fs.existsSync(filePath)) {
            try {
                let content = fs.readFileSync(filePath, 'utf8');
                const originalLength = content.length;
                
                // Remove broken import statements
                for (const page of removedPages) {
                    if (page.city && page.service) {
                        const importPattern = new RegExp(`import.*?from\\s*['"].*?${page.city}.*?${page.service}.*?['"];?`, 'g');
                        content = content.replace(importPattern, '');
                    }
                }
                
                // Clean up empty lines
                content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
                
                if (content.length !== originalLength) {
                    fs.writeFileSync(filePath, content);
                    console.log(`   ✅ Cleaned imports: ${filePath}`);
                } else {
                    console.log(`   ℹ️  No import cleanup needed: ${filePath}`);
                }
                
            } catch (error) {
                console.error(`   ❌ Error cleaning imports in ${filePath}:`, error.message);
            }
        }
    }
}

// Generate cleanup report
function generateCleanupReport(results) {
    const report = {
        timestamp: new Date().toISOString(),
        filesProcessed: navigationFiles.length,
        filesUpdated: results.filesUpdated,
        totalChanges: results.totalChanges,
        removedPagesProcessed: removedPages.length,
        cleanupActions: [
            'Removed duplicate URL references',
            'Cleaned navigation menus',
            'Updated route definitions',
            'Cleaned sitemap',
            'Removed broken imports'
        ]
    };
    
    fs.writeFileSync('navigation-cleanup-report.json', JSON.stringify(report, null, 2));
    console.log('\n📋 Cleanup report saved to: navigation-cleanup-report.json');
}

// Main execution
function main() {
    const results = cleanupNavigationFiles();
    updateSitemap();
    cleanupBrokenImports();
    generateCleanupReport(results);
    
    console.log('\n🎉 NAVIGATION CLEANUP COMPLETED!');
    console.log('=================================');
    console.log(`✅ Files updated: ${results.filesUpdated}`);
    console.log(`✅ Total changes: ${results.totalChanges}`);
    console.log(`✅ Removed pages processed: ${removedPages.length}`);
    console.log(`✅ Navigation references cleaned`);
    console.log(`✅ Sitemap updated`);
    console.log(`✅ Broken imports removed`);
}

// Execute
main();

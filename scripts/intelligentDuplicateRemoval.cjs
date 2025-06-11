const fs = require('fs');
const path = require('path');

console.log('🚨 INTELLIGENT DUPLICATE CONTENT REMOVAL');
console.log('========================================');

// Configuration
const PAGES_DIR = 'src/pages';
const SIMILARITY_THRESHOLD = 0.90; // 90% similarity threshold for removal
const BACKUP_DIR = 'backup-removed-pages';

// Priority cities (keep these, remove others)
const PRIORITY_CITIES = [
    'mumbai', 'delhi', 'bangalore', 'chennai', 'hyderabad', 'pune', 
    'kolkata', 'ahmedabad', 'surat', 'jaipur', 'lucknow', 'kanpur',
    'nagpur', 'indore', 'thane', 'bhopal', 'visakhapatnam', 'pimpri-chinchwad',
    'patna', 'vadodara', 'ghaziabad', 'ludhiana', 'agra', 'nashik'
];

// Priority services (keep all of these)
const PRIORITY_SERVICES = [
    'seo-services', 'ppc-advertising', 'social-media-marketing', 
    'digital-marketing', 'ai-automation', 'business-automation'
];

// Data structures
const duplicateGroups = [];
const pagesToRemove = [];
const navigationUpdates = [];

// Helper functions
function createBackupDirectory() {
    if (!fs.existsSync(BACKUP_DIR)) {
        fs.mkdirSync(BACKUP_DIR, { recursive: true });
        console.log(`✅ Created backup directory: ${BACKUP_DIR}`);
    }
}

function analyzePagePriority(filePath) {
    const cityMatch = filePath.match(/pages\/([^\/]+)\//);
    const serviceMatch = filePath.match(/\/([^\/]+)\.tsx$/);
    const isIndustryPage = filePath.includes('/industries/');
    
    const city = cityMatch ? cityMatch[1] : null;
    const service = serviceMatch ? serviceMatch[1] : null;
    
    let priority = 0;
    
    // Higher priority for priority cities
    if (city && PRIORITY_CITIES.includes(city)) {
        priority += 100;
    }
    
    // Higher priority for priority services
    if (service && PRIORITY_SERVICES.includes(service)) {
        priority += 50;
    }
    
    // Lower priority for industry pages (more specific, less traffic)
    if (isIndustryPage) {
        priority -= 30;
    }
    
    // Lower priority for smaller cities
    if (city && !PRIORITY_CITIES.includes(city)) {
        priority -= 20;
    }
    
    return {
        city,
        service,
        isIndustryPage,
        priority,
        path: filePath
    };
}

function identifyDuplicateGroups() {
    console.log('🔍 Identifying duplicate groups...');
    
    // Load analysis results
    if (!fs.existsSync('duplicate-analysis-results.json')) {
        console.error('❌ Analysis results not found. Run comprehensiveDuplicateAnalysis.cjs first.');
        return false;
    }
    
    const analysisData = JSON.parse(fs.readFileSync('duplicate-analysis-results.json', 'utf8'));
    const similarityMatrix = analysisData.similarityMatrix;
    
    // Group similar pages
    const processedPairs = new Set();
    
    for (const [pair, similarity] of Object.entries(similarityMatrix)) {
        if (similarity >= SIMILARITY_THRESHOLD) {
            const [path1, path2] = pair.split('|');
            
            if (processedPairs.has(pair) || processedPairs.has(`${path2}|${path1}`)) {
                continue;
            }
            
            processedPairs.add(pair);
            
            // Find existing group or create new one
            let group = duplicateGroups.find(g => g.some(p => p.path === path1 || p.path === path2));
            
            if (!group) {
                group = [];
                duplicateGroups.push(group);
            }
            
            const page1 = analyzePagePriority(path1);
            const page2 = analyzePagePriority(path2);
            
            if (!group.some(p => p.path === path1)) {
                group.push({ ...page1, similarity });
            }
            if (!group.some(p => p.path === path2)) {
                group.push({ ...page2, similarity });
            }
        }
    }
    
    console.log(`   Found ${duplicateGroups.length} duplicate groups`);
    return true;
}

function selectPagesToRemove() {
    console.log('🎯 Selecting pages to remove...');
    
    for (const group of duplicateGroups) {
        // Sort by priority (highest first)
        group.sort((a, b) => b.priority - a.priority);
        
        // Keep the highest priority page, mark others for removal
        const keepPage = group[0];
        const removePage = group.slice(1);
        
        console.log(`\n📋 Group Analysis:`);
        console.log(`   KEEP: ${keepPage.path} (Priority: ${keepPage.priority})`);
        
        for (const page of removePage) {
            console.log(`   REMOVE: ${page.path} (Priority: ${page.priority})`);
            pagesToRemove.push(page);
        }
    }
    
    console.log(`\n📊 Summary:`);
    console.log(`   Total pages to remove: ${pagesToRemove.length}`);
    console.log(`   Total pages to keep: ${duplicateGroups.length}`);
}

function backupAndRemovePages() {
    console.log('🗂️  Backing up and removing duplicate pages...');
    
    let removedCount = 0;
    
    for (const page of pagesToRemove) {
        try {
            // Create backup
            const backupPath = path.join(BACKUP_DIR, page.path);
            const backupDir = path.dirname(backupPath);
            
            if (!fs.existsSync(backupDir)) {
                fs.mkdirSync(backupDir, { recursive: true });
            }
            
            // Copy to backup
            fs.copyFileSync(page.path, backupPath);
            
            // Remove original
            fs.unlinkSync(page.path);
            
            removedCount++;
            console.log(`   ✅ Removed: ${page.path}`);
            
        } catch (error) {
            console.error(`   ❌ Error removing ${page.path}:`, error.message);
        }
    }
    
    console.log(`\n📊 Removal Summary:`);
    console.log(`   Successfully removed: ${removedCount} pages`);
    console.log(`   Backup location: ${BACKUP_DIR}`);
}

function updateNavigationReferences() {
    console.log('🔗 Updating navigation references...');
    
    const navigationFiles = [
        'src/components/Navigation/EnhancedNavigation.tsx',
        'src/components/Footer/EnhancedFooter.tsx',
        'src/components/Layout/ContextualSidebar.tsx',
        'src/App.tsx'
    ];
    
    const removedPaths = pagesToRemove.map(p => p.path);
    
    for (const navFile of navigationFiles) {
        if (fs.existsSync(navFile)) {
            try {
                let content = fs.readFileSync(navFile, 'utf8');
                let updated = false;
                
                // Remove references to deleted pages
                for (const removedPath of removedPaths) {
                    const cityMatch = removedPath.match(/pages\/([^\/]+)\//);
                    const serviceMatch = removedPath.match(/\/([^\/]+)\.tsx$/);
                    
                    if (cityMatch && serviceMatch) {
                        const city = cityMatch[1];
                        const service = serviceMatch[1];
                        
                        // Remove URL references
                        const urlPattern = new RegExp(`/${city}/${service}/`, 'g');
                        if (content.includes(`/${city}/${service}/`)) {
                            content = content.replace(urlPattern, '#removed-duplicate');
                            updated = true;
                        }
                    }
                }
                
                if (updated) {
                    fs.writeFileSync(navFile, content);
                    console.log(`   ✅ Updated: ${navFile}`);
                }
                
            } catch (error) {
                console.error(`   ❌ Error updating ${navFile}:`, error.message);
            }
        }
    }
}

function generateRemovalReport() {
    const report = {
        timestamp: new Date().toISOString(),
        totalPagesRemoved: pagesToRemove.length,
        duplicateGroupsProcessed: duplicateGroups.length,
        backupLocation: BACKUP_DIR,
        removedPages: pagesToRemove.map(p => ({
            path: p.path,
            city: p.city,
            service: p.service,
            priority: p.priority,
            isIndustryPage: p.isIndustryPage
        })),
        keptPages: duplicateGroups.map(group => group[0].path)
    };
    
    fs.writeFileSync('duplicate-removal-report.json', JSON.stringify(report, null, 2));
    console.log('\n📋 Removal report saved to: duplicate-removal-report.json');
}

// Main execution
function main() {
    createBackupDirectory();
    
    if (!identifyDuplicateGroups()) {
        return;
    }
    
    selectPagesToRemove();
    backupAndRemovePages();
    updateNavigationReferences();
    generateRemovalReport();
    
    console.log('\n🎉 DUPLICATE REMOVAL COMPLETED!');
    console.log('=====================================');
    console.log(`✅ Removed ${pagesToRemove.length} duplicate pages`);
    console.log(`✅ Updated navigation references`);
    console.log(`✅ Created backup in ${BACKUP_DIR}`);
    console.log(`✅ Generated removal report`);
}

// Execute
main();

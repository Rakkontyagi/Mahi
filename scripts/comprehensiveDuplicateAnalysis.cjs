const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

console.log('🔍 COMPREHENSIVE DUPLICATE CONTENT ANALYSIS');
console.log('============================================');

// Configuration
const PAGES_DIR = 'src/pages';
const SIMILARITY_THRESHOLD = 0.85; // 85% similarity threshold
const MIN_CONTENT_LENGTH = 100; // Minimum content length to analyze

// Data structures
const pageAnalysis = new Map();
const duplicateGroups = [];
const similarityMatrix = new Map();
const navigationReferences = new Map();

// Helper functions
function calculateContentHash(content) {
    return crypto.createHash('md5').update(content).digest('hex');
}

function extractContentFromTSX(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Extract key content sections
        const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
        const descriptionMatch = content.match(/description:\s*["']([^"']+)["']/);
        const contentMatches = content.match(/content:\s*["']([^"']+)["']/g) || [];
        
        const extractedContent = {
            title: titleMatch ? titleMatch[1] : '',
            description: descriptionMatch ? descriptionMatch[1] : '',
            content: contentMatches.map(match => match.replace(/content:\s*["']/, '').replace(/["']$/, '')).join(' '),
            fullContent: content
        };
        
        return extractedContent;
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error.message);
        return null;
    }
}

function calculateSimilarity(content1, content2) {
    if (!content1 || !content2) return 0;
    
    const text1 = (content1.title + ' ' + content1.description + ' ' + content1.content).toLowerCase();
    const text2 = (content2.title + ' ' + content2.description + ' ' + content2.content).toLowerCase();
    
    if (text1.length < MIN_CONTENT_LENGTH || text2.length < MIN_CONTENT_LENGTH) return 0;
    
    // Simple similarity calculation using common words
    const words1 = new Set(text1.split(/\s+/).filter(word => word.length > 3));
    const words2 = new Set(text2.split(/\s+/).filter(word => word.length > 3));
    
    const intersection = new Set([...words1].filter(word => words2.has(word)));
    const union = new Set([...words1, ...words2]);
    
    return intersection.size / union.size;
}

function analyzePageStructure(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract page metadata
    const cityMatch = filePath.match(/pages\/([^\/]+)\//);
    const serviceMatch = filePath.match(/\/([^\/]+)\.tsx$/);
    const industryMatch = filePath.match(/industries\/([^\/]+)\//);
    
    return {
        city: cityMatch ? cityMatch[1] : null,
        service: serviceMatch ? serviceMatch[1] : null,
        industry: industryMatch ? industryMatch[1] : null,
        isIndustryPage: filePath.includes('/industries/'),
        path: filePath
    };
}

// Main analysis function
function analyzeDuplicateContent() {
    console.log('📊 Scanning all pages...');
    
    // Get all TSX files
    function getAllTSXFiles(dir) {
        const files = [];
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                files.push(...getAllTSXFiles(fullPath));
            } else if (item.endsWith('.tsx')) {
                files.push(fullPath);
            }
        }
        
        return files;
    }
    
    const allFiles = getAllTSXFiles(PAGES_DIR);
    console.log(`   Found ${allFiles.length} TSX files`);
    
    // Analyze each page
    console.log('🔍 Analyzing content...');
    for (const filePath of allFiles) {
        const content = extractContentFromTSX(filePath);
        const structure = analyzePageStructure(filePath);
        
        if (content) {
            const contentHash = calculateContentHash(content.fullContent);
            
            pageAnalysis.set(filePath, {
                ...content,
                ...structure,
                hash: contentHash,
                wordCount: content.fullContent.split(/\s+/).length
            });
        }
    }
    
    console.log(`   Analyzed ${pageAnalysis.size} pages successfully`);
    
    // Find duplicates and similar content
    console.log('🔍 Detecting duplicates and similar content...');
    const pages = Array.from(pageAnalysis.entries());
    
    for (let i = 0; i < pages.length; i++) {
        for (let j = i + 1; j < pages.length; j++) {
            const [path1, data1] = pages[i];
            const [path2, data2] = pages[j];
            
            // Check for exact duplicates (same hash)
            if (data1.hash === data2.hash) {
                console.log(`🚨 EXACT DUPLICATE FOUND:`);
                console.log(`   ${path1}`);
                console.log(`   ${path2}`);
                
                // Add to duplicate groups
                let group = duplicateGroups.find(g => g.some(p => p === path1 || p === path2));
                if (!group) {
                    group = [path1, path2];
                    duplicateGroups.push(group);
                } else {
                    if (!group.includes(path1)) group.push(path1);
                    if (!group.includes(path2)) group.push(path2);
                }
            } else {
                // Check for similar content
                const similarity = calculateSimilarity(data1, data2);
                if (similarity > SIMILARITY_THRESHOLD) {
                    console.log(`⚠️  SIMILAR CONTENT (${(similarity * 100).toFixed(1)}%):`);
                    console.log(`   ${path1}`);
                    console.log(`   ${path2}`);
                    
                    similarityMatrix.set(`${path1}|${path2}`, similarity);
                }
            }
        }
    }
    
    return {
        totalPages: pageAnalysis.size,
        duplicateGroups: duplicateGroups.length,
        similarPairs: similarityMatrix.size
    };
}

// Execute analysis
const results = analyzeDuplicateContent();

console.log('\n📊 ANALYSIS RESULTS:');
console.log(`   Total Pages Analyzed: ${results.totalPages}`);
console.log(`   Duplicate Groups Found: ${results.duplicateGroups}`);
console.log(`   Similar Content Pairs: ${results.similarPairs}`);

if (duplicateGroups.length > 0) {
    console.log('\n🚨 DUPLICATE GROUPS:');
    duplicateGroups.forEach((group, index) => {
        console.log(`\nGroup ${index + 1}:`);
        group.forEach(path => console.log(`   - ${path}`));
    });
}

if (similarityMatrix.size > 0) {
    console.log('\n⚠️  SIMILAR CONTENT PAIRS:');
    for (const [pair, similarity] of similarityMatrix.entries()) {
        const [path1, path2] = pair.split('|');
        console.log(`\n${(similarity * 100).toFixed(1)}% similarity:`);
        console.log(`   - ${path1}`);
        console.log(`   - ${path2}`);
    }
}

// Export results for further processing
const analysisResults = {
    timestamp: new Date().toISOString(),
    totalPages: results.totalPages,
    duplicateGroups,
    similarityMatrix: Object.fromEntries(similarityMatrix),
    pageAnalysis: Object.fromEntries(pageAnalysis)
};

fs.writeFileSync('duplicate-analysis-results.json', JSON.stringify(analysisResults, null, 2));
console.log('\n✅ Analysis complete! Results saved to duplicate-analysis-results.json');

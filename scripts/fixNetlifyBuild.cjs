const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 NETLIFY BUILD FIX SCRIPT');
console.log('===========================');

// Check if we're in the right directory
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (!fs.existsSync(packageJsonPath)) {
    console.error('❌ package.json not found. Please run this script from the project root.');
    process.exit(1);
}

console.log('✅ Found package.json');

// Check if dist directory exists
const distPath = path.join(process.cwd(), 'dist');
console.log(`📁 Checking for dist directory: ${distPath}`);

if (fs.existsSync(distPath)) {
    console.log('✅ dist directory exists');
    
    // List contents of dist directory
    const distContents = fs.readdirSync(distPath);
    console.log(`📋 dist directory contents (${distContents.length} items):`);
    distContents.slice(0, 10).forEach(item => {
        console.log(`   - ${item}`);
    });
    if (distContents.length > 10) {
        console.log(`   ... and ${distContents.length - 10} more items`);
    }
} else {
    console.log('❌ dist directory does not exist');
    console.log('🔨 Running build to create dist directory...');
    
    try {
        // Run the build command
        console.log('📦 Running: npm run build');
        execSync('npm run build', { stdio: 'inherit' });
        
        // Check if dist was created
        if (fs.existsSync(distPath)) {
            console.log('✅ Build successful! dist directory created');
            
            // List contents
            const distContents = fs.readdirSync(distPath);
            console.log(`📋 dist directory contents (${distContents.length} items):`);
            distContents.slice(0, 10).forEach(item => {
                console.log(`   - ${item}`);
            });
            if (distContents.length > 10) {
                console.log(`   ... and ${distContents.length - 10} more items`);
            }
        } else {
            console.error('❌ Build completed but dist directory was not created');
            process.exit(1);
        }
    } catch (error) {
        console.error('❌ Build failed:', error.message);
        process.exit(1);
    }
}

// Check netlify.toml configuration
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
if (fs.existsSync(netlifyTomlPath)) {
    console.log('✅ Found netlify.toml');
    
    const netlifyConfig = fs.readFileSync(netlifyTomlPath, 'utf8');
    
    // Check build command
    if (netlifyConfig.includes('command = "npm run build"')) {
        console.log('✅ netlify.toml has correct build command');
    } else {
        console.log('⚠️  netlify.toml build command needs updating');
    }
    
    // Check publish directory
    if (netlifyConfig.includes('publish = "dist"')) {
        console.log('✅ netlify.toml has correct publish directory');
    } else {
        console.log('⚠️  netlify.toml publish directory needs updating');
    }
} else {
    console.log('❌ netlify.toml not found');
}

// Check if index.html exists in dist
const indexHtmlPath = path.join(distPath, 'index.html');
if (fs.existsSync(indexHtmlPath)) {
    console.log('✅ index.html found in dist directory');
    
    // Check file size
    const stats = fs.statSync(indexHtmlPath);
    console.log(`📊 index.html size: ${(stats.size / 1024).toFixed(2)} KB`);
} else {
    console.log('❌ index.html not found in dist directory');
}

console.log('\n🎯 NETLIFY DEPLOYMENT READINESS CHECK:');
console.log('=====================================');

const checks = [
    { name: 'dist directory exists', passed: fs.existsSync(distPath) },
    { name: 'index.html in dist', passed: fs.existsSync(indexHtmlPath) },
    { name: 'netlify.toml exists', passed: fs.existsSync(netlifyTomlPath) },
    { name: 'package.json exists', passed: fs.existsSync(packageJsonPath) }
];

let allPassed = true;
checks.forEach(check => {
    const status = check.passed ? '✅' : '❌';
    console.log(`${status} ${check.name}`);
    if (!check.passed) allPassed = false;
});

if (allPassed) {
    console.log('\n🎉 ALL CHECKS PASSED! Ready for Netlify deployment');
    console.log('\n📋 Next steps:');
    console.log('1. Commit the updated netlify.toml');
    console.log('2. Push to GitHub');
    console.log('3. Netlify will automatically redeploy');
} else {
    console.log('\n⚠️  Some checks failed. Please fix the issues above.');
    process.exit(1);
}

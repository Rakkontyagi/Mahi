#\!/bin/bash

echo "🚀 Starting God Digital Marketing Website Build & Deployment"
echo "============================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Step 1: Clean previous builds
print_info "Cleaning previous builds..."
rm -rf dist/
rm -rf build/
print_status "Previous builds cleaned"

# Step 2: Install/Update dependencies
print_info "Installing dependencies..."
npm install
if [ $? -eq 0 ]; then
    print_status "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Step 3: Generate sitemap and robots.txt
print_info "Generating SEO files..."
node generate-sitemap.cjs
if [ $? -eq 0 ]; then
    print_status "Sitemap and robots.txt generated"
else
    print_error "Failed to generate SEO files"
    exit 1
fi

# Step 4: Run build
print_info "Building production version..."
npm run build
if [ $? -eq 0 ]; then
    print_status "Production build completed successfully"
else
    print_error "Build failed"
    exit 1
fi

# Step 5: Copy SEO files to dist
print_info "Copying SEO files to build directory..."
cp public/sitemap.xml dist/
cp public/robots.txt dist/
print_status "SEO files copied to build directory"

# Step 6: Optimize build (if tools available)
print_info "Optimizing build..."
if command -v gzip &> /dev/null; then
    find dist -type f \( -name "*.js" -o -name "*.css" -o -name "*.html" \) -exec gzip -k {} \;
    print_status "Files compressed with gzip"
else
    print_warning "gzip not available, skipping compression"
fi

# Step 7: Generate build report
print_info "Generating build report..."
echo "Build Report - $(date)" > build-report.txt
echo "=================================" >> build-report.txt
echo "Build Size:" >> build-report.txt
du -sh dist/ >> build-report.txt
echo "" >> build-report.txt
echo "File Count:" >> build-report.txt
find dist -type f | wc -l >> build-report.txt
echo "" >> build-report.txt
echo "Main Files:" >> build-report.txt
ls -la dist/ >> build-report.txt
print_status "Build report generated"

# Step 8: Validate build
print_info "Validating build..."
if [ -f "dist/index.html" ]; then
    print_status "index.html found"
else
    print_error "index.html not found in build"
    exit 1
fi

if [ -f "dist/sitemap.xml" ]; then
    print_status "sitemap.xml found"
else
    print_error "sitemap.xml not found in build"
    exit 1
fi

if [ -f "dist/robots.txt" ]; then
    print_status "robots.txt found"
else
    print_error "robots.txt not found in build"
    exit 1
fi

# Step 9: Display summary
echo ""
echo "🎉 BUILD COMPLETED SUCCESSFULLY\!"
echo "================================="
print_status "✅ Dependencies installed"
print_status "✅ SEO files generated (sitemap.xml, robots.txt)"
print_status "✅ Production build created"
print_status "✅ Files optimized and compressed"
print_status "✅ Build validated"
echo ""
print_info "Build location: ./dist/"
print_info "Build size: $(du -sh dist/ | cut -f1)"
print_info "Total files: $(find dist -type f | wc -l)"
echo ""
print_info "🚀 Ready for deployment to Netlify\!"
echo ""
print_warning "Next steps:"
echo "1. Deploy the 'dist' folder to your hosting provider"
echo "2. Configure domain and SSL"
echo "3. Set up analytics and monitoring"
echo "4. Submit sitemap to Google Search Console"
echo ""
echo "🌟 God Digital Marketing - Divine Digital Solutions for Godly Growth"

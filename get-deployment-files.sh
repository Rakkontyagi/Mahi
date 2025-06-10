#\!/bin/bash

echo "🚀 God Digital Marketing - Deployment Package Creator"
echo "=================================================="

# Create deployment directory
mkdir -p deployment-package
cd deployment-package

# Copy all files from dist
cp -r ../dist/* .

# Create deployment info
cat > DEPLOYMENT_INFO.txt << 'DEPLOY_INFO'
🎯 DEPLOYMENT PACKAGE FOR: https://kaleidoscopic-paletas-9f9af7.netlify.app

📁 FILES INCLUDED:
- index.html (Homepage)
- assets/ (Optimized CSS, JS, images)
- sitemap.xml (34 SEO-optimized URLs)
- robots.txt (Search engine directives)
- manifest.webmanifest (PWA configuration)
- sw.js (Service Worker)
- _redirects (Netlify redirects)
- favicon.ico (Site icon)

🔧 DEPLOYMENT STEPS:
1. Go to https://app.netlify.com
2. Find site: kaleidoscopic-paletas-9f9af7
3. Go to "Deploys" tab
4. Drag ALL these files to the deploy area
5. Wait for deployment to complete

✅ VERIFICATION:
Visit: https://kaleidoscopic-paletas-9f9af7.netlify.app

🌟 Divine Digital Solutions for Godly Growth
DEPLOY_INFO

echo "✅ Deployment package created in: deployment-package/"
echo "📁 Files ready for drag & drop to Netlify"
echo "🎯 Target: https://kaleidoscopic-paletas-9f9af7.netlify.app"
echo ""
echo "📋 Next steps:"
echo "1. Go to https://app.netlify.com"
echo "2. Find your site: kaleidoscopic-paletas-9f9af7"
echo "3. Drag the deployment-package folder contents to Netlify"
echo ""
echo "🚀 Ready for deployment\!"

import fs from 'fs';
import path from 'path';

// Function to add canonical URL to a file
function addCanonicalURL(filePath, canonicalUrl) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if canonical URL already exists
    if (content.includes('rel="canonical"') || content.includes('CanonicalURL')) {
      return false; // Already has canonical URL
    }
    
    // Add import for CanonicalURL component
    const importStatement = "import { CanonicalURL } from '../../components/SEO/CanonicalURL';\n";
    
    // Find the import section and add our import
    if (\!content.includes('CanonicalURL')) {
      const importIndex = content.indexOf("import React from 'react';");
      if (importIndex \!== -1) {
        const afterFirstImport = content.indexOf('\n', importIndex) + 1;
        content = content.slice(0, afterFirstImport) + importStatement + content.slice(afterFirstImport);
      }
    }
    
    // Add canonical URL component after Helmet opening tag
    const helmetIndex = content.indexOf('<Helmet>');
    if (helmetIndex \!== -1) {
      const afterHelmet = content.indexOf('\n', helmetIndex) + 1;
      const canonicalComponent = `        <CanonicalURL canonicalUrl="${canonicalUrl}" noindex={true} />\n`;
      content = content.slice(0, afterHelmet) + canonicalComponent + content.slice(afterHelmet);
    }
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Service to canonical URL mapping
const serviceCanonicalMap = {
  'digital-marketing': 'https://courageous-daffodil-2020b6.netlify.app/services/digital-marketing/',
  'ai-automation': 'https://courageous-daffodil-2020b6.netlify.app/services/ai-automation/',
  'business-automation': 'https://courageous-daffodil-2020b6.netlify.app/services/business-automation/',
  'seo-services': 'https://courageous-daffodil-2020b6.netlify.app/services/seo-services/',
  'ppc-advertising': 'https://courageous-daffodil-2020b6.netlify.app/services/ppc-advertising/',
  'social-media-marketing': 'https://courageous-daffodil-2020b6.netlify.app/services/social-media-marketing/',
  'lead-generation': 'https://courageous-daffodil-2020b6.netlify.app/services/lead-generation/',
  'email-marketing': 'https://courageous-daffodil-2020b6.netlify.app/services/email-marketing/',
  'content-marketing': 'https://courageous-daffodil-2020b6.netlify.app/services/content-marketing/',
  'web-development': 'https://courageous-daffodil-2020b6.netlify.app/services/web-development/',
  'ecommerce-marketing': 'https://courageous-daffodil-2020b6.netlify.app/services/ecommerce-marketing/',
  'mobile-app-marketing': 'https://courageous-daffodil-2020b6.netlify.app/services/mobile-app-marketing/'
};

// Function to process all duplicate pages
function processDuplicatePages() {
  const pagesDir = './src/pages';
  let processedCount = 0;
  let totalCount = 0;
  
  function processDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        // Skip main directories like 'services', 'industries', etc.
        if (item === 'services' || item === 'industries' || item === 'locations') {
          continue;
        }
        processDirectory(itemPath);
      } else if (item.endsWith('.tsx') && item \!== 'ServicePage.jsx' && item \!== 'about.tsx' && item \!== 'contact.tsx') {
        totalCount++;
        
        // Extract service name from filename
        const serviceName = item.replace('.tsx', '');
        const canonicalUrl = serviceCanonicalMap[serviceName];
        
        if (canonicalUrl) {
          const success = addCanonicalURL(itemPath, canonicalUrl);
          if (success) {
            processedCount++;
            console.log(`✅ Added canonical URL to: ${itemPath}`);
          }
        }
      }
    }
  }
  
  processDirectory(pagesDir);
  
  console.log(`\n🎯 DUPLICATE CONTENT FIX COMPLETE:`);
  console.log(`📊 Total files processed: ${totalCount}`);
  console.log(`✅ Successfully updated: ${processedCount}`);
  console.log(`⚠️  Skipped (already had canonical): ${totalCount - processedCount}`);
}

// Run the fix
processDuplicatePages();

const fs = require('fs');
const path = require('path');

// Function to add noindex tag to a file
function addNoindexTag(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if noindex already exists
    if (content.includes('noindex') || content.includes('robots')) {
      return false; // Already has noindex
    }
    
    // Find the Helmet section and add noindex
    const helmetIndex = content.indexOf('<Helmet>');
    if (helmetIndex \!== -1) {
      const afterHelmet = content.indexOf('\n', helmetIndex) + 1;
      const noindexTag = '        <meta name="robots" content="noindex, follow" />\n';
      content = content.slice(0, afterHelmet) + noindexTag + content.slice(afterHelmet);
      
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to process all duplicate pages
function addNoindexToAllDuplicates() {
  const pagesDir = './src/pages';
  let processedCount = 0;
  let totalCount = 0;
  
  function processDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        // Skip main directories we want to keep
        if (item === 'services' || item === 'locations' || item === 'industries') {
          continue;
        }
        processDirectory(itemPath);
      } else if (item.endsWith('.tsx') && 
                 item \!== 'ServicePage.jsx' && 
                 item \!== 'about.tsx' && 
                 item \!== 'contact.tsx') {
        totalCount++;
        
        const success = addNoindexTag(itemPath);
        if (success) {
          processedCount++;
          console.log(`✅ Added noindex to: ${itemPath}`);
        }
      }
    }
  }
  
  processDirectory(pagesDir);
  
  console.log(`\n🎯 NOINDEX TAG ADDITION COMPLETE:`);
  console.log(`📊 Total files processed: ${totalCount}`);
  console.log(`✅ Successfully updated: ${processedCount}`);
  console.log(`⚠️  Skipped (already had noindex): ${totalCount - processedCount}`);
}

// Run the fix
addNoindexToAllDuplicates();

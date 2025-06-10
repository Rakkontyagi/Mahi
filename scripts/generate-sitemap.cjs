const fs = require('fs');

// Generate comprehensive sitemap for the production website
function generateSitemap() {
  const baseUrl = 'https://kaleidoscopic-paletas-9f9af7.netlify.app';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemapUrls = [
    // Homepage - Highest Priority
    {
      url: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    
    // Main Service Pages - High Priority
    {
      url: `${baseUrl}/services/digital-marketing/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: `${baseUrl}/services/ai-automation/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: `${baseUrl}/services/business-automation/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    
    // Location Hub Pages - High Priority
    {
      url: `${baseUrl}/locations/mumbai/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    
    // Industry Pages - High Priority
    {
      url: `${baseUrl}/industries/healthcare/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    
    // Company Pages - Medium Priority
    {
      url: `${baseUrl}/about/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/contact/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    }
  ];
  
  // Generate XML sitemap
  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  sitemapUrls.forEach(item => {
    sitemapXml += `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>
`;
  });

  sitemapXml += `</urlset>`;
  
  // Write sitemap to public directory
  if (!fs.existsSync('./public')) {
    fs.mkdirSync('./public', { recursive: true });
  }
  
  fs.writeFileSync('./public/sitemap.xml', sitemapXml);
  
  console.log('✅ Production sitemap generated successfully!');
  console.log(`📊 Total URLs: ${sitemapUrls.length}`);
  console.log('🎯 Domain: https://kaleidoscopic-paletas-9f9af7.netlify.app');
}

// Generate robots.txt for production
function generateRobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /

# High-priority pages for crawling
Allow: /services/
Allow: /locations/
Allow: /industries/
Allow: /about/
Allow: /contact/

# Block admin and development files
Disallow: /admin/
Disallow: /.env
Disallow: /config/
Disallow: /node_modules/
Disallow: /src/
Disallow: /.git/

# Allow important files
Allow: /robots.txt
Allow: /sitemap.xml
Allow: /favicon.ico

# Sitemap location
Sitemap: https://kaleidoscopic-paletas-9f9af7.netlify.app/sitemap.xml

# Crawl delay for respectful crawling
Crawl-delay: 1
`;

  if (!fs.existsSync('./public')) {
    fs.mkdirSync('./public', { recursive: true });
  }

  fs.writeFileSync('./public/robots.txt', robotsTxt);
  console.log('✅ Production robots.txt generated successfully!');
}

// Generate both files
try {
  generateSitemap();
  generateRobotsTxt();
  console.log('\n🎯 SEO OPTIMIZATION COMPLETE FOR NETLIFY BUILD');
} catch (error) {
  console.error('Error generating SEO files:', error);
  process.exit(1);
}

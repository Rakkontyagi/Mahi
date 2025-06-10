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
    {
      url: `${baseUrl}/services/seo-services/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: `${baseUrl}/services/ppc-advertising/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: `${baseUrl}/services/social-media-marketing/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: `${baseUrl}/services/content-marketing/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/services/email-marketing/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    
    // Location Hub Pages - High Priority
    {
      url: `${baseUrl}/locations/mumbai/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/locations/delhi/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/locations/bangalore/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/locations/chennai/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/locations/hyderabad/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/locations/pune/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/locations/kolkata/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/locations/ahmedabad/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/locations/jaipur/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/locations/lucknow/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    
    // Industry Pages - High Priority
    {
      url: `${baseUrl}/industries/healthcare/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/industries/real-estate/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/industries/ecommerce/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/industries/education/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/industries/manufacturing/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/industries/technology/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/industries/financial-services/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/industries/entertainment/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/industries/automotive/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/industries/hospitality/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
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
    },
    
    // Legal Pages - Lower Priority
    {
      url: `${baseUrl}/privacy-policy/`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.3'
    },
    {
      url: `${baseUrl}/terms-of-service/`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.3'
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
  fs.writeFileSync('./public/sitemap.xml', sitemapXml);
  
  console.log('✅ Production sitemap generated successfully\!');
  console.log(`📊 Total URLs: ${sitemapUrls.length}`);
  console.log('🎯 Domain: https://kaleidoscopic-paletas-9f9af7.netlify.app');
  console.log('📍 Location: ./public/sitemap.xml');
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

# Block duplicate content patterns (if any exist)
Disallow: /*?*
Disallow: /search/
Disallow: /tag/
Disallow: /category/

# Allow important files
Allow: /robots.txt
Allow: /sitemap.xml
Allow: /favicon.ico

# Sitemap location
Sitemap: https://kaleidoscopic-paletas-9f9af7.netlify.app/sitemap.xml

# Crawl delay for respectful crawling
Crawl-delay: 1
`;

  fs.writeFileSync('./public/robots.txt', robotsTxt);
  console.log('✅ Production robots.txt generated successfully\!');
}

// Generate both files
generateSitemap();
generateRobotsTxt();

console.log('\n🎯 PRODUCTION SEO OPTIMIZATION COMPLETE:');
console.log('✅ Sitemap configured for https://kaleidoscopic-paletas-9f9af7.netlify.app');
console.log('✅ Robots.txt with production domain');
console.log('✅ Ready for deployment to your Netlify site');

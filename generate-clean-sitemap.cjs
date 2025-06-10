const fs = require('fs');

// Generate clean sitemap without duplicate content
function generateCleanSitemap() {
  const baseUrl = 'https://courageous-daffodil-2020b6.netlify.app';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemapUrls = [
    // Homepage
    {
      url: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    
    // Main Service Pages (High Priority)
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
      url: `${baseUrl}/services/lead-generation/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: `${baseUrl}/services/email-marketing/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    
    // Location Hub Pages (Medium Priority)
    {
      url: `${baseUrl}/locations/mumbai/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/locations/bangalore/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/locations/chennai/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/locations/delhi/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/locations/hyderabad/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    
    // Industry Pages (Medium Priority)
    {
      url: `${baseUrl}/industries/healthcare/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/industries/real-estate/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/industries/ecommerce/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/industries/education/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/industries/manufacturing/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    
    // Static Pages (Lower Priority)
    {
      url: `${baseUrl}/about/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6'
    },
    {
      url: `${baseUrl}/contact/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6'
    },
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
  
  console.log('✅ Clean sitemap generated successfully\!');
  console.log(`📊 Total URLs: ${sitemapUrls.length}`);
  console.log('🚫 Excluded: 3700+ duplicate city-service combinations');
  console.log('📍 Location: ./public/sitemap.xml');
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /

# Block duplicate content pages
Disallow: /*/digital-marketing/
Disallow: /*/ai-automation/
Disallow: /*/business-automation/
Disallow: /*/seo-services/
Disallow: /*/ppc-advertising/
Disallow: /*/social-media-marketing/
Disallow: /*/industries/*/

# Allow main service and location pages
Allow: /services/
Allow: /locations/
Allow: /industries/

Sitemap: https://courageous-daffodil-2020b6.netlify.app/sitemap.xml
`;

  fs.writeFileSync('./public/robots.txt', robotsTxt);
  console.log('✅ Robots.txt generated successfully\!');
}

// Run the generators
generateCleanSitemap();
generateRobotsTxt();

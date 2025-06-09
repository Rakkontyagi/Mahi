import { generateSitemap, generateRobotsTxt } from '../src/utils/sitemapGenerator.js';
import { allIndianLocations, comprehensiveServices, comprehensiveIndustries } from '../src/data/comprehensiveLocations.js';
import { allCaseStudies } from '../src/data/caseStudies.js';

const BASE_URL = 'https://goddigitalmarketing.com';

// Generate service routes
const serviceRoutes = comprehensiveServices.flatMap(service => {
  const main = [{
    path: `/services/${service.slug}`,
    priority: '0.9',
    changefreq: 'weekly'
  }];
  const sub = (service.subServices || []).map(sub => ({
    path: `/services/${sub.slug}`,
    priority: '0.8',
    changefreq: 'monthly'
  }));
  return [...main, ...sub];
});

// Generate location routes
const locationRoutes = allIndianLocations.flatMap(state =>
  state.cities.map(city => ({
    path: `/locations/${city.slug}`,
    priority: '0.8',
    changefreq: 'monthly'
  }))
);

// Generate industry routes
const industryRoutes = comprehensiveIndustries.map(ind => ({
  path: `/industries/${ind.slug}`,
  priority: '0.8',
  changefreq: 'monthly'
}));

// Generate case study routes
const caseStudyRoutes = allCaseStudies.map(cs => ({
  path: `/case-studies/${cs.id}`,
  priority: '0.7',
  changefreq: 'monthly'
}));

// Static routes
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'daily' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' }
];

// Combine all routes
const routes = [
  ...staticRoutes,
  ...serviceRoutes,
  ...locationRoutes,
  ...industryRoutes,
  ...caseStudyRoutes
];

// Generate sitemap and robots.txt
generateSitemap(routes);
generateRobotsTxt();

console.log('Sitemap and robots.txt generated successfully!'); 
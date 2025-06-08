import { allIndianLocations, comprehensiveServices, comprehensiveIndustries } from '../data/comprehensiveLocations';

export interface GeneratedPage {
  url: string;
  title: string;
  component: string;
  props: any;
  priority: 1 | 2 | 3;
}

export const generateAllPages = (): GeneratedPage[] => {
  const pages: GeneratedPage[] = [];

  // 1. Service Hub Pages (12 pages)
  comprehensiveServices.forEach(service => {
    pages.push({
      url: `/${service.slug}/`,
      title: `${service.name} | God Digital Marketing`,
      component: 'ServiceHubPage',
      props: { service },
      priority: 1
    });
  });

  // 2. Industry Hub Pages (15 pages)
  comprehensiveIndustries.forEach(industry => {
    pages.push({
      url: `/${industry.slug}/`,
      title: `${industry.name} Digital Marketing | God Digital Marketing`,
      component: 'IndustryHubPage',
      props: { industry },
      priority: 1
    });
  });

  // 3. State Hub Pages (10 states × 1 = 10 pages)
  allIndianLocations.forEach(state => {
    pages.push({
      url: `/locations/${state.stateSlug}/`,
      title: `Digital Marketing Services in ${state.state} | God Digital Marketing`,
      component: 'StateLocationPage',
      props: { state, services: comprehensiveServices },
      priority: 1
    });
  });

  // 4. Service × Location Pages (12 services × 10 states × 8 avg cities = 960 pages)
  comprehensiveServices.forEach(service => {
    allIndianLocations.forEach(state => {
      state.cities.forEach(city => {
        const location = {
          city: city.name,
          state: state.state,
          citySlug: city.slug,
          stateSlug: state.stateSlug,
          population: city.population,
          isMetro: city.isMetro,
          industries: city.industries,
          tier: city.tier
        };

        // Generate related services for cross-linking
        const relatedServices = comprehensiveServices
          .filter(s => s.slug !== service.slug)
          .slice(0, 6)
          .map(s => ({
            name: s.name,
            slug: s.slug,
            url: `/${s.slug}/${state.stateSlug}/${city.slug}/`
          }));

        // Generate nearby locations for cross-linking
        const nearbyLocations = state.cities
          .filter(c => c.slug !== city.slug)
          .slice(0, 8)
          .map(c => ({
            city: c.name,
            citySlug: c.slug,
            stateSlug: state.stateSlug,
            url: `/${service.slug}/${state.stateSlug}/${c.slug}/`
          }));

        pages.push({
          url: `/${service.slug}/${state.stateSlug}/${city.slug}/`,
          title: `${service.name} in ${city.name}, ${state.state} | God Digital Marketing`,
          component: 'ServiceLocationTemplate',
          props: { 
            service, 
            location,
            relatedServices,
            nearbyLocations
          },
          priority: city.tier
        });
      });
    });
  });

  // 5. Sub-Service × Location Pages (36 sub-services × 10 states × 5 major cities = 1800 pages)
  comprehensiveServices.forEach(service => {
    if (service.subServices && service.subServices.length > 0) {
      service.subServices.forEach(subService => {
        allIndianLocations.forEach(state => {
          // Only generate for tier 1 and tier 2 cities for sub-services
          state.cities.filter(city => city.tier <= 2).forEach(city => {
            const location = {
              city: city.name,
              state: state.state,
              citySlug: city.slug,
              stateSlug: state.stateSlug,
              population: city.population,
              isMetro: city.isMetro,
              industries: city.industries,
              tier: city.tier
            };

            const subServiceData = {
              name: subService.name,
              slug: subService.slug,
              description: `Professional ${subService.name.toLowerCase()} services`,
              keywords: [subService.slug, subService.name.toLowerCase()],
              subServices: []
            };

            pages.push({
              url: `/${subService.slug}/${state.stateSlug}/${city.slug}/`,
              title: `${subService.name} in ${city.name}, ${state.state} | God Digital Marketing`,
              component: 'ServiceLocationTemplate',
              props: { 
                service: subServiceData, 
                location,
                relatedServices: [],
                nearbyLocations: []
              },
              priority: city.tier
            });
          });
        });
      });
    }
  });

  // 6. Industry × Service Pages (15 industries × 4 main services = 60 pages)
  comprehensiveIndustries.forEach(industry => {
    comprehensiveServices.slice(0, 4).forEach(service => { // Only main services
      pages.push({
        url: `/${service.slug}/${industry.slug}/`,
        title: `${service.name} for ${industry.name} | God Digital Marketing`,
        component: 'IndustryLocationTemplate',
        props: { industry, service },
        priority: 2
      });
    });
  });

  // 7. Industry × Service × Location Pages (15 industries × 4 services × 10 states × 3 major cities = 1800 pages)
  comprehensiveIndustries.forEach(industry => {
    comprehensiveServices.slice(0, 4).forEach(service => {
      allIndianLocations.forEach(state => {
        // Only tier 1 cities for industry-specific pages
        state.cities.filter(city => city.tier === 1).forEach(city => {
          const location = {
            city: city.name,
            state: state.state,
            citySlug: city.slug,
            stateSlug: state.stateSlug
          };

          pages.push({
            url: `/${service.slug}/${industry.slug}/${state.stateSlug}/${city.slug}/`,
            title: `${service.name} for ${industry.name} in ${city.name}, ${state.state} | God Digital Marketing`,
            component: 'IndustryLocationTemplate',
            props: { industry, service, location },
            priority: 3
          });
        });
      });
    });
  });

  return pages;
};

export const getPagesByPriority = (priority: 1 | 2 | 3): GeneratedPage[] => {
  return generateAllPages().filter(page => page.priority === priority);
};

export const getTotalPageCount = (): number => {
  return generateAllPages().length;
};

// Generate sitemap data
export const generateSitemap = (): string => {
  const pages = generateAllPages();
  const baseUrl = 'https://goddigitalmarketing.com';
  
  const urls = pages.map(page => {
    const priority = page.priority === 1 ? '1.0' : page.priority === 2 ? '0.8' : '0.6';
    const changefreq = page.priority === 1 ? 'weekly' : page.priority === 2 ? 'monthly' : 'monthly';
    
    return `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
};
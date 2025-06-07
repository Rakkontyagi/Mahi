// SEO utilities for location-based pages
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  structuredData: any;
}

export const generateServiceLocationSEO = (
  service: { name: string; slug: string; keywords: string[] },
  location: { city: string; state: string; citySlug: string; stateSlug: string }
): SEOData => {
  const title = `${service.name} in ${location.city}, ${location.state} | God Digital Marketing`;
  const description = `Professional ${service.name.toLowerCase()} in ${location.city}, ${location.state}. Proven results with expert strategies. Contact our ${location.city} team for ${service.slug.replace('-', ' ')} solutions.`;
  
  const keywords = [
    `${service.slug} ${location.citySlug}`,
    `${service.slug} ${location.city}`,
    `${service.name.toLowerCase()} ${location.city}`,
    `${service.name.toLowerCase()} ${location.state}`,
    ...service.keywords.map(keyword => `${keyword} ${location.city}`),
    ...service.keywords.map(keyword => `${keyword} ${location.state}`),
    `digital marketing ${location.city}`,
    `marketing agency ${location.city}`,
    `${location.city} ${service.slug}`,
    `best ${service.slug} ${location.city}`
  ];

  const canonicalUrl = `https://goddigitalmarketing.com/${service.slug}/${location.stateSlug}/${location.citySlug}/`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `God Digital Marketing - ${service.name} ${location.city}`,
    "description": description,
    "url": canonicalUrl,
    "telephone": "+91-9999999999",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.city,
      "addressRegion": location.state,
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139", // Default to Delhi coordinates
      "longitude": "77.2090"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "28.6139",
        "longitude": "77.2090"
      },
      "geoRadius": "50000"
    },
    "services": [
      {
        "@type": "Service",
        "name": service.name,
        "description": `Professional ${service.name.toLowerCase()} services in ${location.city}`,
        "provider": {
          "@type": "Organization",
          "name": "God Digital Marketing"
        }
      }
    ]
  };

  return {
    title,
    description,
    keywords,
    canonicalUrl,
    structuredData
  };
};

export const generateStateLocationSEO = (
  state: { name: string; slug: string; cities: any[] }
): SEOData => {
  const title = `Digital Marketing Services in ${state.name} | God Digital Marketing`;
  const description = `Comprehensive digital marketing services across ${state.name}. Expert solutions in ${state.cities.length}+ cities including major metros. Proven results for ${state.name} businesses.`;
  
  const keywords = [
    `digital marketing ${state.name}`,
    `digital marketing services ${state.name}`,
    `marketing agency ${state.name}`,
    `${state.name} digital marketing`,
    `best digital marketing ${state.name}`,
    `online marketing ${state.name}`,
    `internet marketing ${state.name}`,
    `digital advertising ${state.name}`,
    ...state.cities.slice(0, 10).map(city => `digital marketing ${city.name}`),
    ...state.cities.slice(0, 10).map(city => `marketing agency ${city.name}`)
  ];

  const canonicalUrl = `https://goddigitalmarketing.com/locations/${state.slug}/`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": `God Digital Marketing - ${state.name}`,
    "description": description,
    "url": canonicalUrl,
    "telephone": "+91-9999999999",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": state.name,
      "addressCountry": "India"
    },
    "serviceArea": {
      "@type": "State",
      "name": state.name
    },
    "services": [
      "Digital Marketing",
      "AI Automation",
      "Lead Generation",
      "Social Media Management",
      "Email Marketing"
    ]
  };

  return {
    title,
    description,
    keywords,
    canonicalUrl,
    structuredData
  };
};

export const generateInternalLinks = (
  currentService: string,
  currentLocation: { city: string; state: string; citySlug: string; stateSlug: string },
  allServices: any[],
  nearbyLocations: any[]
) => {
  const links = [];

  // Service cross-links
  allServices.forEach(service => {
    if (service.slug !== currentService) {
      links.push({
        url: `/${service.slug}/${currentLocation.stateSlug}/${currentLocation.citySlug}/`,
        anchor: `${service.name} in ${currentLocation.city}`,
        title: `Professional ${service.name.toLowerCase()} services in ${currentLocation.city}`
      });
    }
  });

  // Location cross-links
  nearbyLocations.forEach(location => {
    links.push({
      url: `/${currentService}/${location.stateSlug}/${location.citySlug}/`,
      anchor: `${currentService.replace('-', ' ')} in ${location.city}`,
      title: `${currentService.replace('-', ' ')} services in ${location.city}`
    });
  });

  // State-level link
  links.push({
    url: `/locations/${currentLocation.stateSlug}/`,
    anchor: `All services in ${currentLocation.state}`,
    title: `Complete digital marketing services across ${currentLocation.state}`
  });

  return links;
};

export const generateBreadcrumbs = (
  service?: { name: string; slug: string },
  location?: { city: string; state: string; citySlug: string; stateSlug: string }
) => {
  const breadcrumbs = [
    { name: "Home", url: "/" }
  ];

  if (service && location) {
    breadcrumbs.push(
      { name: "Services", url: "/services/" },
      { name: service.name, url: `/${service.slug}/` },
      { name: location.state, url: `/locations/${location.stateSlug}/` },
      { name: location.city, url: `/${service.slug}/${location.stateSlug}/${location.citySlug}/` }
    );
  } else if (location) {
    breadcrumbs.push(
      { name: "Locations", url: "/locations/" },
      { name: location.state, url: `/locations/${location.stateSlug}/` }
    );
    if (location.city) {
      breadcrumbs.push(
        { name: location.city, url: `/locations/${location.stateSlug}/${location.citySlug}/` }
      );
    }
  } else if (service) {
    breadcrumbs.push(
      { name: "Services", url: "/services/" },
      { name: service.name, url: `/${service.slug}/` }
    );
  }

  return breadcrumbs;
};
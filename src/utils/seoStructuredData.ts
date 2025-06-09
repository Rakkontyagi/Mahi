// Utility functions for generating JSON-LD structured data for SEO

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'God Digital Marketing',
    url: 'https://goddigitalmarketing.com',
    logo: 'https://goddigitalmarketing.com/logo.png',
    sameAs: [
      'https://www.facebook.com/goddigitalmarketing',
      'https://www.linkedin.com/company/goddigitalmarketing',
      'https://twitter.com/goddigitalmktg'
    ],
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: '+91-9999999999',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi']
    }]
  };
}

export function getServiceSchema({ name, description, provider, areaServed, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider || 'God Digital Marketing',
      url: 'https://goddigitalmarketing.com'
    },
    areaServed: areaServed || 'India',
    url
  };
}

export function getLocalBusinessSchema({ name, address, geo, url, telephone }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    image: 'https://goddigitalmarketing.com/logo.png',
    '@id': url,
    url,
    telephone,
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    geo: geo && {
      '@type': 'GeoCoordinates',
      ...geo
    }
  };
}

export function getArticleSchema({ title, description, url, image, author, datePublished, dateModified }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    image,
    author: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: 'God Digital Marketing',
      logo: {
        '@type': 'ImageObject',
        url: 'https://goddigitalmarketing.com/logo.png'
      }
    },
    datePublished,
    dateModified
  };
}

export function getBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.title,
      item: crumb.url
    }))
  };
}

export function getCaseStudySchema({ title, description, url, image, client, industry, location, services }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description,
    url,
    image,
    about: {
      '@type': 'Organization',
      name: client
    },
    industry,
    location,
    service: services
  };
} 

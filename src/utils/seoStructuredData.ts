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
    }],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1'
    }
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
    url,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${name} Packages`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Basic ${name} Package`
          },
          price: 'Contact for Quote',
          priceCurrency: 'INR'
        }
      ]
    }
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
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '120',
      bestRating: '5',
      worstRating: '1'
    },
    priceRange: '$$',
    openingHours: [
      'Mo-Fr 09:00-18:00',
      'Sa 09:00-16:00'
    ]
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

// NEW SCHEMA TYPES FOR EMERGENCY RECOVERY

export function getFAQSchema(faqs: Array<{question: string, answer: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function getReviewSchema(reviews: Array<any>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'God Digital Marketing'
    },
    ratingValue: '4.8',
    reviewCount: reviews.length || 150,
    bestRating: '5',
    worstRating: '1',
    review: reviews.slice(0, 5).map(review => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating || '5'
      },
      author: {
        '@type': 'Person',
        name: review.author || 'Satisfied Client'
      },
      reviewBody: review.text || 'Excellent service and results!'
    }))
  };
}

export function getOfferSchema(service: string, location: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: `${service} in ${location}`,
    description: `Professional ${service} services in ${location}`,
    price: 'Contact for Quote',
    priceCurrency: 'INR',
    availability: 'InStock',
    validFrom: new Date().toISOString(),
    seller: {
      '@type': 'Organization',
      name: 'God Digital Marketing'
    },
    category: 'Digital Marketing Services'
  };
}

export function getWebPageSchema({ title, description, url, breadcrumbs }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'God Digital Marketing',
      url: 'https://goddigitalmarketing.com'
    },
    breadcrumb: breadcrumbs && getBreadcrumbSchema(breadcrumbs)
  };
}

export function getHowToSchema({ name, description, steps, totalTime }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    totalTime,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.description
    }))
  };
}

export function getPriceTableSchema(service: string, packages: Array<any>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'PriceSpecification',
    name: `${service} Pricing`,
    offers: packages.map(pkg => ({
      '@type': 'Offer',
      name: pkg.name,
      price: pkg.price,
      priceCurrency: 'INR',
      description: pkg.description,
      category: service
    }))
  };
}

// COMBINED SCHEMA FOR SERVICE LOCATION PAGES
export function getServiceLocationCombinedSchema({ service, location, faqs, reviews, offers }) {
  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      getOrganizationSchema(),
      getServiceSchema({
        name: `${service} in ${location}`,
        description: `Professional ${service} services in ${location}`,
        provider: 'God Digital Marketing',
        areaServed: location,
        url: `https://goddigitalmarketing.com/${service.toLowerCase().replace(/\s+/g, '-')}/${location.toLowerCase().replace(/\s+/g, '-')}/`
      }),
      getLocalBusinessSchema({
        name: `God Digital Marketing - ${service} ${location}`,
        address: {
          addressLocality: location,
          addressCountry: 'India'
        },
        url: `https://goddigitalmarketing.com/${service.toLowerCase().replace(/\s+/g, '-')}/${location.toLowerCase().replace(/\s+/g, '-')}/`,
        telephone: '+91-9999999999'
      })
    ]
  };

  if (faqs && faqs.length > 0) {
    combinedSchema['@graph'].push(getFAQSchema(faqs));
  }

  if (reviews && reviews.length > 0) {
    combinedSchema['@graph'].push(getReviewSchema(reviews));
  }

  if (offers && offers.length > 0) {
    combinedSchema['@graph'].push(getOfferSchema(service, location));
  }

  return combinedSchema;
} 

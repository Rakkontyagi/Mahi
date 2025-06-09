import React from "react";
import { ServiceLocationTemplate } from "../components/Templates/ServiceLocationTemplate";
import { getServiceSchema, getBreadcrumbSchema } from '../../utils/seoStructuredData.js';
import { SEOHead } from '../../components/SEOHead';

const serviceData = {
  "name": "SEO Services",
  "slug": "seo-services",
  "description": "Search engine optimization for higher Google rankings."
};

const canonicalUrl = "https://goddigitalmarketing.com/services/seo-services/";
const breadcrumbs = [
  { title: 'Home', url: 'https://goddigitalmarketing.com/' },
  { title: 'Services', url: 'https://goddigitalmarketing.com/services/' },
  { title: 'SEO Services', url: canonicalUrl }
];

export default function SEOServicesMainPage() {
  return (
    <>
      <SEOHead
        title="SEO Services in India | God Digital"
        description="Rank #1 on Google with India's top SEO Services agency. Proven strategies, technical SEO, and local expertise for every city and industry."
        keywords={["seo services", "search engine optimization", "google ranking India", "technical seo", "local seo India"]}
        canonicalUrl={canonicalUrl}
        structuredData={[
          getServiceSchema({
            name: 'SEO Services',
            description: 'Rank #1 on Google with India\'s top SEO Services agency. Proven strategies, technical SEO, and local expertise for every city and industry.',
            provider: 'God Digital',
            areaServed: 'India',
            url: canonicalUrl
          }),
          getBreadcrumbSchema(breadcrumbs)
        ]}
      />
      <ServiceLocationTemplate
        service={serviceData}
        location={null}
        relatedServices={[]}
        nearbyLocations={[]}
      />
    </>
  );
}

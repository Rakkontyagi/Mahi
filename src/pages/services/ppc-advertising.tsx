import React from "react";
import { ServiceLocationTemplate } from "../components/Templates/ServiceLocationTemplate";
import { getServiceSchema, getBreadcrumbSchema } from '../../utils/seoStructuredData.js';
import { SEOHead } from '../../components/SEOHead';

const serviceData = {
  "name": "PPC Advertising",
  "slug": "ppc-advertising",
  "description": "Pay-per-click campaigns for instant traffic."
};

const canonicalUrl = "https://goddigitalmarketing.com/services/ppc-advertising/";
const breadcrumbs = [
  { title: 'Home', url: 'https://goddigitalmarketing.com/' },
  { title: 'Services', url: 'https://goddigitalmarketing.com/services/' },
  { title: 'PPC Advertising', url: canonicalUrl }
];

export default function PPCAdvertisingMainPage() {
  return (
    <>
      <SEOHead
        title="PPC Advertising Services in India | God Digital"
        description="Maximize ROI with India's top PPC Advertising agency. Google Ads, Bing Ads, and paid campaigns for every industry and city."
        keywords={["ppc advertising", "google ads", "bing ads", "paid search India", "pay per click marketing"]}
        canonicalUrl={canonicalUrl}
        structuredData={[
          getServiceSchema({
            name: 'PPC Advertising',
            description: 'Maximize ROI with India\'s top PPC Advertising agency. Google Ads, Bing Ads, and paid campaigns for every industry and city.',
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

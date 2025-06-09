import React from "react";
import { ServiceLocationTemplate } from "../../components/Templates/ServiceLocationTemplate";

const cityData = {
  "name": "New Delhi",
  "slug": "new-delhi",
  "population": 16787941,
  "isMetro": true,
  "tier": 1,
  "industries": [
    "government",
    "technology",
    "finance",
    "tourism"
  ]
};
const serviceData = {
  ...{
  "name": "SEO Services",
  "slug": "seo-services",
  "description": "Search engine optimization for higher Google rankings."
},
  keywords: [
  "SEO Services in New Delhi",
  "best seo services New Delhi",
  "seo services agency New Delhi",
  "digital marketing New Delhi"
]
};

const relatedServices = [];
const nearbyLocations = [];

export default function SEOServicesNewDelhiPage() {
  return (
    <ServiceLocationTemplate
      service={serviceData}
      location={cityData}
      relatedServices={relatedServices}
      nearbyLocations={nearbyLocations}
    />
  );
}

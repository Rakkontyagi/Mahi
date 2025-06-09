import React from "react";
import { ServiceLocationTemplate } from "../../components/Templates/ServiceLocationTemplate";

const cityData = {
  "name": "Mumbai",
  "slug": "mumbai",
  "population": 12442373,
  "isMetro": true,
  "tier": 1,
  "industries": [
    "finance",
    "entertainment",
    "technology",
    "manufacturing"
  ]
};
const serviceData = {
  ...{
  "name": "SEO Services",
  "slug": "seo-services",
  "description": "Search engine optimization for higher Google rankings."
},
  keywords: [
  "SEO Services in Mumbai",
  "best seo services Mumbai",
  "seo services agency Mumbai",
  "digital marketing Mumbai"
]
};

const relatedServices = [];
const nearbyLocations = [];

export default function SEOServicesMumbaiPage() {
  return (
    <ServiceLocationTemplate
      service={serviceData}
      location={cityData}
      relatedServices={relatedServices}
      nearbyLocations={nearbyLocations}
    />
  );
}

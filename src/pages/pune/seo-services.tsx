import React from "react";
import { ServiceLocationTemplate } from "../../components/Templates/ServiceLocationTemplate";

const cityData = {
  "name": "Pune",
  "slug": "pune",
  "population": 3124458,
  "isMetro": true,
  "tier": 1,
  "industries": [
    "technology",
    "automotive",
    "education",
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
  "SEO Services in Pune",
  "best seo services Pune",
  "seo services agency Pune",
  "digital marketing Pune"
]
};

const relatedServices = [];
const nearbyLocations = [];

export default function SEOServicesPunePage() {
  return (
    <ServiceLocationTemplate
      service={serviceData}
      location={cityData}
      relatedServices={relatedServices}
      nearbyLocations={nearbyLocations}
    />
  );
}

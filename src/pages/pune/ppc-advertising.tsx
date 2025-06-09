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
  "name": "PPC Advertising",
  "slug": "ppc-advertising",
  "description": "Pay-per-click campaigns for instant traffic."
},
  keywords: [
  "PPC Advertising in Pune",
  "best ppc advertising Pune",
  "ppc advertising agency Pune",
  "digital marketing Pune"
]
};

const relatedServices = [];
const nearbyLocations = [];

export default function PPCAdvertisingPunePage() {
  return (
    <ServiceLocationTemplate
      service={serviceData}
      location={cityData}
      relatedServices={relatedServices}
      nearbyLocations={nearbyLocations}
    />
  );
}

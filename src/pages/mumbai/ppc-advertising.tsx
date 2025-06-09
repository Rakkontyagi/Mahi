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
  "name": "PPC Advertising",
  "slug": "ppc-advertising",
  "description": "Pay-per-click campaigns for instant traffic."
},
  keywords: [
  "PPC Advertising in Mumbai",
  "best ppc advertising Mumbai",
  "ppc advertising agency Mumbai",
  "digital marketing Mumbai"
]
};

const relatedServices = [];
const nearbyLocations = [];

export default function PPCAdvertisingMumbaiPage() {
  return (
    <ServiceLocationTemplate
      service={serviceData}
      location={cityData}
      relatedServices={relatedServices}
      nearbyLocations={nearbyLocations}
    />
  );
}

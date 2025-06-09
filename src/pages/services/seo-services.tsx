import React from "react";
import { ServiceLocationTemplate } from "../components/Templates/ServiceLocationTemplate";

const serviceData = {
  "name": "SEO Services",
  "slug": "seo-services",
  "description": "Search engine optimization for higher Google rankings."
};

export default function SEOServicesMainPage() {
  return (
    <ServiceLocationTemplate
      service={serviceData}
      location={null}
      relatedServices={[]}
      nearbyLocations={[]}
    />
  );
}

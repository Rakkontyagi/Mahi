import React from "react";
import { ServiceLocationTemplate } from "../components/Templates/ServiceLocationTemplate";

const serviceData = {
  "name": "PPC Advertising",
  "slug": "ppc-advertising",
  "description": "Pay-per-click campaigns for instant traffic."
};

export default function PPCAdvertisingMainPage() {
  return (
    <ServiceLocationTemplate
      service={serviceData}
      location={null}
      relatedServices={[]}
      nearbyLocations={[]}
    />
  );
}

import React from 'react';
import SEOHead from '../SEO/SEOHead';
import { ComprehensiveServiceData } from '../../data/comprehensiveLocations'; // Updated import

// Basic Prop Interfaces
// ServiceProps is now replaced by ComprehensiveServiceData for the service prop
interface BusinessTypeProps {
  name: string;
  slug: string;
}

interface LocationProps {
  city: string;
  state: string;
  citySlug: string;
  stateSlug: string;
}

interface ServiceCostPageTemplateProps {
  service: ComprehensiveServiceData; // Updated to use ComprehensiveServiceData
  businessType: BusinessTypeProps;
  location: LocationProps;
}

const ServiceCostPageTemplate: React.FC<ServiceCostPageTemplateProps> = ({
  service,
  businessType,
  location,
}) => {
  const costInfo = service.costInformation;
  const specificCostDetail = costInfo?.businessTypeSpecificCosts.find(
    detail => detail.businessTypeSlug === businessType.slug
  );

  const title = `${service.name} Cost for ${businessType.name} in ${location.city}, ${location.state} | God Digital Marketing`;
  const description = `Find out the estimated cost for ${service.name} for ${businessType.name} in ${location.city}, ${location.state}. Get insights on pricing factors and ROI.`;
  const keywords = [
    `${service.slug} cost`,
    `${businessType.slug} ${service.slug} price ${location.citySlug}`,
    `${service.name} pricing ${businessType.name}`,
    `cost of ${service.slug} for ${businessType.slug} in ${location.city}`,
    `${location.city} ${service.name} for ${businessType.name} cost`,
  ].join(', ');

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
      />
      <div className="container mx-auto p-4 font-sans">
        {/* Hero Section */}
        <section className="my-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {service.name} Cost for {businessType.name} in {location.city}, {location.state}
          </h1>
          <p className="text-lg text-gray-700">
            Understanding the investment required for {service.name} is crucial for your {businessType.name}. This guide provides insights into pricing factors and potential costs in {location.city}.
          </p>
        </section>

        {/* Factors Influencing Cost Section */}
        <section className="my-12 p-6 bg-gray-50 rounded-lg shadow">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Factors Influencing {service.name} Cost for {businessType.name}
          </h2>
          <p className="mb-6 text-center text-gray-600">
            The cost of {service.name} can vary based on several factors specific to your {businessType.name}'s needs in {location.city}.
          </p>
          {!costInfo && (
            <p className="text-center text-gray-600">Detailed cost information for {service.name} is tailored to each business. Please contact us for a personalized quote.</p>
          )}
          {costInfo?.generalFactors && costInfo.generalFactors.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">General Considerations:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 max-w-xl mx-auto">
                {costInfo.generalFactors.map((factor, index) => <li key={`gen-${index}`}>{factor}</li>)}
              </ul>
            </div>
          )}
          {specificCostDetail?.factors && specificCostDetail.factors.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Specific Factors for a {businessType.name}:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 max-w-xl mx-auto">
                {specificCostDetail.factors.map((factor, index) => <li key={`spec-${index}`}>{factor}</li>)}
              </ul>
            </div>
          )}
          {costInfo && !(costInfo.generalFactors && costInfo.generalFactors.length > 0) && !(specificCostDetail?.factors && specificCostDetail.factors.length > 0) && (
             <p className="text-center text-gray-600">Key cost factors will be discussed during your consultation.</p>
          )}
        </section>

        {/* Estimated Cost Ranges Section */}
        <section className="my-12 p-6">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Estimated Cost Ranges for {businessType.name} in {location.city}
          </h2>

          {!costInfo || !specificCostDetail || !specificCostDetail.costTiers || specificCostDetail.costTiers.length === 0 ? (
            <p className="text-center text-gray-600">
              Detailed pricing packages for {businessType.name} are customized. Please contact us for a consultation for {service.name} in {location.city}.
            </p>
          ) : (
            <>
              <p className="mb-8 text-center text-gray-600">
                While a precise quote requires a detailed consultation, here are some general cost estimations for {service.name} for a {businessType.name} in {location.city}:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specificCostDetail.costTiers.map((tier, index) => (
                  <div key={`tier-${index}`} className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2 text-blue-700">{tier.name}</h3>
                    <p className="text-2xl font-bold my-3 text-gray-800">{tier.range}</p>
                    <h4 className="text-md font-semibold mt-3 mb-1 text-gray-600">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 pl-2">
                      {tier.features.map((feature, fIndex) => <li key={`feat-${fIndex}`}>{feature}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-center text-gray-500">
                <strong>Disclaimer:</strong> These are indicative ranges and can change based on your specific requirements, project scope, and the service provider chosen.
              </p>
            </>
          )}
        </section>

        {/* ROI/Value Proposition Section */}
        <section className="my-12 p-6 bg-blue-50 rounded-lg shadow">
          <h2 className="text-3xl font-semibold mb-6 text-center text-blue-800">
            Value and ROI of {service.name} for Your {businessType.name}
          </h2>
          {specificCostDetail?.roiNotes ? (
            <p className="text-center text-gray-700 max-w-3xl mx-auto">{specificCostDetail.roiNotes}</p>
          ) : (
            <p className="text-center text-gray-700 max-w-3xl mx-auto">
              Investing in {service.name} can offer significant returns for your {businessType.name} by improving efficiency, increasing customer engagement, automating key processes, and providing actionable data insights. A well-implemented {service.name} strategy can lead to higher conversion rates and a stronger market position in {location.city}. Specific ROI benefits will be outlined in your custom proposal.
            </p>
          )}
        </section>

        {/* Call to Action Section */}
        <section className="my-12 py-10 text-center bg-gray-100 rounded-lg shadow-inner">
          <h2 className="text-3xl font-semibold mb-4">
            Get a Custom Quote for Your {businessType.name} in {location.city}
          </h2>
          <p className="mb-8 text-lg text-gray-700 max-w-2xl mx-auto">
            Ready to understand the exact investment for {service.name}? Contact us for a personalized consultation and quote tailored to your {businessType.name}'s needs in {location.city}, {location.state}.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105">
            Request Custom Quote
          </button>
        </section>
      </div>
    </>
  );
};

export default ServiceCostPageTemplate;

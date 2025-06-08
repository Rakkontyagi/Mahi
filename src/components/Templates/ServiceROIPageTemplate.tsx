import React from 'react';
import SEOHead from '../SEO/SEOHead';
import AnimatedSection from '../Shared/AnimatedSection';
import BaseCard from '../Shared/BaseCard';
import { ComprehensiveServiceData } from '../../data/comprehensiveLocations'; // Import the main service type

// Prop Interfaces
// ServiceInfoProps is replaced by ComprehensiveServiceData for the service prop
interface IndustrySizeInfoProps {
  name: string;
  slug: string;
  description?: string;
}

interface ServiceROIPageTemplateProps {
  service: ComprehensiveServiceData; // Use the imported type
  industrySize: IndustrySizeInfoProps;
}

const ServiceROIPageTemplate: React.FC<ServiceROIPageTemplateProps> = ({
  service,
  industrySize,
}) => {
  const roiInfo = service.roiInformation;
  const specificROIDetail = roiInfo?.industrySizeSpecificROI.find(
    detail => detail.industrySizeSlug === industrySize.slug
  );

  const pageTitle = `ROI of ${service.name} for ${industrySize.name}`;
  const metaDescription = `Discover the potential ROI of implementing ${service.name} for ${industrySize.name} companies. Learn about key drivers, figures, and how to maximize your return.`;
  const metaKeywords = [
    `${service.slug} ROI`,
    `${industrySize.slug} ${service.slug} ROI`,
    `${service.slug} ROI ${industrySize.name}`,
    `return on investment ${service.name} for ${industrySize.slug}`,
  ].join(', ');

  // Icons for drivers - can be expanded or moved to data layer
  const driverIcons: { [key: string]: string } = {
    default: "🎯",
    efficiency: "⚙️",
    conversion: "📈",
    cost: "💰",
    data: "📊",
    segmentation: "👥",
    personalization: "✨",
    testing: "🧪",
    crm: "🔗",
    analytics: "🔍",
    multichannel: "📣",
    predictive: "🔮",
    abm: "🎯",
    lifecycle: "🔄",
    governance: "🛡️",
  };

  const getDriverIcon = (driverText: string) => {
    const lowerText = driverText.toLowerCase();
    if (lowerText.includes("efficiency") || lowerText.includes("email tasks")) return driverIcons.efficiency;
    if (lowerText.includes("conversion") || lowerText.includes("lead capture")) return driverIcons.conversion;
    if (lowerText.includes("cost")) return driverIcons.cost;
    if (lowerText.includes("data") || lowerText.includes("analytics")) return driverIcons.analytics;
    if (lowerText.includes("segmentation")) return driverIcons.segmentation;
    if (lowerText.includes("personalization")) return driverIcons.personalization;
    if (lowerText.includes("testing")) return driverIcons.testing;
    if (lowerText.includes("crm")) return driverIcons.crm;
    if (lowerText.includes("multi-channel")) return driverIcons.multichannel;
    if (lowerText.includes("predictive")) return driverIcons.predictive;
    if (lowerText.includes("abm")) return driverIcons.abm;
    if (lowerText.includes("lifecycle")) return driverIcons.lifecycle;
    if (lowerText.includes("governance") || lowerText.includes("compliance")) return driverIcons.governance;
    return driverIcons.default;
  };


  return (
    <>
      <SEOHead
        title={`${pageTitle} | God Digital Marketing`}
        description={metaDescription}
        keywords={metaKeywords}
      />
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-900 text-gray-100 font-sans">
        {/* Hero Section */}
        <AnimatedSection animationType="fadeInDown" duration={1000}>
          <section className="py-20 md:py-32 text-center bg-black/30 backdrop-blur-md">
            <div className="container mx-auto px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-300 to-green-300">
                Return on Investment: <br className="md:hidden" /> {service.name} for {industrySize.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock significant business growth by understanding and maximizing the ROI of {service.name}, tailored for {industrySize.description || industrySize.name}.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Key ROI Drivers Section */}
        <AnimatedSection animationType="fadeInUp" duration={1000} delay={200}>
          <section className="py-16 md:py-24 container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-teal-300">
              Key ROI Drivers for {industrySize.name}
            </h2>
            {specificROIDetail?.drivers && specificROIDetail.drivers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {specificROIDetail.drivers.map((driver, index) => (
                  <BaseCard key={index} variant="glass" className="p-6 text-center hover:shadow-teal-400/30 transition-shadow duration-300 flex flex-col items-center">
                    <div className="text-5xl mb-4">{getDriverIcon(driver)}</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{driver}</h3>
                    {/* Optional: Add a short description for each driver if available in data */}
                  </BaseCard>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400">Key drivers for achieving ROI with {service.name} for {industrySize.name} include strategic implementation and process optimization. Contact us for a detailed discussion.</p>
            )}
          </section>
        </AnimatedSection>

        {/* Potential ROI Figures/Ranges Section */}
        <AnimatedSection animationType="fadeInUp" duration={1000} delay={200}>
          <section className="py-16 md:py-24 bg-slate-900/50 container mx-auto px-6 rounded-xl shadow-2xl my-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-green-300">
              Potential ROI: What {industrySize.name} Can Expect
            </h2>
            {specificROIDetail?.potentialFigures && specificROIDetail.potentialFigures.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  {specificROIDetail.potentialFigures.map((figure, index) => (
                    <BaseCard key={index} variant="glass" className="p-8 hover:shadow-green-400/30 transition-shadow duration-300">
                      <p className="text-3xl md:text-4xl font-bold text-green-400 mb-3">{figure.split(" ")[0]} {figure.split(" ")[1]}</p> {/* Crude split for number and unit */}
                      <p className="text-gray-300">{figure.substring(figure.indexOf(" ") + 1 + (figure.split(" ")[1]?.length || 0) +1 )}</p>
                    </BaseCard>
                  ))}
                </div>
                <p className="text-center mt-12 text-sm text-gray-500">
                  Note: These figures are illustrative. Actual ROI depends on specific implementation, business context, and market conditions for your {industrySize.name}.
                </p>
              </>
            ) : (
              <p className="text-center text-gray-400">Potential ROI figures are currently being compiled for {industrySize.name}. We tailor projections based on specific business cases.</p>
            )}
          </section>
        </AnimatedSection>

        {/* Factors Influencing Actual ROI Section */}
        <AnimatedSection animationType="fadeInUp" duration={1000} delay={200}>
          <section className="py-16 md:py-24 container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-blue-300">
              Maximizing Your {service.name} ROI
            </h2>
            {specificROIDetail?.factors && specificROIDetail.factors.length > 0 ? (
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-4">
                  {specificROIDetail.factors.map((factor, index) => (
                    <li key={index} className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg shadow-lg hover:border-blue-500 transition-colors">
                      <p className="text-lg text-gray-200">{factor}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-center text-gray-400">Understanding the key factors that influence ROI is crucial. These typically include quality of implementation, user adoption, and strategic alignment. Contact us for more details.</p>
            )}
          </section>
        </AnimatedSection>

        {!specificROIDetail && roiInfo && (
             <AnimatedSection animationType="fadeIn" duration={1000}>
                <section className="py-16 md:py-24 container mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-400">ROI Information Tailored For You</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Detailed ROI information for {service.name} tailored to {industrySize.name} ({industrySize.description}) is currently being prepared.
                        Please contact us for a personalized discussion on potential returns and key performance indicators for your business.
                    </p>
                </section>
            </AnimatedSection>
        )}

        {/* Interactive Element Placeholder Section */}
        <AnimatedSection animationType="fadeIn" duration={1000} delay={300}>
          <section className="py-16 md:py-24 text-center container mx-auto px-6 my-16 bg-black/20 backdrop-blur-sm rounded-xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-teal-300">
              Calculate Your Personalized ROI for {service.name}
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Want a more precise estimate? Our interactive ROI calculator for {industrySize.name} is coming soon!
            </p>
            <button className="bg-teal-500 hover:bg-teal-400 text-black font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
              Notify Me When Calculator is Live
            </button>
          </section>
        </AnimatedSection>

        {/* Case Study Snippets/Links Section (Placeholder) */}
        <AnimatedSection animationType="fadeInUp" duration={1000} delay={200}>
          <section className="py-16 md:py-24 container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-green-300">
              Success Stories for {industrySize.name}
            </h2>
            {specificROIDetail?.fictionalCaseSnippet ? (
              <BaseCard variant="glass" className="mt-6 max-w-2xl mx-auto p-6 shadow-lg hover:shadow-green-400/20">
                <h3 className="text-2xl font-semibold text-green-400 mb-3">
                  Success Story Example: {specificROIDetail.fictionalCaseSnippet.fictionalCompanyName}
                </h3>
                <p className="text-gray-300 mb-2"><strong className="text-gray-100">Challenge:</strong> {specificROIDetail.fictionalCaseSnippet.challenge}</p>
                <p className="text-gray-300 mb-2"><strong className="text-gray-100">Solution Highlight:</strong> {specificROIDetail.fictionalCaseSnippet.solutionHighlight}</p>
                <p className="text-gray-300"><strong className="text-gray-100">Result:</strong> {specificROIDetail.fictionalCaseSnippet.result}</p>
              </BaseCard>
            ) : (
              <p className="text-lg text-center text-gray-400 max-w-2xl mx-auto">
                Illustrative success stories and detailed case studies for {industrySize.name} leveraging {service.name} are coming soon.
              </p>
            )}
          </section>
        </AnimatedSection>

        {/* Call to Action Section */}
        <AnimatedSection animationType="pulse" duration={1500} delay={500}>
          <section className="py-20 md:py-32 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 container mx-auto rounded-t-xl mt-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Boost Your ROI with {service.name}?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Let's embark on a data-driven journey to transform your {industrySize.name} business. Our specialists are ready to help you project and achieve optimal returns.
            </p>
            <button className="bg-white hover:bg-gray-200 text-purple-700 font-bold py-4 px-10 rounded-lg text-xl transition duration-300 transform hover:scale-105 shadow-2xl">
              Get Custom ROI Projection
            </button>
          </section>
        </AnimatedSection>
      </div>
    </>
  );
};

export default ServiceROIPageTemplate;

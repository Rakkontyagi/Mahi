import React from 'react';
import { ComprehensiveServiceData, PricingPageDetails, PricingTier } from '../../data/comprehensiveLocations'; // Adjust path as needed
import SEOHead from '../SEO/SEOHead';
import AnimatedSection from '../Shared/AnimatedSection';
import BaseCard from '../Shared/BaseCard';
import { Tag, DollarSign, ListChecks, HelpCircle, Sparkles, ShieldCheck, CheckCircle, ChevronRight } from 'lucide-react';

// Simplified Location Info Props for this template
interface LocationInfoProps {
  city: string;
  state: string;
  citySlug?: string;
  stateSlug?: string;
}

interface ServicePricingPageTemplateProps {
  service: ComprehensiveServiceData;
  location: LocationInfoProps;
}

const AGENCY_NAME = "God Digital Marketing"; // Or use a global constant

// Helper function for string interpolation
const interpolate = (
  text: string | undefined,
  context: { cityName: string; serviceName: string; agencyName?: string }
): string => {
  if (!text) return '';
  return text
    .replace(/{cityName}/g, context.cityName)
    .replace(/{serviceName}/g, context.serviceName)
    .replace(/{agencyName}/g, context.agencyName || AGENCY_NAME)
    .replace(/{cityNameEncoded}/g, encodeURIComponent(context.cityName));
};

const ServicePricingPageTemplate: React.FC<ServicePricingPageTemplateProps> = ({ service, location }) => {
  const pricingDetails = service.pricingPageDetails;

  const interpolationContext = {
    cityName: location.city,
    serviceName: service.name,
    agencyName: AGENCY_NAME
  };

  const pageTitle = interpolate(`{serviceName} Pricing in {cityName} | Packages & Costs`, interpolationContext);
  const metaDescription = interpolate(`Explore pricing for our {serviceName} services in {cityName}. Find transparent costs, package details, and custom quote options for businesses in ${location.city}, ${location.state}.`, interpolationContext);
  const metaKeywords = [
    `${service.slug} pricing ${location.citySlug || location.city.toLowerCase().replace(/ /g, '-')}`,
    `${service.name} cost ${location.city.toLowerCase().replace(/ /g, '-')}`,
    `affordable ${service.slug} ${location.city.toLowerCase().replace(/ /g, '-')}`,
    `${AGENCY_NAME} ${service.slug} rates ${location.city.toLowerCase().replace(/ /g, '-')}`,
  ].join(', ');

  const siteBaseUrl = "https://goddigitalmarketing.com"; // Placeholder
  const canonicalUrlPath = location.stateSlug && location.citySlug
    ? `/${service.slug}/${location.stateSlug}/${location.citySlug}/pricing/`
    : `/${service.slug}/${location.state.toLowerCase().replace(/\s+/g, '-')}/${location.city.toLowerCase().replace(/\s+/g, '-')}/pricing/`;

  // Basic Offer Schema (can be expanded)
  const offersSchema = pricingDetails?.pricingTiers?.map(tier => ({
    "@type": "Offer",
    "name": tier.tierName,
    "priceCurrency": "INR", // Assuming INR, adjust if needed
    "description": tier.features.join('. '),
    "url": `${siteBaseUrl}${interpolate(tier.tierCTA_link || canonicalUrlPath, interpolationContext)}`,
    // "price": tier.price, // Needs parsing to numeric for schema.org price
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product", // Using Product schema for a service with offers
    "name": service.name,
    "description": service.description,
    "brand": { "@type": "Brand", "name": AGENCY_NAME },
    "offers": offersSchema && offersSchema.length > 0 ? offersSchema : undefined,
    // "areaServed": { // More complex geo-shape or place object can be added
    //   "@type": "Place",
    //   "name": location.city
    // }
  };


  if (!pricingDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800 text-gray-200 font-sans flex flex-col items-center justify-center p-4">
        <SEOHead title={`Pricing for ${service.name} in ${location.city}`} description={`Detailed pricing information for ${service.name} in ${location.city} is coming soon.`} />
        <AnimatedSection animationType="fadeIn" duration={1000}>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">Pricing Information Coming Soon</h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 text-center">
            Detailed pricing for our {service.name} services in {location.city} is currently being updated.
            Please contact us for the latest information or a custom quote.
          </p>
          <a
            href={`/contact-us?service=${service.slug}&city=${encodeURIComponent(location.city)}&interest=pricing`}
            className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-md sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Request Pricing Info
          </a>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={metaDescription}
        keywords={metaKeywords}
        canonicalUrl={`${siteBaseUrl}${canonicalUrlPath}`}
        structuredData={offersSchema && offersSchema.length > 0 ? structuredData : undefined}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800 text-gray-200 font-sans">
        {/* Hero Section */}
        <AnimatedSection animationType="fadeInDown" duration={1000}>
          <section className="py-16 sm:py-20 md:py-28 text-center bg-black/30 backdrop-blur-lg">
            <div className="container mx-auto px-4 sm:px-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-white break-words">
                {interpolate(pricingDetails.introduction ? service.name + " Pricing" : "{serviceName} Pricing in {cityName}", interpolationContext)}
              </h1>
              {pricingDetails.introduction && (
                <p className="text-md sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2 leading-relaxed">
                  {interpolate(pricingDetails.introduction, interpolationContext)}
                </p>
              )}
            </div>
          </section>
        </AnimatedSection>

        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
          {/* Pricing Tiers Section */}
          <AnimatedSection animationType="fadeInUp" duration={1000} delay={100}>
            <section className="my-10 md:my-16">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 md:mb-12 text-indigo-300 break-words">
                Our {interpolate(service.name, interpolationContext)} Packages for {interpolate(location.city, interpolationContext)}
              </h2>
              {pricingDetails.pricingTiers && pricingDetails.pricingTiers.length > 0 ? (
                <div className={`grid grid-cols-1 md:grid-cols-2 ${pricingDetails.pricingTiers.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-6 md:gap-8 items-stretch`}>
                  {pricingDetails.pricingTiers.map((tier, index) => (
                    <BaseCard
                      key={index}
                      variant="glass"
                      className={`p-5 sm:p-6 flex flex-col ${tier.highlight ? 'border-2 border-purple-500 shadow-purple-500/30 relative overflow-hidden' : 'hover:shadow-indigo-500/30'}`}
                    >
                      {tier.highlight && (
                        <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-semibold px-3 py-1 transform translate-x-1/3 -translate-y-1/3 rotate-45">Popular</div>
                      )}
                      <div className="flex-grow">
                        <h3 className="text-xl sm:text-2xl font-bold text-center text-purple-300 mb-3 break-words">{tier.tierName}</h3>
                        <p className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-4 break-words">{interpolate(tier.price, interpolationContext)}</p>

                        <ul className="space-y-2 mb-6 text-sm sm:text-base text-gray-300">
                          {tier.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                              {interpolate(feature, interpolationContext)}
                            </li>
                          ))}
                        </ul>
                        {tier.suitableFor && (
                          <p className="text-xs sm:text-sm text-gray-400 mt-4 italic">{interpolate(tier.suitableFor, interpolationContext)}</p>
                        )}
                      </div>
                      {tier.tierCTA_text && tier.tierCTA_link && (
                        <a
                          href={interpolate(tier.tierCTA_link, interpolationContext)}
                          className={`w-full block text-center mt-6 px-6 py-3 font-semibold rounded-lg transition-all duration-300 ease-in-out text-sm sm:text-base ${tier.highlight ? 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl' : 'bg-slate-700 hover:bg-slate-600 text-gray-200'}`}
                        >
                          {interpolate(tier.tierCTA_text, interpolationContext)}
                        </a>
                      )}
                    </BaseCard>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 mt-4 text-center col-span-full text-md sm:text-lg">
                  Specific package details for {interpolate(service.name, interpolationContext)} in {interpolate(location.city, interpolationContext)} are tailored to your project scope. Please see pricing factors below or contact us for a custom quote.
                </p>
              )}
            </section>
          </AnimatedSection>

          {/* General Pricing Factors Section */}
          {pricingDetails.generalPricingFactors && pricingDetails.generalPricingFactors.length > 0 && (
            <AnimatedSection animationType="fadeInUp" duration={1000} delay={200}>
              <section className="my-10 md:my-16">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 md:mb-12 text-teal-300 break-words">
                  Factors Influencing Your {interpolate(service.name, interpolationContext)} Investment in {interpolate(location.city, interpolationContext)}
                </h2>
                <BaseCard variant="glass" className="p-4 sm:p-6">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-sm sm:text-base text-gray-300">
                    {pricingDetails.generalPricingFactors.map((factor, index) => (
                      <li key={index} className="flex items-start">
                        <DollarSign className="w-4 h-4 text-teal-400 mr-2 mt-1 flex-shrink-0" />
                        {interpolate(factor, interpolationContext)}
                      </li>
                    ))}
                  </ul>
                </BaseCard>
              </section>
            </AnimatedSection>
          )}

          {/* Custom Quote Section */}
          {pricingDetails.customQuoteStatement && (
            <AnimatedSection animationType="fadeInUp" duration={1000} delay={300}>
              <section className="my-10 md:my-16 py-10 md:py-12 bg-slate-800/40 rounded-xl text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-300 break-words">
                  Need a Custom Solution for Your {interpolate(location.city, interpolationContext)} Business?
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed px-2">
                  {interpolate(pricingDetails.customQuoteStatement, interpolationContext)}
                </p>
                <a
                  href={`/contact-us?service=${service.slug}&city=${encodeURIComponent(location.city)}&interest=custom-quote`}
                  className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-md sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Get Your Custom Quote
                </a>
              </section>
            </AnimatedSection>
          )}

          {/* FAQ Section */}
          {pricingDetails.faq && pricingDetails.faq.length > 0 && (
            <AnimatedSection animationType="fadeInUp" duration={1000} delay={400}>
              <section className="my-10 md:my-16">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 md:mb-12 text-indigo-300 break-words">
                  Frequently Asked Questions about {interpolate(service.name, interpolationContext)} Pricing in {interpolate(location.city, interpolationContext)}
                </h2>
                <div className="space-y-6 max-w-3xl mx-auto">
                  {pricingDetails.faq.map((item, index) => (
                    <BaseCard key={index} variant="default" className="p-4 sm:p-6 bg-slate-800/50">
                      <h4 className="text-md sm:text-lg font-semibold text-gray-100 mb-2 flex items-start">
                        <HelpCircle className="w-5 h-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                        {interpolate(item.question, interpolationContext)}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-400 pl-7 leading-relaxed break-words">
                        {interpolate(item.answer, interpolationContext)}
                      </p>
                    </BaseCard>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          )}
        </div>
      </div>
    </>
  );
};

export default ServicePricingPageTemplate;

import React from 'react';
import { ComprehensiveLocationData } from '../../data/comprehensiveLocations';
import { SEOHead } from '../SEO/SEOHead';
import { AnimatedSection } from '../Shared/AnimatedSection';
// import { BaseCard } from '../Shared/BaseCard'; // For context
import { StateCard } from '../Shared/StateCard'; // Corrected import
import { Map, Globe, LocateFixed } from 'lucide-react'; // Example icons

interface LocationsHubPageProps {
  allLocations: ComprehensiveLocationData[];
}

export const LocationsHubPage: React.FC<LocationsHubPageProps> = ({ allLocations }) => {
  const primaryButtonStyle = "inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-300 text-base";

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      <SEOHead
        title="Our Locations | Serving Businesses Across India | God Digital Marketing"
        description="Explore God Digital Marketing's nationwide presence. We offer expert digital marketing and AI automation services in states and cities all over India. Find your local team."
        keywords="digital marketing locations india, ai automation india cities, local seo services, nationwide marketing agency"
        canonicalUrl="/locations/"
      />

      {/* Hero Section */}
      <AnimatedSection
        className="py-20 md:py-28 text-center bg-gradient-to-b from-black to-slate-900/80"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <Map className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 break-words">
            Serving Businesses Across All of India
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            We provide tailored digital solutions in every state and major city. Select your state below to discover our services and expertise in your local area.
          </p>
        </div>
      </AnimatedSection>

      {/* Optional Introduction Section */}
      <AnimatedSection
        className="py-12 md:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg md:text-xl text-gray-300 text-center leading-relaxed">
            Our deep understanding of diverse regional markets allows us to craft strategies that resonate locally while leveraging global best practices. Find out how we can help your business thrive, wherever you are in India.
          </p>
        </div>
      </AnimatedSection>

      {/* State List/Grid Section */}
      <AnimatedSection
        className="py-12 md:py-20 bg-slate-900/50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 md:mb-16">
            Explore Our Services by State
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {allLocations && allLocations.length > 0 ? (
              allLocations.map(stateData => (
                <StateCard key={stateData.stateSlug} stateData={stateData} />
              ))
            ) : (
              <p className="text-center col-span-full py-10 text-gray-400 text-lg">
                Location information is currently being updated. Please check back soon.
              </p>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* Optional CTA Section */}
      <AnimatedSection
        className="py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="p-8 md:p-12 bg-gradient-to-br from-slate-800/70 to-slate-900/50 border border-slate-700 rounded-xl shadow-2xl">
            <LocateFixed className="w-12 h-12 text-green-400 mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Don't See Your Specific City Highlighted?
            </h2>
            <p className="text-lg text-gray-300 mt-3 mb-8 max-w-xl mx-auto">
              We cover numerous cities within each state. Our teams are equipped to provide localized services tailored to your specific area. Contact us to discuss solutions for your exact location.
            </p>
            <a
              href="/contact/?interest=local_service_query"
              className={primaryButtonStyle}
            >
              Inquire About Your City
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

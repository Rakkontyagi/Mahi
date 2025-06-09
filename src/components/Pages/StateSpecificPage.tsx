import React from 'react';
import { ComprehensiveLocationData, CityData } from '../../data/comprehensiveLocations';
// import { ComprehensiveServiceData } from '../../data/comprehensiveLocations'; // If needed for allServices prop
import { SEOHead } from '../SEO/SEOHead';
import { AnimatedSection } from '../Shared/AnimatedSection';
// import { BaseCard } from '../Shared/BaseCard'; // For context
import { CityCardStatePage } from '../Shared/CityCardStatePage'; // Corrected import
import { MapPin, Building, Globe2, MessageSquare } from 'lucide-react'; // Example icons

interface StateSpecificPageProps {
  stateData: ComprehensiveLocationData;
  // allServices?: ComprehensiveServiceData[];
}

export const StateSpecificPage: React.FC<StateSpecificPageProps> = ({ stateData /*, allServices */ }) => {
  const primaryButtonStyle = "inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-300 text-base";

  const stateName = stateData.state;
  const stateSlug = stateData.stateSlug;

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      <SEOHead
        title={`Digital Services in ${stateName} | All Cities Covered | God Digital Marketing`}
        description={`Explore comprehensive digital marketing and AI solutions in cities across ${stateName}. God Digital Marketing offers tailored services for your business growth in ${stateName}.`}
        keywords={`digital marketing ${stateName}, services in ${stateName} cities, local SEO ${stateName}, business automation ${stateName}, web development ${stateName}`}
        canonicalUrl={`/locations/${stateSlug}/`}
      />

      {/* Hero Section */}
      <AnimatedSection
        className="py-20 md:py-28 text-center bg-gradient-to-b from-black to-slate-900/80"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <Globe2 className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 break-words">
            Digital Solutions Across {stateName}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our expert services available in cities and towns throughout {stateName}. We're committed to boosting your local presence and success.
          </p>
        </div>
      </AnimatedSection>

      {/* Optional State Overview/Intro Section - Placeholder */}
      {/*
      <AnimatedSection
        className="py-12 md:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          { stateData.stateOverviewStatement ? (
            <p className="text-lg md:text-xl text-gray-300 text-center leading-relaxed">
              {stateData.stateOverviewStatement}
            </p>
          ) : (
            <p className="text-lg md:text-xl text-gray-300 text-center leading-relaxed">
              Focusing on the unique business landscape of {stateName}, we offer specialized digital marketing, AI automation, and web development services tailored to your local needs. Our goal is to empower businesses in {stateName} to achieve significant growth and market leadership.
            </p>
          )}
        </div>
      </AnimatedSection>
      */}

      {/* City List/Grid Section */}
      <AnimatedSection
        className="py-12 md:py-20 bg-slate-900/50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }} // Adjusted delay
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 md:mb-16">
            Find Services in Your City in {stateName}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {stateData.cities && stateData.cities.length > 0 ? (
              stateData.cities
                .sort((a, b) => a.name.localeCompare(b.name)) // Sort cities alphabetically
                .map(city => (
                  <CityCardStatePage
                    key={city.slug}
                    city={city}
                    stateSlug={stateSlug}
                    // defaultServiceSlug and defaultServiceName will use their defaults from CityCardStatePage
                    // Pass allServices={allServices} here if CityCardStatePage is enhanced to use it
                  />
              ))
            ) : (
              <p className="text-center col-span-full py-10 text-gray-400 text-lg">
                City information for {stateName} is currently being updated. Please check back soon.
              </p>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* State-Level CTA Section */}
      <AnimatedSection
        className="py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }} // Adjusted delay
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="p-8 md:p-12 bg-gradient-to-br from-slate-800/70 to-slate-900/50 border border-slate-700 rounded-xl shadow-2xl">
            <MessageSquare className="w-12 h-12 text-blue-400 mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Your Partner for Growth in {stateName}
            </h2>
            <p className="text-lg text-gray-300 mt-3 mb-8 max-w-xl mx-auto">
              We are dedicated to empowering businesses across {stateName}. Contact us for a discussion on how we can achieve your goals with our tailored digital strategies.
            </p>
            <a
              href={`/contact/?interest=state_services&state=${stateSlug}`}
              className={primaryButtonStyle}
            >
              Consult for {stateName} Services
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

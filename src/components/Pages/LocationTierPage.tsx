import React, { useMemo } from 'react';
import { ComprehensiveLocationData, CityData } from '../../data/comprehensiveLocations';
import { SEOHead } from '../SEO/SEOHead';
import { AnimatedSection } from '../Shared/AnimatedSection';
import { CityCardStatePage } from '../Shared/CityCardStatePage';
import { Building2, Users, Award, Map } from 'lucide-react'; // Building2 for Metro, Users for Tier2/3, Award for generic tier, Map for hero

interface LocationTierPageProps {
  tierIdentifier: 'metro' | 'tier-2' | 'tier-3' | string;
  allIndianLocations: ComprehensiveLocationData[];
}

export const LocationTierPage: React.FC<LocationTierPageProps> = ({ tierIdentifier, allIndianLocations }) => {
  const allCitiesWithState = useMemo(() => {
    return allIndianLocations.flatMap(state =>
      state.cities.map(city => ({
        ...city,
        stateSlug: state.stateSlug,
        stateName: state.state,
      }))
    );
  }, [allIndianLocations]);

  const filteredCities = useMemo(() => {
    let citiesToDisplay: (CityData & { stateSlug: string; stateName: string; })[] = [];
    if (tierIdentifier === 'metro') {
      citiesToDisplay = allCitiesWithState.filter(city => city.isMetro === true);
    } else if (tierIdentifier === 'tier-2') {
      // Ensure metros aren't double-counted if they also have a tier property indicating tier 2
      citiesToDisplay = allCitiesWithState.filter(city => city.tier === 2 && !city.isMetro);
    } else if (tierIdentifier === 'tier-3') {
      citiesToDisplay = allCitiesWithState.filter(city => city.tier === 3 && !city.isMetro);
    }
    return citiesToDisplay.sort((a, b) => a.name.localeCompare(b.name));
  }, [allCitiesWithState, tierIdentifier]);

  const dynamicContent = useMemo(() => {
    let content = {
      pageTitle: '',
      heroSubtitle: '',
      seoTitle: '',
      seoDescription: '',
      seoKeywords: '',
      heroIcon: <Map className="w-16 h-16 text-blue-400 mx-auto mb-6" />,
      gridTitle: '',
    };

    if (tierIdentifier === 'metro') {
      content.pageTitle = "Premier Digital Services in India's Metro Cities";
      content.heroSubtitle = "Explore our comprehensive solutions available in all major metropolitan areas, driving growth and innovation for leading businesses.";
      content.seoTitle = "Metro City Digital Marketing & AI Services | God Digital Marketing";
      content.seoDescription = "Find expert digital marketing and AI solutions in India's metro cities: Mumbai, Delhi, Bangalore, Chennai, etc. Leading agency for urban business growth.";
      content.seoKeywords = "metro city digital marketing, AI services metros india, urban business solutions, digital transformation metros";
      content.heroIcon = <Building2 className="w-16 h-16 text-purple-400 mx-auto mb-6" />;
      content.gridTitle = "Serving All Major Metropolitan Areas";
    } else if (tierIdentifier === 'tier-2') {
      content.pageTitle = "Targeted Digital Solutions for Tier 2 Cities";
      content.heroSubtitle = "Unlock growth in India's rapidly developing Tier 2 cities with our specialized digital marketing and automation strategies.";
      content.seoTitle = "Tier 2 City Digital Marketing Services | God Digital Marketing";
      content.seoDescription = "Boost your business in Tier 2 cities across India. God Digital Marketing offers tailored SEO, PPC, and AI solutions for emerging urban markets.";
      content.seoKeywords = "tier 2 city marketing, digital services tier 2 india, emerging cities business growth, local SEO tier 2";
      content.heroIcon = <Users className="w-16 h-16 text-teal-400 mx-auto mb-6" />;
      content.gridTitle = "Empowering Businesses in Tier 2 Cities";
    } else if (tierIdentifier === 'tier-3') {
      content.pageTitle = "Effective Digital Strategies for Tier 3 Cities";
      content.heroSubtitle = "Reach new customers and expand your presence in India's Tier 3 cities with our accessible and impactful digital services.";
      content.seoTitle = "Tier 3 City Digital Marketing Agency | God Digital Marketing";
      content.seoDescription = "Grow your business in Tier 3 cities with God Digital Marketing. We provide affordable and effective digital solutions for India's smaller urban centers.";
      content.seoKeywords = "tier 3 city marketing, small city digital services, rural market outreach india, affordable SEO tier 3";
      content.heroIcon = <Award className="w-16 h-16 text-orange-400 mx-auto mb-6" />; // Changed icon for Tier 3
      content.gridTitle = "Dedicated Solutions for Tier 3 Cities";
    } else { // Fallback for custom tier identifiers if any
      const tierName = tierIdentifier.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
      content.pageTitle = `Digital Services in ${tierName} Cities`;
      content.heroSubtitle = `Specialized strategies for businesses in ${tierName} cities across India.`;
      content.seoTitle = `${tierName} City Digital Services | God Digital Marketing`;
      content.seoDescription = `Discover digital marketing and AI solutions for ${tierName} cities with God Digital Marketing.`;
      content.seoKeywords = `${tierName} digital marketing, ${tierName} city services, local business ${tierName}`;
      content.gridTitle = `Serving ${tierName} Cities`;
    }
    return content;
  }, [tierIdentifier]);

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      <SEOHead
        title={dynamicContent.seoTitle}
        description={dynamicContent.seoDescription}
        keywords={dynamicContent.seoKeywords}
        canonicalUrl={`/locations/tier/${tierIdentifier}/`}
      />

      {/* Hero Section */}
      <AnimatedSection
        className="py-20 md:py-28 text-center bg-gradient-to-b from-black to-slate-900/80"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          {dynamicContent.heroIcon}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 break-words">
            {dynamicContent.pageTitle}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            {dynamicContent.heroSubtitle}
          </p>
        </div>
      </AnimatedSection>

      {/* City List/Grid Section */}
      <AnimatedSection
        className="py-12 md:py-20 bg-slate-900/50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 md:mb-16">
            {dynamicContent.gridTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6">
            {filteredCities.length > 0 ? (
              filteredCities.map(city => (
                <CityCardStatePage
                  key={`${city.stateSlug}-${city.slug}`}
                  city={city}
                  stateSlug={city.stateSlug}
                />
              ))
            ) : (
              <p className="text-center col-span-full py-10 text-gray-400 text-lg">
                No cities currently listed for the "{tierIdentifier.replace('-', ' ')}" category, or data is being updated.
              </p>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* Intentionally omitting the generic CTA from Step 1 for this specific page type for now */}
    </div>
  );
};

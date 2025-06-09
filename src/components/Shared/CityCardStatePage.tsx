import React from 'react';
import { CityData } from '../../data/comprehensiveLocations'; // Adjust path if necessary
import { BaseCard } from './BaseCard';
import { ArrowRight, Building, Star, Users, BarChart3 } from 'lucide-react'; // Added Users for Population, BarChart3 for Tier

interface CityCardStatePageProps {
  city: CityData;
  stateSlug: string;
  defaultServiceSlug?: string;
  defaultServiceName?: string;
}

export const CityCardStatePage: React.FC<CityCardStatePageProps> = ({
  city,
  stateSlug,
  defaultServiceSlug = "digital-marketing",
  defaultServiceName = "Digital Marketing",
}) => {
  return (
    <BaseCard
      variant="interactiveGlass" // Using the specified variant name
      className="flex flex-col h-full p-4 sm:p-5 group transition-all duration-300 ease-in-out hover:border-green-500/80 shadow-lg hover:shadow-green-500/20"
    >
      {/* City Name (Title) */}
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center">
        <Building className="w-5 h-5 mr-2.5 text-green-400 flex-shrink-0" />
        {city.name}
      </h3>

      <div className="flex-grow mb-3"> {/* This div will ensure text content takes up space */}
        {/* City Info Badges/Tags */}
        <div className="flex flex-wrap gap-2 mb-3 text-xs">
          {city.isMetro && (
            <span className="flex items-center px-2.5 py-1 bg-purple-600/80 text-purple-100 rounded-full shadow-sm">
              <Star className="w-3 h-3 mr-1" /> Metro City
            </span>
          )}
          {city.tier && (
            <span className="flex items-center px-2.5 py-1 bg-gray-600/80 text-gray-200 rounded-full shadow-sm">
              <BarChart3 className="w-3 h-3 mr-1" /> Tier {city.tier}
            </span>
          )}
          {city.population && city.population > 0 && ( // Show only if population is positive
            <span className="flex items-center px-2.5 py-1 bg-blue-600/80 text-blue-100 rounded-full shadow-sm">
              <Users className="w-3 h-3 mr-1" /> Pop: {city.population.toLocaleString()}
            </span>
          )}
        </div>
        {/* Placeholder for more city-specific descriptive text if available in CityData */}
        {/* <p className="text-xs text-gray-400 line-clamp-2">
          {city.description || `Explore opportunities in ${city.name}, a vibrant city in the region.`}
        </p> */}
      </div>

      {/* Primary Service Link */}
      <a
        href={`/${defaultServiceSlug}/${stateSlug}/${city.slug}/`}
        className="inline-flex items-center text-green-400 group-hover:text-green-300 font-semibold text-sm mt-auto pt-2 transition-colors duration-300"
        title={`${defaultServiceName} services in ${city.name}, ${stateSlug}`}
      >
        {defaultServiceName} in {city.name}
        <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </BaseCard>
  );
};

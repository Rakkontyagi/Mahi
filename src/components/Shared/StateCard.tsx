import React from 'react';
import { ComprehensiveLocationData, CityData } from '../../data/comprehensiveLocations'; // Adjust path if necessary
import { BaseCard } from './BaseCard';
import { ArrowRight, MapPin, Building } from 'lucide-react';

interface StateCardProps {
  stateData: ComprehensiveLocationData;
}

export const StateCard: React.FC<StateCardProps> = ({ stateData }) => {
  // Helper to get a few prominent cities for display
  const getProminentCities = (cities: CityData[]): CityData[] => {
    const metros = cities.filter(city => city.isMetro);
    const tier1 = cities.filter(city => city.tier === 1 && !city.isMetro);

    let prominent: CityData[] = [];
    prominent = prominent.concat(metros);
    prominent = prominent.concat(tier1);

    // If not enough metros/tier1, fill with others
    if (prominent.length < 4) {
      const otherCities = cities.filter(city => !metros.includes(city) && !tier1.includes(city));
      prominent = prominent.concat(otherCities.slice(0, 4 - prominent.length));
    }

    return prominent.slice(0, 4); // Max 4 cities
  };

  const prominentCities = getProminentCities(stateData.cities);

  return (
    <BaseCard
      variant="glass"
      className="flex flex-col h-full p-5 sm:p-6 hover:shadow-green-500/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1 group"
    >
      {/* State Name (Title) */}
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 flex items-center">
        <MapPin className="w-6 h-6 mr-2 text-green-400 flex-shrink-0" />
        {stateData.state}
      </h3>

      {/* Cities Info/Stats */}
      <p className="text-sm text-gray-400 mb-3">
        Featuring services in <span className="font-semibold text-green-400">{stateData.cities.length}</span> cities & towns, including:
      </p>

      {/* List of Major Cities */}
      <ul className="space-y-1.5 mb-4 flex-grow">
        {prominentCities.map(city => (
          <li key={city.slug}>
            <a
              href={`/digital-marketing/${stateData.stateSlug}/${city.slug}/`} // Example: links to digital-marketing in that city
              className="text-sm text-gray-300 hover:text-green-300 flex items-center transition-colors duration-200"
              title={`Digital Marketing in ${city.name}, ${stateData.state}`}
            >
              <Building className="w-3.5 h-3.5 mr-2 text-gray-500 group-hover:text-green-400 transition-colors duration-200 flex-shrink-0" />
              {city.name}
            </a>
          </li>
        ))}
        {stateData.cities.length > prominentCities.length && (
            <li><span className="text-xs text-gray-500 pl-5">and more...</span></li>
        )}
      </ul>

      {/* "Explore State" Link */}
      <a
        href={`/locations/${stateData.stateSlug}/`}
        className="inline-flex items-center text-green-400 group-hover:text-green-300 font-semibold text-sm mt-auto pt-2 transition-colors duration-300"
      >
        Explore All in {stateData.state}
        <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </BaseCard>
  );
};

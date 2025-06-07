import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Building, Target } from 'lucide-react';
import { indianLocations, services } from '../../data/locations';

export const LocationNavigation: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const majorStates = indianLocations.slice(0, 8); // Top 8 states for navigation

  return (
    <nav className="hidden lg:flex items-center space-x-6">
      {/* Services Dropdown */}
      <div className="relative">
        <motion.button
          className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-300"
          onClick={() => handleDropdownToggle('services')}
        >
          <Target className="w-4 h-4" />
          <span>Services</span>
          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
            activeDropdown === 'services' ? 'rotate-180' : ''
          }`} />
        </motion.button>

        <AnimatePresence>
          {activeDropdown === 'services' && (
            <motion.div
              className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden z-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4">
                <h3 className="text-white font-semibold mb-3">Our Services</h3>
                <div className="grid grid-cols-1 gap-2">
                  {services.map((service) => (
                    <motion.a
                      key={service.slug}
                      href={`/${service.slug}/`}
                      className="block p-3 hover:bg-white/5 rounded transition-colors duration-200"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 }}
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="text-white font-medium">{service.name}</div>
                      <div className="text-gray-400 text-sm">{service.description}</div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Locations Dropdown */}
      <div className="relative">
        <motion.button
          className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-300"
          onClick={() => handleDropdownToggle('locations')}
        >
          <MapPin className="w-4 h-4" />
          <span>Locations</span>
          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
            activeDropdown === 'locations' ? 'rotate-180' : ''
          }`} />
        </motion.button>

        <AnimatePresence>
          {activeDropdown === 'locations' && (
            <motion.div
              className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden z-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4">
                <h3 className="text-white font-semibold mb-3">Major States</h3>
                <div className="grid grid-cols-2 gap-2">
                  {majorStates.map((state, index) => (
                    <motion.div
                      key={state.stateSlug}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={`/locations/${state.stateSlug}/`}
                        className="block p-3 hover:bg-white/5 rounded transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="text-white font-medium">{state.state}</div>
                        <div className="text-gray-400 text-sm">{state.cities.length} cities</div>
                      </a>
                      
                      {/* Major cities for this state */}
                      <div className="ml-3 mt-1 space-y-1">
                        {state.cities.filter(city => city.isMetro).slice(0, 2).map((city) => (
                          <a
                            key={city.slug}
                            href={`/locations/${state.stateSlug}/${city.slug}/`}
                            className="block text-gray-400 text-xs hover:text-white transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {city.name}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <a
                    href="/locations/"
                    className="text-white hover:text-gray-300 transition-colors duration-200 text-sm"
                    onClick={() => setActiveDropdown(null)}
                  >
                    View All Locations →
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Industries Dropdown */}
      <div className="relative">
        <motion.button
          className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-300"
          onClick={() => handleDropdownToggle('industries')}
        >
          <Building className="w-4 h-4" />
          <span>Industries</span>
          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
            activeDropdown === 'industries' ? 'rotate-180' : ''
          }`} />
        </motion.button>

        <AnimatePresence>
          {activeDropdown === 'industries' && (
            <motion.div
              className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden z-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4">
                <h3 className="text-white font-semibold mb-3">Industries We Serve</h3>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    'Healthcare', 'Real Estate', 'E-commerce', 'Education', 
                    'Manufacturing', 'Financial Services', 'Technology', 'Retail'
                  ].map((industry, index) => (
                    <motion.a
                      key={industry}
                      href={`/industries/${industry.toLowerCase().replace(' ', '-')}/`}
                      className="block p-2 text-gray-300 hover:text-white hover:bg-white/5 rounded transition-colors duration-200"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {industry}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
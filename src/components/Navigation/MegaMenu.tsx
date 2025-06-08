import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Building, Target, Zap, ArrowRight } from 'lucide-react';
import { comprehensiveServices, allIndianLocations, comprehensiveIndustries } from '../../data/comprehensiveLocations';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeMenu: string | null;
  onMenuChange: (menu: string | null) => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose, activeMenu, onMenuChange }) => {
  const majorStates = allIndianLocations.slice(0, 8);
  const mainServices = comprehensiveServices.slice(0, 6);
  const mainIndustries = comprehensiveIndustries.slice(0, 8);

  const handleMenuHover = (menu: string) => {
    onMenuChange(menu);
  };

  const handleMenuLeave = () => {
    onMenuChange(null);
  };

  return (
    <div className="relative">
      {/* Main Navigation Items */}
      <div className="flex items-center lg:space-x-6"> {/* Changed space-x-8 to lg:space-x-6 */}
        <div
          className="relative"
          onMouseEnter={() => handleMenuHover('services')}
          onMouseLeave={handleMenuLeave}
        >
          <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300">
            <Target className="w-4 h-4" />
            <span>Services</span>
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        <div
          className="relative"
          onMouseEnter={() => handleMenuHover('locations')}
          onMouseLeave={handleMenuLeave}
        >
          <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300">
            <MapPin className="w-4 h-4" />
            <span>Locations</span>
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        <div
          className="relative"
          onMouseEnter={() => handleMenuHover('industries')}
          onMouseLeave={handleMenuLeave}
        >
          <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300">
            <Building className="w-4 h-4" />
            <span>Industries</span>
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            className="absolute top-full left-0 w-screen bg-black/95 backdrop-blur-xl border-t border-gray-800 shadow-2xl z-50"
            style={{ marginLeft: 'calc(-50vw + 50%)' }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => handleMenuHover(activeMenu)}
            onMouseLeave={handleMenuLeave}
          >
            <div className="max-w-7xl mx-auto px-4 py-8">
              {/* Services Mega Menu */}
              {activeMenu === 'services' && (
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {mainServices.map((service) => (
                        <motion.a
                          key={service.slug}
                          href={`/${service.slug}/`}
                          className="group p-4 border border-gray-800 bg-black/30 hover:bg-white/5 transition-all duration-300 rounded-lg"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-center space-x-3 mb-2">
                            <Zap className="w-5 h-5 text-blue-400" />
                            <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                              {service.name}
                            </h4>
                          </div>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                          <div className="mt-3 flex items-center text-blue-400 text-sm">
                            <span>Learn More</span>
                            <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg mb-6">Popular Locations</h3>
                    <div className="space-y-3">
                      {majorStates.slice(0, 6).map((state) => (
                        <a
                          key={state.stateSlug}
                          href={`/locations/${state.stateSlug}/`}
                          className="block p-3 hover:bg-white/5 rounded transition-colors duration-300"
                        >
                          <div className="text-white font-medium">{state.state}</div>
                          <div className="text-gray-400 text-sm">{state.cities.length} cities</div>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg mb-6">Featured</h3>
                    <div className="space-y-4">
                      <a
                        href="/digital-marketing/healthcare/"
                        className="block p-4 border border-gray-800 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 rounded-lg"
                      >
                        <div className="text-white font-semibold mb-2">Healthcare Marketing</div>
                        <div className="text-gray-400 text-sm">HIPAA-compliant solutions</div>
                      </a>
                      <a
                        href="/ai-automation/"
                        className="block p-4 border border-gray-800 bg-gradient-to-r from-green-500/10 to-teal-500/10 hover:from-green-500/20 hover:to-teal-500/20 transition-all duration-300 rounded-lg"
                      >
                        <div className="text-white font-semibold mb-2">AI Automation</div>
                        <div className="text-gray-400 text-sm">Next-gen business automation</div>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Locations Mega Menu */}
              {activeMenu === 'locations' && (
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-white font-bold text-lg mb-6">Major States</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {majorStates.map((state) => (
                        <motion.a
                          key={state.stateSlug}
                          href={`/locations/${state.stateSlug}/`}
                          className="group p-4 border border-gray-800 bg-black/30 hover:bg-white/5 transition-all duration-300 rounded-lg"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-center space-x-3 mb-2">
                            <MapPin className="w-5 h-5 text-green-400" />
                            <h4 className="text-white font-semibold group-hover:text-green-400 transition-colors">
                              {state.state}
                            </h4>
                          </div>
                          <p className="text-gray-400 text-sm">{state.cities.length} cities covered</p>
                          <div className="mt-2 flex flex-wrap gap-1">
                            {state.cities.filter(city => city.isMetro).slice(0, 3).map((city) => (
                              <span key={city.slug} className="text-xs bg-gray-800 px-2 py-1 rounded">
                                {city.name}
                              </span>
                            ))}
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg mb-6">Metro Cities</h3>
                    <div className="space-y-3">
                      {allIndianLocations.flatMap(state => 
                        state.cities.filter(city => city.isMetro).map(city => ({
                          ...city,
                          state: state.state,
                          stateSlug: state.stateSlug
                        }))
                      ).slice(0, 8).map((city) => (
                        <a
                          key={`${city.stateSlug}-${city.slug}`}
                          href={`/digital-marketing/${city.stateSlug}/${city.slug}/`}
                          className="block p-3 hover:bg-white/5 rounded transition-colors duration-300"
                        >
                          <div className="text-white font-medium">{city.name}</div>
                          <div className="text-gray-400 text-sm">{city.state}</div>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg mb-6">Quick Access</h3>
                    <div className="space-y-4">
                      <a
                        href="/digital-marketing/delhi/new-delhi/"
                        className="block p-4 border border-gray-800 bg-gradient-to-r from-red-500/10 to-orange-500/10 hover:from-red-500/20 hover:to-orange-500/20 transition-all duration-300 rounded-lg"
                      >
                        <div className="text-white font-semibold mb-2">Delhi NCR</div>
                        <div className="text-gray-400 text-sm">Capital region services</div>
                      </a>
                      <a
                        href="/digital-marketing/maharashtra/mumbai/"
                        className="block p-4 border border-gray-800 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300 rounded-lg"
                      >
                        <div className="text-white font-semibold mb-2">Mumbai</div>
                        <div className="text-gray-400 text-sm">Financial capital</div>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Industries Mega Menu */}
              {activeMenu === 'industries' && (
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-white font-bold text-lg mb-6">Industries We Serve</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {mainIndustries.map((industry) => (
                        <motion.a
                          key={industry.slug}
                          href={`/digital-marketing/${industry.slug}/`}
                          className="group p-4 border border-gray-800 bg-black/30 hover:bg-white/5 transition-all duration-300 rounded-lg"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-center space-x-3 mb-2">
                            <Building className="w-5 h-5 text-purple-400" />
                            <h4 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                              {industry.name}
                            </h4>
                          </div>
                          <p className="text-gray-400 text-sm">{industry.description}</p>
                          <div className="mt-3 flex items-center text-purple-400 text-sm">
                            <span>View Solutions</span>
                            <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg mb-6">Specialized Services</h3>
                    <div className="space-y-3">
                      {[
                        { name: 'Healthcare Marketing', slug: 'healthcare', desc: 'HIPAA-compliant solutions' },
                        { name: 'E-commerce Growth', slug: 'ecommerce', desc: 'Online store optimization' },
                        { name: 'Real Estate Marketing', slug: 'real-estate', desc: 'Property lead generation' },
                        { name: 'Tech Startup Growth', slug: 'technology', desc: 'Scalable marketing systems' },
                        { name: 'Financial Services', slug: 'financial-services', desc: 'Compliance-focused marketing' },
                        { name: 'Manufacturing', slug: 'manufacturing', desc: 'B2B lead generation' }
                      ].map((service) => (
                        <a
                          key={service.slug}
                          href={`/digital-marketing/${service.slug}/`}
                          className="block p-3 hover:bg-white/5 rounded transition-colors duration-300"
                        >
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-gray-400 text-sm">{service.desc}</div>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg mb-6">Case Studies</h3>
                    <div className="space-y-4">
                      <a
                        href="/case-studies/healthcare/"
                        className="block p-4 border border-gray-800 bg-gradient-to-r from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-300 rounded-lg"
                      >
                        <div className="text-white font-semibold mb-2">Healthcare Success</div>
                        <div className="text-gray-400 text-sm">300% patient acquisition increase</div>
                      </a>
                      <a
                        href="/case-studies/ecommerce/"
                        className="block p-4 border border-gray-800 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 hover:from-orange-500/20 hover:to-yellow-500/20 transition-all duration-300 rounded-lg"
                      >
                        <div className="text-white font-semibold mb-2">E-commerce Growth</div>
                        <div className="text-gray-400 text-sm">500% revenue growth in 12 months</div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
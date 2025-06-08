import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Building, Target, Zap, ArrowRight, Briefcase, Library } from 'lucide-react'; // Added Briefcase, Library
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
      <div className="flex items-center lg:space-x-6">
        {/* Services Trigger */}
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

        {/* Industry Solutions Trigger */}
        <div
          className="relative"
          onMouseEnter={() => handleMenuHover('industrySolutions')}
          onMouseLeave={handleMenuLeave}
        >
          <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300">
            <Briefcase className="w-4 h-4" />
            <span>Industry Solutions</span>
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        {/* Locations Trigger */}
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

        {/* Resources Trigger */}
        <div
          className="relative"
          onMouseEnter={() => handleMenuHover('resources')}
          onMouseLeave={handleMenuLeave}
        >
          <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300">
            <Library className="w-4 h-4" />
            <span>Resources</span>
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Services Panel */}
              {activeMenu === 'services' && (
                <div>
                  <h3 className="text-white font-bold text-xl mb-8 text-center">Our Core Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                    {/* Column 1: Digital Marketing */}
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-4">
                        <a href="/digital-marketing/" onClick={onClose} className="hover:underline">Digital Marketing</a>
                      </h4>
                      <ul className="space-y-2.5">
                        <li><a href="/seo-services/" onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">SEO Services</a></li>
                        <li><a href="/ppc-advertising/" onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">PPC Advertising</a></li>
                        <li><a href="/social-media-marketing/" onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">Social Media Marketing</a></li>
                        <li><a href="/content-marketing/" onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">Content Marketing</a></li>
                        <li><a href="/google-ads-management/" onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">Google Ads Management</a></li>
                        <li><a href="/ecommerce-marketing/" onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">E-commerce Marketing</a></li>
                      </ul>
                    </div>
                    {/* Column 2: Automation & AI */}
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-4">
                         <a href="/ai-automation/" onClick={onClose} className="hover:underline">Automation & AI</a>
                      </h4>
                      <ul className="space-y-2.5">
                        <li><a href="/ai-automation/" onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">AI-Powered Solutions</a></li>
                        <li><a href="/marketing-automation/" onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">Marketing Automation</a></li>
                        <li><a href="/business-automation/" onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">Business Process Automation</a></li>
                        <li><a href="/chatbot-development/" onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">AI Chatbot Development</a></li>
                      </ul>
                    </div>
                    {/* Column 3: Lead Gen & Web */}
                    <div>
                      <h4 className="text-lg font-semibold text-purple-400 mb-4">
                        <a href="/lead-generation/" onClick={onClose} className="hover:underline">Lead Gen & Web</a>
                      </h4>
                      <ul className="space-y-2.5">
                        <li><a href="/lead-generation/" onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">Lead Generation Services</a></li>
                        <li><a href="/b2b-lead-generation/" onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">B2B Lead Generation</a></li> {/* Assuming this service slug exists */}
                        <li><a href="/web-design-development/" onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">Web Design & Development</a></li>
                        <li><a href="/landing-page-optimization/" onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">Landing Page Optimization</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Industry Solutions Panel */}
              {activeMenu === 'industrySolutions' && (
                <div>
                  <h3 className="text-white font-bold text-xl mb-8 text-center">Industry-Specific Solutions</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {comprehensiveIndustries.slice(0, 8).map(industry => (
                      <a
                        key={industry.slug}
                        href={`/industries/${industry.slug}/digital-marketing/`}
                        onClick={onClose}
                        className="block p-3 bg-slate-800/50 hover:bg-slate-700/70 rounded-lg text-gray-300 hover:text-white text-sm transition-colors"
                      >
                        {industry.name} Marketing
                      </a>
                    ))}
                  </div>
                  <div className="col-span-full text-center mt-6">
                    <a href="/industries/" onClick={onClose} className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
                      View All Industry Solutions &raquo;
                    </a>
                  </div>
                </div>
              )}

              {/* Locations Panel */}
              {activeMenu === 'locations' && (
                 <div>
                  <h3 className="text-white font-bold text-xl mb-8 text-center">Our Presence Across India</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-400 mb-3">Metro Cities</h4>
                      <ul className="space-y-2">
                        {allIndianLocations.flatMap(s => s.cities).filter(c => c.isMetro).slice(0,5).map(city => (
                          <li key={city.slug}><a href={`/digital-marketing/${allIndianLocations.find(s => s.cities.some(ct => ct.slug === city.slug))?.stateSlug}/${city.slug}/`} onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">{city.name}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-400 mb-3">Tier 2 Cities</h4>
                       <ul className="space-y-2">
                        {allIndianLocations.flatMap(s => s.cities).filter(c => c.tier === 2).slice(0,5).map(city => (
                          <li key={city.slug}><a href={`/digital-marketing/${allIndianLocations.find(s => s.cities.some(ct => ct.slug === city.slug))?.stateSlug}/${city.slug}/`} onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">{city.name}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-400 mb-3">Tier 3 Cities</h4>
                      <ul className="space-y-2">
                        {allIndianLocations.flatMap(s => s.cities).filter(c => c.tier === 3).slice(0,5).map(city => (
                          <li key={city.slug}><a href={`/digital-marketing/${allIndianLocations.find(s => s.cities.some(ct => ct.slug === city.slug))?.stateSlug}/${city.slug}/`} onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">{city.name}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-400 mb-3">Explore All</h4>
                      <ul className="space-y-2">
                        <li><a href="/locations/" onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">All Locations Hub</a></li>
                        {majorStates.slice(0,4).map(state => (
                           <li key={state.stateSlug}><a href={`/locations/${state.stateSlug}/`} onClick={onClose} className="block text-gray-300 hover:text-white text-sm transition-colors">{state.state}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Resources Panel */}
              {activeMenu === 'resources' && (
                <div>
                  <h3 className="text-white font-bold text-xl mb-8 text-center">Knowledge & Tools</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    <ul className="space-y-3">
                      <li><a href="/blog/" onClick={onClose} className="block p-3 bg-slate-800/50 hover:bg-slate-700/70 rounded-lg text-gray-300 hover:text-white transition-colors">Blog & Articles</a></li>
                      <li><a href="/case-studies/" onClick={onClose} className="block p-3 bg-slate-800/50 hover:bg-slate-700/70 rounded-lg text-gray-300 hover:text-white transition-colors">Client Case Studies</a></li>
                    </ul>
                    <ul className="space-y-3">
                      <li><a href="/tools/marketing-automation-roi-calculator/" onClick={onClose} className="block p-3 bg-slate-800/50 hover:bg-slate-700/70 rounded-lg text-gray-300 hover:text-white transition-colors">ROI Calculator</a></li>
                      <li><a href="/tools/" onClick={onClose} className="block p-3 bg-slate-800/50 hover:bg-slate-700/70 rounded-lg text-gray-300 hover:text-white transition-colors">All Tools</a></li>
                    </ul>
                     <ul className="space-y-3 sm:col-span-2 md:col-span-1 md:col-start-1"> {/* Example of spanning for more items or centering */}
                       <li><a href="/digital-marketing-consultation/" onClick={onClose} className="block p-3 bg-slate-800/50 hover:bg-slate-700/70 rounded-lg text-gray-300 hover:text-white transition-colors">Free Consultation</a></li>
                    </ul>
                     <ul className="space-y-3 sm:col-span-2 md:col-span-1">
                       <li><a href="/contact/" onClick={onClose} className="block p-3 bg-slate-800/50 hover:bg-slate-700/70 rounded-lg text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                    </ul>
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
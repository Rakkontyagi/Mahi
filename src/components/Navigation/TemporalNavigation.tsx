import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Clock, Brain, Zap, ChevronDown } from 'lucide-react';
import { use4DContext } from '../../hooks/use4DContext';
import { GodDigitalNavLogo } from '../Brand/GodDigitalLogo';

const navigationItems = [
  { 
    label: 'Services', 
    href: '#services', 
    quantum: true,
    dropdown: [
      { label: 'Digital Marketing Delhi', href: '/digital-marketing-delhi' },
      { label: 'AI Automation Delhi', href: '/ai-automation-delhi' },
      { label: 'Business Automation Delhi', href: '/business-automation-delhi' },
      { label: 'SEO Services Delhi', href: '/seo-services-delhi' },
      { label: 'PPC Management Delhi', href: '/ppc-management-delhi' },
      { label: 'Social Media Marketing Delhi', href: '/social-media-marketing-delhi' }
    ]
  },
  { 
    label: 'Locations', 
    href: '#locations', 
    temporal: true,
    dropdown: [
      { label: 'Delhi Digital Marketing', href: '/digital-marketing-delhi' },
      { label: 'Mumbai Digital Marketing', href: '/digital-marketing-mumbai' },
      { label: 'Bangalore Digital Marketing', href: '/digital-marketing-bangalore' },
      { label: 'Chennai Digital Marketing', href: '/digital-marketing-chennai' },
      { label: 'Hyderabad Digital Marketing', href: '/digital-marketing-hyderabad' },
      { label: 'All Cities', href: '/locations' }
    ]
  },
  { 
    label: 'Industries', 
    href: '#industries', 
    dimensional: true,
    dropdown: [
      { label: 'E-commerce Digital Marketing', href: '/ecommerce-digital-marketing' },
      { label: 'Healthcare Digital Marketing', href: '/healthcare-digital-marketing' },
      { label: 'Real Estate Digital Marketing', href: '/real-estate-digital-marketing' },
      { label: 'Education Digital Marketing', href: '/education-digital-marketing' },
      { label: 'Technology Digital Marketing', href: '/technology-digital-marketing' },
      { label: 'All Industries', href: '/industries' }
    ]
  },
  { label: 'Portfolio', href: '#portfolio', adaptive: true },
  { label: 'Contact', href: '#contact', contextual: true }
];

export const TemporalNavigation: React.FC = () => {
  const { timeContext, userMemory, recordInteraction } = use4DContext();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('services');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNavigationClick = (item: typeof navigationItems[0]) => {
    recordInteraction({
      type: 'click',
      element: `navigation-${item.label}`,
      intensity: 0.6
    });
    setActiveSection(item.label.toLowerCase());
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const getTemporalStyle = () => {
    const baseOpacity = timeContext.timeOfDay === 'night' ? 0.95 : 1;
    return {
      backgroundColor: `rgba(0, 0, 0, ${baseOpacity})`,
      backdropFilter: 'blur(12px)'
    };
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800"
      style={getTemporalStyle()}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Updated logo */}
          <GodDigitalNavLogo animated={true} />

          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <div key={item.label} className="relative">
                <motion.button
                  className={`relative text-sm font-medium transition-colors duration-300 flex items-center space-x-1 ${
                    activeSection === item.label.toLowerCase() 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => item.dropdown ? handleDropdownToggle(item.label) : handleNavigationClick(item)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <span>{item.label}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                  
                  {item.quantum && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white rounded-full"
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                  )}

                  {item.temporal && (
                    <Clock className="absolute -top-1 -right-3 w-3 h-3 text-gray-500" />
                  )}

                  {activeSection === item.label.toLowerCase() && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <motion.a
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: dropdownIndex * 0.05 }}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem.label}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <motion.div
              className="flex items-center space-x-2 px-3 py-1 border border-gray-700 rounded-full bg-black/50"
              animate={{
                borderColor: timeContext.timeOfDay === 'night' ? '#374151' : '#6B7280'
              }}
            >
              <Zap className="w-3 h-3 text-white" />
              <span className="text-white text-xs">
                {timeContext.timeOfDay} | {userMemory.interactions.length}
              </span>
            </motion.div>
          </div>

          <motion.button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-3">
                {navigationItems.map((item, index) => (
                  <div key={item.label}>
                    <motion.button
                      className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300"
                      onClick={() => item.dropdown ? handleDropdownToggle(item.label) : handleNavigationClick(item)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>
                        {item.dropdown && (
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} />
                        )}
                      </div>
                    </motion.button>
                    
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        className="pl-6 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
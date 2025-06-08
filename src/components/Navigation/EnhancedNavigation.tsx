import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { GodDigitalNavLogo } from '../Brand/GodDigitalLogo';
import { MegaMenu } from './MegaMenu';

export const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top Bar */}
      <div className="border-b border-gray-800/50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-green-400" />
                <span className="text-gray-300">+91 9999999999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-blue-400" />
                <span className="text-gray-300">contact@goddigitalmarketing.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-gray-400">
              <span>Serving 500+ Cities Across India</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <GodDigitalNavLogo animated={true} />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <MegaMenu
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              activeMenu={activeMenu}
              onMenuChange={setActiveMenu}
            />

            <a
              href="/about/"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="/case-studies/"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Case Studies
            </a>
            <a
              href="/blog/"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Blog
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="/contact/"
              className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-white"
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
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="space-y-6">
                {/* Mobile Services */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Services</h3>
                  <div className="space-y-2 pl-4">
                    {['Digital Marketing', 'AI Automation', 'Lead Generation', 'Social Media Management'].map((service) => (
                      <a
                        key={service}
                        href={`/${service.toLowerCase().replace(' ', '-')}/`}
                        className="block text-gray-300 hover:text-white transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile Locations */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Locations</h3>
                  <div className="space-y-2 pl-4">
                    {['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad'].map((city) => (
                      <a
                        key={city}
                        href={`/digital-marketing-${city.toLowerCase()}/`}
                        className="block text-gray-300 hover:text-white transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {city}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <motion.a
                  href="/contact/"
                  className="block w-full px-6 py-3 bg-white text-black font-semibold rounded-full text-center hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                >
                  Get Free Consultation
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
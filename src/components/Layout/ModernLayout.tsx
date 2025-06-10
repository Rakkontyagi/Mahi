import React, { useState, useEffect } from 'react';
import { GodDigitalLogoWithText } from '../Logo/GodDigitalLogo';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const ModernLayout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      label: 'Services',
      href: '/services',
      submenu: [
        { label: 'Digital Marketing', href: '/services/digital-marketing' },
        { label: 'AI Automation', href: '/services/ai-automation' },
        { label: 'Business Automation', href: '/services/business-automation' },
        { label: 'SEO Services', href: '/services/seo-services' },
        { label: 'PPC Advertising', href: '/services/ppc-advertising' },
        { label: 'Social Media Marketing', href: '/services/social-media-marketing' }
      ]
    },
    {
      label: 'Locations',
      href: '/locations',
      submenu: [
        { label: 'Mumbai', href: '/locations/mumbai' },
        { label: 'Delhi', href: '/locations/delhi' },
        { label: 'Bangalore', href: '/locations/bangalore' },
        { label: 'Chennai', href: '/locations/chennai' },
        { label: 'Hyderabad', href: '/locations/hyderabad' },
        { label: 'Pune', href: '/locations/pune' }
      ]
    },
    {
      label: 'Industries',
      href: '/industries',
      submenu: [
        { label: 'Healthcare', href: '/industries/healthcare' },
        { label: 'Real Estate', href: '/industries/real-estate' },
        { label: 'E-commerce', href: '/industries/ecommerce' },
        { label: 'Education', href: '/industries/education' },
        { label: 'Manufacturing', href: '/industries/manufacturing' },
        { label: 'Technology', href: '/industries/technology' }
      ]
    },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <div className={`min-h-screen bg-white ${className}`}>
      {/* Modern Header with 4D Effects */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <GodDigitalLogoWithText 
                size="md" 
                variant="dark" 
                showTagline={false}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-900 hover:text-black font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-50"
                  >
                    {item.label}
                  </a>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="p-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors duration-200"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="/contact"
                className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200/50">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    className="block text-gray-900 font-medium py-2"
                  >
                    {item.label}
                  </a>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block text-gray-600 py-1"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="/contact"
                className="block bg-black text-white px-6 py-3 rounded-lg font-medium text-center mt-6"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        {children}
      </main>

      {/* Modern Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <GodDigitalLogoWithText 
                size="lg" 
                variant="light" 
                showTagline={true}
                className="mb-6"
              />
              <p className="text-gray-300 mb-6 max-w-md">
                India's leading digital marketing agency providing comprehensive solutions 
                for businesses across 500+ cities. Transform your digital presence with 
                our expert strategies and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="/services/digital-marketing" className="text-gray-300 hover:text-white transition-colors duration-200">Digital Marketing</a></li>
                <li><a href="/services/ai-automation" className="text-gray-300 hover:text-white transition-colors duration-200">AI Automation</a></li>
                <li><a href="/services/business-automation" className="text-gray-300 hover:text-white transition-colors duration-200">Business Automation</a></li>
                <li><a href="/services/seo-services" className="text-gray-300 hover:text-white transition-colors duration-200">SEO Services</a></li>
                <li><a href="/services/ppc-advertising" className="text-gray-300 hover:text-white transition-colors duration-200">PPC Advertising</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors duration-200">Careers</a></li>
                <li><a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 God Digital Marketing. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Divine Digital Solutions for Godly Growth
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernLayout;

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Zap, Users, TrendingUp, Building } from 'lucide-react';
import { GodDigitalNavLogo } from '../Brand/GodDigitalLogo';
import { allIndianLocations, comprehensiveServices, comprehensiveIndustries } from '../../data/comprehensiveLocations';

export const EnhancedFooter: React.FC = () => {

  const targetServiceSlugs = ["digital-marketing", "ai-automation", "lead-generation"];
  const targetLocationData = [
    { citySlug: "mumbai", stateSlug: "maharashtra", cityName: "Mumbai" }, // Assuming city name is readily available or can be added
    { citySlug: "new-delhi", stateSlug: "delhi", cityName: "New Delhi" },
    { citySlug: "bangalore", stateSlug: "karnataka", cityName: "Bangalore" },
  ];

  const locationLinks = targetServiceSlugs.slice(0,1).flatMap(serviceSlug => {
    const service = comprehensiveServices.find(s => s.slug === serviceSlug);
    if (!service) return [];
    return targetLocationData.map(loc => ({
      text: `${service.name} in ${loc.cityName}`,
      href: `/${service.slug}/${loc.stateSlug}/${loc.citySlug}/`
    }));
  }).slice(0, 3); // Ensure we only take 3-4 links in total for this example


  const targetIndustrySlugs = ["healthcare", "real-estate", "ecommerce", "technology"];
  const industryLinks = targetIndustrySlugs.slice(0, 4).map(slug => {
    const industry = comprehensiveIndustries.find(i => i.slug === slug);
    if (!industry) return null; // Handle not found, though it should exist
    return {
      text: `${industry.name} Solutions`, // Or "Marketing"
      href: `/industries/${slug}/digital-marketing/` // Assuming digital-marketing context
    };
  }).filter(Boolean); // Remove nulls if any industry wasn't found

  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"> {/* Updated grid layout */}
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2" {/* Explicitly span 2 columns */}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <GodDigitalNavLogo animated={false} />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              India's premier digital marketing agency delivering revolutionary AI-powered solutions, 
              lead generation, and business automation across all states and cities.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white" />
                <span className="text-gray-300">+91 9999999999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white" />
                <span className="text-gray-300">contact@goddigitalmarketing.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-gray-300">24/7 Support Available</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { icon: <MapPin className="w-4 h-4" />, label: "Cities", value: "500+" },
                { icon: <Users className="w-4 h-4" />, label: "Clients", value: "2000+" },
                { icon: <TrendingUp className="w-4 h-4" />, label: "ROI", value: "340%" },
                { icon: <Zap className="w-4 h-4" />, label: "Success", value: "98%" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="flex justify-center mb-2 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-white font-bold text-lg">{stat.value}</div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services by Location */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Services by Location
            </h3>
            <ul className="space-y-3">
              {locationLinks.length > 0 ? locationLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    {link.text}
                  </a>
                </li>
              )) : (
                <li><span className="text-gray-500 text-sm">Selected locations coming soon...</span></li>
              )}
            </ul>
            <a href="/locations/" className="text-blue-400 hover:text-white transition-colors duration-300 text-sm mt-4 inline-block">
              View All Locations &raquo;
            </a>
          </motion.div>

          {/* Services by Industry */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <Building className="w-5 h-5 mr-2" />
              Services by Industry
            </h3>
            <ul className="space-y-3">
              {industryLinks.length > 0 ? industryLinks.map(link => link && ( // Added null check for link
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    {link.text}
                  </a>
                </li>
              )) : (
                <li><span className="text-gray-500 text-sm">Selected industries coming soon...</span></li>
              )}
            </ul>
            <a href="/industries/" className="text-blue-400 hover:text-white transition-colors duration-300 text-sm mt-4 inline-block">
              View All Industries &raquo;
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><a href="/about/" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">About Us</a></li>
              <li><a href="/portfolio/" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Portfolio</a></li>
              <li><a href="/testimonials/" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Testimonials</a></li>
              <li><a href="/contact/" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Contact Us</a></li>
              <li><a href="/privacy-policy/" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="/terms-of-service/" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a></li>
              <li><a href="/sitemap/" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Sitemap</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Removed Service + Location Matrix section */}

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              © {new Date().getFullYear()} God Digital Marketing. All rights reserved.
            </motion.div>
            
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-gray-400 text-sm">Serving all 28 Indian States & 8 UTs</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </motion.div>
          </div>

          {/* Removed Additional Links grid */}
        </div>
      </div>
    </footer>
  );
};
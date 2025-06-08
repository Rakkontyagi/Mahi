import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, Target, Zap, Users, TrendingUp } from 'lucide-react';
import { GodDigitalNavLogo } from '../Brand/GodDigitalLogo';
import { indianLocations, services } from '../../data/locations';

export const Footer: React.FC = () => {
  const majorStates = indianLocations.slice(0, 8);
  const quickServices = services.slice(0, 4);

  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
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
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {quickServices.map((service, index) => (
                <motion.li
                  key={service.slug}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <a
                    href={`/${service.slug}/`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    title={service.description}
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{service.name}</span>
                  </a>
                </motion.li>
              ))}
              <li>
                <a
                  href="/services/"
                  className="text-white hover:text-gray-300 transition-colors duration-300 font-medium"
                >
                  View All Services →
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Major Locations</h3>
            <ul className="space-y-3">
              {majorStates.map((state, index) => (
                <motion.li
                  key={state.stateSlug}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <a
                    href={`/locations/${state.stateSlug}/`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    title={`Digital marketing services in ${state.state}`}
                  >
                    <MapPin className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{state.state}</span>
                  </a>
                </motion.li>
              ))}
              <li>
                <a
                  href="/locations/"
                  className="text-white hover:text-gray-300 transition-colors duration-300 font-medium"
                >
                  All Locations →
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Our Impact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold">500+</div>
                  <div className="text-gray-400 text-sm">Cities Served</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold">2000+</div>
                  <div className="text-gray-400 text-sm">Happy Clients</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold">340%</div>
                  <div className="text-gray-400 text-sm">Average ROI</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold">24/7</div>
                  <div className="text-gray-400 text-sm">AI Automation</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              © 2024 God Digital Marketing. All rights reserved. | 
              <a href="/privacy-policy/" className="hover:text-white transition-colors duration-300 ml-1">Privacy Policy</a> | 
              <a href="/terms-of-service/" className="hover:text-white transition-colors duration-300 ml-1">Terms of Service</a>
            </motion.div>
            
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-gray-400 text-sm">Serving all 28 Indian States</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};
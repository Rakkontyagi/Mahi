import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Award, Users, Target, Phone, Mail, Clock, CheckCircle, Building } from 'lucide-react';
import { BaseCard } from '../Shared/BaseCard';
import { AnimatedSection } from '../Shared/AnimatedSection';
import { SEOHead } from '../SEO/SEOHead';
import { ServiceLocationsFooter } from '../Shared/ServiceLocationsFooter';
import { getAnchorText } from '../Shared/AnchorTextUtils';
import { comprehensiveServices, allIndianLocations, comprehensiveIndustries } from '../../data/comprehensiveLocations';

interface ServiceLocationTemplateProps {
  service: {
    name: string;
    slug: string;
    description: string;
    keywords: string[];
    subServices?: Array<{ name: string; slug: string }>;
  };
  location: {
    city: string;
    state: string;
    citySlug: string;
    stateSlug: string;
    population?: number;
    isMetro?: boolean;
    industries?: string[];
    tier: 1 | 2 | 3;
  };
  relatedServices?: Array<{
    name: string;
    slug: string;
    url: string;
  }>;
  nearbyLocations?: Array<{
    city: string;
    citySlug: string;
    stateSlug: string;
    url: string;
  }>;
}

export const ServiceLocationTemplate: React.FC<ServiceLocationTemplateProps> = ({
  service,
  location,
  relatedServices = [],
  nearbyLocations = []
}) => {
  const pageTitle = `${service.name} in ${location.city}, ${location.state}`;
  const roiImprovement = location.tier === 1 ? "400%" : location.tier === 2 ? "350%" : "300%";
  const clientCount = location.tier === 1 ? "500+" : location.tier === 2 ? "300+" : "200+";
  
  const benefits = [
    `Proven ROI improvement of ${roiImprovement}+ for ${location.city} businesses`,
    `Local ${location.city} market expertise and insights`,
    "24/7 AI-powered automation systems",
    `Dedicated ${location.city}-based account management`,
    "Real-time performance tracking and analytics",
    `Industry-specific strategies for ${location.city} market`
  ];

  const stats = [
    { icon: <MapPin className="w-6 h-6" />, label: `${location.city} Presence`, value: "5+ Years" },
    { icon: <Users className="w-6 h-6" />, label: `${location.city} Clients`, value: clientCount },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Average ROI", value: roiImprovement },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "98%" }
  ];

  const processSteps = [
    {
      step: "01",
      title: `${location.city} Market Analysis`,
      description: `Comprehensive analysis of ${location.city} market dynamics and competitor landscape`
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: `Custom ${service.name.toLowerCase()} strategies tailored for ${location.city} businesses`
    },
    {
      step: "03",
      title: "Implementation",
      description: `Expert execution of campaigns with ${location.city}-focused optimization`
    },
    {
      step: "04",
      title: "Performance Optimization",
      description: `Continuous monitoring and optimization for maximum ${location.city} market impact`
    }
  ];

  const seoData = {
    title: `${pageTitle} | God Digital Marketing`,
    description: `Professional ${service.name.toLowerCase()} in ${location.city}, ${location.state}. Proven results with ${roiImprovement} ROI improvement. Expert ${service.slug.replace('-', ' ')} solutions for ${location.city} businesses.`,
    keywords: [
      `${service.slug} ${location.citySlug}`,
      `${service.slug} ${location.city}`,
      `${service.name.toLowerCase()} ${location.city}`,
      `${service.name.toLowerCase()} ${location.state}`,
      ...service.keywords.map(keyword => `${keyword} ${location.city}`),
      `digital marketing ${location.city}`,
      `marketing agency ${location.city}`,
      `${location.city} ${service.slug}`,
      `best ${service.slug} ${location.city}`
    ],
    canonicalUrl: `https://goddigitalmarketing.com/${service.slug}/${location.stateSlug}/${location.citySlug}/`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `God Digital Marketing - ${service.name} ${location.city}`,
      "description": `Professional ${service.name.toLowerCase()} services in ${location.city}, ${location.state}`,
      "url": `https://goddigitalmarketing.com/${service.slug}/${location.stateSlug}/${location.citySlug}/`,
      "telephone": "+91-9999999999",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location.city,
        "addressRegion": location.state,
        "addressCountry": "India"
      }
    }
  };

  const usedAnchors = new Set<string>();

  return (
    <>
      <SEOHead {...seoData} />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <AnimatedSection direction="up">
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center space-x-2 mb-6 px-4 py-2 border border-gray-800 rounded-full bg-black/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Building className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">{location.isMetro ? 'Metro City' : `Tier ${location.tier} City`} Service</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {service.name} in
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    {location.city}, {location.state}
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Transform your {location.city} business with our expert {service.name.toLowerCase()} and 
                  advanced digital solutions. Proven results for businesses across {location.state}.
                </p>
              </div>
            </AnimatedSection>

            {/* Stats Grid */}
            <AnimatedSection direction="up" delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <BaseCard
                    key={stat.label}
                    title={stat.value}
                    description={stat.label}
                    variant="glass"
                    className="text-center"
                  >
                    <div className="flex justify-center mb-4 text-white">
                      {stat.icon}
                    </div>
                  </BaseCard>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Why Choose Our {service.name} in {location.city}?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our {location.city}-based team specializes in delivering exceptional {service.name.toLowerCase()} 
                    that drives measurable results for businesses across {location.state}. We understand the unique 
                    market dynamics of {location.city} and tailor our strategies accordingly.
                  </p>
                  
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <BaseCard
                  title="Get Started Today"
                  description=""
                  variant="glass"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-white" />
                      <span className="text-gray-300">+91 9999999999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-white" />
                      <span className="text-gray-300">contact@goddigitalmarketing.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-white" />
                      <span className="text-gray-300">24/7 Support Available</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full mt-6 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Free Consultation
                  </motion.button>
                </BaseCard>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our {service.name} Process in {location.city}
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Proven methodology that delivers consistent results for {location.city} businesses
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.step} direction="up" delay={index * 0.1}>
                  <BaseCard
                    title={step.title}
                    description={step.description}
                    variant="glass"
                    className="text-center h-full"
                  >
                    <div className="text-4xl font-bold text-white/20 mb-4">{step.step}</div>
                  </BaseCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your {location.city} Business?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join hundreds of successful businesses in {location.city} that trust God Digital Marketing 
                for their {service.name.toLowerCase()} needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Strategy Session
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Case Studies
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Related Links Section */}
        <section className="py-12 bg-black border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Related Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Related Services</h3>
              <ul className="space-y-2">
                {comprehensiveServices.filter(s => s.slug !== service.slug).slice(0, 6).map(s => (
                  <li key={s.slug}>
                    <a href={`/${s.slug}/${location.stateSlug}/${location.citySlug}/`} className="text-blue-400 hover:text-white text-sm">
                      {getAnchorText('service', s, { city: location.city }, usedAnchors)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Related Locations */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Related Locations</h3>
              <ul className="space-y-2">
                {allIndianLocations.slice(0, 6).map(state => (
                  <li key={state.stateSlug}>
                    <a href={`/${service.slug}/${state.stateSlug}/`} className="text-blue-400 hover:text-white text-sm">
                      {getAnchorText('location', state, { service: service.name }, usedAnchors)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Related Industries */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Related Industries</h3>
              <ul className="space-y-2">
                {comprehensiveIndustries.slice(0, 6).map(i => (
                  <li key={i.slug}>
                    <a href={`/${service.slug}/${i.slug}/`} className="text-blue-400 hover:text-white text-sm">
                      {getAnchorText('industry', i, { service: service.name }, usedAnchors)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <ServiceLocationsFooter service={service} />
    </>
  );
};
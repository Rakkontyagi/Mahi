import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Award, Users, Target, Zap, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { GlassmorphismCard } from '../Advanced/GlassmorphismCard';
import { ScrollReveal } from '../Advanced/ParallaxSection';

interface ServiceLocationPageProps {
  service: {
    name: string;
    slug: string;
    description: string;
    keywords: string[];
  };
  location: {
    city: string;
    state: string;
    citySlug: string;
    stateSlug: string;
    population?: number;
    isMetro?: boolean;
    industries?: string[];
  };
  nearbyLocations?: Array<{
    city: string;
    citySlug: string;
    stateSlug: string;
  }>;
}

export const ServiceLocationPage: React.FC<ServiceLocationPageProps> = ({
  service,
  location,
  nearbyLocations = []
}) => {
  const pageTitle = `${service.name} in ${location.city}, ${location.state}`;
  const primaryKeyword = `${service.slug} ${location.citySlug}`;

  const benefits = [
    "Proven ROI improvement of 340%+",
    "Local market expertise and insights",
    "24/7 AI-powered automation",
    "Dedicated account management",
    "Real-time performance tracking",
    "Industry-specific strategies"
  ];

  const stats = [
    { icon: <MapPin className="w-6 h-6" />, label: "Local Presence", value: "5+ Years" },
    { icon: <Users className="w-6 h-6" />, label: "Clients Served", value: "200+" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Average ROI", value: "340%" },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "98%" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Strategy Development",
      description: `Comprehensive analysis of ${location.city} market dynamics and competitor landscape`
    },
    {
      step: "02", 
      title: "Implementation",
      description: `Deploy proven ${service.name.toLowerCase()} strategies tailored for ${location.city} businesses`
    },
    {
      step: "03",
      title: "Optimization",
      description: "Continuous monitoring and optimization for maximum ROI and performance"
    },
    {
      step: "04",
      title: "Scaling",
      description: "Scale successful campaigns and expand reach across target markets"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center space-x-2 mb-6 px-4 py-2 border border-gray-800 rounded-full bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Target className="w-4 h-4 text-white" />
                <span className="text-white text-sm">{location.isMetro ? 'Metro City' : 'Major City'} Service</span>
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
          </ScrollReveal>

          {/* Stats Grid */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <GlassmorphismCard key={stat.label} className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </GlassmorphismCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
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
            </ScrollReveal>

            <ScrollReveal direction="right">
              <GlassmorphismCard className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
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
              </GlassmorphismCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our {service.name} Process in {location.city}
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Proven methodology that delivers consistent results for {location.city} businesses
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.step} direction="up" delay={index * 0.1}>
                <GlassmorphismCard className="p-6 text-center h-full">
                  <div className="text-4xl font-bold text-white/20 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </GlassmorphismCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {location.city} Market Expertise
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Deep understanding of {location.city}'s business landscape and consumer behavior
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {location.industries?.slice(0, 6).map((industry, index) => (
              <ScrollReveal key={industry} direction="up" delay={index * 0.1}>
                <GlassmorphismCard className="p-6 text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 capitalize">{industry}</h3>
                  <p className="text-gray-300 text-sm">
                    Specialized {service.name.toLowerCase()} for {industry} businesses in {location.city}
                  </p>
                </GlassmorphismCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      {nearbyLocations.length > 0 && (
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our {service.name} Across {location.state}
                </h2>
                <p className="text-gray-300 text-lg">
                  Serving businesses throughout {location.state} with consistent quality and results
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {nearbyLocations.map((nearbyLocation, index) => (
                <ScrollReveal key={nearbyLocation.citySlug} direction="up" delay={index * 0.05}>
                  <motion.a
                    href={`/${service.slug}/${nearbyLocation.stateSlug}/${nearbyLocation.citySlug}/`}
                    className="block p-4 border border-gray-800 bg-black/30 hover:bg-white/5 transition-colors duration-300 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-white font-medium">{nearbyLocation.city}</div>
                    <div className="text-gray-400 text-sm">{service.name}</div>
                  </motion.a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal direction="up">
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
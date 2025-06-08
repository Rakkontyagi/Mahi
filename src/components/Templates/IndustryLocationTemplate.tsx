import React from 'react';
import { motion } from 'framer-motion';
import { Building, TrendingUp, Award, Users, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { BaseCard } from '../Shared/BaseCard';
import { AnimatedSection } from '../Shared/AnimatedSection';
import { SEOHead } from '../SEO/SEOHead';

interface IndustryLocationTemplateProps {
  industry: {
    name: string;
    slug: string;
    description: string;
  };
  service: {
    name: string;
    slug: string;
  };
  location?: {
    city: string;
    state: string;
    citySlug: string;
    stateSlug: string;
  };
}

export const IndustryLocationTemplate: React.FC<IndustryLocationTemplateProps> = ({
  industry,
  service,
  location
}) => {
  const pageTitle = location 
    ? `${service.name} for ${industry.name} in ${location.city}, ${location.state}`
    : `${service.name} for ${industry.name} Industry`;

  const benefits = [
    `Specialized ${service.name.toLowerCase()} strategies for ${industry.name.toLowerCase()} businesses`,
    `Industry-specific compliance and best practices`,
    `Proven results in ${industry.name.toLowerCase()} sector`,
    `Expert team with ${industry.name.toLowerCase()} experience`,
    `Customized solutions for ${industry.name.toLowerCase()} challenges`,
    `ROI-focused campaigns for ${industry.name.toLowerCase()} growth`
  ];

  const stats = [
    { icon: <Building className="w-6 h-6" />, label: `${industry.name} Clients`, value: "150+" },
    { icon: <Users className="w-6 h-6" />, label: "Industry Experience", value: "8+ Years" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Average Growth", value: "280%" },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "96%" }
  ];

  const seoData = {
    title: `${pageTitle} | God Digital Marketing`,
    description: `Specialized ${service.name.toLowerCase()} for ${industry.name.toLowerCase()} businesses${location ? ` in ${location.city}, ${location.state}` : ''}. Industry-specific strategies and proven results.`,
    keywords: [
      `${service.slug} ${industry.slug}`,
      `${industry.slug} ${service.slug}`,
      `${industry.name.toLowerCase()} ${service.name.toLowerCase()}`,
      ...(location ? [
        `${service.slug} ${industry.slug} ${location.citySlug}`,
        `${industry.slug} marketing ${location.city}`,
        `${location.city} ${industry.slug} ${service.slug}`
      ] : [])
    ],
    canonicalUrl: location 
      ? `https://goddigitalmarketing.com/${service.slug}/${industry.slug}/${location.stateSlug}/${location.citySlug}/`
      : `https://goddigitalmarketing.com/${service.slug}/${industry.slug}/`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": pageTitle,
      "description": `Specialized ${service.name.toLowerCase()} services for ${industry.name.toLowerCase()} businesses`,
      "provider": {
        "@type": "Organization",
        "name": "God Digital Marketing"
      }
    }
  };

  return (
    <>
      <SEOHead {...seoData} />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <AnimatedSection direction="up">
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center space-x-2 mb-6 px-4 py-2 border border-gray-800 rounded-full bg-black/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Building className="w-4 h-4 text-blue-400" />
                  <span className="text-white text-sm">{industry.name} Industry Specialist</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {service.name} for
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {industry.name} {location ? `in ${location.city}` : 'Industry'}
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Specialized {service.name.toLowerCase()} solutions designed specifically for {industry.name.toLowerCase()} businesses. 
                  {location && ` Serving ${location.city}, ${location.state} with industry expertise.`}
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
                    <div className="flex justify-center mb-4 text-blue-400">
                      {stat.icon}
                    </div>
                  </BaseCard>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Why Choose Our {industry.name} {service.name}?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our specialized team understands the unique challenges and opportunities in the {industry.name.toLowerCase()} industry. 
                    We deliver {service.name.toLowerCase()} solutions that comply with industry standards and drive real results.
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
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <BaseCard
                  title="Get Industry-Specific Solutions"
                  description=""
                  variant="glass"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">+91 9999999999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">{industry.slug}@goddigitalmarketing.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">24/7 {industry.name} Support</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get {industry.name} Consultation
                  </motion.button>
                </BaseCard>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your {industry.name} Business?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join successful {industry.name.toLowerCase()} businesses that trust our specialized {service.name.toLowerCase()} solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start {industry.name} Campaign
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View {industry.name} Case Studies
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};
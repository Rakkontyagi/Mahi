import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Award, Users, Target, Phone, Mail, Clock, CheckCircle, Building } from 'lucide-react';
import { BaseCard } from '../Shared/BaseCard';
import { AnimatedSection } from '../Shared/AnimatedSection';
import { SEOHead } from '../SEO/SEOHead';
import { ComprehensiveServiceData, HireUsFocusedData } from '../../data/comprehensiveLocations'; // Import richer types
import { List, Check, Star, DollarSign, TrendingUp as TrendingUpIcon, Users as UsersIcon, Zap, ShieldCheck, Presentation } from 'lucide-react'; // More icons

interface ServiceLocationTemplateProps {
  service: ComprehensiveServiceData; // Use ComprehensiveServiceData
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
  const AGENCY_NAME = "God Digital Marketing";
  const hireData = service.hireUsFocusedData;

  const interpolate = (template?: string): string => {
    if (!template) return '';
    return template
      .replace(/{serviceName}/g, service.name)
      .replace(/{cityName}/g, location.city)
      .replace(/{agencyName}/g, AGENCY_NAME);
  };

  const pageTitle = hireData?.heroTitleTemplate
    ? interpolate(hireData.heroTitleTemplate)
    : `${service.name} in ${location.city}, ${location.state}`;
  
  const heroSubtitle = hireData?.heroSubtitleTemplate
    ? interpolate(hireData.heroSubtitleTemplate)
    : `Transform your ${location.city} business with our expert ${service.name.toLowerCase()} and advanced digital solutions. Proven results for businesses across ${location.state}.`;

  // Original generic benefits, used if hireData is not present
  const genericBenefits = [
    `Proven ROI improvement of ${(location.tier === 1 ? "400%" : location.tier === 2 ? "350%" : "300%")}+ for ${location.city} businesses`,
    `Local ${location.city} market expertise and insights`,
    "24/7 AI-powered automation systems", // This might be too specific for a generic list
    `Dedicated ${location.city}-based account management`,
    "Real-time performance tracking and analytics",
    `Industry-specific strategies for ${location.city} market`
  ];

  // Stats can remain generic or be part of hireUsFocusedData in future
  const stats = [
    { icon: <MapPin className="w-6 h-6" />, label: `${location.city} Presence`, value: "5+ Years" },
    { icon: <UsersIcon className="w-6 h-6" />, label: `${location.city} Clients`, value: location.tier === 1 ? "500+" : location.tier === 2 ? "300+" : "200+" },
    { icon: <TrendingUpIcon className="w-6 h-6" />, label: "Average ROI", value: location.tier === 1 ? "400%" : location.tier === 2 ? "350%" : "300%" },
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

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight break-words">
                  {hireData?.heroTitleTemplate ? interpolate(hireData.heroTitleTemplate) :
                    <>
                      {service.name} in
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        {location.city}, {location.state}
                      </span>
                    </>
                  }
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed break-words">
                  {heroSubtitle}
                </p>
              </div>
            </AnimatedSection>

            {/* Stats Grid - Remains for now, could be part of hireUsFocusedData later */}
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

        {/* Main Content Section */}
        <section className="py-12 md:py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              {/* Left Column (Main Content) */}
              <div className="lg:col-span-2 space-y-10 md:space-y-12">

                <AnimatedSection direction="left" delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                    {hireData ? `Understanding Our ${service.name} for ${location.city}` : `Why Choose Our ${service.name} in ${location.city}?`}
                  </h2>
                  {service.description && (
                    <p className="text-gray-300 text-md sm:text-lg mb-6 leading-relaxed break-words">
                      {service.description}
                    </p>
                  )}
                  {!hireData && ( /* Original intro paragraph if no hireData */
                    <p className="text-gray-300 text-md sm:text-lg mb-6 leading-relaxed">
                      Our {location.city}-based team specializes in delivering exceptional {service.name.toLowerCase()}
                      that drives measurable results for businesses across {location.state}. We understand the unique
                      market dynamics of {location.city} and tailor our strategies accordingly.
                    </p>
                  )}
                </AnimatedSection>

                {hireData ? (
                  <>
                    {hireData.whyHireOurAgencyPoints && hireData.whyHireOurAgencyPoints.length > 0 && (
                      <AnimatedSection direction="left" delay={0.2}>
                        <BaseCard variant="glass" className="p-4 sm:p-6">
                          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center"><ShieldCheck className="w-6 h-6 mr-2 text-blue-400 flex-shrink-0" />Why Hire {AGENCY_NAME} for {service.name} in {location.city}?</h3>
                          <ul className="space-y-3">
                            {hireData.whyHireOurAgencyPoints.map((point, i) => (
                              <li key={`why-${i}`} className="flex items-start text-gray-300 text-sm sm:text-base">
                                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mr-2 mt-1" />
                                <span dangerouslySetInnerHTML={{ __html: interpolate(point).replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-300">$1</strong>') }} />
                              </li>
                            ))}
                          </ul>
                        </BaseCard>
                      </AnimatedSection>
                    )}

                    {hireData.ourApproachSummary && (
                       <AnimatedSection direction="left" delay={0.3}>
                        <BaseCard variant="glass" className="p-4 sm:p-6">
                          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center"><Zap className="w-6 h-6 mr-2 text-purple-400 flex-shrink-0" />Our Approach to {service.name} in {location.city}</h3>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed break-words">{interpolate(hireData.ourApproachSummary)}</p>
                        </BaseCard>
                      </AnimatedSection>
                    )}

                    {hireData.partnershipBenefits && hireData.partnershipBenefits.length > 0 && (
                      <AnimatedSection direction="left" delay={0.4}>
                        <BaseCard variant="glass" className="p-4 sm:p-6">
                          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center"><UsersIcon className="w-6 h-6 mr-2 text-teal-400 flex-shrink-0" />Your Partnership Benefits in {location.city}</h3>
                           <ul className="space-y-3">
                            {hireData.partnershipBenefits.map((benefit, i) => (
                              <li key={`partner-${i}`} className="flex items-start text-gray-300 text-sm sm:text-base">
                                <Star className="w-5 h-5 text-teal-400 flex-shrink-0 mr-2 mt-1" />
                                {interpolate(benefit)}
                              </li>
                            ))}
                          </ul>
                        </BaseCard>
                      </AnimatedSection>
                    )}
                  </>
                ) : (
                  // Original generic benefits list
                  <AnimatedSection direction="left" delay={0.2}>
                    <div className="space-y-4">
                      {genericBenefits.map((benefit, index) => (
                        <motion.div
                          key={benefit}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm sm:text-base">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </AnimatedSection>
                )}

                {/* Sub Services Section - Render regardless of hireData */}
                {service.subServices && service.subServices.length > 0 && (
                  <AnimatedSection direction="left" delay={hireData ? 0.5 : 0.3}>
                    <BaseCard variant="glass" className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
                        <List className="w-6 h-6 mr-2 text-indigo-400 flex-shrink-0" /> Core Components of Our {service.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.subServices.map(subService => (
                          <span key={subService.slug} className="bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full">
                            {subService.name}
                          </span>
                        ))}
                      </div>
                    </BaseCard>
                  </AnimatedSection>
                )}

                {hireData && hireData.pricingModelStatement && (
                  <AnimatedSection direction="left" delay={0.6}>
                    <BaseCard variant="glass" className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 flex items-center"><DollarSign className="w-6 h-6 mr-2 text-green-400 flex-shrink-0" />Pricing for {service.name} in {location.city}</h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed break-words">{interpolate(hireData.pricingModelStatement)}</p>
                    </BaseCard>
                  </AnimatedSection>
                )}

                {hireData && hireData.gettingStartedSteps && hireData.gettingStartedSteps.length > 0 && (
                  <AnimatedSection direction="left" delay={0.7}>
                    <BaseCard variant="glass" className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center"><Presentation className="w-6 h-6 mr-2 text-blue-400 flex-shrink-0" />Getting Started With Us in {location.city}</h3>
                      <ol className="list-decimal list-outside space-y-3 pl-5 text-gray-300">
                        {hireData.gettingStartedSteps.map((step, i) => (
                          <li key={`step-${i}`} className="text-sm sm:text-base pl-1.5 break-words" dangerouslySetInnerHTML={{ __html: interpolate(step).replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-300">$1</strong>') }} />
                        ))}
                      </ol>
                    </BaseCard>
                  </AnimatedSection>
                )}
              </div>

              {/* Right Column (CTA Card) */}
              <AnimatedSection direction="right" delay={0.2} className="lg:sticky lg:top-24 h-fit">
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
                  {hireData ? `Request a Proposal for ${service.name}` : "Get Free Strategy Session"}
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {hireData ? `Learn More About Our Work in ${location.city}` : "View Case Studies"}
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};
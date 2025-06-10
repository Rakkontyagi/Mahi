import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Award, Users, Target, Phone, Mail, Clock, CheckCircle, Building, Star, ArrowRight, DollarSign, Calendar, BarChart3 } from 'lucide-react';
import { BaseCard } from '../Shared/BaseCard';
import { AnimatedSection } from '../Shared/AnimatedSection';
import { SEOHead } from '../SEO/SEOHead';
import { ServiceLocationsFooter } from '../Shared/ServiceLocationsFooter';
import { getAnchorText } from '../Shared/AnchorTextUtils';
import { comprehensiveServices, allIndianLocations, comprehensiveIndustries } from '../../data/comprehensiveLocations';
import { getServiceLocationCombinedSchema, getFAQSchema, getReviewSchema } from '../../utils/seoStructuredData';

interface EnhancedServiceLocationTemplateProps {
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

export const EnhancedServiceLocationTemplate: React.FC<EnhancedServiceLocationTemplateProps> = ({
  service,
  location,
  relatedServices = [],
  nearbyLocations = []
}) => {
  const pageTitle = `${service.name} in ${location.city}, ${location.state}`;
  const roiImprovement = location.tier === 1 ? "500%" : location.tier === 2 ? "400%" : "350%";
  const clientCount = location.tier === 1 ? "800+" : location.tier === 2 ? "500+" : "300+";
  const avgProjectValue = location.tier === 1 ? "₹2.5 lakhs" : location.tier === 2 ? "₹1.8 lakhs" : "₹1.2 lakhs";
  
  // Dynamic content based on location tier and characteristics
  const getLocationInsights = () => {
    const insights = {
      1: {
        marketDynamics: `${location.city} represents India's premier business hub with over ${location.population?.toLocaleString()} residents and a thriving ${location.industries?.join(', ')} ecosystem. The city's strategic position as a ${location.isMetro ? 'metropolitan center' : 'major business hub'} creates unique opportunities for digital marketing growth.`,
        businessLandscape: `The competitive landscape in ${location.city} demands sophisticated digital strategies. With over 50,000+ businesses actively competing online, our data-driven approach ensures your brand stands out in this dynamic market.`,
        growthProjection: `${location.city}'s digital economy is projected to grow at 35% CAGR, making it the perfect time to establish your digital presence with our proven ${service.name.toLowerCase()} strategies.`
      },
      2: {
        marketDynamics: `${location.city} is emerging as a significant business center in ${location.state} with ${location.population?.toLocaleString()} residents. The city's growing ${location.industries?.join(', ')} sectors present excellent opportunities for businesses ready to embrace digital transformation.`,
        businessLandscape: `As ${location.city} transitions into a digital-first economy, early adopters of comprehensive ${service.name.toLowerCase()} gain substantial competitive advantages. Our local expertise helps businesses navigate this evolving landscape.`,
        growthProjection: `With ${location.city}'s business growth rate at 28% annually, companies investing in professional digital marketing services are seeing unprecedented returns on their marketing investments.`
      },
      3: {
        marketDynamics: `${location.city} represents an untapped opportunity in ${location.state}'s growing economy. With ${location.population?.toLocaleString()} residents and strengthening ${location.industries?.join(', ')} industries, the city offers significant potential for digital growth.`,
        businessLandscape: `The relatively lower digital competition in ${location.city} creates exceptional opportunities for businesses to establish market leadership through strategic ${service.name.toLowerCase()} implementation.`,
        growthProjection: `As ${location.city} develops its digital infrastructure, businesses that invest in professional marketing services now position themselves for long-term market dominance.`
      }
    };
    return insights[location.tier];
  };

  const locationInsights = getLocationInsights();

  // FAQ Data for Schema
  const faqData = [
    {
      question: `How much does ${service.name} cost in ${location.city}?`,
      answer: `${service.name} pricing in ${location.city} typically ranges from ₹25,000 to ₹2,00,000 per month, depending on business size, industry competition, and service scope. Our packages are designed to deliver measurable ROI for ${location.city} businesses.`
    },
    {
      question: `How long does it take to see results from ${service.name} in ${location.city}?`,
      answer: `Most ${location.city} businesses see initial improvements within 30-60 days, with significant results typically achieved within 3-6 months. Our proven methodology has helped ${clientCount} businesses in ${location.city} achieve their digital marketing goals.`
    },
    {
      question: `What makes God Digital Marketing different in ${location.city}?`,
      answer: `Our deep understanding of ${location.city}'s market dynamics, combined with ${location.industries?.join(', ')} industry expertise, ensures tailored strategies that deliver results. We've achieved an average ${roiImprovement} ROI improvement for our ${location.city} clients.`
    },
    {
      question: `Do you work with ${location.industries?.[0]} businesses in ${location.city}?`,
      answer: `Yes, we specialize in ${location.industries?.join(', ')} industries in ${location.city}. Our industry-specific approach has helped numerous ${location.city} businesses achieve market leadership through strategic ${service.name.toLowerCase()}.`
    },
    {
      question: `What's included in your ${service.name} packages for ${location.city} businesses?`,
      answer: `Our ${location.city} packages include comprehensive strategy development, implementation, monitoring, and optimization. Each package is customized based on your business goals, target audience, and competitive landscape in ${location.city}.`
    }
  ];

  // Review Data for Schema
  const reviewData = [
    { rating: 5, author: `${location.city} Business Owner`, text: `Exceptional ${service.name.toLowerCase()} results in ${location.city}!` },
    { rating: 5, author: `${location.industries?.[0]} Company CEO`, text: `Transformed our business in ${location.city} market.` },
    { rating: 5, author: `Local Entrepreneur`, text: `Best digital marketing agency in ${location.city}.` }
  ];

  // Enhanced pricing packages
  const pricingPackages = [
    {
      name: "Starter Growth",
      price: "₹25,000-50,000/month",
      description: `Perfect for small ${location.city} businesses ready to establish their digital presence`,
      features: [
        `${location.city} market analysis and competitor research`,
        "Basic SEO optimization and local search setup",
        "Social media presence establishment",
        "Monthly performance reporting",
        "Dedicated account manager"
      ]
    },
    {
      name: "Professional Scale",
      price: "₹50,000-1,50,000/month", 
      description: `Comprehensive solution for growing ${location.city} businesses`,
      features: [
        `Advanced ${service.name.toLowerCase()} strategy for ${location.city}`,
        "Multi-channel campaign management",
        "Industry-specific content creation",
        "Conversion optimization and A/B testing",
        "Weekly strategy calls and reporting"
      ]
    },
    {
      name: "Enterprise Domination",
      price: "₹1,50,000+/month",
      description: `Market leadership solution for large ${location.city} enterprises`,
      features: [
        `Custom ${service.name.toLowerCase()} architecture for ${location.city} market`,
        "Advanced analytics and attribution modeling",
        "Dedicated team with industry specialists",
        "Real-time optimization and reporting",
        "Executive-level strategic consulting"
      ]
    }
  ];

  // Process steps with location-specific details
  const processSteps = [
    {
      step: "01",
      title: `${location.city} Market Deep-Dive Analysis`,
      description: `Comprehensive analysis of ${location.city}'s competitive landscape, consumer behavior patterns, and market opportunities specific to ${location.industries?.join(', ')} industries.`,
      timeline: "Week 1",
      deliverables: ["Market analysis report", "Competitor intelligence", "Opportunity mapping"]
    },
    {
      step: "02", 
      title: "Strategic Blueprint Development",
      description: `Custom ${service.name.toLowerCase()} strategy designed specifically for ${location.city} market dynamics, incorporating local trends and consumer preferences.`,
      timeline: "Week 2",
      deliverables: ["Strategic roadmap", "Campaign architecture", "Success metrics definition"]
    },
    {
      step: "03",
      title: "Implementation & Launch",
      description: `Expert execution of campaigns with ${location.city}-focused optimization, including local SEO, geotargeted advertising, and market-specific content creation.`,
      timeline: "Week 3-4",
      deliverables: ["Campaign launch", "Initial optimization", "Baseline metrics"]
    },
    {
      step: "04",
      title: "Performance Optimization",
      description: `Continuous monitoring and optimization for maximum ${location.city} market impact, with data-driven adjustments and strategic refinements.`,
      timeline: "Ongoing",
      deliverables: ["Performance reports", "Strategy refinements", "ROI optimization"]
    }
  ];

  const benefits = [
    `Proven ${roiImprovement} ROI improvement for ${location.city} businesses`,
    `Deep local expertise in ${location.city} market dynamics and consumer behavior`,
    `Industry specialization in ${location.industries?.join(', ')} sectors`,
    `24/7 AI-powered automation and monitoring systems`,
    `Dedicated ${location.city}-based account management team`,
    `Real-time performance tracking with transparent reporting`,
    `Market leadership positioning strategies for ${location.city}`,
    `Comprehensive competitor analysis and differentiation tactics`
  ];

  const stats = [
    { icon: <MapPin className="w-6 h-6" />, label: `${location.city} Experience`, value: "8+ Years" },
    { icon: <Users className="w-6 h-6" />, label: `${location.city} Clients`, value: clientCount },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Average ROI", value: roiImprovement },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "99.2%" },
    { icon: <DollarSign className="w-6 h-6" />, label: "Avg Project Value", value: avgProjectValue },
    { icon: <Star className="w-6 h-6" />, label: "Client Rating", value: "4.9/5" }
  ];

  // Case studies with specific results
  const caseStudies = [
    {
      industry: location.industries?.[0] || "Technology",
      challenge: `A leading ${location.industries?.[0]} company in ${location.city} struggled with online visibility despite having excellent products and services.`,
      solution: `Implemented comprehensive ${service.name.toLowerCase()} strategy with ${location.city}-focused optimization and industry-specific targeting.`,
      results: [
        "400% increase in qualified leads within 6 months",
        "₹25 lakhs additional revenue in first year",
        "85% improvement in search visibility",
        "300% growth in social media engagement"
      ]
    },
    {
      industry: location.industries?.[1] || "Healthcare", 
      challenge: `A ${location.city}-based startup needed to establish market presence and compete with established players in the competitive ${location.industries?.[1]} sector.`,
      solution: `Developed targeted digital marketing campaigns focusing on ${location.city} market penetration and brand establishment.`,
      results: [
        "500% increase in website traffic",
        "250% growth in customer acquisition", 
        "₹15 lakhs revenue in first 8 months",
        "95% customer satisfaction rate"
      ]
    }
  ];

  const seoData = {
    title: `${pageTitle} | #1 Ranked ${service.name} Company - God Digital Marketing`,
    description: `Transform your ${location.city} business with expert ${service.name.toLowerCase()}. Proven ${roiImprovement} ROI improvement for ${clientCount} businesses. Industry-leading strategies for ${location.industries?.join(', ')} sectors in ${location.city}, ${location.state}.`,
    keywords: [
      `${service.slug} ${location.citySlug}`,
      `${service.name.toLowerCase()} ${location.city}`,
      `best ${service.slug} company ${location.city}`,
      `professional ${service.slug} ${location.state}`,
      `${location.city} ${service.slug} agency`,
      `top ${service.slug} services ${location.city}`,
      `digital marketing ${location.city}`,
      `${service.name.toLowerCase()} pricing ${location.city}`,
      `${service.slug} results ${location.city}`,
      `${location.industries?.[0]} ${service.slug} ${location.city}`
    ],
    canonicalUrl: `https://goddigitalmarketing.com/${service.slug}/${location.stateSlug}/${location.citySlug}/`,
    structuredData: getServiceLocationCombinedSchema({
      service: service.name,
      location: location.city,
      faqs: faqData,
      reviews: reviewData,
      offers: true
    })
  };

  const usedAnchors = new Set<string>();

  return (
    <>
      <SEOHead {...seoData} />
      <div className="min-h-screen bg-black text-white">
        {/* Enhanced Hero Section */}
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
                  <span className="text-white text-sm">
                    {location.isMetro ? 'Metro City' : `Tier ${location.tier} City`} • Industry Leader
                  </span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  #1 {service.name} in
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    {location.city}, {location.state}
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                  Transform your {location.city} business with our expert {service.name.toLowerCase()} and 
                  advanced digital solutions. Proven {roiImprovement} ROI improvement for {clientCount} businesses 
                  across {location.state}.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Free {location.city} Strategy Session
                  </motion.button>
                  <motion.button
                    className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View {location.city} Case Studies
                  </motion.button>
                </div>
              </div>
            </AnimatedSection>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
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
          </div>
        </section>

        {/* Service Overview - Enhanced Content */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Why {location.city} Businesses Choose Our {service.name}
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {locationInsights.marketDynamics}
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
                  title={`Start Your ${location.city} Success Story`}
                  description=""
                  variant="glass"
                  className="p-8"
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">+91 9999999999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">contact@goddigitalmarketing.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">24/7 Support Available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">Serving {location.city} & {location.state}</span>
                    </div>
                    <motion.button
                      className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Free {location.city} Consultation
                    </motion.button>
                  </div>
                </BaseCard>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Market Insights & Trends Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {location.city} Market Insights & Digital Opportunities
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Understanding {location.city}'s unique business landscape and growth potential
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <BaseCard
                title="Market Dynamics"
                description=""
                variant="glass"
                className="p-6"
              >
                <BarChart3 className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-gray-300 leading-relaxed">
                  {locationInsights.businessLandscape}
                </p>
              </BaseCard>

              <BaseCard
                title="Growth Projection"
                description=""
                variant="glass"
                className="p-6"
              >
                <TrendingUp className="w-8 h-8 text-green-400 mb-4" />
                <p className="text-gray-300 leading-relaxed">
                  {locationInsights.growthProjection}
                </p>
              </BaseCard>

              <BaseCard
                title="Competitive Advantage"
                description=""
                variant="glass"
                className="p-6"
              >
                <Target className="w-8 h-8 text-purple-400 mb-4" />
                <p className="text-gray-300 leading-relaxed">
                  Our {service.name.toLowerCase()} expertise gives {location.city} businesses the edge needed 
                  to dominate their markets and achieve sustainable growth.
                </p>
              </BaseCard>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {location.city} Success Stories & Results
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Real results from real {location.city} businesses that transformed their growth
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <AnimatedSection key={index} direction={index % 2 === 0 ? "left" : "right"}>
                  <BaseCard
                    title={`${study.industry} Success in ${location.city}`}
                    description=""
                    variant="glass"
                    className="p-8 h-full"
                  >
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Results Achieved</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </BaseCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Proven {service.name} Process for {location.city}
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Strategic methodology designed specifically for {location.city} market success
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.step} direction="up" delay={index * 0.1}>
                  <BaseCard
                    title={step.title}
                    description=""
                    variant="glass"
                    className="text-center h-full p-6"
                  >
                    <div className="text-4xl font-bold text-white/20 mb-4">{step.step}</div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                    <div className="text-sm text-blue-400 mb-2">{step.timeline}</div>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {step.deliverables.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </BaseCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {service.name} Pricing for {location.city} Businesses
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Transparent pricing designed to deliver maximum ROI for {location.city} companies
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPackages.map((pkg, index) => (
                <AnimatedSection key={pkg.name} direction="up" delay={index * 0.1}>
                  <BaseCard
                    title={pkg.name}
                    description=""
                    variant="glass"
                    className={`p-8 h-full ${index === 1 ? 'border-blue-500 border-2' : ''}`}
                  >
                    <div className="text-center mb-6">
                      <div className="text-2xl font-bold text-white mb-2">{pkg.price}</div>
                      <p className="text-gray-300 text-sm">{pkg.description}</p>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <motion.button
                      className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                        index === 1 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                          : 'border border-gray-600 text-white hover:border-white'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started in {location.city}
                    </motion.button>
                  </BaseCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Frequently Asked Questions - {location.city}
                </h2>
                <p className="text-gray-300 text-lg">
                  Common questions about {service.name.toLowerCase()} in {location.city}
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                  <BaseCard
                    title={faq.question}
                    description=""
                    variant="glass"
                    className="p-6"
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </BaseCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Dominate {location.city}'s Digital Landscape?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
                Join {clientCount} successful businesses in {location.city} that trust God Digital Marketing 
                for their {service.name.toLowerCase()} needs. Get your free strategy session today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-2">
                    <span>Get Free {location.city} Strategy Session</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.button>
                <motion.button
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View {location.city} Portfolio
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Enhanced Related Links Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Related Services */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Related Services in {location.city}</h3>
                <ul className="space-y-3">
                  {comprehensiveServices.filter(s => s.slug !== service.slug).slice(0, 8).map(s => (
                    <li key={s.slug}>
                      <a 
                        href={`/${s.slug}/${location.stateSlug}/${location.citySlug}/`} 
                        className="text-blue-400 hover:text-white transition-colors duration-300 text-sm flex items-center space-x-2"
                      >
                        <ArrowRight className="w-3 h-3" />
                        <span>{getAnchorText('service', s, { city: location.city }, usedAnchors)}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Locations */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">{service.name} in Other Cities</h3>
                <ul className="space-y-3">
                  {allIndianLocations.slice(0, 8).map(state => (
                    <li key={state.stateSlug}>
                      <a 
                        href={`/${service.slug}/${state.stateSlug}/`} 
                        className="text-blue-400 hover:text-white transition-colors duration-300 text-sm flex items-center space-x-2"
                      >
                        <ArrowRight className="w-3 h-3" />
                        <span>{getAnchorText('location', state, { service: service.name }, usedAnchors)}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Industries */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Industry Solutions in {location.city}</h3>
                <ul className="space-y-3">
                  {comprehensiveIndustries.slice(0, 8).map(i => (
                    <li key={i.slug}>
                      <a 
                        href={`/${service.slug}/${i.slug}/${location.stateSlug}/${location.citySlug}/`} 
                        className="text-blue-400 hover:text-white transition-colors duration-300 text-sm flex items-center space-x-2"
                      >
                        <ArrowRight className="w-3 h-3" />
                        <span>{getAnchorText('industry', i, { service: service.name, city: location.city }, usedAnchors)}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ServiceLocationsFooter service={service} />
    </>
  );
};
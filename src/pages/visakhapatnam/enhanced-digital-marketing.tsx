import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Award, Users, Target, Phone, Mail, Clock, CheckCircle, Building, Star, ArrowRight, DollarSign, BarChart3, Calendar, Globe, Zap, Shield } from 'lucide-react';
import { BaseCard } from '../../components/Shared/BaseCard';
import { AnimatedSection } from '../../components/Shared/AnimatedSection';
import { SEOHead } from '../../components/SEO/SEOHead';
import { TrustSignals } from '../../components/TrustSignals';
import { Testimonials } from '../../components/Testimonials';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { getServiceLocationCombinedSchema } from '../../utils/seoStructuredData';

export default function EnhancedVisakhapatnamDigitalMarketingPage() {
  // Location-specific data
  const location = {
    city: "Visakhapatnam",
    state: "Andhra Pradesh", 
    population: "1,730,320",
    tier: 1,
    industries: ["port", "steel", "petrochemicals", "pharmaceuticals", "tourism", "technology"],
    economicGrowth: "15.8%",
    businessCount: "25,000+",
    digitalAdoption: "68%"
  };

  // Enhanced FAQ data for schema
  const faqData = [
    {
      question: "How much does digital marketing cost in Visakhapatnam?",
      answer: "Digital marketing costs in Visakhapatnam typically range from ₹25,000 to ₹2,00,000 per month, depending on business size, industry competition, and service scope. Our packages are designed to deliver measurable ROI for Visakhapatnam businesses, with most clients seeing 400-500% return on investment."
    },
    {
      question: "How long does it take to see digital marketing results in Visakhapatnam?",
      answer: "Most Visakhapatnam businesses see initial improvements within 30-60 days, with significant results typically achieved within 3-6 months. Our proven methodology has helped 800+ businesses in Visakhapatnam achieve their digital marketing goals, with average ranking improvements of 400%."
    },
    {
      question: "What makes God Digital Marketing different in Visakhapatnam?",
      answer: "Our deep understanding of Visakhapatnam's unique market dynamics, combined with port, steel, petrochemicals industry expertise, ensures tailored strategies that deliver results. We've achieved an average 500% ROI improvement for our Visakhapatnam clients and maintain a 99.2% success rate."
    },
    {
      question: "Do you work with port and steel industry businesses in Visakhapatnam?",
      answer: "Yes, we specialize in port, steel, petrochemicals, pharmaceuticals industries in Visakhapatnam. Our industry-specific approach has helped numerous Visakhapatnam businesses achieve market leadership through strategic digital marketing, including major port authorities and steel manufacturers."
    },
    {
      question: "What's included in your digital marketing packages for Visakhapatnam businesses?",
      answer: "Our Visakhapatnam packages include comprehensive strategy development, SEO optimization, PPC advertising, social media marketing, content creation, implementation, monitoring, and optimization. Each package is customized based on your business goals, target audience, and competitive landscape in Visakhapatnam."
    },
    {
      question: "Can you help Visakhapatnam businesses compete with larger cities like Hyderabad and Chennai?",
      answer: "Absolutely! Our strategic approach leverages Visakhapatnam's unique advantages as a major port city and industrial hub. We've helped local businesses compete nationally and internationally, with several clients achieving #1 rankings in competitive markets dominated by larger cities."
    }
  ];

  // Case studies with specific Visakhapatnam results
  const caseStudies = [
    {
      title: "Major Port Authority Digital Transformation",
      industry: "Port & Logistics",
      challenge: "A leading port authority in Visakhapatnam needed to enhance online visibility and attract international shipping clients while competing with major ports like Mumbai and Chennai.",
      solution: "Implemented comprehensive digital marketing strategy with multilingual SEO, international PPC campaigns, and industry-specific content marketing targeting global shipping routes.",
      results: [
        "650% increase in international client inquiries",
        "₹45 crores additional revenue from new shipping contracts",
        "300% improvement in search visibility for logistics keywords",
        "250% growth in website traffic from international markets"
      ],
      timeline: "8 months",
      roi: "800%"
    },
    {
      title: "Steel Manufacturing Company Market Leadership",
      industry: "Steel & Manufacturing",
      challenge: "A Visakhapatnam-based steel manufacturer struggled with online presence despite being a major supplier to automotive and construction industries across India.",
      solution: "Developed B2B-focused digital marketing campaigns with technical SEO, industry trade publication advertising, and LinkedIn marketing targeting procurement managers.",
      results: [
        "500% increase in B2B lead generation",
        "₹25 crores new contracts secured through digital channels", 
        "400% improvement in industry keyword rankings",
        "180% growth in qualified supplier inquiries"
      ],
      timeline: "6 months",
      roi: "950%"
    },
    {
      title: "Pharmaceutical Startup National Expansion",
      industry: "Pharmaceuticals",
      challenge: "A Visakhapatnam pharmaceutical startup needed rapid market penetration to compete with established players in major metro markets.",
      solution: "Created aggressive digital marketing strategy with compliance-focused content, medical professional targeting, and regulatory-approved advertising campaigns.",
      results: [
        "1200% increase in product inquiries from doctors",
        "₹18 crores revenue in first year of digital presence",
        "90% market penetration in target therapeutic areas",
        "350% growth in distributor network applications"
      ],
      timeline: "12 months",
      roi: "1100%"
    }
  ];

  // Enhanced pricing packages for Visakhapatnam
  const pricingPackages = [
    {
      name: "Visakhapatnam Startup Growth",
      price: "₹25,000-50,000/month",
      description: "Perfect for new Visakhapatnam businesses ready to establish their digital presence in the competitive port city market",
      features: [
        "Visakhapatnam market analysis and port industry competitor research",
        "Local SEO optimization for Visakhapatnam searches",
        "Google My Business optimization for local visibility",
        "Social media presence establishment on key platforms",
        "Basic PPC campaigns targeting Visakhapatnam demographics",
        "Monthly performance reporting with local insights",
        "Dedicated Visakhapatnam-based account manager"
      ],
      bestFor: "Startups, local services, retail businesses",
      guarantee: "30-day money-back guarantee"
    },
    {
      name: "Visakhapatnam Business Scale",
      price: "₹50,000-1,50,000/month",
      description: "Comprehensive solution for established Visakhapatnam businesses ready to dominate regional markets",
      features: [
        "Advanced digital marketing strategy for Visakhapatnam industrial sector",
        "Multi-channel campaign management (SEO, PPC, Social, Content)",
        "Industry-specific content creation for port, steel, pharma sectors",
        "Advanced analytics and conversion optimization",
        "Reputation management and review optimization",
        "Weekly strategy calls and detailed reporting",
        "Access to premium tools and industry databases"
      ],
      bestFor: "Manufacturing, trading companies, professional services",
      guarantee: "90-day performance guarantee"
    },
    {
      name: "Visakhapatnam Market Domination",
      price: "₹1,50,000+/month",
      description: "Enterprise solution for large Visakhapatnam corporations aiming for national and international market leadership",
      features: [
        "Custom digital marketing architecture for Visakhapatnam enterprise market",
        "International market expansion campaigns",
        "Advanced B2B lead generation systems",
        "C-suite executive thought leadership campaigns",
        "Real-time competitive intelligence and market monitoring",
        "Dedicated team of 5+ specialists with industry expertise",
        "Executive-level monthly strategy reviews"
      ],
      bestFor: "Large manufacturers, port authorities, multinational companies",
      guarantee: "ROI guarantee or money back"
    }
  ];

  // Market insights specific to Visakhapatnam
  const marketInsights = {
    economy: `Visakhapatnam's economy is driven by its strategic location as India's third-largest port, handling over 65 million tonnes of cargo annually. The city's industrial base includes major steel plants, petrochemical refineries, and pharmaceutical manufacturing units, contributing ₹85,000 crores to the regional economy.`,
    
    digital: `With ${location.digitalAdoption} digital adoption rate among businesses, Visakhapatnam presents unique opportunities for digital marketing growth. The city's tech-savvy workforce and increasing internet penetration (78% urban) create ideal conditions for digital business expansion.`,
    
    competition: `While competition is moderate compared to metros, the quality bar is high due to presence of multinational corporations. Local businesses need sophisticated digital strategies to compete with international players operating from Visakhapatnam's port and industrial zones.`,
    
    opportunities: `Visakhapatnam's emergence as a smart city and proposed fintech hub creates unprecedented opportunities for digital-first businesses. The government's push for digital infrastructure development offers first-mover advantages for businesses investing in comprehensive digital marketing.`
  };

  const seoData = {
    title: "Digital Marketing in Visakhapatnam | #1 Digital Marketing Company Andhra Pradesh",
    description: "Transform your Visakhapatnam business with expert digital marketing services. Proven 500% ROI improvement for 800+ businesses. Industry-leading strategies for port, steel, pharmaceutical sectors in Visakhapatnam, Andhra Pradesh.",
    keywords: [
      "digital marketing visakhapatnam",
      "digital marketing company visakhapatnam", 
      "seo services visakhapatnam",
      "ppc advertising visakhapatnam",
      "social media marketing visakhapatnam",
      "best digital marketing agency visakhapatnam",
      "digital marketing andhra pradesh",
      "visakhapatnam marketing agency",
      "port industry digital marketing",
      "steel industry digital marketing visakhapatnam",
      "pharmaceutical marketing visakhapatnam",
      "vizag digital marketing",
      "digital marketing services andhra pradesh",
      "visakhapatnam seo company",
      "google ads management visakhapatnam"
    ],
    canonicalUrl: "https://goddigitalmarketing.com/visakhapatnam/digital-marketing/",
    structuredData: getServiceLocationCombinedSchema({
      service: "Digital Marketing Services",
      location: "Visakhapatnam",
      faqs: faqData,
      reviews: [
        { rating: 5, author: "Visakhapatnam Port Authority", text: "Exceptional digital marketing results for our international operations!" },
        { rating: 5, author: "Steel Industry CEO", text: "Transformed our B2B lead generation in Visakhapatnam market." },
        { rating: 5, author: "Pharma Company Director", text: "Best digital marketing agency in Visakhapatnam - outstanding ROI!" }
      ],
      offers: true
    })
  };

  return (
    <>
      <SEOHead {...seoData} />
      <main className="min-h-screen bg-black text-white">
        <Breadcrumbs currentPage="Digital Marketing in Visakhapatnam | Best Digital Marketing Company" />
        
        {/* Enhanced Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <motion.div
                  className="inline-flex items-center space-x-2 mb-6 px-6 py-3 border border-gray-800 rounded-full bg-black/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">Visakhapatnam's #1 Digital Marketing Agency</span>
                  <Star className="w-5 h-5 text-yellow-400" />
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                  Digital Marketing in
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                    Visakhapatnam
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
                  Dominate Andhra Pradesh's digital landscape with our proven marketing strategies. 
                  <strong className="text-white"> 800+ successful businesses</strong> in Visakhapatnam trust us for 
                  <strong className="text-blue-400"> 500% average ROI improvement</strong> and market leadership in 
                  port, steel, pharmaceutical, and technology sectors.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <motion.button
                    className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Free Visakhapatnam Strategy Session
                  </motion.button>
                  <motion.button
                    className="px-10 py-5 border-2 border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-xl text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Visakhapatnam Success Stories
                  </motion.button>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <BaseCard title="800+" description="Visakhapatnam Clients" variant="glass" className="text-center">
                    <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  </BaseCard>
                  <BaseCard title="500%" description="Average ROI" variant="glass" className="text-center">
                    <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  </BaseCard>
                  <BaseCard title="99.2%" description="Success Rate" variant="glass" className="text-center">
                    <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  </BaseCard>
                  <BaseCard title="₹150Cr+" description="Client Revenue Generated" variant="glass" className="text-center">
                    <DollarSign className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  </BaseCard>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why Choose Us Section - Enhanced */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Visakhapatnam Businesses Choose God Digital Marketing
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Deep industry expertise meets cutting-edge technology to deliver unparalleled results 
                  for Visakhapatnam's dynamic business landscape
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Local Market Mastery</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {marketInsights.economy} Our team understands the unique challenges and opportunities 
                        of marketing industrial businesses in India's ship-building capital.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600 p-3 rounded-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Industry Specialization</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Specialized expertise in port operations, steel manufacturing, petrochemicals, 
                        and pharmaceutical sectors. We speak your industry's language and understand 
                        B2B buying cycles in technical industries.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 p-3 rounded-lg">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Proven Results</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Average 500% ROI improvement across all client categories. Our data-driven approach 
                        and continuous optimization ensure sustainable growth for Visakhapatnam businesses 
                        competing in national and international markets.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <BaseCard
                  title="Start Your Visakhapatnam Success Journey"
                  description=""
                  variant="glass"
                  className="p-8"
                >
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h4 className="text-2xl font-bold text-white mb-2">Get Your Free Digital Audit</h4>
                      <p className="text-gray-300">Comprehensive analysis of your current digital presence</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-6 h-6 text-green-400" />
                        <span className="text-gray-300">Free competitive analysis worth ₹25,000</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <BarChart3 className="w-6 h-6 text-blue-400" />
                        <span className="text-gray-300">Custom strategy roadmap for your industry</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-6 h-6 text-purple-400" />
                        <span className="text-gray-300">30-minute consultation with industry expert</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="w-6 h-6 text-cyan-400" />
                        <span className="text-gray-300">Market opportunity assessment</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-6 space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">+91 9999999999</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">visakhapatnam@goddigitalmarketing.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">Serving Visakhapatnam & Andhra Pradesh</span>
                      </div>
                    </div>

                    <motion.button
                      className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Claim Your Free Visakhapatnam Digital Audit
                    </motion.button>
                  </div>
                </BaseCard>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Market Insights Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Visakhapatnam Digital Marketing Landscape
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Understanding the unique opportunities and challenges in Andhra Pradesh's industrial capital
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BaseCard title="Economic Overview" description="" variant="glass" className="p-8">
                <BarChart3 className="w-12 h-12 text-blue-400 mb-6" />
                <p className="text-gray-300 leading-relaxed mb-4">
                  {marketInsights.economy}
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Third-largest port in India</li>
                  <li>• ₹85,000 crores industrial contribution</li>
                  <li>• 65+ million tonnes cargo capacity</li>
                  <li>• 15.8% annual economic growth</li>
                </ul>
              </BaseCard>

              <BaseCard title="Digital Adoption" description="" variant="glass" className="p-8">
                <Globe className="w-12 h-12 text-green-400 mb-6" />
                <p className="text-gray-300 leading-relaxed mb-4">
                  {marketInsights.digital}
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• 68% business digital adoption rate</li>
                  <li>• 78% urban internet penetration</li>
                  <li>• Smart city development initiatives</li>
                  <li>• Growing fintech ecosystem</li>
                </ul>
              </BaseCard>

              <BaseCard title="Competitive Landscape" description="" variant="glass" className="p-8">
                <Target className="w-12 h-12 text-purple-400 mb-6" />
                <p className="text-gray-300 leading-relaxed mb-4">
                  {marketInsights.competition}
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Moderate local competition</li>
                  <li>• High-quality international players</li>
                  <li>• Opportunity for market leadership</li>
                  <li>• Growing B2B digital demand</li>
                </ul>
              </BaseCard>

              <BaseCard title="Growth Opportunities" description="" variant="glass" className="p-8">
                <TrendingUp className="w-12 h-12 text-cyan-400 mb-6" />
                <p className="text-gray-300 leading-relaxed mb-4">
                  {marketInsights.opportunities}
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Smart city digital infrastructure</li>
                  <li>• Fintech hub development</li>
                  <li>• Export business digitization</li>
                  <li>• First-mover advantages available</li>
                </ul>
              </BaseCard>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Visakhapatnam Success Stories
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Real results from real Visakhapatnam businesses across port, steel, and pharmaceutical industries
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <AnimatedSection key={index} direction={index % 2 === 0 ? "left" : "right"}>
                  <BaseCard
                    title={study.title}
                    description=""
                    variant="glass"
                    className="p-8"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">{study.industry}</span>
                          <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">{study.roi} ROI</span>
                          <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">{study.timeline}</span>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                          <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                          <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Results Achieved</h4>
                        <ul className="space-y-3">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300 text-sm">{result}</span>
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

        {/* Pricing Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Digital Marketing Pricing for Visakhapatnam Businesses
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Transparent, results-driven pricing designed for Visakhapatnam's diverse business landscape
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingPackages.map((pkg, index) => (
                <AnimatedSection key={pkg.name} direction="up" delay={index * 0.1}>
                  <BaseCard
                    title={pkg.name}
                    description=""
                    variant="glass"
                    className={`p-8 h-full ${index === 1 ? 'border-blue-500 border-2 relative' : ''}`}
                  >
                    {index === 1 && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <div className="text-3xl font-bold text-white mb-2">{pkg.price}</div>
                      <p className="text-gray-300 text-sm leading-relaxed">{pkg.description}</p>
                      <div className="mt-4">
                        <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                          {pkg.bestFor}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mb-6">
                      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-3">
                        <div className="flex items-center space-x-2">
                          <Shield className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 text-sm font-medium">{pkg.guarantee}</span>
                        </div>
                      </div>
                    </div>
                    
                    <motion.button
                      className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        index === 1 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                          : 'border border-gray-600 text-white hover:border-white hover:bg-white hover:text-black'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Start Growing in Visakhapatnam
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
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Frequently Asked Questions - Visakhapatnam
                </h2>
                <p className="text-xl text-gray-300">
                  Common questions about digital marketing services in Visakhapatnam
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

        <TrustSignals />
        <Testimonials />

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Dominate Visakhapatnam's Digital Market?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join 800+ successful businesses in Visakhapatnam that trust God Digital Marketing 
                for their growth. From port authorities to pharmaceutical companies, we deliver 
                results that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  className="px-10 py-5 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-3">
                    <span>Get Free Visakhapatnam Strategy Session</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>
                <motion.button
                  className="px-10 py-5 border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 rounded-xl text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Visakhapatnam Market Report
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </>
  );
}
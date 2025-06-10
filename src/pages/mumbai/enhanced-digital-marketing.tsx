import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Award, Users, Target, Phone, Mail, Clock, CheckCircle, Building, Star, ArrowRight, DollarSign, BarChart3, Calendar, Globe, Zap, Shield, Briefcase, FileText } from 'lucide-react';
import { BaseCard } from '../../components/Shared/BaseCard';
import { AnimatedSection } from '../../components/Shared/AnimatedSection';
import { SEOHead } from '../../components/SEO/SEOHead';
import { TrustSignals } from '../../components/TrustSignals';
import { Testimonials } from '../../components/Testimonials';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { getServiceLocationCombinedSchema } from '../../utils/seoStructuredData';

export default function EnhancedMumbaiDigitalMarketingPage() {
  // Mumbai-specific data
  const location = {
    city: "Mumbai",
    state: "Maharashtra",
    population: "12,442,373",
    tier: 1,
    industries: ["finance", "entertainment", "technology", "manufacturing", "pharmaceuticals", "textiles", "diamond processing"],
    economicGrowth: "18.2%",
    businessCount: "2,50,000+",
    digitalAdoption: "85%",
    gdpContribution: "₹15,50,000 crores"
  };

  // Enhanced FAQ data for Mumbai
  const faqData = [
    {
      question: "How much does digital marketing cost in Mumbai?",
      answer: "Digital marketing costs in Mumbai typically range from ₹35,000 to ₹5,00,000 per month, depending on business size, industry competition, and service scope. Given Mumbai's competitive financial and entertainment markets, our packages are designed to deliver premium ROI for Mumbai businesses, with most clients seeing 600-800% return on investment."
    },
    {
      question: "How long does it take to see digital marketing results in Mumbai?",
      answer: "Most Mumbai businesses see initial improvements within 15-30 days due to the city's high digital adoption rate, with significant results typically achieved within 2-4 months. Our proven methodology has helped 2,000+ businesses in Mumbai achieve their digital marketing goals, with average ranking improvements of 500%."
    },
    {
      question: "What makes God Digital Marketing different in Mumbai's competitive market?",
      answer: "Our deep understanding of Mumbai's unique market dynamics, combined with finance, entertainment, and technology industry expertise, ensures tailored strategies that deliver results. We've achieved an average 650% ROI improvement for our Mumbai clients and maintain a 99.5% success rate in India's most competitive digital market."
    },
    {
      question: "Do you work with financial services and Bollywood entertainment businesses in Mumbai?",
      answer: "Yes, we specialize in finance, entertainment, technology, manufacturing, and pharmaceutical industries in Mumbai. Our industry-specific approach has helped numerous Mumbai businesses achieve market leadership, including major banks, film production houses, fintech startups, and multinational corporations."
    },
    {
      question: "Can you help Mumbai startups compete with established enterprises?",
      answer: "Absolutely! Mumbai's startup ecosystem is thriving, and we've helped 500+ startups achieve rapid growth through strategic digital marketing. Our startup-focused packages are designed to level the playing field against established enterprises in Bandra-Kurla Complex, Nariman Point, and other business districts."
    },
    {
      question: "What's your experience with Mumbai's unique challenges like high competition and diverse demographics?",
      answer: "With 8+ years in Mumbai, we understand the complexities of marketing to diverse audiences from South Mumbai's affluent markets to suburban middle-class segments. Our multilingual campaigns and hyper-local targeting strategies have consistently delivered results across Mumbai's varied demographic landscape."
    }
  ];

  // Mumbai-specific case studies
  const caseStudies = [
    {
      title: "Leading Investment Bank Digital Transformation",
      industry: "Financial Services",
      challenge: "A prominent investment bank in Mumbai's Bandra-Kurla Complex needed to modernize their digital presence to compete with international banks and attract high-net-worth individuals while maintaining regulatory compliance.",
      solution: "Implemented sophisticated digital marketing strategy with compliance-focused content marketing, LinkedIn targeting for wealth management, and premium brand positioning across digital channels.",
      results: [
        "850% increase in qualified HNI leads",
        "₹250 crores in new assets under management",
        "400% improvement in brand search visibility",
        "300% growth in digital account openings"
      ],
      timeline: "10 months",
      roi: "1200%",
      location: "Bandra-Kurla Complex"
    },
    {
      title: "Bollywood Production House Global Reach",
      industry: "Entertainment & Media",
      challenge: "A major Bollywood production house needed to expand their international audience reach and build direct-to-consumer streaming presence while competing with global OTT platforms.",
      solution: "Developed comprehensive digital marketing strategy with international SEO, social media marketing across multiple languages, and influencer partnerships targeting diaspora markets.",
      results: [
        "1500% increase in international viewership",
        "₹180 crores revenue from digital distribution",
        "500% growth in social media engagement globally",
        "250% increase in brand collaboration inquiries"
      ],
      timeline: "12 months",
      roi: "1500%",
      location: "Film City, Goregaon"
    },
    {
      title: "Fintech Startup Unicorn Growth",
      industry: "Financial Technology",
      challenge: "A Mumbai fintech startup needed rapid user acquisition and brand building to compete with established payment platforms and achieve unicorn status within 18 months.",
      solution: "Created aggressive growth marketing strategy with performance marketing, app store optimization, influencer partnerships, and strategic PR campaigns targeting millennials and Gen-Z users.",
      results: [
        "5000% increase in monthly active users",
        "₹500 crores valuation achieved in 15 months",
        "300% improvement in app store rankings",
        "1200% growth in transaction volume"
      ],
      timeline: "15 months",
      roi: "2000%",
      location: "Lower Parel Tech Hub"
    }
  ];

  // Mumbai-specific pricing packages
  const pricingPackages = [
    {
      name: "Mumbai Startup Launch",
      price: "₹35,000-75,000/month",
      description: "Designed for ambitious Mumbai startups ready to compete in India's most dynamic business ecosystem",
      features: [
        "Mumbai market analysis including BKC, Nariman Point, and Lower Parel business districts",
        "Competitor intelligence across financial, tech, and entertainment sectors",
        "Multi-language SEO optimization (Hindi, Marathi, English, Gujarati)",
        "Social media marketing targeting Mumbai's diverse demographics", 
        "Google Ads optimization for high-competition Mumbai keywords",
        "Monthly performance reporting with Mumbai-specific insights",
        "Dedicated Mumbai-based account manager with local market expertise"
      ],
      bestFor: "Startups, SMEs, local services in Andheri, Bandra, Powai",
      guarantee: "30-day money-back guarantee"
    },
    {
      name: "Mumbai Business Domination",
      price: "₹75,000-3,00,000/month",
      description: "Comprehensive solution for established Mumbai businesses ready to dominate national and international markets",
      features: [
        "Advanced digital marketing strategy for Mumbai's competitive landscape",
        "Multi-channel campaign management across all major platforms",
        "Industry-specific content creation for finance, entertainment, pharma sectors",
        "Advanced analytics with Mumbai market benchmarking",
        "Reputation management across financial and business media",
        "Bi-weekly strategy calls with Mumbai market specialists",
        "Access to premium Mumbai business networks and partnerships"
      ],
      bestFor: "Established companies in Fort, BKC, Worli, Malad",
      guarantee: "90-day performance guarantee with Mumbai market benchmarks"
    },
    {
      name: "Mumbai Enterprise Leadership",
      price: "₹3,00,000+/month",
      description: "Premium solution for Mumbai enterprises aiming for national market leadership and international expansion",
      features: [
        "Custom digital marketing architecture for Mumbai enterprise market",
        "International market expansion campaigns targeting global markets",
        "C-suite thought leadership positioning in financial and business media",
        "Advanced B2B lead generation for enterprise sales cycles",
        "Real-time competitive intelligence across Mumbai business ecosystem",
        "Dedicated team of 8+ specialists with Mumbai industry expertise",
        "Executive boardroom strategy sessions with market intelligence reports"
      ],
      bestFor: "Fortune 500 companies, major banks, multinational corporations",
      guarantee: "ROI guarantee with international market expansion support"
    }
  ];

  // Mumbai market insights
  const marketInsights = {
    economy: `Mumbai contributes ${location.gdpContribution} to India's GDP, making it the country's financial and commercial capital. Home to the Bombay Stock Exchange, Reserve Bank of India, and headquarters of most major banks and corporations, Mumbai's economy is driven by financial services (35%), entertainment industry (20%), technology (18%), and manufacturing (15%).`,
    
    digital: `With ${location.digitalAdoption} digital adoption rate, Mumbai leads India in digital transformation. The city houses over 200 fintech companies, 150+ media houses, and thousands of tech startups. Internet penetration stands at 92% urban, with 5G rollout accelerating digital business opportunities.`,
    
    competition: `Mumbai's digital marketing landscape is India's most competitive, with over 500 agencies serving 250,000+ businesses. Competition is fierce across all sectors, requiring sophisticated strategies, premium content, and exceptional execution to achieve market leadership.`,
    
    opportunities: `Mumbai's emergence as a global fintech hub, expansion of entertainment industry globally, and government's push for Digital India creates unprecedented opportunities. The city's international connectivity and business-friendly policies offer first-mover advantages for digital-first strategies.`
  };

  const seoData = {
    title: "Digital Marketing in Mumbai | #1 Digital Marketing Company Maharashtra - Financial Capital",
    description: "Transform your Mumbai business with expert digital marketing services. Proven 650% ROI improvement for 2,000+ businesses. Industry-leading strategies for finance, entertainment, technology sectors in Mumbai, Maharashtra - India's commercial capital.",
    keywords: [
      "digital marketing mumbai",
      "digital marketing company mumbai",
      "best digital marketing agency mumbai",
      "seo services mumbai",
      "ppc advertising mumbai",
      "social media marketing mumbai",
      "mumbai digital marketing agency",
      "digital marketing maharashtra",
      "financial services digital marketing mumbai",
      "entertainment industry marketing mumbai",
      "fintech marketing mumbai",
      "mumbai startup marketing",
      "bollywood digital marketing",
      "bandra kurla complex marketing agency",
      "nariman point digital marketing",
      "lower parel marketing services"
    ],
    canonicalUrl: "https://goddigitalmarketing.com/mumbai/digital-marketing/",
    structuredData: getServiceLocationCombinedSchema({
      service: "Digital Marketing Services",
      location: "Mumbai",
      faqs: faqData,
      reviews: [
        { rating: 5, author: "Mumbai Investment Bank CEO", text: "Exceptional digital marketing results for our wealth management division!" },
        { rating: 5, author: "Bollywood Producer", text: "Transformed our international reach and OTT strategy." },
        { rating: 5, author: "Mumbai Fintech Founder", text: "Best digital marketing agency in Mumbai - achieved unicorn status!" }
      ],
      offers: true
    })
  };

  return (
    <>
      <SEOHead {...seoData} />
      <main className="min-h-screen bg-black text-white">
        <Breadcrumbs currentPage="Digital Marketing in Mumbai | Best Digital Marketing Company Maharashtra" />
        
        {/* Premium Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <motion.div
                  className="inline-flex items-center space-x-3 mb-8 px-8 py-4 border border-yellow-600/30 rounded-full bg-gradient-to-r from-yellow-900/20 to-orange-900/20 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Building className="w-6 h-6 text-yellow-400" />
                  <span className="text-yellow-400 font-bold text-lg">Mumbai's Premier Digital Marketing Agency</span>
                  <Star className="w-6 h-6 text-yellow-400" />
                </motion.div>

                <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
                  Digital Marketing in
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                    Mumbai
                  </span>
                </h1>

                <p className="text-2xl md:text-3xl text-gray-200 max-w-6xl mx-auto leading-relaxed mb-12">
                  Dominate India's financial capital with cutting-edge marketing strategies. 
                  <strong className="text-yellow-400"> 2,000+ successful businesses</strong> in Mumbai trust us for 
                  <strong className="text-orange-400"> 650% average ROI improvement</strong> across finance, entertainment, 
                  technology, and manufacturing sectors.
                </p>

                <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
                  <motion.button
                    className="px-12 py-6 bg-gradient-to-r from-yellow-600 to-orange-600 text-black font-bold rounded-xl hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 text-xl shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Free Mumbai Market Analysis
                  </motion.button>
                  <motion.button
                    className="px-12 py-6 border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 rounded-xl text-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Mumbai Success Portfolio
                  </motion.button>
                </div>

                {/* Enhanced Stats Grid for Mumbai */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  <BaseCard title="2,000+" description="Mumbai Clients" variant="glass" className="text-center border-yellow-600/20">
                    <Users className="w-10 h-10 text-yellow-400 mx-auto mb-2" />
                  </BaseCard>
                  <BaseCard title="650%" description="Average ROI" variant="glass" className="text-center border-orange-600/20">
                    <TrendingUp className="w-10 h-10 text-orange-400 mx-auto mb-2" />
                  </BaseCard>
                  <BaseCard title="99.5%" description="Success Rate" variant="glass" className="text-center border-red-600/20">
                    <Award className="w-10 h-10 text-red-400 mx-auto mb-2" />
                  </BaseCard>
                  <BaseCard title="₹500Cr+" description="Client Revenue" variant="glass" className="text-center border-purple-600/20">
                    <DollarSign className="w-10 h-10 text-purple-400 mx-auto mb-2" />
                  </BaseCard>
                  <BaseCard title="8+ Years" description="Mumbai Experience" variant="glass" className="text-center border-blue-600/20">
                    <Calendar className="w-10 h-10 text-blue-400 mx-auto mb-2" />
                  </BaseCard>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Mumbai Market Leadership Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                  Why Mumbai's Top Businesses Choose Us
                </h2>
                <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                  From Fortune 500 companies in BKC to innovative startups in Lower Parel, 
                  we deliver world-class digital marketing that drives Mumbai's business growth
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <AnimatedSection direction="left">
                <div className="space-y-10">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-4 rounded-xl">
                      <Briefcase className="w-10 h-10 text-black" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">Financial Capital Expertise</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {marketInsights.economy} Our specialized teams understand the complexities of marketing 
                        financial services, from retail banking to investment management, in India's most sophisticated market.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl">
                      <Star className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">Entertainment Industry Mastery</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Bollywood to digital streaming, we've powered the marketing for major film studios, 
                        OTT platforms, and content creators. Our entertainment marketing expertise spans 
                        traditional media to cutting-edge digital platforms.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-xl">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">Technology & Fintech Leadership</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Mumbai's fintech revolution demands cutting-edge marketing. We've helped 100+ fintech 
                        startups scale from seed to unicorn status through strategic digital marketing, 
                        user acquisition, and brand building.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <BaseCard
                  title="Mumbai Business Growth Accelerator"
                  description=""
                  variant="glass"
                  className="p-10 border-yellow-600/20"
                >
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h4 className="text-3xl font-bold text-white mb-4">Exclusive Mumbai Market Intelligence</h4>
                      <p className="text-gray-300 text-lg">Comprehensive analysis worth ₹1,50,000 - absolutely free</p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Shield className="w-8 h-8 text-green-400" />
                        <span className="text-gray-300 text-lg">Complete competitive analysis across Mumbai business districts</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <BarChart3 className="w-8 h-8 text-blue-400" />
                        <span className="text-gray-300 text-lg">Industry-specific opportunity assessment and ROI projections</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Globe className="w-8 h-8 text-purple-400" />
                        <span className="text-gray-300 text-lg">Mumbai market penetration strategy and expansion roadmap</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <FileText className="w-8 h-8 text-orange-400" />
                        <span className="text-gray-300 text-lg">Custom digital marketing blueprint for Mumbai success</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-600 pt-8 space-y-6">
                      <div className="flex items-center space-x-4">
                        <Phone className="w-6 h-6 text-yellow-400" />
                        <span className="text-gray-300 text-lg">+91 9999999999 (Mumbai Direct Line)</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Mail className="w-6 h-6 text-yellow-400" />
                        <span className="text-gray-300 text-lg">mumbai@goddigitalmarketing.com</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <MapPin className="w-6 h-6 text-yellow-400" />
                        <span className="text-gray-300 text-lg">Serving BKC, Nariman Point, Lower Parel & All Mumbai</span>
                      </div>
                    </div>

                    <motion.button
                      className="w-full mt-8 px-10 py-6 bg-gradient-to-r from-yellow-600 to-orange-600 text-black font-bold rounded-xl hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 text-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Claim Your Free Mumbai Market Intelligence Report
                    </motion.button>
                  </div>
                </BaseCard>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Mumbai Business Districts Analysis */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                  Mumbai's Digital Marketing Ecosystem
                </h2>
                <p className="text-2xl text-gray-300 max-w-5xl mx-auto">
                  Understanding opportunities across Mumbai's premier business districts and industry clusters
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <BaseCard title="Bandra-Kurla Complex" description="Financial Hub" variant="glass" className="p-8 border-blue-600/20">
                <Building className="w-16 h-16 text-blue-400 mb-6" />
                <ul className="space-y-3 text-gray-300">
                  <li>• Major banks & financial institutions</li>
                  <li>• Insurance companies headquarters</li>
                  <li>• Multinational corporations</li>
                  <li>• Fintech unicorns & startups</li>
                  <li>• Investment banks & AMCs</li>
                </ul>
                <div className="mt-6 p-4 bg-blue-900/20 rounded-lg">
                  <p className="text-blue-400 text-sm">Avg. Marketing Budget: ₹10-50 lakhs/month</p>
                </div>
              </BaseCard>

              <BaseCard title="Lower Parel" description="Tech & Media Hub" variant="glass" className="p-8 border-purple-600/20">
                <Zap className="w-16 h-16 text-purple-400 mb-6" />
                <ul className="space-y-3 text-gray-300">
                  <li>• Technology companies</li>
                  <li>• Digital media houses</li>
                  <li>• Startup incubators</li>
                  <li>• Co-working spaces</li>
                  <li>• SaaS companies</li>
                </ul>
                <div className="mt-6 p-4 bg-purple-900/20 rounded-lg">
                  <p className="text-purple-400 text-sm">Avg. Marketing Budget: ₹5-25 lakhs/month</p>
                </div>
              </BaseCard>

              <BaseCard title="Andheri-Versova" description="Entertainment Capital" variant="glass" className="p-8 border-red-600/20">
                <Star className="w-16 h-16 text-red-400 mb-6" />
                <ul className="space-y-3 text-gray-300">
                  <li>• Film production houses</li>
                  <li>• OTT platform offices</li>
                  <li>• Advertising agencies</li>
                  <li>• Celebrity management</li>
                  <li>• Music labels</li>
                </ul>
                <div className="mt-6 p-4 bg-red-900/20 rounded-lg">
                  <p className="text-red-400 text-sm">Avg. Marketing Budget: ₹15-75 lakhs/month</p>
                </div>
              </BaseCard>

              <BaseCard title="Nariman Point" description="Corporate Center" variant="glass" className="p-8 border-yellow-600/20">
                <Award className="w-16 h-16 text-yellow-400 mb-6" />
                <ul className="space-y-3 text-gray-300">
                  <li>• Corporate headquarters</li>
                  <li>• Professional services</li>
                  <li>• Law firms</li>
                  <li>• Consulting companies</li>
                  <li>• Trading firms</li>
                </ul>
                <div className="mt-6 p-4 bg-yellow-900/20 rounded-lg">
                  <p className="text-yellow-400 text-sm">Avg. Marketing Budget: ₹8-40 lakhs/month</p>
                </div>
              </BaseCard>
            </div>
          </div>
        </section>

        {/* Mumbai Success Stories */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                  Mumbai Success Stories
                </h2>
                <p className="text-2xl text-gray-300 max-w-5xl mx-auto">
                  Real results from real Mumbai businesses across finance, entertainment, and technology sectors
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <AnimatedSection key={index} direction={index % 2 === 0 ? "left" : "right"}>
                  <BaseCard
                    title={study.title}
                    description=""
                    variant="glass"
                    className="p-10 border-gradient"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                      <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center space-x-4 mb-6">
                          <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-lg font-medium">{study.industry}</span>
                          <span className="px-4 py-2 bg-green-600 text-white rounded-full text-lg font-medium">{study.roi} ROI</span>
                          <span className="px-4 py-2 bg-purple-600 text-white rounded-full text-lg font-medium">{study.timeline}</span>
                          <span className="px-4 py-2 bg-orange-600 text-white rounded-full text-sm">{study.location}</span>
                        </div>
                        
                        <div>
                          <h4 className="text-2xl font-semibold text-white mb-4">Challenge</h4>
                          <p className="text-gray-300 text-lg leading-relaxed">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-2xl font-semibold text-white mb-4">Solution</h4>
                          <p className="text-gray-300 text-lg leading-relaxed">{study.solution}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-2xl font-semibold text-white mb-6">Results Achieved</h4>
                        <ul className="space-y-4">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start space-x-3">
                              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                              <span className="text-gray-300 text-lg">{result}</span>
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

        {/* Mumbai Pricing Section */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                  Mumbai Digital Marketing Investment Plans
                </h2>
                <p className="text-2xl text-gray-300 max-w-5xl mx-auto">
                  Premium pricing for premium results in India's most competitive market
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {pricingPackages.map((pkg, index) => (
                <AnimatedSection key={pkg.name} direction="up" delay={index * 0.1}>
                  <BaseCard
                    title={pkg.name}
                    description=""
                    variant="glass"
                    className={`p-10 h-full ${index === 1 ? 'border-yellow-500 border-3 relative transform scale-105' : 'border-gray-600/30'}`}
                  >
                    {index === 1 && (
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-yellow-600 to-orange-600 text-black px-6 py-3 rounded-full text-lg font-bold">
                          Most Popular in Mumbai
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-10">
                      <div className="text-4xl font-bold text-white mb-4">{pkg.price}</div>
                      <p className="text-gray-300 leading-relaxed text-lg">{pkg.description}</p>
                      <div className="mt-6">
                        <span className="inline-block px-4 py-2 bg-gray-800 text-gray-300 rounded-full">
                          {pkg.bestFor}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-10">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mb-8">
                      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <Shield className="w-5 h-5 text-green-400" />
                          <span className="text-green-400 font-medium">{pkg.guarantee}</span>
                        </div>
                      </div>
                    </div>
                    
                    <motion.button
                      className={`w-full py-5 px-8 rounded-xl font-bold text-xl transition-all duration-300 ${
                        index === 1 
                          ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-black hover:from-yellow-700 hover:to-orange-700' 
                          : 'border-2 border-gray-600 text-white hover:border-yellow-500 hover:bg-yellow-500 hover:text-black'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Start Dominating Mumbai Market
                    </motion.button>
                  </BaseCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-5xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                  Mumbai Digital Marketing FAQ
                </h2>
                <p className="text-2xl text-gray-300">
                  Expert answers to common questions about digital marketing in Mumbai
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-8">
              {faqData.map((faq, index) => (
                <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                  <BaseCard
                    title={faq.question}
                    description=""
                    variant="glass"
                    className="p-8 border-yellow-600/20"
                  >
                    <p className="text-gray-300 text-lg leading-relaxed">{faq.answer}</p>
                  </BaseCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <TrustSignals />
        <Testimonials />

        {/* Premium CTA Section */}
        <section className="py-24 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-10">
                Ready to Dominate Mumbai's Digital Market?
              </h2>
              <p className="text-2xl text-black/90 mb-16 max-w-4xl mx-auto leading-relaxed">
                Join 2,000+ successful businesses in Mumbai that trust God Digital Marketing 
                for their growth. From Fortune 500 companies in BKC to unicorn startups in Lower Parel, 
                we deliver results that define market leadership.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <motion.button
                  className="px-12 py-6 bg-black text-yellow-400 font-bold rounded-xl hover:bg-gray-900 transition-colors duration-300 text-2xl shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-3">
                    <span>Get Free Mumbai Strategy Session</span>
                    <ArrowRight className="w-6 h-6" />
                  </span>
                </motion.button>
                <motion.button
                  className="px-12 py-6 border-3 border-black text-black hover:bg-black hover:text-yellow-400 transition-all duration-300 rounded-xl text-2xl font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Mumbai Market Intelligence
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Award, Users, Target, Phone, Mail, Clock, CheckCircle, Building, Star, ArrowRight, DollarSign, BarChart3, Calendar, Globe, Zap, Shield, Crown, Landmark } from 'lucide-react';
import { BaseCard } from '../../components/Shared/BaseCard';
import { AnimatedSection } from '../../components/Shared/AnimatedSection';
import { SEOHead } from '../../components/SEO/SEOHead';
import { TrustSignals } from '../../components/TrustSignals';
import { Testimonials } from '../../components/Testimonials';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { getServiceLocationCombinedSchema } from '../../utils/seoStructuredData';

export default function EnhancedDelhiDigitalMarketingPage() {
  // Delhi-specific data
  const location = {
    city: "Delhi",
    state: "Delhi",
    population: "16,787,941",
    tier: 1,
    industries: ["government", "technology", "finance", "tourism", "manufacturing", "healthcare", "education", "media"],
    economicGrowth: "22.5%",
    businessCount: "5,00,000+",
    digitalAdoption: "89%",
    gdpContribution: "₹12,75,000 crores"
  };

  // Enhanced FAQ data for Delhi
  const faqData = [
    {
      question: "How much does digital marketing cost in Delhi NCR?",
      answer: "Digital marketing costs in Delhi NCR typically range from ₹40,000 to ₹8,00,000 per month, depending on business size, industry competition, and service scope. Given Delhi's status as India's capital with intense competition across government, corporate, and startup sectors, our packages deliver premium ROI with most clients seeing 700-900% return on investment."
    },
    {
      question: "How long does it take to see digital marketing results in Delhi?",
      answer: "Most Delhi businesses see initial improvements within 10-20 days due to the capital's ultra-high digital adoption rate, with significant results typically achieved within 1-3 months. Our proven methodology has helped 3,000+ businesses in Delhi achieve their digital marketing goals, with average ranking improvements of 600%."
    },
    {
      question: "What makes God Digital Marketing different in Delhi's hyper-competitive market?",
      answer: "Our deep understanding of Delhi's unique ecosystem spanning government sectors, multinational corporations, and thriving startup scene ensures tailored strategies. We've achieved an average 750% ROI improvement for our Delhi clients and maintain a 99.7% success rate in India's most demanding digital market."
    },
    {
      question: "Do you work with government, PSU, and multinational corporations in Delhi?",
      answer: "Yes, we specialize in serving government entities, PSUs, multinational corporations, and startups across Delhi NCR. Our compliance-focused approach and security protocols have helped numerous government departments, Fortune 500 companies, and unicorn startups achieve digital transformation while maintaining strict regulatory requirements."
    },
    {
      question: "Can you help Delhi startups compete with established enterprises and government initiatives?",
      answer: "Absolutely! Delhi's startup ecosystem is India's most vibrant, and we've helped 800+ startups achieve rapid growth through strategic digital marketing. Our startup-focused packages leverage Delhi's unique advantages including proximity to policy makers, investor networks, and international business opportunities."
    },
    {
      question: "What's your experience with Delhi's diverse market segments from Connaught Place to Gurgaon?",
      answer: "With 10+ years in Delhi NCR, we understand the complexities of marketing across diverse segments from government quarters in Central Delhi to corporate hubs in Gurgaon and tech startups in Noida. Our multi-demographic strategies consistently deliver results across Delhi's varied business landscape."
    }
  ];

  // Delhi-specific case studies
  const caseStudies = [
    {
      title: "Government Department Digital Transformation Initiative",
      industry: "Government & Public Sector",
      challenge: "A major Central Government department needed to modernize citizen services through digital channels while maintaining security protocols and ensuring accessibility for India's diverse population.",
      solution: "Implemented comprehensive digital marketing strategy with multi-language content, accessibility compliance, security-focused campaigns, and citizen engagement optimization across government digital platforms.",
      results: [
        "1200% increase in citizen service adoption",
        "₹500 crores savings in administrative costs",
        "90% reduction in physical office visits",
        "500% improvement in citizen satisfaction scores"
      ],
      timeline: "18 months",
      roi: "2500%",
      location: "Central Delhi Government Complex"
    },
    {
      title: "Multinational Corporation India Market Entry",
      industry: "Technology & Enterprise",
      challenge: "A Fortune 100 technology company establishing India headquarters in Gurgaon needed rapid market penetration, talent acquisition, and B2B lead generation across Indian enterprise market.",
      solution: "Developed sophisticated digital marketing strategy with enterprise-focused content, LinkedIn marketing for decision-makers, SEO for technical keywords, and strategic partnerships with Indian business networks.",
      results: [
        "2000% increase in enterprise client inquiries",
        "₹800 crores revenue in first 24 months",
        "300% improvement in talent acquisition efficiency",
        "150% faster market penetration vs. global average"
      ],
      timeline: "24 months",
      roi: "1800%",
      location: "Cyber City, Gurgaon"
    },
    {
      title: "EdTech Startup National Scale Achievement",
      industry: "Education Technology",
      challenge: "A Delhi-based EdTech startup needed rapid scaling to compete with established players, achieve product-market fit, and secure Series B funding while serving diverse Indian educational needs.",
      solution: "Created aggressive growth marketing strategy with performance marketing, app store optimization, influencer partnerships with educators, and strategic content marketing targeting students and parents across India.",
      results: [
        "8000% increase in student enrollments",
        "₹1,200 crores Series B valuation achieved",
        "400% improvement in app store rankings",
        "2500% growth in monthly active users"
      ],
      timeline: "20 months",
      roi: "3000%",
      location: "Connaught Place, New Delhi"
    }
  ];

  // Delhi-specific pricing packages
  const pricingPackages = [
    {
      name: "Delhi Startup Accelerator",
      price: "₹40,000-90,000/month",
      description: "Designed for ambitious Delhi startups ready to leverage India's capital advantages for rapid growth",
      features: [
        "Delhi NCR market analysis including CP, Gurgaon, Noida, and Faridabad",
        "Government sector and policy influence marketing strategies",
        "Multi-language campaigns (Hindi, English, Punjabi, Urdu)",
        "Startup ecosystem networking and investor outreach support",
        "High-competition keyword optimization for Delhi market",
        "Bi-weekly performance reporting with Delhi startup benchmarks",
        "Access to Delhi startup events and government scheme information"
      ],
      bestFor: "Startups, SMEs in Karol Bagh, Lajpat Nagar, Nehru Place",
      guarantee: "45-day money-back guarantee with startup support"
    },
    {
      name: "Delhi Corporate Excellence",
      price: "₹90,000-5,00,000/month",
      description: "Comprehensive solution for established Delhi corporations ready to dominate national and international markets",
      features: [
        "Advanced digital marketing strategy for Delhi's competitive corporate landscape",
        "Government relations and policy-compliant marketing campaigns",
        "C-suite executive branding and thought leadership development",
        "Advanced B2B lead generation with government and enterprise focus",
        "Crisis management and reputation protection for high-profile brands",
        "Weekly strategy sessions with Delhi market specialists",
        "Access to exclusive Delhi business networks and government liaisons"
      ],
      bestFor: "MNCs, large corporations in CP, Gurgaon, Aerocity",
      guarantee: "120-day performance guarantee with market leadership metrics"
    },
    {
      name: "Delhi Government & PSU Solutions",
      price: "₹2,00,000+/month",
      description: "Specialized solution for government departments, PSUs, and institutions requiring compliance-focused digital transformation",
      features: [
        "Government-compliant digital marketing architecture and security protocols",
        "Multi-language accessibility and inclusion-focused campaigns",
        "Citizen engagement optimization and public service promotion",
        "Policy communication and public awareness campaign management",
        "Advanced analytics with transparency and accountability reporting",
        "Dedicated team with government sector clearance and expertise",
        "Parliamentary and ministerial briefing support for digital initiatives"
      ],
      bestFor: "Government departments, PSUs, statutory bodies",
      guarantee: "Full compliance guarantee with audit-ready documentation"
    }
  ];

  // Delhi market insights
  const marketInsights = {
    economy: `Delhi NCR contributes ${location.gdpContribution} to India's GDP, serving as the political and administrative capital. Home to the Parliament, Supreme Court, and headquarters of major PSUs and multinational corporations, Delhi's economy is driven by government services (30%), technology (25%), finance (20%), and tourism (15%).`,
    
    digital: `With ${location.digitalAdoption} digital adoption rate, Delhi leads India in digital governance and e-services. The region houses the world's largest startup ecosystem after Silicon Valley, with 13,000+ startups, 50+ unicorns, and the highest internet penetration at 95% urban coverage.`,
    
    competition: `Delhi's digital marketing landscape is globally competitive, with 800+ agencies serving 500,000+ businesses. Competition spans government tenders, multinational corporate accounts, and high-growth startups, requiring world-class strategies and flawless execution.`,
    
    opportunities: `Delhi's position as India's policy center, coupled with Digital India initiatives and startup-friendly regulations, creates unprecedented opportunities. The city's international connectivity and direct access to decision-makers offer unique first-mover advantages.`
  };

  const seoData = {
    title: "Digital Marketing in Delhi | #1 Digital Marketing Company India's Capital - Government & Corporate",
    description: "Transform your Delhi business with expert digital marketing services. Proven 750% ROI improvement for 3,000+ businesses. Industry-leading strategies for government, corporate, startup sectors in Delhi NCR - India's digital capital.",
    keywords: [
      "digital marketing delhi",
      "digital marketing company delhi",
      "best digital marketing agency delhi",
      "seo services delhi",
      "ppc advertising delhi",
      "social media marketing delhi",
      "delhi digital marketing agency",
      "digital marketing ncr",
      "government digital marketing delhi",
      "corporate marketing delhi",
      "startup marketing delhi",
      "connaught place marketing agency",
      "gurgaon digital marketing",
      "noida marketing services",
      "delhi ncr seo company",
      "government sector marketing india"
    ],
    canonicalUrl: "https://goddigitalmarketing.com/delhi/digital-marketing/",
    structuredData: getServiceLocationCombinedSchema({
      service: "Digital Marketing Services",
      location: "Delhi",
      faqs: faqData,
      reviews: [
        { rating: 5, author: "Delhi Government Official", text: "Exceptional digital transformation results for our citizen services!" },
        { rating: 5, author: "MNC India Head", text: "Transformed our India market entry and enterprise growth." },
        { rating: 5, author: "Delhi Startup Founder", text: "Best digital marketing agency in Delhi - achieved unicorn status!" }
      ],
      offers: true
    })
  };

  return (
    <>
      <SEOHead {...seoData} />
      <main className="min-h-screen bg-black text-white">
        <Breadcrumbs currentPage="Digital Marketing in Delhi | Best Digital Marketing Company India Capital" />
        
        {/* Capital City Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <motion.div
                  className="inline-flex items-center space-x-3 mb-8 px-8 py-4 border border-red-600/30 rounded-full bg-gradient-to-r from-red-900/20 to-orange-900/20 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Crown className="w-6 h-6 text-red-400" />
                  <span className="text-red-400 font-bold text-lg">India's Capital Digital Marketing Leaders</span>
                  <Landmark className="w-6 h-6 text-red-400" />
                </motion.div>

                <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
                  Digital Marketing in
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500">
                    Delhi NCR
                  </span>
                </h1>

                <p className="text-2xl md:text-3xl text-gray-200 max-w-6xl mx-auto leading-relaxed mb-12">
                  Command India's digital landscape from the nation's capital. 
                  <strong className="text-red-400"> 3,000+ successful businesses</strong> in Delhi trust us for 
                  <strong className="text-orange-400"> 750% average ROI improvement</strong> across government, 
                  corporate, startup, and enterprise sectors.
                </p>

                <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
                  <motion.button
                    className="px-12 py-6 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 text-xl shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Free Delhi Market Domination Strategy
                  </motion.button>
                  <motion.button
                    className="px-12 py-6 border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 rounded-xl text-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Delhi Government & Corporate Portfolio
                  </motion.button>
                </div>

                {/* Enhanced Stats for Delhi */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                  <BaseCard title="3,000+" description="Delhi NCR Clients" variant="glass" className="text-center border-red-600/20">
                    <Users className="w-10 h-10 text-red-400 mx-auto mb-2" />
                  </BaseCard>
                  <BaseCard title="750%" description="Average ROI" variant="glass" className="text-center border-orange-600/20">
                    <TrendingUp className="w-10 h-10 text-orange-400 mx-auto mb-2" />
                  </BaseCard>
                  <BaseCard title="99.7%" description="Success Rate" variant="glass" className="text-center border-yellow-600/20">
                    <Award className="w-10 h-10 text-yellow-400 mx-auto mb-2" />
                  </BaseCard>
                  <BaseCard title="₹1000Cr+" description="Client Revenue" variant="glass" className="text-center border-green-600/20">
                    <DollarSign className="w-10 h-10 text-green-400 mx-auto mb-2" />
                  </BaseCard>
                  <BaseCard title="50+" description="Unicorn Clients" variant="glass" className="text-center border-purple-600/20">
                    <Star className="w-10 h-10 text-purple-400 mx-auto mb-2" />
                  </BaseCard>
                  <BaseCard title="10+ Years" description="Delhi Experience" variant="glass" className="text-center border-blue-600/20">
                    <Calendar className="w-10 h-10 text-blue-400 mx-auto mb-2" />
                  </BaseCard>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Delhi Capital Advantages Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                  Why Delhi's Power Players Choose Us
                </h2>
                <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                  From government ministries to Fortune 500 headquarters, from unicorn startups to 
                  international corporations - we deliver world-class digital marketing that drives India's capital
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <AnimatedSection direction="left">
                <div className="space-y-10">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-red-600 to-orange-600 p-4 rounded-xl">
                      <Landmark className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">Government & Policy Expertise</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {marketInsights.economy} Our specialized government team understands regulatory 
                        requirements, compliance protocols, and policy communication strategies essential 
                        for public sector digital transformation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-xl">
                      <Building className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">Corporate & Enterprise Mastery</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Delhi hosts India's largest concentration of multinational headquarters. We've powered 
                        digital transformation for Fortune 500 companies, helping them navigate India's complex 
                        market while achieving aggressive growth targets.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">Startup Ecosystem Leadership</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        As the world's second-largest startup hub, Delhi demands cutting-edge growth marketing. 
                        We've helped 50+ startups achieve unicorn status through strategic digital marketing, 
                        fundraising support, and rapid scale execution.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <BaseCard
                  title="Delhi Capital Advantage Package"
                  description=""
                  variant="glass"
                  className="p-10 border-red-600/20"
                >
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h4 className="text-3xl font-bold text-white mb-4">Exclusive Delhi Market Intelligence</h4>
                      <p className="text-gray-300 text-lg">Comprehensive capital city analysis worth ₹2,50,000 - complimentary</p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Crown className="w-8 h-8 text-red-400" />
                        <span className="text-gray-300 text-lg">Government sector opportunity mapping and compliance guidance</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <BarChart3 className="w-8 h-8 text-blue-400" />
                        <span className="text-gray-300 text-lg">Corporate decision-maker targeting and B2B lead generation strategy</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Globe className="w-8 h-8 text-purple-400" />
                        <span className="text-gray-300 text-lg">Startup ecosystem integration and investor network access</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Shield className="w-8 h-8 text-green-400" />
                        <span className="text-gray-300 text-lg">Crisis management and reputation protection for high-profile brands</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-600 pt-8 space-y-6">
                      <div className="flex items-center space-x-4">
                        <Phone className="w-6 h-6 text-red-400" />
                        <span className="text-gray-300 text-lg">+91 9999999999 (Delhi VIP Hotline)</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Mail className="w-6 h-6 text-red-400" />
                        <span className="text-gray-300 text-lg">delhi@goddigitalmarketing.com</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <MapPin className="w-6 h-6 text-red-400" />
                        <span className="text-gray-300 text-lg">Serving CP, Gurgaon, Noida, Faridabad & All NCR</span>
                      </div>
                    </div>

                    <motion.button
                      className="w-full mt-8 px-10 py-6 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 text-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Access Delhi Capital Market Intelligence
                    </motion.button>
                  </div>
                </BaseCard>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Delhi NCR Business Hubs Analysis */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                  Delhi NCR Digital Marketing Ecosystem
                </h2>
                <p className="text-2xl text-gray-300 max-w-5xl mx-auto">
                  Strategic insights across India's capital region business centers and growth corridors
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <BaseCard title="Central Delhi & CP" description="Government & Heritage" variant="glass" className="p-8 border-red-600/20">
                <Landmark className="w-16 h-16 text-red-400 mb-6" />
                <ul className="space-y-3 text-gray-300">
                  <li>• Government ministries & departments</li>
                  <li>• Parliamentary offices & embassies</li>
                  <li>• Heritage brands & traditional businesses</li>
                  <li>• Tourism & hospitality sector</li>
                  <li>• Media & publishing houses</li>
                </ul>
                <div className="mt-6 p-4 bg-red-900/20 rounded-lg">
                  <p className="text-red-400 text-sm">Avg. Marketing Budget: ₹20-100 lakhs/month</p>
                </div>
              </BaseCard>

              <BaseCard title="Gurgaon Millennium City" description="Corporate & MNC Hub" variant="glass" className="p-8 border-blue-600/20">
                <Building className="w-16 h-16 text-blue-400 mb-6" />
                <ul className="space-y-3 text-gray-300">
                  <li>• Multinational corporation headquarters</li>
                  <li>• Financial services & banking</li>
                  <li>• Automotive & manufacturing</li>
                  <li>• Real estate & infrastructure</li>
                  <li>• Consulting & professional services</li>
                </ul>
                <div className="mt-6 p-4 bg-blue-900/20 rounded-lg">
                  <p className="text-blue-400 text-sm">Avg. Marketing Budget: ₹15-75 lakhs/month</p>
                </div>
              </BaseCard>

              <BaseCard title="Noida Tech City" description="Technology & Startup Hub" variant="glass" className="p-8 border-purple-600/20">
                <Zap className="w-16 h-16 text-purple-400 mb-6" />
                <ul className="space-y-3 text-gray-300">
                  <li>• Technology companies & software firms</li>
                  <li>• Startup incubators & accelerators</li>
                  <li>• Digital media & entertainment</li>
                  <li>• E-commerce & marketplace platforms</li>
                  <li>• EdTech & FinTech unicorns</li>
                </ul>
                <div className="mt-6 p-4 bg-purple-900/20 rounded-lg">
                  <p className="text-purple-400 text-sm">Avg. Marketing Budget: ₹8-40 lakhs/month</p>
                </div>
              </BaseCard>

              <BaseCard title="Faridabad Industrial" description="Manufacturing & Trade" variant="glass" className="p-8 border-green-600/20">
                <Award className="w-16 h-16 text-green-400 mb-6" />
                <ul className="space-y-3 text-gray-300">
                  <li>• Manufacturing & industrial companies</li>
                  <li>• Automotive component suppliers</li>
                  <li>• Textile & garment exporters</li>
                  <li>• Chemical & pharmaceutical plants</li>
                  <li>• Trading & logistics companies</li>
                </ul>
                <div className="mt-6 p-4 bg-green-900/20 rounded-lg">
                  <p className="text-green-400 text-sm">Avg. Marketing Budget: ₹5-30 lakhs/month</p>
                </div>
              </BaseCard>
            </div>
          </div>
        </section>

        {/* Delhi Success Stories */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                  Delhi Success Stories
                </h2>
                <p className="text-2xl text-gray-300 max-w-5xl mx-auto">
                  Transformational results from government, corporate, and startup sectors across India's capital
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
                    className="p-10"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                      <div className="lg:col-span-2 space-y-8">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                          <span className="px-4 py-2 bg-red-600 text-white rounded-full text-lg font-medium">{study.industry}</span>
                          <span className="px-4 py-2 bg-green-600 text-white rounded-full text-lg font-medium">{study.roi} ROI</span>
                          <span className="px-4 py-2 bg-purple-600 text-white rounded-full text-lg font-medium">{study.timeline}</span>
                          <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">{study.location}</span>
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

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-5xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                  Delhi Digital Marketing FAQ
                </h2>
                <p className="text-2xl text-gray-300">
                  Expert answers about digital marketing in India's capital city
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
                    className="p-8 border-red-600/20"
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

        {/* Capital CTA Section */}
        <section className="py-24 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-10">
                Ready to Command India's Digital Capital?
              </h2>
              <p className="text-2xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed">
                Join 3,000+ successful businesses in Delhi NCR that trust God Digital Marketing 
                for their growth. From government ministries to Fortune 500 companies to unicorn startups, 
                we deliver results that define national leadership.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <motion.button
                  className="px-12 py-6 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300 text-2xl shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-3">
                    <span>Get Free Delhi Strategy Session</span>
                    <ArrowRight className="w-6 h-6" />
                  </span>
                </motion.button>
                <motion.button
                  className="px-12 py-6 border-3 border-white text-white hover:bg-white hover:text-red-600 transition-all duration-300 rounded-xl text-2xl font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Delhi Market Intelligence
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </>
  );
}
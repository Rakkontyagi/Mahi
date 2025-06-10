import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ModernLayout } from '../components/Layout/ModernLayout';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>God Digital Marketing - India's Leading Digital Marketing Agency | Expert Services Across All States</title>
        <meta name="description" content="Transform your business with God Digital Marketing's comprehensive digital marketing services across 500+ Indian cities. Expert SEO, PPC, social media marketing, AI automation, and business growth solutions delivering guaranteed ROI results." />
        <meta name="keywords" content="digital marketing India, SEO services, PPC advertising, social media marketing, AI automation, business automation, digital marketing agency, online marketing, internet marketing, digital transformation" />
        <link rel="canonical" href="https://kaleidoscopic-paletas-9f9af7.netlify.app/" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "God Digital Marketing",
            "description": "India's leading digital marketing agency providing comprehensive solutions for businesses across 500+ cities",
            "url": "https://kaleidoscopic-paletas-9f9af7.netlify.app",
            "logo": "https://kaleidoscopic-paletas-9f9af7.netlify.app/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9999999999",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "India"
            },
            "sameAs": [
              "https://www.facebook.com/goddigitalmarketing",
              "https://www.linkedin.com/company/goddigitalmarketing",
              "https://twitter.com/goddigitalmark"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Marketing",
                    "description": "Comprehensive digital marketing solutions including SEO, PPC, social media marketing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Automation",
                    "description": "Advanced AI-powered automation solutions for business processes"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business Automation",
                    "description": "Complete business process automation and workflow optimization"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <ModernLayout>
        {/* Hero Section with 4D Effects */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
          {/* 4D Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-black/3 to-gray-900/3 rounded-full blur-3xl animate-spin-slow"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                  God Digital
                </span>
                <br />
                <span className="text-black">
                  Marketing
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 font-light leading-relaxed">
                India's Leading Digital Marketing Agency
                <br />
                <span className="font-medium text-black">Divine Digital Solutions for Godly Growth</span>
              </p>
              
              <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Transform your business with our comprehensive digital marketing services across 
                <strong className="text-black"> 500+ Indian cities</strong>. Expert SEO, PPC, social media marketing, 
                AI automation, and business growth solutions delivering 
                <strong className="text-black"> guaranteed ROI results</strong>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <a
                  href="/contact"
                  className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  🚀 Start Your Digital Transformation
                </a>
                <a
                  href="/services"
                  className="border-2 border-black text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  📊 Explore Our Services
                </a>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-black mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Cities Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-black mb-2">2000+</div>
                  <div className="text-gray-600 font-medium">Clients Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-black mb-2">350%</div>
                  <div className="text-gray-600 font-medium">Average ROI Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-black mb-2">99.8%</div>
                  <div className="text-gray-600 font-medium">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                Comprehensive Digital Marketing Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expert team delivers cutting-edge digital marketing strategies that drive 
                measurable results across all industries and locations in India.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Digital Marketing */}
              <div className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-black mb-4">Digital Marketing Excellence</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive digital marketing strategies including SEO, PPC, social media marketing, 
                  content marketing, and email campaigns designed to maximize your online presence and ROI.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Search Engine Optimization (SEO)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Pay-Per-Click Advertising (PPC)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Social Media Marketing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Content Marketing Strategy
                  </li>
                </ul>
                <a 
                  href="/services/digital-marketing" 
                  className="inline-flex items-center text-black font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>

              {/* AI Automation */}
              <div className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2">
                <div className="text-5xl mb-6">🤖</div>
                <h3 className="text-2xl font-bold text-black mb-4">AI-Powered Automation</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Revolutionary AI automation solutions that streamline your marketing processes, 
                  enhance customer experiences, and drive intelligent decision-making for sustainable growth.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    AI-Driven Marketing Automation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Intelligent Lead Scoring
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Predictive Analytics
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Chatbot Development
                  </li>
                </ul>
                <a 
                  href="/services/ai-automation" 
                  className="inline-flex items-center text-black font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>

              {/* Business Automation */}
              <div className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2">
                <div className="text-5xl mb-6">⚙️</div>
                <h3 className="text-2xl font-bold text-black mb-4">Business Process Automation</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Complete business automation solutions that optimize workflows, reduce operational costs, 
                  and improve efficiency across all departments and business functions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Workflow Automation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    CRM Integration
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Sales Process Automation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Customer Service Automation
                  </li>
                </ul>
                <a 
                  href="/services/business-automation" 
                  className="inline-flex items-center text-black font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                Serving Businesses Across India
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our digital marketing expertise spans across major Indian cities, delivering 
                localized strategies that resonate with regional markets and drive exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-black mb-4">Mumbai Digital Marketing</h3>
                <p className="text-gray-600 mb-4">
                  Navigate Mumbai's competitive financial and entertainment sectors with specialized 
                  strategies for maximum market penetration and brand visibility.
                </p>
                <a href="/locations/mumbai" className="text-black font-semibold hover:underline">
                  Explore Mumbai Services →
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-black mb-4">Delhi Digital Marketing</h3>
                <p className="text-gray-600 mb-4">
                  Capitalize on Delhi's diverse business landscape with strategies that resonate 
                  across government, corporate, and SME sectors.
                </p>
                <a href="/locations/delhi" className="text-black font-semibold hover:underline">
                  Explore Delhi Services →
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-black mb-4">Bangalore Digital Marketing</h3>
                <p className="text-gray-600 mb-4">
                  Leverage Bangalore's tech ecosystem with cutting-edge digital strategies 
                  tailored for IT and startup environments.
                </p>
                <a href="/locations/bangalore" className="text-black font-semibold hover:underline">
                  Explore Bangalore Services →
                </a>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="/locations"
                className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                View All Locations
              </a>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                Industry-Specific Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deep industry knowledge combined with digital marketing excellence to deliver 
                tailored solutions that address unique sector challenges and opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold text-black mb-3">Healthcare</h3>
                <p className="text-gray-600 mb-4">
                  Specialized digital marketing for healthcare providers, medical practices, 
                  and pharmaceutical companies with compliance-focused strategies.
                </p>
                <a href="/industries/healthcare" className="text-black font-semibold hover:underline">
                  Learn More →
                </a>
              </div>

              <div className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-black mb-3">Real Estate</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive digital marketing solutions for real estate developers, 
                  agents, and property management companies.
                </p>
                <a href="/industries/real-estate" className="text-black font-semibold hover:underline">
                  Learn More →
                </a>
              </div>

              <div className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-bold text-black mb-3">E-commerce</h3>
                <p className="text-gray-600 mb-4">
                  Advanced e-commerce marketing strategies including marketplace optimization, 
                  conversion rate optimization, and customer retention.
                </p>
                <a href="/industries/ecommerce" className="text-black font-semibold hover:underline">
                  Learn More →
                </a>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="/industries"
                className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                View All Industries
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join 2000+ businesses that trust God Digital Marketing for their growth. 
              Get a free consultation and customized strategy proposal tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                📞 Get Free Consultation
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                📈 View Our Services
              </a>
            </div>
          </div>
        </section>
      </ModernLayout>
    </>
  );
};

export default HomePage;

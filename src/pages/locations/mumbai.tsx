import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ModernLayout } from '../../components/Layout/ModernLayout';

const MumbaiPage = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Services Mumbai | Expert SEO, PPC & Social Media Marketing | God Digital Marketing</title>
        <meta name="description" content="Leading digital marketing agency in Mumbai offering expert SEO, PPC advertising, social media marketing, AI automation & business growth solutions. Serving 500+ Mumbai businesses with proven ROI results across all industries." />
        <meta name="keywords" content="digital marketing Mumbai, SEO services Mumbai, PPC advertising Mumbai, social media marketing Mumbai, digital marketing agency Mumbai, online marketing Mumbai, internet marketing Mumbai, Mumbai digital marketing company" />
        <link rel="canonical" href="https://courageous-daffodil-2020b6.netlify.app/locations/mumbai/" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "God Digital Marketing - Mumbai",
            "description": "Leading digital marketing agency in Mumbai providing comprehensive SEO, PPC, social media marketing, and business automation services",
            "url": "https://courageous-daffodil-2020b6.netlify.app/locations/mumbai/",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "India"
            },
            "areaServed": {
              "@type": "City",
              "name": "Mumbai",
              "containedInPlace": {
                "@type": "State",
                "name": "Maharashtra"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Marketing Services Mumbai",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SEO Services Mumbai",
                    "description": "Search engine optimization services for Mumbai businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "PPC Advertising Mumbai",
                    "description": "Pay-per-click advertising campaigns for Mumbai market"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Social Media Marketing Mumbai",
                    "description": "Social media marketing strategies for Mumbai businesses"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <ModernLayout>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                  Digital Marketing
                </span>
                <br />
                <span className="text-black">Services Mumbai</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Mumbai's Leading Digital Marketing Agency
                <br />
                <span className="font-semibold text-black">Financial Capital Expertise • Bollywood Connections • Enterprise Solutions</span>
              </p>
              
              <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Dominate Mumbai's competitive business landscape with our expert digital marketing services. 
                Specialized strategies for financial services, entertainment industry, real estate, and 
                manufacturing sectors. Proven results for 500+ Mumbai businesses across all industries.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <a
                  href="/contact"
                  className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  🏙️ Get Mumbai-Specific Strategy
                </a>
                <a
                  href="#mumbai-services"
                  className="border-2 border-black text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300"
                >
                  📊 View Mumbai Solutions
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Mumbai Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">₹50Cr+</div>
                  <div className="text-gray-600 font-medium">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">15+</div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">98%</div>
                  <div className="text-gray-600 font-medium">Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mumbai Market Insights */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                Mumbai Market Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deep understanding of Mumbai's unique business ecosystem, from Dalal Street to Bollywood, 
                enabling us to craft digital marketing strategies that resonate with local audiences and drive results.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300">
                <h3 className="text-2xl font-bold text-black mb-6">Financial Services Digital Marketing</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Mumbai being India's financial capital, we specialize in digital marketing for banks, 
                  insurance companies, mutual funds, and fintech startups. Our compliance-aware strategies 
                  ensure regulatory adherence while maximizing reach and conversions.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Banking & Insurance:</strong> Regulatory-compliant digital campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Fintech Solutions:</strong> App promotion and user acquisition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Investment Platforms:</strong> Lead generation and trust building</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Wealth Management:</strong> High-net-worth individual targeting</span>
                  </li>
                </ul>
                <a href="/industries/financial-services" className="text-black font-semibold hover:underline">
                  Learn More About Financial Services Marketing →
                </a>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300">
                <h3 className="text-2xl font-bold text-black mb-6">Entertainment Industry Marketing</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Leverage Mumbai's Bollywood connections and entertainment industry expertise for 
                  film promotion, celebrity endorsements, and entertainment brand marketing campaigns 
                  that capture audience attention and drive engagement.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Film Promotion:</strong> Movie marketing and audience engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Celebrity Campaigns:</strong> Influencer and celebrity partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Music Industry:</strong> Artist promotion and music streaming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>OTT Platforms:</strong> Content marketing and subscriber acquisition</span>
                  </li>
                </ul>
                <a href="/industries/entertainment" className="text-black font-semibold hover:underline">
                  Learn More About Entertainment Marketing →
                </a>
              </div>
            </div>

            {/* Mumbai-Specific Services */}
            <div id="mumbai-services" className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-black mb-4">Corporate Digital Marketing</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Specialized digital marketing for Mumbai's corporate sector including multinational 
                  companies, headquarters, and business districts like BKC and Nariman Point.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    B2B Lead Generation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Executive Branding
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Corporate Communications
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Industry Thought Leadership
                  </li>
                </ul>
                <a href="/services/digital-marketing" className="text-black font-semibold hover:underline">
                  Learn More →
                </a>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-black mb-4">Real Estate Marketing</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Navigate Mumbai's complex real estate market with targeted digital campaigns for 
                  luxury properties, commercial spaces, and residential developments.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Luxury Property Marketing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Commercial Space Promotion
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Virtual Property Tours
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Investor Targeting
                  </li>
                </ul>
                <a href="/industries/real-estate" className="text-black font-semibold hover:underline">
                  Learn More →
                </a>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-black mb-4">Manufacturing & Export</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Digital marketing solutions for Mumbai's manufacturing sector, export businesses, 
                  and industrial companies targeting both domestic and international markets.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    B2B Marketplace Optimization
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Export Market Penetration
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Industrial Product Marketing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Supply Chain Digitization
                  </li>
                </ul>
                <a href="/industries/manufacturing" className="text-black font-semibold hover:underline">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Mumbai Success Stories */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                Mumbai Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from Mumbai businesses that transformed their digital presence 
                and achieved remarkable growth with our strategic digital marketing solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold text-black mb-4">Leading Private Bank</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Increased digital loan applications by 400% and reduced customer acquisition 
                  cost by 60% through targeted digital campaigns and SEO optimization.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">400%</div>
                    <div className="text-sm text-gray-600">Loan Applications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">60%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-xl font-bold text-black mb-4">Bollywood Production House</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Achieved 50 million+ social media impressions and 25% increase in box office 
                  collections through strategic film promotion campaigns.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">50M+</div>
                    <div className="text-sm text-gray-600">Social Impressions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">25%</div>
                    <div className="text-sm text-gray-600">Box Office Boost</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-black mb-4">Luxury Real Estate Developer</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Generated ₹100 crores in pre-sales through digital marketing campaigns targeting 
                  high-net-worth individuals and NRI investors.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">₹100Cr</div>
                    <div className="text-sm text-gray-600">Pre-Sales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">300%</div>
                    <div className="text-sm text-gray-600">ROI Achieved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local SEO & Mumbai-Specific Strategies */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                Mumbai-Focused Digital Strategies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Localized digital marketing approaches that leverage Mumbai's unique characteristics, 
                cultural nuances, and business ecosystem for maximum impact and engagement.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Local SEO Optimization</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Dominate local search results for Mumbai-specific keywords and location-based queries. 
                  Our local SEO strategies ensure your business appears prominently when Mumbai customers 
                  search for your services.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Google My Business Optimization:</strong> Complete profile setup and management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Mumbai-Specific Keywords:</strong> Targeting local search terms and phrases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Local Citations:</strong> Directory listings and local business mentions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Location Pages:</strong> Area-specific landing pages for different Mumbai regions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Cultural Marketing Approach</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Campaigns that resonate with Mumbai's diverse culture, from Marathi traditions to 
                  cosmopolitan lifestyle, ensuring authentic connections with local audiences across 
                  all demographic segments.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Festival Marketing:</strong> Ganesh Chaturthi, Navratri, and local celebrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Multilingual Content:</strong> Hindi, Marathi, and English content strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Local Influencers:</strong> Partnerships with Mumbai-based influencers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Community Engagement:</strong> Local events and community-focused campaigns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Dominate Mumbai's Digital Landscape?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Partner with Mumbai's leading digital marketing agency and transform your business 
              with strategies designed specifically for the financial capital of India.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                🏙️ Get Mumbai Strategy Consultation
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                📈 View All Services
              </a>
            </div>
          </div>
        </section>
      </ModernLayout>
    </>
  );
};

export default MumbaiPage;

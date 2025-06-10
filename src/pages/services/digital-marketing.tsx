import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ModernLayout } from '../../components/Layout/ModernLayout';

const DigitalMarketingPage = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Services India | Expert SEO, PPC & Social Media Marketing | God Digital Marketing</title>
        <meta name="description" content="Transform your business with comprehensive digital marketing services across India. Expert SEO, PPC advertising, social media marketing, content strategy & email campaigns. Proven ROI results for 2000+ clients across 500+ cities." />
        <meta name="keywords" content="digital marketing services India, SEO services, PPC advertising, social media marketing, content marketing, email marketing, online marketing agency, internet marketing, digital marketing company, digital marketing strategy" />
        <link rel="canonical" href="https://courageous-daffodil-2020b6.netlify.app/services/digital-marketing/" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Digital Marketing Services",
            "description": "Comprehensive digital marketing services including SEO, PPC, social media marketing, content marketing, and email campaigns for businesses across India",
            "provider": {
              "@type": "Organization",
              "name": "God Digital Marketing",
              "url": "https://courageous-daffodil-2020b6.netlify.app",
              "logo": "https://courageous-daffodil-2020b6.netlify.app/logo.png"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Search Engine Optimization (SEO)",
                    "description": "Comprehensive SEO services to improve search engine rankings and organic traffic"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pay-Per-Click Advertising (PPC)",
                    "description": "Strategic PPC campaigns on Google Ads, Facebook Ads, and other platforms"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Social Media Marketing",
                    "description": "Complete social media marketing across all major platforms"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Content Marketing",
                    "description": "Strategic content creation and distribution for brand awareness and engagement"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Email Marketing",
                    "description": "Targeted email campaigns for lead nurturing and customer retention"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2000",
              "bestRating": "5"
            }
          })}
        </script>
      </Helmet>

      <ModernLayout>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
          {/* 4D Background Elements */}
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
                <span className="text-black">Services India</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Transform Your Business with Expert Digital Marketing Solutions
                <br />
                <span className="font-semibold text-black">Proven Strategies • Measurable Results • 500+ Cities</span>
              </p>
              
              <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Comprehensive digital marketing services including expert SEO, strategic PPC advertising, 
                social media marketing, content strategy, and email campaigns. Delivering guaranteed ROI 
                results for businesses across all industries in India.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <a
                  href="/contact"
                  className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  🚀 Get Free Digital Marketing Audit
                </a>
                <a
                  href="#services-overview"
                  className="border-2 border-black text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300"
                >
                  📊 View Service Details
                </a>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">2000+</div>
                  <div className="text-gray-600 font-medium">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">350%</div>
                  <div className="text-gray-600 font-medium">Average ROI Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Cities Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">99.8%</div>
                  <div className="text-gray-600 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services-overview" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                Comprehensive Digital Marketing Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expert team delivers integrated digital marketing strategies that drive measurable 
                results across all channels, ensuring maximum ROI and sustainable business growth.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Search Engine Optimization */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">🔍</div>
                  <h3 className="text-2xl font-bold text-black">Search Engine Optimization (SEO)</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Dominate search engine results with our comprehensive SEO strategies. We optimize your 
                  website for higher rankings, increased organic traffic, and improved visibility across 
                  all major search engines including Google, Bing, and Yahoo.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">Our SEO Services Include:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Technical SEO Audit:</strong> Comprehensive website analysis and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Keyword Research & Strategy:</strong> In-depth keyword analysis and targeting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>On-Page Optimization:</strong> Content, meta tags, and structure optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Link Building:</strong> High-quality backlink acquisition strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Local SEO:</strong> Google My Business and local search optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Content Strategy:</strong> SEO-optimized content creation and optimization</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">SEO Results You Can Expect:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">300%+</div>
                      <div className="text-sm text-gray-600">Organic Traffic Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">Top 3</div>
                      <div className="text-sm text-gray-600">Search Rankings</div>
                    </div>
                  </div>
                </div>

                <a 
                  href="/services/seo-services" 
                  className="inline-flex items-center text-black font-semibold hover:underline"
                >
                  Learn More About SEO Services →
                </a>
              </div>

              {/* Pay-Per-Click Advertising */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">💰</div>
                  <h3 className="text-2xl font-bold text-black">Pay-Per-Click Advertising (PPC)</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Maximize your advertising ROI with strategic PPC campaigns across Google Ads, Facebook Ads, 
                  LinkedIn Ads, and other premium advertising platforms. Our data-driven approach ensures 
                  optimal budget allocation and maximum conversions.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">Our PPC Services Include:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Google Ads Management:</strong> Search, Display, Shopping, and YouTube campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Facebook & Instagram Ads:</strong> Social media advertising and retargeting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>LinkedIn Advertising:</strong> B2B lead generation and professional targeting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Campaign Optimization:</strong> Continuous A/B testing and performance improvement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Landing Page Optimization:</strong> Conversion-focused page design and testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Analytics & Reporting:</strong> Detailed performance tracking and insights</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">PPC Results You Can Expect:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">400%+</div>
                      <div className="text-sm text-gray-600">ROI Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">50%+</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                  </div>
                </div>

                <a 
                  href="/services/ppc-advertising" 
                  className="inline-flex items-center text-black font-semibold hover:underline"
                >
                  Learn More About PPC Services →
                </a>
              </div>
            </div>

            {/* Additional Services Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Social Media Marketing */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-black mb-4">Social Media Marketing</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Build brand awareness and engage your audience across all major social media platforms 
                  with strategic content creation, community management, and targeted advertising campaigns.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Facebook & Instagram Marketing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    LinkedIn B2B Strategies
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Twitter & YouTube Marketing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Content Creation & Curation
                  </li>
                </ul>
                <a 
                  href="/services/social-media-marketing" 
                  className="inline-flex items-center text-black font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>

              {/* Content Marketing */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-black mb-4">Content Marketing</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Drive engagement and establish thought leadership with strategic content marketing 
                  including blog posts, articles, infographics, videos, and comprehensive content strategies.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Blog Writing & SEO Content
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Video Content Creation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Infographic Design
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Content Distribution Strategy
                  </li>
                </ul>
                <a 
                  href="/services/content-marketing" 
                  className="inline-flex items-center text-black font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>

              {/* Email Marketing */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-black mb-4">Email Marketing</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Nurture leads and retain customers with targeted email campaigns, automated workflows, 
                  and personalized messaging that drives conversions and builds long-term relationships.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Email Campaign Design
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Marketing Automation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    List Building & Segmentation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Performance Analytics
                  </li>
                </ul>
                <a 
                  href="/services/email-marketing" 
                  className="inline-flex items-center text-black font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                Why Choose God Digital Marketing?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proven expertise, innovative strategies, and commitment to results make us 
                India's most trusted digital marketing partner for businesses of all sizes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-black mb-4">Proven Track Record</h3>
                <p className="text-gray-600 leading-relaxed">
                  Over 2000+ successful campaigns across diverse industries with an average ROI 
                  improvement of 350%. Our results speak for themselves with measurable growth 
                  and sustainable business impact.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-black mb-4">Expert Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Certified digital marketing professionals with extensive experience across 
                  all major platforms and industries. Continuous training ensures we stay 
                  ahead of the latest trends and algorithm updates.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-black mb-4">Data-Driven Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every strategy is backed by comprehensive data analysis and market research. 
                  We use advanced analytics tools to track performance and optimize campaigns 
                  for maximum ROI and business growth.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-black mb-4">Customized Strategies</h3>
                <p className="text-gray-600 leading-relaxed">
                  No one-size-fits-all solutions. We develop tailored digital marketing 
                  strategies based on your specific business goals, target audience, 
                  industry requirements, and competitive landscape.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold text-black mb-4">Continuous Optimization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular monitoring, testing, and optimization ensure your campaigns 
                  perform at peak efficiency. We continuously refine strategies based 
                  on performance data and market changes.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-black mb-4">Dedicated Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Direct access to your dedicated account manager and support team. 
                  Regular reporting, transparent communication, and responsive support 
                  ensure you're always informed about your campaign performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Accelerate Your Digital Growth?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their digital presence with our 
              expert digital marketing services. Get a free consultation and customized strategy proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                📞 Get Free Digital Marketing Audit
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

export default DigitalMarketingPage;

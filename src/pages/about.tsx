import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ModernLayout } from '../components/Layout/ModernLayout';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About God Digital Marketing | India's Leading Digital Marketing Agency | Expert Team & Proven Results</title>
        <meta name="description" content="Learn about God Digital Marketing - India's premier digital marketing agency with 15+ years of experience, 2000+ successful clients, and expert team delivering divine digital solutions across 500+ cities. Our story, mission, and commitment to excellence." />
        <meta name="keywords" content="about God Digital Marketing, digital marketing agency India, digital marketing company, expert team, digital marketing experience, proven results, client testimonials, company history" />
        <link rel="canonical" href="https://courageous-daffodil-2020b6.netlify.app/about/" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "God Digital Marketing",
            "description": "India's leading digital marketing agency providing comprehensive digital solutions for businesses across 500+ cities",
            "url": "https://courageous-daffodil-2020b6.netlify.app",
            "logo": "https://courageous-daffodil-2020b6.netlify.app/logo.png",
            "foundingDate": "2009",
            "numberOfEmployees": "50-100",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9999999999",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            },
            "sameAs": [
              "https://www.facebook.com/goddigitalmarketing",
              "https://www.linkedin.com/company/goddigitalmarketing",
              "https://twitter.com/goddigitalmark"
            ],
            "founder": {
              "@type": "Person",
              "name": "Digital Marketing Expert"
            },
            "employee": [
              {
                "@type": "Person",
                "name": "SEO Specialist",
                "jobTitle": "Senior SEO Manager"
              },
              {
                "@type": "Person",
                "name": "PPC Expert",
                "jobTitle": "PPC Campaign Manager"
              }
            ]
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
                  About God Digital
                </span>
                <br />
                <span className="text-black">Marketing</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                India's Premier Digital Marketing Agency
                <br />
                <span className="font-semibold text-black">15+ Years Experience • 2000+ Clients • Divine Digital Solutions</span>
              </p>
              
              <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Founded with a mission to transform businesses through divine digital solutions, God Digital Marketing 
                has been India's trusted partner for comprehensive digital marketing services since 2009. Our expert 
                team delivers proven strategies that drive measurable results across all industries and locations.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">15+</div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">2000+</div>
                  <div className="text-gray-600 font-medium">Clients Served</div>
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

        {/* Our Story */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-black mb-8">Our Story</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    God Digital Marketing was born from a simple yet powerful vision: to provide divine digital 
                    solutions that transform businesses and drive extraordinary growth. Founded in 2009 by a team 
                    of passionate digital marketing experts, we started with a mission to bridge the gap between 
                    traditional business practices and the digital revolution.
                  </p>
                  <p>
                    What began as a small team of dedicated professionals has evolved into India's leading digital 
                    marketing agency, serving over 2000 clients across 500+ cities. Our journey has been marked 
                    by continuous innovation, unwavering commitment to excellence, and an obsession with delivering 
                    measurable results for our clients.
                  </p>
                  <p>
                    Today, we stand as a testament to the power of divine digital solutions, having helped countless 
                    businesses achieve their goals through strategic digital marketing, cutting-edge technology, 
                    and personalized service that goes beyond expectations.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-black mb-6">Our Journey Milestones</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-black rounded-full mt-1 mr-4 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-black">2009 - Foundation</div>
                      <div className="text-gray-600">Started with a vision to transform digital marketing in India</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-black rounded-full mt-1 mr-4 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-black">2012 - Expansion</div>
                      <div className="text-gray-600">Expanded services to include AI automation and business solutions</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-black rounded-full mt-1 mr-4 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-black">2015 - National Reach</div>
                      <div className="text-gray-600">Achieved presence across 100+ Indian cities</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-black rounded-full mt-1 mr-4 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-black">2020 - Digital Transformation</div>
                      <div className="text-gray-600">Led businesses through pandemic-driven digital transformation</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-black rounded-full mt-1 mr-4 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-black">2025 - Industry Leadership</div>
                      <div className="text-gray-600">Recognized as India's premier digital marketing agency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                Our Mission, Vision & Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Guided by our core principles and driven by a vision to transform the digital landscape, 
                we are committed to delivering divine digital solutions that create lasting impact.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses across India with divine digital marketing solutions that drive 
                  sustainable growth, enhance brand visibility, and create meaningful connections between 
                  brands and their audiences through innovative strategies and cutting-edge technology.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-5xl mb-6">🔮</div>
                <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be India's most trusted and innovative digital marketing agency, recognized for 
                  delivering divine digital solutions that transform businesses and set new standards 
                  of excellence in the digital marketing industry.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-5xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold text-black mb-4">Our Values</h3>
                <ul className="text-gray-600 leading-relaxed space-y-2">
                  <li><strong>Excellence:</strong> Delivering exceptional results</li>
                  <li><strong>Innovation:</strong> Embracing cutting-edge solutions</li>
                  <li><strong>Integrity:</strong> Transparent and ethical practices</li>
                  <li><strong>Partnership:</strong> Building lasting relationships</li>
                  <li><strong>Growth:</strong> Driving mutual success</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Team */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                Our Expert Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the digital marketing experts who bring divine solutions to life. Our team combines 
                deep industry knowledge, technical expertise, and creative innovation to deliver exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300 text-center">
                <div className="text-4xl mb-4">👨‍💼</div>
                <h3 className="text-xl font-bold text-black mb-2">Leadership Team</h3>
                <p className="text-gray-600 mb-4">Visionary leaders with 15+ years of digital marketing experience</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Strategic Planning</li>
                  <li>• Business Development</li>
                  <li>• Client Relations</li>
                  <li>• Innovation Management</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300 text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-black mb-2">SEO Specialists</h3>
                <p className="text-gray-600 mb-4">Certified SEO experts driving organic growth and search visibility</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Technical SEO</li>
                  <li>• Content Optimization</li>
                  <li>• Link Building</li>
                  <li>• Local SEO</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300 text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-black mb-2">PPC Experts</h3>
                <p className="text-gray-600 mb-4">Google Ads certified professionals maximizing advertising ROI</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Campaign Management</li>
                  <li>• Conversion Optimization</li>
                  <li>• Budget Management</li>
                  <li>• Performance Analysis</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300 text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-black mb-2">AI Automation Team</h3>
                <p className="text-gray-600 mb-4">Technology experts implementing cutting-edge automation solutions</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Process Automation</li>
                  <li>• AI Implementation</li>
                  <li>• Workflow Optimization</li>
                  <li>• System Integration</li>
                </ul>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-6 text-center">Team Certifications & Expertise</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-2">50+</div>
                  <div className="text-gray-600">Google Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-2">25+</div>
                  <div className="text-gray-600">Facebook Blueprint Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-2">15+</div>
                  <div className="text-gray-600">HubSpot Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-2">100%</div>
                  <div className="text-gray-600">Continuous Learning</div>
                </div>
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
                Our proven track record, innovative approach, and commitment to excellence make us 
                the preferred choice for businesses seeking transformative digital marketing solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-black mb-4">Proven Track Record</h3>
                <p className="text-gray-600 leading-relaxed">
                  15+ years of experience with 2000+ successful campaigns across diverse industries. 
                  Our results speak for themselves with an average ROI improvement of 350% for our clients.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold text-black mb-4">Innovation & Technology</h3>
                <p className="text-gray-600 leading-relaxed">
                  Cutting-edge AI automation, advanced analytics, and proprietary tools that give our 
                  clients a competitive advantage in the digital marketplace.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-black mb-4">Customized Strategies</h3>
                <p className="text-gray-600 leading-relaxed">
                  No one-size-fits-all solutions. Every strategy is tailored to your specific business 
                  goals, target audience, and industry requirements for maximum effectiveness.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-black mb-4">Data-Driven Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every decision is backed by comprehensive data analysis and market research. We use 
                  advanced analytics to optimize campaigns and maximize ROI continuously.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-black mb-4">Partnership Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  We don't just provide services; we become your strategic partners. Our dedicated 
                  account managers ensure transparent communication and collaborative success.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-black mb-4">Scalable Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  From startups to enterprises, our solutions scale with your business growth. 
                  Flexible strategies that adapt to changing market conditions and business needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about 
                their experience with God Digital Marketing's divine digital solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "God Digital Marketing transformed our online presence completely. Their SEO strategies 
                  increased our organic traffic by 400% and lead generation by 300%. Truly divine results\!"
                </p>
                <div className="font-semibold text-black">Rajesh Kumar</div>
                <div className="text-gray-600">CEO, TechnoSoft Solutions</div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "The AI automation solutions provided by God Digital Marketing revolutionized our 
                  business processes. We've reduced operational costs by 60% while improving efficiency."
                </p>
                <div className="font-semibold text-black">Priya Sharma</div>
                <div className="text-gray-600">Director, Healthcare Plus</div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Outstanding PPC management and social media marketing. Our ROI improved by 450% 
                  within 6 months. The team's expertise and dedication are unmatched."
                </p>
                <div className="font-semibold text-black">Amit Patel</div>
                <div className="text-gray-600">Founder, E-commerce Empire</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Experience Divine Digital Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join 2000+ businesses that have transformed their digital presence with God Digital Marketing. 
              Let's create your success story together with our proven expertise and innovative strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                🚀 Start Your Digital Transformation
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                📊 Explore Our Services
              </a>
            </div>
          </div>
        </section>
      </ModernLayout>
    </>
  );
};

export default AboutPage;

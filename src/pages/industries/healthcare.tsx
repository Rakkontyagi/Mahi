import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ModernLayout } from '../../components/Layout/ModernLayout';

const HealthcarePage = () => {
  return (
    <>
      <Helmet>
        <title>Healthcare Digital Marketing Services India | Medical SEO, Hospital Marketing & Patient Acquisition | God Digital Marketing</title>
        <meta name="description" content="Specialized healthcare digital marketing services for hospitals, clinics, doctors & medical practices across India. HIPAA-compliant SEO, patient acquisition, medical content marketing & reputation management. Proven results for 200+ healthcare providers." />
        <meta name="keywords" content="healthcare digital marketing, medical SEO, hospital marketing, doctor marketing, patient acquisition, medical practice marketing, healthcare content marketing, medical website design, healthcare social media, telemedicine marketing" />
        <link rel="canonical" href="https://kaleidoscopic-paletas-9f9af7.netlify.app/industries/healthcare/" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Healthcare Digital Marketing Services",
            "description": "Specialized digital marketing services for healthcare providers including hospitals, clinics, doctors, and medical practices across India",
            "provider": {
              "@type": "Organization",
              "name": "God Digital Marketing",
              "url": "https://kaleidoscopic-paletas-9f9af7.netlify.app"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Healthcare Providers"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Healthcare Digital Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Medical SEO Services",
                    "description": "Search engine optimization for healthcare websites and medical practices"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Patient Acquisition Marketing",
                    "description": "Digital marketing strategies to attract and convert patients"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Healthcare Content Marketing",
                    "description": "Medical content creation and health education marketing"
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
                  Healthcare Digital
                </span>
                <br />
                <span className="text-black">Marketing</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Specialized Digital Marketing for Healthcare Providers
                <br />
                <span className="font-semibold text-black">HIPAA Compliant • Patient-Focused • Medical Expertise</span>
              </p>
              
              <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Transform your healthcare practice with specialized digital marketing solutions designed 
                for hospitals, clinics, doctors, and medical professionals. HIPAA-compliant strategies 
                that drive patient acquisition, build trust, and enhance your medical practice's online presence.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <a
                  href="/contact"
                  className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  🏥 Get Healthcare Marketing Audit
                </a>
                <a
                  href="#healthcare-services"
                  className="border-2 border-black text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300"
                >
                  📊 View Healthcare Solutions
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">200+</div>
                  <div className="text-gray-600 font-medium">Healthcare Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">300%</div>
                  <div className="text-gray-600 font-medium">Patient Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">100%</div>
                  <div className="text-gray-600 font-medium">HIPAA Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">95%</div>
                  <div className="text-gray-600 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Marketing Services */}
        <section id="healthcare-services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                Comprehensive Healthcare Marketing Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our healthcare digital marketing services are designed specifically for medical professionals, 
                ensuring compliance with healthcare regulations while maximizing patient acquisition and engagement.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Medical SEO */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">🔍</div>
                  <h3 className="text-2xl font-bold text-black">Medical SEO & Local Search Optimization</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Dominate local search results for medical services with specialized SEO strategies 
                  designed for healthcare providers. Our medical SEO approach ensures patients find 
                  your practice when searching for healthcare services in your area.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">Medical SEO Services Include:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Local Medical SEO:</strong> Google My Business optimization for healthcare</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Medical Keyword Research:</strong> Condition-specific and treatment-focused keywords</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Healthcare Content Optimization:</strong> Medical content that ranks and educates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Medical Directory Listings:</strong> Healthcare-specific directory optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Schema Markup:</strong> Medical practice structured data implementation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">Medical SEO Results:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">400%</div>
                      <div className="text-sm text-gray-600">Organic Traffic Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">Top 3</div>
                      <div className="text-sm text-gray-600">Local Search Rankings</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Patient Acquisition */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">👥</div>
                  <h3 className="text-2xl font-bold text-black">Patient Acquisition & Conversion</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Attract and convert more patients with targeted digital marketing campaigns designed 
                  specifically for healthcare services. Our patient acquisition strategies focus on 
                  building trust and driving appointment bookings.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">Patient Acquisition Strategies:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Targeted PPC Campaigns:</strong> Google Ads for medical services and conditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Landing Page Optimization:</strong> Conversion-focused medical landing pages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Online Appointment Booking:</strong> Streamlined patient scheduling systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Patient Retargeting:</strong> Re-engagement campaigns for website visitors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Telemedicine Promotion:</strong> Digital marketing for virtual consultations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">Patient Acquisition Results:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">250%</div>
                      <div className="text-sm text-gray-600">New Patient Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">40%</div>
                      <div className="text-sm text-gray-600">Conversion Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Healthcare Services */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Healthcare Content Marketing */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-black mb-4">Medical Content Marketing</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Educate patients and build authority with medically accurate, engaging content that 
                  addresses patient concerns and showcases your expertise in various medical specialties.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Medical Blog Writing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Patient Education Materials
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Health Awareness Campaigns
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Medical Video Content
                  </li>
                </ul>
              </div>

              {/* Reputation Management */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-black mb-4">Healthcare Reputation Management</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Build and maintain a positive online reputation for your medical practice with 
                  strategic review management and patient feedback optimization across all platforms.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Online Review Management
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Patient Feedback Systems
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Crisis Communication
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Brand Monitoring
                  </li>
                </ul>
              </div>

              {/* Healthcare Social Media */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-black mb-4">Healthcare Social Media Marketing</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Engage with patients and build community trust through compliant social media 
                  strategies that educate, inform, and promote your healthcare services effectively.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    HIPAA-Compliant Posting
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Health Education Content
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Community Engagement
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Medical Event Promotion
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Specialties */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                Medical Specialties We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized digital marketing expertise across all major medical specialties, 
                with deep understanding of each field's unique challenges and patient needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl font-bold text-black mb-4">Cardiology</h3>
                <p className="text-gray-600 leading-relaxed">
                  Specialized marketing for cardiologists, heart hospitals, and cardiac care centers. 
                  Focus on emergency services, preventive care, and advanced cardiac procedures.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-black mb-4">Neurology</h3>
                <p className="text-gray-600 leading-relaxed">
                  Digital marketing for neurologists and neurosurgeons. Specialized campaigns for 
                  stroke care, epilepsy treatment, and neurological disorder management.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🦴</div>
                <h3 className="text-xl font-bold text-black mb-4">Orthopedics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Marketing solutions for orthopedic surgeons and bone specialists. Focus on 
                  joint replacement, sports medicine, and trauma care services.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">👶</div>
                <h3 className="text-xl font-bold text-black mb-4">Pediatrics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Child-focused marketing for pediatricians and children's hospitals. Parent-targeted 
                  campaigns for vaccination, child health, and pediatric specialties.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-xl font-bold text-black mb-4">Ophthalmology</h3>
                <p className="text-gray-600 leading-relaxed">
                  Eye care marketing for ophthalmologists and vision centers. Specialized campaigns 
                  for LASIK, cataract surgery, and comprehensive eye care services.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🦷</div>
                <h3 className="text-xl font-bold text-black mb-4">Dentistry</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dental practice marketing for general dentists and specialists. Focus on cosmetic 
                  dentistry, orthodontics, and preventive dental care promotion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Trust */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                Healthcare Compliance & Trust
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our healthcare marketing strategies prioritize patient privacy, regulatory compliance, 
                and building trust through transparent, ethical marketing practices.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">HIPAA Compliance</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  All our healthcare marketing campaigns are designed with HIPAA compliance at the forefront. 
                  We ensure patient privacy protection while delivering effective marketing results.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Patient Privacy Protection:</strong> Secure handling of all patient information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Compliant Content Creation:</strong> Medical content that meets regulatory standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Secure Data Management:</strong> Protected patient data in all marketing activities</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Trust Building Strategies</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Build patient trust through transparent communication, authentic testimonials, 
                  and evidence-based marketing that showcases your medical expertise and patient care quality.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Authentic Patient Stories:</strong> Compliant patient testimonials and success stories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Medical Credentials Showcase:</strong> Highlighting qualifications and expertise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Transparency in Communication:</strong> Clear, honest medical information</span>
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
              Ready to Grow Your Healthcare Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Partner with healthcare marketing specialists who understand the unique challenges 
              of medical practice promotion. Get a compliant, effective marketing strategy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                🏥 Get Healthcare Marketing Consultation
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

export default HealthcarePage;

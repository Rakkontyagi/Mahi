import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MapPin, Building2, Zap, Users, CheckCircle, Star, TrendingUp, Phone, Mail, Clock, Award } from 'lucide-react';

export function AurangabadDigitalMarketingPage() {
  const serviceFeatures = [
  "SEO Services",
  "PPC Advertising",
  "Social Media Marketing",
  "Content Marketing"
];

  const stats = [
    { number: "150+", label: "Projects Completed in Aurangabad" },
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "4.2x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions Aurangabad",
      text: "Outstanding digital marketing results! Our online presence has improved dramatically.",
      rating: 5
    },
    {
      name: "Priya Sharma", 
      company: "Aurangabad Retail Group",
      text: "Professional team with deep expertise in digital marketing. Highly recommended!",
      rating: 5
    }
  ];

  const packages = [
    {
      name: "Starter Package",
      price: "₹15,000",
      duration: "per month",
      features: [
        "Basic Digital Marketing Setup",
        "Monthly Performance Reports",
        "Email Support",
        "Initial Strategy Consultation"
      ],
      isPopular: false
    },
    {
      name: "Growth Package", 
      price: "₹35,000",
      duration: "per month",
      features: [
        "Advanced Digital Marketing Solutions",
        "Bi-weekly Performance Reports",
        "Phone & Email Support",
        "Quarterly Strategy Reviews",
        "Competitor Analysis"
      ],
      isPopular: true
    },
    {
      name: "Enterprise Package",
      price: "₹65,000",
      duration: "per month", 
      features: [
        "Complete Digital Marketing Solutions",
        "Weekly Performance Reports",
        "24/7 Dedicated Support",
        "Monthly Strategy Sessions",
        "Advanced Analytics Dashboard",
        "Custom Integrations"
      ],
      isPopular: false
    }
  ];

  const faqs = [
    {
      question: "How long does it take to see results from digital marketing in Aurangabad?",
      answer: "Results typically begin showing within 30-90 days, depending on your current online presence and competition in Aurangabad. Our proven strategies are designed to deliver both quick wins and long-term sustainable growth."
    },
    {
      question: "Do you work with businesses of all sizes in Aurangabad?",
      answer: "Yes, we provide digital marketing services for startups, SMEs, and large enterprises across Aurangabad. Our solutions are scalable and customized to meet your specific business needs and budget."
    },
    {
      question: "What makes your digital marketing services different in Aurangabad?",
      answer: "Our deep understanding of the Aurangabad market, combined with data-driven strategies and proven methodologies, sets us apart. We focus on delivering measurable ROI and building long-term partnerships with our clients."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely! Our digital marketing solutions are designed to seamlessly integrate with your existing CRM, analytics tools, and business systems to ensure smooth operations and data consistency."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Best Digital Marketing Services in Aurangabad, Maharashtra | Expert Solutions</title>
        <meta name="description" content="Leading digital marketing services in Aurangabad, Maharashtra. Expert team delivering proven results for businesses. Get free consultation and grow your online presence today!" />
        <meta name="keywords" content="digital marketing aurangabad, digital marketing services aurangabad, digital marketing company aurangabad, best digital marketing aurangabad, digital marketing agency aurangabad" />
        <link rel="canonical" href={`https://yourdomain.com/${citySlug}/${service.slug}/`} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Best Digital Marketing Services in Aurangabad, Maharashtra" />
        <meta property="og:description" content="Expert digital marketing solutions for businesses in Aurangabad. Proven results, dedicated support, and customized strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://yourdomain.com/${citySlug}/${service.slug}/`} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Digital Marketing Services in Aurangabad" />
        <meta name="twitter:description" content="Expert digital marketing solutions for Aurangabad businesses" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Your Company Name - Digital Marketing Aurangabad",
            "description": "Comprehensive digital marketing solutions to grow your business online",
            "url": "https://yourdomain.com/${citySlug}/${service.slug}/",
            "telephone": "+91-9876543210",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Aurangabad",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates"
            },
            "areaServed": {
              "@type": "City",
              "name": "Aurangabad",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Aurangabad"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Marketing"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5"
            }
          }`}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-purple-400 mr-2" />
                  <span className="text-purple-400 font-semibold">Aurangabad, Maharashtra</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Expert <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Digital Marketing</span> Services in Aurangabad
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform your Aurangabad business with our proven digital marketing solutions. 
                  We help businesses across Aurangabad achieve measurable growth through strategic digital marketing, 
                  advanced automation, and data-driven approaches that deliver real results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                    Get Free Consultation
                  </button>
                  <button className="px-8 py-4 border border-purple-500 rounded-lg font-semibold text-lg hover:bg-purple-500 transition-all duration-300">
                    View Case Studies
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-4">Why Choose Us for Digital Marketing?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span>Local Aurangabad Market Expertise</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span>Proven Track Record</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span>Transparent Reporting</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span>24/7 Support Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Digital Marketing Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive digital marketing services designed specifically for businesses in Aurangabad.
              </p>
            </div>
            
            {serviceFeatures.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <Zap className="w-8 h-8 text-purple-400" />
                      <h3 className="text-xl font-bold ml-4">{feature}</h3>
                    </div>
                    <p className="text-gray-300">
                      Professional {feature.toLowerCase()} services tailored for Aurangabad businesses to maximize your online presence and drive growth.
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Digital Marketing Packages for Aurangabad</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to meet the needs of businesses of all sizes in Aurangabad.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div key={index} className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 relative ${pkg.isPopular ? 'ring-2 ring-purple-500 transform scale-105' : ''}`}>
                  {pkg.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-purple-400 mb-2">{pkg.price}</div>
                    <div className="text-gray-400">{pkg.duration}</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${pkg.isPopular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : 'border border-purple-500 hover:bg-purple-500'}`}>
                    Choose This Package
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Aurangabad Clients Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. See what businesses in Aurangabad say about our digital marketing services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-purple-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">
                Common questions about our digital marketing services in Aurangabad.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Aurangabad Business?</h2>
                  <p className="text-xl text-gray-200 mb-8">
                    Join successful businesses in Aurangabad who have accelerated their growth with our proven digital marketing strategies.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 text-purple-300 mr-4" />
                      <span className="text-lg">+91-9876543210</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 text-purple-300 mr-4" />
                      <span className="text-lg">hello@yourcompany.com</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-6 h-6 text-purple-300 mr-4" />
                      <span className="text-lg">Mon-Sat 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Get Your Free Consultation</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300"
                    />
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300"
                    />
                    <textarea
                      placeholder="Tell us about your business goals"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-white text-purple-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                    >
                      Get Free Consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AurangabadDigitalMarketingPage;
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ModernLayout } from '../components/Layout/ModernLayout';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your backend API or form handling service
  };

  return (
    <>
      <Helmet>
        <title>Contact God Digital Marketing | Get Free Consultation & Quote | India's Leading Digital Marketing Agency</title>
        <meta name="description" content="Contact God Digital Marketing for expert digital marketing services across India. Get free consultation, custom quotes, and strategic advice from our certified experts. Available 24/7 for all your digital marketing needs." />
        <meta name="keywords" content="contact God Digital Marketing, digital marketing consultation, free quote, digital marketing agency contact, expert advice, consultation booking, digital marketing services inquiry" />
        <link rel="canonical" href="https://kaleidoscopic-paletas-9f9af7.netlify.app/contact/" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact God Digital Marketing",
            "description": "Contact page for God Digital Marketing - India's leading digital marketing agency",
            "url": "https://kaleidoscopic-paletas-9f9af7.netlify.app/contact/",
            "mainEntity": {
              "@type": "Organization",
              "name": "God Digital Marketing",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-9999999999",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi"],
                  "hoursAvailable": "Mo-Su 09:00-18:00"
                },
                {
                  "@type": "ContactPoint",
                  "email": "info@goddigitalmarketing.com",
                  "contactType": "customer service",
                  "areaServed": "IN"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
              }
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
                  Contact Us
                </span>
                <br />
                <span className="text-black">Today</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Get Expert Digital Marketing Consultation
                <br />
                <span className="font-semibold text-black">Free Strategy Session • Custom Solutions • 24/7 Support</span>
              </p>
              
              <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your digital presence? Contact God Digital Marketing today for a free 
                consultation and discover how our divine digital solutions can accelerate your business growth. 
                Our experts are standing by to help you achieve extraordinary results.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">24/7</div>
                  <div className="text-gray-600 font-medium">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">Free</div>
                  <div className="text-gray-600 font-medium">Initial Consultation</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">24hrs</div>
                  <div className="text-gray-600 font-medium">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Cities Served</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Information */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300">
                <h2 className="text-3xl font-bold text-black mb-6">Get Your Free Consultation</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Fill out the form below and our digital marketing experts will contact you within 24 hours 
                  with a customized strategy proposal for your business.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors duration-200"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-black mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors duration-200"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-black mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors duration-200"
                      >
                        <option value="">Select a service</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="seo-services">SEO Services</option>
                        <option value="ppc-advertising">PPC Advertising</option>
                        <option value="social-media-marketing">Social Media Marketing</option>
                        <option value="ai-automation">AI Automation</option>
                        <option value="business-automation">Business Automation</option>
                        <option value="content-marketing">Content Marketing</option>
                        <option value="email-marketing">Email Marketing</option>
                        <option value="multiple-services">Multiple Services</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-black mb-2">
                        Monthly Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors duration-200"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50k">Under ₹50,000</option>
                        <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                        <option value="1l-2l">₹1,00,000 - ₹2,00,000</option>
                        <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
                        <option value="5l-10l">₹5,00,000 - ₹10,00,000</option>
                        <option value="above-10l">Above ₹10,00,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors duration-200"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                  >
                    🚀 Get Free Consultation
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service. 
                    We'll never share your information with third parties.
                  </p>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-black mb-6">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="text-2xl mr-4">📞</div>
                      <div>
                        <div className="font-semibold text-black">Phone</div>
                        <div className="text-gray-600">+91-9999999999</div>
                        <div className="text-sm text-gray-500">Available 24/7 for urgent inquiries</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-2xl mr-4">📧</div>
                      <div>
                        <div className="font-semibold text-black">Email</div>
                        <div className="text-gray-600">info@goddigitalmarketing.com</div>
                        <div className="text-sm text-gray-500">Response within 24 hours</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-2xl mr-4">🌍</div>
                      <div>
                        <div className="font-semibold text-black">Coverage</div>
                        <div className="text-gray-600">All Major Indian Cities</div>
                        <div className="text-sm text-gray-500">500+ cities across India</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-2xl mr-4">⏰</div>
                      <div>
                        <div className="font-semibold text-black">Business Hours</div>
                        <div className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</div>
                        <div className="text-sm text-gray-500">Emergency support available 24/7</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black text-white rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Why Contact Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Free initial consultation and strategy session</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Custom digital marketing proposal within 48 hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Expert advice from certified digital marketing professionals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>No obligation - just valuable insights for your business</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Transparent pricing and clear project timelines</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-gray-100 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-black mb-6">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors duration-200">
                      <span className="text-xl">📘</span>
                    </a>
                    <a href="#" className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors duration-200">
                      <span className="text-xl">💼</span>
                    </a>
                    <a href="#" className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors duration-200">
                      <span className="text-xl">🐦</span>
                    </a>
                    <a href="#" className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors duration-200">
                      <span className="text-xl">📷</span>
                    </a>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Stay updated with the latest digital marketing trends, tips, and insights 
                    from our expert team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get quick answers to common questions about our digital marketing services, 
                processes, and how we can help transform your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-black mb-4">How quickly can I see results?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Results vary by service: PPC campaigns can show immediate traffic, SEO typically 
                  shows significant improvements in 3-6 months, and social media marketing builds 
                  momentum over 2-3 months. We provide detailed timelines during consultation.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-black mb-4">What makes you different from other agencies?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our 15+ years of experience, 2000+ successful campaigns, AI automation expertise, 
                  and data-driven approach set us apart. We focus on measurable ROI and long-term 
                  partnerships rather than short-term gains.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-black mb-4">Do you work with small businesses?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolutely\! We work with businesses of all sizes, from startups to enterprises. 
                  Our scalable solutions and flexible pricing ensure that every business can access 
                  professional digital marketing services.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-black mb-4">What's included in the free consultation?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our free consultation includes a comprehensive audit of your current digital presence, 
                  competitor analysis, strategy recommendations, and a custom proposal with clear 
                  timelines and expected outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Start Your Digital Transformation?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Don't wait another day to transform your digital presence. Contact God Digital Marketing 
              now and discover how our divine digital solutions can accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+919999999999"
                className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                📞 Call Now: +91-9999999999
              </a>
              <a
                href="mailto:info@goddigitalmarketing.com"
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                📧 Email Us Today
              </a>
            </div>
          </div>
        </section>
      </ModernLayout>
    </>
  );
};

export default ContactPage;

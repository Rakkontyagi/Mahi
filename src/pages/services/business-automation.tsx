import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ModernLayout } from '../../components/Layout/ModernLayout';

const BusinessAutomationPage = () => {
  return (
    <>
      <Helmet>
        <title>Business Process Automation Services India | Workflow Optimization & RPA Solutions | God Digital Marketing</title>
        <meta name="description" content="Streamline your business operations with comprehensive automation solutions. Workflow optimization, RPA, CRM integration, sales automation & process digitization across India. Reduce operational costs by 70% while boosting productivity." />
        <meta name="keywords" content="business process automation, workflow automation, RPA services, business automation solutions, process optimization, workflow management, CRM automation, sales automation, operational efficiency, digital transformation" />
        <link rel="canonical" href="https://kaleidoscopic-paletas-9f9af7.netlify.app/services/business-automation/" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Business Process Automation Services",
            "description": "Comprehensive business automation solutions including workflow optimization, RPA, CRM integration, and process digitization for enhanced operational efficiency",
            "provider": {
              "@type": "Organization",
              "name": "God Digital Marketing",
              "url": "https://kaleidoscopic-paletas-9f9af7.netlify.app"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Business Automation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Workflow Automation",
                    "description": "End-to-end workflow optimization and automation solutions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "RPA Implementation",
                    "description": "Robotic Process Automation for repetitive task automation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CRM Integration",
                    "description": "Customer relationship management system integration and automation"
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
                  Business Process
                </span>
                <br />
                <span className="text-black">Automation</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Streamline Operations with Intelligent Automation
                <br />
                <span className="font-semibold text-black">Workflow Optimization • 70% Cost Reduction • Enhanced Productivity</span>
              </p>
              
              <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Transform your business operations with comprehensive automation solutions. From workflow 
                optimization and RPA to CRM integration and process digitization, we deliver end-to-end 
                automation strategies that reduce costs, eliminate errors, and boost operational efficiency.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <a
                  href="/contact"
                  className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  ⚙️ Get Free Process Assessment
                </a>
                <a
                  href="#automation-solutions"
                  className="border-2 border-black text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300"
                >
                  🔧 View Automation Solutions
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">70%</div>
                  <div className="text-gray-600 font-medium">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">500%</div>
                  <div className="text-gray-600 font-medium">Productivity Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">98%</div>
                  <div className="text-gray-600 font-medium">Error Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-black mb-2">24/7</div>
                  <div className="text-gray-600 font-medium">Automated Operations</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Solutions */}
        <section id="automation-solutions" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                Comprehensive Business Automation Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our business automation services transform manual processes into efficient, automated workflows 
                that drive operational excellence, reduce costs, and enable scalable business growth.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Workflow Automation */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">🔄</div>
                  <h3 className="text-2xl font-bold text-black">Workflow Automation & Optimization</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Design and implement automated workflows that streamline your business processes from 
                  start to finish. Our workflow automation solutions eliminate bottlenecks, reduce manual 
                  intervention, and ensure consistent, error-free process execution across your organization.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">Workflow Solutions Include:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Process Mapping & Analysis:</strong> Comprehensive workflow documentation and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Approval Workflows:</strong> Automated approval chains and decision routing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Task Automation:</strong> Automated task assignment and tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Notification Systems:</strong> Automated alerts and status updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Performance Monitoring:</strong> Real-time workflow analytics and optimization</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">Workflow Automation Benefits:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">85%</div>
                      <div className="text-sm text-gray-600">Time Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">92%</div>
                      <div className="text-sm text-gray-600">Process Efficiency</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RPA Solutions */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">🤖</div>
                  <h3 className="text-2xl font-bold text-black">Robotic Process Automation (RPA)</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Deploy intelligent software robots to automate repetitive, rule-based tasks across 
                  multiple systems and applications. Our RPA solutions free up your workforce to focus 
                  on high-value activities while ensuring 24/7 operational efficiency.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">RPA Capabilities Include:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Data Entry Automation:</strong> Automated data processing and entry across systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Report Generation:</strong> Automated report creation and distribution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>System Integration:</strong> Seamless data transfer between applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Invoice Processing:</strong> Automated invoice handling and approval</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Customer Onboarding:</strong> Streamlined customer registration processes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">RPA Impact Metrics:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">90%</div>
                      <div className="text-sm text-gray-600">Task Automation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">99.9%</div>
                      <div className="text-sm text-gray-600">Accuracy Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Automation Services */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* CRM Automation */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-black mb-4">CRM Integration & Automation</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Streamline customer relationship management with automated lead scoring, follow-up 
                  sequences, and customer journey optimization across all touchpoints.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Lead Scoring & Qualification
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Automated Follow-up Sequences
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Customer Journey Mapping
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Sales Pipeline Automation
                  </li>
                </ul>
              </div>

              {/* Sales Automation */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-black mb-4">Sales Process Automation</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Optimize your sales processes with automated lead generation, proposal creation, 
                  contract management, and performance tracking for increased conversion rates.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Lead Generation Automation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Proposal & Quote Generation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Contract Management
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Sales Performance Analytics
                  </li>
                </ul>
              </div>

              {/* Financial Automation */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-black transition-all duration-300">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-black mb-4">Financial Process Automation</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Automate financial processes including invoicing, expense management, reconciliation, 
                  and reporting for improved accuracy and compliance.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Automated Invoicing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Expense Management
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Account Reconciliation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    Financial Reporting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                Industries We Automate
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our business automation expertise spans across diverse industries, delivering 
                tailored solutions that address specific sector challenges and requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold text-black mb-4">Healthcare</h3>
                <p className="text-gray-600 leading-relaxed">
                  Patient management, appointment scheduling, billing automation, and compliance 
                  reporting for healthcare providers and medical practices.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-black mb-4">Manufacturing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Supply chain automation, inventory management, quality control processes, 
                  and production planning optimization.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold text-black mb-4">Financial Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  Loan processing, compliance reporting, risk assessment, and customer 
                  onboarding automation for banks and financial institutions.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-bold text-black mb-4">E-commerce</h3>
                <p className="text-gray-600 leading-relaxed">
                  Order processing, inventory management, customer service automation, 
                  and marketplace integration for online retailers.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-black mb-4">Real Estate</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lead management, property listing automation, document processing, 
                  and client communication workflows.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-black mb-4">Education</h3>
                <p className="text-gray-600 leading-relaxed">
                  Student enrollment, grade management, communication automation, 
                  and administrative process optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Automate Your Business Processes?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Transform your operations with intelligent business automation solutions. 
              Get a free process assessment and discover automation opportunities in your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                ⚙️ Get Free Process Assessment
              </a>
              <a
                href="/services/ai-automation"
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                🤖 Explore AI Automation
              </a>
            </div>
          </div>
        </section>
      </ModernLayout>
    </>
  );
};

export default BusinessAutomationPage;

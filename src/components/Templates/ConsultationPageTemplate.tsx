import React from 'react';
import SEOHead from '../SEO/SEOHead';
import AnimatedSection from '../Shared/AnimatedSection';
import BaseCard from '../Shared/BaseCard';
import { CalendarCheck, Users, BarChart, MessageCircle, Sparkles, Navigation, MapPin, ThumbsUp, Zap } from 'lucide-react';

interface LocationInfoProps {
  city: string;
  state: string;
  citySlug?: string;
  stateSlug?: string;
}

interface ConsultationPageTemplateProps {
  location: LocationInfoProps;
}

const ConsultationPageTemplate: React.FC<ConsultationPageTemplateProps> = ({ location }) => {
  const YourCompanyName = "God Digital Marketing"; // Placeholder
  const siteBaseUrl = "https://goddigitalmarketing.com"; // Placeholder

  const pageTitle = `Free Digital Marketing Consultation in ${location.city} | Expert Advice`;
  const metaDescription = `Book a free digital marketing consultation in ${location.city}, ${location.state}. Get expert advice tailored to your business goals and the local ${location.city} market.`;
  const metaKeywords = [
    `digital marketing consultation ${location.citySlug || location.city.toLowerCase().replace(/\s+/g, '-')}`,
    `marketing strategy session ${location.citySlug || location.city.toLowerCase().replace(/\s+/g, '-')}`,
    `free marketing advice ${location.citySlug || location.city.toLowerCase().replace(/\s+/g, '-')}`,
    `${YourCompanyName} ${location.city}`,
    `grow business in ${location.city}`,
  ].join(', ');

  const canonicalUrlPath = location.stateSlug && location.citySlug
    ? `/digital-marketing-consultation/${location.stateSlug}/${location.citySlug}/`
    : `/digital-marketing-consultation/${location.state.toLowerCase().replace(/\s+/g, '-')}/${location.city.toLowerCase().replace(/\s+/g, '-')}/`;


  const whatToExpectItems = [
    { title: "Deep Dive & Needs Assessment", text: `We'll discuss your business, current goals, ongoing marketing efforts, and target audience specifically within the ${location.city} market.`, icon: <MessageCircle /> },
    { title: "Opportunity Analysis", text: `Our experts provide initial thoughts on untapped opportunities and growth strategies relevant to the competitive landscape in ${location.city}.`, icon: <Sparkles /> },
    { title: "Strategy Overview & Roadmap", text: `You'll receive a high-level overview of a tailored digital marketing approach designed to achieve your objectives in ${location.city}.`, icon: <Navigation /> },
  ];

  const benefitsItems = [
    { text: `Gain crystal-clear clarity on your current digital marketing standing and potential in ${location.city}.`, icon: <ThumbsUp /> },
    { text: `Receive expert, unbiased advice from seasoned professionals, tailored to your specific business and ${location.city}'s market.`, icon: <Users /> },
    { text: `Identify untapped growth opportunities and actionable next steps for your business in the ${location.city} area.`, icon: <Zap /> },
    { text: `Understand how a data-driven approach can significantly boost your local lead generation and sales.`, icon: <BarChart /> },
  ];

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={metaDescription}
        keywords={metaKeywords}
        canonicalUrl={`${siteBaseUrl}${canonicalUrlPath}`}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800 text-gray-200 font-sans">
        {/* Hero Section */}
        <AnimatedSection animationType="fadeInDown" duration={1000}>
          <section className="py-16 sm:py-20 md:py-28 text-center bg-black/30 backdrop-blur-lg">
            <div className="container mx-auto px-4 sm:px-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white break-words">
                Expert Digital Marketing Consultation in <span className="text-indigo-400">{location.city}</span>
              </h1>
              <p className="text-md sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
                Get personalized advice from our experienced digital marketing consultants in {location.city} to identify new opportunities and create a roadmap for your success.
              </p>
              <div className="mt-8 sm:mt-10">
                <a
                  href={`/contact-us?subject=Digital Marketing Consultation Request - ${encodeURIComponent(location.city)}`}
                  className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-md sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Book Your Free Consultation
                </a>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
          {/* What to Expect Section */}
          <AnimatedSection animationType="fadeInUp" duration={1000} delay={100}>
            <section className="my-12 md:my-16">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 md:mb-12 text-indigo-300 break-words">
                Your Digital Marketing Consultation in {location.city}: What to Expect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {whatToExpectItems.map((item, index) => (
                  <BaseCard key={index} variant="glass" className="p-4 sm:p-6 text-center flex flex-col items-center hover:shadow-indigo-500/30 transition-shadow">
                    <div className="p-3 bg-indigo-500/20 rounded-full mb-4 text-indigo-300">
                      {React.cloneElement(item.icon, { size: 28, className: "w-7 h-7" })}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{item.text}</p>
                  </BaseCard>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* Benefits Section */}
          <AnimatedSection animationType="fadeInUp" duration={1000} delay={200}>
            <section className="my-12 md:my-16 py-10 md:py-12 bg-slate-800/40 rounded-xl">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 md:mb-12 text-purple-300 break-words">
                Why Invest Time with Our {location.city} Experts?
              </h2>
              <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
                {benefitsItems.map((item, index) => (
                  <div key={index} className="flex items-start p-3">
                    <div className="flex-shrink-0 mr-3 mt-1 text-purple-400">
                      {React.cloneElement(item.icon, { size: 24, className: "w-6 h-6" })}
                    </div>
                    <p className="text-sm sm:text-base text-gray-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* Who Should Request Section */}
          <AnimatedSection animationType="fadeInUp" duration={1000} delay={300}>
            <section className="my-12 md:my-16 text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-indigo-300 break-words">
                Is This Consultation Right for Your {location.city} Business?
              </h2>
              <BaseCard variant="glass" className="max-w-3xl mx-auto p-4 sm:p-6">
                <p className="text-md sm:text-lg text-gray-300 leading-relaxed">
                  This complimentary session is ideal for businesses in <strong className="font-semibold text-indigo-300">{location.city}, {location.state}</strong> that are:
                </p>
                <ul className="list-disc list-inside text-left mt-4 space-y-1 text-sm sm:text-base text-gray-400">
                  <li>Looking to launch or significantly improve their online presence.</li>
                  <li>Unsure which digital marketing channels will yield the best results locally.</li>
                  <li>Seeking to increase qualified leads and sales within the {location.city} area.</li>
                  <li>Wanting a fresh, expert perspective on their current marketing strategies.</li>
                </ul>
              </BaseCard>
            </section>
          </AnimatedSection>

          {/* Local Expertise Section */}
          <AnimatedSection animationType="fadeInUp" duration={1000} delay={400}>
             <section className="my-12 md:my-16 py-10 md:py-12 bg-black/20 rounded-xl">
              <div className="container mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-purple-300 break-words flex items-center justify-center">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 mr-3 flex-shrink-0" /> Local Insights for Businesses in {location.city}
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                  While our digital marketing strategies are world-class, we tailor every consultation to the unique dynamics of the {location.city} market. We understand the local audience, competitive landscape, and regional nuances to provide you with relevant, actionable advice that drives results right here in {location.state}.
                </p>
              </div>
            </section>
          </AnimatedSection>

          {/* Main Call to Action Section */}
          <AnimatedSection animationType="fadeIn" duration={1000} delay={500}>
            <section id="cta-section" className="py-16 sm:py-20 md:py-28 text-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 mt-12 md:mt-16 rounded-lg shadow-2xl">
              <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white break-words">
                  Book Your Complimentary Consultation in {location.city} Today!
                </h2>
                <p className="text-lg sm:text-xl text-indigo-100 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
                  Take the first step towards unlocking your business's full digital potential in {location.city}. Our team is ready to provide you with valuable insights and a clear path forward. No obligations, just expert advice.
                </p>
                <a
                  href={`/contact-us?subject=Digital Marketing Consultation Request - ${encodeURIComponent(location.city)}`}
                  className="w-full sm:w-auto bg-white hover:bg-gray-200 text-indigo-700 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-md sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  Schedule My Free {location.city} Consultation
                </a>
              </div>
            </section>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default ConsultationPageTemplate;

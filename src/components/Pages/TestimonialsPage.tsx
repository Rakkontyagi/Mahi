import React from 'react';
import { TestimonialData } from '../../data/testimonialsData';
import { SEOHead } from '../SEO/SEOHead';
import { AnimatedSection } from '../Shared/AnimatedSection';
// import { BaseCard } from '../Shared/BaseCard'; // For context
import { TestimonialCard } from '../Shared/TestimonialCard'; // Corrected import
import { Star, MessageSquare, Users, Sparkles } from 'lucide-react'; // Sparkles for hero

interface TestimonialsPageProps {
  allTestimonials: TestimonialData[];
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ allTestimonials }) => {
  const primaryButtonStyle = "inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-300 text-base";

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      <SEOHead
        title="Client Testimonials & Success Stories | God Digital Marketing"
        description="Read what our clients say about God Digital Marketing. Genuine testimonials and reviews showcasing our impact on businesses across various industries."
        keywords="client testimonials, customer reviews, digital marketing success stories, agency testimonials"
        canonicalUrl="/testimonials/"
      />

      {/* Hero Section */}
      <AnimatedSection
        className="py-20 md:py-28 text-center bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <Sparkles className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 break-words">
            What Our Clients Say About Us
          </h1>
          <p className="text-lg sm:text-xl text-indigo-100 max-w-3xl mx-auto">
            We're dedicated to our clients' success. Here's how we've made a difference, in their own words.
          </p>
        </div>
      </AnimatedSection>

      {/* Optional Introduction Section */}
      <AnimatedSection
        className="py-12 md:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg md:text-xl text-gray-300 text-center leading-relaxed">
            Real feedback from businesses that have partnered with us to achieve their marketing and automation goals. These stories highlight our commitment to delivering measurable results and exceptional service.
          </p>
        </div>
      </AnimatedSection>

      {/* Testimonials Grid/List Section */}
      <AnimatedSection
        className="py-12 md:py-20 bg-slate-900/50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 md:mb-16">
            Client Stories & Feedback
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allTestimonials && allTestimonials.length > 0 ? (
              allTestimonials.map(testimonial => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <MessageSquare className="w-12 h-12 mx-auto text-gray-500 mb-4" />
                <p className="text-gray-400 text-lg">
                  Client testimonials are currently being gathered. Please check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action Section */}
      <AnimatedSection
        className="py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="p-8 md:p-12 bg-gradient-to-br from-slate-800/70 to-slate-900/50 border border-slate-700/60 rounded-xl shadow-2xl">
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-lg text-gray-300 mt-3 mb-8 max-w-xl mx-auto">
              Partner with us to achieve your business goals. Let's create your success story together with our tailored digital marketing and automation solutions.
            </p>
            <a
              href="/contact/?interest=new_project"
              className={primaryButtonStyle}
            >
              Get Your Free Consultation
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

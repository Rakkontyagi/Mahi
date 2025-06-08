import React from 'react';
import { ComprehensiveIndustryData } from '../../data/comprehensiveLocations'; // Assuming comprehensiveIndustries is exported from here
import { SEOHead } from '../SEO/SEOHead';
import { AnimatedSection } from '../Shared/AnimatedSection';
// import { BaseCard } from '../Shared/BaseCard'; // Not directly used yet, but good for context
import { IndustryCard } from '../Shared/IndustryCard'; // Corrected import
import { Briefcase, HelpCircle } from 'lucide-react'; // Example icons

interface IndustriesHubPageProps {
  allIndustries: ComprehensiveIndustryData[];
}

export const IndustriesHubPage: React.FC<IndustriesHubPageProps> = ({ allIndustries }) => {
  const primaryButtonStyle = "inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-300 text-base";

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      <SEOHead
        title="Industry Expertise | Tailored Digital Solutions by Sector | God Digital Marketing"
        description="Explore God Digital Marketing's expertise across diverse industries. We provide specialized digital marketing and automation solutions for healthcare, real estate, e-commerce, tech, and more."
        keywords="industry solutions, specialized digital marketing, industry expertise, digital marketing by sector"
        canonicalUrl="/industries/"
      />

      {/* Hero Section */}
      <AnimatedSection
        className="py-20 md:py-28 text-center bg-gradient-to-b from-black to-slate-900/80"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <Briefcase className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 break-words">
            Tailored Digital Solutions for Your Industry
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            We understand that every industry has unique challenges and opportunities. Explore how our specialized strategies deliver results for your specific sector.
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
            Our team invests in understanding the nuances of your market, ensuring that the strategies we deploy are not just best-practice, but industry-leading and data-driven. We partner with you to transform challenges into growth opportunities.
          </p>
        </div>
      </AnimatedSection>

      {/* Industry Grid/List Section */}
      <AnimatedSection
        className="py-12 md:py-20 bg-slate-900/50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 md:mb-16">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {allIndustries && allIndustries.length > 0 ? (
              allIndustries.map(industry => (
                <IndustryCard key={industry.slug} industry={industry} />
              ))
            ) : (
              <p className="text-center col-span-full py-10 text-gray-400 text-lg">
                Industry information is currently being updated. Please check back soon.
              </p>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* Optional CTA Section */}
      <AnimatedSection
        className="py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="p-8 md:p-12 bg-gradient-to-br from-slate-800/70 to-slate-900/50 border border-slate-700 rounded-xl shadow-2xl">
            <HelpCircle className="w-12 h-12 text-blue-400 mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Don't See Your Industry?
            </h2>
            <p className="text-lg text-gray-300 mt-3 mb-8 max-w-xl mx-auto">
              We're always expanding our expertise and are passionate about tackling new challenges. Contact us for a personalized consultation to discuss solutions for your unique business needs.
            </p>
            <a
              href="/contact/?interest=custom_industry_solution"
              className={primaryButtonStyle}
            >
              Request Custom Consultation
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

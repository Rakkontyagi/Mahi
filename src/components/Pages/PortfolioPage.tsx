import React from 'react';
import { PortfolioItemData } from '../../data/portfolioData';
import { SEOHead } from '../SEO/SEOHead';
import { AnimatedSection } from '../Shared/AnimatedSection';
import { PortfolioItemCard } from '../Shared/PortfolioItemCard';
import { Briefcase, Sparkles, Lightbulb } from 'lucide-react'; // Briefcase for hero, Lightbulb for CTA

interface PortfolioPageProps {
  allPortfolioItems: PortfolioItemData[];
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ allPortfolioItems }) => {
  const primaryButtonStyle = "inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-300 text-base";

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      <SEOHead
        title="Our Work | Portfolio of Client Success | God Digital Marketing"
        description="Explore the portfolio of God Digital Marketing. See real-world examples of how we've helped businesses achieve success with our digital marketing, AI, and automation solutions."
        keywords="digital marketing portfolio, client case studies, agency work examples, ai projects, automation success stories"
        canonicalUrl="/portfolio/"
      />

      {/* Hero Section */}
      <AnimatedSection
        className="py-20 md:py-28 text-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <Briefcase className="w-16 h-16 text-indigo-200 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 break-words">
            Our Client Success Showcase
          </h1>
          <p className="text-lg sm:text-xl text-indigo-100 max-w-3xl mx-auto">
            Discover how we partner with businesses to deliver impactful results and drive growth through innovative strategies.
          </p>
        </div>
      </AnimatedSection>

      {/* Portfolio Grid Section */}
      <AnimatedSection
        className="py-12 md:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10 md:mb-16">
            Explore Our Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allPortfolioItems && allPortfolioItems.length > 0 ? (
              allPortfolioItems.map(item => (
                <PortfolioItemCard key={item.id} item={item} />
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <Sparkles className="w-12 h-12 mx-auto text-gray-500 mb-4" /> {/* Changed icon for variety */}
                <p className="text-gray-400 text-lg">
                  Our portfolio is currently being updated with new success stories. Please check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* Optional CTA Section */}
      <AnimatedSection
        className="py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="p-8 md:p-12 bg-slate-800/50 border border-slate-700/60 rounded-xl shadow-2xl">
            <Lightbulb className="w-12 h-12 text-purple-400 mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-300 mt-3 mb-8 max-w-xl mx-auto">
              Let's discuss how we can create a success story for your business. We're excited to learn about your goals and how our expertise can help you achieve them.
            </p>
            <a
              href="/contact/?interest=project_discussion"
              className={primaryButtonStyle}
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

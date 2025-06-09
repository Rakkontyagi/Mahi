import React from 'react';
import { ToolData } from '../../data/toolsData';
import { SEOHead } from '../SEO/SEOHead';
import { AnimatedSection } from '../Shared/AnimatedSection';
import { ToolCard } from '../Shared/ToolCard';
import { Wrench, Cpu, Lightbulb } from 'lucide-react'; // Wrench or Cpu for hero, Lightbulb for CTA

interface ToolsHubPageProps {
  allTools: ToolData[];
}

export const ToolsHubPage: React.FC<ToolsHubPageProps> = ({ allTools }) => {
  const primaryButtonStyle = "inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-300 text-base";

  return (
    <div className="bg-gradient-to-b from-black via-slate-900 to-black text-gray-100 min-h-screen">
      <SEOHead
        title="Free Digital Marketing Tools & Calculators | God Digital Marketing"
        description="Boost your marketing strategy with God Digital Marketing's suite of free interactive tools and calculators, including our Marketing Automation ROI Calculator."
        keywords="free marketing tools, digital marketing calculators, roi calculator, seo tools, marketing analytics tools"
        canonicalUrl="/tools/"
      />

      {/* Hero Section */}
      <AnimatedSection
        className="py-20 md:py-28 text-center bg-slate-900/60 backdrop-blur-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <Wrench className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 break-words">
            Free Digital Marketing Tools & Calculators
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Empower your marketing decisions with our suite of free, easy-to-use interactive tools designed to provide valuable insights and estimates.
          </p>
        </div>
      </AnimatedSection>

      {/* Tools Grid/List Section */}
      <AnimatedSection
        className="py-12 md:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10 md:mb-16">
            Explore Our Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allTools && allTools.length > 0 ? (
              allTools.map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <Cpu className="w-12 h-12 mx-auto text-gray-500 mb-4" />
                <p className="text-gray-400 text-lg">
                  No tools available at the moment. Our digital elves are working hard! Please check back soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* Optional CTA Section (Tool Suggestion) */}
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
              Have an Idea for a New Tool?
            </h2>
            <p className="text-lg text-gray-300 mt-3 mb-8 max-w-xl mx-auto">
              We're always looking to build resources that help marketers succeed. If you have a suggestion for a new calculator, analyzer, or any other tool, we'd love to hear it!
            </p>
            <a
              href="/contact/?subject=Tool+Suggestion"
              className={primaryButtonStyle}
            >
              Suggest a Tool
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

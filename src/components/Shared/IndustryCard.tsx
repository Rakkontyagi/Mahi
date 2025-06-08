import React from 'react';
import { ComprehensiveIndustryData } from '../../data/comprehensiveLocations'; // Adjust path if necessary
import { BaseCard } from './BaseCard'; // Assuming it's in the same Shared directory
import { ArrowRight, HeartPulse, Home, ShoppingCart, Cpu, Factory, Briefcase } from 'lucide-react';

interface IndustryCardProps {
  industry: ComprehensiveIndustryData;
}

const getIndustryIcon = (industrySlug: string): JSX.Element => {
  const iconProps = { className: "w-8 h-8 text-purple-400 mb-4 flex-shrink-0" }; // Added flex-shrink-0
  switch (industrySlug) {
    case 'healthcare': return <HeartPulse {...iconProps} />;
    case 'real-estate': return <Home {...iconProps} />;
    case 'ecommerce': return <ShoppingCart {...iconProps} />;
    case 'technology': return <Cpu {...iconProps} />;
    case 'manufacturing': return <Factory {...iconProps} />;
    default: return <Briefcase {...iconProps} />;
  }
};

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  return (
    <BaseCard
      variant="glass"
      className="flex flex-col h-full p-5 sm:p-6 hover:shadow-purple-500/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1 group" // Added group for link hover effect
    >
      {/* Icon */}
      {getIndustryIcon(industry.slug)}

      {/* Industry Name (Title) */}
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 break-words">
        {industry.name}
      </h3>

      {/* Industry Description */}
      <p className="text-sm text-gray-300 line-clamp-3 sm:line-clamp-4 mb-4 flex-grow">
        {industry.description || "Detailed information about this industry is coming soon."}
      </p>

      {/* "View Solutions" Link */}
      <a
        href={`/industries/${industry.slug}/digital-marketing/`} // Assuming digital-marketing as default service context
        className="inline-flex items-center text-purple-400 group-hover:text-purple-300 font-semibold text-sm mt-auto pt-2 transition-colors duration-300"
      >
        View Solutions
        <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </BaseCard>
  );
};

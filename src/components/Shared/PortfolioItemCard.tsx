import React from 'react';
import { PortfolioItemData } from '../../data/portfolioData';
import { comprehensiveIndustries, comprehensiveServices } from '../../data/comprehensiveLocations'; // For mapping slugs to names
import { BaseCard } from './BaseCard';
import { ArrowRight, Briefcase, Layers, Target, ImageOff } from 'lucide-react'; // Added ImageOff for placeholder

interface PortfolioItemCardProps {
  item: PortfolioItemData;
  // onOpenModal?: (item: PortfolioItemData) => void; // For V1 modal click
}

// Helper function to get industry name from slug
const getIndustryName = (slug: string): string => {
  const industry = comprehensiveIndustries.find(ind => ind.slug === slug);
  return industry ? industry.name : "General"; // Fallback if not found
};

// Helper function to get a single service name from slug (for tags)
const getServiceName = (slug: string): string => {
  const service = comprehensiveServices.find(s => s.slug === slug) ||
                  comprehensiveServices.flatMap(s => s.subServices || []).find(sub => sub.slug === slug);
  return service ? service.name : "Service"; // Fallback
};

export const PortfolioItemCard: React.FC<PortfolioItemCardProps> = ({ item /*, onOpenModal */ }) => {
  const industryName = getIndustryName(item.industrySlug);

  const handleViewProjectClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!item.detailPageLink) {
      e.preventDefault();
      // onOpenModal?.(item); // V1 modal functionality
      alert('Detailed view/modal for "' + item.projectName + '" will be available soon.');
    }
  };

  return (
    <BaseCard
      variant="interactiveGlass"
      className="flex flex-col h-full group overflow-hidden shadow-lg hover:shadow-purple-500/40 transition-all duration-300 ease-in-out"
    >
      {/* Image Section */}
      {item.imageUrl ? (
        <div className="overflow-hidden">
          <img
            src={item.imageUrl}
            alt={`Showcase image for ${item.projectName}`}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
            width={400} // Example intrinsic width
            height={225} // Example intrinsic height (16:9 aspect ratio)
          />
        </div>
      ) : (
        <div className="w-full h-48 bg-slate-700/70 flex items-center justify-center text-slate-400">
          <ImageOff size={48} />
        </div>
      )}

      {/* Content Section */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        {/* Industry Name & Tags */}
        <div className="mb-2">
          <p className="text-xs text-purple-400 uppercase tracking-wider font-semibold">{industryName}</p>
          {item.tags && item.tags.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1">
              {item.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-xs bg-slate-600/80 text-slate-300 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Project Name (Title) */}
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 break-words">
          {item.projectName}
        </h3>

        {/* Client Name */}
        <p className="text-sm text-gray-400 mb-3">
          Client: <span className="font-medium text-gray-300">{item.clientName}</span>
        </p>

        {/* Project Summary */}
        <p className="text-sm text-gray-300 line-clamp-3 mb-4 flex-grow">
          {item.projectSummary}
        </p>

        {/* Services Provided (Optional short list/tags) */}
        {item.serviceSlugs && item.serviceSlugs.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {item.serviceSlugs.slice(0, 2).map(slug => (
              <span key={slug} className="text-xs bg-blue-600/30 border border-blue-500/50 text-blue-300 px-2 py-1 rounded-full">
                {getServiceName(slug)}
              </span>
            ))}
            {item.serviceSlugs.length > 2 && (
              <span className="text-xs bg-slate-600/80 text-slate-300 px-2 py-1 rounded-full">
                + {item.serviceSlugs.length - 2} more
              </span>
            )}
          </div>
        )}

        {/* Date Completed */}
        {item.dateCompleted && (
          <p className="text-xs text-gray-500 mb-3">
            Completed: {item.dateCompleted}
          </p>
        )}

        {/* "View Project" Link/Button */}
        <a
          href={item.detailPageLink || '#'}
          onClick={handleViewProjectClick}
          className="inline-flex items-center text-purple-400 group-hover:text-purple-300 font-semibold text-sm mt-auto pt-3 border-t border-slate-700/50 transition-colors duration-300"
          title={`Learn more about the ${item.projectName} project`}
        >
          View Project
          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </BaseCard>
  );
};

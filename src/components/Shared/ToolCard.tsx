import React from 'react';
import { ToolData } from '../../data/toolsData'; // Adjust path if necessary
import { BaseCard } from './BaseCard';
import { ArrowRight, Calculator, BarChart3, SearchCheck, Wrench } from 'lucide-react';

interface ToolCardProps {
  tool: ToolData;
}

// Simple icon mapping - can be expanded
const GetToolIcon = ({ iconName, className }: { iconName?: string; className?: string }) => {
  const defaultClassName = "w-8 h-8 text-purple-400 mb-4 flex-shrink-0"; // Added flex-shrink-0
  const effectiveClassName = className || defaultClassName;

  let IconComponent;
  switch (iconName) {
    case 'Calculator':
      IconComponent = Calculator;
      break;
    case 'BarChart3':
      IconComponent = BarChart3;
      break;
    case 'SearchCheck':
      IconComponent = SearchCheck;
      break;
    default:
      IconComponent = Wrench; // Default icon
  }
  return <IconComponent className={effectiveClassName} />;
};

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <BaseCard
      variant="interactiveGlass"
      className="flex flex-col h-full p-5 sm:p-6 group transition-all duration-300 ease-in-out hover:shadow-purple-500/30 transform hover:-translate-y-1"
    >
      {/* Icon */}
      <GetToolIcon iconName={tool.iconName} />

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 break-words">
        {tool.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-300 line-clamp-3 sm:line-clamp-4 mb-4 flex-grow">
        {tool.description}
      </p>

      {/* Category/Tags (Optional display) */}
      {(tool.category || (tool.tags && tool.tags.length > 0)) && (
        <div className="mb-4 flex flex-wrap gap-2"> {/* Adjusted margin to mb-4 */}
          {tool.category && (
            <span className="text-xs bg-slate-700/80 text-purple-300 px-2.5 py-1 rounded-full shadow-sm">
              {tool.category}
            </span>
          )}
          {tool.tags?.slice(0, 2).map(tag => ( // Show max 2 tags
            <span key={tag} className="text-xs bg-slate-700/80 text-gray-300 px-2.5 py-1 rounded-full shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* "Use Tool" Link/Button */}
      <a
        href={tool.link}
        className="inline-flex items-center text-purple-400 group-hover:text-purple-300 font-semibold text-sm mt-auto pt-2 transition-colors duration-300"
        title={`Access the ${tool.title}`}
      >
        Use Tool
        <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </BaseCard>
  );
};

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PortfolioItemData } from '../../data/portfolioData'; // Assuming new fields will be added here
import { comprehensiveIndustries, comprehensiveServices, ComprehensiveServiceData } from '../../data/comprehensiveLocations';
import { SEOHead } from '../SEO/SEOHead';
import { AnimatedSection } from '../Shared/AnimatedSection';
import { BaseCard } from '../Shared/BaseCard';
import { ArrowRight, Briefcase, Layers, Target, ImageOff, CheckCircle, TrendingUp, Users, MessageCircle, GalleryThumbnails, ChevronLeft } from 'lucide-react';

// Define potentially missing sub-types here if not in portfolioData.ts for V1
// These should ideally be moved to portfolioData.ts or a central types file.
export interface MetricItem {
  id: string;
  iconName?: string; // e.g., 'TrendingUp', 'Users', 'CheckCircle'
  value: string; // e.g., "+120%", "70%"
  metric: string; // e.g., "Increase in Online Sales", "Organic Traffic Growth"
  improvement?: 'positive' | 'negative' | 'neutral'; // For styling
  description?: string;
}

export interface DetailedSolutionAction {
  title: string;
  description: string;
  iconName?: string;
}

export interface ProjectTestimonial {
  text: string;
  authorName: string;
  authorRole?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}
// End of temporary type definitions

// Add these to PortfolioItemData interface in portfolioData.ts
// interface PortfolioItemData {
//   // ... existing fields
//   metaTitleDetail?: string;
//   metaDescriptionDetail?: string;
//   detailedChallenge?: string; // Markdown
//   detailedSolution?: {
//     overview: string; // Markdown
//     keyActions?: DetailedSolutionAction[];
//     technologiesUsed?: string[];
//   };
//   structuredResults?: MetricItem[];
//   projectSpecificTestimonial?: ProjectTestimonial;
//   galleryImages?: GalleryImage[];
// }


interface PortfolioItemDetailPageProps {
  item: PortfolioItemData;
}

// Helper function to get industry name from slug
const getIndustryName = (slug: string): string => {
  const industry = comprehensiveIndustries.find(ind => ind.slug === slug);
  return industry ? industry.name : "General";
};

// Helper function to get service names from slugs
const getServiceNames = (slugs: string[]): { name: string, slug: string }[] => {
  if (!slugs) return [];
  return slugs.map(slug => {
    const service = comprehensiveServices.find(s => s.slug === slug) ||
                    comprehensiveServices.flatMap(s => s.subServices || []).find(sub => sub.slug === slug);
    return { name: service ? service.name : slug, slug: slug };
  }).filter(s => s.name !== s.slug); // Filter out services not found if needed
};

const getMetricIcon = (iconName?: string) => {
  const iconProps = {className: "w-8 h-8 text-purple-400 mb-2"};
  if (iconName === 'TrendingUp') return <TrendingUp {...iconProps} />;
  if (iconName === 'Users') return <Users {...iconProps} />;
  if (iconName === 'CheckCircle') return <CheckCircle {...iconProps} />;
  return <TrendingUp {...iconProps} />; // Default
}

export const PortfolioItemDetailPage: React.FC<PortfolioItemDetailPageProps> = ({ item }) => {
  const primaryButtonStyle = "inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-300 text-base";
  const secondaryButtonStyle = "inline-block px-8 py-3 bg-slate-700 text-white font-bold rounded-lg hover:bg-slate-600 transition-colors duration-300 text-base";

  const servicesProvided = getServiceNames(item.serviceSlugs);

  return (
    <div className="bg-black text-white">
      <SEOHead
        title={item.metaTitleDetail || `${item.projectName} - Portfolio | God Digital Marketing`}
        description={item.metaDescriptionDetail || item.projectSummary}
        keywords={item.tags?.join(', ') || servicesProvided.map(s => s.name).join(', ') || getIndustryName(item.industrySlug)}
        canonicalUrl={`/portfolio/${item.id}/`}
        // Optional: Add Article schema.org structured data here
      />

      {/* Hero/Header Section */}
      <AnimatedSection className="pt-20">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={`Header image for ${item.projectName}`}
            className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
            width={1200} // Example intrinsic width
            height={500} // Example intrinsic height
            loading="eager" // Load hero image eagerly
          />
        ) : (
          <div className="w-full h-64 md:h-96 lg:h-[500px] bg-slate-800 flex items-center justify-center">
            <Briefcase size={64} className="text-slate-500" />
          </div>
        )}
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 break-words">
            {item.projectName}
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-gray-300 mb-4">
            <p><span className="font-semibold">Client:</span> {item.clientName}</p>
            <p><span className="font-semibold">Industry:</span> {getIndustryName(item.industrySlug)}</p>
            {item.dateCompleted && <p><span className="font-semibold">Completed:</span> {item.dateCompleted}</p>}
          </div>
        </div>
      </AnimatedSection>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 space-y-12 md:space-y-16">

        {/* Project Overview (if different from summary used in cards) */}
        {item.projectSummary && (
             <AnimatedSection>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center">Project Overview</h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">{item.projectSummary}</p>
            </AnimatedSection>
        )}

        {/* The Challenge Section */}
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">The Challenge</h2>
          <div className="prose prose-invert max-w-none lg:prose-lg text-gray-300">
            {item.detailedChallenge ? (
              <ReactMarkdown>{item.detailedChallenge}</ReactMarkdown>
            ) : (
              <p>{item.challenge}</p>
            )}
          </div>
        </AnimatedSection>

        {/* Our Solution Section */}
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">Our Strategic Solution</h2>
          <div className="prose prose-invert max-w-none lg:prose-lg text-gray-300 space-y-4">
            {item.detailedSolution?.overview ? (
              <ReactMarkdown>{item.detailedSolution.overview}</ReactMarkdown>
            ) : (
              <p>{item.solution}</p>
            )}
            {item.detailedSolution?.keyActions && item.detailedSolution.keyActions.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Key Actions Taken:</h3>
                <ul className="space-y-3 list-inside">
                  {item.detailedSolution.keyActions.map((action, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-100">{action.title}:</strong> {action.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {item.detailedSolution?.technologiesUsed && item.detailedSolution.technologiesUsed.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Technologies Leveraged:</h3>
                <div className="flex flex-wrap gap-2">
                  {item.detailedSolution.technologiesUsed.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Services Utilized Section */}
        {servicesProvided.length > 0 && (
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">Services Provided</h2>
            <div className="flex flex-wrap gap-3">
              {servicesProvided.map(service => (
                <a
                  key={service.slug}
                  href={`/${service.slug}/`} // Assuming direct service slug links
                  className="px-4 py-2 bg-blue-600/30 border border-blue-500/70 text-blue-300 rounded-full hover:bg-blue-500/40 transition-colors duration-300"
                >
                  {service.name}
                </a>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Results & Impact Section */}
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">Results & Impact</h2>
          {item.structuredResults && item.structuredResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {item.structuredResults.map(metric => (
                <BaseCard key={metric.id} variant="outline" className="p-6 text-center bg-slate-800/50">
                  {getMetricIcon(metric.iconName)}
                  <div className={`text-3xl font-bold mb-1 ${metric.improvement === 'positive' ? 'text-green-400' : metric.improvement === 'negative' ? 'text-red-400' : 'text-white'}`}>
                    {metric.value}
                  </div>
                  <p className="text-gray-300 mb-2">{metric.metric}</p>
                  {metric.description && <p className="text-xs text-gray-400">{metric.description}</p>}
                </BaseCard>
              ))}
            </div>
          ) : (
            item.results && item.results.length > 0 && (
              <ul className="list-disc list-inside space-y-2 text-gray-300 max-w-2xl mx-auto text-lg">
                {item.results.map((result, index) => <li key={index}>{result}</li>)}
              </ul>
            )
          )}
        </AnimatedSection>

        {/* Project-Specific Testimonial Section */}
        {item.projectSpecificTestimonial && (
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center">Client Feedback</h2>
            <BaseCard variant="glass" className="max-w-3xl mx-auto p-6 md:p-8 bg-slate-800/60">
              <Quote className="w-10 h-10 text-purple-500/70 opacity-40 mb-4" />
              <p className="text-lg italic text-gray-200 mb-6 leading-relaxed">&ldquo;{item.projectSpecificTestimonial.text}&rdquo;</p>
              <div className="text-right">
                <p className="font-semibold text-purple-300">{item.projectSpecificTestimonial.authorName}</p>
                {item.projectSpecificTestimonial.authorRole && <p className="text-sm text-gray-400">{item.projectSpecificTestimonial.authorRole}</p>}
              </div>
            </BaseCard>
          </AnimatedSection>
        )}

        {/* Image Gallery Section */}
        {item.galleryImages && item.galleryImages.length > 0 && (
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {item.galleryImages.map(image => (
                <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image.src}
                    alt={image.alt || `Gallery image for ${item.projectName}`}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width={400} height={225}
                  />
                  {image.caption && <p className="text-xs text-center p-2 bg-slate-800 text-gray-400">{image.caption}</p>}
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Call to Action Section */}
        <AnimatedSection className="py-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
            If this project resonates with your goals, or if you have a different challenge in mind, we're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`/contact/?interest=project_similar_to_${item.id}`} className={primaryButtonStyle}>
              Contact Us About a Similar Project
            </a>
            <a href="/portfolio/" className={secondaryButtonStyle}>
              <ChevronLeft className="w-4 h-4 mr-2 inline-block" /> Back to Portfolio
            </a>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

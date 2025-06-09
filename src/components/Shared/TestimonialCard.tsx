import React from 'react';
import { TestimonialData } from '../../data/testimonialsData';
import { BaseCard } from './BaseCard';
import { Star, UserCircle2, Quote } from 'lucide-react'; // Quote for decorative quotes

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <BaseCard
      variant="glass"
      className="flex flex-col h-full p-5 sm:p-6 shadow-lg hover:shadow-purple-500/40 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
    >
      {/* Optional Star Rating */}
      {testimonial.rating && testimonial.rating > 0 && (
        <div className="flex text-yellow-400 mb-4"> {/* Increased margin-bottom */}
          {Array(Math.floor(testimonial.rating)).fill(0).map((_, i) => (
            <Star key={`star-filled-${i}`} className="w-5 h-5 fill-current" />
          ))}
          {Array(5 - Math.floor(testimonial.rating)).fill(0).map((_, i) => (
            <Star key={`star-empty-${i}`} className="w-5 h-5 text-gray-600 fill-current" />
          ))}
        </div>
      )}

      {/* Testimonial Text (Quote) */}
      <div className="relative mb-5 flex-grow"> {/* Increased margin-bottom */}
        <Quote className="absolute top-0 left-0 w-10 h-10 text-purple-600/50 opacity-30 transform -translate-x-3 -translate-y-3 pointer-events-none" />
        <p className="text-gray-200 italic leading-relaxed relative z-10 text-sm sm:text-base">
          &ldquo;{testimonial.testimonialText}&rdquo;
        </p>
        <Quote className="absolute bottom-0 right-0 w-10 h-10 text-purple-600/50 opacity-30 transform translate-x-3 translate-y-3 rotate-180 pointer-events-none" />
      </div>

      {/* Author/Client Details */}
      <div className="mt-auto pt-4 border-t border-slate-700/60">
        <div className="flex items-center mb-2">
          {testimonial.imageUrl ? (
            <img
              src={testimonial.imageUrl}
              alt={testimonial.clientName}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 object-cover shadow-md"
              loading="lazy"
              width={48}
              height={48}
            />
          ) : (
            <UserCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-gray-500 mr-3 flex-shrink-0" />
          )}
          <div>
            <p className="font-semibold text-purple-300 text-sm sm:text-base">{testimonial.clientName}</p>
            {(testimonial.companyName || testimonial.roleOrIndustry) && (
              <p className="text-xs sm:text-sm text-gray-400">
                {testimonial.roleOrIndustry ? `${testimonial.roleOrIndustry}${testimonial.companyName ? ', ' : ''}` : ''}
                {testimonial.companyName || ''}
              </p>
            )}
          </div>
        </div>

        {/* Optional Date & Services Provided */}
        <div className="text-xs text-gray-500 mt-3 flex flex-col sm:flex-row flex-wrap gap-x-3 gap-y-1 sm:justify-between sm:items-center">
          {testimonial.date && <span className="block sm:inline">Date: {testimonial.date}</span>}
          {testimonial.serviceProvided && testimonial.serviceProvided.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-1 sm:mt-0">
              {testimonial.serviceProvided.slice(0, 2).map(service => (
                <span key={service} className="px-2 py-0.5 bg-slate-700/80 text-slate-300 rounded-full text-xxs whitespace-nowrap">
                  {service}
                </span>
              ))}
              {testimonial.serviceProvided.length > 2 && (
                 <span className="px-2 py-0.5 bg-slate-700/80 text-slate-300 rounded-full text-xxs whitespace-nowrap">
                  + {testimonial.serviceProvided.length - 2} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </BaseCard>
  );
};

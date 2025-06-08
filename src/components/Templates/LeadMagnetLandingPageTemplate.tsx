import React, { useState, useEffect } from 'react';
import { LeadMagnetData } from '../../data/leadMagnets';
import { comprehensiveIndustries } from '../../data/comprehensiveLocations'; // To get full industry name
import SEOHead from '../SEO/SEOHead';
import AnimatedSection from '../Shared/AnimatedSection';
import BaseCard from '../Shared/BaseCard';
import { DownloadCloud, Users, CheckSquare, Eye, Award, ShieldCheck, ThumbsUp, Gift } from 'lucide-react';

// Simplified Location Info Props for this template
interface LocationInfoProps {
  city: string;
  state?: string; // Optional as not all lead magnets might be location-specific in their text
}

interface LeadMagnetLandingPageTemplateProps {
  leadMagnet: LeadMagnetData;
  location?: LocationInfoProps;
}

const AGENCY_NAME = "God Digital Marketing"; // Or use a global constant

// Helper function for string interpolation
const interpolate = (
  text: string | undefined,
  context: { industryName?: string; cityName?: string; agencyName?: string }
): string => {
  if (!text) return '';
  let result = text;
  if (context.industryName) result = result.replace(/{industryName}/g, context.industryName);
  if (context.cityName) result = result.replace(/{cityName}/g, context.cityName);
  if (context.agencyName) result = result.replace(/{agencyName}/g, context.agencyName);
  return result;
};

// Helper function to get industry name from slug
const getIndustryName = (slug: string): string => {
  const industry = comprehensiveIndustries.find(ind => ind.slug === slug);
  return industry ? industry.name : slug; // Fallback to slug
};

const LeadMagnetLandingPageTemplate: React.FC<LeadMagnetLandingPageTemplateProps> = ({ leadMagnet, location }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const industryName = leadMagnet.industrySlug ? getIndustryName(leadMagnet.industrySlug) : '';
  const cityName = location?.city || ''; // Defaults to empty string if no location

  const interpContext = { industryName, cityName, agencyName: AGENCY_NAME };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic form data logging
    console.log({
      leadMagnetId: leadMagnet.id,
      name,
      email,
      company,
      location: cityName,
    });
    // Simulate form submission success
    alert(`Form submitted (simulation).\nThank you, ${name}! Your download for "${leadMagnet.title.replace('{cityName}', cityName)}" would start shortly or be sent to ${email}.`);
    // In a real app, you'd trigger a download or send an email here.
    // window.open(leadMagnet.downloadFileUrl, '_blank'); // Example direct download
    setName('');
    setEmail('');
    setCompany('');
  };

  const pageTitle = interpolate(leadMagnet.metaTitle || leadMagnet.title, interpContext);
  const pageDescription = interpolate(leadMagnet.metaDescription, interpContext);

  return (
    <>
      <SEOHead
        title={`${pageTitle} | ${AGENCY_NAME}`}
        description={pageDescription}
        keywords={leadMagnet.keywords?.map(k => interpolate(k, interpContext)).join(', ')}
        // canonicalUrl={... construct from leadMagnet.id and maybe location ...}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-800 text-gray-200 font-sans">
        {/* Hero Section */}
        <AnimatedSection animationType="fadeInDown" duration={1000}>
          <section className="py-16 sm:py-20 md:py-24 text-center bg-black/30 backdrop-blur-lg relative">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              {leadMagnet.heroImageMockupUrl ? (
                <img
                  src={leadMagnet.heroImageMockupUrl}
                  alt={interpolate(leadMagnet.title, interpContext)}
                  className="w-full max-w-md mx-auto mb-6 sm:mb-8 rounded-lg shadow-2xl"
                />
              ) : (
                <div className="w-full max-w-md h-64 bg-slate-700/50 flex items-center justify-center text-slate-500 rounded-lg mx-auto mb-6 sm:mb-8">
                  <Gift size={64} /> {/* Placeholder icon */}
                </div>
              )}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-white break-words">
                {interpolate(leadMagnet.pageHeadline, interpContext)}
              </h1>
              {leadMagnet.pageSubtitle && (
                <p className="text-md sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2 leading-relaxed">
                  {interpolate(leadMagnet.pageSubtitle, interpContext)}
                </p>
              )}
              {/* Optional scroll-to-form button */}
              <div className="mt-8 sm:mt-10">
                <a
                  href="#lead-capture-form"
                  className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-md sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  {leadMagnet.formCTA_text || "Get Your Free Resource"}
                </a>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
          {/* Benefits Section */}
          {leadMagnet.benefits && leadMagnet.benefits.length > 0 && (
            <AnimatedSection animationType="fadeInUp" duration={1000} delay={100}>
              <section className="my-10 md:my-16">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 md:mb-12 text-purple-300 break-words">
                  {interpolate(leadMagnet.type === 'Checklist' ? "What Your {industryName} Checklist Covers" : "What You'll Gain", interpContext)}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {leadMagnet.benefits.map((benefit, index) => (
                    <BaseCard key={index} variant="glass" className="p-4 sm:p-6 flex items-start hover:shadow-purple-500/20">
                      <CheckSquare className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm sm:text-base text-gray-300">{interpolate(benefit, interpContext)}</p>
                    </BaseCard>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          )}

          {/* Target Audience Section */}
          {leadMagnet.targetAudience && leadMagnet.targetAudience.length > 0 && (
            <AnimatedSection animationType="fadeInUp" duration={1000} delay={200}>
              <section className="my-10 md:my-16 py-8 md:py-12 bg-slate-800/40 rounded-xl">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-indigo-300 break-words">
                  {interpolate(leadMagnet.type === 'Checklist' ? "Is This {industryName} Checklist For You?" : "Who Is This For?", interpContext)}
                </h2>
                <div className="max-w-2xl mx-auto">
                  <ul className="space-y-3">
                    {leadMagnet.targetAudience.map((audience, index) => (
                      <li key={index} className="flex items-center p-3 bg-slate-700/30 rounded-md">
                        <Users className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                        <p className="text-sm sm:text-base text-gray-300">{interpolate(audience, interpContext)}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </AnimatedSection>
          )}

          {/* Preview Section */}
          {leadMagnet.previewImageUrl && (
            <AnimatedSection animationType="fadeInUp" duration={1000} delay={300}>
              <section className="my-10 md:my-16 text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-purple-300 break-words">A Glimpse Inside</h2>
                <img
                  src={leadMagnet.previewImageUrl}
                  alt={`Preview of ${interpolate(leadMagnet.title, interpContext)}`}
                  className="max-w-2xl mx-auto rounded-lg shadow-2xl border-2 border-slate-700"
                />
              </section>
            </AnimatedSection>
          )}

          {/* Lead Capture Form & CTA Section */}
          <AnimatedSection animationType="fadeInUp" duration={1000} delay={400}>
            <section id="lead-capture-form" className="my-10 md:my-16 py-10 md:py-16 bg-black/20 backdrop-blur-sm rounded-xl shadow-2xl">
              <div className="container mx-auto px-4 sm:px-6 max-w-xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 break-words">
                  {interpolate(leadMagnet.formCTA_text, interpContext)}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required
                           className="w-full p-3 bg-slate-800 border border-slate-700 rounded-md text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500" placeholder="e.g., Jane Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                           className="w-full p-3 bg-slate-800 border border-slate-700 rounded-md text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company Name (Optional)</label>
                    <input type="text" name="company" id="company" value={company} onChange={(e) => setCompany(e.target.value)}
                           className="w-full p-3 bg-slate-800 border border-slate-700 rounded-md text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500" placeholder="e.g., Innovate Corp" />
                  </div>
                  <div className="flex items-start pt-2">
                     <input id="consent" name="consent" type="checkbox" required className="h-4 w-4 text-purple-600 border-gray-500 rounded focus:ring-purple-500 mt-0.5" />
                     <label htmlFor="consent" className="ml-2 block text-xs text-gray-400">
                        I agree to receive marketing communications from {AGENCY_NAME} and understand I can unsubscribe at any time. (Placeholder consent)
                     </label>
                  </div>
                  <button type="submit"
                          className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-3.5 px-8 rounded-lg text-md sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                    {interpolate(leadMagnet.formCTA_text, interpContext)}
                  </button>
                </form>
              </div>
            </section>
          </AnimatedSection>

          {/* Fictional Testimonials Section */}
          {leadMagnet.fictionalTestimonials && leadMagnet.fictionalTestimonials.length > 0 && (
            <AnimatedSection animationType="fadeInUp" duration={1000} delay={500}>
              <section className="my-10 md:my-16">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 md:mb-12 text-indigo-300 break-words">
                  What Others Are Saying
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                  {leadMagnet.fictionalTestimonials.map((testimonial, index) => (
                    <BaseCard key={index} variant="glass" className="p-4 sm:p-6 hover:shadow-indigo-500/20">
                       <blockquote className="relative">
                        <p className="text-sm sm:text-base italic text-gray-300 mb-4 leading-relaxed">"{interpolate(testimonial.text, interpContext)}"</p>
                        <footer className="text-xs sm:text-sm text-purple-300 text-right">
                          - {interpolate(testimonial.authorName, interpContext)}, <cite className="text-gray-400">{interpolate(testimonial.authorRoleOrCompany, interpContext)}</cite>
                        </footer>
                      </blockquote>
                    </BaseCard>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          )}
        </div>
      </div>
    </>
  );
};

export default LeadMagnetLandingPageTemplate;

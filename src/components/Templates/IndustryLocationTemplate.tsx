import React from 'react';
import { motion } from 'framer-motion';
import { Building, TrendingUp, Award, Users, Phone, Mail, Clock, CheckCircle, Briefcase, Zap, Target as TargetIcon, BarChart3, Link as LinkIcon, FileText, MapPin, AlertTriangle, ListChecks, DollarSign, Shield } from 'lucide-react';
import { BaseCard } from '../Shared/BaseCard';
import { AnimatedSection } from '../Shared/AnimatedSection';
import { SEOHead } from '../SEO/SEOHead';
import { ComprehensiveServiceData, ComprehensiveIndustryData, CityData, IndustryStat, ServiceSpecificData, CaseStudyTeaser, IndustryHighlight, LocalIndustryInsight } from '../../data/comprehensiveLocations'; // Assuming these types are now defined here or re-exported

// Enhanced Prop Interfaces (assuming these reflect richer data structures)
interface AugmentedComprehensiveIndustryData extends ComprehensiveIndustryData {
  typicalChallenges?: string[];
  commonGoals?: string[];
  serviceSpecificData?: ServiceSpecificData[]; // Array per service
  industryStats?: IndustryStat[];
  // description is already part of ComprehensiveIndustryData
}

interface AugmentedComprehensiveServiceData extends ComprehensiveServiceData {
  industryHighlights?: IndustryHighlight[]; // Array per industry
  // name, slug are already part of ComprehensiveServiceData
}

interface AugmentedCityData extends CityData { // Assuming CityData is the type for city objects
  localIndustryInsights?: LocalIndustryInsight[]; // Array per industry
  // city, state, citySlug, stateSlug are part of CityData or its parent
}

interface IndustryLocationTemplateProps {
  industry: AugmentedComprehensiveIndustryData;
  service: AugmentedComprehensiveServiceData;
  location?: AugmentedCityData; // Make location also use an augmented type
}

// Helper to get Lucide icon component by name string
const LucideIcon = ({ name, className }: { name?: string; className?: string }) => {
  const icons: { [key: string]: React.ElementType } = {
    Building, TrendingUp, Award, Users, Briefcase, Zap, TargetIcon, BarChart3, LinkIcon, FileText, MapPin, AlertTriangle, ListChecks, DollarSign, Shield, CheckCircle
  };
  const IconComponent = name ? icons[name] : null;
  return IconComponent ? <IconComponent className={className} /> : <Award className={className} />; // Default icon
};


export const IndustryLocationTemplate: React.FC<IndustryLocationTemplateProps> = ({
  industry,
  service,
  location
}) => {

  // Helper Functions
  const getServiceSpecificBenefits = (currentIndustry: AugmentedComprehensiveIndustryData, serviceSlug: string): string[] | undefined => {
    return currentIndustry.serviceSpecificData?.find(data => data.serviceSlug === serviceSlug)?.benefits;
  };

  const getServiceCaseStudyTeaser = (currentIndustry: AugmentedComprehensiveIndustryData, serviceSlug: string): CaseStudyTeaser | undefined => {
    return currentIndustry.serviceSpecificData?.find(data => data.serviceSlug === serviceSlug)?.caseStudyTeaser;
  };

  const getIndustryHighlightsForService = (currentService: AugmentedComprehensiveServiceData, industrySlug: string): { specificFeatures?: string[], commonUseCases?: string[] } | undefined => {
    const highlight = currentService.industryHighlights?.find(h => h.industrySlug === industrySlug);
    return highlight ? { specificFeatures: highlight.specificFeatures, commonUseCases: highlight.commonUseCases } : undefined;
  };

  const getLocalInsights = (currentLocation: AugmentedCityData | undefined, industrySlug: string): LocalIndustryInsight | undefined => {
    if (!currentLocation) return undefined;
    return currentLocation.localIndustryInsights?.find(insight => insight.industrySlug === industrySlug);
  };

  const pageTitle = location 
    ? `${service.name} for ${industry.name} in ${location.city}` // location.city is fine
    : `${service.name} for ${industry.name} Industry`;

  const serviceSpecificBenefits = getServiceSpecificBenefits(industry, service.slug);
  const caseStudyTeaser = getServiceCaseStudyTeaser(industry, service.slug);
  const serviceIndustryHighlights = getIndustryHighlightsForService(service, industry.slug);
  const localInsightsData = getLocalInsights(location, industry.slug);

  const seoData = {
    title: `${pageTitle} | God Digital Marketing`, // Your company name
    description: `Expert ${service.name.toLowerCase()} solutions for the ${industry.name.toLowerCase()} industry${location ? ` in ${location.city}, ${location.state}` : ''}. Overcome ${industry.typicalChallenges && industry.typicalChallenges.length > 0 ? industry.typicalChallenges[0].toLowerCase() : 'key challenges'} and achieve ${industry.commonGoals && industry.commonGoals.length > 0 ? industry.commonGoals[0].toLowerCase() : 'growth'}.`,
    keywords: [
      `${service.slug} ${industry.slug}`,
      `${industry.slug} ${service.slug}`,
      `${industry.name.toLowerCase()} ${service.name.toLowerCase()}`,
      ...(location ? [
        `${service.slug} ${industry.slug} ${location.citySlug}`,
        `${industry.slug} marketing ${location.city}`,
        `${location.city} ${industry.slug} ${service.slug}`
      ] : [])
    ],
    canonicalUrl: location 
      ? `https://goddigitalmarketing.com/${service.slug}/${industry.slug}/${location.stateSlug}/${location.citySlug}/`
      : `https://goddigitalmarketing.com/${service.slug}/${industry.slug}/`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": pageTitle,
      "description": `Specialized ${service.name.toLowerCase()} services for ${industry.name.toLowerCase()} businesses`,
      "provider": {
        "@type": "Organization",
        "name": "God Digital Marketing"
      }
    }
  };

  return (
    <>
      <SEOHead {...seoData} />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <AnimatedSection direction="up">
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center space-x-2 mb-6 px-4 py-2 border border-gray-800 rounded-full bg-black/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Building className="w-4 h-4 text-blue-400" />
                  <span className="text-white text-sm">{industry.name} Industry Specialist</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {service.name} for
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {industry.name} {location ? `in ${location.city}` : 'Industry'}
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Specialized {service.name.toLowerCase()} solutions designed specifically for {industry.name.toLowerCase()} businesses. 
                  {location && ` Serving ${location.city}, ${location.state} with industry expertise.`}
                </p>
              </div>
            </AnimatedSection>

            {/* Stats Grid */}
            <AnimatedSection direction="up" delay={0.2}>
              {industry.industryStats && industry.industryStats.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
                  {industry.industryStats.map((stat) => (
                    <BaseCard
                      key={stat.label.replace('{industryName}', industry.name).replace('{serviceName}', service.name)}
                      title={stat.value}
                      description={stat.label.replace('{industryName}', industry.name).replace('{serviceName}', service.name)}
                      variant="glass"
                      className="text-center p-3 sm:p-4"
                    >
                      <div className="flex justify-center mb-2 sm:mb-4 text-blue-400">
                        <LucideIcon name={stat.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </BaseCard>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8 mb-12">Industry statistics coming soon.</div>
              )}
            </AnimatedSection>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-12 md:py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              {/* Left Column (Main Content) */}
              <div className="lg:col-span-2 space-y-10 md:space-y-12">
                <AnimatedSection direction="left" delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                    Expert {service.name} for the {industry.name} Sector {location ? `in ${location.city}` : ''}
                  </h2>
                  <p className="text-gray-300 text-md sm:text-lg mb-6 leading-relaxed break-words">
                    {industry.description || `Our specialized team understands the unique challenges and opportunities in the ${industry.name.toLowerCase()} industry. We deliver ${service.name.toLowerCase()} solutions that comply with industry standards and drive real results.`}
                  </p>
                  {localInsightsData?.insights && localInsightsData.insights.length > 0 && (
                    <BaseCard variant="default" className="mb-6 p-3 sm:p-4 bg-slate-800/50">
                      <h3 className="text-lg sm:text-xl font-semibold text-purple-300 mb-2 flex items-center">
                        <MapPin className="w-5 h-5 mr-2 flex-shrink-0" /> The {industry.name} Landscape in {location?.city}
                      </h3>
                      <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm sm:text-base">
                        {localInsightsData.insights.map((insight, i) => <li key={`local-${i}`}>{insight}</li>)}
                        {localInsightsData.marketTrends && <li>Market Trend: {localInsightsData.marketTrends}</li>}
                        {localInsightsData.localRegulationsSummary && <li>Local Regulations: {localInsightsData.localRegulationsSummary}</li>}
                      </ul>
                    </BaseCard>
                  )}
                </AnimatedSection>

                {industry.typicalChallenges && industry.typicalChallenges.length > 0 && (
                  <AnimatedSection direction="left" delay={0.2}>
                    <BaseCard variant="glass" className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center"><AlertTriangle className="w-6 h-6 mr-2 text-red-400 flex-shrink-0" />Common Challenges in {industry.name}</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300 text-sm sm:text-base">
                        {industry.typicalChallenges.map((challenge, i) => <li key={`chall-${i}`} className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-red-300 flex-shrink-0" />{challenge}</li>)}
                      </ul>
                    </BaseCard>
                  </AnimatedSection>
                )}

                {industry.commonGoals && industry.commonGoals.length > 0 && (
                  <AnimatedSection direction="left" delay={0.3}>
                     <BaseCard variant="glass" className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center"><TargetIcon className="w-6 h-6 mr-2 text-green-400 flex-shrink-0" />Key Goals for {industry.name} Businesses</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300 text-sm sm:text-base">
                        {industry.commonGoals.map((goal, i) => <li key={`goal-${i}`} className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-300 flex-shrink-0" />{goal}</li>)}
                      </ul>
                    </BaseCard>
                  </AnimatedSection>
                )}

                {serviceSpecificBenefits && serviceSpecificBenefits.length > 0 && (
                  <AnimatedSection direction="left" delay={0.4}>
                     <BaseCard variant="glass" className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center"><Award className="w-6 h-6 mr-2 text-blue-400 flex-shrink-0" />How Our {service.name} Specifically Benefits {industry.name}</h3>
                      <ul className="space-y-2">
                        {serviceSpecificBenefits.map((benefit, index) => (
                          <li key={`benefit-${index}`} className="flex items-center text-gray-300 text-sm sm:text-base">
                            <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </BaseCard>
                  </AnimatedSection>
                )}

                {serviceIndustryHighlights && (serviceIndustryHighlights.specificFeatures || serviceIndustryHighlights.commonUseCases) && (
                  <AnimatedSection direction="left" delay={0.5}>
                    <BaseCard variant="glass" className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center"><ListChecks className="w-6 h-6 mr-2 text-purple-400 flex-shrink-0" />{service.name} Features & Use Cases for {industry.name}</h3>
                      {serviceIndustryHighlights.specificFeatures && serviceIndustryHighlights.specificFeatures.length > 0 && (
                        <>
                          <h4 className="text-lg font-semibold text-gray-100 mt-3 mb-1">Key Features:</h4>
                          <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                            {serviceIndustryHighlights.specificFeatures.map((feat, i) => <li key={`feat-${i}`}>{feat}</li>)}
                          </ul>
                        </>
                      )}
                      {serviceIndustryHighlights.commonUseCases && serviceIndustryHighlights.commonUseCases.length > 0 && (
                        <>
                           <h4 className="text-lg font-semibold text-gray-100 mt-3 mb-1">Common Use Cases:</h4>
                           <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                            {serviceIndustryHighlights.commonUseCases.map((useCase, i) => <li key={`usecase-${i}`}>{useCase}</li>)}
                          </ul>
                        </>
                      )}
                    </BaseCard>
                  </AnimatedSection>
                )}

                {caseStudyTeaser && (
                  <AnimatedSection direction="left" delay={0.6}>
                    <BaseCard variant="default" className="p-4 sm:p-6 bg-gradient-to-r from-purple-600/30 to-blue-600/30 hover:shadow-lg">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 flex items-center"><FileText className="w-6 h-6 mr-2 text-purple-300 flex-shrink-0" />Success Spotlight</h3>
                      <p className="text-gray-300 text-sm sm:text-base mb-2">
                        See how {caseStudyTeaser.fictionalClientName || `a ${industry.name} client`} achieved <strong className="text-purple-300">{caseStudyTeaser.achievedResult}</strong> with our help.
                      </p>
                      {caseStudyTeaser.caseStudyId && (
                        <a href={`/case-studies/${caseStudyTeaser.caseStudyId}/`} className="inline-flex items-center text-purple-300 hover:text-purple-200 font-semibold text-sm">
                          Read Full Case Study <LinkIcon className="w-4 h-4 ml-1.5" />
                        </a>
                      )}
                    </BaseCard>
                  </AnimatedSection>
                )}
              </div>

              {/* Right Column (CTA Card) */}
              <AnimatedSection direction="right" delay={0.2} className="lg:sticky lg:top-24 h-fit">
                <BaseCard
                  title="Get Industry-Specific Solutions"
                  description={`Contact us today for a tailored ${service.name} strategy for your ${industry.name} business${location ? ` in ${location.city}` : ''}.`}
                  variant="glass"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">+91 9999999999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">{industry.slug}@goddigitalmarketing.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">24/7 {industry.name} Support</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get {industry.name} Consultation
                  </motion.button>
                </BaseCard>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your {industry.name} Business?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join successful {industry.name.toLowerCase()} businesses that trust our specialized {service.name.toLowerCase()} solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start {industry.name} Campaign
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View {industry.name} Case Studies
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};
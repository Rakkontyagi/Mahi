import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LoadingProvider } from './components/Loading/LoadingProvider';
import { EnhancedNavigation } from './components/Navigation/EnhancedNavigation';
import { AdvancedHero } from './components/Advanced/AdvancedHero';
import { CursorFollower } from './components/Shared/AnimatedSection';
import { EnhancedFooter } from './components/Layout/EnhancedFooter';
import { ContextualSidebar } from './components/Layout/ContextualSidebar';
import { BreadcrumbNavigation } from './components/Layout/BreadcrumbNavigation';
import { ServiceLocationTemplate } from './components/Templates/ServiceLocationTemplate';
import { IndustryLocationTemplate } from './components/Templates/IndustryLocationTemplate';
import { ServiceCostPageTemplate as ServiceCostPageTemplateType } from './components/Templates/ServiceCostPageTemplate'; // For type only
// ServiceROIPageTemplate is not used for type-only import
// CompetitorAlternativePageTemplate is not used for type-only import
// CaseStudyPageTemplate is not used for type-only import
// CaseStudiesHubPage is not used for type-only import
// ProblemSolutionPageTemplate is not used for type-only import
// ConsultationPageTemplate is not used for type-only import
// ServicePricingPageTemplate is not used for type-only import
// LeadMagnetLandingPageTemplate is not used for type-only import
// ROICalculatorPage is not used for type-only import
import { allIndianLocations, comprehensiveServices, comprehensiveIndustries } from './data/comprehensiveLocations';
import { comprehensiveBusinessTypes } from './data/businessTypes';
import { comprehensiveIndustrySizes } from './data/industrySizes';
import { fictionalCompetitors, ourServiceComparisons } from './data/competitors';
import { allCaseStudies } from './data/caseStudies';
import { allProblems, allSolutionSets } from './data/problemSolutions';
import { allLeadMagnets } from './data/leadMagnets';
import { allTools } from './data/toolsData';
import { allPortfolioItems } from './data/portfolioData';
import { allTestimonials } from './data/testimonialsData'; // New import

// Lazy load components
const ServiceCostPageTemplate = lazy(() => import('./components/Templates/ServiceCostPageTemplate').then(module => ({ default: module.ServiceCostPageTemplate })));
const ServiceROIPageTemplate = lazy(() => import('./components/Templates/ServiceROIPageTemplate').then(module => ({ default: module.ServiceROIPageTemplate })));
const CompetitorAlternativePageTemplate = lazy(() => import('./components/Templates/CompetitorAlternativePageTemplate').then(module => ({ default: module.CompetitorAlternativePageTemplate })));
const CaseStudyPageTemplate = lazy(() => import('./components/Templates/CaseStudyPageTemplate').then(module => ({ default: module.CaseStudyPageTemplate })));
const CaseStudiesHubPage = lazy(() => import('./components/Pages/CaseStudiesHubPage').then(module => ({ default: module.CaseStudiesHubPage })));
const ProblemSolutionPageTemplate = lazy(() => import('./components/Templates/ProblemSolutionPageTemplate').then(module => ({ default: module.ProblemSolutionPageTemplate })));
const ConsultationPageTemplate = lazy(() => import('./components/Templates/ConsultationPageTemplate').then(module => ({ default: module.ConsultationPageTemplate })));
const ServicePricingPageTemplate = lazy(() => import('./components/Templates/ServicePricingPageTemplate').then(module => ({ default: module.ServicePricingPageTemplate })));
const LeadMagnetLandingPageTemplate = lazy(() => import('./components/Templates/LeadMagnetLandingPageTemplate').then(module => ({ default: module.LeadMagnetLandingPageTemplate })));
const ROICalculatorPage = lazy(() => import('./components/Pages/ROICalculatorPage').then(module => ({ default: module.ROICalculatorPage }))); // New lazy load
const IndustriesHubPage = lazy(() => import('./components/Pages/IndustriesHubPage').then(module => ({ default: module.IndustriesHubPage })));
const LocationsHubPage = lazy(() => import('./components/Pages/LocationsHubPage').then(module => ({ default: module.LocationsHubPage })));
const StateSpecificPage = lazy(() => import('./components/Pages/StateSpecificPage').then(module => ({ default: module.StateSpecificPage })));
const LocationTierPage = lazy(() => import('./components/Pages/LocationTierPage').then(module => ({ default: module.LocationTierPage })));
const ToolsHubPage = lazy(() => import('./components/Pages/ToolsHubPage').then(module => ({ default: module.ToolsHubPage })));
const PortfolioPage = lazy(() => import('./components/Pages/PortfolioPage').then(module => ({ default: module.PortfolioPage })));
const TestimonialsPage = lazy(() => import('./components/Pages/TestimonialsPage').then(module => ({ default: module.TestimonialsPage })));
const IndiaKeywordOptimization = lazy(() => import('./components/SEO/IndiaKeywordOptimization').then(module => ({ default: module.IndiaKeywordOptimization })));

// Core Service Pages
const DigitalMarketingServices = lazy(() => import('./components/Pages/CoreServices/DigitalMarketingServices').then(module => ({ default: module.DigitalMarketingServices })));
const SEOServices = lazy(() => import('./components/Pages/CoreServices/SEOServices').then(module => ({ default: module.SEOServices })));
const PPCAdvertising = lazy(() => import('./components/Pages/CoreServices/PPCAdvertising').then(module => ({ default: module.PPCAdvertising })));

// Service Hub Pages
const DigitalMarketingHub = lazy(() => import('./components/Pages/ServiceHubPages/DigitalMarketingHub').then(module => ({ default: module.DigitalMarketingHub })));
const AIAutomationHub = lazy(() => import('./components/Pages/ServiceHubPages/AIAutomationHub').then(module => ({ default: module.AIAutomationHub })));
const LeadGenerationHub = lazy(() => import('./components/Pages/ServiceHubPages/LeadGenerationHub').then(module => ({ default: module.LeadGenerationHub })));
const BusinessAutomationHub = lazy(() => import('./components/Pages/ServiceHubPages/BusinessAutomationHub').then(module => ({ default: module.BusinessAutomationHub })));

// Existing city pages
const DelhiDigitalMarketing = lazy(() => import('./components/Pages/DelhiDigitalMarketing').then(module => ({ default: module.DelhiDigitalMarketing })));
const DelhiAIAutomation = lazy(() => import('./components/Pages/DelhiAIAutomation').then(module => ({ default: module.DelhiAIAutomation })));
const DelhiBusinessAutomation = lazy(() => import('./components/Pages/DelhiBusinessAutomation').then(module => ({ default: module.DelhiBusinessAutomation })));
const DelhiSEOServices = lazy(() => import('./components/Pages/DelhiSEOServices').then(module => ({ default: module.DelhiSEOServices })));
const DelhiPPCManagement = lazy(() => import('./components/Pages/DelhiPPCManagement').then(module => ({ default: module.DelhiPPCManagement })));
const DelhiSocialMediaMarketing = lazy(() => import('./components/Pages/DelhiSocialMediaMarketing').then(module => ({ default: module.DelhiSocialMediaMarketing })));
const MumbaiDigitalMarketing = lazy(() => import('./components/Pages/MumbaiDigitalMarketing').then(module => ({ default: module.MumbaiDigitalMarketing })));
const BangaloreDigitalMarketing = lazy(() => import('./components/Pages/BangaloreDigitalMarketing').then(module => ({ default: module.BangaloreDigitalMarketing })));
const ChennaiDigitalMarketing = lazy(() => import('./components/Pages/ChennaiDigitalMarketing').then(module => ({ default: module.ChennaiDigitalMarketing })));
const HyderabadDigitalMarketing = lazy(() => import('./components/Pages/HyderabadDigitalMarketing').then(module => ({ default: module.HyderabadDigitalMarketing })));
const PuneDigitalMarketing = lazy(() => import('./components/Pages/PuneDigitalMarketing').then(module => ({ default: module.PuneDigitalMarketing })));
const HealthcareDigitalMarketing = lazy(() => import('./components/Pages/HealthcareDigitalMarketing').then(module => ({ default: module.HealthcareDigitalMarketing })));
const EcommerceDigitalMarketing = lazy(() => import('./components/Pages/EcommerceDigitalMarketing').then(module => ({ default: module.EcommerceDigitalMarketing })));
const RealEstateDigitalMarketing = lazy(() => import('./components/Pages/RealEstateDigitalMarketing').then(module => ({ default: module.RealEstateDigitalMarketing })));
// ServiceCostPageTemplate is lazy loaded above with other page components

function AppContent() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';

  const LoadingFallback = () => (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
  );

  const PageWrapper = ({ children, breadcrumbs, sidebarProps }: { 
    children: React.ReactNode;
    breadcrumbs?: Array<{ name: string; url: string; isActive?: boolean }>;
    sidebarProps?: any;
  }) => (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CursorFollower />
      <EnhancedNavigation />
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="pt-20">
          <BreadcrumbNavigation items={breadcrumbs} />
        </div>
      )}
      <div className={breadcrumbs ? '' : 'pt-20'}>
        {children}
      </div>
      {sidebarProps && <ContextualSidebar {...sidebarProps} />}
      <EnhancedFooter />
    </div>
  );

  // Helper function to find service by slug
  const findService = (slug: string) => {
    return comprehensiveServices.find(s => s.slug === slug) ||
           comprehensiveServices.flatMap(s => s.subServices || []).find(s => s.slug === slug);
  };

  // Helper function to find location
  const findLocation = (stateSlug: string, citySlug: string) => {
    const state = allIndianLocations.find(s => s.stateSlug === stateSlug);
    if (!state) return null;
    
    const city = state.cities.find(c => c.slug === citySlug);
    if (!city) return null;

    return {
      city: city.name,
      state: state.state,
      citySlug: city.slug,
      stateSlug: state.stateSlug,
      population: city.population,
      isMetro: city.isMetro,
      industries: city.industries,
      tier: city.tier
    };
  };

  // Helper function to find industry
  const findIndustry = (slug: string) => {
    return comprehensiveIndustries.find(i => i.slug === slug);
  };

  const findState = (stateSlug: string) => {
    return allIndianLocations.find(state => state.stateSlug === stateSlug);
  };

  const findBusinessType = (slug: string) => {
    return comprehensiveBusinessTypes.find(bt => bt.slug === slug);
  };

  const findIndustrySize = (slug: string) => {
    return comprehensiveIndustrySizes.find(is => is.slug === slug);
  };

  const findCompetitor = (slug: string) => {
    return fictionalCompetitors.find(c => c.slug === slug);
  };

  const findServiceComparison = (ourServiceSlug: string, competitorSlug: string) => {
    return ourServiceComparisons.find(sc => sc.ourServiceSlug === ourServiceSlug && sc.competitorSlug === competitorSlug);
  };

  const findCaseStudy = (slug: string) => {
    return allCaseStudies.find(cs => cs.id === slug);
  };

  const findProblem = (slug: string) => {
    return allProblems.find(p => p.problemSlug === slug);
  };

  const findSolutionSet = (problemSlug: string) => {
    return allSolutionSets.find(ss => ss.problemSlug === problemSlug);
  };

  const findLeadMagnet = (id: string) => {
    return allLeadMagnets.find(lm => lm.id === id);
  };

  // Generate breadcrumbs
  const generateBreadcrumbs = (service?: any, location?: any, industry?: any) => {
    const breadcrumbs = [];

    if (service && location) {
      breadcrumbs.push(
        { name: "Services", url: "/services/" },
        { name: service.name, url: `/${service.slug}/` },
        { name: location.state, url: `/locations/${location.stateSlug}/` },
        { name: location.city, url: `/${service.slug}/${location.stateSlug}/${location.citySlug}/`, isActive: true }
      );
    } else if (industry && service) {
      breadcrumbs.push(
        { name: "Industries", url: "/industries/" },
        { name: industry.name, url: `/digital-marketing/${industry.slug}/` },
        { name: service.name, url: `/${service.slug}/${industry.slug}/`, isActive: true }
      );
    } else if (service) {
      breadcrumbs.push(
        { name: "Services", url: "/services/" },
        { name: service.name, url: `/${service.slug}/`, isActive: true }
      );
    }

    return breadcrumbs;
  };

  // Dynamic route matching
  const pathParts = pathname.split('/').filter(Boolean);

  // Core Service Pages (New)
  const coreServicePages: Record<string, React.ComponentType> = {
    'digital-marketing-services': DigitalMarketingServices,
    'seo-services': SEOServices,
    'ppc-advertising': PPCAdvertising,
  };

  // Check for core service pages first
  if (pathParts.length === 1 && coreServicePages[pathParts[0]]) {
    const ServiceComponent = coreServicePages[pathParts[0]];
    return (
      <PageWrapper>
        <Suspense fallback={<LoadingFallback />}>
          <ServiceComponent />
        </Suspense>
      </PageWrapper>
    );
  }

  // Route: /testimonials/ (Testimonials Page)
  if (pathname === '/testimonials') {
    const breadcrumbs = [
      { name: "Home", url: "/" },
      { name: "Testimonials", url: "/testimonials/", isActive: true }
    ];
    const sidebarProps = null;

    return (
      <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
        <Suspense fallback={<LoadingFallback />}>
          <TestimonialsPage
            allTestimonials={allTestimonials}
          />
        </Suspense>
      </PageWrapper>
    );
  }

  // Route: /[service]/ (Service Hub Pages)
  if (pathParts.length === 1) {
    const [serviceSlug] = pathParts;
    const service = findService(serviceSlug);

    if (service) {
      const breadcrumbs = generateBreadcrumbs(service);
      const sidebarProps = {
        currentService: service
      };

      // Service Hub Pages
      const serviceHubPages: Record<string, React.ComponentType> = {
        'digital-marketing': DigitalMarketingHub,
        'ai-automation': AIAutomationHub,
        'lead-generation': LeadGenerationHub,
        'business-automation': BusinessAutomationHub,
      };

      const ServiceHubComponent = serviceHubPages[serviceSlug];

      if (ServiceHubComponent) {
        return (
          <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
            <Suspense fallback={<LoadingFallback />}>
              <ServiceHubComponent />
            </Suspense>
          </PageWrapper>
        );
      }
    }
  }

  // Route: /industries/ (Hub Page)
  // Place this before routes like /:serviceSlug/:industrySlug/ or /case-studies/
  if (pathname === '/industries') {
    const breadcrumbs = [
      { name: "Home", url: "/" },
      { name: "Industries", url: "/industries/", isActive: true }
    ];
    const sidebarProps = null;

    return (
      <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
        <Suspense fallback={<LoadingFallback />}>
          <IndustriesHubPage
            allIndustries={comprehensiveIndustries}
          />
        </Suspense>
      </PageWrapper>
    );
  }

  // Route: /locations/ (Hub Page)
  // Place this with other hub page routes like /industries/
  if (pathname === '/locations') {
    const breadcrumbs = [
      { name: "Home", url: "/" },
      { name: "Locations", url: "/locations/", isActive: true }
    ];
    const sidebarProps = null;

    return (
      <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
        <Suspense fallback={<LoadingFallback />}>
          <LocationsHubPage
            allLocations={allIndianLocations}
          />
        </Suspense>
      </PageWrapper>
    );
  }

  // Route: /locations/:stateSlug/ (State Specific Page)
  // Placed AFTER /locations/ exact match
  if (pathParts.length === 2 && pathParts[0] === 'locations') {
    const stateSlug = pathParts[1];
    const stateData = findState(stateSlug);

    if (stateData) {
      const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Locations", url: "/locations/" },
        { name: stateData.state, url: `/locations/${stateData.stateSlug}/`, isActive: true }
      ];
      const sidebarProps = null;

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <StateSpecificPage
              stateData={stateData}
              // Consider passing allServices={comprehensiveServices} if CityCardStatePage needs it
            />
          </Suspense>
        </PageWrapper>
      );
    }
    // If stateData is not found, it will fall through to other routes or 404 logic.
  }

  // Route: /locations/tier/:tierName/ (Location Tier Page)
  // Place this AFTER /locations/ and /locations/:stateSlug/
  if (pathParts.length === 3 && pathParts[0] === 'locations' && pathParts[1] === 'tier') {
    const tierName = pathParts[2];

    // Validate tierName to ensure it's one of the expected values
    const validTiers = ['metro', 'tier-2', 'tier-3'];
    if (validTiers.includes(tierName)) {
      let breadcrumbTierName = '';
      if (tierName === 'metro') breadcrumbTierName = 'Metro Cities';
      else if (tierName === 'tier-2') breadcrumbTierName = 'Tier 2 Cities';
      else if (tierName === 'tier-3') breadcrumbTierName = 'Tier 3 Cities';
      else breadcrumbTierName = tierName; // Fallback, though validation helps

      const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Locations", url: "/locations/" }, // Link to Locations Hub
        { name: breadcrumbTierName, url: `/locations/tier/${tierName}/`, isActive: true }
      ];
      const sidebarProps = null;

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <LocationTierPage
              tierIdentifier={tierName}
              allIndianLocations={allIndianLocations}
            />
          </Suspense>
        </PageWrapper>
      );
    }
    // If tierName is not valid, it will fall through (leading to 404 or default page).
  }

  // Route: /portfolio/ (Hub Page)
  if (pathname === '/portfolio') {
    const breadcrumbs = [
      { name: "Home", url: "/" },
      { name: "Our Work", url: "/portfolio/", isActive: true }
    ];
    const sidebarProps = null;

    return (
      <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
        <Suspense fallback={<LoadingFallback />}>
          <PortfolioPage
            allPortfolioItems={allPortfolioItems}
          />
        </Suspense>
      </PageWrapper>
    );
  }

  // Route: /tools/ (Hub Page)
  // Placed BEFORE /tools/:toolId/
  if (pathname === '/tools') {
    const breadcrumbs = [
      { name: "Home", url: "/" },
      { name: "Resources", url: "/resources/" }, // Assuming tools are under a general "Resources" umbrella
      { name: "Tools & Calculators", url: "/tools/", isActive: true }
    ];
    const sidebarProps = null;

    return (
      <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
        <Suspense fallback={<LoadingFallback />}>
          <ToolsHubPage
            allTools={allTools}
          />
        </Suspense>
      </PageWrapper>
    );
  }

  // Route: /:serviceSlug/:stateSlug/:citySlug/pricing/
  if (pathParts.length === 4 && pathParts[3] === 'pricing') {
    const [serviceSlug, stateSlug, citySlug] = pathParts;

    const service = findService(serviceSlug);
    const location = findLocation(stateSlug, citySlug);

    if (service && location) {
      const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: service.name, url: `/${service.slug}/` },
        { name: `${location.city} Pricing`, url: pathname, isActive: true }
      ];
      const sidebarProps = {
          currentService: service,
          currentLocation: location
      };

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <ServicePricingPageTemplate
              service={service}
              location={location}
            />
          </Suspense>
        </PageWrapper>
      );
    }
  }

  // Route: /case-studies/ (Hub Page)
  // Placed BEFORE the individual case study route /case-studies/:slug
  if (pathname === '/case-studies') {
    const breadcrumbs = [
      { name: "Home", url: "/" },
      { name: "Case Studies", url: "/case-studies/", isActive: true }
    ];
    const sidebarProps = null;

    return (
      <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
        <Suspense fallback={<LoadingFallback />}>
          <CaseStudiesHubPage
            allCaseStudies={allCaseStudies}
            allIndustries={comprehensiveIndustries}
            allServices={comprehensiveServices}
          />
        </Suspense>
      </PageWrapper>
    );
  }

  // Route: /case-studies/:caseStudySlug/
  if (pathParts.length === 2 && pathParts[0] === 'case-studies') {
    const caseStudySlug = pathParts[1];
    const caseStudy = findCaseStudy(caseStudySlug);

    if (caseStudy) {
      const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies/" }, // Link to a potential case studies hub
        { name: caseStudy.title, url: `/case-studies/${caseStudy.id}/`, isActive: true }
      ];
      const sidebarProps = null; // Or specific sidebar if designed for case studies

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <CaseStudyPageTemplate caseStudy={caseStudy} />
          </Suspense>
        </PageWrapper>
      );
    }
    // Optional: Fallback to a 404 or case studies list if not found
  }

  // Route: /resources/templates/digital-marketing-proposal-template/
  if (pathParts.length === 3 &&
      pathParts[0] === 'resources' &&
      pathParts[1] === 'templates' &&
      pathParts[2] === 'digital-marketing-proposal-template') {

    const leadMagnetId = pathParts[2];
    const leadMagnet = findLeadMagnet(leadMagnetId);

    if (leadMagnet) {
      const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Resources", url: "/resources/" }, // Placeholder
        { name: "Templates", url: "/resources/templates/" }, // Placeholder
        { name: leadMagnet.title.replace(/{cityName}/g, '').replace(/{industryName}/g, '').trim(), url: pathname, isActive: true } // Basic title cleanup
      ];
      const sidebarProps = null;

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <LeadMagnetLandingPageTemplate
              leadMagnet={leadMagnet}
              // No location prop for this generic template example
            />
          </Suspense>
        </PageWrapper>
      );
    }
  }

  // Route: /digital-marketing-consultation/:stateSlug/:citySlug/
  if (pathParts.length === 3 && pathParts[0] === 'digital-marketing-consultation') {
    const [, stateSlug, citySlug] = pathParts;

    const location = findLocation(stateSlug, citySlug);

    if (location) {
      const breadcrumbs = [
        { name: "Home", url: "/" },
        // { name: "Consultations", url: "/consultations/" }, // Optional hub page
        { name: `Digital Marketing Consultation in ${location.city}`, url: pathname, isActive: true }
      ];
      const sidebarProps = null;

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <ConsultationPageTemplate
              location={location}
            />
          </Suspense>
        </PageWrapper>
      );
    }
  }

  // Route: /tools/marketing-automation-roi-calculator/
  if (pathParts.length === 2 && // Corrected length check, path is /tools/slug
      pathParts[0] === 'tools' &&
      pathParts[1] === 'marketing-automation-roi-calculator') {

    const breadcrumbs = [
      { name: "Home", url: "/" },
      { name: "Tools", url: "/tools/" },
      { name: "Marketing Automation ROI Calculator", url: pathname, isActive: true }
    ];
    const sidebarProps = null;

    return (
      <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
        <Suspense fallback={<LoadingFallback />}>
          <ROICalculatorPage />
        </Suspense>
      </PageWrapper>
    );
  }

  // Route: /:serviceSlug/:industrySizeSlug/roi/
  if (pathParts.length === 3 && pathParts[2] === 'roi') {
    const [serviceSlug, industrySizeSlug] = pathParts;
    const service = findService(serviceSlug);
    const industrySize = findIndustrySize(industrySizeSlug);

    if (service && industrySize) {
      const breadcrumbs = [
        { name: "Services", url: "/services/" },
        { name: service.name, url: `/${service.slug}/` },
        { name: `ROI for ${industrySize.name}`, url: `/${service.slug}/${industrySize.slug}/roi/`, isActive: true }
      ];
      const sidebarProps = {
          currentService: service,
          // currentIndustrySize: industrySize, // If sidebar needs this
      };

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <ServiceROIPageTemplate
              service={service}
              industrySize={industrySize}
            />
          </Suspense>
        </PageWrapper>
      );
    }
  }

  // Route: /:serviceSlug/:businessTypeSlug/:stateSlug/:citySlug/cost/
  if (pathParts.length === 5 && pathParts[4] === 'cost') {
    const [serviceSlug, businessTypeSlug, stateSlug, citySlug] = pathParts;
    const service = findService(serviceSlug);
    const businessType = findBusinessType(businessTypeSlug);
    const location = findLocation(stateSlug, citySlug);

    if (service && businessType && location) {
      const breadcrumbs = [
        { name: "Services", url: "/services/" }, // Assuming a general services listing page
        { name: service.name, url: `/${service.slug}/` }, // Link to service hub page
        { name: businessType.name, url: `/${service.slug}/${businessType.slug}/` }, // Placeholder - this page might not exist, but good for structure
        { name: location.state, url: `/locations/${location.stateSlug}/` }, // Assuming a general state listing page
        { name: location.city, url: `/${service.slug}/${businessType.slug}/${location.stateSlug}/${location.citySlug}/` }, // Link to a potential Service+BT+Location page
        { name: "Cost Analysis", url: `/${service.slug}/${businessType.slug}/${location.stateSlug}/${location.citySlug}/cost/`, isActive: true }
      ];
      const sidebarProps = {
        currentService: service,
        currentLocation: location,
        // currentBusinessType: businessType, // Pass if ContextualSidebar uses it
      };

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <ServiceCostPageTemplate
              service={service}
              businessType={businessType}
              location={location}
            />
          </Suspense>
        </PageWrapper>
      );
    }
  }

  // Route: /alternatives/:competitorSlug/:serviceSlug/:stateSlug/:citySlug/
  if (pathParts.length === 5 && pathParts[0] === 'alternatives') {
    const [, competitorSlug, serviceSlug, stateSlug, citySlug] = pathParts;

    const competitor = findCompetitor(competitorSlug);
    const serviceData = findService(serviceSlug);
    const location = findLocation(stateSlug, citySlug);
    const serviceComparison = findServiceComparison(serviceSlug, competitorSlug);

    if (competitor && serviceData && location && serviceComparison) {
      const ourServiceInfo = {
        name: serviceData.name,
        slug: serviceData.slug,
        advantages: serviceComparison.ourAdvantages,
        differentiators: serviceComparison.ourDifferentiators,
        comparisonTitle: serviceComparison.comparisonTitle
                          || `Why Our ${serviceData.name} is a Strong ${competitor.name} Alternative`
      };

      const breadcrumbs = [
        { name: "Home", url: "/" },
        // { name: "Alternatives", url: "/alternatives/" }, // Consider if a hub page for /alternatives/ will exist
        { name: `${competitor.name} Alternatives`, url: `/alternatives/${competitor.slug}/` }, // Placeholder for competitor specific alternatives page
        { name: `vs ${serviceData.name} in ${location.city}`, url: pathname, isActive: true }
      ];
      const sidebarProps = {
          // currentService: serviceData, // Optional, if sidebar needs it
          // currentLocation: location
      };

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <CompetitorAlternativePageTemplate
              competitor={competitor}
              location={location}
              ourServiceInfo={ourServiceInfo}
            />
          </Suspense>
        </PageWrapper>
      );
    }
  }

  // Route: /solutions/:problemSlug/:stateSlug/:citySlug/
  if (pathParts.length === 4 && pathParts[0] === 'solutions') {
    const [, problemSlug, stateSlug, citySlug] = pathParts;

    const problem = findProblem(problemSlug);
    const solutionSet = findSolutionSet(problemSlug);
    const location = findLocation(stateSlug, citySlug);

    if (problem && solutionSet && location) {
      const dynamicPageTitle = solutionSet.solutionSetTitleTemplate
        .replace('{problemTitle}', problem.problemTitle)
        .replace('{cityName}', location.city);

      const breadcrumbs = [
        { name: "Home", url: "/" },
        // { name: "Solutions", url: "/solutions/" }, // Optional hub page
        { name: problem.problemTitle, url: `/solutions/${problem.problemSlug}/` }, // Placeholder for problem-specific hub
        { name: `In ${location.city}`, url: pathname, isActive: true }
      ];
      const sidebarProps = null;

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <ProblemSolutionPageTemplate
              problem={problem}
              solutionSet={solutionSet}
              location={location}
            />
          </Suspense>
        </PageWrapper>
      );
    }
  }

  // Route: /[service]/[state]/[city]/
  // This existing 3-part route is for ServiceLocationTemplate, ensure it's distinct from the ROI route
  if (pathParts.length === 3 && pathParts[2] !== 'roi') { // Added condition to avoid conflict with ROI route
    const [serviceSlug, stateSlug, citySlug] = pathParts;
    const service = findService(serviceSlug);
    const location = findLocation(stateSlug, citySlug);

    if (service && location) {
      // Generate related services and nearby locations
      const relatedServices = comprehensiveServices
        .filter(s => s.slug !== service.slug)
        .slice(0, 6)
        .map(s => ({
          name: s.name,
          slug: s.slug,
          url: `/${s.slug}/${stateSlug}/${citySlug}/`
        }));

      const state = allIndianLocations.find(s => s.stateSlug === stateSlug);
      const nearbyLocations = state ? state.cities
        .filter(c => c.slug !== citySlug)
        .slice(0, 8)
        .map(c => ({
          city: c.name,
          citySlug: c.slug,
          stateSlug: state.stateSlug,
          url: `/${serviceSlug}/${state.stateSlug}/${c.slug}/`
        })) : [];

      const breadcrumbs = generateBreadcrumbs(service, location);
      const sidebarProps = {
        currentService: service,
        currentLocation: location
      };

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <ServiceLocationTemplate 
              service={service}
              location={location}
              relatedServices={relatedServices}
              nearbyLocations={nearbyLocations}
            />
          </Suspense>
        </PageWrapper>
      );
    }
  }

  // Route: /[service]/[industry]/[state]/[city]/
  if (pathParts.length === 4) {
    const [serviceSlug, industrySlug, stateSlug, citySlug] = pathParts;
    const service = findService(serviceSlug);
    const industry = findIndustry(industrySlug);
    const location = findLocation(stateSlug, citySlug);

    if (service && industry && location) {
      const breadcrumbs = generateBreadcrumbs(service, location, industry);
      const sidebarProps = {
        currentService: service,
        currentLocation: location,
        currentIndustry: industry
      };

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <IndustryLocationTemplate 
              service={service}
              industry={industry}
              location={location}
            />
          </Suspense>
        </PageWrapper>
      );
    }
  }

  // Route: /[service]/[industry]/
  if (pathParts.length === 2) {
    const [serviceSlug, industrySlug] = pathParts;
    const service = findService(serviceSlug);
    const industry = findIndustry(industrySlug);

    if (service && industry) {
      const breadcrumbs = generateBreadcrumbs(service, null, industry);
      const sidebarProps = {
        currentService: service,
        currentIndustry: industry
      };

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <IndustryLocationTemplate 
              service={service}
              industry={industry}
            />
          </Suspense>
        </PageWrapper>
      );
    }
  }

  // Existing static routes
  const staticRoutes: Record<string, React.ComponentType> = {
    '/digital-marketing-delhi': DelhiDigitalMarketing,
    '/ai-automation-delhi': DelhiAIAutomation,
    '/business-automation-delhi': DelhiBusinessAutomation,
    '/seo-services-delhi': DelhiSEOServices,
    '/ppc-management-delhi': DelhiPPCManagement,
    '/social-media-marketing-delhi': DelhiSocialMediaMarketing,
    '/digital-marketing-mumbai': MumbaiDigitalMarketing,
    '/digital-marketing-bangalore': BangaloreDigitalMarketing,
    '/digital-marketing-chennai': ChennaiDigitalMarketing,
    '/digital-marketing-hyderabad': HyderabadDigitalMarketing,
    '/digital-marketing-pune': PuneDigitalMarketing,
    '/healthcare-digital-marketing': HealthcareDigitalMarketing,
    '/ecommerce-digital-marketing': EcommerceDigitalMarketing,
    '/real-estate-digital-marketing': RealEstateDigitalMarketing,
  };

  const PageComponent = staticRoutes[pathname];

  if (PageComponent) {
    return (
      <PageWrapper>
        <Suspense fallback={<LoadingFallback />}>
          <PageComponent />
        </Suspense>
      </PageWrapper>
    );
  }

  // Default homepage
  return (
    <PageWrapper>
      <main>
        <AdvancedHero />
        <Suspense fallback={<LoadingFallback />}>
          <IndiaKeywordOptimization />
        </Suspense>
      </main>
    </PageWrapper>
  );
}

function App() {
  return (
    <HelmetProvider>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </HelmetProvider>
  );
}

export default App;
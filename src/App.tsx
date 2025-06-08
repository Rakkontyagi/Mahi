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
import { allIndianLocations, comprehensiveServices, comprehensiveIndustries } from './data/comprehensiveLocations';
import { comprehensiveBusinessTypes } from './data/businessTypes';

// Lazy load components
const ServiceCostPageTemplate = lazy(() => import('./components/Templates/ServiceCostPageTemplate').then(module => ({ default: module.ServiceCostPageTemplate })));
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

  const findBusinessType = (slug: string) => {
    return comprehensiveBusinessTypes.find(bt => bt.slug === slug);
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

  // Route: /[service]/[state]/[city]/
  if (pathParts.length === 3) {
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
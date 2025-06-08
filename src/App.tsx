import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LoadingProvider } from './components/Loading/LoadingProvider';
import { EnhancedNavigation } from './components/Navigation/EnhancedNavigation';
import { AdvancedHero } from './components/Advanced/AdvancedHero';
import { CursorFollower } from './components/Advanced/MicroInteractions';
import { PerformanceMonitor } from './components/Advanced/PerformanceOptimizer';
import { EnhancedFooter } from './components/Layout/EnhancedFooter';
import { ContextualSidebar } from './components/Layout/ContextualSidebar';
import { BreadcrumbNavigation } from './components/Layout/BreadcrumbNavigation';
import { ServiceLocationTemplate } from './components/Templates/ServiceLocationTemplate';
import { IndustryLocationTemplate } from './components/Templates/IndustryLocationTemplate';
import { allIndianLocations, comprehensiveServices, comprehensiveIndustries } from './data/comprehensiveLocations';

// Lazy load components
const QuantumServices = lazy(() => import('./components/4D/QuantumServices').then(module => ({ default: module.QuantumServices })));
const IndiaKeywordOptimization = lazy(() => import('./components/SEO/IndiaKeywordOptimization').then(module => ({ default: module.IndiaKeywordOptimization })));

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
      <PerformanceMonitor />
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
    }

    return breadcrumbs;
  };

  // Dynamic route matching
  const pathParts = pathname.split('/').filter(Boolean);

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
          <QuantumServices />
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
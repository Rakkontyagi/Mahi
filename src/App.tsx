import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LoadingProvider } from './components/Loading/LoadingProvider';
import { TemporalNavigation } from './components/Navigation/TemporalNavigation';
import { AdvancedHero } from './components/Advanced/AdvancedHero';
import { CursorFollower } from './components/Advanced/MicroInteractions';
import { PerformanceMonitor } from './components/Advanced/PerformanceOptimizer';
import { Footer } from './components/Layout/Footer';

// Lazy load components
const QuantumServices = lazy(() => import('./components/4D/QuantumServices').then(module => ({ default: module.QuantumServices })));
const IndiaKeywordOptimization = lazy(() => import('./components/SEO/IndiaKeywordOptimization').then(module => ({ default: module.IndiaKeywordOptimization })));

// Delhi pages
const DelhiDigitalMarketing = lazy(() => import('./components/Pages/DelhiDigitalMarketing').then(module => ({ default: module.DelhiDigitalMarketing })));
const DelhiAIAutomation = lazy(() => import('./components/Pages/DelhiAIAutomation').then(module => ({ default: module.DelhiAIAutomation })));
const DelhiBusinessAutomation = lazy(() => import('./components/Pages/DelhiBusinessAutomation').then(module => ({ default: module.DelhiBusinessAutomation })));
const DelhiSEOServices = lazy(() => import('./components/Pages/DelhiSEOServices').then(module => ({ default: module.DelhiSEOServices })));
const DelhiPPCManagement = lazy(() => import('./components/Pages/DelhiPPCManagement').then(module => ({ default: module.DelhiPPCManagement })));
const DelhiSocialMediaMarketing = lazy(() => import('./components/Pages/DelhiSocialMediaMarketing').then(module => ({ default: module.DelhiSocialMediaMarketing })));

// City pages
const MumbaiDigitalMarketing = lazy(() => import('./components/Pages/MumbaiDigitalMarketing').then(module => ({ default: module.MumbaiDigitalMarketing })));
const BangaloreDigitalMarketing = lazy(() => import('./components/Pages/BangaloreDigitalMarketing').then(module => ({ default: module.BangaloreDigitalMarketing })));
const ChennaiDigitalMarketing = lazy(() => import('./components/Pages/ChennaiDigitalMarketing').then(module => ({ default: module.ChennaiDigitalMarketing })));
const HyderabadDigitalMarketing = lazy(() => import('./components/Pages/HyderabadDigitalMarketing').then(module => ({ default: module.HyderabadDigitalMarketing })));
const PuneDigitalMarketing = lazy(() => import('./components/Pages/PuneDigitalMarketing').then(module => ({ default: module.PuneDigitalMarketing })));

// Industry pages
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

  const PageWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CursorFollower />
      <PerformanceMonitor />
      <TemporalNavigation />
      {children}
      <Footer />
    </div>
  );

  // Route mapping
  const routes: Record<string, React.ComponentType> = {
    // Delhi pages
    '/digital-marketing-delhi': DelhiDigitalMarketing,
    '/ai-automation-delhi': DelhiAIAutomation,
    '/business-automation-delhi': DelhiBusinessAutomation,
    '/seo-services-delhi': DelhiSEOServices,
    '/ppc-management-delhi': DelhiPPCManagement,
    '/social-media-marketing-delhi': DelhiSocialMediaMarketing,
    
    // City pages
    '/digital-marketing-mumbai': MumbaiDigitalMarketing,
    '/digital-marketing-bangalore': BangaloreDigitalMarketing,
    '/digital-marketing-chennai': ChennaiDigitalMarketing,
    '/digital-marketing-hyderabad': HyderabadDigitalMarketing,
    '/digital-marketing-pune': PuneDigitalMarketing,
    
    // Industry pages
    '/healthcare-digital-marketing': HealthcareDigitalMarketing,
    '/ecommerce-digital-marketing': EcommerceDigitalMarketing,
    '/real-estate-digital-marketing': RealEstateDigitalMarketing,
  };

  const PageComponent = routes[pathname];

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
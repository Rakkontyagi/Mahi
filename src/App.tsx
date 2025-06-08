import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LoadingProvider } from './components/Loading/LoadingProvider';
import { TemporalNavigation } from './components/Navigation/TemporalNavigation';
import { AdvancedHero } from './components/Advanced/AdvancedHero';
import { CursorFollower } from './components/Advanced/MicroInteractions';
import { PerformanceMonitor } from './components/Advanced/PerformanceOptimizer';
import { Footer } from './components/Layout/Footer';

// Lazy load heavy components
const QuantumServices = lazy(() => import('./components/4D/QuantumServices').then(module => ({ default: module.QuantumServices })));
const IndiaKeywordOptimization = lazy(() => import('./components/SEO/IndiaKeywordOptimization').then(module => ({ default: module.IndiaKeywordOptimization })));

// Delhi service pages
const DelhiDigitalMarketing = lazy(() => import('./components/Pages/DelhiDigitalMarketing').then(module => ({ default: module.DelhiDigitalMarketing })));
const DelhiAIAutomation = lazy(() => import('./components/Pages/DelhiAIAutomation').then(module => ({ default: module.DelhiAIAutomation })));
const DelhiBusinessAutomation = lazy(() => import('./components/Pages/DelhiBusinessAutomation').then(module => ({ default: module.DelhiBusinessAutomation })));
const DelhiSEOServices = lazy(() => import('./components/Pages/DelhiSEOServices').then(module => ({ default: module.DelhiSEOServices })));
const DelhiPPCManagement = lazy(() => import('./components/Pages/DelhiPPCManagement').then(module => ({ default: module.DelhiPPCManagement })));
const DelhiSocialMediaMarketing = lazy(() => import('./components/Pages/DelhiSocialMediaMarketing').then(module => ({ default: module.DelhiSocialMediaMarketing })));

function AppContent() {
  // Simple routing based on pathname
  const pathname = window.location.pathname;

  // Route to specific Delhi pages
  if (pathname === '/digital-marketing-delhi/' || pathname === '/digital-marketing-delhi') {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <CursorFollower />
        <PerformanceMonitor />
        <TemporalNavigation />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" /></div>}>
          <DelhiDigitalMarketing />
        </Suspense>
        <Footer />
      </div>
    );
  }

  if (pathname === '/ai-automation-delhi/' || pathname === '/ai-automation-delhi') {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <CursorFollower />
        <PerformanceMonitor />
        <TemporalNavigation />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" /></div>}>
          <DelhiAIAutomation />
        </Suspense>
        <Footer />
      </div>
    );
  }

  if (pathname === '/business-automation-delhi/' || pathname === '/business-automation-delhi') {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <CursorFollower />
        <PerformanceMonitor />
        <TemporalNavigation />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" /></div>}>
          <DelhiBusinessAutomation />
        </Suspense>
        <Footer />
      </div>
    );
  }

  if (pathname === '/seo-services-delhi/' || pathname === '/seo-services-delhi') {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <CursorFollower />
        <PerformanceMonitor />
        <TemporalNavigation />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" /></div>}>
          <DelhiSEOServices />
        </Suspense>
        <Footer />
      </div>
    );
  }

  if (pathname === '/ppc-management-delhi/' || pathname === '/ppc-management-delhi') {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <CursorFollower />
        <PerformanceMonitor />
        <TemporalNavigation />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" /></div>}>
          <DelhiPPCManagement />
        </Suspense>
        <Footer />
      </div>
    );
  }

  if (pathname === '/social-media-marketing-delhi/' || pathname === '/social-media-marketing-delhi') {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <CursorFollower />
        <PerformanceMonitor />
        <TemporalNavigation />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" /></div>}>
          <DelhiSocialMediaMarketing />
        </Suspense>
        <Footer />
      </div>
    );
  }

  // Default homepage
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CursorFollower />
      <PerformanceMonitor />
      <TemporalNavigation />
      
      <main>
        <AdvancedHero />
        
        <Suspense fallback={
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        }>
          <QuantumServices />
          <IndiaKeywordOptimization />
        </Suspense>
      </main>

      <Footer />
    </div>
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
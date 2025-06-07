import React, { Suspense, lazy } from 'react';
import { LoadingProvider } from './components/Loading/LoadingProvider';
import { TemporalNavigation } from './components/Navigation/TemporalNavigation';
import { AdvancedHero } from './components/Advanced/AdvancedHero';
import { CursorFollower } from './components/Advanced/MicroInteractions';
import { PerformanceMonitor } from './components/Advanced/PerformanceOptimizer';

// Lazy load heavy components
const QuantumServices = lazy(() => import('./components/4D/QuantumServices').then(module => ({ default: module.QuantumServices })));
const IndiaKeywordOptimization = lazy(() => import('./components/SEO/IndiaKeywordOptimization').then(module => ({ default: module.IndiaKeywordOptimization })));

function AppContent() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Advanced cursor */}
      <CursorFollower />
      
      {/* Performance monitoring */}
      <PerformanceMonitor />
      
      <TemporalNavigation />
      
      <main>
        {/* Hero with advanced features */}
        <AdvancedHero />
        
        {/* Lazy loaded sections */}
        <Suspense fallback={
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        }>
          <QuantumServices />
          <IndiaKeywordOptimization />
        </Suspense>
      </main>
    </div>
  );
}

function App() {
  return (
    <LoadingProvider>
      <AppContent />
    </LoadingProvider>
  );
}

export default App;
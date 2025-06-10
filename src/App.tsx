import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import pages
import HomePage from './pages/index';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';

// Service pages
import DigitalMarketingPage from './pages/services/digital-marketing';
import AIAutomationPage from './pages/services/ai-automation';
import BusinessAutomationPage from './pages/services/business-automation';

// Location pages
import MumbaiPage from './pages/locations/mumbai';

// Industry pages
import HealthcarePage from './pages/industries/healthcare';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Service Pages */}
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/services/ai-automation" element={<AIAutomationPage />} />
          <Route path="/services/business-automation" element={<BusinessAutomationPage />} />
          
          {/* Location Pages */}
          <Route path="/locations/mumbai" element={<MumbaiPage />} />
          
          {/* Industry Pages */}
          <Route path="/industries/healthcare" element={<HealthcarePage />} />
          
          {/* Catch all route - redirect to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

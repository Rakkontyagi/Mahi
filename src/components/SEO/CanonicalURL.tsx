import React from 'react';
import { Helmet } from 'react-helmet-async';

interface CanonicalURLProps {
  canonicalUrl: string;
  noindex?: boolean;
}

export const CanonicalURL: React.FC<CanonicalURLProps> = ({ 
  canonicalUrl, 
  noindex = false 
}) => {
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, follow" />}
    </Helmet>
  );
};

// Canonical URL mapping for duplicate content consolidation
export const getCanonicalUrl = (
  service: string, 
  location?: string, 
  industry?: string
): string => {
  const baseUrl = 'https://courageous-daffodil-2020b6.netlify.app';
  
  // Main service pages (canonical destinations)
  const serviceMap: Record<string, string> = {
    'digital-marketing': '/services/digital-marketing/',
    'ai-automation': '/services/ai-automation/',
    'business-automation': '/services/business-automation/',
    'seo-services': '/services/seo-services/',
    'ppc-advertising': '/services/ppc-advertising/',
    'social-media-marketing': '/services/social-media-marketing/',
    'lead-generation': '/services/lead-generation/',
    'email-marketing': '/services/email-marketing/',
    'content-marketing': '/services/content-marketing/',
    'web-development': '/services/web-development/',
    'ecommerce-marketing': '/services/ecommerce-marketing/',
    'mobile-app-marketing': '/services/mobile-app-marketing/'
  };

  // Determine canonical URL based on page type
  if (location && service) {
    // Location + Service combination → Service page
    const servicePath = serviceMap[service];
    if (servicePath) {
      return `${baseUrl}${servicePath}`;
    }
  }

  if (service) {
    // Service only → Service page
    const servicePath = serviceMap[service];
    if (servicePath) {
      return `${baseUrl}${servicePath}`;
    }
  }

  // Fallback to homepage
  return baseUrl;
};

export default CanonicalURL;

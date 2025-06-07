export interface PageStructure {
  id: string;
  title: string;
  slug: string;
  type: 'service' | 'location' | 'industry';
  keywords: string[];
  metaDescription: string;
  content: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    sections: Array<{
      id: string;
      type: 'features' | 'benefits' | 'process' | 'testimonials' | 'faq';
      title: string;
      content: any;
    }>;
  };
}

export const servicePages: PageStructure[] = [
  {
    id: 'seo-services-delhi',
    title: 'SEO Services Delhi',
    slug: '/seo-services-delhi',
    type: 'service',
    keywords: ['seo services delhi', 'seo company delhi', 'search engine optimization delhi'],
    metaDescription: 'Professional SEO services in Delhi. Top-ranked SEO company delivering guaranteed results for businesses in Delhi NCR.',
    content: {
      hero: {
        title: 'Professional SEO Services in Delhi',
        subtitle: 'Dominate search rankings with our proven SEO strategies tailored for Delhi businesses',
        cta: 'Get Free SEO Audit'
      },
      sections: []
    }
  },
  {
    id: 'ppc-management-delhi',
    title: 'PPC Management Delhi',
    slug: '/ppc-management-delhi',
    type: 'service',
    keywords: ['ppc management delhi', 'google ads delhi', 'paid advertising delhi'],
    metaDescription: 'Expert PPC management services in Delhi. Maximize ROI with our Google Ads and paid advertising solutions.',
    content: {
      hero: {
        title: 'Expert PPC Management in Delhi',
        subtitle: 'Drive immediate results with our data-driven PPC campaigns',
        cta: 'Start PPC Campaign'
      },
      sections: []
    }
  }
];

export const locationPages: PageStructure[] = [
  {
    id: 'digital-marketing-gurgaon',
    title: 'Digital Marketing Agency Gurgaon',
    slug: '/digital-marketing-gurgaon',
    type: 'location',
    keywords: ['digital marketing agency gurgaon', 'digital marketing gurgaon', 'marketing company gurgaon'],
    metaDescription: 'Leading digital marketing agency in Gurgaon. Comprehensive digital marketing services for Gurgaon businesses.',
    content: {
      hero: {
        title: 'Digital Marketing Agency in Gurgaon',
        subtitle: 'Accelerate your business growth with our comprehensive digital marketing solutions in Gurgaon',
        cta: 'Get Started Today'
      },
      sections: []
    }
  },
  {
    id: 'digital-marketing-noida',
    title: 'Digital Marketing Agency Noida',
    slug: '/digital-marketing-noida',
    type: 'location',
    keywords: ['digital marketing agency noida', 'digital marketing noida', 'marketing company noida'],
    metaDescription: 'Top digital marketing agency in Noida. Expert digital marketing services for Noida-based businesses.',
    content: {
      hero: {
        title: 'Digital Marketing Agency in Noida',
        subtitle: 'Transform your digital presence with our expert marketing strategies in Noida',
        cta: 'Schedule Consultation'
      },
      sections: []
    }
  }
];

export const industryPages: PageStructure[] = [
  {
    id: 'ecommerce-digital-marketing',
    title: 'E-commerce Digital Marketing Delhi',
    slug: '/ecommerce-digital-marketing-delhi',
    type: 'industry',
    keywords: ['ecommerce digital marketing delhi', 'online store marketing delhi', 'ecommerce seo delhi'],
    metaDescription: 'Specialized e-commerce digital marketing services in Delhi. Boost online sales with our proven strategies.',
    content: {
      hero: {
        title: 'E-commerce Digital Marketing in Delhi',
        subtitle: 'Skyrocket your online sales with our specialized e-commerce marketing strategies',
        cta: 'Boost Sales Now'
      },
      sections: []
    }
  },
  {
    id: 'healthcare-digital-marketing',
    title: 'Healthcare Digital Marketing Delhi',
    slug: '/healthcare-digital-marketing-delhi',
    type: 'industry',
    keywords: ['healthcare digital marketing delhi', 'medical marketing delhi', 'hospital marketing delhi'],
    metaDescription: 'Expert healthcare digital marketing services in Delhi. Grow your medical practice with our specialized strategies.',
    content: {
      hero: {
        title: 'Healthcare Digital Marketing in Delhi',
        subtitle: 'Grow your medical practice with our HIPAA-compliant digital marketing solutions',
        cta: 'Grow Practice'
      },
      sections: []
    }
  }
];

export const getAllPages = (): PageStructure[] => [
  ...servicePages,
  ...locationPages,
  ...industryPages
];

export const getPageBySlug = (slug: string): PageStructure | undefined => {
  return getAllPages().find(page => page.slug === slug);
};
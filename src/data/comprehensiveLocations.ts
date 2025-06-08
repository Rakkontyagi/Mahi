// Comprehensive location data for all Indian states and cities

// Interface for Cost Information
export interface CostTier {
  name: string; // e.g., "Basic Setup", "Advanced Integration", "Full Scale Enterprise"
  range: string; // e.g., "$500 - $1,500 / month", "Starting at $2,000", "Custom Quote"
  features: string[]; // Key features included in this tier
}

export interface BusinessTypeCostDetail {
  businessTypeSlug: string;
  factors: string[];
  costTiers: CostTier[];
  roiNotes?: string;
}

export interface ComprehensiveServiceData {
  name: string;
  slug: string;
  description: string;
  keywords: string[];
  subServices?: Array<{ name: string; slug: string }>;
  costInformation?: {
    generalFactors?: string[];
    businessTypeSpecificCosts: BusinessTypeCostDetail[];
  };
  roiInformation?: {
    industrySizeSpecificROI: IndustrySizeROIDetail[];
  };
  industryHighlights?: ServiceIndustryHighlight[];
  hireUsFocusedData?: HireUsFocusedData;
  pricingPageDetails?: PricingPageDetails; // New field for Pricing Page content
}

export interface PricingTier {
  tierName: string;
  price: string; // e.g., "$X/month" or "Starting at $Y"
  features: string[];
  suitableFor?: string;
  tierCTA_text?: string; // e.g., "Get Started" or "Contact Sales"
  tierCTA_link?: string; // e.g., /contact-us?tier=starter
  highlight?: boolean; // To emphasize a particular tier
}

export interface PricingPageDetails {
  introduction?: string; // Templated: {serviceName}, {cityName}
  pricingTiers?: PricingTier[];
  generalPricingFactors?: string[]; // Templated: {serviceName}, {cityName}
  customQuoteStatement?: string; // Templated: {serviceName}, {cityName}
  faq?: Array<{ question: string; answer: string; }>; // Templated: {serviceName}, {cityName}
}

export interface HireUsFocusedData {
  heroTitleTemplate?: string;
  heroSubtitleTemplate?: string;
  whyHireOurAgencyPoints?: string[];
  ourApproachSummary?: string;
  partnershipBenefits?: string[];
  pricingModelStatement?: string;
  gettingStartedSteps?: string[];
}

export interface FictionalCaseSnippet {
  fictionalCompanyName: string; // Emphasize fiction
  challenge: string;
  solutionHighlight: string;
  result: string;
}

export interface IndustrySizeROIDetail {
  industrySizeSlug: string;
  drivers: string[];
  potentialFigures: string[];
  factors: string[];
  fictionalCaseSnippet?: FictionalCaseSnippet;
}

// For Industry-specific data within ComprehensiveIndustryData
export interface IndustryServiceBenefit {
  serviceSlug: string;
  benefits: string[];
  caseStudyTeaser?: {
    fictionalClientName: string;
    achievedResult: string;
    caseStudyId?: string;
  };
}

export interface IndustryStat {
  label: string;
  value: string;
  icon?: string;
  source?: string;
}

// New Rich Interface for Industries
export interface ComprehensiveIndustryData {
  name: string;
  slug: string;
  description: string; // Existing, ensure it's part of this new definition
  typicalChallenges?: string[];
  commonGoals?: string[];
  serviceSpecificData?: IndustryServiceBenefit[];
  industryStats?: IndustryStat[];
}

// For Service-specific data within ComprehensiveServiceData
export interface ServiceIndustryHighlight {
  industrySlug: string;
  specificFeatures?: string[];
  commonUseCases?: string[];
}

// For Location-specific data within CityData
export interface LocationIndustryInsight {
  industrySlug: string;
  insights: string[];
  marketTrends?: string[];
  localRegulationsSummary?: string;
}

// New Rich Interface for Cities
export interface CityData {
  name: string;
  slug: string;
  population?: number;
  isMetro?: boolean;
  industries?: string[]; // Refers to slugs of industries prevalent in the city
  tier: 1 | 2 | 3;
  localIndustryInsights?: LocationIndustryInsight[]; // New field
}

export interface ComprehensiveLocationData {
  state: string;
  stateSlug: string;
  cities: CityData[]; // Updated to use CityData interface
}

export const allIndianLocations: ComprehensiveLocationData[] = [
  {
    state: "Maharashtra",
    stateSlug: "maharashtra",
    cities: [
      { name: "Mumbai", slug: "mumbai", population: 12442373, isMetro: true, tier: 1, industries: ["finance", "entertainment", "technology", "manufacturing"] },
      {
        name: "Pune",
        slug: "pune",
        population: 3124458,
        isMetro: true,
        tier: 1,
        industries: ["technology", "automotive", "education", "manufacturing", "healthcare"], // Added "healthcare"
        localIndustryInsights: [
          {
            industrySlug: "healthcare",
            insights: [
              "Pune is a significant hub for medical tourism, particularly for specialized treatments, driving demand for advanced healthcare technology.",
              "The city boasts a strong IT and software development ecosystem, fostering collaborations and innovations in health-tech.",
              "Growing health awareness among Pune's population is increasing demand for preventative care and personalized health solutions."
            ],
            marketTrends: [
              "Rapid adoption of telemedicine and remote patient monitoring solutions.",
              "Increased investment in AI and ML for diagnostics and hospital management.",
              "Emergence of specialized health-tech startups focusing on niche healthcare problems."
            ],
            localRegulationsSummary: "Healthcare providers in Pune must adhere to national standards set by the NMC and state-specific health advisories from Maharashtra Health Dept."
          }
        ]
      },
      { name: "Nagpur", slug: "nagpur", population: 2405421, tier: 1, industries: ["mining", "agriculture", "textiles"] },
      { name: "Nashik", slug: "nashik", population: 1486973, tier: 2, industries: ["wine", "agriculture", "manufacturing"] },
      { name: "Aurangabad", slug: "aurangabad", population: 1175116, tier: 2, industries: ["automotive", "pharmaceuticals", "agriculture"] },
      { name: "Solapur", slug: "solapur", population: 951118, tier: 2, industries: ["textiles", "agriculture", "sugar"] },
      { name: "Thane", slug: "thane", population: 1841488, tier: 2, industries: ["chemicals", "engineering", "textiles"] },
      { name: "Vasai-Virar", slug: "vasai-virar", population: 1221233, tier: 2, industries: ["chemicals", "pharmaceuticals"] },
      { name: "Kalyan-Dombivli", slug: "kalyan-dombivli", population: 1246381, tier: 2, industries: ["chemicals", "engineering"] },
      { name: "Navi Mumbai", slug: "navi-mumbai", population: 1119477, tier: 2, industries: ["technology", "logistics", "pharmaceuticals"] }
    ]
  },
  {
    state: "Karnataka",
    stateSlug: "karnataka",
    cities: [
      { name: "Bangalore", slug: "bangalore", population: 8443675, isMetro: true, tier: 1, industries: ["technology", "aerospace", "biotechnology", "research"] },
      { name: "Mysore", slug: "mysore", population: 920550, tier: 2, industries: ["silk", "sandalwood", "tourism", "education"] },
      { name: "Hubli-Dharwad", slug: "hubli-dharwad", population: 943857, tier: 2, industries: ["cotton", "handloom", "iron ore"] },
      { name: "Mangalore", slug: "mangalore", population: 623841, tier: 2, industries: ["port", "chemicals", "fertilizers"] },
      { name: "Belgaum", slug: "belgaum", population: 610350, tier: 2, industries: ["sugar", "textiles", "machine tools"] },
      { name: "Gulbarga", slug: "gulbarga", population: 532031, tier: 2, industries: ["cement", "sugar", "textiles"] },
      { name: "Davangere", slug: "davangere", population: 435128, tier: 3, industries: ["cotton", "education", "agriculture"] },
      { name: "Bellary", slug: "bellary", population: 410445, tier: 3, industries: ["iron ore", "steel", "mining"] }
    ]
  },
  {
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    cities: [
      { name: "Chennai", slug: "chennai", population: 4681087, isMetro: true, tier: 1, industries: ["automotive", "healthcare", "technology", "port"] },
      { name: "Coimbatore", slug: "coimbatore", population: 1061447, tier: 1, industries: ["textiles", "engineering", "agriculture"] },
      { name: "Madurai", slug: "madurai", population: 1016885, tier: 2, industries: ["textiles", "agriculture", "tourism"] },
      { name: "Tiruchirappalli", slug: "tiruchirappalli", population: 847387, tier: 2, industries: ["engineering", "textiles", "agriculture"] },
      { name: "Salem", slug: "salem", population: 831038, tier: 2, industries: ["steel", "textiles", "agriculture"] },
      { name: "Tirunelveli", slug: "tirunelveli", population: 474838, tier: 3, industries: ["agriculture", "textiles", "chemicals"] },
      { name: "Erode", slug: "erode", population: 498129, tier: 3, industries: ["textiles", "agriculture", "turmeric"] },
      { name: "Vellore", slug: "vellore", population: 423425, tier: 3, industries: ["leather", "agriculture", "education"] }
    ]
  },
  {
    state: "Delhi",
    stateSlug: "delhi",
    cities: [
      { name: "New Delhi", slug: "new-delhi", population: 16787941, isMetro: true, tier: 1, industries: ["government", "technology", "finance", "tourism"] },
      { name: "Noida", slug: "noida", population: 642381, tier: 1, industries: ["technology", "media", "manufacturing"] },
      { name: "Ghaziabad", slug: "ghaziabad", population: 1729000, tier: 1, industries: ["engineering", "chemicals", "textiles"] },
      { name: "Faridabad", slug: "faridabad", population: 1404653, tier: 1, industries: ["automotive", "engineering", "textiles"] },
      { name: "Gurgaon", slug: "gurgaon", population: 876969, tier: 1, industries: ["technology", "finance", "automotive"] }
    ]
  },
  {
    state: "Gujarat",
    stateSlug: "gujarat",
    cities: [
      { name: "Ahmedabad", slug: "ahmedabad", population: 5633927, isMetro: true, tier: 1, industries: ["textiles", "chemicals", "pharmaceuticals", "engineering"] },
      { name: "Surat", slug: "surat", population: 4467797, tier: 1, industries: ["diamonds", "textiles", "chemicals"] },
      { name: "Vadodara", slug: "vadodara", population: 1670806, tier: 1, industries: ["petrochemicals", "engineering", "pharmaceuticals"] },
      { name: "Rajkot", slug: "rajkot", population: 1390933, tier: 2, industries: ["engineering", "chemicals", "software"] },
      { name: "Bhavnagar", slug: "bhavnagar", population: 605882, tier: 2, industries: ["chemicals", "salt", "cotton"] },
      { name: "Jamnagar", slug: "jamnagar", population: 600943, tier: 2, industries: ["petrochemicals", "brass", "bandhani"] },
      { name: "Junagadh", slug: "junagadh", population: 320250, tier: 3, industries: ["agriculture", "cement", "chemicals"] },
      { name: "Gandhinagar", slug: "gandhinagar", population: 292797, tier: 3, industries: ["government", "pharmaceuticals", "chemicals"] }
    ]
  },
  {
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    cities: [
      { name: "Lucknow", slug: "lucknow", population: 2817105, isMetro: true, tier: 1, industries: ["government", "handicrafts", "technology", "agriculture"] },
      { name: "Kanpur", slug: "kanpur", population: 2767031, tier: 1, industries: ["leather", "textiles", "chemicals"] },
      { name: "Agra", slug: "agra", population: 1585704, tier: 1, industries: ["tourism", "leather", "handicrafts"] },
      { name: "Varanasi", slug: "varanasi", population: 1201815, tier: 2, industries: ["tourism", "textiles", "handicrafts"] },
      { name: "Meerut", slug: "meerut", population: 1305429, tier: 2, industries: ["sports goods", "scissors", "agriculture"] },
      { name: "Allahabad", slug: "allahabad", population: 1117094, tier: 2, industries: ["education", "government", "agriculture"] },
      { name: "Bareilly", slug: "bareilly", population: 903668, tier: 2, industries: ["furniture", "agriculture", "trading"] },
      { name: "Moradabad", slug: "moradabad", population: 889810, tier: 2, industries: ["brass", "handicrafts", "agriculture"] },
      { name: "Aligarh", slug: "aligarh", population: 874408, tier: 2, industries: ["locks", "education", "agriculture"] },
      { name: "Gorakhpur", slug: "gorakhpur", population: 673446, tier: 3, industries: ["fertilizers", "railways", "agriculture"] }
    ]
  },
  {
    state: "West Bengal",
    stateSlug: "west-bengal",
    cities: [
      { name: "Kolkata", slug: "kolkata", population: 4496694, isMetro: true, tier: 1, industries: ["jute", "engineering", "technology", "finance"] },
      { name: "Howrah", slug: "howrah", population: 1072161, tier: 2, industries: ["engineering", "jute", "chemicals"] },
      { name: "Durgapur", slug: "durgapur", population: 581409, tier: 2, industries: ["steel", "coal", "engineering"] },
      { name: "Asansol", slug: "asansol", population: 563917, tier: 2, industries: ["coal", "steel", "railways"] },
      { name: "Siliguri", slug: "siliguri", population: 513264, tier: 3, industries: ["tea", "tourism", "trade"] }
    ]
  },
  {
    state: "Rajasthan",
    stateSlug: "rajasthan",
    cities: [
      { name: "Jaipur", slug: "jaipur", population: 3046163, isMetro: true, tier: 1, industries: ["tourism", "textiles", "gems", "handicrafts"] },
      { name: "Jodhpur", slug: "jodhpur", population: 1033756, tier: 2, industries: ["handicrafts", "tourism", "agriculture"] },
      { name: "Udaipur", slug: "udaipur", population: 451735, tier: 2, industries: ["tourism", "mining", "agriculture"] },
      { name: "Kota", slug: "kota", population: 1001365, tier: 2, industries: ["education", "chemicals", "textiles"] },
      { name: "Bikaner", slug: "bikaner", population: 644406, tier: 3, industries: ["agriculture", "handicrafts", "tourism"] },
      { name: "Ajmer", slug: "ajmer", population: 551101, tier: 3, industries: ["tourism", "agriculture", "handicrafts"] },
      { name: "Bhilwara", slug: "bhilwara", population: 360009, tier: 3, industries: ["textiles", "zinc", "agriculture"] }
    ]
  },
  {
    state: "Telangana",
    stateSlug: "telangana",
    cities: [
      { name: "Hyderabad", slug: "hyderabad", population: 6809970, isMetro: true, tier: 1, industries: ["technology", "pharmaceuticals", "biotechnology", "aerospace"] },
      { name: "Warangal", slug: "warangal", population: 704570, tier: 2, industries: ["agriculture", "handloom", "education"] },
      { name: "Nizamabad", slug: "nizamabad", population: 311152, tier: 3, industries: ["agriculture", "turmeric", "rice"] },
      { name: "Karimnagar", slug: "karimnagar", population: 297447, tier: 3, industries: ["agriculture", "granite", "textiles"] }
    ]
  },
  {
    state: "Andhra Pradesh",
    stateSlug: "andhra-pradesh",
    cities: [
      { name: "Visakhapatnam", slug: "visakhapatnam", population: 1730320, tier: 1, industries: ["port", "steel", "petrochemicals", "pharmaceuticals"] },
      { name: "Vijayawada", slug: "vijayawada", population: 1048240, tier: 2, industries: ["agriculture", "textiles", "auto components"] },
      { name: "Guntur", slug: "guntur", population: 743354, tier: 2, industries: ["agriculture", "textiles", "tobacco"] },
      { name: "Nellore", slug: "nellore", population: 505258, tier: 3, industries: ["agriculture", "aquaculture", "mining"] },
      { name: "Kurnool", slug: "kurnool", population: 484327, tier: 3, industries: ["cement", "agriculture", "textiles"] },
      { name: "Rajahmundry", slug: "rajahmundry", population: 341831, tier: 3, industries: ["paper", "oil", "agriculture"] }
    ]
  }
];

export const comprehensiveServices: ComprehensiveServiceData[] = [
  {
    name: "Digital Marketing Services",
    slug: "digital-marketing",
    description: "Comprehensive digital marketing solutions for business growth",
    keywords: ["digital marketing", "online marketing", "internet marketing", "digital advertising"],
    subServices: [
      { name: "SEO Services", slug: "seo-services" },
      { name: "PPC Advertising", slug: "ppc-advertising" },
      { name: "Social Media Marketing", slug: "social-media-marketing" },
      { name: "Content Marketing", slug: "content-marketing" },
      { name: "Google Ads Management", slug: "google-ads-management" },
      { name: "Facebook Advertising", slug: "facebook-advertising" },
      { name: "Instagram Marketing", slug: "instagram-marketing" },
      { name: "LinkedIn Marketing", slug: "linkedin-marketing" },
      { name: "YouTube Marketing", slug: "youtube-marketing" }
    ],
    hireUsFocusedData: {
      heroTitleTemplate: "Partner with God Digital Marketing for Expert {serviceName} in {cityName}",
      heroSubtitleTemplate: "Drive growth and achieve measurable results with God Digital Marketing, the leading {serviceName} agency dedicated to {cityName} businesses.",
      whyHireOurAgencyPoints: [
        "**Proven Results in {cityName}**: We have a track record of delivering tangible outcomes for businesses in your local market.",
        "**Certified & Experienced Team**: Our specialists are certified and bring years of experience to your campaigns.",
        "**Data-Driven Strategies**: We leverage advanced analytics for transparent, ROI-focused digital marketing.",
        "**Customized Solutions**: No one-size-fits-all. We tailor every strategy to your unique business needs in {cityName}.",
        "**Transparent Communication**: Expect regular updates and clear reporting on your campaign performance."
      ],
      ourApproachSummary: "Our approach to {serviceName} in {cityName} begins with a deep dive into your business, local audience, and objectives. We then craft a comprehensive, multi-channel strategy, often integrating SEO, content marketing, PPC, and social media, to maximize your online presence and drive qualified leads. We believe in a collaborative partnership, working closely with you to adapt and optimize for continuous improvement and success in the {cityName} market.",
      partnershipBenefits: [
        "A dedicated account manager focused on your {cityName} success.",
        "Access to our full suite of premium marketing tools and software.",
        "Proactive insights and recommendations to keep you ahead of competitors in {cityName}.",
        "Flexible engagement models designed to suit your business size and specific goals."
      ],
      pricingModelStatement: "We offer transparent, customized pricing for our {serviceName} in {cityName}, tailored to your specific needs and budget. Contact us today for a detailed proposal with no hidden fees.",
      gettingStartedSteps: [
        "1. **Free Initial Consultation**: Let's discuss your {cityName} business goals and digital marketing needs.",
        "2. **Strategy Proposal**: We'll present a tailored {serviceName} plan designed for your success.",
        "3. **Campaign Launch & Execution**: Our experts implement your strategy with precision.",
        "4. **Ongoing Optimization & Reporting**: We continuously refine campaigns, providing clear reports on performance in the {cityName} market."
      ]
    }
  },
  {
    name: "AI Automation Services",
    slug: "ai-automation",
    description: "Advanced AI-powered business automation solutions",
    keywords: ["ai automation", "artificial intelligence", "machine learning", "business automation"],
    subServices: [
      { name: "Marketing Automation", slug: "marketing-automation" },
      { name: "Chatbot Development", slug: "chatbot-development" },
      { name: "CRM Automation", slug: "crm-automation" },
      { name: "Email Automation", slug: "email-automation" },
      { name: "Lead Scoring Automation", slug: "lead-scoring-automation" },
      { name: "Customer Service Automation", slug: "customer-service-automation" },
      { name: "Sales Process Automation", slug: "sales-process-automation" },
      { name: "Workflow Automation", slug: "workflow-automation" },
      { name: "AI Analytics", slug: "ai-analytics" }
    ],
    industryHighlights: [
      {
        industrySlug: "healthcare",
        specificFeatures: [
          "HIPAA-compliant AI modules and data handling.",
          "Secure integration capabilities with existing EHR/EMR systems.",
          "Natural Language Processing (NLP) for analyzing clinical notes and patient feedback.",
          "Computer vision capabilities for medical image analysis (e.g., X-rays, MRIs)."
        ],
        commonUseCases: [
          "AI-assisted medical image interpretation.",
          "Predictive analytics for patient risk stratification and proactive care.",
          "Automated medical coding and billing processes.",
          "AI-driven drug discovery and development research.",
          "Intelligent virtual health assistants and chatbots."
        ]
      }
    ],
    costInformation: { // Ensure existing costInformation is preserved
      generalFactors: [
        "Complexity of existing systems for integration",
        "Volume of data to be processed",
        "Number of processes to be automated",
        "Level of customization required",
        "Need for ongoing AI model training and maintenance"
      ],
      businessTypeSpecificCosts: [
        {
          businessTypeSlug: "small-business",
          factors: [
            "Automating 1-2 core processes (e.g., customer support FAQs, email categorization).",
            "Integration with 1-2 existing tools.",
            "Basic AI model setup, minimal customization."
          ],
          costTiers: [
            { name: "Starter AI Toolkit", range: "$300 - $800 / month", features: ["Chatbot for FAQs (up to 50 intents)", "Email sorting (up to 2 rules)", "Basic analytics dashboard"] },
            { name: "Growth AI Suite", range: "$800 - $2,000 / month", features: ["Custom chatbot flows (up to 150 intents)", "Automated social media responses", "Lead qualification bot", "Advanced analytics"] }
          ],
          roiNotes: "Focuses on time-saving for repetitive tasks and improving customer response times."
        },
        {
          businessTypeSlug: "ecommerce-store",
          factors: [
            "AI for product recommendations and personalization.",
            "Inventory management and demand forecasting AI.",
            "Automated customer service for order tracking and returns.",
            "Fraud detection algorithms."
          ],
          costTiers: [
            { name: "E-com AI Essentials", range: "$700 - $2,500 / month", features: ["Personalized product recommendations (up to 10k users)", "Basic inventory alerts", "Chatbot for order status"] },
            { name: "E-com AI Pro", range: "$2,500 - $7,000 / month", features: ["Advanced recommendation engine", "Dynamic pricing suggestions", "AI-powered search", "Automated abandoned cart recovery emails"] }
          ],
          roiNotes: "Aims to increase average order value, reduce cart abandonment, and optimize stock levels."
        },
        {
          businessTypeSlug: "startup",
          factors: [
            "Scalable AI infrastructure for rapid growth.",
            "AI for market analysis and customer segmentation.",
            "Automating lean operational processes.",
            "Often requires flexible, phased implementation."
          ],
          costTiers: [
            { name: "Lean AI Launchpad", range: "$500 - $1,800 / month", features: ["AI-driven competitor analysis tool", "Automated customer feedback analysis", "Core process automation (1 process)"] },
            { name: "Scale-up AI Engine", range: "$1,800 - $6,000 / month", features: ["Predictive analytics for user behavior", "AI for A/B testing website/app changes", "Scalable chatbot infrastructure", "Multiple process automations"] }
          ],
          roiNotes: "Geared towards achieving product-market fit faster, data-driven decision making, and efficient scaling."
        }
      ]
    }
  },
  {
    name: "Business Automation Services",
    slug: "business-automation",
    description: "Complete business process automation solutions",
    keywords: ["business automation", "process automation", "workflow optimization", "operational efficiency"],
    subServices: [
      { name: "Process Automation", slug: "process-automation" },
      { name: "Document Automation", slug: "document-automation" },
      { name: "Inventory Management Automation", slug: "inventory-management-automation" },
      { name: "HR Automation", slug: "hr-automation" },
      { name: "Accounting Automation", slug: "accounting-automation" },
      { name: "Customer Onboarding Automation", slug: "customer-onboarding-automation" },
      { name: "Reporting Automation", slug: "reporting-automation" },
      { name: "Compliance Automation", slug: "compliance-automation" }
    ]
  },
  {
    name: "Lead Generation Services",
    slug: "lead-generation",
    description: "Proven lead generation strategies for business growth",
    keywords: ["lead generation", "prospect generation", "customer acquisition", "sales leads"],
    subServices: [
      { name: "B2B Lead Generation", slug: "b2b-lead-generation" },
      { name: "B2C Lead Generation", slug: "b2c-lead-generation" },
      { name: "Qualified Lead Generation", slug: "qualified-lead-generation" },
      { name: "Cold Email Campaigns", slug: "cold-email-campaigns" },
      { name: "Telemarketing Services", slug: "telemarketing-services" },
      { name: "LinkedIn Lead Generation", slug: "linkedin-lead-generation" },
      { name: "Landing Page Optimization", slug: "landing-page-optimization" },
      { name: "Conversion Rate Optimization", slug: "conversion-rate-optimization" }
    ]
  },
  {
    name: "Email Marketing Services",
    slug: "email-marketing",
    description: "Targeted email marketing campaigns for customer engagement",
    keywords: ["email marketing", "email campaigns", "email automation", "newsletter marketing"],
    subServices: []
  },
  {
    name: "Social Media Management",
    slug: "social-media-management",
    description: "Professional social media marketing and management",
    keywords: ["social media marketing", "social media management", "social media advertising"],
    subServices: []
  },
  {
    name: "Online Reputation Management",
    slug: "online-reputation-management",
    description: "Protect and enhance your online brand reputation",
    keywords: ["reputation management", "online reputation", "brand management"],
    subServices: []
  },
  {
    name: "Web Design Development",
    slug: "web-design-development",
    description: "Professional website design and development services",
    keywords: ["web design", "website development", "web development"],
    subServices: []
  },
  {
    name: "E-commerce Marketing",
    slug: "ecommerce-marketing",
    description: "Specialized marketing for e-commerce businesses",
    keywords: ["ecommerce marketing", "online store marketing", "ecommerce seo"],
    subServices: []
  },
  {
    name: "Mobile App Marketing",
    slug: "mobile-app-marketing",
    description: "Marketing strategies for mobile applications",
    keywords: ["app marketing", "mobile marketing", "app store optimization"],
    subServices: []
  },
  {
    name: "Video Marketing",
    slug: "video-marketing",
    description: "Video content marketing and promotion services",
    keywords: ["video marketing", "video content", "video advertising"],
    subServices: []
  },
  {
    name: "Affiliate Marketing",
    slug: "affiliate-marketing",
    description: "Performance-based affiliate marketing programs",
    keywords: ["affiliate marketing", "performance marketing", "affiliate programs"],
    subServices: []
  },
  {
    name: "Marketing Automation",
    slug: "marketing-automation",
    description: "Streamline, automate, and measure marketing tasks and workflows to grow revenue and improve efficiency.",
    keywords: ["marketing automation", "automated email marketing", "lead nurturing", "crm integration", "customer journey mapping"],
    subServices: [
      { name: "Email Automation Strategy", slug: "email-automation-strategy" }, // Changed slug for clarity
      { name: "Lead Scoring Systems Design", slug: "lead-scoring-systems-design" }, // Changed slug
      { name: "Automated Customer Journey Builder", slug: "automated-customer-journey-builder" } // Changed slug
    ],
    roiInformation: {
      industrySizeSpecificROI: [
        {
          industrySizeSlug: "small",
          drivers: ["Automate repetitive email tasks", "Improve lead capture from website", "Basic lead segmentation & follow-up", "Track campaign performance simply"],
          potentialFigures: ["Save 5-10 hours per week on marketing tasks", "Increase website lead conversion by 10-15%", "Grow email engagement by 20%"],
          factors: ["Ease of use of the platform", "Limited budget for advanced features", "Need for simple integration with existing tools (e.g., website forms)", "Availability of learning resources"],
          fictionalCaseSnippet: {
            fictionalCompanyName: "GreenSprout Landscaping (Fictional)",
            challenge: "Manually sending monthly newsletters and struggling to follow up on website inquiries consistently.",
            solutionHighlight: "Implemented a basic marketing automation tool for automated welcome emails, monthly newsletter dispatch, and lead capture forms with auto-responders.",
            result: "Reduced newsletter preparation time by 70% and saw a 25% increase in inquiries converting to consultations."
          }
        },
        {
          industrySizeSlug: "medium",
          drivers: ["Advanced lead nurturing workflows", "Dynamic content personalization", "Automated A/B testing of campaigns", "Integration with CRM for sales alignment", "More sophisticated analytics and reporting"],
          potentialFigures: ["Improve marketing qualified lead (MQL) to sales qualified lead (SQL) conversion by 20-30%", "Increase average deal size by 10% through better nurturing", "Reduce churn by 15% with targeted post-sale communication"],
          factors: ["Scalability of the automation platform", "Complexity of integration with multiple business systems", "Team skills for creating and managing complex campaigns", "Data hygiene and CRM data quality"],
          fictionalCaseSnippet: {
            fictionalCompanyName: "FlexiComponents Manufacturing (Fictional)",
            challenge: "Sales team overwhelmed with unqualified leads and marketing struggled to demonstrate direct revenue impact.",
            solutionHighlight: "Deployed marketing automation integrated with their CRM, featuring automated lead scoring, multi-touch nurture campaigns, and personalized email content based on behavior.",
            result: "Generated 40% more SQLs, shortened the average sales cycle by 18%, and attributed 22% of new revenue directly to automated campaigns within the first year."
          }
        },
        {
          industrySizeSlug: "large",
          drivers: ["Multi-channel campaign orchestration (email, social, SMS, web)", "Predictive analytics for lead scoring and churn", "Account-Based Marketing (ABM) automation at scale", "Full lifecycle customer journey management", "Compliance and governance automation"],
          potentialFigures: ["Increase marketing contribution to pipeline by over 50%", "Improve customer lifetime value (CLTV) by 20-25%", "Achieve near real-time personalization across all touchpoints", "Reduce marketing operational costs by 15-20% through efficiency"],
          factors: ["Ability to handle massive data volumes and user bases", "Customization capabilities to fit complex organizational structures", "Global deployment and multi-language support", "Advanced security and data governance features", "Change management across large teams"],
          fictionalCaseSnippet: {
            fictionalCompanyName: "GlobalEduConnect (Fictional)",
            challenge: "Managing diverse marketing efforts across multiple countries with inconsistent branding and poor lead handoff to regional sales teams.",
            solutionHighlight: "Implemented an enterprise-grade marketing automation platform, standardizing global campaigns, enabling localized personalization, and automating lead routing with strict SLAs.",
            result: "Improved global campaign deployment speed by 4x, increased lead quality scores by an average of 35%, and saw a 15% uplift in cross-sell/upsell revenue from existing customers."
          }
        }
      ]
    }
  },
  pricingPageDetails: {
    introduction: "Our Marketing Automation solutions for {cityName} businesses are designed to fit your specific needs and budget, helping you streamline workflows, nurture leads, and drive growth. Explore our transparent pricing options below or contact us for a custom quote.",
    pricingTiers: [
      {
        tierName: "MA Starter Suite",
        price: "Starting at $299/month (billed annually) for {cityName} clients",
        features: [
          "Basic Email Marketing Automation (up to 2,000 contacts)",
          "Lead Capture Forms & Landing Pages (up to 5)",
          "Simple Lead Scoring",
          "Standard Reporting Dashboard",
          "CRM Integration (Basic)"
        ],
        suitableFor: "Small businesses in {cityName} looking to automate core marketing tasks and nurture leads effectively.",
        tierCTA_text: "Choose Starter",
        tierCTA_link: "/contact-us?service=marketing-automation&tier=starter&city={cityNameEncoded}"
      },
      {
        tierName: "MA Growth Engine",
        price: "Starting at $799/month (billed annually) for {cityName} clients",
        features: [
          "Advanced Email Marketing & Nurturing Workflows (up to 10,000 contacts)",
          "Dynamic Content Personalization",
          "Advanced Lead Scoring & Segmentation",
          "Customizable Reporting & Analytics",
          "CRM Integration (Advanced, Bi-directional)",
          "A/B Testing for Emails & Landing Pages",
          "Social Media Automation (Basic)"
        ],
        suitableFor: "Medium-sized businesses in {cityName} aiming to scale their marketing efforts and improve conversion rates.",
        tierCTA_text: "Choose Growth",
        tierCTA_link: "/contact-us?service=marketing-automation&tier=growth&city={cityNameEncoded}",
        highlight: true
      },
      {
        tierName: "MA Enterprise OS",
        price: "Custom Quote for {cityName} Enterprises",
        features: [
          "Full Multi-Channel Automation (Email, SMS, Social, Web)",
          "Predictive Lead Scoring & AI Insights",
          "Account-Based Marketing (ABM) Features",
          "Dedicated Account Manager & Priority Support",
          "Full API Access & Custom Integrations",
          "Advanced Attribution Modeling",
          "Compliance & Governance Tools"
        ],
        suitableFor: "Large businesses and enterprises in {cityName} requiring a comprehensive, scalable, and highly customized marketing automation platform.",
        tierCTA_text: "Request Custom Quote",
        tierCTA_link: "/contact-us?service=marketing-automation&tier=enterprise&city={cityNameEncoded}"
      }
    ],
    generalPricingFactors: [
      "Number of contacts and email send volume.",
      "Complexity of automation workflows and campaign logic.",
      "Level of customization and integration required with existing systems.",
      "Number of users needing access to the platform.",
      "Specific advanced features utilized (e.g., predictive AI, ABM).",
      "Data migration and onboarding support for your {cityName} team."
    ],
    customQuoteStatement: "For businesses in {cityName} with unique requirements or higher volumes, we offer custom Marketing Automation packages. Contact us for a personalized quote that aligns perfectly with your strategic objectives.",
    faq: [
      {
        question: "How does Marketing Automation pricing typically work for {cityName} businesses?",
        answer: "Pricing is usually based on the number of contacts in your database, the volume of emails sent, and the feature set you require. We offer tiered packages and custom solutions to fit various {cityName} business needs and budgets."
      },
      {
        question: "Can I upgrade my Marketing Automation plan as my {cityName} business grows?",
        answer: "Absolutely! Our Marketing Automation plans are designed to be scalable. You can easily upgrade to a higher tier or add specific features as your {cityName} business expands and your needs evolve."
      },
      {
        question: "What kind of support is included with the Marketing Automation services in {cityName}?",
        answer: "All our plans include standard support. Higher-tier plans for {cityName} clients often come with a dedicated account manager, priority support, and personalized onboarding to ensure you maximize the platform's potential."
      }
    ]
  }
}];

export const comprehensiveIndustries: ComprehensiveIndustryData[] = [
  {
    name: "Healthcare",
    slug: "healthcare",
    description: "The healthcare industry encompasses hospitals, clinics, pharmaceutical companies, medical device manufacturers, and telehealth services, all focused on maintaining and improving patient health.",
    typicalChallenges: [
      "Ensuring HIPAA compliance with new technology adoption",
      "Managing and securing large volumes of sensitive patient data",
      "Improving patient experience and engagement in a scalable way",
      "Reducing physician burnout from administrative tasks",
      "Interoperability between disparate health IT systems",
      "Keeping up with rapid medical advancements and research"
    ],
    commonGoals: [
      "Enhance diagnostic accuracy and speed",
      "Streamline administrative and clinical workflows",
      "Personalize patient care pathways effectively",
      "Improve operational efficiency and reduce costs",
      "Increase patient access to care through digital channels",
      "Facilitate preventative care and wellness programs"
    ],
    serviceSpecificData: [
      {
        serviceSlug: "ai-automation",
        benefits: [
          "AI-powered diagnostic assistance tools for faster, more accurate analysis.",
          "Automated patient scheduling, reminders, and follow-up communication.",
          "Personalized treatment plan adjustments based on real-time patient data.",
          "Intelligent automation of billing and claims processing.",
          "Predictive analytics for identifying at-risk patients and optimizing resource allocation."
        ],
        caseStudyTeaser: {
          fictionalClientName: "MediCare Pune Hospital (Fictional)",
          achievedResult: "Reduced patient wait times by 30% using AI scheduling.",
          caseStudyId: "healthcare-ai-automation-pune-patient-engagement"
        }
      },
      {
        serviceSlug: "digital-marketing", // Example for another service
        benefits: [
          "Targeted patient acquisition through ethical online campaigns.",
          "Enhanced online reputation and patient trust.",
          "Educational content marketing to inform and engage patients.",
          "Improved visibility for specialized medical services."
        ]
      }
    ],
    industryStats: [
      { label: "Global AI in Healthcare Market Size (2023 Est.)", value: "$20.9 Billion", icon: "DollarSign", source: "Various Market Reports" },
      { label: "Expected CAGR of AI in Healthcare (2024-2030)", value: "37.5%", icon: "TrendingUp", source: "Various Market Reports" },
      { label: "Improvement in Diagnostic Accuracy with AI (Select Studies)", value: "Up to 20%", icon: "CheckCircle", source: "Academic Publications" },
      { label: "Telemedicine Adoption Increase Since 2020", value: "Over 50x", icon: "Users", source: "Industry Surveys"}
    ]
  },
  { name: "Real Estate", slug: "real-estate", description: "Marketing solutions for real estate businesses" }, // Ensure other industries also conform or are updated later
  { name: "E-commerce", slug: "ecommerce", description: "Specialized marketing for online stores" },
  { name: "Education", slug: "education", description: "Marketing for educational institutions" },
  { name: "Manufacturing", slug: "manufacturing", description: "Industrial marketing solutions" },
  { name: "Financial Services", slug: "financial-services", description: "Marketing for financial companies" },
  { name: "Hospitality", slug: "hospitality", description: "Tourism and hospitality marketing" },
  { name: "Technology", slug: "technology", description: "Tech industry marketing solutions" },
  { name: "Retail", slug: "retail", description: "Retail business marketing strategies" },
  { name: "Automotive", slug: "automotive", description: "Automotive industry marketing" },
  { name: "Food & Beverage", slug: "food-beverage", description: "F&B industry marketing" },
  { name: "Fashion", slug: "fashion", description: "Fashion industry marketing" },
  { name: "Legal Services", slug: "legal-services", description: "Marketing for law firms" },
  { name: "Fitness & Wellness", slug: "fitness-wellness", description: "Health and fitness marketing" },
  { name: "Beauty & Cosmetics", slug: "beauty-cosmetics", description: "Beauty industry marketing" }
];

export interface ComprehensiveBusinessType {
  name: string;
  slug: string;
  description?: string;
}

export const comprehensiveBusinessTypes: ComprehensiveBusinessType[] = [
  {
    name: "Small Business",
    slug: "small-business",
    description: "Businesses with a smaller workforce and revenue, often owner-operated."
  },
  {
    name: "Medium Business",
    slug: "medium-business",
    description: "Businesses with a moderate workforce and revenue, typically expanding their operations."
  },
  {
    name: "Large Enterprise",
    slug: "large-enterprise",
    description: "Well-established businesses with a large workforce, significant revenue, and often complex operations."
  },
  {
    name: "Startup",
    slug: "startup",
    description: "Newly established businesses, typically innovative and aiming for rapid growth."
  },
  {
    name: "E-commerce Store",
    slug: "ecommerce-store",
    description: "Businesses that primarily sell products or services online."
  },
  {
    name: "Local Shop",
    slug: "local-shop",
    description: "Brick-and-mortar businesses serving a specific geographic area."
  },
  {
    name: "SaaS Company",
    slug: "saas-company",
    description: "Businesses that provide software as a service, typically on a subscription basis."
  },
  {
    name: "Service Provider",
    slug: "service-provider",
    description: "Businesses that offer professional services to clients."
  },
  {
    name: "Non-Profit Organization",
    slug: "non-profit",
    description: "Organizations that operate for a social cause, not for profit."
  },
  {
    name: "Manufacturing Firm",
    slug: "manufacturing-firm",
    description: "Businesses involved in the production of goods."
  },
  {
    name: "Real Estate Agency",
    slug: "real-estate-agency",
    description: "Businesses that assist clients in buying, selling, or renting properties."
  },
  {
    name: "Healthcare Clinic",
    slug: "healthcare-clinic",
    description: "Medical facilities providing outpatient care."
  },
  {
    name: "Educational Institution",
    slug: "educational-institution",
    description: "Organizations providing learning and education services."
  },
  {
    name: "Restaurant / Cafe",
    slug: "restaurant-cafe",
    description: "Businesses that prepare and serve food and beverages to customers."
  },
  {
    name: "Travel Agency",
    slug: "travel-agency",
    description: "Businesses that help people plan and book travel arrangements."
  }
];
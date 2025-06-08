// Comprehensive location data for all Indian states and cities
export interface ComprehensiveLocationData {
  state: string;
  stateSlug: string;
  cities: Array<{
    name: string;
    slug: string;
    population?: number;
    isMetro?: boolean;
    industries?: string[];
    tier: 1 | 2 | 3;
  }>;
}

export const allIndianLocations: ComprehensiveLocationData[] = [
  {
    state: "Maharashtra",
    stateSlug: "maharashtra",
    cities: [
      { name: "Mumbai", slug: "mumbai", population: 12442373, isMetro: true, tier: 1, industries: ["finance", "entertainment", "technology", "manufacturing"] },
      { name: "Pune", slug: "pune", population: 3124458, isMetro: true, tier: 1, industries: ["technology", "automotive", "education", "manufacturing"] },
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

export const comprehensiveServices = [
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
    ]
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
    ]
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
  }
];

export const comprehensiveIndustries = [
  { name: "Healthcare", slug: "healthcare", description: "Digital marketing for healthcare providers" },
  { name: "Real Estate", slug: "real-estate", description: "Marketing solutions for real estate businesses" },
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
// Comprehensive location data for all Indian states and major cities
export interface LocationData {
  state: string;
  stateSlug: string;
  cities: Array<{
    name: string;
    slug: string;
    population?: number;
    isMetro?: boolean;
    industries?: string[];
  }>;
}

export const indianLocations: LocationData[] = [
  {
    state: "Maharashtra",
    stateSlug: "maharashtra",
    cities: [
      { name: "Mumbai", slug: "mumbai", population: 12442373, isMetro: true, industries: ["finance", "entertainment", "technology", "manufacturing"] },
      { name: "Pune", slug: "pune", population: 3124458, isMetro: true, industries: ["technology", "automotive", "education", "manufacturing"] },
      { name: "Nagpur", slug: "nagpur", population: 2405421, industries: ["mining", "agriculture", "textiles"] },
      { name: "Nashik", slug: "nashik", population: 1486973, industries: ["wine", "agriculture", "manufacturing"] },
      { name: "Aurangabad", slug: "aurangabad", population: 1175116, industries: ["automotive", "pharmaceuticals", "agriculture"] },
      { name: "Solapur", slug: "solapur", population: 951118, industries: ["textiles", "agriculture", "sugar"] },
      { name: "Thane", slug: "thane", population: 1841488, industries: ["chemicals", "engineering", "textiles"] },
      { name: "Kolhapur", slug: "kolhapur", population: 549236, industries: ["sugar", "textiles", "engineering"] }
    ]
  },
  {
    state: "Karnataka",
    stateSlug: "karnataka",
    cities: [
      { name: "Bangalore", slug: "bangalore", population: 8443675, isMetro: true, industries: ["technology", "aerospace", "biotechnology", "research"] },
      { name: "Mysore", slug: "mysore", population: 920550, industries: ["silk", "sandalwood", "tourism", "education"] },
      { name: "Hubli", slug: "hubli", population: 943857, industries: ["cotton", "handloom", "iron ore"] },
      { name: "Mangalore", slug: "mangalore", population: 623841, industries: ["port", "chemicals", "fertilizers"] },
      { name: "Belgaum", slug: "belgaum", population: 610350, industries: ["sugar", "textiles", "machine tools"] },
      { name: "Gulbarga", slug: "gulbarga", population: 532031, industries: ["cement", "sugar", "textiles"] },
      { name: "Davangere", slug: "davangere", population: 435128, industries: ["cotton", "education", "agriculture"] }
    ]
  },
  {
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    cities: [
      { name: "Chennai", slug: "chennai", population: 4681087, isMetro: true, industries: ["automotive", "healthcare", "technology", "port"] },
      { name: "Coimbatore", slug: "coimbatore", population: 1061447, industries: ["textiles", "engineering", "agriculture"] },
      { name: "Madurai", slug: "madurai", population: 1016885, industries: ["textiles", "agriculture", "tourism"] },
      { name: "Tiruchirappalli", slug: "tiruchirappalli", population: 847387, industries: ["engineering", "textiles", "agriculture"] },
      { name: "Salem", slug: "salem", population: 831038, industries: ["steel", "textiles", "agriculture"] },
      { name: "Tirunelveli", slug: "tirunelveli", population: 474838, industries: ["agriculture", "textiles", "chemicals"] },
      { name: "Vellore", slug: "vellore", population: 423425, industries: ["leather", "agriculture", "education"] }
    ]
  },
  {
    state: "Delhi",
    stateSlug: "delhi",
    cities: [
      { name: "New Delhi", slug: "new-delhi", population: 16787941, isMetro: true, industries: ["government", "technology", "finance", "tourism"] },
      { name: "Delhi", slug: "delhi", population: 16787941, isMetro: true, industries: ["government", "technology", "finance", "manufacturing"] }
    ]
  },
  {
    state: "Gujarat",
    stateSlug: "gujarat",
    cities: [
      { name: "Ahmedabad", slug: "ahmedabad", population: 5633927, isMetro: true, industries: ["textiles", "chemicals", "pharmaceuticals", "engineering"] },
      { name: "Surat", slug: "surat", population: 4467797, industries: ["diamonds", "textiles", "chemicals"] },
      { name: "Vadodara", slug: "vadodara", population: 1670806, industries: ["petrochemicals", "engineering", "pharmaceuticals"] },
      { name: "Rajkot", slug: "rajkot", population: 1390933, industries: ["engineering", "chemicals", "software"] },
      { name: "Bhavnagar", slug: "bhavnagar", population: 605882, industries: ["chemicals", "salt", "cotton"] },
      { name: "Jamnagar", slug: "jamnagar", population: 600943, industries: ["petrochemicals", "brass", "bandhani"] }
    ]
  },
  {
    state: "West Bengal",
    stateSlug: "west-bengal",
    cities: [
      { name: "Kolkata", slug: "kolkata", population: 4496694, isMetro: true, industries: ["jute", "engineering", "technology", "finance"] },
      { name: "Howrah", slug: "howrah", population: 1072161, industries: ["engineering", "jute", "chemicals"] },
      { name: "Durgapur", slug: "durgapur", population: 581409, industries: ["steel", "coal", "engineering"] },
      { name: "Asansol", slug: "asansol", population: 563917, industries: ["coal", "steel", "railways"] },
      { name: "Siliguri", slug: "siliguri", population: 513264, industries: ["tea", "tourism", "trade"] }
    ]
  },
  {
    state: "Rajasthan",
    stateSlug: "rajasthan",
    cities: [
      { name: "Jaipur", slug: "jaipur", population: 3046163, isMetro: true, industries: ["tourism", "textiles", "gems", "handicrafts"] },
      { name: "Jodhpur", slug: "jodhpur", population: 1033756, industries: ["handicrafts", "tourism", "agriculture"] },
      { name: "Udaipur", slug: "udaipur", population: 451735, industries: ["tourism", "mining", "agriculture"] },
      { name: "Kota", slug: "kota", population: 1001365, industries: ["education", "chemicals", "textiles"] },
      { name: "Bikaner", slug: "bikaner", population: 644406, industries: ["agriculture", "handicrafts", "tourism"] },
      { name: "Ajmer", slug: "ajmer", population: 551101, industries: ["tourism", "agriculture", "handicrafts"] }
    ]
  },
  {
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    cities: [
      { name: "Lucknow", slug: "lucknow", population: 2817105, isMetro: true, industries: ["government", "handicrafts", "technology", "agriculture"] },
      { name: "Kanpur", slug: "kanpur", population: 2767031, industries: ["leather", "textiles", "chemicals"] },
      { name: "Ghaziabad", slug: "ghaziabad", population: 1729000, industries: ["engineering", "chemicals", "textiles"] },
      { name: "Agra", slug: "agra", population: 1585704, industries: ["tourism", "leather", "handicrafts"] },
      { name: "Varanasi", slug: "varanasi", population: 1201815, industries: ["tourism", "textiles", "handicrafts"] },
      { name: "Meerut", slug: "meerut", population: 1305429, industries: ["sports goods", "scissors", "agriculture"] },
      { name: "Allahabad", slug: "allahabad", population: 1117094, industries: ["education", "government", "agriculture"] }
    ]
  },
  {
    state: "Telangana",
    stateSlug: "telangana",
    cities: [
      { name: "Hyderabad", slug: "hyderabad", population: 6809970, isMetro: true, industries: ["technology", "pharmaceuticals", "biotechnology", "aerospace"] },
      { name: "Warangal", slug: "warangal", population: 704570, industries: ["agriculture", "handloom", "education"] },
      { name: "Nizamabad", slug: "nizamabad", population: 311152, industries: ["agriculture", "turmeric", "rice"] }
    ]
  },
  {
    state: "Andhra Pradesh",
    stateSlug: "andhra-pradesh",
    cities: [
      { name: "Visakhapatnam", slug: "visakhapatnam", population: 1730320, industries: ["port", "steel", "petrochemicals", "pharmaceuticals"] },
      { name: "Vijayawada", slug: "vijayawada", population: 1048240, industries: ["agriculture", "textiles", "auto components"] },
      { name: "Guntur", slug: "guntur", population: 743354, industries: ["agriculture", "textiles", "tobacco"] },
      { name: "Nellore", slug: "nellore", population: 505258, industries: ["agriculture", "aquaculture", "mining"] },
      { name: "Kurnool", slug: "kurnool", population: 484327, industries: ["cement", "agriculture", "textiles"] }
    ]
  }
];

export const services = [
  {
    name: "Digital Marketing Services",
    slug: "digital-marketing",
    description: "Comprehensive digital marketing solutions",
    keywords: ["digital marketing", "online marketing", "internet marketing", "digital advertising"]
  },
  {
    name: "AI Automation Services",
    slug: "ai-automation",
    description: "Advanced AI-powered business automation",
    keywords: ["ai automation", "business automation", "artificial intelligence", "machine learning"]
  },
  {
    name: "Lead Generation Services",
    slug: "lead-generation",
    description: "Proven lead generation strategies",
    keywords: ["lead generation", "prospect generation", "customer acquisition", "sales leads"]
  },
  {
    name: "Social Media Management",
    slug: "social-media-management",
    description: "Professional social media marketing",
    keywords: ["social media marketing", "social media management", "social media advertising", "social media strategy"]
  },
  {
    name: "Email Marketing Services",
    slug: "email-marketing",
    description: "Targeted email marketing campaigns",
    keywords: ["email marketing", "email campaigns", "email automation", "newsletter marketing"]
  }
];

export const industries = [
  { name: "Healthcare", slug: "healthcare" },
  { name: "Real Estate", slug: "real-estate" },
  { name: "E-commerce", slug: "ecommerce" },
  { name: "Education", slug: "education" },
  { name: "Manufacturing", slug: "manufacturing" },
  { name: "Financial Services", slug: "financial-services" },
  { name: "Hospitality", slug: "hospitality" },
  { name: "Technology", slug: "technology" },
  { name: "Retail", slug: "retail" },
  { name: "Automotive", slug: "automotive" }
];
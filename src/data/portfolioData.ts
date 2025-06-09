// src/data/portfolioData.ts

export interface PortfolioItemData {
  id: string; // Unique slug, e.g., "ecommerce-growth-project-alpha"
  projectName: string;
  clientName: string; // Can be fictional or real if permitted
  industrySlug: string; // Slug referencing an industry in comprehensiveIndustries
  serviceSlugs: string[]; // Array of service slugs from comprehensiveServices
  projectSummary: string; // Brief overview
  challenge: string;
  solution: string;
  results: string[]; // Key results/achievements as bullet points
  imageUrl?: string; // Main project image/thumbnail - placeholder path
  detailPageLink?: string; // e.g., `/portfolio/ecommerce-growth-project-alpha/` (for future V2)
  tags?: string[];
  dateCompleted?: string; // e.g., "Q4 2023"
}

export const allPortfolioItems: PortfolioItemData[] = [
  {
    id: "ecom-sales-boost-alphastore",
    projectName: "E-commerce Sales Uplift for AlphaStore",
    clientName: "AlphaStore Fashion (Fictional)",
    industrySlug: "ecommerce",
    serviceSlugs: ["ecommerce-marketing", "ppc-advertising", "conversion-rate-optimization", "social-media-marketing"],
    projectSummary: "Revitalized AlphaStore's online presence and significantly boosted sales through targeted digital marketing and CRO.",
    challenge: "AlphaStore, an online fashion retailer, faced stagnant sales, low conversion rates, and poor visibility in a competitive market despite having quality products.",
    solution: "Implemented a multi-channel strategy including revamped PPC campaigns on Google & Meta, on-page SEO for product categories, a content marketing plan highlighting new arrivals, and CRO techniques on product and checkout pages.",
    results: [
      "+120% increase in online sales within 6 months.",
      "Improved conversion rate from 1.2% to 2.8%.",
      "-35% reduction in cost per acquisition (CPA) from PPC.",
      "Organic search traffic grew by 70%."
    ],
    imageUrl: "/placeholders/portfolio/alphastore-project.jpg", // Placeholder
    detailPageLink: "/portfolio/ecom-sales-boost-alphastore/",
    tags: ["E-commerce", "PPC", "CRO", "Sales Growth"],
    dateCompleted: "Q1 2024"
  },
  {
    id: "health-ai-chatbot-betahealth",
    projectName: "AI Chatbot for BetaHealth Patient Intake",
    clientName: "BetaHealth Clinic Network (Fictional)",
    industrySlug: "healthcare",
    serviceSlugs: ["ai-automation", "chatbot-development", "crm-automation"],
    projectSummary: "Developed and deployed an AI-powered chatbot to streamline patient intake, appointment scheduling, and FAQ handling for a multi-location clinic network.",
    challenge: "BetaHealth Clinic's front-desk staff was overwhelmed with high call volumes for appointments and repetitive questions, leading to long wait times and patient dissatisfaction.",
    solution: "Designed and built a HIPAA-compliant AI chatbot integrated with their CRM. The chatbot handles appointment booking, answers common patient queries 24/7, provides pre-visit instructions, and collects initial patient information, freeing up staff.",
    results: [
      "Reduced front-desk call volume by 40%.",
      "Increased online appointment bookings by 60%.",
      "Improved patient satisfaction scores related to query resolution by 25%.",
      "Estimated 15+ hours of staff time saved per week, per clinic."
    ],
    imageUrl: "/placeholders/portfolio/betahealth-chatbot.jpg", // Placeholder
    detailPageLink: "/portfolio/health-ai-chatbot-betahealth/",
    tags: ["Healthcare", "AI Chatbot", "Automation", "Patient Experience"],
    dateCompleted: "Q4 2023"
  },
  {
    id: "b2b-saas-leadgen-gammaflow",
    projectName: "B2B SaaS Lead Generation for GammaFlow",
    clientName: "GammaFlow Solutions (Fictional)",
    industrySlug: "technology", // Assuming 'technology' or 'saas' is a valid industrySlug
    serviceSlugs: ["b2b-lead-generation", "linkedin-lead-generation", "content-marketing", "marketing-automation"],
    projectSummary: "Executed a targeted B2B lead generation campaign for a new SaaS product, resulting in a significant pipeline of qualified leads.",
    challenge: "GammaFlow launched an innovative B2B SaaS platform but struggled to generate initial traction and build a sales pipeline in a niche market.",
    solution: "Developed a content marketing strategy focusing on high-value downloadable assets (e.g., whitepapers, case studies relevant to the niche). Promoted these assets through LinkedIn targeted campaigns and email marketing automation to nurture leads.",
    results: [
      "Generated 250+ Marketing Qualified Leads (MQLs) in the first 3 months.",
      "Achieved a 15% MQL-to-SQL conversion rate.",
      "Built a prospect database of over 2,000 targeted contacts.",
      "Secured initial demo meetings with key industry players."
    ],
    imageUrl: "/placeholders/portfolio/gammaflow-leadgen.jpg", // Placeholder
    detailPageLink: "/portfolio/b2b-saas-leadgen-gammaflow/",
    tags: ["B2B", "SaaS", "Lead Generation", "Content Marketing"],
    dateCompleted: "Q2 2024"
  }
];

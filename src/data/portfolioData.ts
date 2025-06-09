// src/data/portfolioData.ts

export interface MetricItem {
  id: string; // Added id for key prop in React if mapped
  metric: string;
  value: string;
  improvement?: string; // e.g., "Increased", "Decreased", "From X to Y"
  description?: string;
  icon?: string; // Lucide icon name
}

export interface ProjectTestimonial {
  text: string;
  authorName: string;
  authorRole?: string;
}

export interface GalleryImage {
  id: string; // Added id for key prop
  url: string;
  alt: string;
  caption?: string;
}

export interface DetailedSolutionAction {
  title: string;
  description: string;
  icon?: string; // Lucide icon name
}

export interface PortfolioItemData {
  id: string; // Unique slug, e.g., "ecommerce-growth-project-alpha"
  projectName: string;
  clientName: string; // Can be fictional or real if permitted
  industrySlug: string; // Slug referencing an industry in comprehensiveIndustries
  serviceSlugs: string[]; // Array of service slugs from comprehensiveServices
  projectSummary: string; // Brief overview
  challenge: string;
  detailedChallenge?: string; // New: Markdown enabled
  solution: string;
  detailedSolution?: { // New: Structured solution
    overview: string; // Markdown enabled
    keyActions?: DetailedSolutionAction[];
    technologiesUsed?: string[];
  };
  results: string[]; // Fallback simple list
  structuredResults?: MetricItem[]; // New: Detailed, structured results
  imageUrl?: string;
  galleryImages?: GalleryImage[]; // New
  projectSpecificTestimonial?: ProjectTestimonial; // New
  detailPageLink?: string;
  tags?: string[];
  dateCompleted?: string; // e.g., "Q4 2023"
  metaTitleDetail?: string; // New: Specific SEO title for detail page
  metaDescriptionDetail?: string; // New: Specific SEO description for detail page
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
    results: [ // These are still good for the card display / fallback
      "+120% increase in online sales within 6 months.",
      "Improved conversion rate from 1.2% to 2.8%.",
      "-35% reduction in cost per acquisition (CPA) from PPC.",
      "Organic search traffic grew by 70%."
    ],
    imageUrl: "/placeholders/portfolio/alphastore-project.jpg",
    detailPageLink: "/portfolio/ecom-sales-boost-alphastore/",
    tags: ["E-commerce", "PPC", "CRO", "Sales Growth"],
    dateCompleted: "Q1 2024",

    // New detailed fields:
    detailedChallenge: `
AlphaStore Fashion, a promising online retailer, found itself at a crossroads. Despite a curated collection of quality products, their growth had plateaued. Key issues included:

*   **Stagnant Sales Figures**: Month-over-month sales showed little to no growth.
*   **Low On-Site Conversion Rates**: Website visitors were not converting into customers at an optimal rate (hovering around 1.2%).
*   **High Cost Per Acquisition (CPA)**: Paid advertising campaigns were expensive and not yielding a strong return on investment.
*   **Poor Organic Visibility**: The store struggled to rank for competitive fashion keywords, limiting organic traffic.
*   **Generic User Experience**: The online store lacked personalization and targeted messaging to effectively engage different customer segments.
    `,
    detailedSolution: {
      overview: `
To address AlphaStore's multifaceted challenges, we devised and implemented a comprehensive, data-driven digital marketing and CRO strategy. Our goal was to not only boost immediate sales but also to build a sustainable framework for long-term growth. This involved a synchronized effort across paid media, organic search, on-site user experience, and content strategy.
      `,
      keyActions: [
        { id: "action1", title: "PPC Campaign Overhaul", description: "Restructured Google Ads & Meta Ads campaigns with granular targeting, compelling ad copy, and optimized bidding strategies.", icon: "Target" },
        { id: "action2", title: "On-Page & Technical SEO", description: "Conducted a full SEO audit, optimizing product pages, category pages, and technical elements for improved search rankings.", icon: "SearchCheck" },
        { id: "action3", title: "Conversion Rate Optimization (CRO)", description: "Analyzed user behavior and A/B tested changes to product page layouts, calls-to-action, and the checkout funnel to reduce friction.", icon: "MousePointerClick" },
        { id: "action4", title: "Content Marketing for Engagement", description: "Developed a content plan including blog posts on fashion trends and style guides, targeting relevant keywords to attract organic traffic.", icon: "FileText" }
      ],
      technologiesUsed: ["Google Ads", "Meta Ads Manager", "Google Analytics", "Hotjar", "SEMrush", "Shopify (Client's Platform)"]
    },
    structuredResults: [
      { id: "sr1", metric: "Online Sales Growth", value: "+120%", improvement: "Within 6 months", icon: "TrendingUp", description: "Achieved a significant uplift in overall e-commerce revenue." },
      { id: "sr2", metric: "Conversion Rate", value: "2.8%", improvement: "From 1.2%", icon: "Percent", description: "More than doubled the website's effectiveness in turning visitors into customers." },
      { id: "sr3", metric: "Cost Per Acquisition (CPA)", value: "-35%", improvement: "Reduced", icon: "DollarSign", description: "Made paid advertising significantly more profitable." },
      { id: "sr4", metric: "Organic Search Traffic", value: "+70%", improvement: "Increased", icon: "Users", description: "Expanded reach through improved search engine rankings." }
    ],
    galleryImages: [
      { id: "gal1", url: "/placeholders/portfolio/alphastore-gallery-1.jpg", alt: "AlphaStore Campaign Performance Dashboard", caption: "Improved PPC Campaign Dashboard" },
      { id: "gal2", url: "/placeholders/portfolio/alphastore-gallery-2.jpg", alt: "AlphaStore Website Redesign Snippet", caption: "Homepage CRO Iteration" }
    ],
    projectSpecificTestimonial: {
      text: "Working with God Digital Marketing turned our business around. The results speak for themselves - our sales have soared, and we finally understand our customers better. Their team is knowledgeable, proactive, and truly cares about client success.",
      authorName: "Aisha Khan (Fictional)",
      authorRole: "Founder, AlphaStore Fashion"
    },
    metaTitleDetail: "AlphaStore E-commerce Growth Case Study | God Digital Marketing Portfolio",
    metaDescriptionDetail: "See how God Digital Marketing boosted AlphaStore's e-commerce sales by 120% through targeted PPC, SEO, and CRO strategies. Read the full project details."
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
    imageUrl: "/placeholders/portfolio/betahealth-chatbot.jpg",
    detailPageLink: "/portfolio/health-ai-chatbot-betahealth/",
    tags: ["Healthcare", "AI Chatbot", "Automation", "Patient Experience"],
    dateCompleted: "Q4 2023"
    // New detailed fields can be added here for this item too if desired
  },
  {
    id: "b2b-saas-leadgen-gammaflow",
    projectName: "B2B SaaS Lead Generation for GammaFlow",
    clientName: "GammaFlow Solutions (Fictional)",
    industrySlug: "technology",
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
    imageUrl: "/placeholders/portfolio/gammaflow-leadgen.jpg",
    detailPageLink: "/portfolio/b2b-saas-leadgen-gammaflow/",
    tags: ["B2B", "SaaS", "Lead Generation", "Content Marketing"],
    dateCompleted: "Q2 2024"
    // New detailed fields can be added here for this item too
  }
];

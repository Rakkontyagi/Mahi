export interface LeadMagnetData {
  id: string; // Unique slug-like identifier
  type: 'Checklist' | 'Guide' | 'Template' | 'Report' | 'VideoSeries';
  title: string; // For card display, SEO title if metaTitle is not set
  pageHeadline: string; // Main headline for the lead magnet landing page
  pageSubtitle?: string; // Subtitle for the landing page, can include {cityName}
  industrySlug?: string; // Optional: to associate with a specific industry
  benefits: string[]; // Key benefits of downloading this lead magnet
  targetAudience?: string[]; // Who is this lead magnet for?
  heroImageMockupUrl?: string; // URL for a larger mockup image (e.g., ebook cover)
  previewImageUrl?: string; // URL for a smaller preview (e.g., for cards)
  formCTA_text: string; // Text for the form submission button
  downloadFileUrl: string; // Conceptual placeholder for actual file path or gated URL
  metaTitle?: string; // Specific SEO title for the page
  metaDescription: string; // Specific SEO meta description
  keywords?: string[];
  fictionalTestimonials?: Array<{
    text: string;
    authorName: string;
    authorRoleOrCompany: string;
  }>;
}

export const allLeadMagnets: LeadMagnetData[] = [
  {
    id: "healthcare-marketing-checklist",
    type: 'Checklist',
    title: "Ultimate Healthcare Marketing Checklist for {cityName} Clinics",
    pageHeadline: "Free Checklist: Essential Healthcare Marketing Strategies for {cityName} Clinics",
    pageSubtitle: "Ensure your {cityName} clinic covers all critical digital marketing touchpoints. Download our comprehensive checklist to attract more patients and grow your practice in the competitive {cityName} healthcare market.",
    industrySlug: "healthcare",
    benefits: [
      "Identify gaps in your current marketing strategy.",
      "Actionable steps to improve patient acquisition in {cityName}.",
      "Ensure compliance with local healthcare marketing guidelines.",
      "Optimize your online presence for the {cityName} healthcare audience."
    ],
    targetAudience: [
      "Clinic Owners in {cityName}",
      "Healthcare Marketing Managers in {cityName}",
      "Doctors looking to attract more patients locally"
    ],
    heroImageMockupUrl: "/placeholders/leadmagnets/healthcare-checklist-mockup.png",
    previewImageUrl: "/placeholders/leadmagnets/healthcare-checklist-preview.png",
    formCTA_text: "Download Your Free Healthcare Checklist",
    downloadFileUrl: "/downloads/fictional-healthcare-marketing-checklist.pdf",
    metaTitle: "Healthcare Marketing Checklist for {cityName} Clinics | Free PDF",
    metaDescription: "Get your free Healthcare Marketing Checklist tailored for {cityName} clinics. Boost patient acquisition and online visibility in {cityName}.",
    keywords: ["healthcare marketing checklist", "clinic marketing {cityName}", "patient acquisition {cityName}", "medical marketing guide"],
    fictionalTestimonials: [
      {
        text: "This checklist was a game-changer for our clinic in {cityName}! It helped us spot exactly where we were falling short and how to improve.",
        authorName: "Dr. Priya Sharma (Fictional)",
        authorRoleOrCompany: "Owner, City Wellness Clinic {cityName} (Fictional)"
      }
    ]
  },
  {
    id: "real-estate-marketing-checklist",
    type: 'Checklist',
    title: "Essential Real Estate Marketing Checklist for {cityName} Agents",
    pageHeadline: "Free Download: Dominate the {cityName} Property Market with Our Marketing Checklist",
    pageSubtitle: "Navigate the complexities of real estate marketing in {cityName}. This checklist provides actionable steps for {cityName} agents to generate more leads and close more deals.",
    industrySlug: "real-estate",
    benefits: [
      "Optimize your property listings for the {cityName} market.",
      "Learn effective lead generation tactics for {cityName} buyers & sellers.",
      "Improve your local brand visibility as a real estate expert.",
      "Actionable strategies to stand out from competitors in {cityName}."
    ],
    targetAudience: [
      "Real Estate Agents in {cityName}",
      "Property Developers focusing on {cityName}",
      "Real Estate Agencies in {cityName}"
    ],
    heroImageMockupUrl: "/placeholders/leadmagnets/realestate-checklist-mockup.png",
    previewImageUrl: "/placeholders/leadmagnets/realestate-checklist-preview.png",
    formCTA_text: "Get Your Free Real Estate Checklist",
    downloadFileUrl: "/downloads/fictional-real-estate-marketing-checklist.pdf",
    metaTitle: "Real Estate Marketing Checklist for {cityName} Agents | Free PDF",
    metaDescription: "Download our free Real Estate Marketing Checklist specifically for {cityName} agents. Boost leads and sales in the {cityName} property market.",
    keywords: ["real estate marketing checklist", "property marketing {cityName}", "real estate leads {cityName}", "{cityName} real estate guide"]
  }
];

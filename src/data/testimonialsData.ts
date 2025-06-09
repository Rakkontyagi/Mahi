// src/data/testimonialsData.ts

export interface TestimonialData {
  id: string; // Unique identifier
  clientName: string;
  companyName?: string;
  roleOrIndustry?: string;
  testimonialText: string;
  imageUrl?: string; // Placeholder path or actual if available
  serviceProvided?: string[]; // Names or slugs of services
  date?: string; // e.g., "April 2024"
  rating?: number; // e.g., 5
  tags?: string[];
}

export const allTestimonials: TestimonialData[] = [
  {
    id: "testimonial-wellnessfirst-pune",
    clientName: "Dr. Ananya Sharma (Fictional)",
    companyName: "WellnessFirst Clinic Pune (Fictional)",
    roleOrIndustry: "Chief Medical Officer, Healthcare",
    testimonialText: "The AI automation solution implemented by God Digital Marketing transformed how we interact with our patients. Our no-show rates have plummeted by 60%, and our staff can now focus on more critical patient care tasks. Their understanding of the healthcare space was exceptional!",
    imageUrl: "/placeholders/clients/dr-ananya-sharma.jpg", // Placeholder
    serviceProvided: ["AI Automation", "Chatbot Development"],
    date: "May 2024",
    rating: 5,
    tags: ["Healthcare", "AI Automation", "Patient Engagement", "Pune"],
  },
  {
    id: "testimonial-craftydecor-bangalore",
    clientName: "Rohan Mehta (Fictional)",
    companyName: "CraftyDecor Bangalore (Fictional)",
    roleOrIndustry: "Founder, E-commerce Retail",
    testimonialText: "Our online sales have increased by over 150% since partnering with God Digital Marketing! Their targeted PPC campaigns and e-commerce SEO strategy have been incredibly effective in the competitive Bangalore market. Highly recommended for any e-commerce business.",
    imageUrl: "/placeholders/clients/rohan-mehta.jpg", // Placeholder
    serviceProvided: ["Digital Marketing", "E-commerce SEO", "PPC Advertising"],
    date: "March 2024",
    rating: 5,
    tags: ["E-commerce", "Digital Marketing", "Sales Growth", "Bangalore"],
  },
  {
    id: "testimonial-luxuryhomes-delhi",
    clientName: "Priya Singh (Fictional)",
    companyName: "LuxuryHomes Delhi (Fictional)",
    roleOrIndustry: "Lead Sales Agent, Real Estate",
    testimonialText: "The quality and quantity of leads we've received through their specialized lead generation services for real estate have been outstanding. Our Delhi sales team is busier than ever, and our conversion rates are up. Their understanding of the property market is top-notch.",
    imageUrl: "/placeholders/clients/priya-singh.jpg", // Placeholder
    serviceProvided: ["Lead Generation", "Real Estate Marketing"],
    date: "June 2024",
    rating: 5,
    tags: ["Real Estate", "Lead Generation", "High-Quality Leads", "Delhi"],
  },
  {
    id: "testimonial-alphacorp-mumbai",
    clientName: "Vikram Reddy (Fictional)",
    companyName: "AlphaCorp Manufacturing (Fictional)",
    roleOrIndustry: "Operations Head, Manufacturing",
    testimonialText: "Automating our internal workflows with solutions from God Digital Marketing has saved us countless hours and significantly reduced errors. Our operational efficiency has improved dramatically. A truly professional and impactful service.",
    imageUrl: "/placeholders/clients/vikram-reddy.jpg", // Placeholder
    serviceProvided: ["Business Process Automation", "Workflow Automation"],
    date: "February 2024",
    rating: 4,
    tags: ["Manufacturing", "Business Automation", "Efficiency", "Mumbai"],
  }
];

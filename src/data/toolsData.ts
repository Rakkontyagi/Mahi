// src/data/toolsData.ts

export interface ToolData {
  id: string; // Unique slug for the tool, e.g., "marketing-automation-roi-calculator"
  title: string; // Main display name of the tool
  description: string; // Brief explanation of what it does/its benefit
  iconName?: string; // Optional: Name of a lucide-react icon (e.g., "Calculator")
  link: string; // URL to the tool's page
  category?: string; // Optional: e.g., "Calculators", "Analyzers"
  tags?: string[]; // Optional: Keywords or tags
}

export const allTools: ToolData[] = [
  {
    id: "marketing-automation-roi-calculator",
    title: "Marketing Automation ROI Calculator",
    description: "Estimate potential time and cost savings your business can achieve by implementing marketing automation. Get instant projections based on your current metrics.",
    iconName: "Calculator", // Assumes a Lucide icon named "Calculator" exists
    link: "/tools/marketing-automation-roi-calculator/", // Link to the existing calculator page
    category: "Calculators",
    tags: ["ROI", "Marketing Automation", "Savings", "Estimation", "Calculator"]
  }
  // Future tools will be added here
];

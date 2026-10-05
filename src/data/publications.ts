export interface Publication {
  id: string;
  number: string;
  title: string;
  year: string;
  description: string;
  topics: string[];
  url: string | null; // Keep null until actual published URL/DOI is provided
}

export const publicationHeading = {
  title: "Research & Publications",
  intro:
    "Exploring AI, IoT, predictive analytics and intelligent technology systems through research-oriented work."
};

export const publications: Publication[] = [
  {
    id: "pune-smart-city",
    number: "01",
    title:
      "Pune Smart City: An AI & IoT Based Smart Traffic & Parking Management System for Pune City",
    year: "2026",
    description:
      "Research publication on AI, IoT, predictive analytics and intelligent transportation systems.",
    topics: [
      "AI & Machine Learning",
      "IoT Sensor Telemetry",
      "Predictive Analytics",
      "Smart City Transportation",
      "Real-Time Management"
    ],
    url: null // Placeholder: provide real publication URL / DOI when published
  },
  {
    id: "ayubarter-publication",
    number: "02",
    title: "AyuBarter: AI-Integrated E-commerce & Tele-Consultation Platform",
    year: "2025",
    description:
      "Research publication on AI-powered healthcare recommendation and tele-consultation systems.",
    topics: [
      "Tele-Consultation Systems",
      "AI Recommendation Engines",
      "Digital Health Platforms",
      "RESTful Architecture",
      "Healthcare UX"
    ],
    url: null // Placeholder: provide real publication URL / DOI when published
  }
];

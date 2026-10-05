export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year?: string;
  domain: string;
  url: string | null; // Keep null until verified URL is provided
}

export const certifications: Certification[] = [
  {
    id: "aws-cloud",
    name: "Cloud Foundations",
    issuer: "AWS Academy",
    domain: "Cloud Computing & Infrastructure",
    url: null
  },
  {
    id: "advanced-java",
    name: "Advanced Java Programming Certification",
    issuer: "Authorized Technical Authority",
    domain: "Software Engineering & Enterprise Java",
    url: null
  },
  {
    id: "microsoft-ai",
    name: "Artificial Intelligence",
    issuer: "Microsoft / InternForte",
    domain: "Artificial Intelligence & Cognitive Services",
    url: null
  },
  {
    id: "deeplearning-neural-nets",
    name: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    domain: "Deep Learning & Neural Architectures",
    url: null
  },
  {
    id: "meta-genai",
    name: "GenAI in Data Analytics",
    issuer: "Meta",
    domain: "Generative AI & Data Analytics",
    url: null
  },
  {
    id: "ibm-intro-ai",
    name: "Introduction to Artificial Intelligence",
    issuer: "IBM",
    domain: "Artificial Intelligence Fundamentals",
    url: null
  },
  {
    id: "google-cloud-genai",
    name: "Introduction to Generative AI",
    issuer: "Google Cloud",
    domain: "Generative AI & Cloud AI Studio",
    url: null
  }
];

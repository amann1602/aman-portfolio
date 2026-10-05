export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    icon: "Code2",
    description: "Core languages used for systems, AI models, algorithms, and web applications.",
    skills: ["Java", "Python", "JavaScript", "SQL"]
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: "Brain",
    description: "Intelligent systems, deep neural architectures, computer vision, and agent frameworks.",
    skills: ["Machine Learning", "Computer Vision", "Generative AI", "Prompt Engineering", "AI Agents"]
  },
  {
    id: "web",
    name: "Web Technologies",
    icon: "Layout",
    description: "Modern, responsive client architecture and robust API integration layers.",
    skills: ["React.js", "HTML", "CSS", "REST APIs"]
  },
  {
    id: "databases",
    name: "Databases",
    icon: "Database",
    description: "Relational and document storage solutions for structured and unstructured datasets.",
    skills: ["MySQL", "MongoDB"]
  },
  {
    id: "cloud",
    name: "Cloud",
    icon: "Cloud",
    description: "Foundational cloud infrastructure, hosting services, and scalable compute environments.",
    skills: ["AWS Cloud Foundations"]
  },
  {
    id: "analytics",
    name: "Data Analytics & Productivity",
    icon: "BarChart3",
    description: "Analytical dashboards, business telemetry, statistical reporting, and presentations.",
    skills: ["MS Excel", "Power BI", "Tableau", "Google Sheets", "PowerPoint"]
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    icon: "Wrench",
    description: "Developer tooling, version control, collaboration pipelines, and interactive notebooks.",
    skills: ["Git", "GitHub", "VS Code", "Google Colab"]
  }
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "embedkari",
    role: "Embedded Systems Intern",
    company: "Embedkari Pvt. Ltd.",
    period: "2025",
    location: "Pune, India",
    type: "Engineering Internship",
    description:
      "Assisted in embedded software development, debugging, hardware-software integration and system testing.",
    responsibilities: [
      "Assisted in embedded software development for microcontroller and edge systems",
      "Conducted system testing, firmware verification, and hardware debugging",
      "Performed hardware-software integration and signal validation",
      "Documented testing workflows and system verification criteria"
    ],
    technologies: ["Embedded Software", "Hardware-Software Integration", "System Testing", "Debugging"]
  },
  {
    id: "innobytes",
    role: "Full Stack Development Intern",
    company: "Innobytes",
    period: "2025",
    location: "Remote / Pune, India",
    type: "Software Engineering Internship",
    description:
      "Developed responsive web applications using React.js, JavaScript and REST APIs. Built reusable UI components and integrated backend APIs for scalable applications.",
    responsibilities: [
      "Developed responsive web applications using React.js, modern JavaScript, and Tailwind CSS",
      "Built clean, modular, and reusable UI components adhering to engineering best practices",
      "Integrated backend REST APIs for seamless client-side asynchronous data flows",
      "Ensured cross-browser consistency, accessibility standards, and responsive viewport performance"
    ],
    technologies: ["React.js", "JavaScript", "REST APIs", "Modular UI", "Responsive Design"]
  }
];

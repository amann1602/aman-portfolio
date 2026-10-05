export interface Achievement {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    id: "research-papers",
    title: "Published Two Research Papers",
    category: "R&D & Publications",
    description:
      "Authored and published research papers in AI, IoT, intelligent urban transportation, and AI-integrated healthcare tele-consultation.",
    icon: "BookOpen"
  },
  {
    id: "internships",
    title: "Completed Dual Engineering Internships",
    category: "Professional Experience",
    description:
      "Completed hands-on internships in Embedded Systems (Embedkari Pvt. Ltd.) and Full Stack Development (Innobytes).",
    icon: "Briefcase"
  },
  {
    id: "bytecamp",
    title: "Participated in ByteCamp",
    category: "Competitive Hackathon",
    description:
      "Collaborated in rapid prototype development addressing real-world problem statements under hackathon constraints.",
    icon: "Trophy"
  },
  {
    id: "hackprix",
    title: "Participated in HackPrix",
    category: "Competitive Hackathon",
    description:
      "Designed and engineered software solutions within intensive collaborative sprint sessions.",
    icon: "Award"
  },
  {
    id: "sih",
    title: "Participated in Smart India Hackathon",
    category: "National Innovation Initiative",
    description:
      "Participated in India's premier nationwide open innovation challenge, addressing technological problem statements.",
    icon: "Sparkles"
  }
];

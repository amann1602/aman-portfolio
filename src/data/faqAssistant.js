/**
 * Portfolio Assistant Knowledge Base
 * Primary Source of Truth: Resume
 */
export const predefinedQuestions = [
  {
    id: "who-is-aman",
    label: "Who is Aman?",
    matchKeywords: ["who", "aman", "about", "bio", "intro", "profile", "background"],
    answer: "Aman Mafij Inamdar is a Computer Science undergraduate specializing in Artificial Intelligence & Analytics at MIT ADT University, Pune (2023–2027, 8.14 CGPA). He has hands-on experience in R&D, AI-powered applications, software testing, debugging, hardware-software integration, and real-time systems."
  },
  {
    id: "skills",
    label: "What are his skills?",
    matchKeywords: ["skill", "stack", "knowledge", "language", "tech", "proficient"],
    answer: "Aman's core competencies from his resume include:\n• Programming: Java, Python, JavaScript, SQL\n• AI & ML: Machine Learning, Computer Vision, Generative AI, Prompt Engineering, AI Agents\n• Web: React.js, HTML, CSS, REST APIs\n• Database: MySQL, MongoDB\n• Cloud: AWS Cloud Foundations\n• Data Analytics: MS Excel, Power BI, Tableau, Google Sheets, PowerPoint\n• Tools: Git, GitHub, VS Code, Google Colab."
  },
  {
    id: "projects",
    label: "What projects has he built?",
    matchKeywords: ["project", "built", "work", "portfolio", "crowdflow", "traffic", "parking", "ayubarter", "granthalay"],
    answer: "Aman has built key systems including:\n1. Smart Traffic & Parking Management System (2026): AI-powered predictive analytics and monitoring dashboards in Python & ML.\n2. CrowdFlow Analytics System (2025): Real-time crowd monitoring with YOLOv5 and OpenCV.\n3. ग्रंथालय जगत (Granthalay Jagat): Live Marathi digital news platform (granthalayjagat.in) with automated RSS ingestion and MongoDB.\n4. AyuBarter (2025): Healthcare tele-consultation platform with AI recommendation features in React.js."
  },
  {
    id: "internships",
    label: "What internships has he completed?",
    matchKeywords: ["intern", "internship", "experience", "embedkari", "innobytes", "company", "work"],
    answer: "Aman has completed two internships in 2025:\n1. Embedkari Pvt. Ltd. — Embedded Systems Intern (Assisted in embedded software development, debugging, hardware-software integration, and system testing).\n2. Innobytes — Full Stack Development Intern (Developed responsive web applications with React.js, JavaScript, REST APIs, reusable UI components, and backend integration)."
  },
  {
    id: "publications",
    label: "What are his research publications?",
    matchKeywords: ["research", "publication", "paper", "pune", "smart city", "publish"],
    answer: "Aman has published two research papers:\n1. 'Pune Smart City: An AI & IoT Based Smart Traffic & Parking Management System for Pune City' (2026) — Research on AI, IoT, predictive analytics, and intelligent transportation.\n2. 'AyuBarter: AI-Integrated E-commerce & Tele-Consultation Platform' (2025) — Research on AI-powered healthcare recommendation and tele-consultation systems."
  },
  {
    id: "certifications",
    label: "What certifications does he have?",
    matchKeywords: ["certificate", "certifications", "credential", "aws", "microsoft", "ibm", "google", "meta"],
    answer: "Aman holds 7 official certifications:\n• AWS Academy – Cloud Foundations\n• Advanced Java Programming Certification\n• Microsoft (InternForte) – Artificial Intelligence\n• DeepLearning.AI – Neural Networks and Deep Learning\n• Meta – GenAI in Data Analytics\n• IBM – Introduction to Artificial Intelligence\n• Google Cloud – Introduction to Generative AI."
  },
  {
    id: "contact",
    label: "How can I contact him?",
    matchKeywords: ["contact", "email", "phone", "reach", "call", "hire", "message", "github"],
    answer: "You can reach Aman directly:\n• Phone: +91-7775909442\n• Email: amaninnamdar7775@gmail.com\n• GitHub: github.com/amann1602\n• Location: Pune, Maharashtra, India\n• You can also use the contact form at the bottom of the page!"
  }
];

export function matchQuery(query) {
  if (!query || typeof query !== "string") return null;
  const clean = query.toLowerCase().trim();

  let bestMatch = null;
  let maxScore = 0;

  for (const item of predefinedQuestions) {
    let score = 0;
    for (const kw of item.matchKeywords) {
      if (clean.includes(kw)) {
        score += 1;
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && maxScore > 0) {
    return bestMatch.answer;
  }

  return "I can provide details on Aman's technical skills (Python, Java, React, AI/ML), projects (Smart Traffic, CrowdFlow, Granthalay Jagat, AyuBarter), internships (Embedkari, Innobytes), research publications, certifications, or direct contact information. Try choosing one of the questions above!";
}

/**
 * Portfolio AI Assistant Knowledge Base for Aman Inamdar
 * Source of Truth: Resume, Academic Records & Production Projects
 */

export interface FAQItem {
  id: string;
  label: string;
  matchKeywords: string[];
  answer: string;
}

export const predefinedQuestions: FAQItem[] = [
  {
    id: 'who-is-aman',
    label: 'Who is Aman?',
    matchKeywords: ['who', 'aman', 'about', 'bio', 'intro', 'profile', 'background', 'tell me', 'summary'],
    answer: "Aman Mafij Inamdar is a Computer Science undergraduate specializing in Artificial Intelligence & Analytics at MIT ADT University, Pune (2023–2027, 8.14 CGPA). He is an active researcher in AI, IoT, and computer vision, and a full-stack software engineer with 11 open-source GitHub repositories."
  },
  {
    id: 'skills',
    label: 'Technical Skills & Stack',
    matchKeywords: ['skill', 'stack', 'tech', 'language', 'proficient', 'framework', 'tools', 'python', 'java', 'react'],
    answer: "Aman's core technical stack includes:\n• Programming: Python, Java, JavaScript, TypeScript, SQL\n• AI & Machine Learning: Computer Vision (YOLOv5, OpenCV), Generative AI, Prompt Engineering, Agentic AI, PyTorch, Scikit-Learn\n• Web & Architecture: React.js, Next.js, Spring Boot, REST APIs, Tailwind CSS, HTML5/CSS3\n• Databases: MySQL, MongoDB\n• Cloud & DevOps: AWS Cloud Foundations, Git, GitHub, Docker\n• Analytics & BI: Power BI, Tableau, Advanced Excel, Google Colab."
  },
  {
    id: 'projects',
    label: 'Featured Projects',
    matchKeywords: ['project', 'built', 'work', 'portfolio', 'traffic', 'parking', 'crowdflow', 'yolo', 'ayubarter', 'granthalay', 'webhook'],
    answer: "Key engineered systems include:\n1. Smart Traffic & Parking Management (2026): AI predictive congestion modeling with IoT telemetry sensor simulation.\n2. CrowdFlow Analytics (2025): Real-time crowd density detection and hazard alerting using YOLOv5 & OpenCV.\n3. ग्रंथालय जगत (Granthalay Jagat): Digital Marathi news aggregator (granthalayjagat.in) with automated RSS ingestion & MongoDB.\n4. AyuBarter (2025): Healthcare tele-consultation and barter network with AI wellness recommendation engine.\n5. Spring Boot Webhook Service: Enterprise microservice with HMAC SHA-256 signature verification."
  },
  {
    id: 'internships',
    label: 'Industry Experience',
    matchKeywords: ['intern', 'internship', 'experience', 'work', 'job', 'embedkari', 'innobytes', 'company', 'role'],
    answer: "Aman has completed 2 specialized industry internships:\n1. Embedkari Pvt. Ltd. — Embedded Systems & Software Intern (Assisted in embedded firmware debugging, hardware-software integration, logic analysis, and system testing).\n2. Innobytes — Full-Stack Development Intern (Engineered responsive web applications in React.js, integrated RESTful APIs, built reusable component libraries, and optimized frontend performance)."
  },
  {
    id: 'publications',
    label: 'Research Papers',
    matchKeywords: ['research', 'paper', 'publication', 'publish', 'smart city', 'ieee', 'scopus', 'pune'],
    answer: "Aman has authored 2 formal research papers:\n1. 'Pune Smart City: An AI & IoT Based Smart Traffic & Parking Management System for Pune City' (2026) — Research on predictive traffic flow, parking vacancy forecasting, and automated signaling.\n2. 'AyuBarter: AI-Integrated E-commerce & Tele-Consultation Platform' (2025) — Research on AI-assisted healthcare symptom analysis and resource exchange."
  },
  {
    id: 'certifications',
    label: 'Certifications',
    matchKeywords: ['certificate', 'certifications', 'credential', 'aws', 'microsoft', 'ibm', 'google', 'meta', 'deeplearning'],
    answer: "Aman holds 7 accredited industry certifications:\n• AWS Academy: Cloud Foundations\n• Advanced Java Programming (Complete Course)\n• Microsoft (InternForte): Artificial Intelligence\n• DeepLearning.AI: Neural Networks & Deep Learning\n• Meta: GenAI in Data Analytics\n• IBM: Introduction to Artificial Intelligence\n• Google Cloud: Introduction to Generative AI."
  },
  {
    id: 'education',
    label: 'Education & CGPA',
    matchKeywords: ['education', 'college', 'university', 'mit', 'cgpa', 'degree', 'marks', 'academic'],
    answer: "Academic Background:\n• B.Tech in Computer Science Engineering (AI & Analytics) at MIT ADT University, Pune (2023 – 2027) with a Cumulative CGPA of 8.14.\n• HSC (Higher Secondary): 68.67% (Science & Mathematics).\n• SSC (Secondary School): 87.00%."
  },
  {
    id: 'contact',
    label: 'Contact & Hiring',
    matchKeywords: ['contact', 'email', 'phone', 'hire', 'reach', 'call', 'message', 'interview', 'opportunities'],
    answer: "You can connect with Aman directly:\n• Email: amaninamdar7775@gmail.com\n• Phone: +91-7775909442\n• GitHub: github.com/amann1602\n• Location: Pune, Maharashtra, India\n• Or use the direct Contact form at the bottom of this portfolio!"
  }
];

export function matchQuery(query: string): string {
  if (!query || typeof query !== 'string') return '';
  const clean = query.toLowerCase().trim();

  let bestMatch: FAQItem | null = null;
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

  return "I can answer questions regarding Aman's AI/ML skills, GitHub projects (CrowdFlow, Smart Traffic, Granthalay Jagat), research publications, internships at Embedkari & Innobytes, certifications, or direct contact details. Feel free to click any of the prompts above or ask directly!";
}

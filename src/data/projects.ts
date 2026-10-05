export interface ProjectDetailSection {
  title: string;
  content: string;
  points?: string[];
  placeholderNote?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  year: string;
  category: string;
  filterCategories: string[]; // ['ai-ml', 'analytics', 'software', 'research']
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  isLive: boolean;
  hasDedicatedPage?: boolean;
  image?: string;
  sections?: {
    overview: ProjectDetailSection;
    problem: ProjectDetailSection;
    solution: ProjectDetailSection;
    technology: ProjectDetailSection;
    keyFeatures?: ProjectDetailSection;
    analytics?: ProjectDetailSection;
    systemArchitecture?: ProjectDetailSection;
    computerVision?: ProjectDetailSection;
    realTimeMonitoring?: ProjectDetailSection;
    dashboard?: ProjectDetailSection;
    optimization?: ProjectDetailSection;
    aiIntegration?: ProjectDetailSection;
    frontendArchitecture?: ProjectDetailSection;
    apiIntegration?: ProjectDetailSection;
    challenges: ProjectDetailSection;
    futureScope: ProjectDetailSection;
  };
}

export const projects: Project[] = [
  {
    id: "smart-traffic-parking",
    slug: "smart-traffic-parking",
    title: "Smart Traffic and Parking Management System",
    year: "2026",
    category: "AI • IoT • Machine Learning • Real-Time Analytics",
    filterCategories: ["ai-ml", "analytics", "research"],
    shortDescription:
      "AI-powered urban transit and parking management solution using Python, ML predictive models, and IoT sensors for real-time municipal telemetry.",
    fullDescription:
      "An intelligent, integrated urban mobility solution combining computer vision, predictive machine learning algorithms, and IoT sensors to monitor vehicular density, automate parking allocation, and power real-time municipal decision-support dashboards.",
    technologies: ["Python", "Machine Learning", "AI", "IoT", "Analytics", "OpenCV"],
    features: [
      "Intelligent traffic monitoring",
      "Automated parking bay telemetry",
      "Real-time sensor telemetry",
      "Predictive congestion analytics",
      "Municipal decision support",
      "Smart routing automation"
    ],
    githubUrl: "https://github.com/amann1602/Smart-Traffic-and-Parking-Management",
    liveUrl: null,
    isLive: false,
    hasDedicatedPage: true,
    image: "/images/projects/smart-traffic.png",
    sections: {
      overview: {
        title: "Overview",
        content:
          "The Smart Traffic and Parking Management System is an end-to-end intelligent transportation solution developed to alleviate vehicular congestion and streamline urban parking management using AI, Machine Learning, and IoT analytics."
      },
      problem: {
        title: "Problem",
        content:
          "Urban centers face escalating vehicular congestion, inadequate real-time traffic signal optimization, and inefficient parking slot utilization. Drivers spend excessive time circulating for vacant parking spaces, intensifying carbon emissions and gridlock."
      },
      solution: {
        title: "Solution",
        content:
          "Implemented an AI-driven monitoring and prediction pipeline in Python that analyzes incoming vehicular feeds, forecasts parking availability, and delivers automated insights to streamline traffic flows and reduce search latency."
      },
      technology: {
        title: "Technology Stack",
        content:
          "Built using Python, Machine Learning models for predictive analytics, IoT sensor interfaces for real-time telemetry, and analytical dashboards for administrative visualization.",
        points: [
          "Python programming for data ingestion and pipeline orchestration",
          "Machine Learning models for traffic load prediction and parking occupancy estimation",
          "IoT sensor integration for real-time occupancy updates",
          "Data analytics engine for generating congestion and parking throughput metrics"
        ]
      },
      keyFeatures: {
        title: "Key Features",
        content:
          "Core functional capabilities designed to support real-time intelligent urban transit operations:",
        points: [
          "Intelligent traffic density monitoring across arterial intersections",
          "Automated parking slot occupancy tracking via simulated sensor networks",
          "Real-time municipal telemetry dashboards presenting actionable metrics",
          "Predictive congestion forecasts enabling preemptive rerouting"
        ]
      },
      challenges: {
        title: "Challenges",
        content:
          "Ensuring rapid inference latency over high-volume simulated sensor feeds and harmonizing disparate data formats from edge sensors and central analytical storage."
      },
      futureScope: {
        title: "Future Scope",
        content:
          "Expanding to live municipal camera integrations, federated learning across edge devices, and dynamic traffic signal timing adjustments driven by reinforcement learning."
      }
    }
  },
  {
    id: "crowdflow-analytics",
    slug: "crowdflow-analytics",
    title: "CrowdFlow Analytics System",
    year: "2025",
    category: "Computer Vision • YOLOv5 • Edge AI • Raspberry Pi",
    filterCategories: ["ai-ml", "analytics", "software"],
    shortDescription:
      "Real-time crowd detection, density analysis, and safety alerts in public environments built with YOLOv5, OpenCV, Flask, and Raspberry Pi.",
    fullDescription:
      "An AI-driven CrowdFlow Analytics System for real-time crowd detection, density analysis, and safety alerts in public environments. Developed using YOLOv5, OpenCV, Flask, and Raspberry Pi with support for people counting and live heatmap visualization.",
    technologies: ["Python", "YOLOv5", "OpenCV", "Flask", "Raspberry Pi", "Computer Vision"],
    features: [
      "Real-time people detection & counting",
      "Dynamic density heatmap visualization",
      "Automated over-crowding hazard alerts",
      "Edge-optimized inference on Raspberry Pi",
      "Flask REST API for camera telemetry",
      "Historical ingress/egress analytics"
    ],
    githubUrl: "https://github.com/amann1602/CrowdFlow",
    liveUrl: null,
    isLive: false,
    hasDedicatedPage: true,
    image: "/images/projects/crowdflow.png",
    sections: {
      overview: {
        title: "Overview",
        content:
          "CrowdFlow Analytics is an edge-deployed computer vision platform engineered to monitor pedestrian density, estimate crowd counts, and trigger safety alerts in densely populated venues."
      },
      problem: {
        title: "Problem",
        content:
          "High-footfall environments like transit terminals, religious gatherings, and stadiums are vulnerable to sudden stampedes and bottlenecks without automated spatial density monitoring."
      },
      solution: {
        title: "Solution",
        content:
          "Developed an optimized deep-learning vision pipeline using YOLOv5 for rapid object localization, tracking pedestrian bounding boxes and generating live heatmaps on low-power edge hardware."
      },
      technology: {
        title: "Technology Stack",
        content:
          "Engineered with YOLOv5 deep learning models, OpenCV computer vision processing, Flask backend services, and lightweight deployment targeting Raspberry Pi microcomputers.",
        points: [
          "YOLOv5 model fine-tuned for high-angle overhead crowd detection",
          "OpenCV video frame ingestion, normalization, and heatmap generation",
          "Flask REST API streaming metrics and alert webhooks",
          "Raspberry Pi edge inference with lightweight quantization"
        ]
      },
      challenges: {
        title: "Challenges",
        content:
          "Maintaining robust real-time detection frame rates (15+ FPS) under tight computational and memory constraints on edge devices."
      },
      futureScope: {
        title: "Future Scope",
        content:
          "Integrating bi-directional optical flow for panic vector detection and multi-camera spatial handoff algorithms."
      }
    }
  },
  {
    id: "smart-train-planner",
    slug: "smart-train-planner",
    title: "AI-Powered Smart Train Planner",
    year: "2025",
    category: "AI • Computer Vision • Transit Analytics • Decision Systems",
    filterCategories: ["ai-ml", "analytics", "software"],
    shortDescription:
      "AI-powered transit planning system for Mumbai Locals monitoring real-time crowd density and predicting congestion using computer vision and edge analytics.",
    fullDescription:
      "An intelligent commuter and transit management platform combining computer vision for carriage crowd estimation and predictive congestion modeling to optimize urban railway transit.",
    technologies: ["Python", "Computer Vision", "Analytics", "Flask", "Edge AI", "OpenCV"],
    features: [
      "Real-time commuter crowd density estimation",
      "Suburban railway carriage congestion forecasting",
      "Railway authority decision-support analytics",
      "Dynamic commuter route safety advisory",
      "Automated rush-hour scheduling alerts",
      "Edge-compatible video processing"
    ],
    githubUrl: "https://github.com/amann1602/AI-Powered-Smart-Train-Planner",
    liveUrl: null,
    isLive: false,
    hasDedicatedPage: false,
    sections: {
      overview: {
        title: "Overview",
        content:
          "AI-Powered Smart Train Planner addresses suburban rail congestion in Mumbai Locals using computer vision to track carriage density and predict bottleneck patterns."
      },
      problem: {
        title: "Problem",
        content:
          "Millions of daily rail commuters face extreme congestion, safety hazards, and unpredictable carriage crowding with zero real-time passenger density visibility."
      },
      solution: {
        title: "Solution",
        content:
          "Deployed an AI analytics pipeline analyzing station and carriage telemetry to compute live occupancy percentages and guide commuter distribution."
      },
      technology: {
        title: "Technology Stack",
        content:
          "Built using Python, OpenCV for vision processing, Flask for telemetry delivery, and predictive time-series models for rush-hour forecasts.",
        points: [
          "Python analytics engine processing real-time platform telemetry",
          "Computer vision models estimating passenger carriage loads",
          "Predictive algorithms forecasting station congestion windows",
          "Automated commuter advisory alerts"
        ]
      },
      challenges: {
        title: "Challenges",
        content:
          "Handling extreme occlusions in dense passenger crowds and irregular train arrival schedules."
      },
      futureScope: {
        title: "Future Scope",
        content:
          "Connecting directly with Western and Central Railway open APIs and mobile commuter push notification services."
      }
    }
  },
  {
    id: "ayubarter",
    slug: "ayubarter",
    title: "AyuBarter Hyperlocal Wellness Platform",
    year: "2025",
    category: "Web Application • AI Recommender • TypeScript • React",
    filterCategories: ["software", "ai-ml"],
    shortDescription:
      "Innovative Ayurvedic wellness and hyperlocal barter platform integrating AI-enabled healthcare matching, digital services, and community network exchange.",
    fullDescription:
      "AyuBarter is an innovative Ayurvedic wellness and hyperlocal barter platform that integrates AI-enabled healthcare, seamless digital services, and traditional exchange culture within a trusted community network.",
    technologies: ["React.js", "TypeScript", "AI Recommender", "REST APIs", "Tailwind CSS", "Node.js"],
    features: [
      "AI-guided wellness & Ayurvedic symptom matching",
      "Hyperlocal service and barter exchange engine",
      "Secure user profile & consultation scheduling",
      "Responsive high-performance React UI",
      "RESTful API architecture with validation",
      "Real-time community exchange feeds"
    ],
    githubUrl: "https://github.com/amann1602/AyuBarter",
    liveUrl: null,
    isLive: false,
    hasDedicatedPage: true,
    image: "/images/projects/ayubarter.png",
    sections: {
      overview: {
        title: "Overview",
        content:
          "AyuBarter is a modern healthcare web platform engineered to streamline access to health resources, wellness consultations, and AI-guided recommendation services."
      },
      problem: {
        title: "Problem",
        content:
          "Access to consolidated, reliable wellness guidance and streamlined remote health consultations often remains fragmented across disjointed digital platforms."
      },
      solution: {
        title: "Solution",
        content:
          "Engineered a cohesive React.js application backed by structured REST APIs that incorporates intelligent recommendation logic to guide users toward relevant health resources."
      },
      technology: {
        title: "Technology Stack",
        content:
          "Built with React.js for the responsive single-page user interface, modern JavaScript/TypeScript, REST API integration, and AI recommendation services.",
        points: [
          "React.js component-driven frontend architecture",
          "Modular CSS and state management for seamless navigation",
          "RESTful API endpoints for secure patient and doctor telemetry",
          "AI recommendation logic matching user health inquiries"
        ]
      },
      challenges: {
        title: "Challenges",
        content:
          "Maintaining rapid UI render performance while handling dynamic recommendation queries and securing sensitive user interaction data."
      },
      futureScope: {
        title: "Future Scope",
        content:
          "Integrating WebRTC-based direct encrypted consultations, expanded multilingual advisory support, and wearable biometric telemetry synchronization."
      }
    }
  },
  {
    id: "emotion-detector",
    slug: "emotion-detector",
    title: "Deep Learning Facial Emotion Recognition",
    year: "2025",
    category: "Computer Vision • Deep Learning • CNN • Python",
    filterCategories: ["ai-ml", "research"],
    shortDescription:
      "Real-time facial expression and sentiment detection pipeline using Convolutional Neural Networks and OpenCV for human-computer interaction analysis.",
    fullDescription:
      "A deep learning computer vision model trained on multi-class emotional facial datasets, performing real-time webcam inference to classify expressions and affective states.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Keras", "Deep Learning", "CNN"],
    features: [
      "Real-time webcam video stream inference",
      "Multi-class facial feature extraction (Joy, Sad, Neutral, Angry)",
      "High-accuracy CNN neural architecture with dropout regularization",
      "Sub-50ms inference latency on standard hardware",
      "Real-time bounding box probability overlays",
      "Model evaluation benchmarks and confusion matrices"
    ],
    githubUrl: "https://github.com/amann1602/Emotion-Detector",
    liveUrl: null,
    isLive: false,
    hasDedicatedPage: false,
    sections: {
      overview: {
        title: "Overview",
        content:
          "Emotion Detector is an AI-powered computer vision model that classifies human emotions in real-time video streams using deep Convolutional Neural Networks."
      },
      problem: {
        title: "Problem",
        content:
          "Automated affective computing and behavioral analysis require robust facial landmark detection resistant to varied lighting, head angles, and low camera resolutions."
      },
      solution: {
        title: "Solution",
        content:
          "Constructed a multi-layer CNN pipeline trained with image augmentation and Haar cascade face detection to extract invariant facial feature vectors."
      },
      technology: {
        title: "Technology Stack",
        content:
          "Developed in Python leveraging TensorFlow/Keras deep learning frameworks and OpenCV for real-time video ingestion.",
        points: [
          "Convolutional Neural Network (CNN) architecture with batch normalization",
          "OpenCV Haar Cascades for low-overhead face localization",
          "Data augmentation techniques improving real-world generalization",
          "Live probability visualization HUD"
        ]
      },
      challenges: {
        title: "Challenges",
        content:
          "Preventing model overfitting across imbalanced emotion classes and minimizing frame latency during continuous live webcam capture."
      },
      futureScope: {
        title: "Future Scope",
        content:
          "Integration with pupil dilation tracking and multimodal speech-emotion fusion for enhanced psychometric assessment."
      }
    }
  },
  {
    id: "webhookapp",
    slug: "webhookapp",
    title: "Enterprise Spring Boot Webhook API Engine",
    year: "2025",
    category: "Backend • Spring Boot • Microservices • Java",
    filterCategories: ["software"],
    shortDescription:
      "High-throughput Spring Boot webhook microservice engineered for Bajaj Finserv evaluation with fault-tolerant event processing and signature validation.",
    fullDescription:
      "Production-grade webhook processing service designed to ingest, validate, and dispatch high-frequency partner event payloads with automated retry policies and HMAC verification.",
    technologies: ["Java", "Spring Boot", "REST APIs", "Maven", "JSON Security", "JUnit"],
    features: [
      "Automated payload schema validation and error handling",
      "Asynchronous event ingestion queue architecture",
      "HMAC cryptographic signature security validation",
      "Structured JSON audit logging and status telemetry",
      "Spring Boot production actuator health endpoints",
      "High test coverage with JUnit and Mockito"
    ],
    githubUrl: "https://github.com/amann1602/webhookapp",
    liveUrl: null,
    isLive: false,
    hasDedicatedPage: false,
    sections: {
      overview: {
        title: "Overview",
        content:
          "Engineered for the Bajaj Finserv technical evaluation, this Spring Boot service provides a resilient webhook reception and processing engine."
      },
      problem: {
        title: "Problem",
        content:
          "Enterprise financial event pipelines require microservices capable of digesting unpredictable bursts of incoming webhooks without payload loss or tampering."
      },
      solution: {
        title: "Solution",
        content:
          "Built a robust Spring Boot REST service with idempotent processing, signature headers verification, and asynchronous task execution."
      },
      technology: {
        title: "Technology Stack",
        content:
          "Java 17, Spring Boot, Spring Web, Maven, Jackson JSON parser, and JUnit.",
        points: [
          "Spring Boot dependency injection and MVC architecture",
          "Secure webhook authentication with cryptographic validation",
          "Graceful exception handling with standardized HTTP status contracts",
          "Maven build lifecycle and reproducible container readiness"
        ]
      },
      challenges: {
        title: "Challenges",
        content:
          "Ensuring atomic payload processing and idempotency when handling duplicate incoming webhook dispatches."
      },
      futureScope: {
        title: "Future Scope",
        content:
          "Adding Apache Kafka distributed broker ingestion for linear scaling to 50,000+ events/sec."
      }
    }
  },
  {
    id: "hospital-management",
    slug: "hospital-management",
    title: "Hospital Information & Clinical Management System",
    year: "2024",
    category: "Enterprise Java • JSP • JDBC • MySQL Architecture",
    filterCategories: ["software"],
    shortDescription:
      "Full-scale clinical portal developed with Java Servlets, JSP, and MySQL covering inpatient admissions, doctor scheduling, electronic records, and billing.",
    fullDescription:
      "Comprehensive healthcare portal supporting hospital administrative workflows, patient consultation history, appointment scheduling, and automated invoice calculation.",
    technologies: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "Apache Tomcat"],
    features: [
      "Patient registration and electronic health record management",
      "Doctor scheduling and appointment booking matrix",
      "Secure session authentication and role-based access control",
      "Automated billing, pharmacy dispensing, and invoice generation",
      "Optimized SQL schemas with relational foreign key integrity",
      "Deployment on Apache Tomcat servlet container"
    ],
    githubUrl: "https://github.com/amann1602/Hospital_Management_System_JSP_Servlet_JDBC",
    liveUrl: null,
    isLive: false,
    hasDedicatedPage: false,
    sections: {
      overview: {
        title: "Overview",
        content:
          "A full-featured clinical administration portal built with enterprise Java technologies to automate hospital workflows and electronic records."
      },
      problem: {
        title: "Problem",
        content:
          "Traditional manual paper-based hospital record keeping causes diagnostic delays, billing errors, and lost medical histories."
      },
      solution: {
        title: "Solution",
        content:
          "Designed a centralized Java JSP/Servlet system connected via JDBC to a relational MySQL database providing unified patient lifecycle tracking."
      },
      technology: {
        title: "Technology Stack",
        content:
          "Java, JSP, Servlets, JDBC, MySQL, HTML5, CSS3, Apache Tomcat.",
        points: [
          "Model-View-Controller (MVC) architecture",
          "Connection pooling and sanitized SQL queries via PreparedStatements",
          "Session tracking and role-based access control (Admin, Doctor, Patient)",
          "Transactional database integrity for billing and appointment bookings"
        ]
      },
      challenges: {
        title: "Challenges",
        content:
          "Preventing SQL injection vulnerabilities and optimizing relational table joins across large patient histories."
      },
      futureScope: {
        title: "Future Scope",
        content:
          "Migrating the monolithic servlet architecture to microservices with Spring Cloud and HL7 FHIR compliance."
      }
    }
  },
  {
    id: "ecommerce-hibernate",
    slug: "ecommerce-hibernate",
    title: "E-Commerce Catalog & Product Management System",
    year: "2024",
    category: "Java • Hibernate ORM • Maven • MySQL",
    filterCategories: ["software"],
    shortDescription:
      "Modular product inventory engine implementing Hibernate ORM for relational mapping, multi-category CRUD workflows, and optimized query execution.",
    fullDescription:
      "Backend inventory management platform leveraging Hibernate 5 ORM for persistent data lifecycle, transactional integrity, and scalable catalog indexing.",
    technologies: ["Java", "Hibernate ORM", "Maven", "MySQL", "OOP", "HQL"],
    features: [
      "Automated database schema mapping via Hibernate ORM XML/Annotations",
      "Category and product relational CRUD operations with cascade persistence",
      "Optimized HQL queries with Hibernate SessionFactory connection pooling",
      "Clean MVC layered enterprise structure with DAO pattern",
      "Robust exception handling and transactional rollback support",
      "Standardized Maven dependency and build lifecycle management"
    ],
    githubUrl: "https://github.com/amann1602/ECommerce_Product_Management_System_Hibernate_Maven",
    liveUrl: null,
    isLive: false,
    hasDedicatedPage: false,
    sections: {
      overview: {
        title: "Overview",
        content:
          "Enterprise product catalog backend leveraging Hibernate ORM to abstract database operations and ensure reliable transactional management."
      },
      problem: {
        title: "Problem",
        content:
          "Manual JDBC boilerplate code for complex multi-table e-commerce inventory catalogs is error-prone, hard to maintain, and difficult to scale."
      },
      solution: {
        title: "Solution",
        content:
          "Implemented Hibernate ORM object-relational mapping with DAO and Service layers to ensure clean data persistence and rapid query resolution."
      },
      technology: {
        title: "Technology Stack",
        content:
          "Java, Hibernate 5 ORM, MySQL, Maven, HQL.",
        points: [
          "Hibernate SessionFactory and Transaction orchestration",
          "Entity relational mappings (@OneToMany, @ManyToOne)",
          "HQL (Hibernate Query Language) for database-independent operations",
          "Maven POM structure managing core dependencies"
        ]
      },
      challenges: {
        title: "Challenges",
        content:
          "Managing lazy loading exceptions and configuring cascade operations across interrelated inventory categories."
      },
      futureScope: {
        title: "Future Scope",
        content:
          "Integration with Redis caching for second-level Hibernate cache and elasticsearch product search indexing."
      }
    }
  },
  {
    id: "bank-management",
    slug: "bank-management",
    title: "Core Java Banking & Account Management System",
    year: "2024",
    category: "Core Java • OOP Architecture • FinTech",
    filterCategories: ["software"],
    shortDescription:
      "Console-based banking transaction engine engineered with OOP principles, encapsulated state handling, balance tracking, and ledger validation.",
    fullDescription:
      "Robust banking transaction system implementing encapsulation, inheritance, and polymorphism for multi-account deposit, withdrawal, and audit histories.",
    technologies: ["Java", "Object-Oriented Programming", "Design Patterns", "Data Structures"],
    features: [
      "Multi-account creation with unique account identification",
      "Atomic deposit and withdrawal transaction processing with balance guards",
      "Account ledger tracking with input sanitization and exception handling",
      "Extensible OOP class architecture modeling diverse account types",
      "Strict data encapsulation preventing unauthorized balance mutations",
      "Interactive command-driven user interface"
    ],
    githubUrl: "https://github.com/amann1602/Bank_Management_System-Java",
    liveUrl: null,
    isLive: false,
    hasDedicatedPage: false,
    sections: {
      overview: {
        title: "Overview",
        content:
          "A foundational banking engine written in Java demonstrating clean OOP principles, defensive programming, and state management."
      },
      problem: {
        title: "Problem",
        content:
          "Financial software requires strict transaction validation, boundary checks, and encapsulation to prevent negative balances and state leaks."
      },
      solution: {
        title: "Solution",
        content:
          "Architected classes for Accounts, Transactions, and Customers using inheritance, polymorphism, and encapsulation with rigorous input verification."
      },
      technology: {
        title: "Technology Stack",
        content:
          "Java SE, Collections Framework, OOP design patterns.",
        points: [
          "Encapsulated data models with private access modifiers",
          "Custom runtime exceptions handling overdrafts and invalid inputs",
          "Polymorphic transaction dispatch",
          "Memory-efficient collection structures"
        ]
      },
      challenges: {
        title: "Challenges",
        content:
          "Handling edge cases in balance calculation without precision rounding errors."
      },
      futureScope: {
        title: "Future Scope",
        content:
          "Adding persistent file storage, multi-threaded customer simulation, and GUI using JavaFX."
      }
    }
  },
  {
    id: "smart-city-samved",
    slug: "smart-city-samved",
    title: "Samved Solapur Smart City Civic Portal",
    year: "2024",
    category: "Smart City • Urban Tech • Frontend",
    filterCategories: ["software", "analytics"],
    shortDescription:
      "Civic intelligence platform designed for municipal services discovery, citizen engagement, and transparent urban administration telemetry.",
    fullDescription:
      "Interactive municipal web portal developed for Solapur Smart City initiatives, enabling citizens to access civic telemetry, local initiatives, and urban utilities.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Civic Tech"],
    features: [
      "Interactive municipal services catalog and directory",
      "Responsive cross-device civic interface with high accessibility",
      "Citizen issue submission & public tracking workflows",
      "Community initiative awareness directory and news bulletin",
      "Optimized lightweight loading performance on mobile networks",
      "Structured civic utility categories"
    ],
    githubUrl: "https://github.com/amann1602/Samved-Solapur-Smartcity",
    liveUrl: null,
    isLive: false,
    hasDedicatedPage: false,
    sections: {
      overview: {
        title: "Overview",
        content:
          "Samved Solapur Smart City is an urban civic web portal created to bridge communication between citizens and municipal authorities."
      },
      problem: {
        title: "Problem",
        content:
          "Citizens often lack a unified, mobile-friendly digital hub to discover municipal services, report urban issues, and follow city development updates."
      },
      solution: {
        title: "Solution",
        content:
          "Developed an intuitive, responsive web portal that presents municipal resources, civic contact directories, and city projects in a modern layout."
      },
      technology: {
        title: "Technology Stack",
        content:
          "HTML5, CSS3, JavaScript, Responsive Design.",
        points: [
          "Semantic HTML5 ensuring screen-reader accessibility",
          "Custom responsive CSS layout engineered for mobile and desktop screens",
          "Vanilla JavaScript for dynamic DOM updates and interactive accordions",
          "Low-bandwidth optimization for fast mobile loading"
        ]
      },
      challenges: {
        title: "Challenges",
        content:
          "Structuring large amounts of municipal data into simple, intuitive navigation hierarchies."
      },
      futureScope: {
        title: "Future Scope",
        content:
          "Adding GIS map layers for real-time pothole reporting and municipal grievance tracking."
      }
    }
  },
  {
    id: "cineflow",
    slug: "cineflow",
    title: "CineFlow Modern Entertainment Discovery",
    year: "2024",
    category: "Web Application • JavaScript • UI/UX",
    filterCategories: ["software"],
    shortDescription:
      "Interactive media and movie discovery platform featuring responsive film catalogs, dynamic search indexing, and modern dark-mode aesthetic.",
    fullDescription:
      "Modern web application showcasing curated media metadata, user search filtering, dynamic categorization, and fluid transition animations.",
    technologies: ["JavaScript", "HTML5", "CSS3", "API Integration", "UI/UX"],
    features: [
      "Dynamic search and multi-genre filtering engine",
      "Responsive media cards and community rating display",
      "Fluid CSS animations and immersive modern dark aesthetic",
      "Optimized client-side rendering with zero framework overhead",
      "Interactive modal trailers and movie synopsis panels",
      "Cross-device mobile-first responsive grid"
    ],
    githubUrl: "https://github.com/amann1602/CineFlow",
    liveUrl: null,
    isLive: false,
    hasDedicatedPage: false,
    sections: {
      overview: {
        title: "Overview",
        content:
          "CineFlow is an entertainment discovery platform designed to offer movie lovers an engaging, responsive interface to explore movies and ratings."
      },
      problem: {
        title: "Problem",
        content:
          "Many movie catalog sites suffer from cluttered UI, heavy ad scripts, and sluggish mobile browsing experiences."
      },
      solution: {
        title: "Solution",
        content:
          "Built a sleek, lightweight movie discovery web app with rapid live search, fluid hover interactions, and clean content layouts."
      },
      technology: {
        title: "Technology Stack",
        content:
          "JavaScript (ES6+), Modern CSS3, HTML5, Media APIs.",
        points: [
          "Asynchronous API data fetching with debounce search logic",
          "Modern CSS Grid and Flexbox with dark mode accents",
          "Lightweight client bundle with fast First Contentful Paint (FCP)",
          "Touch-optimized carousel and grid layouts"
        ]
      },
      challenges: {
        title: "Challenges",
        content:
          "Implementing responsive debounce search without exceeding rate limits on media API endpoints."
      },
      futureScope: {
        title: "Future Scope",
        content:
          "Adding user accounts, personalized watchlists, and collaborative movie review features."
      }
    }
  }
];

export const projectFilterTabs = [
  { id: "all", label: "All Projects (11)" },
  { id: "ai-ml", label: "AI & ML" },
  { id: "analytics", label: "Analytics" },
  { id: "software", label: "Software & Systems" },
  { id: "research", label: "R&D & Research" }
];

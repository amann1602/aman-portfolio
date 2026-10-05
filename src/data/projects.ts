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
  image?: string;
  sections: {
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
    category: "AI • IoT • Machine Learning • Analytics",
    filterCategories: ["ai-ml", "analytics", "research"],
    shortDescription:
      "Designed and developed an AI-powered traffic and parking management solution using Python and Machine Learning with real-time analytics and predictive monitoring.",
    fullDescription:
      "An intelligent, integrated urban mobility solution combining computer vision, predictive machine learning algorithms, and IoT sensors to monitor vehicular density, automate parking allocation, and power real-time municipal decision-support dashboards.",
    technologies: ["Python", "Machine Learning", "AI", "IoT", "Analytics"],
    features: [
      "Intelligent traffic monitoring",
      "Parking management",
      "Real-time monitoring",
      "Analytics dashboards",
      "Decision support",
      "Predictive analytics",
      "Automation"
    ],
    githubUrl: null, // Placeholder: Add exact repository URL when available
    liveUrl: null,   // Placeholder: Add live demo URL when available
    isLive: false,
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
          "Intelligent traffic density monitoring",
          "Automated parking spot availability management",
          "Real-time system telemetry and alert generation",
          "Interactive analytics dashboards for operators",
          "Predictive analytics for peak volume forecasting",
          "Automated decision support for routing and dispatch"
        ]
      },
      analytics: {
        title: "Analytics & Decision Support",
        content:
          "The system computes actionable metrics including throughput rate, lane occupancy indices, wait duration trends, and predictive parking availability scores to guide traffic managers."
      },
      systemArchitecture: {
        title: "System Architecture",
        content:
          "Add detailed architecture diagram here once production schematic is published.",
        placeholderNote: "Add detailed architecture diagram here"
      },
      challenges: {
        title: "Challenges",
        content:
          "Overcoming sensor noise, handling fluctuating lighting conditions across parking lots, and ensuring low-latency data transmission during peak traffic loads."
      },
      futureScope: {
        title: "Future Scope",
        content:
          "Expanding system integration with municipal smart city operations centers, edge-computed vision models, and public driver-facing mobile applications for instant navigation."
      }
    }
  },
  {
    id: "crowdflow-analytics",
    slug: "crowdflow-analytics",
    title: "CrowdFlow Analytics System",
    year: "2025",
    category: "Computer Vision • AI • Real-Time Analytics",
    filterCategories: ["ai-ml", "analytics", "software"],
    shortDescription:
      "Developed a real-time crowd monitoring system using Python, YOLOv5 and Computer Vision for intelligent spatial density analysis.",
    fullDescription:
      "A high-throughput computer vision pipeline engineered to monitor pedestrian flow in real time, detect crowded clusters, and generate instantaneous telemetry for public safety and venue management.",
    technologies: ["Python", "YOLOv5", "Computer Vision", "AI", "Analytics"],
    features: [
      "Real-time crowd monitoring",
      "Object detection",
      "Analytics dashboard",
      "Intelligent decision support",
      "Real-time performance optimization"
    ],
    githubUrl: null, // Placeholder: Add exact repository URL when available
    liveUrl: null,   // Placeholder: Add live demo URL when available
    isLive: false,
    image: "/images/projects/crowdflow.png",
    sections: {
      overview: {
        title: "Overview",
        content:
          "The CrowdFlow Analytics System is a real-time visual intelligence platform designed to detect, track, and analyze crowd movements and density hotspots across monitored zones."
      },
      problem: {
        title: "Problem",
        content:
          "Large venues, transit terminals, and public gatherings require proactive crowd density monitoring to prevent overcrowding incidents, bottlenecks, and safety hazards without infringing on individual privacy."
      },
      solution: {
        title: "Solution",
        content:
          "Engineered a computer vision pipeline utilizing YOLOv5 object detection in Python to process live video frames, enumerate individuals, calculate spatial densities, and trigger automated threshold alerts."
      },
      technology: {
        title: "Technology Stack",
        content:
          "Leveraged Python, YOLOv5 neural detection architecture, OpenCV for video stream processing, and analytics dashboard utilities for real-time visualization.",
        points: [
          "Python for core runtime and analytical modules",
          "YOLOv5 neural weights optimized for high-speed person detection",
          "Computer Vision preprocessing for contrast enhancement and perspective normalization",
          "Real-time analytics engine calculating flow velocity and density heatmaps"
        ]
      },
      computerVision: {
        title: "Computer Vision & Object Detection",
        content:
          "Utilizes deep learning bounding-box estimation to accurately identify persons even under partial occlusion and variable vantage points."
      },
      realTimeMonitoring: {
        title: "Real-Time Monitoring",
        content:
          "Processes multi-frame inputs continuously, generating live headcount metrics and movement vectors across predefined monitoring zones."
      },
      dashboard: {
        title: "Analytics Dashboard",
        content:
          "Delivers intuitive graphical dashboards presenting crowd flow rates, peak density intervals, and spatial distribution graphs for operations staff."
      },
      optimization: {
        title: "Performance Optimization",
        content:
          "Fine-tuned frame inference frequency, bounding box tracking thresholds, and memory allocation to maintain responsive frame rates during prolonged operational tests."
      },
      challenges: {
        title: "Challenges",
        content:
          "Minimizing false positives in dense overlapping groups, preserving high inference frame rates on non-datacenter compute hardware, and mitigating camera angle distortion."
      },
      futureScope: {
        title: "Future Improvements",
        content:
          "Integrating edge-device deployment on micro-computing platforms, bidirectional pedestrian trajectory forecasting, and cross-camera identity re-identification."
      }
    }
  },
  {
    id: "ayubarter",
    slug: "ayubarter",
    title: "AyuBarter",
    year: "2025",
    category: "AI • Healthcare • Web Development",
    filterCategories: ["software", "ai-ml", "research"],
    shortDescription:
      "Developed a healthcare platform using React.js, JavaScript and REST APIs featuring AI-powered wellness recommendations.",
    fullDescription:
      "A modern, responsive healthcare and tele-consultation platform connecting users with holistic wellness services, featuring AI-assisted recommendations and modular, accessible user interface architecture.",
    technologies: ["React.js", "JavaScript", "REST APIs", "AI"],
    features: [
      "Healthcare platform",
      "AI-powered recommendations",
      "Backend API integration",
      "Scalable frontend components",
      "Tele-consultation concept where supported by project information"
    ],
    githubUrl: null, // Placeholder: Add exact repository URL when available
    liveUrl: null,   // Placeholder: Add live demo URL when available
    isLive: false,
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
          "Engineered a cohesive React.js application backed by structured REST APIs that incorporates intelligent recommendation logic to guide users toward relevant health resources and consultations."
      },
      technology: {
        title: "Technology Stack",
        content:
          "Built with React.js for the responsive single-page user interface, modern JavaScript (ES6+), REST API integration for server-side persistence, and AI algorithmic recommendation services.",
        points: [
          "React.js component-driven frontend architecture",
          "Modular CSS and state management for seamless navigation",
          "RESTful API endpoints for secure patient and doctor telemetry",
          "AI recommendation logic matching user health inquiries with pertinent advisory resources"
        ]
      },
      aiIntegration: {
        title: "AI Integration",
        content:
          "Integrates smart recommendation flows that assist users in identifying relevant wellness services based on structured symptom inputs and profile preferences."
      },
      frontendArchitecture: {
        title: "Frontend Architecture",
        content:
          "Engineered with atomic component design, reusable forms, clear accessibility semantics, and adaptive layouts tested across mobile, tablet, and desktop devices."
      },
      apiIntegration: {
        title: "API Integration",
        content:
          "Constructed predictable REST API endpoints handling asynchronous authentication, appointment scheduling, and profile updates with robust error boundaries."
      },
      challenges: {
        title: "Challenges",
        content:
          "Maintaining rapid UI render performance while handling dynamic recommendation queries and securing sensitive user interaction data."
      },
      futureScope: {
        title: "Future Scope",
        content:
          "Integrating WebRTC-based direct encrypted video consultations, expanded multilingual advisory support, and wearable biometric telemetry synchronization."
      }
    }
  }
];

export const projectFilterTabs = [
  { id: "all", label: "All Projects" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "analytics", label: "Analytics" },
  { id: "software", label: "Software" },
  { id: "research", label: "Research" }
];

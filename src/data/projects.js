/**
 * Centralized Projects Data
 * Primary Source of Truth: Resume + Verified Production Deployments & Specifications
 * 
 * Rules:
 * - If liveUrl is null or "", "Live Demo Coming Soon" or hidden based on project type.
 * - If githubUrl is null or "", the "GitHub" button is hidden.
 * - Live status indicator (● Live Demo) only renders when liveUrl is present.
 */
export const projects = [
  {
    id: "crowdflow-analytics",
    number: "01",
    title: "CrowdFlow Analytics",
    year: "2025",
    category: "AI • Computer Vision • Smart Infrastructure",
    filterCategories: ["all", "ai", "analytics", "iot"],
    status: "Hardware & Edge Deployed",
    shortDescription: "An intelligent crowd detection and monitoring system designed to analyze crowd density in real time and support smarter public-space management.",
    overview: "CrowdFlow Analytics is an edge-compatible computer vision system designed to inspect video camera feeds, detect individuals in high-density areas, calculate occupancy metrics, and broadcast alerts to a centralized analytics dashboard.",
    problem: "Crowd monitoring is difficult to perform manually across multiple locations, leading to safety bottlenecks, delayed emergency responses, and lack of real-time crowd occupancy insights.",
    solution: "Computer vision-based real-time detection utilizing a fine-tuned YOLOv5 model running on Raspberry Pi 5 with USB camera input, streaming detections via a lightweight Flask REST API to a responsive React analytics dashboard.",
    technologies: [
      "YOLOv5",
      "OpenCV",
      "Python",
      "Flask",
      "React",
      "Raspberry Pi 5"
    ],
    hardware: [
      "Raspberry Pi 5",
      "USB Camera / CCTV Feed"
    ],
    architecture: [
      { step: "01", name: "Camera", desc: "USB Camera / RTSP Video Feed" },
      { step: "02", name: "Raspberry Pi 5", desc: "Edge Computing Hardware Unit" },
      { step: "03", name: "YOLOv5", desc: "Object Detection Model" },
      { step: "04", name: "Detection Engine", desc: "Density & Occupancy Calculation" },
      { step: "05", name: "Flask API", desc: "High-Throughput Microservice" },
      { step: "06", name: "React Dashboard", desc: "Live Visualization & Operator UI" },
      { step: "07", name: "Analytics / Alerts", desc: "Threshold Alert Triggers & Logs" }
    ],
    features: [
      "Real-time crowd detection",
      "People counting & occupancy estimation",
      "Crowd density monitoring with color-coded safety tiers",
      "Location-based monitoring across multiple physical zones",
      "Dashboard analytics with real-time graph visualization",
      "Alert system concept with surge notifications",
      "Multi-location support for distributed venue clusters",
      "Weather information integration for ambient context",
      "CCTV integration concept via RTSP stream feeds",
      "Predictive analysis concept for crowd inflow estimation"
    ],
    challenges: [
      "Raspberry Pi processing limitations requiring inference speed optimizations",
      "Network dependency when transmitting multi-stream video metrics",
      "Low-light detection challenges under uneven night illumination",
      "Heat management during prolonged edge compute operation"
    ],
    contributions: [
      "Engineered and optimized YOLOv5 inference pipeline for stable edge frame rates",
      "Constructed Flask REST API endpoints to stream real-time JSON metrics to React",
      "Designed the responsive React analytics dashboard with dynamic density meters",
      "Configured threshold-based surge detection algorithms for security operator alerts"
    ],
    results: "Successfully demonstrated real-time detection on Raspberry Pi 5 hardware with consistent headcount accuracy across multiple testing zones.",
    futureImprovements: [
      "Cloud analytics synchronization for historical big-data aggregation",
      "Predictive crowd forecasting using temporal sequence models",
      "Voice/SMS alerts for immediate emergency dispatch notifications",
      "Drone integration for aerial surveillance in large public gatherings",
      "Emergency evacuation integration with automated digital signage",
      "Offline detection optimization with quantized edge models (TensorRT / NCNN)"
    ],
    liveUrl: null, // Edge / Hardware deployed system
    githubUrl: "https://github.com/amann1602",
    backendUrl: null,
    isLive: false,
    badge: "AI • Computer Vision • IoT"
  },
  {
    id: "granthalay-jagat",
    number: "02",
    title: "Granthalay Jagat",
    year: "2025",
    category: "Digital Media • Full Stack • Marathi Technology",
    filterCategories: ["all", "web", "fullstack"],
    status: "Production Live",
    shortDescription: "A modern Marathi digital news platform designed to organize and deliver technology and library-related information through a scalable web architecture.",
    overview: "Granthalay Jagat is an active production digital news platform serving Marathi-speaking readers and library science professionals. It features a full-stack MERN architecture with automated RSS feed ingestion scripts, content curation tools, and high-availability cloud deployment.",
    problem: "Regional language publications often depend on antiquated, non-responsive platforms with sluggish mobile performance, lack of automated syndication, and cumbersome editorial tools.",
    solution: "Designed and deployed a responsive React/Tailwind frontend on Vercel paired with a Node.js/Express REST backend on Render and a managed MongoDB Atlas cluster, secured via JWT authentication.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "REST API",
      "Vercel",
      "Render"
    ],
    hardware: [],
    architecture: [
      { step: "01", name: "React Frontend", desc: "Responsive UI Deployed on Vercel" },
      { step: "02", name: "REST API", desc: "JWT-Secured Endpoints" },
      { step: "03", name: "Node.js + Express", desc: "Backend Server on Render" },
      { step: "04", name: "MongoDB Atlas", desc: "Cloud Document Database" }
    ],
    features: [
      "Marathi news portal delivering regional technology and library updates",
      "Admin dashboard for publishing, categorizing, and editing articles",
      "JWT authentication ensuring secure editorial session management",
      "MongoDB database with structured indexing for rapid search queries",
      "REST APIs built for modular frontend consumption",
      "RSS news aggregation syncing external publications automatically",
      "Automated news fetching on scheduled background worker intervals",
      "Responsive UI optimized for desktop, tablets, and mobile devices",
      "Content management system with draft and publication workflows"
    ],
    challenges: [
      "Typography and font rendering optimizations for complex Marathi Unicode glyphs",
      "Automated deduplication logic to prevent redundant RSS feed ingestion",
      "Cold-start optimization on free-tier cloud backend instances"
    ],
    contributions: [
      "Architected the end-to-end full stack MERN web application",
      "Implemented automated RSS scraper jobs running on cron triggers",
      "Built the JWT-secured administrative portal for article management",
      "Maintained and optimized production deployments on Vercel and Render"
    ],
    results: "Actively deployed and serving live traffic at granthalayjagat.in with instant search and responsive readability across mobile devices.",
    futureImprovements: [
      "Elasticsearch integration for full-text semantic regional search",
      "Push notification service for breaking technology and library bulletins",
      "Multi-author collaboration roles with granular permission levels"
    ],
    liveUrl: "https://granthalayjagat.in",
    githubUrl: "https://github.com/amann1602/granthalay-jagat",
    backendUrl: "https://granthalay-backend.onrender.com/api",
    isLive: true,
    badge: "Full Stack • Production Live"
  },
  {
    id: "hospital-management",
    number: "03",
    title: "Hospital Management System",
    year: "2025",
    category: "Healthcare • Full Stack • Web Application",
    filterCategories: ["all", "web", "fullstack"],
    status: "Functional Web System",
    shortDescription: "A full-stack hospital management platform designed to simplify patient, doctor and healthcare information workflows.",
    overview: "A full-stack clinical administration and patient management system that streamlines healthcare scheduling, physician directory discovery, automated medical record tracking, and health symptom screening into a unified, secure portal.",
    problem: "Healthcare clinics and small hospital facilities often suffer from fragmented record-keeping, manual appointment scheduling, delayed doctor communication, and cumbersome patient intake processes.",
    solution: "Developed a Python/Flask web platform utilizing SQLAlchemy ORM and SQLite with Flask-Login session security, integrating doctor availability tracking, appointment scheduling, and patient history records.",
    technologies: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "SQLite",
      "Flask-Login",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    hardware: [],
    architecture: [
      { step: "01", name: "Client Browser", desc: "Responsive HTML5/CSS/JS Interface" },
      { step: "02", name: "Flask Web Engine", desc: "Routing, Templates & Controller Logic" },
      { step: "03", name: "Flask-Login Auth", desc: "Session Security & Access Controls" },
      { step: "04", name: "SQLAlchemy ORM", desc: "Data Modeling & Relationship Mapping" },
      { step: "05", name: "SQLite Database", desc: "Relational Clinical Records Store" }
    ],
    features: [
      "Role-based authentication for patients, physicians, and administrative staff",
      "Doctor availability tracking with interactive schedule slots",
      "Patient workflow management from registration to discharge notes",
      "Health news portal delivering medical updates and preventative tips",
      "Interactive symptom checker providing preliminary health categorization",
      "Database management for patient histories and appointment logs",
      "Secure login with password hashing and session expiry protections"
    ],
    challenges: [
      "Ensuring strict separation of patient clinical data and doctor schedules",
      "Designing an intuitive booking workflow requiring zero digital training",
      "Preventing double-booking conflicts across overlapping physician schedules"
    ],
    contributions: [
      "Implemented Flask backend routes and session authentication with Flask-Login",
      "Structured SQLAlchemy database models for Patients, Doctors, and Appointments",
      "Developed the frontend medical dashboard with patient scheduling workflows",
      "Integrated preliminary symptom checking logic and health news feed"
    ],
    results: "Validated full patient journey from self-registration to doctor appointment booking and medical history review.",
    futureImprovements: [
      "HIPAA-compliant cloud database migration with end-to-end encryption",
      "Automated SMS/Email appointment reminders using Twilio / SendGrid",
      "Telemedicine video consultation integration via WebRTC"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/amann1602",
    backendUrl: null,
    isLive: false,
    badge: "Healthcare • Full Stack • Web App"
  },
  {
    id: "smart-traffic-parking",
    number: "04",
    title: "Smart Traffic & Parking Management",
    year: "2026",
    category: "AI • IoT • Smart City",
    filterCategories: ["all", "ai", "analytics", "iot"],
    status: "Published R&D Concept",
    shortDescription: "A smart-city concept combining IoT, machine learning and web technology to improve traffic monitoring and parking management.",
    overview: "An integrated urban mobility platform combining artificial intelligence and IoT sensor telemetry to forecast parking slot turnover, mitigate congestion bottlenecks, and assist city authorities with data-driven traffic automation.",
    problem: "Urban transit corridors suffer from severe bottlenecks caused by vehicles circling for parking spaces and uncoordinated signal timing, generating fuel waste and emergency delays.",
    solution: "Architected machine learning algorithms in Python to predict space occupancy from arrival trends and simulated sensor data, delivering traffic controllers situational monitoring dashboards.",
    technologies: [
      "Python",
      "IoT Protocols",
      "Machine Learning",
      "React.js",
      "Data Analytics",
      "Predictive Modeling"
    ],
    hardware: [
      "IoT Sensor Emulators",
      "Traffic Signal Controller Logic"
    ],
    architecture: [
      { step: "01", name: "IoT Sensors / Feeds", desc: "Vehicle Detection & Telemetry" },
      { step: "02", name: "Data Aggregator", desc: "Real-time Telemetry Ingestion" },
      { step: "03", name: "ML Processing Engine", desc: "Congestion & Parking Forecasting" },
      { step: "04", name: "Traffic Controller", desc: "Dynamic Signal Pacing Logic" },
      { step: "05", name: "React Dashboard", desc: "Municipal Heatmap & Alerts" }
    ],
    features: [
      "Real-time traffic flow monitoring and congestion detection",
      "Parking space availability tracking with turnover prediction",
      "Data analytics dashboard displaying occupancy heatmaps",
      "Smart management decision-support rules for urban operators",
      "Dashboard visualization with interactive junction status metrics"
    ],
    challenges: [
      "Handling asynchronous sensor packet streams without latency spikes",
      "Normalizing real-time municipal traffic telemetry under rapid surge periods"
    ],
    contributions: [
      "Developed predictive analytics algorithms in Python for bay occupancy forecasting",
      "Integrated IoT sensor communication pipelines and live telemetry streams",
      "Engineered responsive decision-support dashboards displaying traffic heatmaps"
    ],
    results: "Authored and published research paper: 'Pune Smart City: An AI & IoT Based Smart Traffic & Parking Management System for Pune City (2026)'.",
    futureImprovements: [
      "Integration with live municipal open-data APIs across metropolitan districts",
      "Computer vision reinforcement learning for dynamic signal phase durations",
      "Driver mobile app integration with GPS guided nearest-available parking"
    ],
    publication: "Pune Smart City: An AI & IoT Based Smart Traffic & Parking Management System for Pune City (2026)",
    liveUrl: null,
    githubUrl: "https://github.com/amann1602",
    backendUrl: null,
    isLive: false,
    badge: "AI • IoT • Smart City"
  },
  {
    id: "ayubarter",
    number: "05",
    title: "AyuBarter",
    year: "2025",
    category: "Web Platform • React",
    filterCategories: ["all", "web"],
    status: "R&D Prototype",
    shortDescription: "A modern digital platform concept focused on connecting users through a technology-driven exchange ecosystem.",
    overview: "A modern digital platform concept engineered with React.js, focusing on seamless user-to-user interactions, structured listings, and a technology-driven exchange ecosystem with AI-assisted matching.",
    problem: "Traditional service and resource exchange platforms are often clunky, outdated, and lack intuitive user experience design for contemporary digital users.",
    solution: "Constructed responsive web interfaces in React.js with reusable UI component libraries, modular CSS styling, and structured exchange workflows.",
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Component Architecture"
    ],
    hardware: [],
    architecture: [
      { step: "01", name: "React Client", desc: "Modular Component UI" },
      { step: "02", name: "State Layer", desc: "Reactive Listings & User State" },
      { step: "03", name: "Exchange Engine", desc: "Matching Logic & Categorization" },
      { step: "04", name: "REST APIs", desc: "Data Transmission Protocols" }
    ],
    features: [
      "Digital exchange ecosystem connecting users seamlessly",
      "Modern product-style interface with high usability",
      "Reusable UI component system built in React",
      "Categorized listings with instant filter capabilities",
      "Responsive layout optimized across screen sizes"
    ],
    challenges: [
      "Designing a frictionless multi-step exchange proposal interaction",
      "Maintaining state consistency across complex listing interactions"
    ],
    contributions: [
      "Engineered modular React component library for product cards and listings",
      "Implemented responsive layouts and client-side filtering logic",
      "Conducted usability walkthroughs to streamline user flow"
    ],
    results: "Authored research paper on modern AI-integrated platforms and validated interactive user flows.",
    publication: "AyuBarter: AI-Integrated E-commerce & Tele-Consultation Platform (2025)",
    liveUrl: null,
    githubUrl: "https://github.com/amann1602",
    backendUrl: null,
    isLive: false,
    badge: "Web Platform • React"
  }
];

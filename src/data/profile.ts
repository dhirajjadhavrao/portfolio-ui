export interface Project {
  id: string;
  name: string;
  subtitle: string;
  desc: string;
  tech: string[];
  metrics?: string;
  gradient: string;
  link?: string;
  github?: string;
  highlight?: string;
}

export interface SideProject {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  problem: string;
  tech: string[];
  highlights: string[];
  badge: string;
  badgeColor: string;
  github?: string;
  link?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  project?: string;
  current: boolean;
  points: string[];
  tags: string[];
}

export interface Principle {
  num: string;
  title: string;
  body: string;
}

export interface Article {
  title: string;
  desc: string;
  category: string;
  readTime: string;
  url: string;
  publisher: string;
  date: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface CurrentlyBuildingItem {
  name: string;
  status: string;
  dot: string;
  pulse: boolean;
}

export const PROFILE_DATA = {
  personal: {
    name: "Dhiraj Jadhavrao",
    shortName: "Dhiraj",
    monogram: "DJ",
    title: "Associate Staff Engineer",
    roleSubtitle: "Java Full Stack Developer & Microservices Architect",
    company: "Nagarro",
    experienceYears: "6.6+",
    location: "Pune, Maharashtra, India",
    email: "jadhavraodhiraj@gmail.com",
    phone: "+91 9975692907",
    linkedin: "https://linkedin.com/in/dhirajjadhavrao",
    github: "https://github.com/dhirajjadhavrao",
    resumePdf: "/Dhiraj_Jadhavrao_Resume.pdf",
    available: true,
    availabilityText: "Available for Senior & Architectural Backend Roles",
  },

  hero: {
    statusBadge: "Available for new opportunities",
    headlineLine1: "Building distributed systems",
    headlineLine2: "that scale.",
    description:
      "Associate Staff Engineer with 6.6+ years specializing in Java 21, Spring Boot 3, and Microservices — focused on scalable architecture, performance, and cloud-native experiences.",
  },

  stats: [
    { value: "6.6+", label: "Years Experience" },
    { value: "15+", label: "Microservices Modernized" },
    { value: "SPRING & CLOUD", label: "Primary Stack" },
    { value: "AI", label: "Exploring the Future" },
  ],

  about: {
    heading: "I build backend systems that teams can trust.",
    paragraphs: [
      "I am an Associate Staff Engineer based in Pune with 6.6+ years of engineering experience across enterprise software, cloud-native modernization, and distributed microservices. My work sits at the intersection of clean architecture and rock-solid reliability — where performance is measured, components are decoupled, and architectures are made to last.",
      "Over my career, I've led delivery teams, spearheaded cloud migrations of business-critical modules to Google Kubernetes Engine (GKE), and architected multi-tenant cloud platforms. I care deeply about clean system design, reducing latency, and eliminating production bottlenecks before they reach users.",
      "Beyond client platforms, I build developer tools & standalone engines — including lightweight personal financial OSs and analytical tracking systems. I'm continuously expanding into modern Java 21 virtual threads, Spring Boot 3, and AI-assisted development tooling.",
    ],
    education: [
      {
        degree: "B.E. Computer Engineering",
        institution: "Savitribai Phule Pune University",
        location: "Pune, Maharashtra",
        year: "Dec 2015",
      },
      {
        degree: "Diploma Information Technology",
        institution: "Nutan Maharashtra Institute of Eng. & Tech.",
        location: "Pune, Maharashtra",
        year: "Dec 2012",
      },
    ],
  },

  skills: {
    BACKEND: ["Java 21", "Java 17", "Java 8", "REST APIs", "Microservices", "Hibernate"],
    ARCHITECTURE: ["System Design", "Schema Design", "API Gateway", "Eureka Discovery", "Performance"],
    SPRING: ["Spring Boot 3", "Spring Cloud", "Spring Security", "Spring Data JPA", "JDBC"],
    CLOUD: ["GCP (GKE)", "Kubernetes", "Docker", "ActiveMQ", "JMS", "Pub/Sub"],
    "TESTING & TOOLS": ["JUnit 5", "Mockito", "Postman", "TDD", "Git", "Maven", "Jenkins"],
  },

  featuredProjects: [
    {
      id: "book-a-group",
      name: "BookaGroup",
      subtitle: "Flight Booking Platform for Lufthansa Airlines",
      desc: "This project is a Flight Booking tool for Lufthansa Airlines.",
      tech: ["Java", "Spring MVC", "PostgreSQL", "Spring Boot", "JSP"],
      metrics: "Lufthansa Airlines · Enterprise Flight Booking · High Concurrency",
      gradient: "from-indigo-500 to-violet-500",
      highlight: "Aviation Enterprise",
    },
    {
      id: "jocata-bobfl",
      name: "Jocata BOBFL - Credit Card",
      subtitle: "Credit Card Applications Management for Bank Of Baroda",
      desc: "This project is a Credit card applications management project for Bank Of Baroda.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "Postman", "Kubernetes", "Angular"],
      metrics: "Bank of Baroda · FinTech Application Engine · Kubernetes GKE",
      gradient: "from-blue-500 to-cyan-500",
      highlight: "FinTech Banking",
    },
    {
      id: "rakuten-privacy",
      name: "Rakuten Privacy Platform",
      subtitle: "CCPA Compliance Mediator Platform",
      desc: "This project acts as a mediator for Rakuten's businesses and data processors for satisfying CCPA compliance requirements.",
      tech: ["Java", "Spring Boot", "Postman", "PostgreSQL", "Kubernetes", "JUnit", "Mockito", "React"],
      metrics: "Rakuten · CCPA Compliance · Data Processor Mediator",
      gradient: "from-emerald-500 to-teal-500",
      highlight: "Compliance & Security",
    },
    {
      id: "rakuten-catalog",
      name: "Rakuten Catalog Platform",
      subtitle: "GCS Bucket Automated Catalog Sync Engine",
      desc: "Monitor (Schedule) the GCS bucket. On bucket updates fetch newly created Blob (into *.json.gz format). Also, check for the Blob with the same name in the GCS bucket which contains old data into the same *.json.gz. Fetch both Blob and after applying comparing logic create/generate new files in TXT, XML format and store this final data into *.json.gz format on the cloud.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "Google Cloud", "JUnit", "Mockito", "React"],
      metrics: "Rakuten · Google Cloud GCS · Automated Blob Processing",
      gradient: "from-amber-500 to-orange-500",
      highlight: "Cloud Data Pipeline",
    },
    {
      id: "rakuten-price-navi",
      name: "Rakuten Price Navi Platform",
      subtitle: "Dynamic API Price Navigation Framework",
      desc: "Development of the existing Price Navi application (written in PHP), in the DAPI framework, using Java.",
      tech: ["Java 8", "Play Framework", "DAPI Framework", "JUnit", "Mockito", "React"],
      metrics: "Rakuten · PHP to Java Modernization · High-throughput DAPI",
      gradient: "from-pink-500 to-rose-500",
      highlight: "Platform Modernization",
    },
  ] as Project[],

  sideProjects: [
    {
      id: "rmc-platform",
      name: "RMC Cloud Platform",
      subtitle: "Restaurant Multi-Tenant Architecture",
      badge: "Enterprise Platform",
      badgeColor: "#8b5cf6",
      description:
        "Scalable microservices platform with Spring Cloud Gateway for dynamic routing, Eureka service discovery, centralized configuration, and multi-tenant PostgreSQL schemas.",
      problem:
        "Single-tenant restaurant POS monoliths crash during peak operational hours and cannot scale across multi-city branches. RMC isolates tenant schemas and decouples kitchen, inventory, and sales services.",
      tech: ["Java 21", "Spring Boot 3.5", "Spring Cloud", "PostgreSQL"],
      highlights: [
        "Spring Cloud Gateway routing",
        "Eureka service discovery",
        "Multi-tenant PostgreSQL",
        "Full Postman regression suite",
      ],
      github: "https://github.com/dhirajjadhavrao/rukmae",
    },
    {
      id: "bhoomisetu",
      name: "BhoomiSetu Platform",
      subtitle: "Land Registry & Transaction Engine",
      badge: "Full Stack App",
      badgeColor: "#6366f1",
      description:
        "Enterprise property transactions platform featuring multi-tier role-based access control (RBAC), document verification pipelines, PostgreSQL persistence, and React Native client.",
      problem:
        "Property transactions and brokerage workflows suffer from fragmented records and unverified channel chaos. BhoomiSetu unifies buyer inquiries, agent listings, and legal documents in one verified system.",
      tech: ["Spring Boot", "PostgreSQL", "Docker", "React Native"],
      highlights: [
        "Multi-tier RBAC",
        "React Native client",
        "Document verification",
        "High-concurrency listing engine",
      ],
      github: "https://github.com/dhirajjadhavrao",
    },
    {
      id: "gcp-migration",
      name: "GCP Migration Suite",
      subtitle: "Containerization & Zero-Downtime Releases",
      badge: "Cloud Infra",
      badgeColor: "#0284c7",
      description:
        "Spearheaded containerization with Docker and zero-downtime migration of business-critical modules to GCP Kubernetes Engine (GKE), maintaining strict 99.9% production SLAs.",
      problem:
        "Legacy VM deployments suffered from downtime risk, manual provisioning, and rigid scalability limits. This suite enabled automated container rollouts with zero downtime on GKE.",
      tech: ["GCP", "GKE", "Docker", "CI/CD"],
      highlights: [
        "Zero-downtime deployment",
        "Docker containerization",
        "GKE orchestration",
        "99.9% production SLA",
      ],
      github: "https://github.com/dhirajjadhavrao",
    },
    {
      id: "wellfrog",
      name: "wellfrog-os",
      subtitle: "Personal Life & Money Management Engine",
      badge: "Personal OS",
      badgeColor: "#f97316",
      description:
        "A lightweight personal finance and habit tracking engine built with Java 21, Spring Boot 3.3.5, JJWT token security, and a responsive modern React frontend.",
      problem:
        "Commercial personal finance apps are cluttered with third-party trackers. Wellfrog provides a privacy-first, self-hostable financial OS with sub-10ms response times.",
      tech: ["Java 21", "Spring Boot 3.3.5", "JJWT", "React", "PostgreSQL"],
      highlights: [
        "Java 21 Virtual Threads",
        "JJWT Secure Auth",
        "Mobile-ready Capacitor UI",
        "Privacy-first storage",
      ],
      github: "https://github.com/dhirajjadhavrao",
    },
    {
      id: "habit-tracker",
      name: "habit-analytics-engine",
      subtitle: "Dynamic Excel Generation & Visual Analytics Engine",
      badge: "Analytics Tool",
      badgeColor: "#10b981",
      description:
        "A scriptable habit and performance tracking engine that dynamically compiles structured data into conditional-formatted spreadsheets with metric calculation models.",
      problem:
        "Manual tracking in spreadsheets lacks automated validation and continuous metric computation. This engine compiles real-time habit streams into visual analytics automatically.",
      tech: ["Python", "OpenPyXL", "Data Analytics", "Excel Engine"],
      highlights: [
        "Dynamic Excel formulas",
        "Automated charting",
        "Zero manual data entry",
        "Python-driven automation",
      ],
      github: "https://github.com/dhirajjadhavrao",
    },
  ],

  experience: [
    {
      company: "Nagarro",
      role: "Associate Staff Engineer",
      period: "Jun 2022 – Present",
      location: "Pune, India",
      project: "BookAGroup Enterprise Platform",
      current: true,
      points: [
        "Lead a team of 4 engineers, coordinating technical design, code reviews, and dependable sprint delivery of enterprise backend services.",
        "Architect and optimize Java, Spring Boot, and RESTful microservices, cutting API latency by 25% and improving database throughput.",
        "Drive API contract design, automated test suites, and rapid production root-cause resolution using JUnit 5, Mockito, Postman, and SQL.",
        "Analyze enterprise client requirements, author technical impact analyses, and manage end-to-end releases within strict SLAs.",
        "Accelerate engineering workflows by integrating AI-assisted development tools (Copilot, Codex) into daily development and testing.",
      ],
      tags: ["Java 17/21", "Spring Boot 3", "REST APIs", "SQL", "Team Leadership", "WildFly", "Agile"],
    },
    {
      company: "Josh Software, Inc.",
      role: "Software Engineer",
      period: "Dec 2019 – Jun 2022",
      location: "Pune, India",
      project: "Banking & Cards Domain",
      current: false,
      points: [
        "Developed resilient backend microservices using Java, Spring Boot, and REST APIs, deployed directly onto Google Kubernetes Engine (GKE).",
        "Engineered persistence layers and object-relational mappings with Hibernate and PostgreSQL/MySQL, optimizing query indexing and data integrity.",
        "Integrated asynchronous messaging workflows using JMS queues to decouple heavy background processing and enhance client responsiveness.",
        "Authored comprehensive unit tests with JUnit and Mockito to enforce test-driven development (TDD) and minimize defect leakage.",
      ],
      tags: ["Java", "Spring Boot", "GCP (GKE)", "Hibernate", "JMS ActiveMQ", "PostgreSQL", "TDD"],
    },
    {
      company: "ThinkQuotient Software",
      role: "Java Developer Intern",
      period: "Mar 2019 – Dec 2019",
      location: "Pune, India",
      project: "Enterprise Core Java",
      current: false,
      points: [
        "Built core enterprise modules using Core Java, object-oriented design (OOP) principles, and JDBC database access layers.",
        "Participated in enterprise application debugging, code quality inspections, and relational database schema validation.",
      ],
      tags: ["Core Java", "JDBC", "OOP", "SQL", "Database Design"],
    },
  ],

  principles: [
    {
      num: "01",
      title: "Keep complexity where it belongs.",
      body: "Simple interfaces hide complex systems. Push the hard parts into well-defined domain abstractions and isolated microservices — not up into client layers or leaky contracts.",
    },
    {
      num: "02",
      title: "Build resilient systems, not fragile shortcuts.",
      body: "Distributed architectures will encounter network partitions and spikes. Design idempotent APIs, asynchronous messaging queues, and graceful degradation from day one.",
    },
    {
      num: "03",
      title: "Performance is a feature.",
      body: "Slow backend APIs degrade user experience and inflate cloud spend. Database query optimization, zero-latency caching, and connection pooling deserve the same rigor as new functionality.",
    },
  ],

  certifications: [
    {
      title: "OpenAI Codex 101: From Idea to Deployed App",
      issuer: "LinkedIn Learning",
      date: "Aug 2026",
    },
    {
      title: "Intro to OpenAI Codex: Fully Agentic Coding",
      issuer: "Udemy",
      date: "Aug 2026",
    },
    {
      title: "Generative AI for Software Engineers & AI-Augmented SDLC",
      issuer: "Udemy",
      date: "Jul 2026",
    },
    {
      title: "Practical GitHub Copilot",
      issuer: "LinkedIn Learning",
      date: "Jun 2026",
    },
    {
      title: "Spring 6 and Spring Boot 3 First Look",
      issuer: "LinkedIn Learning",
      date: "May 2023",
    },
  ],

  articles: [
    {
      title: "Mockito: An Unit Testing Framework",
      desc: "A developer guide to Mockito, Java's premier mocking framework paired with JUnit. Covers using reflection for mocking service dependencies, configuring Maven dependencies for JUnit 4 and JUnit 5, and best practices for writing clean, reliable unit tests.",
      category: "Testing & TDD",
      readTime: "5 min read",
      date: "May 2020",
      publisher: "Josh Software Blog",
      url: "https://blog.joshsoftware.com/2020/05/27/introduction-to-mockito-unit-testing-framework/",
    },
    {
      title: "Quick Overview of C++",
      desc: "An architectural overview of C++ as an intermediate language bridging low-level and high-level programming. Breaks down core syntax, the Standard Template Library (STL), and the four pillars of object-oriented development: inheritance, encapsulation, polymorphism, and data hiding.",
      category: "C++ & OOP",
      readTime: "4 min read",
      date: "Nov 2016",
      publisher: "OOPs New Theory",
      url: "https://oopsnewtheory.blogspot.com/2016/11/quick-overview-of-c.html",
    },
    {
      title: "How to Install VLC in Fedora 20 / 19 / 18",
      desc: "Step-by-step walkthrough for configuring RPM Fusion repositories and installing the VLC media player on Fedora distributions. Outlines commands for terminal-based package management without requiring extra codec packs.",
      category: "Linux & Fedora",
      readTime: "3 min read",
      date: "Dec 2016",
      publisher: "Playing With Fedora",
      url: "https://fedoradj.blogspot.com/2016/12/howto-install-vlc-in-fedora-20-19-18.html",
    },
    {
      title: "How to Install *.tar.gz Files on Fedora 20",
      desc: "A practical guide to extracting and compiling source packages from compressed tarball archives (*.tar.gz / *.tz) on Linux. Details terminal commands with tar extraction flags and the standard make install routine on Fedora systems.",
      category: "Linux Administration",
      readTime: "3 min read",
      date: "Aug 2017",
      publisher: "Dhiraj Jadhavrao Blog",
      url: "https://dhirajjadhavrao.wixsite.com/dhirajjadhavrao/single-post/2017/08/20/how-to-install-tartz-files-on-fedora-20",
    },
  ],

  currentlyBuilding: [
    {
      name: "rmc-cloud-platform v2",
      status: "Building",
      dot: "bg-indigo-500",
      pulse: true,
    },
    {
      name: "Java 21 Virtual Threads & I/O",
      status: "Exploring",
      dot: "bg-emerald-500",
      pulse: true,
    },
    {
      name: "AI-Augmented Testing Suites",
      status: "Experimenting",
      dot: "bg-amber-500",
      pulse: false,
    },
  ],
};

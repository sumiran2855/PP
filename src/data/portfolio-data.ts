export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  category: "Web Applications" | "Mobile Applications" | "Backend" | "DevOps" | "Cloud" | "Other";
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  metrics?: string;
  highlights?: string[];
  gradient: string;
}

export interface SkillItem {
  name: string;
  level: "Advanced" | "Proficient" | "Familiar";
  iconName?: string;
  tag?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
  score?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeCode: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    headline: string;
    bio: string[];
    email: string;
    location: string;
    availability: string;
    social: {
      github: string;
      linkedin: string;
      twitter: string;
      email: string;
    };
    stats: {
      label: string;
      value: string;
      detail: string;
    }[];
  };
  skills: SkillCategory[];
  projects: Project[];
  projectCategories: string[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  currentFocus: {
    title: string;
    description: string;
    tags: string[];
    status: "Active Research" | "Building" | "Exploring";
  }[];
  testimonials: Testimonial[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Sumiran",
    title: "Senior Full-Stack & Cloud Systems Engineer",
    headline: "Architecting scalable cloud backends and high-performance, polished web applications.",
    bio: [
      "I am a passionate software engineer with a deep foundation in full-stack architecture, distributed cloud systems, and modern frontend engineering. I specialize in building fault-tolerant backend services in Node.js and Go, paired with hyper-responsive, accessible user interfaces using Next.js, React, and TypeScript.",
      "Over the past 5+ years, I have engineered enterprise SaaS platforms, real-time event-driven pipelines, and high-throughput APIs serving millions of requests. I care deeply about performance optimization, developer ergonomics, clean code principles, and bulletproof CI/CD automations.",
      "When I am not writing code or orchestrating microservices, I actively contribute to open-source software, explore distributed systems whitepapers, and mentor emerging engineers."
    ],
    email: "sumiran.b@cisinlabs.com",
    location: "Bengaluru, India / Remote Available",
    availability: "Available for High-Impact Roles & Consulting",
    social: {
      github: "https://github.com/sumiran",
      linkedin: "https://linkedin.com/in/sumiran",
      twitter: "https://twitter.com/sumiran_dev",
      email: "mailto:sumiran.b@cisinlabs.com"
    },
    stats: [
      { label: "Experience", value: "5+ Years", detail: "Shipping production systems" },
      { label: "Projects Delivered", value: "30+", detail: "Across Web, Cloud & Mobile" },
      { label: "Uptime Track Record", value: "99.98%", detail: "SLA on distributed services" },
      { label: "Code Reviews & Mentorship", value: "200+", detail: "Cultivating engineering excellence" }
    ]
  },

  skills: [
    {
      category: "Frontend",
      icon: "Layout",
      description: "Crafting fluid, accessible, stateful web interfaces and design systems.",
      skills: [
        { name: "React 19 / 18", level: "Advanced", tag: "Core" },
        { name: "Next.js (App Router)", level: "Advanced", tag: "Framework" },
        { name: "TypeScript", level: "Advanced", tag: "Language" },
        { name: "Tailwind CSS v4", level: "Advanced", tag: "Styling" },
        { name: "Redux Toolkit / Zustand", level: "Advanced", tag: "State" },
        { name: "Vue.js", level: "Proficient", tag: "Framework" },
        { name: "HTML5 / Semantic Web", level: "Advanced", tag: "Foundations" },
        { name: "CSS Modules / Sass", level: "Proficient", tag: "Styling" }
      ]
    },
    {
      category: "Backend",
      icon: "Server",
      description: "Developing robust APIs, event streams, microservices, and background workers.",
      skills: [
        { name: "Node.js (Runtime)", level: "Advanced", tag: "Runtime" },
        { name: "Express.js & NestJS", level: "Advanced", tag: "Framework" },
        { name: "Go (Golang)", level: "Proficient", tag: "Language" },
        { name: "Python (FastAPI)", level: "Proficient", tag: "Language" },
        { name: "RESTful API Design", level: "Advanced", tag: "Architecture" },
        { name: "GraphQL & Apollo", level: "Proficient", tag: "APIs" },
        { name: "gRPC & Protocol Buffers", level: "Proficient", tag: "RPC" },
        { name: "WebSockets & SSE", level: "Advanced", tag: "Real-time" }
      ]
    },
    {
      category: "Databases",
      icon: "Database",
      description: "Schema modeling, query optimization, indexing, and persistent caching.",
      skills: [
        { name: "PostgreSQL", level: "Advanced", tag: "Relational" },
        { name: "MongoDB", level: "Advanced", tag: "NoSQL" },
        { name: "Redis", level: "Advanced", tag: "In-Memory Cache" },
        { name: "Prisma ORM", level: "Advanced", tag: "Data Access" },
        { name: "Elasticsearch", level: "Proficient", tag: "Search" },
        { name: "MySQL", level: "Proficient", tag: "Relational" },
        { name: "DynamoDB", level: "Proficient", tag: "Cloud DB" }
      ]
    },
    {
      category: "DevOps & Cloud",
      icon: "Cloud",
      description: "Containerization, infrastructure as code, cloud deployments, and CI/CD pipelines.",
      skills: [
        { name: "Docker", level: "Advanced", tag: "Containers" },
        { name: "Kubernetes (k8s)", level: "Proficient", tag: "Orchestration" },
        { name: "AWS (EC2, S3, ECS, Lambda)", level: "Advanced", tag: "Cloud Provider" },
        { name: "CI/CD (GitHub Actions)", level: "Advanced", tag: "Automation" },
        { name: "Terraform", level: "Proficient", tag: "IaC" },
        { name: "Nginx & Reverse Proxies", level: "Advanced", tag: "Networking" },
        { name: "Cloudflare & Edge CDN", level: "Advanced", tag: "Edge" },
        { name: "Prometheus & Grafana", level: "Proficient", tag: "Observability" }
      ]
    },
    {
      category: "System Design",
      icon: "Cpu",
      description: "High-scale architectural patterns, resilience, concurrency, and reliability.",
      skills: [
        { name: "Microservices Architecture", level: "Advanced", tag: "Design" },
        { name: "Event-Driven Systems (Kafka/RabbitMQ)", level: "Advanced", tag: "Messaging" },
        { name: "Distributed Caching Strategies", level: "Advanced", tag: "Performance" },
        { name: "Rate Limiting & API Gateways", level: "Advanced", tag: "Security" },
        { name: "Load Balancing & Auto-scaling", level: "Advanced", tag: "Infrastructure" },
        { name: "CAP Theorem Trade-offs", level: "Advanced", tag: "Theoretical" }
      ]
    },
    {
      category: "Mobile Development",
      icon: "Smartphone",
      description: "Cross-platform mobile apps for iOS and Android with native performance.",
      skills: [
        { name: "React Native", level: "Proficient", tag: "Cross-Platform" },
        { name: "Expo Ecosystem", level: "Proficient", tag: "Tooling" },
        { name: "Flutter & Dart", level: "Familiar", tag: "Cross-Platform" },
        { name: "Mobile State Management", level: "Proficient", tag: "Architecture" },
        { name: "Push Notifications", level: "Proficient", tag: "Integration" }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: "Wrench",
      description: "Essential developer tooling, version control, testing, and workflow tooling.",
      skills: [
        { name: "Git & GitHub Workflows", level: "Advanced", tag: "VCS" },
        { name: "Linux / Bash Scripting", level: "Advanced", tag: "Environment" },
        { name: "Jest & React Testing Library", level: "Advanced", tag: "Testing" },
        { name: "Vitest & Playwright", level: "Proficient", tag: "Testing" },
        { name: "Postman & Insomnia", level: "Advanced", tag: "API Testing" },
        { name: "Webpack / Turbopack / Vite", level: "Advanced", tag: "Bundlers" },
        { name: "ESLint & Prettier", level: "Advanced", tag: "Linting" }
      ]
    }
  ],

  projectCategories: [
    "All",
    "Web Applications",
    "Backend",
    "Cloud",
    "DevOps",
    "Mobile Applications",
    "Other"
  ],

  projects: [
    {
      id: "nexus-cloud-mesh",
      title: "Nexus Service Mesh & Gateway",
      description: "Distributed API gateway and telemetry aggregator handling 50k+ requests/sec with dynamic rate-limiting, JWT authentication, and automatic service discovery.",
      detailedDescription: "Designed and implemented an ultra-lightweight distributed API Gateway in Go with a Next.js administrative dashboard. Includes real-time metrics streaming over WebSockets, circuit breaking using the Leaky Bucket algorithm, and zero-downtime canary routing.",
      category: "Backend",
      technologies: ["Go", "Next.js", "Redis", "Docker", "Prometheus", "Tailwind CSS"],
      githubUrl: "https://github.com/sumiran/nexus-cloud-mesh",
      liveUrl: "https://nexus-mesh-demo.example.com",
      featured: true,
      metrics: "50k req/s throughput • <12ms p99 latency",
      highlights: [
        "Dynamic token-bucket rate limiting implemented via distributed Redis clusters",
        "Configurable routing rules dynamically loaded without restarting gateway pods",
        "Comprehensive observability dashboard visualizing real-time HTTP error rates"
      ],
      gradient: "from-blue-600 via-indigo-600 to-cyan-500"
    },
    {
      id: "devsync-platform",
      title: "DevSync Collaborative Workspace",
      description: "Real-time collaborative developer workspace featuring shared code execution, live markdown editing with CRDTs, and audio/video pairing channels.",
      detailedDescription: "Engineered a collaborative engineering workspace leveraging Next.js App Router, WebSockets, and Yjs for conflict-free replicated data types. Features isolated sandboxed code execution in WebAssembly containers for secure client-side computing.",
      category: "Web Applications",
      technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "WebSockets", "Node.js", "WebAssembly"],
      githubUrl: "https://github.com/sumiran/devsync-collab",
      liveUrl: "https://devsync.example.com",
      featured: true,
      metrics: "Sub-30ms sync latency • 10k active concurrent rooms",
      highlights: [
        "CRDT-based state reconciliation ensuring zero merge conflicts during simultaneous typing",
        "WASM-powered language runner supporting Python and JavaScript execution locally in browser",
        "Custom shadcn/ui themed components with split-screen multi-editor capabilities"
      ],
      gradient: "from-purple-600 via-pink-600 to-rose-500"
    },
    {
      id: "k8s-autoscale-operator",
      title: "Kubernetes Event-Driven Predictive Autoscaler",
      description: "Custom Kubernetes operator that predicts queue workloads via Kafka lag metrics and preemptively scales microservice worker pods before bottlenecks occur.",
      detailedDescription: "Authored a Kubernetes Custom Resource Definition (CRD) and Go controller that polls Kafka consumer lag, applies a rolling regression forecast model, and triggers HPA scaling 3 minutes before traffic spikes hit worker fleets.",
      category: "DevOps",
      technologies: ["Kubernetes Operator SDK", "Go", "Kafka", "Prometheus", "Helm", "Docker"],
      githubUrl: "https://github.com/sumiran/k8s-predictive-scaler",
      liveUrl: "https://github.com/sumiran/k8s-predictive-scaler#readme",
      featured: true,
      metrics: "Saved 38% AWS EC2 computing costs • Zero queue backpressure drops",
      highlights: [
        "Replaced reactive CPU-based autoscaling with proactive queue-lag forecasting",
        "Packaged with production-ready Helm chart and automated test suites in Kind",
        "Integrates with Slack & PagerDuty webhooks for auto-scaling telemetry alerts"
      ],
      gradient: "from-emerald-600 via-teal-600 to-cyan-600"
    },
    {
      id: "cloud-pulse-telemetry",
      title: "CloudPulse Infrastructure Health Monitor",
      description: "Multi-cloud infrastructure visualization suite providing real-time telemetry, cost forecasting, and instant security vulnerability auditing.",
      detailedDescription: "Full-stack monitoring solution tracking AWS, GCP, and DigitalOcean instances through a unified command center. Employs background Cron workers in Node.js to aggregate cloud billing and spot instances.",
      category: "Cloud",
      technologies: ["React", "Node.js", "AWS SDK", "PostgreSQL", "Tailwind CSS", "Chart.js"],
      githubUrl: "https://github.com/sumiran/cloud-pulse",
      liveUrl: "https://cloudpulse.example.com",
      featured: false,
      metrics: "Audited 1,200+ cloud assets • Instant compliance reports",
      highlights: [
        "Automated CIS benchmark scanning for unencrypted S3 buckets and open security groups",
        "Interactive cost heatmaps identifying orphaned EBS volumes and idle RDS instances",
        "Exportable PDF executive summaries for SOC2 and ISO27001 readiness"
      ],
      gradient: "from-amber-600 via-orange-600 to-red-500"
    },
    {
      id: "trackit-mobile",
      title: "TrackIt Cross-Platform Fitness & Habit Tracker",
      description: "High-performance mobile application built with React Native and Expo, featuring offline-first local SQLite sync, dynamic charts, and biometric login.",
      detailedDescription: "Created an intuitive habit building app with offline persistence, background syncing when connectivity resumes, and native push notifications powered by Expo Notifications.",
      category: "Mobile Applications",
      technologies: ["React Native", "Expo", "TypeScript", "SQLite", "Node.js API", "Tailwind (NativeWind)"],
      githubUrl: "https://github.com/sumiran/trackit-mobile",
      liveUrl: "https://expo.dev/@sumiran/trackit",
      featured: false,
      metrics: "4.8 Star rating • 15k+ downloads",
      highlights: [
        "Offline-first synchronization protocol handling intermittent connectivity effortlessly",
        "Custom micro-animations for streak celebrations and habit completion rings",
        "Biometric authentication (FaceID / Fingerprint) integration"
      ],
      gradient: "from-violet-600 via-indigo-600 to-blue-600"
    },
    {
      id: "algorunner-cli",
      title: "AlgoRunner Developer CLI & Benchmark Suite",
      description: "Extensible CLI tool written in Node.js and TypeScript for micro-benchmarking algorithms, comparing memory footprint, and generating visual SVG flamegraphs.",
      detailedDescription: "Open-source developer utility published to npm that helps engineers test algorithmic complexity, detect memory leaks, and generate interactive benchmark comparison graphs.",
      category: "Other",
      technologies: ["Node.js", "TypeScript", "Commander.js", "V8 Profiler", "SVG Generation"],
      githubUrl: "https://github.com/sumiran/algorunner-cli",
      liveUrl: "https://npmjs.com/package/algorunner",
      featured: false,
      metrics: "25k+ monthly npm downloads",
      highlights: [
        "Accurate V8 heap profiling with low-overhead sampling",
        "Direct export to GitHub markdown tables and animated SVG charts",
        "Zero external native dependencies for seamless cross-platform installation"
      ],
      gradient: "from-slate-700 via-zinc-800 to-neutral-900"
    },
    {
      id: "neural-flow-analytics",
      title: "NeuralFlow Real-Time AI Telemetry Processor",
      description: "High-throughput streaming telemetry pipeline processing 100k events/sec with PyTorch anomaly detection and live Next.js visual dashboard.",
      detailedDescription: "Architected a real-time event analytics engine leveraging Python FastAPI microservices, Redis Pub/Sub, and PyTorch for live time-series anomaly detection in cloud infrastructure log streams.",
      category: "Web Applications",
      technologies: ["Next.js 16", "Python", "FastAPI", "PyTorch", "Tailwind CSS", "Redis"],
      githubUrl: "https://github.com/sumiran/neural-flow-analytics",
      liveUrl: "https://neuralflow.example.com",
      featured: true,
      metrics: "Sub-50ms inference • 100k events/sec",
      highlights: [
        "Real-time time-series anomaly detection pipeline over WebSocket streams",
        "Interactive HTML5 canvas visualization of neural network layer weights",
        "Automated model export to ONNX runtime for ultra-low latency inference"
      ],
      gradient: "from-cyan-600 via-blue-600 to-indigo-600"
    },
    {
      id: "hyper-store-db",
      title: "HyperStore Distributed Consensus Key-Value Engine",
      description: "Distributed consensus key-value database built in Go using the Raft algorithm, supporting multi-region linearizable reads and zero-downtime cluster rebalancing.",
      detailedDescription: "Implemented a Raft consensus engine in Go with gRPC communication, LSM-tree storage engines, and dynamic cluster membership changes for high-availability distributed storage.",
      category: "Backend",
      technologies: ["Go", "Raft Consensus", "gRPC", "RocksDB", "Docker"],
      githubUrl: "https://github.com/sumiran/hyperstore-kv",
      liveUrl: "https://github.com/sumiran/hyperstore-kv#readme",
      featured: false,
      metrics: "Linearizable reads • 99.999% SLA",
      highlights: [
        "Raft consensus protocol with dynamic leader election and log compaction",
        "Zero-downtime cluster node re-balancing under heavy write workloads",
        "Low-latency gRPC RPC interface with multi-region state replication"
      ],
      gradient: "from-emerald-600 via-teal-600 to-indigo-600"
    }
  ],

  experience: [
    {
      id: "exp-1",
      role: "Senior Full-Stack & Cloud Engineer",
      company: "CISIN Labs",
      location: "Bengaluru, India",
      period: "2023 - Present",
      isCurrent: true,
      description: "Leading architectural design and development of enterprise distributed applications, cloud modernization initiatives, and high-throughput microservices.",
      responsibilities: [
        "Architecting robust cloud microservices in Node.js and Go hosted on AWS ECS and Kubernetes",
        "Leading frontend modernization to Next.js App Router, resulting in a 45% reduction in initial bundle sizes and sub-second Largest Contentful Paint (LCP)",
        "Mentoring a team of 8 engineers across full-stack design patterns, clean code, and automated testing",
        "Collaborating with product managers and stakeholders to translate business goals into scalable technical architectures"
      ],
      achievements: [
        "Reduced p95 API response latency from 320ms to 45ms by introducing multi-tier Redis caching and database indexing strategies",
        "Spearheaded the migration of legacy monolithic backends to containerized microservices with zero customer-facing downtime",
        "Implemented end-to-end GitHub Actions CI/CD workflows, shortening deployment lead time from 2 days to under 20 minutes"
      ],
      technologies: ["Next.js", "TypeScript", "Node.js", "Go", "AWS", "Kubernetes", "PostgreSQL", "Docker", "Redis"]
    },
    {
      id: "exp-2",
      role: "Full Stack Software Engineer",
      company: "TechScale Innovations",
      location: "Bengaluru, India",
      period: "2021 - 2023",
      isCurrent: false,
      description: "Developed customer-facing web applications, payment processing integrations, and data processing microservices.",
      responsibilities: [
        "Engineered scalable web applications using React, Node.js, Express, and PostgreSQL",
        "Built resilient webhook ingestion services processing over 1M financial transactions monthly with idempotent retry queues",
        "Authored reusable internal component libraries and design tokens adopted across 4 company engineering teams",
        "Conducted thorough code reviews and enforced strict ESLint, TypeScript, and unit testing guidelines"
      ],
      achievements: [
        "Maintained 99.99% webhook delivery success rate using BullMQ and Redis delayed queues",
        "Improved front-end Core Web Vitals score from 62 to 96 on mobile devices",
        "Won 1st place in the annual company Hackathon for developing an internal AI documentation assistant"
      ],
      technologies: ["React", "TypeScript", "Express.js", "Node.js", "PostgreSQL", "Redis", "Docker", "Tailwind CSS"]
    },
    {
      id: "exp-3",
      role: "Software Developer",
      company: "Apex Solutions",
      location: "Bengaluru, India",
      period: "2019 - 2021",
      isCurrent: false,
      description: "Focused on frontend development, RESTful API integration, responsive UI design, and database schema management.",
      responsibilities: [
        "Built responsive single-page applications using React, Redux, and modern CSS/SCSS",
        "Created RESTful endpoints in Node.js/Express and optimized MongoDB aggregation queries",
        "Participated in agile ceremonies, daily standups, and bi-weekly sprint planning sessions"
      ],
      achievements: [
        "Migrated legacy jQuery codebase to React, eliminating 60% of recurring customer support bugs",
        "Created automated integration test suites with Jest and Supertest, achieving 85% test coverage"
      ],
      technologies: ["JavaScript (ES6+)", "React", "Node.js", "MongoDB", "Express", "REST APIs", "Git"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Visvesvaraya Technological University",
      period: "2015 - 2019",
      details: "Focused on Algorithms, Distributed Computing, Database Systems, Computer Networks, and Object-Oriented Software Engineering.",
      score: "First Class with Distinction (8.6 CGPA)"
    }
  ],

  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "2024",
      credentialUrl: "https://aws.amazon.com/verification",
      badgeCode: "AWS-SAA-C03"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      date: "2023",
      credentialUrl: "https://www.cncf.io/certification/cka/",
      badgeCode: "CKA-2401"
    },
    {
      name: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta / Coursera",
      date: "2022",
      credentialUrl: "https://coursera.org/verify/professional-cert",
      badgeCode: "META-FED-99"
    }
  ],

  currentFocus: [
    {
      title: "Autonomous AI Coding Agents & LLM Tool Orchestration",
      description: "Experimenting with multi-agent orchestration frameworks, function calling schemas, and automated self-healing CI/CD debugging pipelines.",
      tags: ["AI Agents", "TypeScript", "LangChain", "Vector DBs"],
      status: "Active Research"
    },
    {
      title: "Distributed Edge Computing with WebAssembly & Rust",
      description: "Building micro-runtimes that execute untrusted code at the edge with microsecond cold starts and minimal memory consumption.",
      tags: ["Rust", "WASM", "Edge Computing", "Cloudflare Workers"],
      status: "Building"
    },
    {
      title: "High-Throughput Event Streaming with Apache Kafka",
      description: "Benchmarking partition rebalancing strategies and dead-letter queue architectures for mission-critical event backbones.",
      tags: ["Kafka", "Distributed Systems", "Go", "Docker"],
      status: "Exploring"
    }
  ],

  testimonials: [
    {
      name: "Alex Rivera",
      role: "Engineering Director",
      company: "CISIN Labs",
      content: "Sumiran is the rare caliber of engineer who can design a complex distributed backend architecture and simultaneously polish frontend micro-interactions to perfection. His technical rigor and leadership elevated our entire engineering team's delivery pace.",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Sarah Chen",
      role: "Principal Product Manager",
      company: "TechScale Innovations",
      content: "Working with Sumiran was an absolute pleasure. He doesn't just write code—he deeply understands the product domain, spots edge cases before they happen, and delivers rock-solid features ahead of schedule.",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
    }
  ]
};

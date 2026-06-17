export interface ProjectData {
  id: string;
  name: string;
  tech: string;
  category: 'Backend' | 'AI' | 'Full Stack';
  position: [number, number, number];
  color: string;
  glowColor: string;
  size: number;
  description: string;
  extendedDescription: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  metrics: {
    label: string;
    metricVal: string;
    points: { name: string; value: number }[];
    gradientId: string;
  };
  mockGradient: string; // High-tech background styling for details slide-out panel
}

export interface Particle {
  id: number;
  position: any; // Using THREE.Vector3 at runtime, but type can be open/any to avoid strict import constraints
  velocity: any;
  color: string;
  alpha: number;
  scale: number;
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'erp-supershop',
    name: 'SuperShop ERP System',
    tech: 'C# // .NET 8 // SQL Server',
    category: 'Full Stack',
    position: [-2.7, 0.8, 0.0],
    color: '#00ffcc',
    glowColor: '#34d399',
    size: 0.65,
    description: 'An enterprise-grade ERP architecture for dynamic inventory management, real-time sales pipelines, and analytics.',
    extendedDescription: 'A robust, mission-critical ecosystem designed to streamline backend logistics. Built using C# and .NET 8, it leverages Microsoft SQL Server with strict transaction boundaries to ensure 100% data durability and near-zero latency for heavy concurrent inventory tasks.',
    techStack: ['.NET 8', 'C# Enterprise', 'Entity Framework Core', 'MS SQL Server', 'Tailwind Admin UI', 'Active Report Engine'],
    features: [
      'Multi-tenant pipeline with isolated database schemas.',
      'Automated stock levels alert systems triggered by DB constraints.',
      'Complex query optimizations resulting in a 35% speed improvement.',
      'Premium dark UI dashboard with real-time status tracking'
    ],
    githubUrl: 'https://github.com/TahminaKhanNipa10-Codes',
    liveUrl: 'https://github.com/TahminaKhanNipa10-Codes',
    metrics: {
      label: 'TRANSACTION CONCURRENCY',
      metricVal: '99.94% COMPLIANT',
      points: [
        { name: 'Mon', value: 240 },
        { name: 'Tue', value: 380 },
        { name: 'Wed', value: 350 },
        { name: 'Thu', value: 470 },
        { name: 'Fri', value: 620 },
        { name: 'Sat', value: 580 },
        { name: 'Sun', value: 780 }
      ],
      gradientId: 'erpGrad'
    },
    mockGradient: 'from-emerald-950/80 via-slate-950 to-slate-950'
  },
  {
    id: 'bookshop-rdbms',
    name: 'Online BookShop RDBMS',
    tech: 'T-SQL // SQL Server Engine',
    category: 'Backend',
    position: [2.8, -0.5, 1.0],
    color: '#a855f7',
    glowColor: '#c084fc',
    size: 0.55,
    description: 'A completely normalized relational database module managing bulk client bookings, reviews, and transaction auditing.',
    extendedDescription: 'An optimized database system engineered in T-SQL. It implements high-performance relational database practices to prevent bottlenecks when managing complex hierarchies of orders, customer reviews, inventory logs, and payment states.',
    techStack: ['T-SQL Scripts', 'Microsoft SQL Server', 'Trigger-based Auditing', 'Non-Clustered Indexes', 'Transact-SQL Safety Protocols'],
    features: [
      '3rd Normal Form (3NF) structural validation for guaranteed integrity.',
      'Automated historical log trackers powered by custom triggers.',
      'Complex query indexing reducing bulk table search from 12s to 14ms.',
      'Deadlock protection mechanisms deployed under heavy task runs.'
    ],
    githubUrl: 'https://github.com/TahminaKhanNipa10-Codes',
    liveUrl: 'https://github.com/TahminaKhanNipa10-Codes',
    metrics: {
      label: 'QUERY RESPONSE DEPTH',
      metricVal: '14.2ms SLICK',
      points: [
        { name: 'Op.1', value: 92 },
        { name: 'Op.2', value: 75 },
        { name: 'Op.3', value: 51 },
        { name: 'Op.4', value: 39 },
        { name: 'Op.5', value: 22 },
        { name: 'Op.6', value: 16 },
        { name: 'Op.7', value: 14 }
      ],
      gradientId: 'dbGrad'
    },
    mockGradient: 'from-purple-950/80 via-slate-950 to-slate-950'
  },
  {
    id: 'ai-analytics',
    name: 'AI Analytics Pipeline',
    tech: 'TensorFlow // Python Science',
    category: 'AI',
    position: [-0.3, 1.8, -2.2],
    color: '#ef4444',
    glowColor: '#f87171',
    size: 0.5,
    description: 'A neural convergence model trained to parse streams of cosmic metadata with real-time vector processing.',
    extendedDescription: 'An AI-powered Big Data engine designed to parse heavy telemetry values. Deployed dynamically, this pipeline ingests custom structured arrays, validates loss coefficients, and visualizes validation accuracy directly onto a glass-morphic client console.',
    techStack: ['Python', 'TensorFlow Core', 'Docker Containerization', 'React Front-end', 'Recharts Visualizer'],
    features: [
      'Sub-second inference responses mapped on client panels.',
      'Parallel thread execution handling 10,000 requests per minute.',
      'Automated batch training pipeline with active weight updates.',
      'Full state control with robust safety boundaries.'
    ],
    githubUrl: 'https://github.com/TahminaKhanNipa10-Codes',
    liveUrl: 'https://github.com/TahminaKhanNipa10-Codes',
    metrics: {
      label: 'NEURAL ACCURACY RATE',
      metricVal: '99.31% SCORE',
      points: [
        { name: 'Epoch 1', value: 45 },
        { name: 'Epoch 2', value: 61 },
        { name: 'Epoch 3', value: 78 },
        { name: 'Epoch 4', value: 89 },
        { name: 'Epoch 5', value: 95 },
        { name: 'Epoch 6', value: 97 },
        { name: 'Epoch 7', value: 99.31 }
      ],
      gradientId: 'aiGrad'
    },
    mockGradient: 'from-red-950/80 via-slate-950 to-slate-950'
  },
  {
    id: 'project-apex',
    name: 'Project Apex Engineering',
    tech: 'C# // ASP.NET Core // REST Core',
    category: 'Backend',
    position: [-1.5, -1.2, 1.0],
    color: '#eab308',
    glowColor: '#facc15',
    size: 0.52,
    description: 'A high-performance backend architectural node implementing secure JWT gateways and optimized REST endpoints.',
    extendedDescription: 'A scalable web service framework built on ASP.NET Core. Designed for high transaction throughput, implementing structured API versioning, dependency injection architectures, and extensive security filtering pipelines to protect core data nodes.',
    techStack: ['ASP.NET Core', 'C# Development', 'JWT Guard', 'Entity Framework Core', 'Swagger Docs', 'Serilog Pipelines'],
    features: [
      'Stateless token-based authentication with custom security policies.',
      'Auto-healing database migration scripts with fail-safe boundaries.',
      'Integrated API logs tracking throughput and error rates dynamically.',
      'Symmetric encryption modules securing transit payload blocks.'
    ],
    githubUrl: 'https://github.com/TahminaKhanNipa10-Codes/project-apex',
    liveUrl: 'https://github.com/TahminaKhanNipa10-Codes/project-apex',
    metrics: {
      label: 'GATEWAY THROUGHPUT API',
      metricVal: '4.8k REQ/SEC',
      points: [
        { name: 'Sec.1', value: 310 },
        { name: 'Sec.2', value: 430 },
        { name: 'Sec.3', value: 410 },
        { name: 'Sec.4', value: 580 },
        { name: 'Sec.5', value: 690 },
        { name: 'Sec.6', value: 710 },
        { name: 'Sec.7', value: 890 }
      ],
      gradientId: 'apexGrad'
    },
    mockGradient: 'from-amber-950/80 via-slate-950 to-slate-950'
  },
  {
    id: 'mywebsite-tahmina',
    name: 'Personal Universe Website',
    tech: 'React // Vite // Tailwind CSS',
    category: 'Full Stack',
    position: [1.6, 1.2, 2.0],
    color: '#ec4899',
    glowColor: '#f472b6',
    size: 0.58,
    description: 'An interactive personal universe showcase combining elegant high-contrast styling with modular client logic.',
    extendedDescription: 'A premium portfolio showcase. Driven by a fast single-page app architecture using Vite, styled with modern Tailwind CSS utilities, introducing micro-interactions, subtle glass-morphic menus, and dark-mode space aesthetic.',
    techStack: ['React 18', 'Vite Bundler', 'Tailwind CSS', 'Framer Motion Core', 'Custom Canvas Sparkles'],
    features: [
      'Interactive reactive UI models representing structural work sections.',
      'Fluid layouts optimized with responsive mobile-first Tailwind wrappers.',
      'Highly stylized typography pairings selecting Inter and Space Grotesk.',
      'Compact system stats monitoring application latency directly.'
    ],
    githubUrl: 'https://github.com/TahminaKhanNipa10-Codes/MyWebsite_Tahmina',
    liveUrl: 'https://github.com/TahminaKhanNipa10-Codes/MyWebsite_Tahmina',
    metrics: {
      label: 'INTERACTIVE FRAME RATE',
      metricVal: '60.0 FPS LOCKED',
      points: [
        { name: 't.1', value: 60 },
        { name: 't.2', value: 59 },
        { name: 't.3', value: 60 },
        { name: 't.4', value: 60 },
        { name: 't.5', value: 58 },
        { name: 't.6', value: 60 },
        { name: 't.7', value: 60 }
      ],
      gradientId: 'webGrad'
    },
    mockGradient: 'from-pink-950/80 via-slate-950 to-slate-950'
  },
  {
    id: 'online-bookshop-ms',
    name: 'BookShop Management Engine',
    tech: 'C# // ADO.NET // SQL Server RDBMS',
    category: 'Backend',
    position: [2.1, 0.4, -2.2],
    color: '#3b82f6',
    glowColor: '#60a5fa',
    size: 0.48,
    description: 'A deeply structured management system operating secure transaction states, indexing books, and handling checkout.',
    extendedDescription: 'A robust desktop management logic developed using C# and ADO.NET. Integrates cleanly with MS SQL Server for database connections, performing complex multi-table joins, parametric stored procedures, and programmatic reporting modules.',
    techStack: ['C# Core', 'ADO.NET Connection', 'MS SQL Server RDBMS', 'Parameterized Queries', 'Stored Procedures', 'Inventory Manager'],
    features: [
      'Prevention of SQL Injection vectors using strict parameterized parameters.',
      'Dynamic inventory state tracking with auto-complying audit structures.',
      'Detailed billing receipts compilation designed as modular outputs.',
      'Transactional backup scheduling scripts minimizing data loss risk.'
    ],
    githubUrl: 'https://github.com/TahminaKhanNipa10-Codes/OnlineBookShop-Management-System',
    liveUrl: 'https://github.com/TahminaKhanNipa10-Codes/OnlineBookShop-Management-System',
    metrics: {
      label: 'TRANSACTION COMMITTANCE',
      metricVal: '100.00% SECURE',
      points: [
        { name: 'H.1', value: 100 },
        { name: 'H.2', value: 100 },
        { name: 'H.3', value: 100 },
        { name: 'H.4', value: 100 },
        { name: 'H.5', value: 100 },
        { name: 'H.6', value: 100 },
        { name: 'H.7', value: 100 }
      ],
      gradientId: 'bmsGrad'
    },
    mockGradient: 'from-blue-950/80 via-slate-950 to-slate-950'
  },
  {
    id: 'minabookstore-mvc',
    name: 'MinaBookStore MVC Portal',
    tech: 'ASP.NET MVC // Entity Framework // SQL',
    category: 'Full Stack',
    position: [-2.2, -0.5, -2.0],
    color: '#10b981',
    glowColor: '#34d399',
    size: 0.54,
    description: 'An ASP.NET MVC e-commerce order system managing cart sequences, pricing calculations, and client invoice logs.',
    extendedDescription: 'A classic Model-View-Controller framework built to handle e-commerce flows. Orchestrates MVC controllers, business services, and database schemas with Entity Framework, optimizing item selection pipelines and client invoice rendering.',
    techStack: ['ASP.NET MVC', 'C# Programming', 'Entity Framework', 'SQL Server DB', 'Razor View Engine', 'Bootstrap Client'],
    features: [
      'Comprehensive Model-View-Controller isolation of dynamic logic bounds.',
      'Integrated shopping cart state machine utilizing session caches.',
      'Automated invoice calculation factoring discount rate matrices.',
      'Structured Razor pages delivering clean, responsive client display.'
    ],
    githubUrl: 'https://github.com/TahminaKhanNipa10-Codes/MinaBookStore-OrderSystemMVC',
    liveUrl: 'https://github.com/TahminaKhanNipa10-Codes/MinaBookStore-OrderSystemMVC',
    metrics: {
      label: 'ORDER PROCESSING DWELL',
      metricVal: '0.45s LATENCY',
      points: [
        { name: 'L.1', value: 0.8 },
        { name: 'L.2', value: 0.62 },
        { name: 'L.3', value: 0.55 },
        { name: 'L.4', value: 0.48 },
        { name: 'L.5', value: 0.47 },
        { name: 'L.6', value: 0.45 },
        { name: 'L.7', value: 0.45 }
      ],
      gradientId: 'mvcGrad'
    },
    mockGradient: 'from-emerald-950/80 via-slate-950 to-slate-950'
  }
];

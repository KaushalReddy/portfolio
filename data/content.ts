// Generated from verified project content and latest resume.
import type { Project, StackNode } from './types';

export const projects: Project[] = [
  {
    n: 'APEX-F1',
    d: 'Immersive Formula 1 interactive 3D visualization platform.',
    s: 'Interactive 3D platform',
    role: 'Frontend & 3D engineer: interactive 3D track rendering, camera orbit controls, and OpenF1 circuit data pipeline.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'React Three Fiber',
      'Three.js',
      'OpenF1 API'
    ],
    highlights: [
      'Built an interactive 3D Monaco circuit visualization using cached OpenF1-derived geometry, validating 1,634 track points across 2 clean laps.',
      'Engineered interactive 3D track rendering and camera controls to enable exploration of circuit geometry.',
      'Extended a modular, contract-oriented platform architecture to support future race-data integration and live visualization, with 11 repository commits.'
    ],
    prob: 'Formula 1 telemetry and circuit geometry are traditionally trapped in static 2D plots and tables, making spatial comprehension of elevation changes, corner radiuses, and racing lines difficult.',
    sol: 'An interactive web-based 3D motorsport platform rendering real Monaco track geometry derived from OpenF1 telemetry. Provides intuitive camera orbit controls, high-fidelity circuit visualization, and a modular architecture ready for live telemetry streams.',
    flow: [
      'OpenF1 API',
      'Telemetry ingestion & cache',
      'Coordinate transformation (1,634 track points)',
      'Three.js / React Three Fiber scene',
      'Interactive camera orbit & exploration'
    ],
    gh: 'apex-f1'
  },
  {
    n: 'Grant Agent System',
    d: 'AI research grant proposal generator & evaluator with multi-agent orchestration.',
    s: 'Completed multi-agent system',
    role: 'AI systems architect: 4-agent workflow orchestration, deterministic LLM output validation, and automated test suite.',
    stack: [
      'Python',
      'CrewAI',
      'Google Gemini API',
      'SQLite',
      'Streamlit',
      'Jinja2',
      'Plotly',
      'fpdf2'
    ],
    highlights: [
      'Architected a 4-agent AI workflow comprising Drafter, Planner, Evaluator, and Refiner agents, with explicit interfaces supporting modular development and testing.',
      'Established a deterministic validation layer for LLM-generated outputs, enforcing structured-output requirements and improving workflow consistency.',
      'Implemented configurable refinement iterations and a hybrid evaluation workflow combining deterministic scoring with LLM-based critique.'
    ],
    prob: 'Drafting competitive academic and scientific grant proposals requires weeks of iterative writing, budget allocations, compliance validation, and peer review.',
    sol: 'A multi-agent automation platform where specialized AI agents (Drafter, Planner, Evaluator, Refiner) collaborate autonomously. Employs a hybrid scoring engine (Python deterministic rule engine up to 40 pts + LLM rubric critique up to 60 pts) looping until proposals exceed quality thresholds, with Streamlit dashboard and PDF generation.',
    flow: [
      'Research topic & guidelines',
      'Planner agent: budget & milestones',
      'Drafter agent: proposal structure',
      'Evaluator: deterministic rules + LLM score',
      'Refiner agent loop (threshold check)',
      'Streamlit UI & PDF export'
    ],
    gh: 'Grant-agent-system'
  },
  {
    n: 'ReConnect',
    d: 'Alumni networking and engagement platform with role-based access control.',
    s: 'Active development',
    role: 'Full-stack developer: architecture, frontend, Firebase Authentication, Cloud Firestore modeling, security rules, and mentorship workflows.',
    stack: [
      'Next.js 14',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Firebase Auth',
      'Cloud Firestore',
      'Firebase Security Rules',
      'Recharts',
      'Nodemailer'
    ],
    highlights: [
      'Designed a role-based platform supporting 3 user roles—students, alumni, and administrators—with dedicated profile and dashboard workflows.',
      'Modeled application data across 6 Firestore collections covering users, alumni profiles, mentorship requests, engagement logs, events, and opportunities.',
      'Developed mentorship workflows spanning 3 operations: request submission, incoming-request retrieval, and accept/reject responses, supported by Firebase Authentication and Firestore security rules.'
    ],
    prob: 'Students and alumni lack a unified, secure institutional platform to discover each other, request mentorship guidance, and participate in campus events.',
    sol: 'A production-focused web platform with distinct workflows for students, alumni, faculty, and admins. Features searchable alumni directories, an asynchronous mentorship request system with email notifications, meeting coordination, event boards, and security rules denying unauthorized access.',
    flow: [
      'Role-based registration (Student/Alumni/Admin)',
      'Profile setup & verification',
      'Alumni directory discovery',
      'Mentorship request submission',
      'Accept / Reject notification workflow',
      'Meetings & event calendar',
      'Admin analytics dashboard'
    ],
    extra: [
      'Firestore collections',
      [
        'users',
        'alumniProfiles',
        'mentorshipRequests',
        'conversations',
        'mentorshipMeetings',
        'engagementLogs',
        'events',
        'opportunities'
      ]
    ],
    gh: 'ReConnect',
    viz: 1
  },
  {
    n: 'Healio',
    d: 'Mood, journal and sleep tracking app with ambient soundscapes and an AI assistant.',
    s: 'Live web application',
    role: 'End-to-end builder: UI architecture, Supabase auth & data layer, Web Audio API sound generation, and AI assistant integration.',
    stack: [
      'Vite',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Supabase',
      'Vercel AI SDK',
      'TanStack Query',
      'Recharts',
      'Web Audio API'
    ],
    highlights: [
      'Synthesized ambient binaural soundscapes natively in the browser via the Web Audio API without streaming static audio files.',
      'Built multi-modal wellness tracking for mood, journals, and sleep quality with interactive trend charts.',
      'Integrated conversational AI assistant via Supabase Edge Functions with secure session persistence.'
    ],
    prob: 'Many digital wellness tools feel clinical, monotonous, or disconnected from how users intuitively record their emotional states and rest patterns.',
    sol: 'An approachable wellness companion integrating Supabase authentication, mood and sleep logs, procedural audio soundscapes generated on the fly, and an AI chat assistant.',
    flow: [
      'User authentication',
      'Log mood, sleep hours and journal',
      'Web Audio ambient soundscape',
      'Conversational AI assistant',
      'Historical wellness trends'
    ],
    gh: 'healio-mood-melody-mate',
    live: 'https://healio-mood-melody-mate.lovable.app/'
  },
  {
    n: 'TerraPULSE',
    d: 'Farm-to-consumer produce marketplace front end.',
    s: 'Front-end prototype',
    role: 'Frontend builder: storefront pages, dynamic product filtering, and farmer profile showcase.',
    stack: [
      'Vite',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'React Router',
      'TanStack Query'
    ],
    prob: 'Enabling local farmers to connect directly with consumers without intermediary markup.',
    sol: 'A clean, multi-page storefront featuring category filtering, product search, farmer profiles, and interactive order forms.',
    flow: [
      'Storefront landing',
      'Produce filtering & search',
      'Farmer directory & stories',
      'Cart & checkout flow',
      'Farmer inquiry form'
    ],
    live: 'https://terra-pulse-direct.lovable.app/',
    gh: 'terra-pulse-direct'
  },
  {
    n: 'MindChain',
    d: 'Concept interface for timestamping idea ownership with MetaMask wallet.',
    s: 'Concept prototype',
    role: 'Frontend builder: Web3 wallet connection interface, cryptographic hashing flow, and idea dashboard.',
    stack: [
      'Vite',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'MetaMask (window.ethereum)'
    ],
    prob: 'Exploring intuitive user interfaces for timestamping and registering intellectual ownership of ideas.',
    sol: 'A landing page and dashboard integrating MetaMask wallet connection, idea hashing form, and a registry table.',
    flow: [
      'Connect MetaMask wallet',
      'Enter idea specification',
      'Generate hash digest',
      'Register idea record',
      'View registered portfolio'
    ],
    gh: 'Mind-Chain'
  }
];

export const stackNodes: StackNode[] = [
  {
    id: 'ai',
    label: 'AI & LLMs',
    x: 50,
    y: 8,
    desc: 'Prompt engineering, CrewAI multi-agent orchestration, and Google Gemini API integration.',
    rel: ['python', 'node']
  },
  {
    id: 'python',
    label: 'Python',
    x: 22,
    y: 26,
    desc: 'Multi-agent AI workflows, automation, data ingestion pipelines, and unit testing.',
    rel: ['ai', 'mysql']
  },
  {
    id: 'three',
    label: 'Three.js / 3D',
    x: 78,
    y: 26,
    desc: 'React Three Fiber, WebGL, 3D scene rendering, and interactive telemetry visualization.',
    rel: ['react', 'next']
  },
  {
    id: 'react',
    label: 'React',
    x: 84,
    y: 52,
    desc: 'Component architecture, state management, and modern interactive web experiences.',
    rel: ['next', 'three', 'node']
  },
  {
    id: 'next',
    label: 'Next.js',
    x: 80,
    y: 80,
    desc: 'Full-stack React with App Router, server rendering, optimization, and Vercel deployment.',
    rel: ['react', 'firebase', 'three']
  },
  {
    id: 'node',
    label: 'Node / REST',
    x: 50,
    y: 82,
    desc: 'REST API design, backend integration, Node.js services, and asynchronous workflows.',
    rel: ['react', 'firebase', 'python']
  },
  {
    id: 'firebase',
    label: 'Firebase',
    x: 20,
    y: 80,
    desc: 'Firebase Authentication, Cloud Firestore data modeling, and security rules.',
    rel: ['node', 'next']
  },
  {
    id: 'mysql',
    label: 'Databases',
    x: 34,
    y: 92,
    desc: 'Relational & NoSQL data models with MySQL, SQLite, and Cloud Firestore.',
    rel: ['java', 'python', 'node']
  },
  {
    id: 'java',
    label: 'Java',
    x: 14,
    y: 52,
    desc: 'Object-oriented programming, data structures, and core algorithmic problem solving.',
    rel: ['mysql']
  }
];

export const roleExplorer = {
  "RULE": {
    "users": "Any signed-in user can read. A user creates and edits only their own document and cannot change their own role. Deletes are disabled.",
    "alumniProfiles": "Any signed-in user can read. Only the owner, with the ALUMNI role, can create a profile; the owner can update it.",
    "mentorshipRequests": "Any signed-in user can read and write.",
    "conversations": "Any signed-in user can read and write, including the messages subcollection.",
    "mentorshipMeetings": "Any signed-in user can read and write.",
    "events": "Any signed-in user can read. Only admins can create, update or delete.",
    "opportunities": "Any signed-in user can read. Only admins can create, update or delete."
  },
  "MOD": {
    "Overview": [
      "users",
      "Role-specific dashboard. The admin view shows live user counts by role from Firestore."
    ],
    "Directory": [
      "alumniProfiles",
      "Searchable alumni directory and profile pages."
    ],
    "Mentorship requests": [
      "mentorshipRequests",
      "Alumni see incoming requests; students and faculty send and track their own."
    ],
    "Messages": [
      "conversations",
      "Conversations with a messages subcollection."
    ],
    "Meetings": [
      "mentorshipMeetings",
      "Mentorship meetings."
    ],
    "Events": [
      "events",
      "Events list."
    ],
    "Opportunities": [
      "opportunities",
      "Opportunities list."
    ],
    "Manage users": [
      "users",
      "Admin user management."
    ],
    "Analytics": [
      null,
      "Admin analytics with Recharts."
    ]
  },
  "ROLES": {
    "ALUMNI": [
      "Overview",
      "Mentorship requests",
      "Messages",
      "Meetings",
      "Directory",
      "Events",
      "Opportunities"
    ],
    "STUDENT": [
      "Overview",
      "Mentorship requests",
      "Messages",
      "Meetings",
      "Directory",
      "Events",
      "Opportunities"
    ],
    "FACULTY": [
      "Overview",
      "Mentorship requests",
      "Messages",
      "Meetings",
      "Directory",
      "Events",
      "Opportunities"
    ],
    "ADMIN": [
      "Overview",
      "Manage users",
      "Analytics",
      "Directory",
      "Events",
      "Opportunities"
    ]
  }
} as const;

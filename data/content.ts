// Generated from the verified prototype content. Edit freely.
import type { Project, StackNode } from './types';
export const projects: Project[] = [
  {
    "n": "ReConnect",
    "d": "Alumni networking and engagement platform.",
    "s": "Active development",
    "role": "Full-stack developer: architecture, frontend, Firebase/Firestore integration, authentication, database structure, security rules and features.",
    "stack": [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase Auth",
      "Cloud Firestore",
      "Recharts",
      "Nodemailer"
    ],
    "prob": "Alumni and students need a dedicated place to find each other, connect with mentors, communicate and find opportunities.",
    "sol": "A role-based platform for students, alumni, faculty and admins: a searchable alumni directory and profiles, mentorship requests, messaging, scheduled mentorship meetings (you paste a meeting link; there is no built-in video), events, opportunities, engagement logs, email OTP verification, an email when a mentorship request is accepted, and admin analytics. Eight Firestore collections, with security rules that deny everything not explicitly allowed.",
    "flow": [
      "Register with a role",
      "Profile",
      "Alumni directory",
      "Mentorship request",
      "Messages and meetings",
      "Events and opportunities",
      "Admin analytics"
    ],
    "extra": [
      "Firestore collections",
      [
        "users",
        "alumniProfiles",
        "mentorshipRequests",
        "conversations",
        "mentorshipMeetings",
        "engagementLogs",
        "events",
        "opportunities"
      ]
    ],
    "gh": "ReConnect",
    "viz": 1
  },
  {
    "n": "TerraPULSE",
    "d": "Farm-to-consumer produce marketplace front end, built with Lovable.",
    "s": "Front-end prototype. Product and farmer data are hardcoded, cart and contact form only show confirmation messages, and no backend was found.",
    "role": "End-to-end builder. Built the full application, from the storefront pages to shop filtering and farmer profiles, using AI-assisted development to move quickly while making the product, design and engineering decisions.",
    "stack": [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Router",
      "TanStack Query"
    ],
    "prob": "Connect local farmers directly with consumers, without middlemen.",
    "sol": "A multi-page storefront: home, shop with search, category filter and sorting, fruits and vegetables pages, a farmers list with farmer profiles, and a contact form. Generated and managed through Lovable, synced to GitHub.",
    "flow": [
      "Home",
      "Shop, fruits or vegetables",
      "Farmers",
      "Farmer profile",
      "Contact"
    ],
    "live": "https://terra-pulse-direct.lovable.app/",
    "gh": "terra-pulse-direct"
  },
  {
    "n": "Grant Agent System",
    "d": "Multi-agent grant proposal generator and evaluator.",
    "s": "Code available on GitHub",
    "role": "Architected the four-agent workflow and the rule-based scoring layer around it.",
    "stack": [
      "Python",
      "CrewAI",
      "Streamlit",
      "Gemini 2.5 Flash",
      "SQLite",
      "Jinja2",
      "Plotly",
      "fpdf2"
    ],
    "prob": "Turning a research topic into a complete grant proposal normally takes repeated drafting and review.",
    "sol": "Four agents (drafter, budget and timeline planner, evaluator, refiner) with explicit interfaces loop until the score passes a threshold or the iteration limit is reached. Scoring is hybrid: a Python rule engine checks structure for up to 40 points and an LLM critique adds up to 60.",
    "flow": [
      "Research topic",
      "Drafter",
      "Planner",
      "Evaluator: rules + LLM score",
      "Refiner",
      "Repeat or finish"
    ],
    "gh": "Grant-agent-system"
  },
  {
    "n": "Healio",
    "d": "Mood, journal and sleep tracking app with ambient soundscapes and an AI chat assistant.",
    "s": "Working app, live online. Not a medical or clinical tool.",
    "role": "End-to-end builder. Built the full application, from sign-in and mood, journal and sleep logging to the AI assistant, using AI-assisted development to move quickly while making the product and engineering decisions.",
    "stack": [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Vercel AI SDK",
      "TanStack Query",
      "Recharts",
      "Web Audio API"
    ],
    "prob": "Many digital wellness experiences feel passive, generic or disconnected from how people actually experience their mood. Healio aims to make mood and well-being interactions more engaging and approachable.",
    "sol": "Sign-in with Supabase auth; mood logging with notes; journal entries; sleep logging (hours and quality); ambient soundscapes generated in the browser with the Web Audio API, no audio files; and an AI chat assistant served through a Supabase edge function that stores messages in the database.",
    "flow": [
      "Sign in",
      "Log mood, journal or sleep",
      "Ambient sound",
      "AI assistant"
    ],
    "gh": "healio-mood-melody-mate",
    "live": "https://healio-mood-melody-mate.lovable.app/"
  },
  {
    "n": "MindChain",
    "d": "Concept interface for timestamping idea ownership with a MetaMask wallet.",
    "s": "Front-end prototype. The idea hash is a placeholder, the dashboard uses mock data, Mint NFT only shows a message, and there is no smart contract.",
    "role": "End-to-end builder. Built the full application, from wallet connection to the idea registration flow and dashboard, using AI-assisted development to move quickly while making the product and engineering decisions.",
    "stack": [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MetaMask (window.ethereum)"
    ],
    "prob": "People have ideas they want to capture and be able to show they came up with first. MindChain explores a simple, engaging interface for registering and tracking ideas.",
    "sol": "A landing page, MetaMask wallet connection, an idea registration form (title, description, optional IPFS link) with a hash step, and a dashboard of registered ideas.",
    "flow": [
      "Connect wallet",
      "Describe idea",
      "Generate hash",
      "Register",
      "Dashboard"
    ],
    "gh": "Mind-Chain"
  }
];
export const stackNodes: StackNode[] = [
  {
    "id": "ai",
    "label": "AI",
    "x": 50,
    "y": 8,
    "desc": "Prompt engineering and LLM API integration.",
    "rel": [
      "python",
      "node"
    ]
  },
  {
    "id": "python",
    "label": "Python",
    "x": 20,
    "y": 30,
    "desc": "AI, automation and backend systems.",
    "rel": [
      "ai",
      "mysql"
    ]
  },
  {
    "id": "react",
    "label": "React",
    "x": 80,
    "y": 30,
    "desc": "Frontend architecture and component systems.",
    "rel": [
      "next",
      "node"
    ]
  },
  {
    "id": "java",
    "label": "Java",
    "x": 10,
    "y": 62,
    "desc": "OOP and data structures.",
    "rel": [
      "mysql"
    ]
  },
  {
    "id": "node",
    "label": "Node",
    "x": 50,
    "y": 74,
    "desc": "Express, REST APIs and JavaScript on the server.",
    "rel": [
      "react",
      "firebase",
      "python"
    ]
  },
  {
    "id": "next",
    "label": "Next.js",
    "x": 90,
    "y": 62,
    "desc": "Full-stack React with routing and server rendering.",
    "rel": [
      "react",
      "firebase"
    ]
  },
  {
    "id": "firebase",
    "label": "Firebase",
    "x": 30,
    "y": 92,
    "desc": "Auth and Cloud Firestore.",
    "rel": [
      "node",
      "next"
    ]
  },
  {
    "id": "mysql",
    "label": "MySQL",
    "x": 70,
    "y": 92,
    "desc": "Relational data and DBMS fundamentals.",
    "rel": [
      "java",
      "node",
      "python"
    ]
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

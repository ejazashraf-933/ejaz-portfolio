// Portfolio data — edit this file to update the site.

export const personalInfo = {
  name: "Ejaz Ashraf",
  title: "Full-Stack & Mobile Developer",
  headline:
    "I build web apps, mobile apps and AI features that real businesses run on.",
  subheadline:
    "Full-stack and mobile developer with 4+ years shipping production software: enterprise portals, App Store and Google Play apps, and LLM-powered tools.",
  email: "ejazashraf933@gmail.com",
  phone: "+923418973933",
  location: "Lahore, Pakistan",
  availability: "Available for freelance projects",
  bio: "I'm a full-stack and mobile developer based in Lahore, working remotely with teams and clients abroad. Over the last 4+ years I have shipped workforce portals, an event-operations platform, a legal case-management SaaS, healthcare and consumer mobile apps, and AI assistants that answer questions from a company's own data.",
  bioSecondary:
    "I take a project from the first conversation to the live product: requirements, design decisions, build, deployment and the fixes after launch. I like plain communication and software that keeps working when real users arrive.",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/ejazashraf-933",
    linkedin: "https://www.linkedin.com/in/ejazashraf/",
    upwork: "https://www.upwork.com/freelancers/~015906b77829bde815",
  },
  stats: [
    { value: "4+", label: "Years building production software" },
    { value: "15+", label: "Projects delivered" },
    { value: "50K+", label: "App downloads" },
    { value: "2×", label: "Employee of the Quarter" },
  ],
  heroStack: [
    "React",
    "React Native",
    "Angular",
    "Next.js",
    "NestJS",
    "FastAPI",
    "PostgreSQL",
    "OpenAI",
    "Pinecone",
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Angular", "Next.js", "TypeScript", "RxJS", "TanStack Query", "Redux", "Tailwind CSS", "Angular Material"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Expo", "EAS Build", "Push notifications", "App Store release", "Google Play release"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Python", "FastAPI", "PostgreSQL", "MongoDB", "MySQL", "REST APIs", "WebSockets", "Redis", "BullMQ"],
  },
  {
    title: "AI",
    items: ["OpenAI API", "RAG pipelines", "LLM tool-calling agents", "Pinecone", "pgvector", "Answer-quality review"],
  },
  {
    title: "Cloud & delivery",
    items: ["Azure (B2C, Blob Storage, App Services)", "AWS (S3, SES)", "Firebase (Firestore, Cloud Functions)", "Docker", "Vercel", "Azure DevOps", "Git / GitHub"],
  },
  {
    title: "Integrations",
    items: ["Stripe", "DocuSign", "SendGrid", "OAuth 2.0 / JWT", "Apple & Google sign-in", "PostHog", "Sentry"],
  },
];

export const experiences = [
  {
    id: 1,
    company: "LS-LART",
    position: "Senior Software Engineer",
    duration: "2026 – Present",
    location: "Remote",
    description: [
      "Own three production systems end to end: development, deployment, cloud provisioning and ongoing maintenance",
      "Building a Python/FastAPI AI assistant with an LLM tool-calling agent and Pinecone vector search, so non-technical users can query business data in plain English",
      "Building an Angular + Firebase (Firestore, Cloud Functions) admin platform for print-job processing: proofing workflows, multi-stage approvals and automated client notifications",
      "Extending a PHP/MySQL data collection and analytics platform with interactive dashboards and geospatial reporting (ApexCharts, Leaflet)",
    ],
  },
  {
    id: 2,
    company: "Kcube.ai",
    position: "Software Engineer",
    duration: "Jan 2022 – Jul 2026",
    location: "Lahore, Pakistan",
    description: [
      "Built and shipped production web and mobile applications end to end with Angular, React, Next.js, React Native, NestJS and FastAPI",
      "Built backend services on PostgreSQL: REST and real-time WebSocket APIs with role-based access control and JWT/OAuth 2.0 authentication",
      "Integrated Stripe, DocuSign, Azure (B2C, Blob Storage), AWS (S3, SES) and SendGrid across multiple client products",
      "Cut initial load time by 50% through code splitting, lazy loading and bundle optimisation, and built reusable component libraries that reduced feature development time by 30%",
      "Mentored junior developers through code reviews and set frontend practices across the team",
    ],
  },
];

export type ProjectKind = "web" | "mobile" | "ai" | "data";
export type BadgeTone = "live" | "store" | "ai" | "private" | "neutral";

export interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  kind: ProjectKind;
  badges: { label: string; tone: BadgeTone }[];
  description: string;
  /** Cover image. Leave empty to show the generated illustration. */
  image: string;
  /** Extra screenshots, shown as a gallery under the cover on hover. */
  gallery?: string[];
  technologies: string[];
  liveUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ALA Portals & Mobile App",
    category: "Workforce platform",
    client: "Agri Labour Australia",
    kind: "web",
    badges: [
      { label: "Live", tone: "live" },
      { label: "App Store", tone: "store" },
      { label: "Google Play", tone: "store" },
    ],
    description:
      "Web portal and mobile app for one of Australia's largest agricultural labour-hire companies. Manages the candidate lifecycle, job processing, payroll documents and compliance for thousands of field workers.",
    image: "/projects/ala-portal/cover.png",
    technologies: ["Angular", "React Native", "Expo", "TypeScript", "Azure B2C", "RxJS", "TanStack Query", "DocuSign API", "Azure Blob Storage"],
    liveUrl: "https://staff.agrilabour.com.au",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ejaz.ashraf.agrilabouraustralia",
    appStoreUrl: "https://apps.apple.com/au/app/ala-candidate-portal/id6741917143",
    highlights: [
      "Modular Angular portal and React Native app covering candidate management, payroll, job tracking and compliance workflows",
      "DocuSign and Azure Blob Storage integration for end-to-end digital documents: signature collection, secure storage and versioning",
      "Published on Google Play and the App Store with 95%+ crash-free sessions",
    ],
  },
  {
    id: 2,
    title: "APR System",
    category: "AI legal SaaS",
    client: "Kcube.ai",
    kind: "ai",
    badges: [
      { label: "AI · RAG", tone: "ai" },
      { label: "SaaS", tone: "neutral" },
    ],
    description:
      "Legal case-management SaaS with a RAG-based AI chat over case documents, Stripe subscription billing, digital document signing and multi-language support.",
    image: "/projects/apr-system/cover.png",
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "RAG", "Pinecone", "Stripe", "TanStack Query"],
    highlights: [
      "React frontend and FastAPI backend with an AI chat that retrieves from legal documents before answering",
      "Stripe subscriptions with tiered plans and feature toggles, OAuth sign-in (Google, Meta, Microsoft) and two-factor authentication",
      "Digital document signing with PDF generation, Calendly scheduling and i18next translations",
    ],
  },
  {
    id: 3,
    title: "AI Analytics Assistant",
    category: "LLM agent",
    client: "LS-LART",
    kind: "ai",
    badges: [
      { label: "AI agent", tone: "ai" },
      { label: "In production", tone: "live" },
      { label: "Client work", tone: "private" },
    ],
    description:
      "A service that lets non-technical users ask questions about their business data in plain English and get answers back from the database.",
    image: "",
    technologies: ["Python", "FastAPI", "OpenAI", "Pinecone", "Pandas", "SQL", "JWT"],
    highlights: [
      "LLM tool-calling agent with vector-based long-term memory and conversation persistence",
      "Usage metering per question and JWT authentication",
      "Human review pipeline that measures answer quality and feeds corrections back to the assistant",
    ],
  },
  {
    id: 4,
    title: "Hailo — Event Management Platform",
    category: "Operations SaaS",
    client: "Kcube.ai",
    kind: "web",
    badges: [
      { label: "Enterprise", tone: "neutral" },
      { label: "Real-time", tone: "neutral" },
    ],
    description:
      "Enterprise SaaS for end-to-end event operations: projects, teams, finance, procurement, HR and leave, and payroll, with real-time collaboration across multi-country teams.",
    image: "",
    technologies: ["React", "NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Socket.IO", "Redis", "BullMQ", "Azure MSAL", "AWS"],
    highlights: [
      "NestJS + TypeORM + PostgreSQL backend with granular role-based access control, JWT auth and TOTP two-factor authentication",
      "Real-time notifications and presence with Socket.IO and Redis, and background jobs (email, digests, exports) on BullMQ",
      "React frontend with Azure MSAL and Google login, TanStack Query, i18next and Sentry monitoring",
    ],
  },
  {
    id: 5,
    title: "CoreMemories AI",
    category: "Consumer AI app",
    client: "Kcube.ai",
    kind: "mobile",
    badges: [
      { label: "Google Play", tone: "store" },
      { label: "AI", tone: "ai" },
    ],
    description:
      "AI-powered personal memory platform that captures, organises and resurfaces memories through prompts and personality-driven interactions.",
    image: "/projects/core-memories/cover.png",
    technologies: ["React", "React Native", "TypeScript", "TanStack Query", "Tailwind CSS", "PostHog", "Apple Sign-In"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kcube.corememories.core_memories",
    highlights: [
      "React and TypeScript frontend with TanStack Query caching across sessions",
      "Onboarding flow with personality quizzes, voice recording and scheduling",
      "Facebook and Apple sign-in, and PostHog analytics for retention tracking",
    ],
  },
  {
    id: 6,
    title: "Print Job Processing Platform",
    category: "Admin platform",
    client: "LS-LART",
    kind: "web",
    badges: [
      { label: "In production", tone: "live" },
      { label: "Client work", tone: "private" },
    ],
    description:
      "Admin platform that manages print jobs from intake through artwork proofing, multi-stage approvals and production.",
    image: "",
    technologies: ["Angular", "TypeScript", "Firestore", "Cloud Functions", "Node.js", "SendGrid"],
    highlights: [
      "Proofing workflows, role-based approval chains and automated client notifications",
      "Third-party print and mailing API integration (product catalogue, postage options, live status mapping) behind a tested integration layer",
      "Diagnosed and fixed production defects, including duplicate notifications and async scheduling bugs",
    ],
  },
  {
    id: 7,
    title: "Heides Patient Portal",
    category: "Healthcare",
    client: "Kcube.ai",
    kind: "mobile",
    badges: [
      { label: "Web + mobile", tone: "neutral" },
      { label: "Healthcare", tone: "neutral" },
    ],
    description:
      "Healthcare platform for patient management, appointments, prescriptions, document handling and secure messaging between patients and providers.",
    image: "",
    technologies: ["React", "React Native", "Expo", "TypeScript", "FastAPI", "PostgreSQL", "pgvector", "Sentry"],
    highlights: [
      "React web frontend with TanStack Router and Chakra UI for the patient dashboard and appointments",
      "React Native app with Expo for iOS and Android, with push notifications",
      "FastAPI backend on PostgreSQL with pgvector, a NikoHealth integration and Sentry monitoring",
    ],
  },
  {
    id: 8,
    title: "Video Editing Tool",
    category: "Media SaaS",
    client: "Kcube.ai",
    kind: "web",
    badges: [
      { label: "SaaS", tone: "neutral" },
      { label: "AI voice", tone: "ai" },
    ],
    description:
      "Cloud video editor with in-browser composition on Remotion, cloud processing with FFmpeg, multi-language support and an AI chat for user help.",
    image: "",
    technologies: ["React", "TypeScript", "FastAPI", "Remotion", "FFmpeg", "Stripe", "Azure Blob Storage", "ElevenLabs"],
    highlights: [
      "React frontend with Remotion for in-browser composition and timeline management",
      "FastAPI backend with MoviePy and FFmpeg for cloud video processing",
      "Stripe payments, Azure Blob Storage for media, and Google, Apple and Microsoft sign-in",
    ],
  },
  {
    id: 9,
    title: "Data Collection & Analytics Platform",
    category: "Analytics",
    client: "LS-LART",
    kind: "data",
    badges: [
      { label: "In production", tone: "live" },
      { label: "Client work", tone: "private" },
    ],
    description:
      "Campaign, location and vendor APIs with interactive dashboards, geospatial reporting and scheduled jobs, on a large long-running codebase.",
    image: "",
    technologies: ["PHP", "MySQL", "JavaScript", "ApexCharts", "Leaflet"],
    highlights: [
      "Interactive dashboards and map-based reporting for campaign performance",
      "Extended and maintained a large legacy codebase while keeping production stable",
      "Campaign, location and vendor APIs plus scheduled background jobs",
    ],
  },
  {
    id: 10,
    title: "Image Upscaler",
    category: "AI web app",
    client: "Kcube.ai",
    kind: "ai",
    badges: [{ label: "AI", tone: "ai" }],
    description:
      "AI image-upscaling web application with user accounts, two-factor security and a clean interface built on shadcn components.",
    image: "",
    technologies: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "shadcn/ui", "SendGrid"],
    highlights: [
      "Next.js frontend with shadcn/ui and Tailwind CSS",
      "FastAPI backend with JWT auth, refresh tokens and Google OAuth",
      "TOTP two-factor authentication and a TypeScript API client generated from the OpenAPI spec",
    ],
  },
  {
    id: 11,
    title: "AI SaaS Boilerplate",
    category: "Starter kit",
    client: "Kcube.ai",
    kind: "web",
    badges: [
      { label: "AI", tone: "ai" },
      { label: "Docker", tone: "neutral" },
    ],
    description:
      "Production-ready full-stack starter for AI SaaS products: OpenAI chat, Stripe subscriptions, an admin dashboard and multi-provider OAuth.",
    image: "",
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "OpenAI", "Stripe", "Tailwind CSS", "Docker"],
    highlights: [
      "React frontend with dynamic theming and role-based access control",
      "OpenAI integration with per-user token tracking and an admin analytics dashboard",
      "Stripe subscriptions with trials, upgrades, downgrades and webhook handling",
    ],
  },
];

export const services = [
  {
    key: "web",
    title: "Web applications",
    summary:
      "Business websites, booking and ordering systems, customer portals and internal dashboards.",
    points: [
      "Built with React, Next.js or Angular",
      "Secure logins, roles and payments",
      "Fast on phones, easy to update",
    ],
  },
  {
    key: "mobile",
    title: "Mobile apps",
    summary:
      "One codebase for iPhone and Android, released on the App Store and Google Play.",
    points: [
      "React Native and Expo",
      "Push notifications and offline-friendly screens",
      "Store submission handled for you",
    ],
  },
  {
    key: "ai",
    title: "AI features",
    summary:
      "Assistants that answer from your own documents and data, added to a new or existing product.",
    points: [
      "Chat over your documents (RAG)",
      "Agents that query data and take actions",
      "Answer-quality checks before users see it",
    ],
  },
];

export const process = [
  { step: "Talk", detail: "A short call about what you need and who will use it." },
  { step: "Plan", detail: "A written scope, timeline and quote before any work starts." },
  { step: "Build", detail: "Regular updates and working previews you can click through." },
  { step: "Launch", detail: "Deployment, handover and support after go-live." },
];

export const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Business websites, booking and ordering systems, customer portals, internal dashboards, iPhone and Android apps, and AI features such as a chatbot that answers from your own documents.",
  },
  {
    q: "How does pricing work?",
    a: "Small, clearly scoped projects are quoted as a fixed price. Larger or ongoing work is billed monthly. Either way you get a written quote before any work starts.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on scope. A business website is usually a matter of weeks, and a full web or mobile app takes a few months. You get a timeline together with the quote.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. I have delivered production software for a client in Australia and currently work remotely with a team abroad. Calls and updates are arranged around your time zone.",
  },
  {
    q: "Who owns the code?",
    a: "You do. When the project is paid for, the source code and the accounts it runs on are handed over to you.",
  },
  {
    q: "Do you help after launch?",
    a: "Yes. Fixes, updates and new features are available as a monthly arrangement or as needed.",
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Software Engineering (BSSE)",
    institution: "University of Azad Jammu & Kashmir",
    location: "Muzaffarabad, Azad Kashmir",
  },
];

export const awards = [
  {
    id: 1,
    title: "Employee of the Quarter",
    organization: "Kcube.ai",
    period: "Q2 2025",
    image: "/award-2.jpg",
    description:
      "Recognised for delivering high-impact projects across cross-functional teams.",
  },
  {
    id: 2,
    title: "Employee of the Quarter",
    organization: "Kcube.ai (then Triple K Technologies)",
    period: "Q3 2022",
    image: "/award-1.jpg",
    description:
      "Recognised for strong technical contributions and consistent delivery.",
  },
];

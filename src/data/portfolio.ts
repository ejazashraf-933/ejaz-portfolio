// Portfolio Data - Easy to update!

export const personalInfo = {
  name: "Ejaz Ashraf",
  title: "Software Engineer",
  subtitle: "Full-Stack Software Engineer",
  email: "ejazashraf933@gmail.com",
  phone: "+923418973933",
  location: "Lahore, Pakistan",
  bio: "Full-Stack Software Engineer with 4+ years of experience building enterprise web and mobile applications at Kcube.ai. Shipped workforce management portals, an event-management operations platform, an AI-powered memory app, and a legal case-management SaaS — serving thousands of users across Australia and beyond.",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/ejazashraf-933",
    linkedin: "https://www.linkedin.com/in/ejazashraf/",
  },
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Products Shipped", value: "7" },
    { label: "Users Reached", value: "1000s" },
    { label: "Awards Won", value: "2x" },
  ],
};

export const skills = [
  // Frontend
  { name: "React.js", category: "Frontend", level: 95 },
  { name: "Angular", category: "Frontend", level: 95 },
  { name: "TypeScript", category: "Frontend", level: 90 },
  { name: "JavaScript (ES6+)", category: "Frontend", level: 95 },
  { name: "Next.js", category: "Frontend", level: 80 },
  { name: "HTML/CSS", category: "Frontend", level: 95 },

  // Mobile
  { name: "React Native", category: "Mobile", level: 90 },
  { name: "Expo", category: "Mobile", level: 85 },

  // Backend
  { name: "FastAPI", category: "Backend", level: 85 },
  { name: "Python", category: "Backend", level: 85 },
  { name: "Node.js", category: "Backend", level: 80 },
  { name: "PostgreSQL", category: "Backend", level: 80 },
  { name: "REST APIs", category: "Backend", level: 95 },

  // Styling
  { name: "Tailwind CSS", category: "Styling", level: 90 },
  { name: "SCSS", category: "Styling", level: 85 },
  { name: "Material UI", category: "Styling", level: 85 },
  { name: "Angular Material", category: "Styling", level: 90 },

  // State Management
  { name: "RxJS", category: "State & Data", level: 90 },
  { name: "TanStack Query", category: "State & Data", level: 85 },
  { name: "Redux", category: "State & Data", level: 85 },

  // Tools & Cloud
  { name: "Git/GitHub", category: "Tools & Cloud", level: 95 },
  { name: "Azure", category: "Tools & Cloud", level: 85 },
  { name: "Azure B2C", category: "Tools & Cloud", level: 85 },
  { name: "Docker", category: "Tools & Cloud", level: 75 },
  { name: "Azure DevOps", category: "Tools & Cloud", level: 80 },
];

export const experiences = [
  {
    id: 1,
    company: "Kcube.ai",
    position: "Software Engineer",
    duration: "Jan 2022 - Present",
    location: "Lahore, Pakistan",
    description: [
      "Built and shipped 7 production web & mobile applications (ALA Web Portal, ALA Mobile App, Hailo Platform, CoreMemories AI, APR System, Heides Patient Portal, Image Upscaler) using Angular, React, Next.js, React Native, NestJS, and FastAPI",
      "Built backend services with NestJS and FastAPI on PostgreSQL — REST and real-time WebSocket APIs with role-based access control and JWT/OAuth 2.0 authentication",
      "Developed reusable component libraries following atomic design principles, reducing feature development time by 30%",
      "Optimized application performance through code splitting, lazy loading, and bundle optimization, cutting initial load time by 50%",
      "Implemented secure authentication and authorization flows using Azure B2C and OAuth 2.0 with role-based access control",
      "Architected state management layer using RxJS (Angular) and TanStack Query (React), enabling efficient data fetching across complex workflows",
      "Mentored junior developers through code reviews and established frontend best practices across the team",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "ALA Portals & Mobile App",
    client: "Agri-Labour Australia",
    description:
      "Cross-platform portal system for Australia's largest agricultural labour hire company. Enterprise web portal and mobile app managing candidate lifecycle, job processing, payroll, and compliance for thousands of field workers.",
    image: "/projects/ala-portal/cover.png",
    technologies: [
      "Angular",
      "React Native",
      "Expo",
      "TypeScript",
      "Azure B2C",
      "RxJS",
      "TanStack Query",
      "DocuSign API",
      "Azure Blob Storage",
    ],
    liveUrl: "https://staff.agrilabour.com.au",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.ejaz.ashraf.agrilabouraustralia",
    featured: true,
    highlights: [
      "Architected modular Angular web portal and React Native mobile app for candidate management, payroll, job tracking, and compliance workflows",
      "Integrated DocuSign API and Azure Blob Storage for end-to-end digital document workflows — signature collection, secure storage, and versioning",
      "Published mobile app on both Google Play Store and Apple App Store with 95%+ crash-free sessions",
    ],
  },
  {
    id: 8,
    title: "Hailo — Event Management Platform",
    client: "Kcube.ai",
    description:
      "Enterprise SaaS that streamlines end-to-end event operations — projects, teams, finance, procurement, HR/leave, and payroll — with real-time collaboration across multi-country teams.",
    image: "",
    technologies: [
      "React",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "Socket.IO",
      "Redis",
      "BullMQ",
      "Azure MSAL",
      "AWS",
    ],
    featured: true,
    highlights: [
      "Built the NestJS + TypeORM + PostgreSQL backend with granular role-based access control (RBAC), JWT auth, and two-factor authentication (TOTP)",
      "Implemented real-time notifications and presence with Socket.IO + Redis, and background jobs (email, digests, exports) via BullMQ",
      "Developed the React 18 + Vite frontend with Azure MSAL + Google login, TanStack Query, i18next multi-language, and Sentry monitoring",
    ],
  },
  {
    id: 2,
    title: "CoreMemories AI",
    client: "Kcube.ai",
    description:
      "AI-powered personal memory management platform that captures, organizes, and resurfaces user memories through intelligent prompts and personality-driven interactions. Available on Google Play Store.",
    image: "/projects/core-memories/cover.png",
    technologies: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "REST APIs",
      "PostHog",
      "Apple Sign-In",
    ],
    liveUrl:
      "https://core-memories-webapp-frontend-staging.azurewebsites.net/",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.kcube.corememories.core_memories",
    featured: true,
    highlights: [
      "Built the full frontend using React and TypeScript with TanStack Query for optimized API caching across sessions",
      "Developed interactive onboarding flow with personality quizzes, voice recording, and scheduling — driving user engagement from first launch",
      "Integrated social authentication (Facebook, Apple Sign-In) and PostHog analytics for user behavior tracking and retention optimization",
    ],
  },
  {
    id: 3,
    title: "APR System",
    client: "Kcube.ai",
    description:
      "AI-powered legal case management SaaS with RAG-based AI chat, Stripe subscription billing, digital document signing, and multi-language support.",
    image: "/projects/apr-system/cover.png",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Stripe",
      "Redux",
      "TanStack Query",
      "Tailwind CSS",
    ],
    featured: true,
    highlights: [
      "Built full-stack application with React 19 frontend and FastAPI backend, implementing AI-powered chat using RAG for intelligent legal document retrieval",
      "Developed Stripe subscription system with tiered plans, feature toggles, OAuth (Google, Meta, Microsoft), and two-factor authentication",
      "Implemented digital document signing with PDF generation, Calendly scheduling, and i18next multi-language support",
    ],
  },
  {
    id: 4,
    title: "Video Editing Tool",
    client: "Kcube.ai",
    description:
      "Cloud-based video editing platform with in-browser video composition using Remotion, cloud processing with FFmpeg, multi-language support, and AI chat for user assistance.",
    image: "",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "Remotion",
      "FFmpeg",
      "Chakra UI",
      "Stripe",
      "Azure Blob Storage",
      "ElevenLabs",
    ],
    featured: true,
    highlights: [
      "Built React frontend with Chakra UI and Remotion for in-browser video composition and timeline management",
      "Developed FastAPI backend with MoviePy and FFmpeg for cloud-based video processing",
      "Integrated Stripe payments, Azure Blob Storage for media, and SSO authentication (Google, Apple, Microsoft)",
    ],
  },
  {
    id: 5,
    title: "Heides Patient Portal",
    client: "Kcube.ai",
    description:
      "Comprehensive healthcare platform for patient management, appointments, prescriptions, document handling, and secure messaging between patients and providers.",
    image: "",
    technologies: [
      "React",
      "React Native",
      "Expo",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Chakra UI",
      "TanStack Router",
      "Sentry",
    ],
    featured: true,
    highlights: [
      "Built React web frontend with TanStack Router and Chakra UI for patient dashboard and appointment management",
      "Developed React Native mobile app with Expo for iOS and Android with push notifications",
      "Built FastAPI backend with PostgreSQL, pgvector, NikoHealth integration, and Sentry monitoring",
    ],
  },
  {
    id: 6,
    title: "Image Upscaler",
    client: "Kcube.ai",
    description:
      "AI-powered image upscaling web application with user authentication, two-factor security, and a modern UI built with shadcn components.",
    image: "",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "shadcn/ui",
      "Tailwind CSS",
      "SendGrid",
    ],
    featured: false,
    highlights: [
      "Built Next.js 15 frontend with React 19, shadcn/ui, and Tailwind CSS",
      "Developed FastAPI backend with JWT auth, refresh tokens, and Google OAuth",
      "Implemented two-factor authentication (TOTP) and auto-generated TypeScript API client from OpenAPI spec",
    ],
  },
  {
    id: 7,
    title: "KCube AI Boilerplate",
    client: "Kcube.ai",
    description:
      "Production-ready full-stack boilerplate for AI-powered SaaS applications with OpenAI chat integration, Stripe subscriptions, admin dashboard, and multi-provider OAuth.",
    image: "",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "OpenAI",
      "Stripe",
      "Tailwind CSS",
      "Docker",
    ],
    featured: false,
    highlights: [
      "Built React 19 frontend with TailwindCSS v4, dynamic theming, and role-based access control",
      "Integrated OpenAI API with token tracking per user and admin analytics dashboard",
      "Developed Stripe subscription system with trials, upgrades, downgrades, and webhook handling",
    ],
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
    title: "Employee of the Quarter (2x)",
    organization: "Kcube AI",
    description:
      "Recognized twice for delivering high-impact projects and technical leadership across cross-functional teams",
  },
];

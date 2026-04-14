// Portfolio Data - Easy to update!

export const personalInfo = {
  name: "Ejaz Ashraf",
  title: "Software Engineer",
  subtitle: "Frontend Developer | Full-Stack Engineer",
  email: "ejazashraf933@gmail.com",
  phone: "+923418973933",
  location: "Lahore, Pakistan",
  bio: "Software Engineer with 4+ years of experience building enterprise web and mobile applications at Kcube.ai. Shipped workforce management portals, an AI-powered memory platform, and a legal case management SaaS — serving thousands of users across Australia and beyond.",
  resumeUrl: "/ejaz-ashraf.pdf",
  social: {
    github: "https://github.com/Ejazashraftriplek",
    linkedin: "https://www.linkedin.com/in/ejazashraf/",
  },
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Products Shipped", value: "4" },
    { label: "Happy Clients", value: "10+" },
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
      "Built and shipped 4 production applications (ALA Web Portal, ALA Mobile App, CoreMemories AI, APR System) across web and mobile platforms using Angular, React, and React Native",
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
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Software Engineering (BSSE)",
    institution: "University of Azad Jammu & Kashmir MZD",
    duration: "2015 - 2019",
    location: "Muzaffarabad, Azad Kashmir",
    gpa: "3.1 / 4.0",
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

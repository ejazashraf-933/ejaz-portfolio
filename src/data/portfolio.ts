// Portfolio Data - Easy to update!
// You can later move this to Sanity CMS for even easier updates

export const personalInfo = {
  name: "Ejaz Ashraf",
  title: "Frontend Developer | Full-Stack Engineer",
  email: "ejazashraf933@gmail.com",
  phone: "+923418973933",
  location: "Lahore, Pakistan",
  bio: "Results-driven Software Engineer with 4+ years of experience specializing in frontend and full-stack development. Skilled in building scalable, high-performance web applications using React.js, Angular, and TypeScript, along with backend API development using FastAPI. Passionate about writing clean, maintainable code and building user-focused digital products.",
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.jpg",
  social: {
    github: "https://github.com/EjazAshraf",
    linkedin: "https://www.linkedin.com/in/ejazashraf/",
  },
};

export const skills = [
  // Frontend
  { name: "React.js", category: "Frontend", level: 95 },
  { name: "Angular", category: "Frontend", level: 95 },
  { name: "React Native", category: "Frontend", level: 90 },
  { name: "TypeScript", category: "Frontend", level: 90 },
  { name: "JavaScript (ES6+)", category: "Frontend", level: 95 },
  { name: "HTML/CSS", category: "Frontend", level: 95 },
  { name: "Flutter", category: "Frontend", level: 80 },

  // Backend
  { name: "FastAPI", category: "Backend", level: 85 },
  { name: "Python", category: "Backend", level: 85 },
  { name: "Node.js", category: "Backend", level: 80 },
  { name: "REST APIs", category: "Backend", level: 95 },

  // Tools & Cloud
  { name: "Git/GitHub", category: "Tools", level: 95 },
  { name: "Azure", category: "Tools", level: 85 },
  { name: "Azure B2C", category: "Tools", level: 85 },
  { name: "Docker", category: "Tools", level: 75 },

  // State Management
  { name: "RxJS", category: "State Management", level: 90 },
  { name: "TanStack Query", category: "State Management", level: 85 },
  { name: "Redux", category: "State Management", level: 85 },
];

export const experiences = [
  {
    id: 1,
    company: "Kcube.ai",
    position: "Software Engineer",
    duration: "2022 - Present",
    location: "Lahore, Pakistan",
    description: [
      "Developed and maintained scalable web applications using React.js and Angular, serving thousands of active users",
      "Built responsive and user-friendly interfaces with a focus on performance and usability",
      "Integrated RESTful APIs and implemented secure authentication systems (OAuth, Azure B2C, token-based auth)",
      "Designed and developed backend APIs using FastAPI for efficient data handling and system performance",
      "Collaborated with cross-functional teams including backend, QA, and product teams in an Agile environment",
      "Optimized application performance, reducing load times and improving overall user experience",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "ALA Portals - Agri-Labour Australia",
    description: "A comprehensive cross-platform portal system for managing candidate lifecycle, job processing, payroll, and compliance workflows. Mobile app live on Play Store & App Store, web platform used by thousands of users.",
    image: "/projects/ala-portal/cover.png",
    technologies: ["Angular", "React Native", "Expo", "TypeScript", "Azure B2C", "TanStack Query", "DocuSign API"],
    liveUrl: "https://staff.agrilabour.com.au",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ejaz.ashraf.agrilabouraustralia",
    featured: true,
    highlights: [
      "Built cross-platform mobile app using React Native and Expo for iOS and Android",
      "Developed scalable enterprise web application using Angular and TypeScript",
      "Implemented payroll system with payment history and bank account management",
      "Integrated digital signature workflows using DocuSign API",
      "Built document management system using Azure Blob Storage",
    ],
  },
  {
    id: 2,
    title: "CoreMemories AI",
    description: "AI-Powered Personal Memory Management application. A cross-platform mobile app using Flutter for AI-based personal memory management with voice recording, personality quizzes, and scheduling features.",
    image: "/projects/core-memories/cover.png",
    technologies: ["Flutter", "Dart", "React", "TypeScript", "REST APIs", "PostHog", "Facebook Auth", "Apple Sign-In"],
    liveUrl: "https://core-memories-webapp-frontend-staging.azurewebsites.net/",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kcube.corememories.core_memories",
    featured: true,
    highlights: [
      "Developed cross-platform mobile app using Flutter",
      "Implemented secure authentication with Facebook and Apple Sign-In",
      "Designed onboarding flow with personality quizzes and voice recording",
      "Integrated PostHog analytics for user behavior tracking",
    ],
  },
  {
    id: 3,
    title: "APR System",
    description: "An enterprise system built with modern web technologies for streamlined business operations and workflow automation.",
    image: "/projects/apr-system/cover.png",
    technologies: ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL"],
    featured: true,
    highlights: [
      "Built responsive web application with React and TypeScript",
      "Developed backend APIs using FastAPI",
      "Implemented secure authentication and authorization",
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
    gpa: "3.1",
  },
];

export const awards = [
  {
    id: 1,
    title: "Employee of the Quarter (2x)",
    organization: "Kcube AI",
    description: "Recognized for outstanding performance and technical contributions",
  },
];

export const certifications = [
  // Add your certifications here
];

import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600"],
});

const description =
  "Full-stack and mobile developer with 4+ years shipping production web apps, App Store and Google Play apps, and AI features with React, React Native, Angular, NestJS and FastAPI.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ejaz-portfolio-eight.vercel.app"),
  title: "Ejaz Ashraf | Full-Stack & Mobile Developer",
  description,
  keywords: [
    "Full-Stack Developer",
    "Mobile App Developer",
    "React",
    "React Native",
    "Angular",
    "FastAPI",
    "NestJS",
    "AI integration",
    "RAG",
  ],
  authors: [{ name: "Ejaz Ashraf" }],
  openGraph: {
    title: "Ejaz Ashraf | Full-Stack & Mobile Developer",
    description,
    type: "website",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <Background />
        {children}
      </body>
    </html>
  );
}

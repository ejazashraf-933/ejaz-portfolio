import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
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
    images: [{ url: "/projects/ala-portal.webp", width: 2400, height: 1800 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      {/* Browser extensions (e.g. Kapture) add classes to <body> before React loads */}
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Background />
        {children}
      </body>
    </html>
  );
}

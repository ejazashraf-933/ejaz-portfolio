import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ejaz Ashraf | Software Engineer",
  description: "Software Engineer with 4+ years of experience building enterprise web and mobile applications. Specializing in React, Angular, TypeScript, and FastAPI.",
  keywords: ["Software Engineer", "React", "Angular", "TypeScript", "FastAPI", "Frontend Developer", "Full-Stack Developer"],
  authors: [{ name: "Ejaz Ashraf" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <Background />
        {children}
      </body>
    </html>
  );
}

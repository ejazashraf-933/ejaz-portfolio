import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ejaz Ashraf | Software Engineer",
  description: "Senior Software Engineer with 5+ years of experience in React, React Native, Angular, and FastAPI. Building modern web and mobile applications.",
  keywords: ["Software Engineer", "React", "React Native", "Angular", "FastAPI", "Web Developer", "Mobile Developer"],
  authors: [{ name: "Ejaz Ashraf" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

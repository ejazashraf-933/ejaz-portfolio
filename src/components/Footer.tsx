"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-[#0a0b10]/70 backdrop-blur-md border-t border-[#232838] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row - Logo, Nav, Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-white"
          >
            {personalInfo.name.split(" ")[0]}
            <span className="text-blue-500">.</span>
          </motion.a>

          {/* Quick Nav */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-500 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <motion.a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-lg border border-[#232838] flex items-center justify-center text-gray-500 hover:text-white hover:border-gray-600 transition-all duration-300"
            >
              <FaGithub size={18} />
            </motion.a>
            <motion.a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-lg border border-[#232838] flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs flex items-center gap-1">
            Built with <FaHeart className="text-red-500/50 text-[10px]" /> using Next.js & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c0e15] border-t border-[#232838] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-xl font-bold text-white">
            {personalInfo.name.split(" ")[0]}
            <span className="text-blue-500">.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-[#232838] flex items-center justify-center text-gray-500 hover:text-white hover:border-gray-600 transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-[#232838] flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

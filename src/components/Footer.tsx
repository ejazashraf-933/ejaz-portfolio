"use client";

import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            {personalInfo.name.split(" ")[0]}
            <span className="text-blue-500">.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} Made with <FaHeart className="text-red-500" /> by{" "}
            {personalInfo.name}
          </div>
        </div>
      </div>
    </footer>
  );
}

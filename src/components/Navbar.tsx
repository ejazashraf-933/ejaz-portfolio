"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = navLinks.map((l) => l.href.slice(1));
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) current = id;
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060a17]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-lg font-extrabold tracking-tight text-white">
            {personalInfo.name.split(" ")[0]}
            <span className="gradient-text"> {personalInfo.name.split(" ")[1]}</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active ? "text-white" : "text-muted hover:text-white"
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-blue-400 to-cyan-300"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-[0_0_28px_rgba(34,211,238,0.35)] transition-shadow"
            >
              Work with me
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden p-2 -mr-2 text-muted hover:text-white transition-colors"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
            >
              <div className="bg-surface border border-border rounded-2xl mt-2 p-2 mb-4 shadow-xl shadow-black/30">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-xl text-muted hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block mt-2 px-4 py-3 text-center font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500"
                >
                  Work with me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/80 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-accent/70">
              <Image src="/new-profile.png" alt="" fill sizes="36px" className="object-cover" />
            </span>
            <span className="text-[1.05rem] font-bold tracking-tight text-white">{personalInfo.name}</span>
            <span className="hidden rounded-full border border-accent/40 px-2 py-0.5 text-[0.7rem] font-semibold text-accent sm:inline">
              Full-stack
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
            >
              Work with me
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="-mr-2 p-2 text-muted transition-colors hover:text-white md:hidden"
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
              className="overflow-hidden md:hidden"
            >
              <div className="mb-4 mt-2 rounded-2xl border border-white/10 bg-ink-2 p-2 shadow-xl shadow-black/40">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-4 py-3 text-muted transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 block rounded-xl bg-accent px-4 py-3 text-center font-semibold text-white"
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

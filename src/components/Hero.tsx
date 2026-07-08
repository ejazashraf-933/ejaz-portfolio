"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { personalInfo } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      {/* Hero glow (base atmosphere comes from the global <Background />) */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute right-[12%] top-1/3 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-blue-600/15 blur-[130px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-400">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-5"
            >
              <span className="text-white">
                {personalInfo.name.split(" ")[0]}
              </span>{" "}
              <span className="gradient-text">
                {personalInfo.name.split(" ")[1]}
              </span>
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 font-medium mb-5"
            >
              {personalInfo.subtitle}
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-gray-500 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Building scalable web &amp; mobile apps with React, Angular, React
              Native, NestJS &amp; FastAPI — serving thousands of users worldwide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
              >
                <HiMail size={20} />
                Get in Touch
              </motion.a>
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#2a3040] text-gray-300 rounded-xl font-medium hover:border-blue-500/50 hover:text-white transition-all duration-300 hover:bg-white/[0.03]"
              >
                <FaDownload size={16} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {[
                {
                  href: personalInfo.social.github,
                  icon: FaGithub,
                  hoverColor: "hover:text-white hover:border-gray-600",
                },
                {
                  href: personalInfo.social.linkedin,
                  icon: FaLinkedin,
                  hoverColor: "hover:text-blue-400 hover:border-blue-500/50",
                },
              ].map(({ href, icon: Icon, hoverColor }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-11 h-11 rounded-xl border border-[#232838] bg-[#151921]/60 backdrop-blur flex items-center justify-center text-gray-400 ${hoverColor} transition-all duration-300`}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-[340px]">
              {/* Gradient ring glow */}
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 opacity-25 blur-2xl" />

              {/* Photo */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10">
                <Image
                  src="/profile.jpeg"
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 340px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent" />
              </div>

              {/* Floating award badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden lg:flex absolute -bottom-5 -right-4 items-center gap-3 glass border border-white/10 rounded-2xl px-4 py-3 shadow-xl shadow-black/30"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 font-bold text-sm">
                  2x
                </div>
                <div className="leading-tight">
                  <p className="text-white text-sm font-semibold">
                    Employee of the Quarter
                  </p>
                  <p className="text-gray-400 text-xs">Kcube · Triple K</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/[0.06] pt-10"
        >
          {personalInfo.stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaBriefcase } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0f1117] relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Who I Am
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
              {personalInfo.bio}
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              I love turning complex problems into simple, elegant solutions. My
              focus is on writing clean, maintainable code and delivering
              products that make a real impact.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Location", value: personalInfo.location },
                { label: "Email", value: personalInfo.email },
                { label: "Experience", value: "4+ Years" },
                { label: "Awards", value: "2x Employee of Quarter" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <p className="text-gray-600 text-sm mb-1 group-hover:text-blue-400 transition-colors duration-300">
                    {item.label}
                  </p>
                  <p className="font-medium text-gray-300 text-sm break-words">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-cyan-500/10 rounded-3xl blur-2xl opacity-60" />

            <div className="relative aspect-[4/5] max-w-sm mx-auto rounded-2xl overflow-hidden border border-[#232838]">
              <Image
                src="/profile.jpeg"
                alt={personalInfo.name}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117] via-transparent to-transparent" />

              {/* Floating info card */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 bg-[#0f1117]/70 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0">
                  <FaBriefcase className="text-blue-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-semibold truncate">
                    {personalInfo.title}
                  </p>
                  <p className="text-gray-400 text-xs truncate">
                    Kcube.ai · {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

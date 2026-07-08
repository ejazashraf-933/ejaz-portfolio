"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const facts = [
  { label: "Location", value: personalInfo.location },
  { label: "Email", value: personalInfo.email },
  { label: "Experience", value: "4+ Years" },
  { label: "Awards", value: "2x Employee of the Quarter" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Who I Am
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto" />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {personalInfo.bio}
          </p>
          <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto">
            I love turning complex problems into simple, elegant solutions. My
            focus is on writing clean, maintainable code and delivering products
            that make a real impact.
          </p>
        </motion.div>

        {/* Quick facts */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {facts.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass border border-white/10 rounded-xl p-4 text-center"
            >
              <p className="text-gray-600 text-xs uppercase tracking-wider mb-1">
                {item.label}
              </p>
              <p className="text-gray-200 text-sm font-medium break-words">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

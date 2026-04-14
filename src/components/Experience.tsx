"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0f1117] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-3">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto" />
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Card */}
              <div className="bg-[#151921] border border-[#232838] rounded-xl p-8 hover:border-blue-500/20 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.position}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="text-blue-400 font-medium">
                        {exp.company}
                      </span>
                      <span className="text-gray-700">|</span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <FaMapMarkerAlt className="text-xs" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm text-blue-400">
                    <FaBriefcase className="text-xs" />
                    {exp.duration}
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span className="text-gray-400 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGooglePlay,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-24 relative">
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
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">
            Real-world applications serving thousands of users
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 card-glow"
                >
                  <div
                    className={`flex flex-col ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Project Image */}
                    <div className="w-full lg:w-5/12 relative">
                      <div className="relative h-64 lg:h-full min-h-[280px] bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-top"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        )}
                        {/* Project number watermark */}
                        {!project.image && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-8xl font-bold text-white/[0.03]">
                              0{project.id}
                            </span>
                          </div>
                        )}
                        {/* Overlay with links */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                          <div className="flex gap-3">
                            {project.liveUrl && (
                              <motion.a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm rounded-lg hover:bg-white/20 transition-all"
                              >
                                <FaExternalLinkAlt size={12} />
                                Live
                              </motion.a>
                            )}
                            {project.playStoreUrl && (
                              <motion.a
                                href={project.playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 text-sm rounded-lg hover:bg-emerald-500/30 transition-all"
                              >
                                <FaGooglePlay size={12} />
                                Play Store
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="w-full lg:w-7/12 p-8">
                      {/* Client badge */}
                      {project.client && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          className="inline-block text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-4"
                        >
                          {project.client}
                        </motion.span>
                      )}

                      <h3 className="text-xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      {project.highlights && (
                        <ul className="space-y-2.5 mb-6">
                          {project.highlights.map((highlight, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + i * 0.1 }}
                              className="flex items-start gap-2.5 text-sm text-gray-400"
                            >
                              <FaCheckCircle className="text-emerald-400 mt-0.5 shrink-0 text-xs" />
                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 7).map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.04 }}
                            className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-md hover:border-blue-500/30 hover:text-blue-400 transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 7 && (
                          <span className="text-xs px-2.5 py-1 text-gray-600">
                            +{project.technologies.length - 7} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        {projects.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3 border border-[#2a3040] text-gray-300 rounded-lg font-medium hover:border-blue-500/50 hover:text-white transition-all duration-300 hover:bg-white/[0.02]"
            >
              {showAll ? "Show Less" : `View All ${projects.length} Projects`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

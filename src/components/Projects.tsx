"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGooglePlay,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#131620] relative">
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
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#151921] border border-[#232838] rounded-xl overflow-hidden hover:border-blue-500/20 transition-all duration-300"
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Project Image */}
                <div className="w-full lg:w-5/12 relative">
                  <div className="relative h-64 lg:h-full min-h-[280px] bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    {/* Overlay with links */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                      <div className="flex gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm rounded-lg hover:bg-white/20 transition-all"
                          >
                            <FaExternalLinkAlt size={12} />
                            Live
                          </a>
                        )}
                        {project.playStoreUrl && (
                          <a
                            href={project.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 text-sm rounded-lg hover:bg-emerald-500/30 transition-all"
                          >
                            <FaGooglePlay size={12} />
                            Play Store
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="w-full lg:w-7/12 p-8">
                  {/* Client badge */}
                  {project.client && (
                    <span className="inline-block text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-4">
                      {project.client}
                    </span>
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
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-gray-400"
                        >
                          <FaCheckCircle className="text-emerald-400 mt-0.5 shrink-0 text-xs" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 7).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-md"
                      >
                        {tech}
                      </span>
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
          ))}
        </div>
      </div>
    </section>
  );
}

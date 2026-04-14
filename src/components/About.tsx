"use client";

import { motion } from "framer-motion";
import { FaCode, FaMobile, FaServer, FaDatabase } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

const services = [
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "Scalable web applications with React, Angular, Next.js, and TypeScript",
    gradient: "from-blue-500/10 to-cyan-500/10",
    border: "hover:border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    icon: FaMobile,
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps with React Native and Expo for iOS & Android",
    gradient: "from-purple-500/10 to-pink-500/10",
    border: "hover:border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description:
      "Robust APIs and services with FastAPI, Python, and Node.js",
    gradient: "from-emerald-500/10 to-teal-500/10",
    border: "hover:border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    icon: FaDatabase,
    title: "Database & Cloud",
    description:
      "Database design with PostgreSQL, cloud infrastructure on Azure and AWS",
    gradient: "from-amber-500/10 to-orange-500/10",
    border: "hover:border-amber-500/30",
    iconColor: "text-amber-400",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0f1117] relative">
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

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
              {personalInfo.bio}
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              I love turning complex problems into simple, elegant solutions.
              My focus is on writing clean, maintainable code and delivering
              products that make a real impact.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Location", value: personalInfo.location },
                { label: "Email", value: personalInfo.email },
                { label: "Experience", value: "4+ Years" },
                { label: "Awards", value: "2x Employee of Quarter" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-gray-600 text-sm mb-1">{item.label}</p>
                  <p className="font-medium text-gray-300">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${service.gradient} border border-[#232838] ${service.border} p-6 rounded-xl transition-all duration-300`}
              >
                <service.icon
                  className={`${service.iconColor} text-2xl mb-4`}
                />
                <h4 className="font-semibold text-white mb-2 text-sm">
                  {service.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

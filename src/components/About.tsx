"use client";

import { motion } from "framer-motion";
import { FaCode, FaMobile, FaServer, FaDatabase } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

const services = [
  {
    icon: FaCode,
    title: "Web Development",
    description: "Building responsive and performant web applications with React, Angular, and Next.js",
  },
  {
    icon: FaMobile,
    title: "Mobile Development",
    description: "Creating cross-platform mobile apps with React Native for iOS and Android",
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description: "Developing robust APIs and services with FastAPI, Node.js, and Python",
  },
  {
    icon: FaDatabase,
    title: "Database Design",
    description: "Designing and optimizing databases with MongoDB, PostgreSQL, and MySQL",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              I'm {personalInfo.name}, a {personalInfo.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I love turning complex problems into simple, beautiful, and intuitive solutions.
              When I'm not coding, you'll find me exploring new technologies and contributing to open-source projects.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Location</p>
                <p className="font-semibold text-gray-900 dark:text-white">{personalInfo.location}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Email</p>
                <p className="font-semibold text-gray-900 dark:text-white">{personalInfo.email}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Experience</p>
                <p className="font-semibold text-gray-900 dark:text-white">5+ Years</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Availability</p>
                <p className="font-semibold text-green-600">Open to Work</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
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
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <service.icon className="text-blue-600 text-3xl mb-4" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
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

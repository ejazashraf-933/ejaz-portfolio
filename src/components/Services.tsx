"use client";

import { motion } from "framer-motion";
import { FaLayerGroup, FaMobileAlt, FaCode, FaServer } from "react-icons/fa";

const services = [
  {
    icon: FaLayerGroup,
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications with React, Angular, Next.js, NestJS, and FastAPI — from the UI down to the database.",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    border: "hover:border-blue-500/30",
    gradient: "from-blue-500/[0.07] to-cyan-500/[0.07]",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    description:
      "Cross-platform iOS & Android apps with React Native and Expo — shipped to the App Store and Google Play.",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    border: "hover:border-purple-500/30",
    gradient: "from-purple-500/[0.07] to-pink-500/[0.07]",
  },
  {
    icon: FaCode,
    title: "Frontend & UI Engineering",
    description:
      "Responsive, accessible interfaces with TypeScript, Tailwind CSS, RxJS, and TanStack Query — with a focus on performance.",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    border: "hover:border-cyan-500/30",
    gradient: "from-cyan-500/[0.07] to-teal-500/[0.07]",
  },
  {
    icon: FaServer,
    title: "Backend & APIs",
    description:
      "Secure REST and real-time WebSocket APIs on PostgreSQL with role-based access control, JWT/OAuth 2.0, and 2FA.",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    border: "hover:border-emerald-500/30",
    gradient: "from-emerald-500/[0.07] to-teal-500/[0.07]",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#131620] relative">
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
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I Do
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">
            I build and ship complete products — across web, mobile, and the
            services that power them.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`bg-gradient-to-br ${service.gradient} border border-[#232838] ${service.border} p-7 rounded-2xl transition-all duration-300 card-glow cursor-default`}
            >
              <div
                className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center mb-5`}
              >
                <service.icon className={`${service.iconColor} text-xl`} />
              </div>
              <h3 className="font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

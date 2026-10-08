"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaRobot, FaCheck } from "react-icons/fa";
import { services, process } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const icons = { web: FaLaptopCode, mobile: FaMobileAlt, ai: FaRobot } as const;
const tints = {
  web: "from-blue-500/25 to-cyan-400/10 text-cyan-300",
  mobile: "from-violet-500/25 to-blue-400/10 text-violet-300",
  ai: "from-cyan-400/25 to-violet-500/10 text-sky-300",
} as const;

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I build"
          title="Three things I do well, from idea to launch"
          description="Whether you run a small business or a product team, you deal with one person who plans it, builds it and puts it live."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.key as keyof typeof icons];
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card flex flex-col p-7"
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${tints[service.key as keyof typeof tints]}`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">{service.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{service.summary}</p>
                <ul className="mt-6 space-y-3 border-t border-white/[0.07] pt-6">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-slate-300">
                      <FaCheck className="mt-1 shrink-0 text-[0.65rem] text-cyan-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* How a project runs */}
        <ol className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <motion.li
              key={p.step}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#080d1c] p-6"
            >
              <span className="font-mono text-xs text-cyan-300">Step {i + 1}</span>
              <p className="mt-2 text-lg font-bold text-white">{p.step}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.detail}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

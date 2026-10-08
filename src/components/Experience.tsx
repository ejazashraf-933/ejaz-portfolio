"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { experiences, education } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Career" title="Where I have worked" />

        <ol className="relative space-y-8 border-l border-white/10 pl-6 sm:pl-10">
          {experiences.map((exp, index) => (
            <motion.li
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <span className="absolute -left-[1.85rem] top-8 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20 sm:-left-[2.85rem]" />
              <div className="card p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white">{exp.position}</h3>
                    <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                      <span className="font-semibold text-cyan-300">{exp.company}</span>
                      <span className="flex items-center gap-1.5 text-muted">
                        <FaMapMarkerAlt className="text-xs" />
                        {exp.location}
                      </span>
                    </p>
                  </div>
                  <span className="shrink-0 self-start rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 font-mono text-xs text-slate-200">
                    {exp.duration}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {exp.description.map((line) => (
                    <li key={line} className="flex gap-3 text-[0.95rem] leading-relaxed text-slate-300">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>

        {education.map((edu) => (
          <p key={edu.id} className="mt-8 pl-6 text-sm text-muted sm:pl-10">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-300">Education</span>
            <span className="mx-3 text-white/20">/</span>
            <span className="text-slate-200">{edu.degree}</span>, {edu.institution}
          </p>
        ))}
      </div>
    </section>
  );
}

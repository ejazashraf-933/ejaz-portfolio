"use client";

import { motion } from "framer-motion";
import { experiences, education } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Experience" title="Where I've worked." />

        <ol className="border-t border-white/10">
          {experiences.map((exp, index) => (
            <motion.li
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="grid gap-6 border-b border-white/10 py-10 md:grid-cols-[0.8fr_1.6fr] md:gap-12"
            >
              <div>
                <h3 className="text-3xl font-extrabold tracking-[-0.04em] text-white">{exp.company}</h3>
                <p className="mt-2 font-semibold text-white/90">{exp.position}</p>
                <p className="mt-1 text-sm text-muted">
                  {exp.duration} · {exp.location}
                </p>
              </div>
              <ul className="space-y-3.5">
                {exp.description.map((line) => (
                  <li key={line} className="flex gap-3.5 text-[1.02rem] leading-relaxed text-[#c5c4ca]">
                    <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {line}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
          {education.map((edu) => (
            <li key={edu.id} className="grid gap-2 py-8 md:grid-cols-[0.8fr_1.6fr] md:gap-12">
              <p className="eyebrow pt-1">Education</p>
              <p className="text-[1.02rem] text-[#c5c4ca]">
                <span className="font-semibold text-white">{edu.degree}</span>, {edu.institution}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

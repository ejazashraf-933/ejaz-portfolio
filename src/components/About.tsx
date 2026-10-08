"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa";
import { personalInfo, awards } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="About" title="Who you would be working with" />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="-mt-4 space-y-5 text-[1.05rem] leading-relaxed"
            >
              <p className="text-slate-200">{personalInfo.bio}</p>
              <p className="text-muted">{personalInfo.bioSecondary}</p>
            </motion.div>
          </div>

          {/* Awards */}
          <div id="awards">
            <p className="eyebrow mb-5 flex items-center gap-2">
              <FaTrophy className="text-amber-300" /> Recognition
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {awards.map((award, index) => (
                <motion.figure
                  key={award.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="card overflow-hidden"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={award.image}
                      alt={`${award.title}, ${award.organization}, ${award.period}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 font-mono text-[0.7rem] text-amber-200 backdrop-blur">
                      {award.period}
                    </span>
                  </div>
                  <figcaption className="p-4">
                    <p className="font-semibold text-white">{award.title}</p>
                    <p className="mt-1 text-sm text-muted">{award.organization}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

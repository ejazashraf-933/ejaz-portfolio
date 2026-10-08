"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Stats() {
  return (
    <section aria-label="By the numbers" className="relative py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02]">
          {personalInfo.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-7 sm:p-9 border-white/[0.08] [&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0 [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0"
            >
              <div className="text-4xl sm:text-5xl font-extrabold tracking-tight gradient-text tabular-nums">
                {stat.value}
              </div>
              <div className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] leading-relaxed text-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

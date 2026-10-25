"use client";

import { motion } from "framer-motion";
import { FiMonitor, FiSmartphone, FiCpu, FiCheck, FiMessageCircle, FiClipboard, FiCode, FiSend } from "react-icons/fi";
import { services, process } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const serviceIcons = { web: FiMonitor, mobile: FiSmartphone, ai: FiCpu } as const;
const stepIcons = [FiMessageCircle, FiClipboard, FiCode, FiSend];

export default function Services() {
  return (
    <section id="services" className="paper relative mx-2 rounded-[32px] py-28 sm:mx-4 sm:rounded-[44px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          paper
          eyebrow="What I build"
          title="From idea to live product."
          description="Whether you run a small business or a product team, you deal with one person who plans it, builds it and puts it live."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.key as keyof typeof serviceIcons];
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group flex flex-col rounded-[24px] border border-black/[0.06] bg-paper-2 p-8 shadow-[0_1px_0_rgba(0,0,0,0.04),0_20px_40px_-28px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-paper-ink text-white transition-colors group-hover:bg-accent">
                  <Icon size={21} />
                </span>
                <h3 className="mt-7 text-2xl font-extrabold tracking-[-0.03em]">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-paper-muted">{service.summary}</p>
                <ul className="mt-7 space-y-3 border-t border-black/[0.08] pt-6">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[0.95rem]">
                      <FiCheck className="mt-1 shrink-0 text-accent-deep" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* How a project runs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mt-24 overflow-hidden rounded-[32px] bg-paper-ink p-7 text-white sm:p-12 lg:p-14"
        >
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-40 h-96 w-[640px] rounded-full bg-accent/30 blur-[110px]" />
          <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-[520px] rounded-full bg-violet-500/15 blur-[110px]" />

          <div className="relative grid items-end gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow">How I work</p>
              <h3 className="display mt-4 text-[2.4rem] sm:text-[3.4rem]">Simple, written, on time.</h3>
            </div>
            <p className="text-lg leading-relaxed text-[#b9b8be] lg:pb-2">
              Every project follows the same four steps, so you always know what happens next and what you get at the end of each one.
            </p>
          </div>

          <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
            {/* Connecting line: vertical on phones, horizontal from md up */}
            <span aria-hidden className="absolute bottom-6 left-[21px] top-6 w-px bg-gradient-to-b from-accent via-white/20 to-white/5 md:hidden" />
            <span aria-hidden className="absolute left-6 right-6 top-[22px] hidden h-px bg-gradient-to-r from-accent via-white/25 to-white/5 md:block" />

            {process.map((p, i) => {
              const Icon = stepIcons[i];
              return (
                <motion.li
                  key={p.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.45 }}
                  className="group relative pl-16 md:pl-0"
                >
                  <span className="absolute left-0 top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-paper-ink font-mono text-sm font-semibold text-white transition-colors duration-300 group-hover:border-accent group-hover:bg-accent md:static">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-2.5 md:mt-7">
                    <Icon className="text-accent" size={18} />
                    <p className="text-xl font-extrabold tracking-[-0.03em]">{p.step}</p>
                  </div>
                  <p className="mt-3 leading-relaxed text-[#b9b8be]">{p.detail}</p>
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-white/90">
                    <FiCheck className="text-accent" /> {p.deliverable}
                  </span>
                </motion.li>
              );
            })}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}

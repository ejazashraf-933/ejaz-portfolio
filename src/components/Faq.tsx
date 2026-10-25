"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { faqs } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions clients ask first."
            description="If yours is not here, send it through the form below and I will reply directly."
          />

          <div className="border-t border-white/10">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-white/10">
                  <h3>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-bold tracking-[-0.02em] text-white transition-colors hover:text-accent"
                    >
                      {item.q}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen ? "rotate-45 border-accent bg-accent text-white" : "border-white/20 text-white"
                        }`}
                      >
                        <FaPlus size={11} />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-button-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-7 text-[1.02rem] leading-relaxed text-muted">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  /** Section sits on the cream background */
  paper?: boolean;
  className?: string;
}

export default function SectionHeading({ eyebrow, title, description, paper, className = "mb-14" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className={`max-w-3xl ${className}`}
    >
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className={`display text-[2.6rem] sm:text-6xl ${paper ? "text-paper-ink" : "text-white"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${paper ? "text-paper-muted" : "text-muted"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 max-w-2xl"
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-[2.6rem] md:leading-[1.1] font-extrabold tracking-tight text-white text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
          {description}
        </p>
      )}
    </motion.div>
  );
}

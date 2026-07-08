"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa";
import { awards } from "@/data/portfolio";

export default function Awards() {
  return (
    <section id="awards" className="py-24 relative">
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
            Recognition
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Awards
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">
            Recognized as Employee of the Quarter at two companies
          </p>
        </motion.div>

        {/* Award Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass border border-white/10 rounded-2xl overflow-hidden card-glow"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={award.image}
                  alt={`${award.title} — ${award.organization}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-[#090b10]/70 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-xs text-amber-400">
                  <FaTrophy className="text-xs" />
                  {award.period}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold mb-1">{award.title}</h3>
                <p className="text-blue-400 text-sm mb-3">
                  {award.organization}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

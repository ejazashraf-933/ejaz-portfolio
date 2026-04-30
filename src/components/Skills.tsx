"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500 to-blue-600",
  Mobile: "from-purple-500 to-purple-600",
  Backend: "from-emerald-500 to-emerald-600",
  Styling: "from-pink-500 to-pink-600",
  "State & Data": "from-amber-500 to-amber-600",
  "Tools & Cloud": "from-cyan-500 to-cyan-600",
};

const categoryBg: Record<string, string> = {
  Frontend: "bg-blue-500/5 border-blue-500/10 hover:border-blue-500/30",
  Mobile: "bg-purple-500/5 border-purple-500/10 hover:border-purple-500/30",
  Backend: "bg-emerald-500/5 border-emerald-500/10 hover:border-emerald-500/30",
  Styling: "bg-pink-500/5 border-pink-500/10 hover:border-pink-500/30",
  "State & Data": "bg-amber-500/5 border-amber-500/10 hover:border-amber-500/30",
  "Tools & Cloud": "bg-cyan-500/5 border-cyan-500/10 hover:border-cyan-500/30",
};

const categoryIcons: Record<string, string> = {
  Frontend: "bg-blue-500",
  Mobile: "bg-purple-500",
  Backend: "bg-emerald-500",
  Styling: "bg-pink-500",
  "State & Data": "bg-amber-500",
  "Tools & Cloud": "bg-cyan-500",
};

export default function Skills() {
  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section id="skills" className="py-24 bg-[#131620] relative">
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
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-10">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.05 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-2 h-2 rounded-full ${categoryIcons[category] || "bg-blue-500"}`} />
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  {category}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className={`relative border ${
                        categoryBg[category] || "bg-white/5 border-white/10"
                      } rounded-xl p-4 transition-all duration-300 cursor-default card-glow`}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-medium text-white text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${
                            categoryColors[category] ||
                            "from-blue-500 to-blue-600"
                          } rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#090b10]"
    >
      {/* Soft top aurora */}
      <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(55%_100%_at_50%_0%,rgba(59,130,246,0.10),rgba(9,11,16,0)_70%)]" />
      {/* Faint bottom glow */}
      <div className="absolute inset-x-0 bottom-0 h-[460px] bg-[radial-gradient(45%_100%_at_50%_100%,rgba(6,182,212,0.06),rgba(9,11,16,0)_70%)]" />

      {/* Slowly drifting orbs — subtle */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 left-[8%] h-[380px] w-[380px] rounded-full bg-blue-600/[0.08] blur-[140px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[32%] right-[4%] h-[440px] w-[440px] rounded-full bg-indigo-600/[0.08] blur-[150px]"
      />

      {/* Faded grid */}
      <div
        className="bg-grid absolute inset-0 opacity-[0.035]"
        style={{
          maskImage:
            "radial-gradient(ellipse 55% 55% at 50% 30%, black, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 55% 55% at 50% 30%, black, transparent 78%)",
        }}
      />

      {/* Film-grain noise */}
      <div className="bg-noise absolute inset-0 opacity-[0.10] mix-blend-soft-light" />

      {/* Vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_50%,rgba(0,0,0,0.55))]" />
    </div>
  );
}

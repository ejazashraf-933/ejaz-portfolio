"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface Props {
  href: string;
  label: string;
  /** Text that rolls in on hover */
  hoverLabel: string;
  size?: "md" | "lg";
  /** Pulsing green "available" dot before the label */
  dot?: boolean;
  className?: string;
}

const sizes = {
  md: { text: "text-sm", pad: "py-1.5 pl-4 pr-1.5", line: "h-5 leading-5", badge: "h-7 w-7", icon: 14 },
  lg: { text: "text-base", pad: "py-2 pl-6 pr-2", line: "h-6 leading-6", badge: "h-10 w-10", icon: 17 },
};

// Pill button with a travelling gradient border, a magnetic pull toward the cursor,
// a cursor spotlight and a text roll on hover.
export default function CtaButton({ href, label, hoverLabel, size = "md", dot = false, className = "" }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();
  const spring = { stiffness: 260, damping: 18, mass: 0.4 };
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);
  const s = sizes[size];

  const handleMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
    if (reduceMotion) return;
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.4);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x, y }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`group relative inline-flex overflow-hidden rounded-full bg-white/15 p-[1.5px] shadow-[0_10px_30px_-10px_rgba(79,125,255,0.9)] transition-shadow duration-300 hover:shadow-[0_14px_40px_-8px_rgba(124,92,255,1)] ${className}`}
    >
      <span aria-hidden className="cta-beam" />
      <span className={`relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#0d0f1c] font-semibold text-white ${s.text} ${s.pad}`}>
        <span aria-hidden className="absolute inset-0 bg-gradient-to-r from-accent/30 via-[#6a5cff]/15 to-[#9a5cff]/30" />
        <span
          aria-hidden
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "radial-gradient(90px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.22), transparent 70%)" }}
        />

        {dot && (
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
          </span>
        )}

        <span className={`relative block overflow-hidden ${s.line}`}>
          <span className="block transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:-translate-y-1/2">
            <span className="block">{label}</span>
            <span aria-hidden className="block">{hoverLabel}</span>
          </span>
        </span>

        <span
          className={`relative flex items-center justify-center rounded-full bg-gradient-to-br from-accent to-[#9a5cff] shadow-[0_0_16px_rgba(124,92,255,0.75)] transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:-rotate-45 ${s.badge}`}
        >
          <FiArrowRight size={s.icon} />
        </span>
      </span>
    </motion.a>
  );
}

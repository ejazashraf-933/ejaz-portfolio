"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiPause, FiPlay } from "react-icons/fi";
import { projects } from "@/data/portfolio";
import { INITIAL_COUNT } from "./Projects";

const SLIDE_MS = 6000;

export default function ProjectShowcase() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const count = projects.length;
  const project = projects[index];
  const paused = hovered || userPaused;

  const go = (i: number) => setIndex((i + count) % count);
  const number = (i: number) => String(i + 1).padStart(2, "0");
  // Cards past the first page are collapsed, so link those to the section instead
  const cardHref = index < INITIAL_COUNT ? `#project-${project.id}` : "#projects";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(index + 1);
        if (e.key === "ArrowLeft") go(index - 1);
      }}
      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0d]"
    >
      {/* Ambient light taken from the current cover */}
      <AnimatePresence initial={false}>
        <motion.div
          key={project.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1 }}
          className="absolute inset-0"
        >
          <Image src={project.image} alt="" fill sizes="480px" className="scale-125 object-cover opacity-70 blur-3xl" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0d]/40 via-[#0a0a0d]/75 to-[#0a0a0d] lg:bg-gradient-to-r lg:from-[#0a0a0d] lg:via-[#0a0a0d]/80 lg:to-[#0a0a0d]/30" />

      <div className="relative grid items-center gap-7 p-4 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10 lg:p-10">
        {/* Cover */}
        <div className="relative aspect-[4/3] lg:order-2">
          <AnimatePresence initial={false}>
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 40, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -40, scale: 0.97 }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(index + 1);
                else if (info.offset.x > 60) go(index - 1);
              }}
              className="absolute inset-0 cursor-grab overflow-hidden rounded-2xl shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/15 active:cursor-grabbing"
            >
              <Image
                src={project.image}
                alt={`${project.title} interface`}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="pointer-events-none object-cover"
                preload={index === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Details */}
        <div className="lg:order-1">
          <div className="flex items-center justify-between">
            <p className="eyebrow">Featured project</p>
            <p className="font-mono text-sm text-muted">
              <span className="text-white">{number(index)}</span> / {String(count).padStart(2, "0")}
            </p>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              aria-live={paused ? "polite" : "off"}
            >
              <p className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-[2.5rem]">
                {project.title}
              </p>
              <p className="mt-2 text-sm text-muted">
                {project.category} · {project.client}
              </p>
              <p className="mt-5 line-clamp-3 leading-relaxed text-[#cfced4]">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[0.8rem] text-white/85">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href={cardHref}
                  className="group/see inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-sm font-bold text-ink shadow-[0_10px_30px_-12px_rgba(255,255,255,0.6)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  See what I built
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white transition-colors duration-300 group-hover/see:bg-accent">
                    <FiArrowRight className="transition-transform duration-300 group-hover/see:translate-x-0.5" />
                  </span>
                </a>
                {(project.liveUrl || project.appStoreUrl || project.playStoreUrl) && (
                  <a
                    href={project.liveUrl ?? project.appStoreUrl ?? project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/live inline-flex items-center gap-1.5 bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1.5px] bg-left-bottom bg-no-repeat pb-0.5 text-sm font-semibold text-white transition-[background-size] duration-300 hover:bg-[length:100%_1.5px]"
                  >
                    {project.liveUrl ? "Live site" : "In the store"}
                    <FiArrowUpRight className="transition-transform duration-300 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress and controls */}
      <div className="relative flex items-center gap-4 border-t border-white/[0.08] px-4 py-4 sm:px-8 lg:px-10">
        <div className="flex flex-1 gap-1.5">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => go(i)}
              aria-label={`Show project ${i + 1}: ${p.title}`}
              aria-current={i === index}
              className="group relative h-6 flex-1"
            >
              <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/15 transition-colors group-hover:bg-white/30">
                {i < index && <span className="absolute inset-0 bg-white/60" />}
                {i === index && (
                  <span
                    key={index}
                    onAnimationEnd={() => go(index + 1)}
                    style={{ animationDuration: `${SLIDE_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
                    className="showcase-progress absolute inset-0 bg-accent"
                  />
                )}
              </span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous project"
            className="group/prev flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10"
          >
            <FiArrowLeft className="transition-transform duration-300 group-hover/prev:-translate-x-0.5" />
          </button>
          <button
            onClick={() => setUserPaused(!userPaused)}
            aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10"
          >
            {userPaused ? <FiPlay size={14} /> : <FiPause size={14} />}
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Next project"
            className="group/next flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-[#9a5cff] text-white shadow-[0_0_20px_rgba(124,92,255,0.55)] transition-all duration-300 hover:shadow-[0_0_28px_rgba(124,92,255,0.9)]"
          >
            <FiArrowRight className="transition-transform duration-300 group-hover/next:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

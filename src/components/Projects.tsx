"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGooglePlay, FaApple, FaExternalLinkAlt, FaChevronDown } from "react-icons/fa";
import { projects, type Project, type BadgeTone } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import ProjectVisual from "./ProjectVisual";

const INITIAL_COUNT = 6;

const badgeTone: Record<BadgeTone, string> = {
  live: "border-emerald-400/50 text-emerald-300",
  store: "border-sky-400/50 text-sky-300",
  ai: "border-violet-400/55 text-violet-300",
  private: "border-amber-300/50 text-amber-200",
  neutral: "border-white/25 text-slate-100",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const [shot, setShot] = useState(0);
  const shots = [project.image, ...(project.gallery ?? [])].filter(Boolean);
  const number = String(index + 1).padStart(2, "0");
  const detailsId = `project-details-${project.id}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      className="card group flex flex-col overflow-hidden"
    >
      {/* Visual */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0a1024]">
        {shots.length > 0 ? (
          <Image
            src={shots[shot]}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <ProjectVisual kind={project.kind} index={index} />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0f1f] via-transparent to-black/30" />

        <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-[#070b1a]/85 px-3 py-1 font-mono text-xs text-white backdrop-blur">
          {number}
        </span>
        <div className="absolute right-4 top-4 flex flex-wrap justify-end gap-1.5">
          {project.badges.map((b) => (
            <span
              key={b.label}
              className={`rounded-full border bg-[#070b1a]/85 px-2.5 py-1 text-[0.7rem] font-semibold backdrop-blur ${badgeTone[b.tone]}`}
            >
              {b.label}
            </span>
          ))}
        </div>

        {shots.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {shots.map((_, i) => (
              <button
                key={i}
                onClick={() => setShot(i)}
                aria-label={`Show screenshot ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === shot ? "w-6 bg-white" : "w-1.5 bg-white/45 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="eyebrow mb-2">
          {project.category} <span className="text-muted">· {project.client}</span>
        </p>
        <h3 className="text-xl font-bold tracking-tight text-white">{project.title}</h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[0.7rem] text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className="px-1.5 py-1 font-mono text-[0.7rem] text-muted">
              +{project.technologies.length - 6}
            </span>
          )}
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              id={detailsId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {project.highlights.map((h) => (
                <li key={h} className="mt-3 flex gap-3 text-sm leading-relaxed text-slate-300 first:mt-5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {h}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/[0.07] pt-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-white hover:border-cyan-400/50 hover:bg-white/5 transition-colors"
            >
              <FaExternalLinkAlt size={10} /> Live site
            </a>
          )}
          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-white hover:border-cyan-400/50 hover:bg-white/5 transition-colors"
            >
              <FaApple size={13} /> App Store
            </a>
          )}
          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-white hover:border-cyan-400/50 hover:bg-white/5 transition-colors"
            >
              <FaGooglePlay size={11} /> Google Play
            </a>
          )}
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls={detailsId}
            className="ml-auto inline-flex items-center gap-2 py-1.5 text-xs font-semibold text-cyan-300 hover:text-white transition-colors"
          >
            {open ? "Hide details" : "What I built"}
            <FaChevronDown size={10} className={`transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Products I have built and shipped"
          description="Client platforms, mobile apps on the stores, and AI systems running in production. Open any card to see my part in it."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {visible.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {projects.length > INITIAL_COUNT && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-white hover:border-cyan-400/50 hover:bg-white/[0.07] transition-colors"
            >
              {showAll ? "Show fewer" : `Show all ${projects.length} projects`}
              <FaChevronDown size={11} className={`transition-transform ${showAll ? "rotate-180" : ""}`} />
            </button>
            <p className="mt-4 text-sm text-muted">
              15+ projects delivered in total. These are the ones I can show in detail.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

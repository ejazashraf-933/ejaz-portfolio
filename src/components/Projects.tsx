"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGooglePlay, FaApple, FaChevronDown } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { projects, type Project, type BadgeTone } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export const INITIAL_COUNT = 7;

const badgeDot: Record<BadgeTone, string> = {
  live: "bg-emerald-400",
  store: "bg-sky-400",
  ai: "bg-violet-400",
  private: "bg-amber-300",
  neutral: "bg-white/60",
};

const linkClass =
  "inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-accent";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <>
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Live site <FiArrowUpRight />
        </a>
      )}
      {project.appStoreUrl && (
        <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <FaApple size={14} /> App Store
        </a>
      )}
      {project.playStoreUrl && (
        <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <FaGooglePlay size={12} /> Google Play
        </a>
      )}
    </>
  );
}

function ProjectCard({ project, index, featured }: { project: Project; index: number; featured?: boolean }) {
  const [open, setOpen] = useState(false);
  const number = String(index + 1).padStart(2, "0");
  const detailsId = `project-details-${project.id}`;

  return (
    <motion.article
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: featured ? 0 : (index % 2) * 0.08 }}
      className={`group overflow-hidden rounded-[22px] border border-white/[0.08] bg-ink-2 transition-colors hover:border-white/20 ${
        featured ? "grid lg:col-span-2 lg:grid-cols-[1.12fr_1fr]" : "flex flex-col"
      }`}
    >
      <div className={`relative aspect-[4/3] overflow-hidden bg-ink-3 ${featured ? "lg:aspect-auto lg:min-h-[460px]" : ""}`}>
        <Image
          src={project.image}
          alt={`${project.title} interface`}
          fill
          sizes={featured ? "(max-width: 1024px) 100vw, 620px" : "(max-width: 1024px) 100vw, 560px"}
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          preload={featured}
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
          {project.badges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[0.7rem] font-semibold text-white backdrop-blur-md"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${badgeDot[b.tone]}`} />
              {b.label}
            </span>
          ))}
        </div>
      </div>

      <div className={`flex flex-1 flex-col ${featured ? "p-7 sm:p-10 lg:justify-center" : "p-6 sm:p-8"}`}>
        <p className="text-sm font-bold text-accent">{number}</p>
        <h3
          className={`mt-2 font-extrabold tracking-[-0.035em] text-white ${
            featured ? "text-3xl sm:text-[2.6rem] sm:leading-[1.05]" : "text-2xl sm:text-[1.7rem]"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm text-muted">
          {project.category} · {project.client}
        </p>
        <p className={`mt-4 leading-relaxed text-[#c5c4ca] ${featured ? "text-[1.05rem]" : "text-[0.97rem]"}`}>
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, featured ? 6 : 4).map((tech) => (
            <span key={tech} className="rounded-full border border-white/15 px-3 py-1 text-[0.8rem] text-white/85">
              {tech}
            </span>
          ))}
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
                <li key={h} className="mt-3 flex gap-3 text-sm leading-relaxed text-[#c5c4ca] first:mt-6">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 pt-1 lg:mt-auto lg:pt-7">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls={detailsId}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-white"
          >
            {open ? "Hide details" : "What I built"}
            <FaChevronDown size={10} className={`transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Web platforms, mobile apps and AI products."
          description="Client platforms, apps on the stores, and AI systems running in production. Open any project to see my part in it."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {visible.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} featured={index === 0} />
          ))}
        </div>

        {projects.length > INITIAL_COUNT && (
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 border-b-2 border-accent pb-1 font-semibold text-white transition-colors hover:text-accent"
            >
              {showAll ? "Show fewer projects" : `Show all ${projects.length} projects`}
              <FaChevronDown size={11} className={`transition-transform ${showAll ? "rotate-180" : ""}`} />
            </button>
            <p className="text-sm text-muted">15+ projects delivered in total. These are the ones I can show in detail.</p>
          </div>
        )}
      </div>
    </section>
  );
}

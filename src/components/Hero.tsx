"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { personalInfo } from "@/data/portfolio";

const rise = (i: number) => ({ animationDelay: `${0.08 * i}s` });

const socials = [
  { href: personalInfo.social.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: personalInfo.social.github, icon: FaGithub, label: "GitHub" },
  { href: personalInfo.social.upwork, icon: SiUpwork, label: "Upwork" },
];

export default function Hero() {
  const marquee = [...personalInfo.heroStack, ...personalInfo.heroStack];

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-14 lg:pt-40">
      {/* 3D floor */}
      <div
        aria-hidden
        className="floor-grid pointer-events-none absolute -left-[10%] -right-[10%] top-[68%] h-[380px] opacity-25"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-10 items-center">
          <div>
            <div style={rise(1)} className="rise mb-7">
              <span className="inline-flex items-center gap-2.5 pl-3 pr-4 py-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 text-sm font-medium text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {personalInfo.availability}
              </span>
            </div>

            <p style={rise(2)} className="rise eyebrow mb-4">
              {personalInfo.name} &nbsp;/&nbsp; {personalInfo.title}
            </p>

            <h1
              style={rise(3)}
              className="rise text-[2.6rem] leading-[1.06] sm:text-6xl lg:text-[4.1rem] lg:leading-[1.04] font-extrabold tracking-tight text-white text-balance"
            >
              I build web apps, mobile apps and{" "}
              <span className="gradient-text">AI features</span> that real
              businesses run on.
            </h1>

            <p
              style={rise(4)}
              className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              {personalInfo.subheadline}
            </p>

            <div style={rise(5)} className="rise mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-[0_0_36px_rgba(34,211,238,0.4)] transition-shadow"
              >
                View projects
                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/30 transition-colors"
              >
                Work with me
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-muted hover:text-white transition-colors"
              >
                <FaDownload size={13} />
                Download CV
              </a>
            </div>

            <div style={rise(6)} className="rise mt-9 flex items-center gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-muted hover:text-white hover:border-cyan-400/40 hover:-translate-y-0.5 transition-all"
                >
                  <Icon size={19} />
                </a>
              ))}
              <span className="ml-2 text-sm text-muted">{personalInfo.location} · remote worldwide</span>
            </div>
          </div>

          {/* Photo with floating cards */}
          <div
            style={rise(3)}
            className="rise relative mx-auto w-full max-w-[300px] lg:max-w-[360px]"
          >
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-blue-600/40 via-cyan-400/25 to-violet-500/35 blur-3xl" />
            <div className="relative aspect-square rounded-full p-[3px] bg-gradient-to-tr from-blue-500 via-cyan-300 to-violet-500">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-[#060a17]">
                <Image
                  src="/new-profile.png"
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 1024px) 320px, 380px"
                  className="object-cover"
                  preload
                />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-10 top-2 z-10 hidden sm:flex items-center gap-3 rounded-2xl border border-white/15 bg-[#0d1326]/95 px-4 py-3 shadow-2xl shadow-black/50"
            >
              <span className="text-2xl font-extrabold gradient-text">50K+</span>
              <span className="text-xs leading-tight text-muted">
                app
                <br />
                downloads
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 -bottom-3 z-10 hidden sm:flex items-center gap-3 rounded-2xl border border-white/15 bg-[#0d1326]/95 px-4 py-3 shadow-2xl shadow-black/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15 text-sm font-bold text-amber-300">
                2×
              </span>
              <span className="text-xs leading-tight">
                <span className="block font-semibold text-white">Employee of the Quarter</span>
                <span className="text-muted">Kcube.ai</span>
              </span>
            </motion.div>
          </div>
        </div>

        {/* Tech marquee */}
        <div
          className="relative mt-20 overflow-hidden border-y border-white/[0.07] py-5"
          style={{
            maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          }}
        >
          <div className="animate-marquee flex w-max gap-12 font-mono text-sm text-muted">
            {marquee.map((tech, i) => (
              <span key={`${tech}-${i}`} className="flex items-center gap-12 whitespace-nowrap">
                {tech}
                <span className="h-1 w-1 rounded-full bg-cyan-400/70" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

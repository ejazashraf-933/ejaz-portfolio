import { FiDownload } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio";
import ProjectShowcase from "./ProjectShowcase";
import CtaButton from "./CtaButton";
import GhostButton from "./GhostButton";
import CountUp from "./CountUp";

const rise = (i: number) => ({ animationDelay: `${0.08 * i}s` });

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Stage */}
        <div style={rise(0)} className="rise relative mx-auto max-w-5xl">
          <div className="pointer-events-none absolute -inset-10 rounded-[48px] bg-accent/20 blur-[90px]" />
          <ProjectShowcase />
        </div>

        <div className="mx-auto mt-14 max-w-4xl text-center sm:mt-16">
          <div style={rise(1)} className="rise mb-7 flex justify-center">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 py-1.5 pl-3 pr-4 text-sm font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {personalInfo.availability}
            </span>
          </div>

          <h1 style={rise(2)} className="rise display text-[3.1rem] text-white sm:text-7xl lg:text-[5.6rem]">
            Real products.
            <br />
            <span className="text-gradient">Shipped</span> end to end.
          </h1>

          <p style={rise(3)} className="rise mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {personalInfo.subheadline}
          </p>

          <div style={rise(4)} className="rise mt-10 flex flex-wrap items-center justify-center gap-3">
            <CtaButton href="#projects" label="View my work" hoverLabel="Explore projects" size="lg" />
            <GhostButton href={personalInfo.resumeUrl} external icon={<FiDownload size={17} />}>
              Download CV
            </GhostButton>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div style={rise(5)} className="rise mt-20 border-y border-white/[0.08]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
          {personalInfo.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-4 py-7 sm:px-8 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""} border-white/[0.08] lg:border-r lg:last:border-r-0`}
            >
              <p className="text-2xl font-bold tracking-tight text-white sm:text-[1.7rem]">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-1.5 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa";
import { personalInfo, awards, skillGroups } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="paper relative mx-2 rounded-[32px] py-28 sm:mx-4 sm:rounded-[44px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Left: heading and portrait */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="eyebrow mb-4">About</p>
              <h2 className="display text-[2.6rem] sm:text-6xl">A bit about me.</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mt-10 aspect-[4/5] max-w-md overflow-hidden rounded-[24px] bg-black/5 lg:sticky lg:top-24"
            >
              <Image
                src="/new-pic.png"
                alt={`${personalInfo.name} in Lahore`}
                fill
                sizes="(max-width: 1024px) 100vw, 440px"
                className="object-cover object-[50%_30%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16 text-white">
                <p className="font-bold">{personalInfo.name}</p>
                <p className="text-sm text-white/75">
                  {personalInfo.title} · {personalInfo.location}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: bio, stack, recognition */}
          <div className="lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-5 text-[1.12rem] leading-relaxed"
            >
              <p>{personalInfo.bio}</p>
              <p className="text-paper-muted">{personalInfo.bioSecondary}</p>
            </motion.div>

            <div className="mt-14">
              <p className="eyebrow mb-2">Tools I use in production</p>
              <dl className="divide-y divide-black/10 border-y border-black/10">
                {skillGroups.map((group) => (
                  <div key={group.title} className="grid gap-3 py-5 sm:grid-cols-[150px_1fr]">
                    <dt className="pt-1.5 text-sm font-bold">{group.title}</dt>
                    <dd className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full border border-black/15 bg-paper-2 px-3 py-1.5 text-[0.82rem] font-medium">

                          {item}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div id="awards" className="mt-14">
              <p className="eyebrow mb-5 flex items-center gap-2">
                <FaTrophy /> Recognition
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                {awards.map((award, index) => (
                  <motion.figure
                    key={award.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="overflow-hidden rounded-[20px] border border-black/[0.07] bg-paper-2"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={award.image}
                        alt={`${award.title}, ${award.organization}, ${award.period}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 320px"
                        className="object-cover"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[0.72rem] font-semibold text-white backdrop-blur">
                        {award.period}
                      </span>
                    </div>
                    <figcaption className="p-4">
                      <p className="font-bold">{award.title}</p>
                      <p className="mt-0.5 text-sm text-paper-muted">{award.organization}</p>
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

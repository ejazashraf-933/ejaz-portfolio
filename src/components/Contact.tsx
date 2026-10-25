"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FiMapPin } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white placeholder-white/30 transition-colors focus:border-accent focus:outline-none";
const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);
    setFailed(false);

    try {
      const response = await fetch("https://formspree.io/f/mdaplwqq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFailed(true);
      }
    } catch {
      setFailed(true);
    }

    setIsSubmitting(false);
  };

  const buttons = [
    { label: "LinkedIn", href: personalInfo.social.linkedin, icon: FaLinkedin },
    { label: "Upwork", href: personalInfo.social.upwork, icon: SiUpwork },
    { label: "WhatsApp", href: `https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`, icon: FaWhatsapp },
  ];

  return (
    <section id="contact" className="relative overflow-hidden pb-24 pt-32">
      {/* Glow arcs */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-[38%] -z-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="eyebrow mb-5">Contact</p>
          <h2 className="display text-[3rem] text-white sm:text-7xl lg:text-[5.4rem]">
            Let&apos;s build something <span className="text-accent">real.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Tell me what you want to build. I will reply with questions or a time for a short call.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 font-semibold text-white transition-colors hover:bg-accent-deep"
            >
              <FaEnvelope /> Get in touch
            </a>
            {buttons.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-6 py-3.5 font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/[0.05]"
              >
                <Icon /> {label}
              </a>
            ))}
          </div>
          <p className="mt-7 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted">
            <FiMapPin /> {personalInfo.location} ·
            <a href={`mailto:${personalInfo.email}`} className="text-white underline underline-offset-4 hover:text-accent">
              {personalInfo.email}
            </a>
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="mx-auto mt-20 max-w-2xl space-y-5 rounded-[24px] border border-white/10 bg-ink-2/90 p-6 backdrop-blur sm:p-9"
        >
          <p className="text-xl font-bold tracking-tight text-white">Or send a message here</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="c-name" className={labelClass}>Name</label>
              <input
                id="c-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="c-email" className={labelClass}>Email</label>
              <input
                id="c-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClass}
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="c-subject" className={labelClass}>Subject</label>
            <input
              id="c-subject"
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className={inputClass}
              placeholder="Project discussion"
            />
          </div>

          <div>
            <label htmlFor="c-message" className={labelClass}>Message</label>
            <textarea
              id="c-message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`${inputClass} resize-none`}
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 text-sm font-bold text-ink transition-colors hover:bg-accent hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <FaPaperPlane /> Send message
              </>
            )}
          </button>

          {submitted && (
            <p className="flex items-center justify-center gap-2 py-1 text-sm text-emerald-400">
              <FaCheckCircle /> Message sent. I&apos;ll get back to you soon.
            </p>
          )}

          {failed && (
            <p role="alert" className="py-1 text-center text-sm text-rose-300">
              The message could not be sent. Please try again, or email{" "}
              <a href={`mailto:${personalInfo.email}`} className="underline">
                {personalInfo.email}
              </a>
              .
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

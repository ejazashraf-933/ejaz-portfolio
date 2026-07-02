"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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
        alert("Failed to send message. Please try again.");
      }
    } catch {
      alert("Failed to send message. Please try again.");
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
      hoverBg: "group-hover:bg-blue-500/20",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
      hoverBg: "group-hover:bg-emerald-500/20",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: personalInfo.location,
      href: "#",
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20",
      hoverBg: "group-hover:bg-amber-500/20",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: `https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`,
      color: "text-green-400",
      bg: "bg-green-500/10 border-green-500/20",
      hoverBg: "group-hover:bg-green-500/20",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "@ejazashraf-933",
      href: personalInfo.social.github,
      color: "text-gray-300",
      bg: "bg-gray-500/10 border-gray-500/20",
      hoverBg: "group-hover:bg-gray-500/20",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "in/ejazashraf",
      href: personalInfo.social.linkedin,
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
      hoverBg: "group-hover:bg-blue-500/20",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#0f1117] relative">
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
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">
            Have a project in mind or want to discuss an opportunity? Let&apos;s
            connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Let&apos;s build something great together
            </h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div className="space-y-3">
              {contactInfo.map((item, index) => {
                const isExternal = item.href.startsWith("http");
                return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/[0.02] transition-all duration-300"
                >
                  <div
                    className={`w-11 h-11 ${item.bg} ${item.hoverBg} border rounded-lg flex items-center justify-center transition-all duration-300`}
                  >
                    <item.icon className={`${item.color} text-lg`} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#151921] border border-[#232838] rounded-xl p-8 space-y-5 card-glow"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#0f1117] border border-[#232838] text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#0f1117] border border-[#232838] text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#0f1117] border border-[#232838] text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm"
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#0f1117] border border-[#232838] text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-3.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 text-emerald-400 text-sm py-2"
                >
                  <FaCheckCircle />
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

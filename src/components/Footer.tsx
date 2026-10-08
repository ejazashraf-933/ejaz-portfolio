import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { href: personalInfo.social.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: personalInfo.social.github, icon: FaGithub, label: "GitHub" },
  { href: personalInfo.social.upwork, icon: SiUpwork, label: "Upwork" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.07] bg-[#050814]/80 py-12 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a href="#home" className="text-lg font-extrabold tracking-tight text-white">
              {personalInfo.name.split(" ")[0]}
              <span className="gradient-text"> {personalInfo.name.split(" ")[1]}</span>
            </a>
            <p className="mt-2 text-sm text-muted">{personalInfo.title} · {personalInfo.location}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm text-muted hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-muted hover:border-cyan-400/40 hover:text-white transition-colors"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 border-t border-white/[0.07] pt-6 text-sm text-muted">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

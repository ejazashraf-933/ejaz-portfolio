import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { personalInfo } from "@/data/portfolio";

const socials = [
  { href: personalInfo.social.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: personalInfo.social.github, icon: FaGithub, label: "GitHub" },
  { href: personalInfo.social.upwork, icon: SiUpwork, label: "Upwork" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {personalInfo.name} · {personalInfo.location}
        </p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-white/30 hover:text-white"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
          <a href="#home" className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-white">
            Back to top <FaArrowUp size={11} />
          </a>
        </div>
      </div>
    </footer>
  );
}

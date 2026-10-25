import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { personalInfo } from "@/data/portfolio";

// Brand-coloured round icons. GitHub's brand colour is black, so it sits on white to stay visible on dark.
export const socials = [
  { label: "LinkedIn", href: personalInfo.social.linkedin, icon: FaLinkedinIn, bg: "#0A66C2", fg: "#fff" },
  { label: "GitHub", href: personalInfo.social.github, icon: FaGithub, bg: "#ffffff", fg: "#181717" },
  { label: "Upwork", href: personalInfo.social.upwork, icon: SiUpwork, bg: "#14A800", fg: "#fff" },
  { label: "WhatsApp", href: `https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`, icon: FaWhatsapp, bg: "#25D366", fg: "#fff" },
];

export default function SocialLinks({ size = 34, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`flex items-center ${className || "gap-2"}`}>
      {socials.map(({ label, href, icon: Icon, bg, fg }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          style={{ width: size, height: size, backgroundColor: bg, color: fg, ["--glow" as string]: `${bg}80` }}
          className="flex shrink-0 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_var(--glow)]"
        >
          <Icon size={Math.round(size * 0.48)} />
        </a>
      ))}
    </div>
  );
}

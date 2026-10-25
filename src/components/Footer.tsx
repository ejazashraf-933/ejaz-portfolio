import { FaArrowUp } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {personalInfo.name} · {personalInfo.location}
        </p>
        <a href="#home" className="group inline-flex items-center gap-3 text-sm font-medium text-muted transition-colors hover:text-white">
          Back to top
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/[0.04] transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-[#9a5cff] group-hover:shadow-[0_0_20px_rgba(124,92,255,0.6)]">
            <FaArrowUp size={11} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </span>
        </a>
      </div>
    </footer>
  );
}

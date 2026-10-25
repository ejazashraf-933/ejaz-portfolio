import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Shown before the label; nudges on hover */
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  external?: boolean;
  download?: boolean;
  /** chip: tight left padding for a round icon badge */
  size?: "md" | "lg" | "chip";
  className?: string;
  ariaExpanded?: boolean;
}

// Secondary button: glass pill whose fill sweeps in from the left on hover.
export default function GhostButton({ children, icon, href, onClick, external, download, size = "lg", className = "", ariaExpanded }: Props) {
  const classes = `group/ghost relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-white/20 bg-white/[0.04] font-semibold text-white backdrop-blur-md transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:shadow-[0_10px_30px_-12px_rgba(255,255,255,0.35)] ${
    { lg: "px-6 py-3.5", md: "px-4 py-2 text-sm", chip: "py-2 pl-2 pr-5" }[size]
  } ${className}`;

  const content = (
    <>
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/[0.14] via-white/[0.08] to-transparent transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover/ghost:translate-x-0"
      />
      {icon && <span className="relative flex transition-transform duration-300 group-hover/ghost:-translate-y-0.5 group-hover/ghost:scale-110">{icon}</span>}
      <span className="relative">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download || undefined}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-expanded={ariaExpanded} className={classes}>
      {content}
    </button>
  );
}

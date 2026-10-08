import type { ProjectKind } from "@/data/portfolio";

const palettes = [
  { from: "#1d4ed8", to: "#0891b2", glow: "rgba(34,211,238,0.35)" },
  { from: "#6d28d9", to: "#2563eb", glow: "rgba(139,92,246,0.35)" },
  { from: "#0e7490", to: "#4f46e5", glow: "rgba(56,189,248,0.35)" },
  { from: "#4338ca", to: "#be185d", glow: "rgba(167,139,250,0.35)" },
];

const bar = "rounded-full bg-white/25";

function WebMock() {
  return (
    <div className="absolute inset-x-[10%] bottom-0 top-[16%] rounded-t-xl border border-white/20 bg-[#0a1024]/85 shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-rose-400/80" />
        <span className="h-2 w-2 rounded-full bg-amber-300/80" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
        <span className="ml-3 h-2 w-1/3 rounded-full bg-white/10" />
      </div>
      <div className="flex h-full gap-3 p-3">
        <div className="hidden w-1/5 flex-col gap-2 sm:flex">
          <span className={`${bar} h-2 w-full`} />
          <span className={`${bar} h-2 w-4/5 opacity-60`} />
          <span className={`${bar} h-2 w-3/5 opacity-60`} />
          <span className={`${bar} h-2 w-4/5 opacity-60`} />
        </div>
        <div className="flex-1 space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <span className="h-10 rounded-lg bg-white/10" />
            <span className="h-10 rounded-lg bg-cyan-300/25" />
            <span className="h-10 rounded-lg bg-white/10" />
          </div>
          <div className="space-y-2">
            <span className={`${bar} block h-2 w-full opacity-50`} />
            <span className={`${bar} block h-2 w-11/12 opacity-40`} />
            <span className={`${bar} block h-2 w-3/4 opacity-40`} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMock() {
  const phone = "absolute bottom-[-12%] w-[26%] rounded-[1.4rem] border border-white/25 bg-[#0a1024]/90 p-2 shadow-2xl";
  return (
    <>
      <div className={`${phone} left-[20%] top-[18%] -rotate-6`}>
        <span className="mx-auto mb-2 block h-1.5 w-1/3 rounded-full bg-white/20" />
        <span className="mb-2 block h-12 rounded-xl bg-cyan-300/25" />
        <span className={`${bar} mb-1.5 block h-1.5 w-4/5`} />
        <span className={`${bar} mb-1.5 block h-1.5 w-3/5 opacity-60`} />
        <span className="mt-3 block h-8 rounded-lg bg-white/10" />
      </div>
      <div className={`${phone} right-[20%] top-[10%] rotate-6`}>
        <span className="mx-auto mb-2 block h-1.5 w-1/3 rounded-full bg-white/20" />
        <span className={`${bar} mb-1.5 block h-1.5 w-2/3`} />
        <span className="mb-2 block h-8 rounded-lg bg-white/10" />
        <span className="mb-2 block h-8 rounded-lg bg-violet-300/25" />
        <span className="block h-8 rounded-lg bg-white/10" />
      </div>
    </>
  );
}

function AiMock() {
  return (
    <div className="absolute inset-x-[14%] bottom-0 top-[16%] flex flex-col gap-2.5 rounded-t-xl border border-white/20 bg-[#0a1024]/85 p-4 shadow-2xl">
      <span className="ml-auto block h-7 w-3/5 rounded-2xl rounded-br-sm bg-cyan-300/30" />
      <span className="block h-12 w-4/5 rounded-2xl rounded-bl-sm bg-white/12" />
      <span className="ml-auto block h-7 w-2/5 rounded-2xl rounded-br-sm bg-cyan-300/30" />
      <span className="flex h-9 w-3/5 items-center gap-1.5 rounded-2xl rounded-bl-sm bg-white/12 px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
      </span>
    </div>
  );
}

function DataMock() {
  const heights = ["h-[35%]", "h-[60%]", "h-[45%]", "h-[80%]", "h-[55%]", "h-[70%]", "h-[40%]"];
  return (
    <div className="absolute inset-x-[10%] bottom-0 top-[16%] rounded-t-xl border border-white/20 bg-[#0a1024]/85 p-4 shadow-2xl">
      <div className="mb-3 flex gap-2">
        <span className="h-8 flex-1 rounded-lg bg-white/10" />
        <span className="h-8 flex-1 rounded-lg bg-cyan-300/25" />
        <span className="h-8 flex-1 rounded-lg bg-white/10" />
      </div>
      <div className="flex h-[55%] items-end gap-2">
        {heights.map((h, i) => (
          <span
            key={i}
            className={`${h} flex-1 rounded-t-md ${i === 3 ? "bg-cyan-300/60" : "bg-white/20"}`}
          />
        ))}
      </div>
    </div>
  );
}

/** Illustration shown when a project has no screenshot yet. */
export default function ProjectVisual({ kind, index }: { kind: ProjectKind; index: number }) {
  const p = palettes[index % palettes.length];
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
    >
      <div
        className="absolute -right-10 -top-16 h-56 w-56 rounded-full blur-3xl"
        style={{ background: p.glow }}
      />
      <div className="bg-grid absolute inset-0 opacity-40" />
      {kind === "web" && <WebMock />}
      {kind === "mobile" && <MobileMock />}
      {kind === "ai" && <AiMock />}
      {kind === "data" && <DataMock />}
    </div>
  );
}

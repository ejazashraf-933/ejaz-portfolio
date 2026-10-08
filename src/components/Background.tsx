export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#060a17]"
    >
      {/* Mesh lighting */}
      <div className="absolute -top-40 left-[12%] h-[520px] w-[620px] rounded-full bg-blue-700/25 blur-[150px]" />
      <div className="absolute top-[28%] -right-32 h-[480px] w-[520px] rounded-full bg-cyan-600/15 blur-[150px]" />
      <div className="absolute bottom-[-10%] left-[30%] h-[460px] w-[560px] rounded-full bg-violet-700/15 blur-[160px]" />

      {/* Faded grid */}
      <div
        className="bg-grid absolute inset-0 opacity-60"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 25%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 25%, black 20%, transparent 80%)",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_55%,rgba(0,0,0,0.6))]" />
    </div>
  );
}

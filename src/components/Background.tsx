// Fixed layer behind the page: drifting light and a faint grid near the top.
// Dark sections are transparent so this shows through; cream panels sit on top of it.
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="aurora aurora-c" />
      <div className="bg-lines absolute inset-0" />
    </div>
  );
}

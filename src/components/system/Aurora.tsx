/**
 * The studio's own light: three drifting fields of the brand palette
 * over the night surface. Pure CSS (see globals.css), zero JS cost,
 * frozen automatically under prefers-reduced-motion.
 */
export function Aurora({ dim = false }: { dim?: boolean }) {
  return (
    <div aria-hidden className={`absolute inset-0 overflow-hidden ${dim ? "opacity-60" : ""}`}>
      <div className="aurora-field aurora-1" />
      <div className="aurora-field aurora-2" />
      <div className="aurora-field aurora-3" />
    </div>
  );
}

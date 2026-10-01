const PALETTES = {
  Signature: { body: "#8a8f98", panel: "#b7bcc4", trim: "#d97706" },
  Premium: { body: "#1b2436", panel: "#334155", trim: "#93c5fd" },
  Classic: { body: "#111827", panel: "#1f2937", trim: "#60a5fa" },
  Magnum: { body: "#111827", panel: "#1f2937", trim: "#60a5fa" },
  Dehumidification: { body: "#334155", panel: "#475569", trim: "#94a3b8" },
  Residential: { body: "#3f3226", panel: "#5b4636", trim: "#f0c987" },
};

export default function UnitIcon({ category, size = 96 }) {
  const p = PALETTES[category] || PALETTES.Premium;
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      role="img"
      aria-label={`${category} unit illustration`}
    >
      <rect x="55" y="150" width="90" height="10" rx="2" fill="#00000022" />
      <rect x="50" y="40" width="100" height="115" rx="6" fill={p.body} />
      <rect x="60" y="52" width="80" height="34" rx="3" fill={p.panel} />
      <circle cx="70" cy="69" r="4" fill={p.trim} />
      <rect x="82" y="63" width="50" height="4" rx="2" fill={p.trim} opacity="0.7" />
      <rect x="82" y="72" width="34" height="4" rx="2" fill={p.trim} opacity="0.4" />
      {Array.from({ length: 5 }).map((_, i) => (
        <rect
          key={i}
          x={60 + i * 16}
          y="96"
          width="10"
          height="50"
          rx="2"
          fill={p.panel}
          opacity="0.85"
        />
      ))}
      <rect x="50" y="40" width="100" height="115" rx="6" fill="none" stroke="#ffffff22" strokeWidth="1.5" />
    </svg>
  );
}

const specs = [
  { label: 'Capacity', value: '20L — 100,000L / day' },
  { label: 'Output Quality', value: 'WHO and BIS compliance' },
  { label: 'Humidity Range', value: '25% — 100% RH' },
  { label: 'Temperature', value: '15°C — 45°C' },
  { label: 'Energy', value: 'Grid · Solar · Hybrid' },
  { label: 'Monitoring', value: 'Real-time IoT Telemetry' },
];

// Deterministic pseudo-random bubble field — same approach as the Impact
// Atlas section, so the two dark sections feel like one visual language
// instead of a video loop here and a gradient+bubbles there.
function makeBubbles(count) {
  let seed = 7;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  return Array.from({ length: count }, (_, i) => {
    const size = 8 + rand() * 34;
    return {
      key: i,
      size,
      left: rand() * 100,
      duration: 10 + rand() * 14,
      delay: rand() * 8,
    };
  });
}

const bubbles = makeBubbles(24);

export default function EngineeringSpecs() {
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-20 text-white"
      style={{ background: 'linear-gradient(180deg, #060e1c 0%, #0b1f3a 100%)' }}
    >
      {/* Rising bubble field — matches the Impact Atlas background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" style={{ mixBlendMode: 'screen' }} aria-hidden="true">
        <style>{`
          @keyframes engSpecsBubbleRise {
            0% { transform: translateY(0); opacity: 0; }
            10% { opacity: 0.8; }
            90% { opacity: 0.5; }
            100% { transform: translateY(-115vh); opacity: 0; }
          }
        `}</style>
        {bubbles.map((b) => (
          <span
            key={b.key}
            className="absolute rounded-full"
            style={{
              bottom: '-40px',
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: `${b.left}%`,
              background:
                'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(26,96,191,0.15) 60%, rgba(0,0,0,0) 75%)',
              animation: `engSpecsBubbleRise ${b.duration}s linear infinite`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -right-10 top-10 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 bottom-0 h-3 w-3 rounded-full bg-white/30" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-2 w-2 rounded-full bg-white/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
            <span className="h-px w-6 bg-brand-light" />
            Engineering
          </p>

          <h2 className="font-serif text-4xl leading-tight lg:text-5xl">
            Built for every climate.
            <br />
            <em className="italic text-gold">Every mission.</em>
          </h2>

          <p className="mt-6 max-w-md text-xl leading-relaxed text-white/60">
            Rigorous specifications. Field-hardened. Deployed from Himalayan
            ranges to Arabian deserts. If there is humidity in the air,
            MEGHDOOT<sup className="tm-mark">®</sup> can put it in a glass.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          {specs.map((spec) => (
            <div key={spec.label} className="border-b border-white/10 pb-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
                {spec.label}
              </p>
              <p className="mt-2 font-serif text-xl">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Link } from 'react-router-dom'

const grades = [
  {
    grade: 'GRADE 1',
    title: 'Drinking Water',
    cert: 'WHO / BIS / IS 10500',
    spec: 'TDS: 50–150 ppm · pH: 6.5–8.5 · UV disinfected',
    uses: ['Homes & communities', 'Schools & institutions', 'Hospitality & resorts'],
    bar: 'bg-brand',
    specBg: 'bg-brand/5 text-brand-dark',
  },
  {
    grade: 'GRADE 2',
    title: 'Commercial Grade',
    cert: 'FSSAI / FOOD SAFETY',
    spec: 'TDS: 30–80 ppm · Zero microbial · Mineralised',
    uses: ['Bottling plants', 'Food & beverage', 'Cafés & restaurants'],
    bar: 'bg-teal-deep',
    specBg: 'bg-teal-deep/5 text-teal-deep',
  },
  {
    grade: 'GRADE 3',
    title: 'Laboratory Grade',
    cert: 'ASTM TYPE II',
    spec: 'Resistivity: 10-15 MΩ·cm · TOC: <50 ppb · Particle free',
    uses: ['Semiconductor fabs', 'Green hydrogen electrolysis', 'Electronics manufacturing'],
    bar: 'bg-violet-500',
    specBg: 'bg-violet-500/5 text-violet-700',
  },
]

export default function WaterQuality() {
  return (
    <section className="bg-haze pt-14 pb-10 lg:pt-16 lg:pb-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-deep">
          <span className="h-px w-6 bg-teal-deep" /> Water Quality
        </p>
        <h2 className="max-w-2xl font-serif text-4xl text-ink lg:text-5xl">
          One platform. <em className="italic text-brand">Three grades of purity.</em>
        </h2>
        <p className="mt-4 max-w-2xl text-ink/60">
          MEGHDOOT<sup className="tm-mark">®</sup> is the only AWG platform that delivers across all three water quality
          grades — from household drinking water to laboratory-grade water — from the
          same core technology.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {grades.map((g) => (
            <div key={g.grade} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className={`h-1.5 w-full ${g.bar}`} />
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mist text-ink/70">
                    💧
                  </span>
                  <span className="rounded-full bg-haze px-3 py-1 text-[11px] font-semibold text-ink/60">
                    {g.grade}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-xl text-ink">{g.title}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink/40">
                  {g.cert}
                </p>

                <p className={`mt-4 rounded-lg px-3 py-2 font-mono text-xs leading-relaxed ${g.specBg}`}>
                  {g.spec}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {g.uses.map((u) => (
                    <li key={u} className="flex items-center gap-2 text-sm text-ink/70">
                      <span className="h-1 w-1 rounded-full bg-ink/40" />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white p-6">
          <p className="text-sm text-ink/70">
            <span className="font-semibold text-ink">
              Every MEGHDOOT<sup className="tm-mark">®</sup> unit is certified at the grade it delivers.
            </span>{' '}
            Grade selection is configured at deployment — the same hardware platform adapts to
            your purity requirement.
          </p>
          <Link
            to="/design-your-water-system#contact"
            className="whitespace-nowrap text-sm font-semibold text-brand hover:text-brand-dark"
          >
            SPECIFY YOUR GRADE →
          </Link>
        </div>
      </div>
    </section>
  )
}

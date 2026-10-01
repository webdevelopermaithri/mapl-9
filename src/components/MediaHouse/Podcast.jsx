import { useState } from 'react'
import useReveal from '../../hooks/useReveal.js'
import { seasons } from '../../data/mediaHouseEpisodes.js'
import BubbleField from '../common/BubbleField.jsx'

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-current">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" strokeLinecap="round" />
    </svg>
  )
}

function VacantCard({ episode, index }) {
  const [ref, visible] = useReveal(0.1)
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-5 text-center`}
      style={{ transitionDelay: `${(index % 4) * 60}ms` }}
    >
      <span className="mb-3 text-xs font-semibold tracking-[0.16em] text-slate-500">{episode.ep}</span>
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-white/15 text-slate-500">
        +
      </span>
      <p className="mt-3 text-xs text-slate-500">Episode coming soon</p>
    </div>
  )
}

function EpisodeCard({ episode, index }) {
  const [ref, visible] = useReveal(0.1)

  if (episode.vacant) {
    return <VacantCard episode={episode} index={index} />
  }

  const isVideo = Boolean(episode.url)

  const content = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={episode.image}
          alt={episode.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 text-xs font-semibold tracking-[0.16em] text-accent-gold">
          {episode.ep}
        </span>
        <span
          aria-hidden="true"
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent-gold text-navy-950 shadow-lg transition-transform duration-200 group-hover:scale-110"
        >
          <PlayIcon />
        </span>
      </div>
      <div className="p-5">
        <h4 className="font-display text-xl leading-snug text-white">{episode.title}</h4>
        <p className="mt-2 text-sm text-slate-300">{episode.guest}</p>
        {episode.role && <p className="text-xs text-slate-500">{episode.role}</p>}
        {episode.duration && (
          <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-400">
            <ClockIcon />
            {episode.duration}
          </div>
        )}
      </div>
    </>
  )

  const className = `reveal ${visible ? 'is-visible' : ''} group block overflow-hidden rounded-2xl bg-navy-800/60 ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:ring-accent-gold/40`
  const style = { transitionDelay: `${(index % 4) * 60}ms` }

  if (isVideo) {
    return (
      <a ref={ref} href={episode.url} target="_blank" rel="noopener noreferrer" className={className} style={style}>
        {content}
      </a>
    )
  }

  return (
    <div ref={ref} className={className} style={style}>
      {content}
    </div>
  )
}

export default function Podcast() {
  const [season, setSeason] = useState(1)
  const [ref, visible] = useReveal()
  const data = seasons[season]

  return (
    <section
      id="podcast"
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} relative overflow-hidden py-24 text-white`}
      style={{ background: 'linear-gradient(180deg, #060e1c 0%, #0b1f3a 100%)' }}
    >
      {/* Rising bubble field — same background used on the Technology
          page's "Built for every climate" engineering section */}
      <BubbleField count={24} />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-slate-400">
              <span className="h-px w-8 bg-slate-500" />
              THE AQUATALKS PODCAST
            </div>
            <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
              Conversations on <span className="italic text-accent-gold">the century of water.</span>
            </h2>
          </div>

          <div className="flex shrink-0 rounded-full bg-white/5 p-1 ring-1 ring-white/10">
            {[1, 2].map((s) => (
              <button
                key={s}
                onClick={() => setSeason(s)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                  season === s ? 'bg-white text-navy-950' : 'text-slate-300 hover:text-white'
                }`}
              >
                SEASON {s}
              </button>
            ))}
          </div>
        </div>

        <div
          key={season}
          className="animate-fade-up mb-10 rounded-2xl bg-white/[0.04] p-8 ring-1 ring-white/10 sm:flex sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-accent-gold">{data.label}</p>
            <h3 className="mt-2 font-display text-3xl text-white">{data.title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">{data.description}</p>
          </div>
          <p className="mt-6 shrink-0 text-xs font-medium tracking-[0.12em] text-slate-500 sm:mt-0">
            {data.count}
          </p>
        </div>

        {data.episodes.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.episodes.map((ep, i) => (
              <EpisodeCard key={ep.ep} episode={ep} index={i} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-dashed border-white/10 p-10 text-center text-sm text-slate-500">
            Season 2 episodes are being catalogued — check back shortly.
          </p>
        )}
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'

function ArrowUpRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M7 17L17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FeedCard({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-4 rounded-2xl p-4 transition-colors duration-150 hover:bg-mist"
    >
      <span className="relative mt-0.5 h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-blue-50 ring-1 ring-black/5">
        {item.image ? (
          <img
            src={item.image}
            alt={item.outlet}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-[10px] font-bold tracking-tight text-accent-blue">
            {item.initials}
          </span>
        )}
        {item.logo && (
          <span className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-black/10">
            <img src={item.logo} alt="" className="h-full w-full object-contain p-0.5" />
          </span>
        )}
      </span>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <span className="text-xs font-bold text-slate-600">{item.outlet}</span>
          <span className="h-1 w-1 shrink-0 rounded-full bg-slate-300" />
          <span className="text-xs text-slate-400">{item.meta || item.date}</span>
          <span className="ml-auto rounded-full bg-mist px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-slate-400 group-hover:bg-blue-50 group-hover:text-accent-blue sm:ml-0">
            {item.tag}
          </span>
        </div>
        <h4 className="font-display text-[17px] font-bold italic leading-snug text-ink transition-colors group-hover:text-accent-blue">
          {item.title}
        </h4>
        {item.body && (
          <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-slate-500">{item.body}</p>
        )}
      </div>
      <ArrowUpRightIcon className="mt-1 shrink-0 text-slate-300 transition-colors group-hover:text-accent-blue" />
    </a>
  )
}

// The left panel of the LatestNews section: a live, scrollable feed of
// Maithri press-coverage cards. `items` is expected newest-first, so
// anything added through the "Add News" form appears at the top —
// this scrolls that same box back to the top so the new card is
// visible without the person having to scroll up manually.
export default function NewsFeed({ items, onViewAll }) {
  const scrollRef = useRef(null)
  const prevLength = useRef(items.length)

  useEffect(() => {
    if (items.length > prevLength.current && scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
    prevLength.current = items.length
  }, [items.length])

  return (
    <div className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5 sm:p-8">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="mb-1 text-xs font-semibold tracking-[0.14em] text-accent-blue">LIVE FEED</p>
          <h3 className="font-display text-2xl leading-snug text-ink sm:text-[26px]">Maithri in the news</h3>
        </div>
        <button
          type="button"
          onClick={onViewAll}
          className="shrink-0 whitespace-nowrap text-xs font-semibold tracking-[0.06em] text-accent-blue transition-colors hover:text-blue-800"
        >
          View all &rarr;
        </button>
      </div>

      <div ref={scrollRef} className="flex min-h-0 flex-1 flex-col divide-y divide-black/5 overflow-y-auto pr-1">
        {items.length === 0 && (
          <p className="py-10 text-center text-sm text-slate-400">
            No news yet — add the first update using the button above.
          </p>
        )}
        {items.map((item) => (
          <FeedCard key={item.url + item.title} item={item} />
        ))}
      </div>
    </div>
  )
}

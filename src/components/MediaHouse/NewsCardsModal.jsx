import { createPortal } from 'react-dom'
import useLockBodyScroll from '../../hooks/useLockBodyScroll.js'
import { tm } from '../../utils/formatTM.jsx'

const FILTERS = ['All', 'LATEST NEWS', 'PRESS ROOM', 'FIELD BRIEF']

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowUpRightIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M7 17L17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function NewsCard({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
    >
      {item.image && (
        <div className="relative h-36 w-full shrink-0 overflow-hidden">
          <img
            src={item.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-ink backdrop-blur-sm">
            {item.tag}
          </span>
          {item.logo ? (
            <span className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-black/10">
              <img src={item.logo} alt="" className="h-full w-full object-contain p-1" />
            </span>
          ) : (
            <span className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[10px] font-bold tracking-tight text-accent-blue">
              {item.initials}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        {!item.image && (
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[10px] font-bold tracking-tight text-accent-blue">
                {item.initials}
              </span>
              <span className="text-[13px] font-bold text-ink">{item.outlet}</span>
            </div>
            <span className="shrink-0 rounded-full bg-mist px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
              {item.tag}
            </span>
          </div>
        )}
        {item.image && <span className="mb-2 text-[13px] font-bold text-ink">{item.outlet}</span>}

        <h4 className="font-display text-lg font-bold italic leading-snug text-ink">{tm(item.title)}</h4>
        <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-slate-500">{tm(item.body)}</p>

        <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4 text-xs">
          <span className="text-slate-400">{item.meta || item.date}</span>
          <span className="flex items-center gap-1 font-semibold text-accent-blue group-hover:text-blue-700">
            Read article
            <ArrowUpRightIcon />
          </span>
        </div>
      </div>
    </a>
  )
}

// Portal-rendered so it centers over the whole viewport regardless of
// the LatestNews section's own scroll-reveal transform (same reasoning
// as the Journal article modal). `items` is passed in from LatestNews
// so any news added through the "Add News" form shows up here too.
export default function NewsCardsModal({ open, items, filter, onFilterChange, onClose }) {
  useLockBodyScroll(open, onClose)

  if (!open) return null

  const filtered = filter === 'All' ? items : items.filter((c) => c.tag === filter)

  return createPortal(
    <div
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-navy-950/60 p-5 backdrop-blur-sm"
      style={{ animation: 'newscards-modal-fade 0.2s ease' }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="newscards-modal-title"
        className="relative w-full max-w-[980px] overflow-hidden rounded-[20px] bg-white shadow-2xl"
        style={{ animation: 'newscards-modal-pop 0.25s cubic-bezier(0.2,0.8,0.3,1)' }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-[3] inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold tracking-wide text-ink shadow-md transition-transform duration-200 hover:-translate-y-px hover:bg-slate-50"
        >
          <CloseIcon /> Close
        </button>

        <div className="max-h-[88vh] overflow-y-auto">
          <div className="border-b border-black/5 bg-mist/60 p-8 pt-14 sm:p-10 sm:pt-14">
            <div className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent-blue">
              <span className="h-px w-8 bg-accent-blue" />
              PRESS COVERAGE
            </div>
            <h3 id="newscards-modal-title" className="font-display text-3xl font-semibold leading-tight text-ink">
              Maithri Aquatech <span className="italic text-accent-blue">in the news.</span>
            </h3>

            <div className="mt-6 flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => onFilterChange(f)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.04em] transition-colors duration-200 ${
                    filter === f
                      ? 'border-accent-blue bg-blue-50 text-accent-blue'
                      : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-ink'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => (
                <NewsCard key={item.url + item.title} item={item} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="py-10 text-center text-sm text-slate-500">No coverage in this category yet.</p>
            )}

            <p className="mt-8 text-center text-xs text-slate-400">
              {filtered.length} article{filtered.length !== 1 ? 's' : ''} &middot; links open the original publisher in a new tab
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import useReveal from '../../hooks/useReveal.js'
import { articles, categories } from '../../data/mediaHouseArticles.js'
import { tm } from '../../utils/formatTM.jsx'

// Tiny inline icons — no icon package dependency needed.
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Card behaviour mirrors the Maithri Projects case-study cards: the
// card front is a full-bleed photo with a bottom gradient scrim
// showing only the category/date eyebrow and the article title — no
// body-copy preview. The whole card is a button; clicking it opens a
// modal with the full article — headings, paragraphs, pull-quotes and
// inline links — set in a larger, easier-to-read type size.
function ArticleCard({ article, index, onOpen }) {
  const [ref, visible] = useReveal(0.1)
  return (
    <button
      type="button"
      ref={ref}
      onClick={() => onOpen(article)}
      aria-haspopup="dialog"
      aria-label={`Read: ${article.title}`}
      className={`reveal ${visible ? 'is-visible' : ''} group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl border-0 bg-navy-950 p-0 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue`}
      style={{ transitionDelay: `${(index % 3) * 70}ms` }}
    >
      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <span
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(10,15,30,0) 42%, rgba(10,15,30,0.92) 100%)' }}
      />
      <span className="absolute inset-x-0 bottom-0 flex flex-col p-6">
        <span className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-accent-gold">
          {article.category} &middot; {article.date}
        </span>
        <span className="font-display text-2xl leading-snug text-white">{tm(article.title)}</span>
      </span>
      <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-navy-950/55 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.06em] text-white backdrop-blur-sm">
        Read <ArrowIcon />
      </span>
    </button>
  )
}

// Renders one content block of an article inside the modal. Paragraphs
// may contain trusted, author-authored inline HTML (links to sources or
// LinkedIn profiles) so they're rendered with dangerouslySetInnerHTML;
// this content always comes from our own data file, never user input.
function ArticleBlock({ block, i }) {
  if (block.type === 'h') {
    return (
      <h4 key={i} className="mb-3 mt-8 font-display text-lg font-semibold text-ink first:mt-0">
        {tm(block.text)}
      </h4>
    )
  }
  if (block.type === 'quote') {
    return (
      <blockquote
        key={i}
        className="my-6 rounded-2xl p-6"
        style={{ background: 'linear-gradient(160deg, #0b1a33 0%, #14213a 100%)' }}
      >
        <p className="font-display text-[17px] italic leading-relaxed text-white">&ldquo;{tm(block.text)}&rdquo;</p>
        <cite className="mt-2 block text-[13.5px] font-semibold not-italic text-white/65">— {block.cite}</cite>
      </blockquote>
    )
  }
  return (
    <p
      key={i}
      className="mb-4 text-[16px] leading-relaxed text-slate-600 last:mb-0"
      dangerouslySetInnerHTML={{ __html: block.html }}
    />
  )
}

// Rendered via a portal straight into document.body — see the note
// above ArticleCard. The section this opens from carries a scroll-
// reveal `transform`, and any transform on an ancestor turns a
// `position: fixed` descendant into one that's positioned relative to
// that ancestor's box instead of the viewport. Rendering through a
// portal keeps the modal correctly centered over the whole page
// regardless of that (or any future) parent transform.
function ArticleModal({ article, onClose }) {
  if (!article) return null

  return createPortal(
    <div
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-navy-950/60 p-5 backdrop-blur-sm"
      style={{ animation: 'journal-modal-fade 0.2s ease' }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="journal-modal-title"
        className="relative w-full max-w-[680px] overflow-hidden rounded-[20px] bg-white shadow-2xl"
        style={{ animation: 'journal-modal-pop 0.25s cubic-bezier(0.2,0.8,0.3,1)' }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-4 top-4 z-[3] inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold tracking-wide text-ink shadow-md transition-transform duration-200 hover:-translate-y-px hover:bg-slate-50"
        >
          <CloseIcon /> Close
        </button>

        <div className="max-h-[88vh] overflow-y-auto">
          <div className="p-8 pt-14 sm:p-11 sm:pt-14">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-accent-blue">
                {article.category}
              </span>
              <span className="rounded-full bg-navy-950/85 px-3.5 py-1.5 text-xs font-bold text-white">
                {article.date}
              </span>
            </div>

            <h3
              id="journal-modal-title"
              className="mb-1.5 font-display text-[26px] font-semibold leading-tight text-ink"
            >
              {tm(article.title)}
            </h3>
            <p className="mb-1 text-sm font-medium tracking-wide text-slate-400">
              {article.read} &middot; By {article.author}
            </p>
            {article.updated && (
              <p className="mb-6 text-xs font-medium tracking-wide text-slate-400">
                Updated: {article.updated}
              </p>
            )}
            {!article.updated && <div className="mb-6" />}

            <div className="rounded-2xl bg-mist p-6">
              {article.content.map((block, i) => (
                <ArticleBlock block={block} i={i} key={i} />
              ))}
            </div>

            {article.sourceNote && (
              <p className="mt-5 text-xs italic leading-relaxed text-slate-400">{article.sourceNote}</p>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default function Journal() {
  const [active, setActive] = useState('ALL')
  const [ref, visible] = useReveal()
  const [activeArticle, setActiveArticle] = useState(null)

  const filtered =
    active === 'ALL' ? articles : articles.filter((a) => a.category.toUpperCase() === active)

  // Lock background scroll while the modal is open, and allow Escape to close it.
  useEffect(() => {
    if (!activeArticle) return undefined
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveArticle(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeArticle])

  return (
    <section id="journal" ref={ref} className={`reveal ${visible ? 'is-visible' : ''} bg-white py-24`}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent-blue">
              <span className="h-px w-8 bg-accent-blue" />
              ESSAYS & FIELD NOTES
            </div>
            <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              The Maithri <span className="italic text-accent-blue">Journal.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-5 py-2.5 text-xs font-semibold tracking-[0.06em] transition-colors duration-200 ${
                  active === c
                    ? 'border-accent-blue bg-blue-50 text-accent-blue'
                    : 'border-slate-200 text-slate-500 hover:border-slate-300 hover:text-ink'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, i) => (
            <ArticleCard key={article.title} article={article} index={i} onOpen={setActiveArticle} />
          ))}

          {filtered.length === 0 && (
            <p className="col-span-full py-10 text-sm text-slate-500">
              No essays in this category yet — check back soon.
            </p>
          )}
        </div>
      </div>

      <ArticleModal article={activeArticle} onClose={() => setActiveArticle(null)} />

      <style>{`
        @keyframes journal-modal-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes journal-modal-pop {
          from { opacity: 0; transform: translateY(14px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  )
}

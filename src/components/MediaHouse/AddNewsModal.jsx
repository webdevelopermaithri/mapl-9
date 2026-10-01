import { useState } from 'react'
import { createPortal } from 'react-dom'
import useLockBodyScroll from '../../hooks/useLockBodyScroll.js'

const TAGS = ['LATEST NEWS', 'PRESS ROOM', 'FIELD BRIEF']

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function isValidUrl(value) {
  try {
    const u = new URL(value)
    return u.protocol === 'http:' || u.protocol === 'https:'
  } catch {
    return false
  }
}

function deriveSourceFromUrl(url) {
  try {
    const { hostname } = new URL(url)
    const bare = hostname.replace(/^www\./, '').split('.')[0]
    return bare.charAt(0).toUpperCase() + bare.slice(1)
  } catch {
    return 'Source'
  }
}

function deriveInitials(name) {
  const words = name.trim().split(/\s+/).filter(Boolean)
  if (words.length === 0) return 'NEWS'
  if (words.length === 1) return words[0].slice(0, 4).toUpperCase()
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

const EMPTY_FORM = { link: '', title: '', source: '', tag: 'LATEST NEWS', body: '' }

// Portal modal for the "Add News" flow. Asks for the article link
// (required) plus a headline so the resulting card reads well in the
// feed; source name, category, and summary are optional and are
// filled in sensibly from the link when left blank.
export default function AddNewsModal({ open, onClose, onAdd }) {
  const [form, setForm] = useState(EMPTY_FORM)
  const [error, setError] = useState('')

  useLockBodyScroll(open, onClose)

  if (!open) return null

  const handleClose = () => {
    setForm(EMPTY_FORM)
    setError('')
    onClose()
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!isValidUrl(form.link.trim())) {
      setError('Enter a full article link, starting with https://')
      return
    }
    if (!form.title.trim()) {
      setError('Give the update a headline.')
      return
    }

    const source = form.source.trim() || deriveSourceFromUrl(form.link.trim())

    onAdd({
      tag: form.tag,
      outlet: source,
      initials: deriveInitials(source),
      title: form.title.trim(),
      body: form.body.trim() || `Read the full story on ${source}.`,
      date: new Date().toISOString().slice(0, 10),
      meta: 'Just added',
      url: form.link.trim(),
    })

    setForm(EMPTY_FORM)
    setError('')
  }

  return createPortal(
    <div
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose()
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-navy-950/60 p-5 backdrop-blur-sm"
      style={{ animation: 'newscards-modal-fade 0.2s ease' }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-news-modal-title"
        className="relative w-full max-w-[520px] overflow-hidden rounded-[20px] bg-white shadow-2xl"
        style={{ animation: 'newscards-modal-pop 0.25s cubic-bezier(0.2,0.8,0.3,1)' }}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-[3] inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold tracking-wide text-ink shadow-md transition-transform duration-200 hover:-translate-y-px hover:bg-slate-50"
        >
          <CloseIcon /> Close
        </button>

        <div className="max-h-[88vh] overflow-y-auto p-8 pt-14 sm:p-10 sm:pt-14">
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent-blue">
              <span className="h-px w-8 bg-accent-blue" />
              ADD NEWS
            </div>
            <h3 id="add-news-modal-title" className="font-display text-3xl font-semibold leading-tight text-ink">
              Paste a link, add the story.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Drop in the article link and a headline — it'll appear at the top of the live feed right away.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold tracking-wide text-ink">Article link *</span>
              <input
                type="url"
                required
                value={form.link}
                onChange={(e) => setForm((f) => ({ ...f, link: e.target.value }))}
                placeholder="https://example.com/maithri-aquatech-story"
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-blue"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold tracking-wide text-ink">Headline *</span>
              <input
                type="text"
                required
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                placeholder="e.g. Maithri Aquatech wins Water Innovation Award"
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-blue"
              />
            </label>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold tracking-wide text-ink">Source name</span>
                <input
                  type="text"
                  value={form.source}
                  onChange={(e) => setForm((f) => ({ ...f, source: e.target.value }))}
                  placeholder="Auto-detected from link"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-blue"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold tracking-wide text-ink">Category</span>
                <select
                  value={form.tag}
                  onChange={(e) => setForm((f) => ({ ...f, tag: e.target.value }))}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-blue"
                >
                  {TAGS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold tracking-wide text-ink">Short summary</span>
              <textarea
                value={form.body}
                onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
                placeholder="One or two lines about what the story covers (optional)"
                rows={3}
                className="resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-blue"
              />
            </label>

            {error && <p className="text-xs font-medium text-rose-600">{error}</p>}

            <div className="mt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-slate-500 transition-colors hover:text-ink"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-full bg-accent-blue px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
              >
                Add to news feed
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body,
  )
}

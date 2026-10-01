import { useState } from 'react'
import useReveal from '../../hooks/useReveal.js'
import { newsList } from '../../data/mediaHouseNews.js'
import { newsCards } from '../../data/mediaHouseNewsCards.js'
import NewsFeed from './NewsFeed.jsx'
import NewsCardsModal from './NewsCardsModal.jsx'
import AddNewsModal from './AddNewsModal.jsx'
import { tm } from '../../utils/formatTM.jsx'

export default function LatestNews() {
  const [ref, visible] = useReveal()
  const [items, setItems] = useState(() => [...newsCards])
  const [modalOpen, setModalOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [addOpen, setAddOpen] = useState(false)

  const openModal = (f) => {
    setFilter(f)
    setModalOpen(true)
  }

  const handleAddNews = (newItem) => {
    setItems((prev) => [newItem, ...prev])
    setAddOpen(false)
  }

  return (
    <section id="news" ref={ref} className={`reveal ${visible ? 'is-visible' : ''} bg-mist py-24`}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent-blue">
              <span className="h-px w-8 bg-accent-blue" />
              LATEST NEWS
            </div>
            <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              Signals from the field, <span className="italic text-accent-blue">the press room,</span>
              <br />
              <span className="italic text-accent-blue">and the culture of water.</span>
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setAddOpen(true)}
            aria-haspopup="dialog"
            className="flex shrink-0 items-center gap-2 rounded-full bg-accent-blue px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
          >
            Add News Update
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-white" strokeWidth="2">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Left: live scrollable news feed */}
          <NewsFeed items={items} onViewAll={() => openModal('All')} />

          {/* Right stacked list */}
          <div className="flex flex-col gap-6">
            {newsList.map((item) => (
              <div
                key={item.title}
                role="button"
                tabIndex={0}
                onClick={() => openModal(item.tag)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openModal(item.tag)
                  }
                }}
                aria-haspopup="dialog"
                aria-label={`View ${item.tag.toLowerCase()} coverage`}
                className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
              >
                {item.image && (
                  <div className="relative h-32 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />
                    {item.dot && (
                      <span className="absolute right-5 top-5 h-2.5 w-2.5 rounded-full bg-accent-blue ring-2 ring-white" />
                    )}
                    <p
                      className={`absolute bottom-3 left-5 text-xs font-bold tracking-[0.14em] ${
                        item.tag === 'LATEST NEWS' ? 'text-blue-200' : 'text-white/80'
                      }`}
                    >
                      {item.tag}
                    </p>
                  </div>
                )}
                <div className="p-7">
                  {!item.image && (
                    <>
                      {item.dot && (
                        <span className="absolute right-6 top-6 h-2.5 w-2.5 rounded-full bg-accent-blue" />
                      )}
                      <p
                        className={`mb-2 text-xs font-semibold tracking-[0.14em] ${
                          item.tag === 'LATEST NEWS' ? 'text-accent-blue' : 'text-slate-400'
                        }`}
                      >
                        {item.tag}
                      </p>
                    </>
                  )}
                  <h4 className="font-display text-xl font-bold italic leading-snug text-ink">{tm(item.title)}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{tm(item.body)}</p>
                  <p className="mt-4 text-xs text-slate-400">{item.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <NewsCardsModal
        open={modalOpen}
        items={items}
        filter={filter}
        onFilterChange={setFilter}
        onClose={() => setModalOpen(false)}
      />

      <AddNewsModal open={addOpen} onClose={() => setAddOpen(false)} onAdd={handleAddNews} />

      <style>{`
        @keyframes newscards-modal-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes newscards-modal-pop {
          from { opacity: 0; transform: translateY(14px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  )
}

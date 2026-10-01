import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { tm } from '../../utils/formatTM.jsx'

const CONTACT_PATH = '/design-your-water-system#contact'

const categories = [
  {
    tag: 'INDUSTRIAL',
    tagClass: 'bg-white text-ink',
    title: 'Industrial',
    slug: 'industrial',
    copy: 'Large-scale atmospheric water solutions engineered for high-consumption environments.',
    models: ['MEGHDOOT® Signature 2K', 'MEGHDOOT® Signature 2.5K', 'MEGHDOOT® Signature 5K'],
    capacity: '2,000 - 5,000 L / day',
    art: 'from-slate-200 via-slate-300 to-slate-400',
    image: '/images/products/signature-2k-1.jpg',
  },
  {
    tag: 'COMMUNITY',
    tagClass: 'bg-white text-ink',
    title: 'Community',
    slug: 'community',
    copy: 'High-capacity atmospheric water solutions designed for diverse commercial scale environments.',
    models: ['MEGHDOOT® Magnum', 'MEGHDOOT® Magnum Plus'],
    capacity: '500 - 1,000 L / day',
    art: 'from-stone-300 via-stone-400 to-stone-500',
    image: '/images/products/magnum-1.jpg',
  },
  {
    tag: 'COMMERCIAL',
    tagClass: 'bg-white text-ink',
    title: 'Commercial',
    slug: 'commercial',
    copy: 'For offices, schools, labs and cafes. Consistent supply and FSSAI compliant quality.',
    models: ['MEGHDOOT® Classic Plus', 'MEGHDOOT® Premium', 'MEGHDOOT® Premium Plus'],
    capacity: '60 - 250 L / day',
    art: 'from-slate-200 via-slate-300 to-slate-400',
    image: '/images/products/premium-1.png',
  },
  {
    tag: 'RESIDENTIAL',
    tagClass: 'bg-white text-ink',
    title: 'Residential',
    slug: 'residential',
    copy: 'Plug and play home units. Pure drinking water from air with no plumbing needed.',
    models: ['MEGHDOOT® Atom', 'MEGHDOOT® Classic'],
    capacity: '20 - 40 L / day',
    art: 'from-sky-200 via-brand/30 to-brand/60',
    image: '/images/products/atom-1.png',
  },
]

// Both CTAs on every card now share this one blue, matching "Get a Quote" —
// previously "View Products" cycled through a different accent color per
// category (teal / gold / green), which made the row look inconsistent.
const PRIMARY_BTN = 'bg-brand hover:bg-brand-dark'

export default function ProductFamily() {
  const trackRef = useRef(null)
  const cardRefs = useRef([])
  const [active, setActive] = useState(0)

  // Scrolls the track by measuring the target card's actual current
  // position against the track's own viewport rect, then sets `active`
  // immediately. Previously this relied on scrollIntoView() plus an
  // onScroll listener guessing the active index from scroll position —
  // once scrollLeft settled at the far right edge, the "are we at the
  // end" check kept re-latching active to the last slide, so clicking
  // "←" from slide 5 looked like it did nothing. Measuring + scrolling
  // directly removes that ambiguity in both directions.
  const scrollToIndex = (index) => {
    const clamped = Math.max(0, Math.min(categories.length - 1, index))
    const track = trackRef.current
    const card = cardRefs.current[clamped]
    if (!track || !card) return

    const trackRect = track.getBoundingClientRect()
    const cardRect = card.getBoundingClientRect()
    const delta = cardRect.left - trackRect.left
    track.scrollTo({ left: track.scrollLeft + delta, behavior: 'smooth' })
    setActive(clamped)
  }

  // Keeps `active` in sync with manual swipe/drag/trackpad scrolling too
  // (not just the arrow buttons), without fighting the click-driven
  // updates above.
  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    let raf = null
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = null
        const trackLeft = el.scrollLeft
        const atEnd = trackLeft + el.clientWidth >= el.scrollWidth - 1
        if (atEnd) {
          setActive(categories.length - 1)
          return
        }
        let closest = 0
        let closestDist = Infinity
        cardRefs.current.forEach((card, i) => {
          if (!card) return
          const dist = Math.abs(card.offsetLeft - trackLeft)
          if (dist < closestDist) {
            closestDist = dist
            closest = i
          }
        })
        setActive(closest)
      })
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="bg-white pt-10 pb-16 lg:pt-14 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-deep">
              <span className="h-px w-6 bg-teal-deep" /> Product Family
            </p>
            <h2 className="max-w-2xl font-serif text-3xl text-ink sm:text-4xl lg:text-5xl">
              One platform. <em className="italic text-brand">Sky is the limit.</em>
            </h2>
            <p className="mt-4 max-w-xl text-ink/60">
              Five categories, one core technology. Swipe or scroll to explore every range.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xs font-medium tracking-[0.15em] text-ink/40">
              SLIDE {String(active + 1).padStart(2, '0')} / {String(categories.length).padStart(2, '0')}
            </span>
            <div className="flex gap-3">
              <button
                onClick={() => scrollToIndex(active - 1)}
                aria-label="Previous"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition hover:border-brand hover:text-brand disabled:opacity-30"
                disabled={active === 0}
              >
                ←
              </button>
              <button
                onClick={() => scrollToIndex(active + 1)}
                aria-label="Next"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition hover:border-brand hover:text-brand disabled:opacity-30"
                disabled={active === categories.length - 1}
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:mt-12 sm:gap-6"
        >
          {categories.map((cat, i) => (
            <article
              key={cat.title}
              ref={(el) => (cardRefs.current[i] = el)}
              className="flex w-[86%] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-mist bg-white shadow-sm sm:w-[70%] md:w-[55%] lg:w-[46%] lg:flex-row"
            >
              <div
                className={`relative h-44 w-full shrink-0 overflow-hidden bg-gradient-to-br ${cat.art} sm:h-52 lg:h-auto lg:w-2/5`}
              >
                {cat.image && (
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide ${cat.tagClass}`}>
                  {cat.tag}
                </span>
                <span className="absolute bottom-4 left-4 rounded-lg bg-ink/80 px-3 py-1.5 text-xs font-mono text-white">
                  {cat.capacity}
                </span>
              </div>

              <div className="flex w-full flex-col justify-between p-5 sm:p-6 lg:w-3/5">
                <div>
                  <h3 className="font-serif text-xl text-ink sm:text-2xl">{cat.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{cat.copy}</p>

                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-widest text-ink/40">
                    Models in this range
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {cat.models.map((m) => (
                      <li key={m} className="flex items-start gap-2 text-sm text-ink/80">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <span className="break-words">{tm(m)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    to={`/products/${cat.slug}`}
                    className={`w-full rounded-full px-5 py-2.5 text-center text-sm font-semibold text-white transition sm:w-auto ${PRIMARY_BTN}`}
                  >
                    View Products →
                  </Link>
                  <Link
                    to={CONTACT_PATH}
                    className={`w-full rounded-full px-5 py-2.5 text-center text-sm font-semibold text-white transition sm:w-auto ${PRIMARY_BTN}`}
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {categories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to ${cat.title}`}
              className={`h-2 rounded-full transition-all ${
                i === active ? 'w-6 bg-brand' : 'w-2 bg-mist'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
import { useCallback, useEffect, useRef, useState } from 'react'
import { linkedInPosts } from '../../data/linkedInPosts.js'

const latestPost = linkedInPosts[0]
const SLIDES = latestPost.slides
const N = SLIDES.length
const AUTO_MS = 3800
const SLIDE_MS = 700

// Track = [last clone, ...slides, first clone]; position 1 is the first real slide.
const TRACK = [SLIDES[N - 1], ...SLIDES, SLIDES[0]]

function LinkedInCarousel() {
  const [pos, setPos] = useState(1)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)
  const busy = useRef(false)
  const settleTimer = useRef(null)
  const touchX = useRef(null)

  // Preload every slide so nothing pops in while scrolling.
  useEffect(() => {
    SLIDES.forEach((s) => {
      const img = new Image()
      img.src = s.src
    })
  }, [])

  // After a slide finishes moving, silently jump from a clone to the real slide.
  const settle = useCallback((p) => {
    if (p === 0) {
      setAnimate(false)
      setPos(N)
    } else if (p === N + 1) {
      setAnimate(false)
      setPos(1)
    }
    busy.current = false
  }, [])

  const moveTo = useCallback(
    (target) => {
      if (busy.current) return
      busy.current = true
      setAnimate(true)
      setPos(target)
      clearTimeout(settleTimer.current)
      settleTimer.current = setTimeout(() => settle(target), SLIDE_MS + 60)
    },
    [settle],
  )

  const next = useCallback(() => moveTo(pos + 1), [moveTo, pos])
  const prev = useCallback(() => moveTo(pos - 1), [moveTo, pos])

  useEffect(() => () => clearTimeout(settleTimer.current), [])

  // Auto-advance (paused on hover/focus, off for reduced-motion users).
  useEffect(() => {
    if (paused) return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = setInterval(() => {
      if (!document.hidden) moveTo(pos + 1)
    }, AUTO_MS)
    return () => clearInterval(id)
  }, [paused, pos, moveTo])

  const active = (pos - 1 + N) % N

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)()
  }

  return (
    <div
      className="group relative mx-auto w-full max-w-[640px] lg:ml-auto lg:mr-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-gold/60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
          </span>
          LATEST ON LINKEDIN
        </span>
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-brand" aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1 4.98 2.12 4.98 3.5ZM.4 8.24H4.6V23H.4V8.24ZM8.34 8.24H12.36V10.1H12.42C12.98 9.05 14.33 7.95 16.36 7.95C20.6 7.95 21.4 10.72 21.4 14.32V23H17.2V15.14C17.2 13.5 17.17 11.4 14.92 11.4C12.64 11.4 12.29 13.19 12.29 15.02V23H8.34V8.24Z" />
        </svg>
      </div>

      <div
        className="relative aspect-square w-full overflow-hidden rounded-[1.75rem] bg-ink shadow-2xl shadow-ink/20"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label="Latest LinkedIn post slides"
      >
        <div
          className="flex h-full w-full"
          style={{
            transform: `translate3d(-${pos * 100}%, 0, 0)`,
            transition: animate ? `transform ${SLIDE_MS}ms cubic-bezier(0.65, 0, 0.35, 1)` : 'none',
            willChange: 'transform',
          }}
        >
          {TRACK.map((s, i) => (
            <div key={i} className="h-full w-full flex-none">
              <img
                src={s.src}
                alt={s.alt}
                draggable={false}
                decoding="async"
                className="h-full w-full select-none object-cover"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/55 text-white opacity-0 backdrop-blur transition-opacity hover:bg-ink/80 focus:opacity-100 group-hover:opacity-100"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="2.2">
            <path d="m15 5-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/55 text-white opacity-0 backdrop-blur transition-opacity hover:bg-ink/80 focus:opacity-100 group-hover:opacity-100"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="2.2">
            <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <a
          href={latestPost.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand/70"
        >
          Read the full post on LinkedIn
          <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current" fill="none" strokeWidth="2">
            <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => moveTo(i + 1)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? 'w-6 bg-gold' : 'w-2 bg-ink/25 hover:bg-ink/45'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function MediaHouseHero() {
  return (
    <section className="relative overflow-hidden bg-mist">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 pb-20 pt-16 md:px-10 lg:grid-cols-2 lg:gap-8 lg:pt-24">
        {/* Left: copy */}
        <div>
          <div className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold">
            <span className="h-px w-8 bg-gold" />
            MAITHRI MEDIA HOUSE
          </div>

          <h1 className="font-serif text-[3.4rem] leading-[1.05] text-ink sm:text-[4.2rem]">
            The story of water,
            <br />
            <span className="italic text-brand">told in full.</span>
          </h1>

          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink/60">
            Explore conversations around water, innovations, novelty and
            industrial recognitions.
          </p>
        </div>

        {/* Right: latest LinkedIn post carousel */}
        <LinkedInCarousel />
      </div>
    </section>
  )
}

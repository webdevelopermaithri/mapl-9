import './ProjectsPage.css'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowIcon } from './MetaIcons'

// Reusable proof carousel: a single wide slide at a time, name already
// baked into the photo, stepped through with prev/next arrows and dot
// indicators. Auto-advances, pauses on hover/focus. Used for both the
// Private Sector and Public Sector sections.
export default function SectorCarousel({ eyebrow, titlePlain, titleEm, slides, variant, id }) {
  const [index, setIndex] = useState(0)
  const total = slides.length
  const timerRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback((i) => {
    setIndex(((i % total) + total) % total)
  }, [total])

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (isPaused) return undefined
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [isPaused, total])

  return (
    <section
      id={id}
      className={`sector-carousel${variant ? ` sector-carousel--${variant}` : ''}`}
      aria-roledescription="carousel"
      aria-label={`${eyebrow} case studies`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="section-inner">
        <div className="eyebrow eyebrow--dark">
          {eyebrow}
        </div>
        <h2 className="sector-carousel__title">
          {titlePlain} <em>{titleEm}</em>
        </h2>
      </div>

      <div className="sector-carousel__stage">
        <button
          type="button"
          className="sector-carousel__arrow sector-carousel__arrow--prev"
          onClick={prev}
          aria-label="Previous slide"
        >
          <ArrowIcon />
        </button>

        <div className="sector-carousel__viewport">
          {slides.map((s, i) => (
            <figure
              className={`sector-carousel__slide${i === index ? ' is-active' : ''}`}
              key={s.id}
              aria-hidden={i === index ? undefined : true}
            >
              <img
                className="sector-carousel__image"
                src={s.image}
                alt={s.title}
              />
            </figure>
          ))}
        </div>

        <button
          type="button"
          className="sector-carousel__arrow sector-carousel__arrow--next"
          onClick={next}
          aria-label="Next slide"
        >
          <ArrowIcon />
        </button>
      </div>

      <div className="sector-carousel__dots" role="tablist" aria-label="Choose slide">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}: ${s.title}`}
            className={`sector-carousel__dot${i === index ? ' is-active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  )
}

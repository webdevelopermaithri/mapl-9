import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import "./PeopleCarousel.css";

const AUTO_PLAY_MS = 4500;
const SWIPE_THRESHOLD = 40;

// One-person-at-a-time carousel used by both the Management and Advisors
// sections on the About Us (Philosophy) page. Exactly one card is visible
// at every breakpoint; the < / > arrows (and dots) slide to the next /
// previous person, it auto-advances on a timer (pausing on hover / touch /
// focus so visitors can actually read), and it responds to swipe gestures
// on touch devices. Every card shares the same footprint at a given
// breakpoint via a CSS grid stack.
//
// By default the row auto-sizes to the tallest bio in the whole list,
// which leaves dead space under every shorter bio. Passing
// `dynamicHeight` measures the active card and animates the row to that
// card's own height instead, so short bios no longer sit inside a box
// sized for the longest one.
export default function PeopleCarousel({ people, dynamicHeight = false }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [bioExpanded, setBioExpanded] = useState(false);
  const total = people.length;
  const cardRefs = useRef([]);
  const [trackHeight, setTrackHeight] = useState(null);

  const measure = useCallback(() => {
    if (!dynamicHeight) return;
    const el = cardRefs.current[index];
    if (el) setTrackHeight(el.offsetHeight);
  }, [dynamicHeight, index]);

  // Re-measure whenever the active card, its expanded state, or the
  // viewport width changes (mobile clamps the bio to fewer lines, so its
  // natural height is different from the desktop/tablet layout).
  useLayoutEffect(() => {
    measure();
  }, [measure, bioExpanded]);

  useEffect(() => {
    if (!dynamicHeight) return undefined;
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [dynamicHeight, measure]);

  const goPrev = useCallback(() => setIndex((p) => (p - 1 + total) % total), [total]);
  const goNext = useCallback(() => setIndex((p) => (p + 1) % total), [total]);

  useEffect(() => {
    if (isPaused || total <= 1) return undefined;
    const id = setInterval(() => setIndex((p) => (p + 1) % total), AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, [isPaused, total]);

  // Reset to a valid slide if the underlying people list ever changes size.
  useEffect(() => {
    setIndex((p) => (total ? p % total : 0));
  }, [total]);

  // Collapse the bio again whenever a different person comes into view,
  // so "Read more" always starts fresh instead of staying expanded.
  useEffect(() => {
    setBioExpanded(false);
  }, [index]);

  const touchStartX = useRef(null);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) goPrev();
    else if (delta < -SWIPE_THRESHOLD) goNext();
    touchStartX.current = null;
  };

  if (!total) return null;

  return (
    <div className="pc-wrap">
      <div
        className="pc-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <button
          type="button"
          className="pc-arrow pc-arrow--prev"
          onClick={goPrev}
          aria-label="Previous person"
        >
          &lsaquo;
        </button>

        <div
          className="pc-viewport"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={`pc-track${dynamicHeight ? " pc-track--dynamic" : ""}`}
            style={dynamicHeight && trackHeight ? { height: trackHeight } : undefined}
          >
            {people.map((person, i) => {
              const isActive = i === index;

              return (
                <article
                  className={`pc-card${isActive ? " is-active" : ""}`}
                  key={person.name}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  style={{ transform: `translateX(${(i - index) * 100}%)` }}
                  aria-hidden={!isActive}
                >
                  <div className="pc-photo">
                    <img src={person.image} alt={person.name} />
                  </div>

                  <h3 className="pc-name">{person.name}</h3>
                  <span className="pc-role">{person.role}</span>

                  <p className={`pc-bio${isActive && bioExpanded ? " is-expanded" : ""}`}>
                    {person.bio}
                  </p>

                  {/* Only shown (via CSS) on mobile, where the bio is clamped
                      to a few lines — desktop/laptop always shows the full
                      bio and never renders this button visually. */}
                  <button
                    type="button"
                    className="pc-readmore"
                    aria-expanded={isActive ? bioExpanded : false}
                    onClick={() => setBioExpanded((e) => !e)}
                  >
                    {isActive && bioExpanded ? "Read less" : "Read more"}
                  </button>
                </article>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="pc-arrow pc-arrow--next"
          onClick={goNext}
          aria-label="Next person"
        >
          &rsaquo;
        </button>
      </div>

      {total > 1 && (
        <div className="pc-dots" role="tablist" aria-label="Person selector">
          {people.map((person, i) => (
            <button
              key={person.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to ${person.name}`}
              className={`pc-dot${i === index ? " is-active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { awards } from '../../data/awards.js';

export default function AwardsGrid() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateArrows);
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, []);

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 300, behavior: 'smooth' });
  };

  return (
    <section className="il-recognition">
      <div className="il-section il-awards-split">
        <div className="il-awards-left">
          <span className="eyebrow" style={{ color: 'var(--blue-600)' }}>
            Recognition
          </span>
          <h2 className="il-h2">
            A decade of <span className="italic" style={{ color: 'var(--blue-600)' }}>quiet acknowledgement.</span>
          </h2>
          <p className="il-sub">We don&apos;t chase awards. But the world has been kind.</p>
        </div>

        <div className="il-awards-right">
          <div className="il-awards-carousel-wrap">
            <button
              type="button"
              className="il-awards-arrow il-awards-arrow--prev"
              onClick={() => scrollByCards(-1)}
              disabled={!canScrollLeft}
              aria-label="Previous award"
            >
              ‹
            </button>

            <div className="il-awards-track" ref={trackRef}>
              {awards.map((award) => (
                <div className="il-award-slide" key={award.title}>
                  <div
                    className="il-award-image"
                    style={
                      award.image
                        ? undefined
                        : { background: `linear-gradient(150deg, ${award.color} 0%, rgba(0,0,0,0.35) 100%)` }
                    }
                  >
                    {award.image ? (
                      <img
                        src={award.image}
                        alt={award.title}
                        className="il-award-photo"
                      />
                    ) : (
                      <span className="il-award-watermark">{award.tag}</span>
                    )}
                    <div className="il-award-caption">
                      <div className="il-award-title">{award.title}</div>
                      <div className="il-award-sub">{award.sub}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="il-awards-arrow il-awards-arrow--next"
              onClick={() => scrollByCards(1)}
              disabled={!canScrollRight}
              aria-label="Next award"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

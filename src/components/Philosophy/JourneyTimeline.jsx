import { useState } from "react";
import { journey } from "../../data/philosophy-content";
import { tm } from "../../utils/formatTM.jsx";
import "./JourneyTimeline.css";

export default function JourneyTimeline() {
  const [active, setActive] = useState(0);
  const current = journey.milestones[active];

  return (
    <section className="journey">
      <div className="phi-container">
        <span className="eyebrow journey-eyebrow">{journey.eyebrow}</span>
        <h2 className="journey-title">
          {journey.titlePlain} <span className="italic-serif journey-accent">{journey.titleItalic}</span>
        </h2>

        <div className="journey-showcase">
          <div className="journey-showcase-year">{current.year}</div>

          <ul className="journey-checklist">
            {current.points.map((point, i) => (
              <li key={i}>
                <span className="journey-check">✓</span>
                <span>{tm(point)}</span>
              </li>
            ))}
          </ul>

          <div className="journey-image-panel">
            {current.image ? (
              <img
                key={current.year}
                className="journey-image-photo"
                src={current.image}
                alt={`Maithri Aquatech milestone — ${current.year}`}
              />
            ) : (
              <span className="journey-image-year">{current.year}</span>
            )}
          </div>
        </div>

        <div className="journey-track">
          <div className="journey-track-line" />
          {journey.milestones.map((item, i) => (
            <button
              type="button"
              key={item.year}
              className={`journey-track-stop ${i === active ? "is-active" : ""} ${i < active ? "is-passed" : ""}`}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
            >
              {i === active && (
                <span className="journey-track-popup">
                  {item.image ? (
                    <img src={item.image} alt={`${item.year} milestone`} />
                  ) : (
                    <span className="journey-track-popup-empty" aria-hidden="true" />
                  )}
                  <span className="journey-track-popup-arrow" />
                </span>
              )}
              <span className="journey-track-dot" />
              <span className="journey-track-label">{item.year}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

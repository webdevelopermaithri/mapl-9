import useScrollReveal from "../../hooks/useScrollReveal";
import images from "../../config/images";
import { manifesto } from "../../data/philosophy-content";
import BubbleField from "../common/BubbleField";
import "./ManifestoSection.css";

function ManifestoCard({ card, index }) {
  const ref = useScrollReveal();

  return (
    <div
      className={`manifesto-card reveal reveal-delay-${index + 1}`}
      ref={ref}
    >
      <img
        src={images[card.imageKey]}
        alt={card.title}
      />

      <div className="manifesto-scrim" />

      <div className="manifesto-copy">
        <span>{card.kicker}</span>
        <strong>{card.title}</strong>
      </div>
    </div>
  );
}

export default function ManifestoSection() {
  const headRef = useScrollReveal();

  return (
    <section className="manifesto">
      {/* Ambient bubble particles rising over the gradient — the same
          background treatment as the Engineering Specs section on the
          Technology page and the Impact Atlas section, so every dark
          section on the site shares one consistent visual language. */}
      <BubbleField count={24} />

      <div className="phi-container manifesto-content">
        <div className="reveal" ref={headRef}>
          <span className="eyebrow manifesto-eyebrow">
            {manifesto.eyebrow}
          </span>

          <h2 className="manifesto-title">
            {manifesto.titlePlain}{" "}
            <span className="italic-serif manifesto-accent">
              {manifesto.titleItalic}
            </span>
          </h2>
        </div>

        <div className="manifesto-grid">
          {manifesto.cards.map((card, i) => (
            <ManifestoCard
              card={card}
              index={i}
              key={card.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
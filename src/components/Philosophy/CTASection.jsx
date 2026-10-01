import { Link } from "react-router-dom";
import useScrollReveal from "../../hooks/useScrollReveal";
import { cta } from "../../data/philosophy-content";
import bubblesVideo from "../../assets/shared/bubbles-bg.mp4";
import "./CTASection.css";

export default function CTASection() {
  const ref = useScrollReveal();
  return (
    <section className="cta">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="cta-bg-video"
      >
        <source src={bubblesVideo} type="video/mp4" />
      </video>
      <div className="cta-bubbles" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>
      <div className="phi-container cta-inner reveal" ref={ref}>
        <span className="eyebrow cta-eyebrow">{cta.eyebrow}</span>
        <h2 className="cta-title">
          {cta.titlePlain} <span className="italic-serif cta-accent">{cta.titleItalic}</span>
        </h2>
        <p className="cta-body">{cta.body}</p>
        <Link to="/design-your-water-system#contact" className="cta-button">
          {cta.buttonLabel}
          <span className="cta-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}

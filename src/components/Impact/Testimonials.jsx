import { testimonials } from '../../data/testimonials.js';

export default function Testimonials() {
  return (
    <section className="il-testimonials">
      <div className="il-section">
        <span className="eyebrow" style={{ color: 'var(--blue-600)' }}>
          Voices
        </span>
        <h2 className="il-h2">
          The culture <span className="italic" style={{ color: 'var(--blue-600)' }}>we created.</span>
        </h2>

        <div className="il-quotes-grid">
          {testimonials.map((t) => (
            <div className="il-quote-card" key={t.attribution}>
              <div className="il-quote-mark">&ldquo;</div>
              <p className="il-quote-text">{t.quote}</p>
              <div className="il-quote-attr">{t.attribution}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

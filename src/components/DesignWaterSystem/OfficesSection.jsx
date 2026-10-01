import offices from '../../data/offices';
import './OfficesSection.css';

function OfficesSection() {
  return (
    <section className="offices-section section" aria-labelledby="offices-heading">
      <span className="eyebrow">Offices</span>
      <h2 id="offices-heading" className="offices-heading">
        A <span className="italic-accent">global</span> presence.
      </h2>

      <div className="offices-grid">
        {offices.map((office) => (
          <div className="office-card" key={office.city}>
            <p className="office-tag">{office.tag}</p>
            <h3 className="office-city">{office.city}</h3>
            {office.lines.map((line) => (
              <p className="office-line" key={line}>{line}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default OfficesSection;

import useScrollReveal from "../../hooks/useScrollReveal";
import { values } from "../../data/philosophy-content";
import Icon from "./Icons";
import "./ValuesSection.css";

function ValueCard({ item, index }) {
  const ref = useScrollReveal();
  return (
    <div className={`value-card reveal reveal-delay-${(index % 4) + 1}`} ref={ref}>
      <div className="value-head">
        <div className="value-icon">
          <Icon name={item.icon} />
        </div>
        <h3>{item.title}</h3>
      </div>
      <p>{item.desc}</p>
    </div>
  );
}

export default function ValuesSection() {
  const headRef = useScrollReveal();
  return (
    <section className="values">
      <div className="phi-container">
        <div className="reveal" ref={headRef}>
          <span className="eyebrow values-eyebrow">{values.eyebrow}</span>
          <h2 className="values-title">
            {values.titlePlain} <span className="italic-serif values-accent">{values.titleItalic}</span>
          </h2>
        </div>

        <div className="values-grid">
          {values.items.map((item, i) => (
            <ValueCard item={item} index={i} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

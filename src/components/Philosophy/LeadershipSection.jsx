import useScrollReveal from "../../hooks/useScrollReveal";
import { leadership } from "../../data/philosophy-content";
import { tm } from "../../utils/formatTM.jsx";
import "./LeadershipSection.css";

function PersonCard({ person, index }) {
  const ref = useScrollReveal();
  return (
    <div className={`person-card reveal reveal-delay-${(index % 3) + 1}`} ref={ref}>
      <div className="person-avatar" style={{ background: person.gradient }}>
        <span>{person.initials}</span>
      </div>
      <h3>{person.name}</h3>
      <span className="person-role">{person.role}</span>
      <p>{tm(person.bio)}</p>
    </div>
  );
}

export default function LeadershipSection() {
  const headRef = useScrollReveal();
  return (
    <section className="leadership">
      <div className="phi-container">
        <div className="reveal" ref={headRef}>
          <span className="eyebrow leadership-eyebrow">{leadership.eyebrow}</span>
          <h2 className="leadership-title">
            {leadership.titlePlain} <span className="italic-serif leadership-accent">{leadership.titleItalic}</span>
          </h2>
          <p className="leadership-body">{leadership.body}</p>
        </div>

        <div className="leadership-grid">
          {leadership.people.map((person, i) => (
            <PersonCard person={person} index={i} key={person.initials} />
          ))}
        </div>
      </div>
    </section>
  );
}

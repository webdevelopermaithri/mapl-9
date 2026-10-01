import './ProjectsPage.css'
import { projectsCta } from "../../data/projectsContent";
import { ArrowIcon } from "./MetaIcons";
import BubbleField from "../common/BubbleField.jsx";

export default function ProjectsCta() {
  return (
    <section
      className="projects-cta"
      style={{ background: 'linear-gradient(180deg, #060e1c 0%, #0b1f3a 100%)' }}
    >

      {/* Rising bubble field — same background used on the Technology
          page's "Built for every climate" engineering section */}
      <BubbleField count={24} />

      {/* Floating bubbles */}
      {Array.from({ length: 7 }).map((_, i) => (
        <span
          key={i}
          className={`floating-bubble floating-bubble--dot floating-bubble--dot-${i + 1}`}
          aria-hidden="true"
        />
      ))}

      {/* Content */}
      <div className="projects-cta__inner">
        <div
          className="eyebrow eyebrow--light"
          style={{ justifyContent: "center" }}
        >
          {projectsCta.eyebrow}
        </div>

        <h2 className="projects-cta__title">
          {projectsCta.titlePlain}
          <em>{projectsCta.titleEm}</em>
        </h2>

        <p className="projects-cta__body">
          {projectsCta.body}
        </p>

        <a className="btn btn--secondary" href={projectsCta.cta.href}>
          {projectsCta.cta.label}
          <ArrowIcon />
        </a>
      </div>

    </section>
  );
}
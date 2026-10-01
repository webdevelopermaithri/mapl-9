import { ADVISORS } from "./data/advisors";
import PeopleCarousel from "./PeopleCarousel";
import "./AdvisorsSection.css";

// Reuses the same "THE ADVISORS" people carousel + data that powers the
// Home hero carousel (src/heroCarousel/components/sections/AdvisorsSection.jsx),
// restyled to sit as a standalone section on the About Us (Philosophy) page.
export default function AdvisorsSection() {
  return (
    <section className="phi-people phi-advisors">
      <div className="phi-container phi-people-head">
        <span className="eyebrow phi-people-eyebrow">Advisory board</span>
        <h2 className="phi-people-title">
          The <span className="italic-serif phi-people-accent">Advisors.</span>
        </h2>
      </div>

      <PeopleCarousel people={ADVISORS} dynamicHeight />
    </section>
  );
}

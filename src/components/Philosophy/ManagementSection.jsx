import { MANAGEMENT } from "./data/management";
import PeopleCarousel from "./PeopleCarousel";
import "./ManagementSection.css";

// Reuses the same "THE MANAGEMENT" people carousel + data that powers the
// Home hero carousel (src/heroCarousel/components/sections/ManagementSection.jsx),
// restyled to sit as a standalone section on the About Us (Philosophy) page.
export default function ManagementSection() {
  return (
    <section className="phi-people phi-management">
      <div className="phi-container phi-people-head">
        <span className="eyebrow phi-people-eyebrow">Leadership</span>
        <h2 className="phi-people-title">
          The <span className="italic-serif phi-people-accent">Management.</span>
        </h2>
      </div>

      <PeopleCarousel people={MANAGEMENT} />
    </section>
  );
}

import useScrollReveal from "../../hooks/useScrollReveal";
import { story } from "../../data/philosophy-content";
import { tm } from "../../utils/formatTM.jsx";
import "./StorySection.css";

export default function StorySection() {
  const ref = useScrollReveal();

  return (
    <section className="story">
      <div className="phi-container story-inner reveal" ref={ref}>
        <span className="eyebrow story-eyebrow">{story.eyebrow}</span>
        <h2 className="story-title">
          {story.titlePlain1} <span className="italic-serif story-accent">{story.titleItalic}</span>{" "}
          {story.titlePlain2}
        </h2>
        <p className="story-body">{tm(story.body)}</p>
      </div>
    </section>
  );
}

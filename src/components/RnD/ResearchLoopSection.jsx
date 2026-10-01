import React from "react";
import Eyebrow from "./common/Eyebrow";
import Blob from "./common/Blob";
import { LOOP_STEPS } from "../../data/rndData";
import { tm } from "../../utils/formatTM.jsx";

export default function ResearchLoopSection() {
  return (
    <section id="research-loop" style={{ position: "relative", padding: "40px 8vw", background: "#EFF5FB", overflow: "hidden" }}>
      <Blob top={40} left="52%" size={50} opacity={0.55} />
      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative" }}>
        <Eyebrow>RESEARCH LOOP</Eyebrow>
        <h2 className="whero-serif" style={{ fontSize: "clamp(32px, 3.8vw, 50px)", color: "#0B2545", fontWeight: 600, margin: 0, lineHeight: 1.12 }}>
          From portfolio idea to <span style={{ fontStyle: "italic", color: "#1E56A0", fontWeight: 500 }}>deployable system.</span>
        </h2>
        <p style={{ fontSize: 16.5, color: "#5A6779", lineHeight: 1.55, maxWidth: 660, marginTop: 14 }}>
          Each R&amp;D path is tested against the same practical question: can it generate
          reliably, purify consistently, reduce dependency and scale in the field?
        </p>

        <div
          style={{
            marginTop: 28,
            background: "#fff",
            borderRadius: 20,
            border: "1px solid #EAEFF6",
            boxShadow: "0 24px 50px -30px rgba(11,37,69,0.2)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
          }}
        >
          {LOOP_STEPS.map((s, i) => (
            <div
              key={s.n}
              style={{ padding: "36px 30px", borderRight: i < LOOP_STEPS.length - 1 ? "1px solid #EEF2F8" : "none" }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, color: "#1E56A0", marginBottom: 14 }}>{s.n}</div>
              <h4 className="whero-serif" style={{ fontSize: 22, color: "#0B2545", fontWeight: 600, margin: "0 0 12px 0" }}>
                {s.title}
              </h4>
              <p style={{ fontSize: 14, color: "#5A6779", lineHeight: 1.6, margin: 0 }}>{tm(s.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

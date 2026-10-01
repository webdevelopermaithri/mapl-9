import React from "react";
import { useNavigate } from "react-router-dom";
import Eyebrow from "./common/Eyebrow";
import { CATEGORIES } from "../../data/rndData";

// Each card's title maps 1:1 to a route already defined in App.jsx
// (Water -> /rnd/water, Healthcare -> /rnd/healthcare, ...), so clicking
// any card here takes you straight to that category's dedicated page —
// the same page reachable from the Navbar's R&D dropdown.
function categoryToPath(title) {
  return `/rnd/${title.toLowerCase()}`;
}

export default function PortfolioSection() {
  const navigate = useNavigate();

  return (
    <>
      <section style={{ padding: "50px 8vw 40px", maxWidth: 1440, margin: "0 auto" }}>
        <Eyebrow>R&amp;D PORTFOLIO</Eyebrow>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 30 }}>
          <h2
            className="whero-serif"
            style={{ fontSize: "clamp(36px, 4.2vw, 56px)", lineHeight: 1.08, color: "#0B2545", margin: 0, fontWeight: 600, maxWidth: 640 }}
          >
            Explore the research portfolio
            <br />
            <span style={{ fontStyle: "italic", color: "#1E56A0", fontWeight: 500 }}>by focus area.</span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#5A6779", maxWidth: 420, marginBottom: 6 }}>
            The detailed portfolio now lives on dedicated category pages. Choose a focus
            area to see the relevant R&amp;D concepts, metrics, applications and deployment
            notes from the research brief.
          </p>
        </div>
      </section>

      <section style={{ padding: "10px 8vw 60px", maxWidth: 1440, margin: "0 auto" }}>
        <div className="rnd-cat-grid">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="cat-card"
              role="button"
              tabIndex={0}
              onClick={() => navigate(categoryToPath(cat.title))}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") navigate(categoryToPath(cat.title));
              }}
              style={{ "--accent": cat.accent, borderRadius: 18, padding: "24px 20px", cursor: "pointer" }}
            >
              <div className="whero-eyebrow" style={{ fontSize: 11, fontWeight: 700, color: cat.accent, marginBottom: 16 }}>
                {cat.tracks}
              </div>
              <h3 className="whero-serif" style={{ fontSize: 24, color: "#0B2545", margin: "0 0 10px 0", fontWeight: 600 }}>
                {cat.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#5A6779", margin: "0 0 22px 0", minHeight: 64 }}>
                {cat.desc}
              </p>
              <div
                className="cat-open"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12.5, fontWeight: 700, letterSpacing: "0.05em", color: cat.accent }}
              >
                OPEN CATEGORY <span aria-hidden>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

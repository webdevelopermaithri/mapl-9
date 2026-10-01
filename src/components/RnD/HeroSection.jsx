import React from "react";
import { useNavigate } from "react-router-dom";
import Eyebrow from "./common/Eyebrow";
import applicationsImg from "../../assets/rnd/maithri-2-0-applications.png";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="rnd-hero"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
        overflow: "hidden",
        background: "linear-gradient(180deg, #EFF5FB 0%, #E7F0FA 100%)",
        padding: "56px 0",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        .rnd-hero-row {
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          gap: 2vw;
          flex-wrap: wrap;
        }
        .rnd-hero-copy {
          width: 48%;
          min-width: 320px;
          flex: 1 1 380px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 5vw;
          z-index: 2;
        }
        .rnd-hero-art {
          width: 52%;
          flex: 1 1 300px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          padding: 0 5vw;
        }
        @media (max-width: 900px) {
          .rnd-hero { padding: 40px 0; min-height: auto !important; }
          .rnd-hero-row { flex-direction: column-reverse; gap: 32px; }
          .rnd-hero-copy, .rnd-hero-art { width: 100%; min-width: 0; padding: 0 6%; text-align: left; }
        }
      `}</style>
      <div className="rnd-hero-row">
        {/* Left: headline column */}
        <div className="rnd-hero-copy">
          <Eyebrow>R&amp;D INNOVATIONS 2026</Eyebrow>

          <h1
            className="whero-serif"
            style={{ fontSize: "clamp(38px, 4.4vw, 62px)", lineHeight: 1.08, color: "#0B2545", margin: 0, fontWeight: 600, maxWidth: 560 }}
          >
            Harvesting water
            <br />
            <span style={{ fontStyle: "italic", color: "#1E56A0", fontWeight: 500 }}>systems in motion.</span>
          </h1>

          <p style={{ marginTop: 28, fontSize: 17, lineHeight: 1.7, color: "#3C4A5C", maxWidth: 520 }}>
            Maithri&rsquo;s R&amp;D portfolio expands atmospheric water harvesting across
            hot-dry climates, desiccant systems, healthcare and lab-grade water, green
            hydrogen, recovery loops, horticulture and carbon-aware air-to-water quality.
          </p>

          <div style={{ marginTop: 34, display: "flex", gap: 14, flexWrap: "wrap", maxWidth: 520 }}>
            <button
              type="button"
              onClick={() => navigate("/rnd/all-portfolio")}
              className="cta-btn"
              style={{
                background: "#1E56A0",
                color: "#fff",
                border: "none",
                borderRadius: 999,
                padding: "14px 26px",
                fontSize: 15,
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
              }}
            >
              View Portfolio <span aria-hidden>→</span>
            </button>
            <button
              type="button"
              onClick={() => navigate("/design-your-water-system")}
              className="cta-btn"
              style={{
                background: "#1E56A0",
                color: "#fff",
                border: "none",
                borderRadius: 999,
                padding: "14px 26px",
                fontSize: 15,
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
              }}
            >
              Discuss a Pilot <span aria-hidden>→</span>
            </button>
          </div>
        </div>

        {/* Right: Maithri 2.0 applications diagram, large, centered, no
            background card — the image floats directly on the hero. */}
        <div className="rnd-hero-art">
          <img
            src={applicationsImg}
            alt="Maithri 2.0 — applications across communities, healthcare, industry, data centres, and more"
            style={{
              width: "100%",
              maxWidth: 640,
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 30px 60px rgba(11,37,69,0.22))",
            }}
          />
        </div>
      </div>
    </section>
  );
}

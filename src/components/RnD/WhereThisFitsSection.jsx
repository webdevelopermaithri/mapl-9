import React from "react";
import Eyebrow from "./common/Eyebrow";
import { FIT_CARDS } from "../../data/rndData";
import waveImg from "../../assets/rnd/water-wave-texture.png";

export default function WhereThisFitsSection() {
  return (
    <section style={{ padding: "70px 8vw", background: "#fff" }}>
      <style>{`
        .wtf-grid {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(min(280px, 100%), 1fr) minmax(min(320px, 100%), 1.15fr);
          gap: 60px;
          align-items: center;
        }
        .wtf-image {
          border-radius: 22px;
          overflow: hidden;
          height: 560px;
          box-shadow: 0 30px 60px -30px rgba(11,37,69,0.3);
        }
        @media (max-width: 860px) {
          .wtf-grid { grid-template-columns: 1fr; gap: 32px; }
          .wtf-image { height: 320px; }
        }
        @media (max-width: 480px) {
          .wtf-image { height: 240px; }
        }
      `}</style>
      <div className="wtf-grid">
        <div className="wtf-image">
          <img
            src={waveImg}
            alt="Water in motion"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div>
          <Eyebrow>WHERE THIS FITS</Eyebrow>
          <h2 className="whero-serif" style={{ fontSize: "clamp(30px, 3.4vw, 46px)", color: "#0B2545", fontWeight: 600, margin: 0, lineHeight: 1.14 }}>
            Designed for pilots with <span style={{ fontStyle: "italic", color: "#1E56A0", fontWeight: 500 }}>real operational value.</span>
          </h2>
          <p style={{ fontSize: 15.5, color: "#5A6779", lineHeight: 1.7, marginTop: 20, maxWidth: 520 }}>
            The portfolio is built for practical integration: decentralized water
            generation, high-purity feedwater, reclaimed losses and resilient
            infrastructure.
          </p>

          <div style={{ marginTop: 30, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: 16 }}>
            {FIT_CARDS.map((f) => (
              <div key={f.title} className="fit-card" style={{ padding: "22px 22px" }}>
                <h5 className="whero-serif" style={{ fontSize: 18, color: "#0B2545", fontWeight: 600, margin: "0 0 10px 0", lineHeight: 1.25 }}>
                  {f.title}
                </h5>
                <p style={{ fontSize: 13.5, color: "#5A6779", lineHeight: 1.55, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

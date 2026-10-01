import React from "react";
import Eyebrow from "./common/Eyebrow";
import { PUBLICATIONS } from "../../data/rndData";
import publicationAwgCooling from "../../assets/rnd/publication-awg-cooling.png";
import publicationDesiccantAwh from "../../assets/rnd/publication-desiccant-awh.png";

const IMAGES = {
  "publication-awg-cooling": publicationAwgCooling,
  "publication-desiccant-awh": publicationDesiccantAwh,
};

export default function PublicationsSection() {
  return (
    <section id="publications" style={{ padding: "40px 8vw 30px", background: "#EFF5FB", scrollMarginTop: 90 }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <Eyebrow>PUBLICATIONS</Eyebrow>
        <h2
          className="whero-serif"
          style={{ fontSize: "clamp(30px, 3.4vw, 46px)", color: "#0B2545", fontWeight: 600, margin: 0, lineHeight: 1.14 }}
        >
          Research, <span style={{ fontStyle: "italic", color: "#1E56A0", fontWeight: 500 }}>published and peer-reviewed.</span>
        </h2>
        <p style={{ fontSize: 15.5, color: "#5A6779", lineHeight: 1.7, marginTop: 20, maxWidth: 640 }}>
          Findings from Maithri&rsquo;s R&amp;D team, validated through peer review and
          published in leading engineering and applied-science journals.
        </p>

        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(360px, 100%), 1fr))",
            gap: 26,
          }}
        >
          {PUBLICATIONS.map((pub) => (
            <a
              key={pub.url}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 18,
                overflow: "hidden",
                background: "#fff",
                textDecoration: "none",
                boxShadow: "0 20px 45px -28px rgba(11,37,69,0.35)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              className="publication-card"
            >
              <div style={{ height: 190, overflow: "hidden", background: "#0B2545" }}>
                <img
                  src={IMAGES[pub.image]}
                  alt={pub.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "22px 24px 26px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#1E56A0", marginBottom: 8, letterSpacing: "0.02em" }}>
                  {pub.journal}
                </div>
                <h3
                  className="whero-serif"
                  style={{ fontSize: 19, color: "#0B2545", fontWeight: 600, margin: "0 0 10px 0", lineHeight: 1.3 }}
                >
                  {pub.title}
                </h3>
                <p style={{ fontSize: 13.5, color: "#5A6779", lineHeight: 1.6, margin: "0 0 14px 0", flex: 1 }}>
                  {pub.blurb}
                </p>
                <div style={{ fontSize: 12, color: "#7C8AA0", marginBottom: 14 }}>{pub.citation}</div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13.5,
                    fontWeight: 700,
                    color: "#1E56A0",
                  }}
                >
                  Read the full paper <span aria-hidden>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Eyebrow from "./common/Eyebrow";
import Blob from "./common/Blob";
import Icon from "./common/Icon";
import { CAPABILITIES } from "../../data/rndData";

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" style={{ position: "relative", padding: "40px 8vw", background: "#EFF5FB", overflow: "hidden" }}>
      <Blob top={40} left="38%" size={64} opacity={0.6} />
      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative" }}>
        <Eyebrow>RESEARCH CAPABILITIES</Eyebrow>
        <h2 className="whero-serif" style={{ fontSize: "clamp(34px, 4vw, 52px)", color: "#0B2545", fontWeight: 600, margin: 0, lineHeight: 1.1 }}>
          Four directions, <span style={{ fontStyle: "italic", color: "#1E56A0", fontWeight: 500 }}>one R&amp;D engine.</span>
        </h2>
        <p style={{ fontSize: 16.5, color: "#5A6779", lineHeight: 1.55, maxWidth: 640, marginTop: 14 }}>
          Maithri&rsquo;s research platform is organized around the capabilities that matter
          most in the field: water harvesting performance, industrial
          recovery and climate resilience.
        </p>

        <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: 22 }}>
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="cap-card" style={{ padding: "30px 26px" }}>
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  background: "#E4EEFB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 22,
                }}
              >
                <Icon name={c.icon} />
              </div>
              <h3 className="whero-serif" style={{ fontSize: 23, color: "#0B2545", margin: "0 0 12px 0", fontWeight: 600 }}>
                {c.title}
              </h3>
              <p style={{ fontSize: 14.5, color: "#5A6779", lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

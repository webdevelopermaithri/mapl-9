import React from "react";
import ApplicationsTree from "../ApplicationsTree/ApplicationsTree.jsx";
import backgroundImage from "../../assets/applications-hero-bg-ocean.jpg";

// Reuses the "Applications Flow" hero copy + branches tree slider from the
// Applications page, dropped into the Products Overview page between the
// product categories grid and the closing mission CTA.
export default function ApplicationsFlowSection() {
  return (
    <div id="applications-flow" style={{ background: "#1e2a38" }}>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#1e2a38",
          color: "#fff",
          fontFamily: "Georgia, 'Times New Roman', serif",
          padding: "36px 24px 0",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Dark scrim so hero copy stays readable over the photo. */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(6,12,22,0.55) 0%, rgba(6,12,22,0.4) 45%, rgba(6,12,22,0.6) 100%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 7,
            marginBottom: 14,
            position: "relative",
          }}
        >
          <span style={{ width: 18, height: 1, background: "#9fb3c8" }} />
          <span
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 11,
              letterSpacing: 2,
              color: "#9fb3c8",
            }}
          >
            APPLICATIONS FLOW
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', 'Iowan Old Style', serif",
            fontSize: "clamp(26px, 3.6vw, 44px)",
            fontWeight: 400,
            lineHeight: 1.15,
            margin: 0,
            position: "relative",
          }}
        >
          MEGHDOOT<sup className="tm-mark">®</sup> at the top.
          <br />
          <span style={{ fontStyle: "italic", color: "#d99a3e" }}>
            Twelve branches aligned.
          </span>
        </h2>

        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 13.5,
            lineHeight: 1.55,
            color: "#cbd6e0",
            maxWidth: 500,
            margin: "14px auto 0",
            position: "relative",
          }}
        >
          From healthcare and hydrogen to communities and cold chains, each
          branch turns atmospheric water generation into operational
          resilience.
        </p>
      </div>

      <ApplicationsTree />
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import bubblesVideo from "../../assets/shared/bubbles-bg.mp4";

const DROPLETS = [
  { top: 60, left: "6%", size: 20 },
  { top: 170, left: "92%", size: 14 },
  { top: 340, left: "48%", size: 16 },
  { top: 400, left: "95%", size: 22 },
  { top: 470, left: "53%", size: 10 },
  { top: 470, left: "56.5%", size: 10 },
  { top: 520, left: "36%", size: 12 },
  { top: 610, left: "16%", size: 14 },
];

function ApplicationsCTA() {
  return (
    <div
      style={{
        position: "relative",
        background: "#fff",
        padding: "120px 24px 140px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* floating bubbles video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.45,
          pointerEvents: "none",
        }}
      >
        <source src={bubblesVideo} type="video/mp4" />
      </video>

      {/* faint decorative droplets, matches screenshot's scattered circles */}
      {DROPLETS.map((d, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 30%, rgba(159,179,200,0.35), rgba(159,179,200,0.08) 70%, transparent 80%)",
          }}
        />
      ))}

      <div
        style={{
          position: "relative",
          zIndex: 1,
          fontFamily: "Georgia, 'Times New Roman', serif",
          maxWidth: 780,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginBottom: 24,
          }}
        >
          <span style={{ width: 24, height: 1, background: "#8a9bb0" }} />
          <span
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 12,
              letterSpacing: 2,
              fontWeight: 700,
              color: "#7c8b9e",
            }}
          >
            DON&apos;T SEE YOUR INDUSTRY?
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(32px, 4.8vw, 50px)",
            fontWeight: 400,
            color: "#16232f",
            lineHeight: 1.25,
            margin: "0 0 24px",
          }}
        >
          If humidity touches it,{" "}
          <span style={{ fontStyle: "italic", color: "#2f6fd6" }}>
            we can transform it.
          </span>
        </h1>

        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 15.5,
            lineHeight: 1.7,
            color: "#6b7480",
            maxWidth: 560,
            margin: "0 auto 40px",
          }}
        >
          From polar research stations to tropical resorts, Maithri has
          engineered AWG for environments most thought impossible.
        </p>

        <Link
          to="/design-your-water-system#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#2f6fd6",
            color: "#fff",
            border: "none",
            borderRadius: 26,
            padding: "16px 30px",
            fontFamily: "Arial, sans-serif",
            fontSize: 15,
            fontWeight: 700,
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Propose a Use Case <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export default ApplicationsCTA;

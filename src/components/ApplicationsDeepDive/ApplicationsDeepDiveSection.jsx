import React from "react";
import { Link } from "react-router-dom";
import { DEEP_DIVES } from "../../data/deepDives";

function ApplicationsDeepDiveSection() {
  return (
    <div style={{ background: "#eaf0fb" }}>
      {/* HERO — front section unchanged */}
      <div
        style={{
          padding: "56px clamp(20px, 6vw, 48px) 32px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 18,
          }}
        >
          <span style={{ width: 24, height: 1, background: "#1e9e8f" }} />
          <span
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 12,
              letterSpacing: 2,
              fontWeight: 700,
              color: "#1e9e8f",
            }}
          >
            DEEP DIVES
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(32px, 4.5vw, 48px)",
            fontWeight: 400,
            color: "#16232f",
            lineHeight: 1.2,
            margin: 0,
            maxWidth: 780,
          }}
        >
          Where water from air is{" "}
          <span style={{ fontStyle: "italic", color: "#2f6fd6" }}>
            changing industries today.
          </span>
        </h1>
      </div>

      {/* FEATURE CARDS — stacked, alternating image/text sides */}
      <div
        style={{
          padding: "8px clamp(16px, 5vw, 48px) 64px",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        {DEEP_DIVES.map((dive, i) => {
          const imageFirst = i % 2 === 0;
          const image = (
            <div
              key="image"
              style={{
                flex: "1 1 420px",
                minHeight: 340,
                background: dive.image
                  ? `#0b5f82 url(${dive.image}) center / cover no-repeat`
                  : dive.gradient,
              }}
              role="img"
              aria-label={dive.title}
            />
          );
          const content = (
            <div
              key="content"
              style={{
                flex: "1 1 380px",
                padding: "clamp(28px, 5vw, 48px) clamp(24px, 5vw, 56px)",
                fontFamily: "Arial, sans-serif",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  color: "#1e9e8f",
                  marginBottom: 14,
                }}
              >
                {dive.tag}
              </span>

              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 32,
                  fontWeight: 400,
                  color: "#16232f",
                  margin: "0 0 18px",
                }}
              >
                {dive.title}
              </h2>

              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "#5c6570",
                  margin: "0 0 28px",
                  maxWidth: 460,
                }}
              >
                {dive.description}
              </p>

              <Link
                to="/design-your-water-system#contact"
                style={{
                  alignSelf: "flex-start",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#2f6fd6",
                  color: "#fff",
                  border: "none",
                  borderRadius: 24,
                  padding: "14px 26px",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Talk to an Expert <span>&rarr;</span>
              </Link>
            </div>
          );

          return (
            <div
              key={dive.title}
              style={{
                display: "flex",
                flexWrap: "wrap",
                background: "#fff",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 8px 30px rgba(20,30,45,0.08)",
              }}
            >
              {imageFirst ? [image, content] : [content, image]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ApplicationsDeepDiveSection;

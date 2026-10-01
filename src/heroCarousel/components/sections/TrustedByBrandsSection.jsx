import { BRANDS } from "../../data/brands";
import BrandLogo from "../shared/BrandLogo";

export default function TrustedByBrandsSection({ setIsHoveringBtn }) {
  return (
        <section
          style={{
            background: "#eef3f8",
            height: "auto",
            minHeight: "unset",
            boxSizing: "border-box",
            scrollSnapAlign: "start",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="trusted-brands-inner" style={{ maxWidth: 1320, margin: "0 auto", padding: "48px 0 48px", width: "100%" }}>
            <div style={{ padding: "0 6%", textAlign: "center", marginBottom: 32 }}>
              <h1
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontWeight: 400,
                  fontSize: "clamp(24px, 5vw, 38px)",
                  margin: 0,
                  color: "#16232e",
                }}
              >
                Trusted by <em style={{ color: "#3b6fd6", fontStyle: "italic" }}>the bold &amp; the conscious.</em>
              </h1>
            </div>

            <div
              className="brand-marquee-wrap"
              onMouseEnter={() => setIsHoveringBtn(false)}
              style={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                cursor: "none",
              }}
            >
              {/* left / right vignette fade, matched to this section's light background */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 140,
                  background: "linear-gradient(90deg, #eef3f8 0%, rgba(238,243,248,0) 100%)",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: 140,
                  background: "linear-gradient(270deg, #eef3f8 0%, rgba(238,243,248,0) 100%)",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />

              <div
                className="brand-track"
                style={{
                  display: "flex",
                  width: "max-content",
                  gap: 72,
                  padding: "24px 0",
                }}
              >
                {[...BRANDS, ...BRANDS].map((b, i) => (
                  <BrandLogo key={i} b={b} />
                ))}
              </div>
            </div>
          </div>
        </section>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import bgPhoto from "../../../assets/projects-full/images/Background image.png";
import { tm } from "../../../utils/formatTM.jsx";

const CTA_LINKS = {
  "Contact Us": "/design-your-water-system#contact",
  "How MEGHDOOT® Works": "/technology",
};

export default function MeghdootHeroSection({ slide, i, activeIndex, setIsHoveringBtn, bgRefs }) {
  const [hoveredCta, setHoveredCta] = useState(null);
  return (
              <>
                {/* background layer — kept OUTSIDE the fade-in wrapper below so it
                    stays fully visible the whole time this section is scrolled
                    through, instead of only appearing once "active" (which was
                    leaving a large blank gap while scrolling in/out on some
                    layouts). The section now auto-sizes to its content, so
                    this background (bottom:0) hugs that same height instead
                    of a fixed 130vh panel. Matches the pattern used by every
                    other slide's background layer. */}
                <div
                  ref={(el) => (bgRefs.current[i] = el)}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-6%",
                    right: "-6%",
                    bottom: 0,
                    backgroundColor: "#0c2436",
                    backgroundImage: [
                      // soft glow behind the headline, like light diffusing through water vapor
                      "radial-gradient(ellipse 60% 50% at 22% 15%, rgba(120,165,195,0.30), transparent 65%)",
                      // dim secondary glow lower-right, breaks up flatness
                      "radial-gradient(ellipse 55% 45% at 78% 85%, rgba(40,80,105,0.35), transparent 70%)",
                      // dark vignette baked into the same layer, so corners stay moody
                      "radial-gradient(ellipse 90% 90% at 50% 45%, transparent 40%, rgba(4,14,22,0.65) 100%)",
                      // darkening wash so the white copy on the left stays legible over the photo
                      "linear-gradient(100deg, rgba(6,16,26,0.75) 0%, rgba(6,16,26,0.45) 45%, rgba(6,16,26,0.25) 100%)",
                      // the actual water/air texture photo
                      `url(${bgPhoto})`,
                    ].join(", "),
                    backgroundBlendMode: "screen, screen, normal, normal, normal",
                    backgroundSize: "cover, cover, cover, cover, cover",
                    backgroundPosition: "center, center, center, center, center",
                    backgroundRepeat: "no-repeat",
                    transformOrigin: "center center",
                    willChange: "transform",
                    zIndex: 0,
                  }}
                />

              <div
                className="meghdoot-hero-row"
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "48px 0",
                }}
              >
                {/* left copy */}
                <div className="meghdoot-hero-copy">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      fontFamily: "Arial, sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      color: "#8fb4cf",
                      marginBottom: 26,
                    }}
                  >
                    <span style={{ width: 28, height: 1, background: "#8fb4cf" }} />
                    {tm(slide.eyebrow)}
                  </div>

                  <h1
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontWeight: 400,
                      fontSize: "clamp(28px, 5.5vw, 48px)",
                      lineHeight: 1.25,
                      color: "#fff",
                      margin: 0,
                      marginBottom: 26,
                    }}
                  >
                    {tm(slide.title)}{" "}
                    <em style={{ fontStyle: "italic", color: "#e0a940" }}>{tm(slide.titleEm)}</em>
                  </h1>

                  <p
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: 16,
                      lineHeight: 1.75,
                      color: "#c3d3de",
                      maxWidth: "min(520px, 100%)",
                      marginBottom: 34,
                    }}
                  >
                    {tm(slide.body)}
                  </p>

                  <div className="hero-cta-row" style={{ display: "flex", gap: 16 }}>
                    {slide.ctas.map((label, ci) => {
                      const isHovered = hoveredCta === ci;
                      return (
                        <Link
                          key={ci}
                          to={CTA_LINKS[label] || "/"}
                          onMouseEnter={() => {
                            setIsHoveringBtn(true);
                            setHoveredCta(ci);
                          }}
                          onMouseLeave={() => {
                            setIsHoveringBtn(false);
                            setHoveredCta(null);
                          }}
                          style={{
                            fontFamily: "Arial, sans-serif",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            fontSize: 15,
                            fontWeight: 600,
                            padding: "15px 26px",
                            borderRadius: 30,
                            border: "none",
                            background: isHovered ? "#2c85d1" : "#1f6fb2",
                            color: "#fff",
                            cursor: "none",
                            textDecoration: "none",
                            transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                            boxShadow: isHovered
                              ? "0 10px 24px rgba(31,111,178,0.4)"
                              : "0 0 0 rgba(31,111,178,0)",
                            transition: "background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                          }}
                        >
                          {tm(label)}
                          <span style={{ transform: isHovered ? "translateX(3px)" : "translateX(0)", transition: "transform 0.2s ease" }}>&rarr;</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* right: transparent glass stat box */}
                <div
                  className="meghdoot-hero-glass"
                  style={{
                    boxSizing: "border-box",
                    background: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(3px)",
                    WebkitBackdropFilter: "blur(3px)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    borderRadius: 20,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontWeight: 400,
                      fontSize: "clamp(22px, 4.5vw, 30px)",
                      lineHeight: 1.3,
                      color: "#fff",
                      margin: 0,
                      marginBottom: 26,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {slide.glassBox.heading}
                  </h2>

                  {slide.glassBox.stats.map((stat, si, arr) => (
                    <div
                      key={si}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 26,
                        padding: "22px 0",
                        borderTop: "1px solid rgba(255,255,255,0.18)",
                        borderBottom: si === arr.length - 1 ? "1px solid rgba(255,255,255,0.18)" : "none",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "Georgia, 'Times New Roman', serif",
                          fontStyle: "italic",
                          fontSize: "clamp(24px, 5vw, 32px)",
                          color: "#e0a940",
                          width: "auto",
                          minWidth: 64,
                          flexShrink: 0,
                        }}
                      >
                        {stat.num}
                      </div>
                      <div
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontSize: 18,
                          color: "#dbe6ec",
                          lineHeight: 1.55,
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </>

  );
}

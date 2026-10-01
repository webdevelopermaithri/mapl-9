
import { useState } from "react";
import { Link } from "react-router-dom";
import { tm } from "../../../utils/formatTM.jsx";

// Where each hero-slide CTA button should navigate to.
const CTA_LINKS = {
  "Explore the technology": "/technology",
  "Explore installations": "/projects",
  "See MEGHDOOT®": "/products",
  "Contact us": "/design-your-water-system#contact",
  "Explore our R&D": "/rnd",
  "See recognition": "/impact",
};

export default function DefaultHeroSection({ slide, i, activeIndex, setIsHoveringBtn, bgRefs }) {
  // Local hover tracking for this slide's interactive boxes — kept separate
  // per element type since each DefaultHeroSection instance belongs to only
  // one slide.
  const [hoveredStatCard, setHoveredStatCard] = useState(false);
  const [hoveredCta, setHoveredCta] = useState(null);
  const [hoveredSideCard, setHoveredSideCard] = useState(null);

  // Either a looping video or a static photo can drive the background;
  // both get the same light "readable on the left, clear photo on the
  // right" treatment — a soft white fade rather than a dark scrim.
  const hasMedia = slide.videoBg || slide.imageBg;
  const staticImage = slide.videoBg ? slide.videoBg.poster : slide.imageBg;
  // For static photo backgrounds only: two copies of the same image, blurred
  // by different amounts, cross-faded left-to-right so the left (behind the
  // copy) reads heavily softened and the right (behind the product) stays
  // only lightly softened rather than tack-sharp.
  // `fullBleedImage` slides (e.g. the MEGHDOOT machine slide) skip the
  // blur/crop-zoom trick and just show one crisp, full-bleed copy of the
  // photo (no letterboxing) under the same left-to-right white fade used
  // everywhere else.
  const showBlurLayers = !!slide.imageBg && !slide.fullBleedImage;

  return (
              <>
            <div
              className="hero-background-media"
              ref={(el) => (bgRefs.current[i] = el)}
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "#eef4f8",
                backgroundImage:
                  slide.videoBg || (slide.imageBg && slide.fullBleedImage)
                    ? `url(${staticImage})`
                    : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transformOrigin: "center center",
                willChange: "transform",
                overflow: "hidden",
              }}
            >
              {slide.videoBg && (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster={slide.videoBg.poster}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                >
                  <source src={slide.videoBg.webm} type="video/webm" />
                  <source src={slide.videoBg.mp4} type="video/mp4" />
                </video>
              )}
              {showBlurLayers && (
                <>
                  {/* Base layer: heavily blurred, covers the whole slide (this is what shows through on the left). Slight zoom (scale) added so the image reads a bit closer/fuller. */}
                  <div
                    style={{
                      position: "absolute",
                      inset: "-6%",
                      backgroundImage: `url(${staticImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "blur(5px)",
                      transform: "scale(1.08)",
                    }}
                  />
                  {/* Top layer: only lightly blurred, faded in from the middle to the right so the product itself still reads clean, just gently softened */}
                  <div
                    style={{
                      position: "absolute",
                      inset: "-6%",
                      backgroundImage: `url(${staticImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "blur(0.8px)",
                      transform: "scale(1.08)",
                      WebkitMaskImage:
                        "linear-gradient(90deg, transparent 0%, transparent 38%, rgba(0,0,0,0.7) 58%, #000 78%)",
                      maskImage:
                        "linear-gradient(90deg, transparent 0%, transparent 38%, rgba(0,0,0,0.7) 58%, #000 78%)",
                    }}
                  />
                </>
              )}
            </div>
            <div
              className="hero-background-wash"
              style={{
                position: "absolute",
                inset: 0,
                // Soft white fade over the copy on the left for legibility,
                // easing away to almost nothing by the right so the photo
                // itself reads clean and clearly visible. Slides marked
                // `noWash` skip this entirely and show the raw photo.
                background: slide.noWash
                  ? "none"
                  : hasMedia
                  ? "linear-gradient(100deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.82) 20%, rgba(255,255,255,0.52) 40%, rgba(255,255,255,0.22) 58%, rgba(255,255,255,0.06) 78%, rgba(255,255,255,0.02) 100%)"
                  : "rgba(255, 255, 255, 0.3)",
              }}
            />
            <div
              className="hero-content-wrap"
              style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                maxWidth: 1180,
                margin: "0 auto",
              }}
            >
            <div
              className={`hero-text-col${slide.boxed ? " hero-boxed-card" : ""}`}
              style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                maxWidth: slide.boxed ? 560 : 680,
                boxSizing: "border-box",
                color: "#16232f",
                marginTop: i === 1 ? -46 : 0,
                opacity: activeIndex === i ? 1 : 0,
                transform: activeIndex === i ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
                ...(slide.boxed
                  ? {
                      background: "rgba(255,255,255,0.97)",
                      borderRadius: 22,
                      boxShadow: "0 24px 60px rgba(20,54,92,0.16)",
                      border: "1px solid rgba(20,54,92,0.06)",
                    }
                  : {}),
              }}
            >
              {slide.eyebrow && (
                <div
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: 12,
                    letterSpacing: 2.5,
                    textTransform: "uppercase",
                    color: slide.eyebrowColor || "#3f7bb3",
                    marginBottom: 14,
                  }}
                >
                  {"—— "}{tm(slide.eyebrow)}
                </div>
              )}
              <h1
                style={{
                  fontFamily: i === 0 || i === 1 ? "'Cormorant Garamond', serif" : "inherit",
                  fontSize: i === 0
                    ? "clamp(34px, 6.5vw, 80px)"
                    : i === 1
                    ? "clamp(30px, 6vw, 70px)"
                    : "clamp(28px, 5.5vw, 62px)",
                  fontWeight: i === 0 ? 500 : i === 1 ? 300 : 400,
                  lineHeight: 1.1,
                  margin: 0,
                  color: "#16232f",
                }}
              >
                {tm(slide.title)}
                <em
                  style={{
                    display: "block",
                    color: "#2b5ea8",
                    fontStyle: "italic",
                    fontWeight: i === 1 ? 300 : 400,
                    marginTop: 0,
                  }}
                >
                  {tm(slide.titleEm)}
                </em>
              </h1>
              {slide.tagline && (
                <p style={{ fontStyle: "italic", fontSize: 16, color: "#3c4a56", margin: "14px 0 18px" }}>
                  {tm(slide.tagline)}
                </p>
              )}
              {slide.statCard ? (
                <Link
                  to={slide.statCard.to || "#"}
                  onMouseEnter={() => {
                    setIsHoveringBtn(true);
                    setHoveredStatCard(true);
                  }}
                  onMouseLeave={() => {
                    setIsHoveringBtn(false);
                    setHoveredStatCard(false);
                  }}
                  style={{
                    display: "inline-block",
                    background: hoveredStatCard ? "rgba(255,255,255,0.30)" : "rgba(255,255,255,0.16)",
                    backdropFilter: "blur(3px)",
                    WebkitBackdropFilter: "blur(3px)",
                    border: hoveredStatCard ? "1px solid rgba(31,111,178,0.55)" : "1px solid rgba(20,54,92,0.14)",
                    borderRadius: 22,
                    padding: "20px 24px",
                    marginBottom: 24,
                    maxWidth: "min(520px, 100%)",
                    width: "100%",
                    cursor: "none",
                    textDecoration: "none",
                    transform: hoveredStatCard ? "translateY(-3px)" : "translateY(0)",
                    boxShadow: hoveredStatCard
                      ? "0 14px 32px rgba(20,54,92,0.18)"
                      : "0 0px 0px rgba(20,54,92,0)",
                    transition: "background 0.25s ease, border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: 19,
                      lineHeight: 1.35,
                      color: "#1f6fb2",
                      marginBottom: 12,
                    }}
                  >
                    {slide.statCard.heading}
                  </div>
                  {slide.statCard.stats.map((s, si) => (
                    <div
                      key={si}
                      style={{
                        fontSize: 19,
                        lineHeight: 1.5,
                        marginTop: si === 0 ? 0 : 2,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Georgia, 'Times New Roman', serif",
                          fontWeight: 400,
                          fontSize: 29,
                          color: "#16232f",
                        }}
                      >
                        {s.number}
                      </span>{" "}
                      <span
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: 600,
                          fontSize: 19,
                          color: "#1f6fb2",
                        }}
                      >
                        {s.label}
                      </span>
                    </div>
                  ))}
                </Link>
              ) : (
                <p
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: i === 1 ? 17 : 15,
                    fontWeight: 700,
                    lineHeight: i === 1 ? 1.8 : 1.6,
                    color: "#245ea3",
                    marginTop: i === 1 ? 0 : undefined,
                    marginBottom: i === 1 ? 18 : slide.highlight ? 14 : 34,
                    maxWidth: "min(580px, 100%)",
                  }}
                >
                  {tm(slide.body)}
                </p>
              )}
              {slide.highlight && (
                <p
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: i === 1 ? 19 : 16,
                    fontWeight: 700,
                    lineHeight: i === 1 ? 1.7 : 1.5,
                    color: "#16232f",
                    marginTop: i === 1 ? 0 : undefined,
                    marginBottom: i === 1 ? 12 : 34,
                    maxWidth: "min(580px, 100%)",
                  }}
                >
                  {tm(slide.highlight)}
                </p>
              )}
              <div
                className="hero-cta-row"
                style={{
                  display: "flex",
                  gap: 14,
                  ...(slide.statCard ? { maxWidth: "min(520px, 100%)", width: "100%" } : {}),
                }}
              >
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
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        ...(slide.statCard ? { flex: 1 } : {}),
                        gap: 8,
                        fontFamily: "Arial, sans-serif",
                        fontSize: 14,
                        fontWeight: 600,
                        textTransform: "capitalize",
                        padding: "12px 22px",
                        borderRadius: 30,
                        border: "1.5px solid #1f6fb2",
                        background: isHovered ? "#164e80" : "#1f6fb2",
                        borderColor: isHovered ? "#164e80" : "#1f6fb2",
                        color: "#fff",
                        cursor: "none",
                        textDecoration: "none",
                        transform: isHovered ? "translateY(-2px) scale(1.03)" : "translateY(0) scale(1)",
                        boxShadow: isHovered ? "0 10px 24px rgba(31,111,178,0.35)" : "0 0 0 rgba(31,111,178,0)",
                        transition: "background 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                      }}
                    >
                      {tm(label)}
                      <span
                        style={{
                          fontSize: 15,
                          display: "inline-block",
                          transform: isHovered ? "translateX(3px)" : "translateX(0)",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        &rarr;
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {hasMedia && (
              <div className="hero-mobile-media" aria-hidden="true">
                {slide.videoBg ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster={slide.videoBg.poster}
                  >
                    <source src={slide.videoBg.webm} type="video/webm" />
                    <source src={slide.videoBg.mp4} type="video/mp4" />
                  </video>
                ) : (
                  <img src={staticImage} alt="" />
                )}
              </div>
            )}

            {slide.sideCards && (
              <div
                className="hero-side-cards"
                style={{
                  // Positioning/width now come from the `.hero-side-cards`
                  // class in animations.css, which switches from
                  // absolute-right-of-the-text (desktop) to static/stacked
                  // full width (tablet & mobile) — fixed pixel offsets here
                  // used to overlap the headline once it wrapped on
                  // anything narrower than a full desktop viewport.
                  zIndex: 2,
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  opacity: activeIndex === i ? 1 : 0,
                  transform: activeIndex === i ? "translateY(0)" : "translateY(30px)",
                  transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
                }}
              >
                {slide.sideCards.map((card, ci) => {
                  const isHovered = hoveredSideCard === ci;
                  return (
                    <Link
                      key={ci}
                      to={card.to || "#"}
                      onMouseEnter={() => {
                        setIsHoveringBtn(true);
                        setHoveredSideCard(ci);
                      }}
                      onMouseLeave={() => {
                        setIsHoveringBtn(false);
                        setHoveredSideCard(null);
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        background: isHovered ? "rgba(255, 255, 255, 0.32)" : "rgba(255, 255, 255, 0.16)",
                        backdropFilter: "blur(3px)",
                        WebkitBackdropFilter: "blur(3px)",
                        border: isHovered ? "1px solid rgba(31,111,178,0.55)" : "1px solid rgba(20,54,92,0.14)",
                        borderRadius: 20,
                        padding: "18px 20px",
                        cursor: "none",
                        textDecoration: "none",
                        transform: isHovered ? "translateX(-4px) translateY(-2px)" : "translateX(0) translateY(0)",
                        boxShadow: isHovered ? "0 14px 30px rgba(20,54,92,0.20)" : "0 0px 0px rgba(20,54,92,0)",
                        transition: "background 0.25s ease, border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
                      }}
                    >
                      <span
                        style={{
                          width: 9,
                          height: 9,
                          borderRadius: "50%",
                          background: "#1f6fb2",
                          flexShrink: 0,
                          boxShadow: isHovered ? "0 0 0 4px rgba(31,111,178,0.25)" : "0 0 0 0 rgba(31,111,178,0)",
                          transition: "box-shadow 0.25s ease",
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontFamily: "Arial, sans-serif",
                            fontSize: 12,
                            fontWeight: 700,
                            letterSpacing: 1.2,
                            textTransform: "uppercase",
                            color: card.labelColor || "#3f7bb3",
                            marginBottom: 5,
                          }}
                        >
                          {card.label}
                        </div>
                        <div
                          style={{
                            fontFamily: "Georgia, 'Times New Roman', serif",
                            fontSize: 17,
                            color: "#16232f",
                            lineHeight: 1.35,
                          }}
                        >
                          {card.text}
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: 18,
                          color: "#1f6fb2",
                          flexShrink: 0,
                          transform: isHovered ? "translateX(3px)" : "translateX(0)",
                          transition: "transform 0.25s ease",
                        }}
                      >
                        &rarr;
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
            </div>
              </>

  );
}

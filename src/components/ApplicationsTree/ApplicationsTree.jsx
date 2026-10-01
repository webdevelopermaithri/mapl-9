import React, { useRef, useState, useEffect } from "react";
import { BRANCHES } from "../../data/branches";
import { tm } from "../../utils/formatTM.jsx";
import heroBackgroundImage from "../../assets/applications-hero-bg-ocean.jpg";

function ApplicationsTree() {
  const trackRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateProgress = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollProgress(max <= 0 ? 0 : el.scrollLeft / max);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateProgress);
    updateProgress();
    return () => el.removeEventListener("scroll", updateProgress);
  }, []);

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const flexRow = el.firstElementChild;
    const firstCard = flexRow ? flexRow.firstElementChild : null;
    const gap = flexRow ? parseFloat(getComputedStyle(flexRow).columnGap) || 10 : 10;
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 190;
    el.scrollBy({ left: dir * (cardWidth + gap), behavior: "smooth" });
  };

  return (
    <div
      className="at-root"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(6,12,22,0.55) 0%, rgba(6,12,22,0.4) 45%, rgba(6,12,22,0.6) 100%), url(${heroBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#1e2a38",
        color: "#fff",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      {/* Mobile/tablet-only overrides. Every size here was previously a
          hardcoded pixel value (190px cards, 36px arrows, fixed padding),
          so on narrow phones the available track width ended up smaller
          than a single card, hard-clipping it against the section edge.
          These rules only kick in below 640px — laptop/desktop keep the
          original fixed sizing untouched. */}
      <style>{`
        .at-root { padding: 20px 24px 30px; }
        .at-box { padding: 16px 16px 18px; }
        .at-card { flex: 0 0 190px; }
        @media (max-width: 640px) {
          .at-root { padding: 16px 12px 22px !important; }
          .at-box { padding: 12px 10px 14px !important; }
          .at-arrow { width: 30px !important; }
          .at-row { gap: 8px !important; }
          .at-cards-row { gap: 8px !important; }
          .at-card { flex: 0 0 calc(100vw - 148px) !important; max-width: 260px; }
        }
        @media (max-width: 380px) {
          .at-card { flex: 0 0 calc(100vw - 132px) !important; }
        }
      `}</style>
      {/* card wrapper — subtle transparent border around the whole tree structure.
          The blur sits only behind this box (clipped to its rounded corners),
          not across the full section. */}
      <div
        className="at-box"
        style={{
          position: "relative",
          overflow: "hidden",
          maxWidth: 1260,
          margin: "0 auto",
          background: `#16212f url(${heroBackgroundImage}) center / cover no-repeat`,
          border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: 32,
        }}
      >
        {/* Scrim over the background photo so card/text contrast matches
            the rest of the site — kept on for both pages of the branch
            scroller so the background reads the same throughout. */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(6,12,22,0.55) 0%, rgba(6,12,22,0.72) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Content — solid navy shell, no photo/blur layer, matching the
            core-platform card treatment. */}
        <div style={{ position: "relative" }}>
      {/* core node */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            background: "#2a3c52",
            border: "1px solid #5a6f85",
            borderRadius: 18,
            padding: "8px 34px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 10,
              letterSpacing: 1.6,
              color: "#9fb3c8",
              marginBottom: 2,
            }}
          >
            CORE PLATFORM
          </div>
          <div style={{ fontSize: 19 }}>MEGHDOOT<sup className="tm-mark">®</sup></div>
        </div>
        <div style={{ width: 1, height: 10, background: "#d99a3e" }} />
      </div>

      {/* branch row with arrows */}
      <div className="at-row" style={{ display: "flex", alignItems: "stretch", gap: 12, marginTop: 4 }}>
        <button
          onClick={() => scrollByCards(-1)}
          aria-label="Scroll left"
          className="at-arrow"
          style={{
            width: 36,
            border: "none",
            background: "rgba(255,255,255,0.08)",
            borderRadius: 8,
            color: "#fff",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          ‹
        </button>

        <div style={{ flex: 1, overflow: "hidden" }}>
          <div
            ref={trackRef}
            style={{
              overflowX: "auto",
              scrollSnapType: "x proximity",
              scrollbarWidth: "none",
            }}
          >
            {/* Each branch owns its own connector segment (horizontal bar
                slice + vertical drop) directly above its card, in the same
                flex item — so the line for a card can never drift out of
                sync with the card itself, at any scroll position or index. */}
            <div
              className="at-cards-row"
              style={{
                display: "flex",
                gap: 10,
                paddingBottom: 4,
              }}
            >
            {BRANCHES.map((b, i) => (
              <div
                key={b.num}
                className="at-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ position: "relative", height: 12 }}>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 1,
                      background: "rgba(217,154,62,0.5)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translateX(-0.5px)",
                      width: 1,
                      height: 12,
                      background: "#d99a3e",
                    }}
                  />
                </div>

                <button
                  onClick={() => setSelected(i)}
                  style={{
                    scrollSnapAlign: "start",
                    width: "100%",
                    height: 112,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "left",
                    background:
                      selected === i ? "#3d5268" : "#263850",
                    border:
                      selected === i
                        ? "1px solid #d99a3e"
                        : "1px solid #4a5d75",
                    borderRadius: 16,
                    padding: "10px 13px",
                    cursor: "pointer",
                    color: "#fff",
                    fontFamily: "inherit",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: 9,
                        fontWeight: 700,
                        color: "#d99a3e",
                        background: "rgba(217,154,62,0.15)",
                        borderRadius: 12,
                        padding: "2px 8px",
                      }}
                    >
                      {b.num}
                    </span>
                    <span
                      style={{
                        width: 17,
                        height: 17,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        lineHeight: 1,
                      }}
                    >
                      {selected === i ? "−" : "+"}
                    </span>
                  </div>
                  <div style={{ fontSize: 14, lineHeight: 1.2 }}>
                    {b.title}
                  </div>
                  <span
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: 9.5,
                      letterSpacing: 0.8,
                      fontWeight: 700,
                      color: "#cbd6e0",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: 12,
                      padding: "3px 8px",
                      alignSelf: "flex-start",
                    }}
                  >
                    {b.tag.toUpperCase()}
                  </span>
                </button>
              </div>
            ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollByCards(1)}
          aria-label="Scroll right"
          className="at-arrow"
          style={{
            width: 36,
            border: "none",
            background: "rgba(255,255,255,0.08)",
            borderRadius: 8,
            color: "#fff",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          ›
        </button>
      </div>

      {/* scroll progress dots (simple 2-dot indicator like the screenshot) */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 12 }}>
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: scrollProgress < 0.5 ? "#fff" : "rgba(255,255,255,0.3)",
          }}
        />
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: scrollProgress >= 0.5 ? "#d99a3e" : "rgba(255,255,255,0.3)",
          }}
        />
      </div>

      {/* details panel */}
      <div
        style={{
          marginTop: 14,
          minHeight: 70,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: 14,
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {selected === null ? (
          <p style={{ color: "#9fb3c8", fontSize: 14 }}>Click any branch to view details.</p>
        ) : (
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 20,
                marginBottom: 8,
                color: "#fff",
              }}
            >
              {BRANCHES[selected].title}
            </div>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#cbd6e0" }}>
              {tm(BRANCHES[selected].detail)}
            </p>
          </div>
        )}
      </div>
      </div>
      </div>
    </div>
  );
}

export default ApplicationsTree;

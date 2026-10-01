
import { useEffect, useState } from "react";
import { SOCIAL_POSTS } from "../../data/socialPosts";

const ACCENT_COLORS = ["#3b8fd6", "#e0a940", "#3b8fd6", "#e0a940"];

export default function SocialSignalsSection({ slide, i, activeIndex }) {
  const [activePost, setActivePost] = useState(0);
  const showPost = (offset) =>
    setActivePost((current) => (current + offset + SOCIAL_POSTS.length) % SOCIAL_POSTS.length);

  // Keep the four public posts moving one at a time on small screens;
  // the manual arrow and dot controls remain available for direct browsing.
  useEffect(() => {
    const timer = window.setInterval(() => showPost(1), 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
              <div
                className="social-signals-inner"
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  padding: "48px 0",
                }}
              >
                {/* soft decorative glow behind the wall of cards */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 90,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "90%",
                    maxWidth: 1300,
                    height: 420,
                    background:
                      "radial-gradient(ellipse 60% 70% at 50% 40%, rgba(59,143,214,0.10), transparent 70%)",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />

                <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontFamily: "Arial, sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: 2.5,
                    textTransform: "uppercase",
                    color: "#3b8fd6",
                    marginBottom: 22,
                  }}
                >
                  <span style={{ width: 28, height: 1.5, background: "#3b8fd6" }} />
                  {slide.eyebrow}
                </div>

                <h2
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontWeight: 400,
                    fontSize: "clamp(26px, 5.5vw, 44px)",
                    lineHeight: 1.2,
                    margin: "0 0 18px",
                    color: "#16232e",
                  }}
                >
                  {slide.title}{" "}
                  <em style={{ color: "#3b8fd6", fontStyle: "italic" }}>{slide.titleEm}</em>
                </h2>

                <p
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: 16,
                    color: "#5c6b78",
                    margin: "0 0 32px",
                  }}
                >
                  {slide.body}
                </p>

                <div
                  className="social-wall-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    alignItems: "stretch",
                    gap: 28,
                  }}
                >
                  {SOCIAL_POSTS.map((post, ci) => (
                    <div
                      key={ci}
                      className={`social-wall-card${ci === activePost ? " social-wall-card--active" : ""}`}
                      style={{
                        "--accent": ACCENT_COLORS[ci % ACCENT_COLORS.length],
                        borderRadius: 18,
                        width: "100%",
                        boxSizing: "border-box",
                        background: "#fff",
                        border: "1px solid #e3e9ee",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        cursor: "none",
                      }}
                    >
                      <div
                        style={{
                          padding: 10,
                          display: "flex",
                        }}
                      >
                        <img
                          src={post.image}
                          alt={post.alt}
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            objectFit: "contain",
                            borderRadius: 10,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="social-mobile-controls" aria-label="Social posts carousel">
                  <button type="button" onClick={() => showPost(-1)} aria-label="Previous post">←</button>
                  <div className="social-mobile-dots">
                    {SOCIAL_POSTS.map((post, ci) => (
                      <button
                        type="button"
                        key={post.image}
                        aria-label={`Show post ${ci + 1}`}
                        aria-current={ci === activePost ? "true" : undefined}
                        className={ci === activePost ? "is-active" : ""}
                        onClick={() => setActivePost(ci)}
                      />
                    ))}
                  </div>
                  <button type="button" onClick={() => showPost(1)} aria-label="Next post">→</button>
                </div>
                </div>

                <style>{`
                  .social-wall-card {
                    box-shadow: 0 14px 34px rgba(20,40,60,0.08);
                    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                                box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                                border-color 0.35s ease;
                  }
                  .social-wall-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 26px 54px rgba(20,40,60,0.18);
                    border-color: var(--accent, #3b8fd6);
                    z-index: 5;
                  }
                  @media (max-width: 900px) {
                    .social-wall-grid {
                      grid-template-columns: repeat(2, 1fr) !important;
                    }
                  }
                  @media (max-width: 640px) {
                    .social-wall-grid {
                      display: block !important;
                    }
                    .social-wall-card {
                      display: none !important;
                    }
                    .social-wall-card.social-wall-card--active {
                      display: flex !important;
                      animation: socialPostIn 0.28s ease-out;
                    }
                    .social-mobile-controls {
                      display: flex;
                    }
                    @keyframes socialPostIn {
                      from { opacity: 0; transform: translateX(10px); }
                      to { opacity: 1; transform: translateX(0); }
                    }
                  }
                  .social-mobile-controls { display: none; }
                  @media (max-width: 640px) {
                    .social-mobile-controls {
                      align-items: center;
                      justify-content: space-between;
                      gap: 14px;
                      margin-top: 18px;
                    }
                    .social-mobile-controls > button {
                      width: 40px;
                      height: 40px;
                      border: 1px solid #cbd8e3;
                      border-radius: 50%;
                      background: #fff;
                      color: #1f6fb2;
                      font-size: 20px;
                      cursor: pointer;
                    }
                    .social-mobile-dots { display: flex; gap: 8px; }
                    .social-mobile-dots button {
                      width: 8px;
                      height: 8px;
                      padding: 0;
                      border: 0;
                      border-radius: 50%;
                      background: #b9c8d4;
                      cursor: pointer;
                    }
                    .social-mobile-dots button.is-active { background: #1f6fb2; }
                  }
                `}</style>
              </div>

  );
}

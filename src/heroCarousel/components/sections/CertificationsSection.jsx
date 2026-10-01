import { CERTIFICATIONS } from "../../data/certifications";
import CertBadge from "../shared/CertBadge";
export default function CertificationsSection({ slide, i, activeIndex, setIsHoveringBtn }) {
  return (
              <div
                className="certifications-inner"
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "48px 0",
                }}
              >
                <div style={{ padding: "0 6%", textAlign: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 12,
                      fontFamily: "Arial, sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: 2.5,
                      textTransform: "uppercase",
                      color: "#1f6fb2",
                      marginBottom: 16,
                    }}
                  >
                    <span style={{ width: 28, height: 1.5, background: "#1f6fb2" }} />
                    {slide.eyebrow}
                  </div>

                  <h1
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontWeight: 400,
                      fontSize: "clamp(28px, 5.5vw, 46px)",
                      lineHeight: 1.18,
                      margin: "0 auto 16px",
                      color: "#16232e",
                      maxWidth: "min(760px, 100%)",
                    }}
                  >
                    {slide.title}{" "}
                    <em style={{ fontStyle: "italic", color: "#3b8fd6" }}>{slide.titleEm}</em>
                  </h1>

                  <p
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: 16,
                      lineHeight: 1.7,
                      color: "#5c6b78",
                      maxWidth: 640,
                      margin: "0 auto 30px",
                    }}
                  >
                    {slide.body}
                  </p>
                </div>

                <div
                  className="cert-marquee-wrap"
                  style={{
                    position: "relative",
                    width: "100%",
                    overflow: "hidden",
                    WebkitMaskImage:
                      "linear-gradient(90deg, transparent 0, #000 4%, #000 96%, transparent 100%)",
                    maskImage:
                      "linear-gradient(90deg, transparent 0, #000 4%, #000 96%, transparent 100%)",
                  }}
                >
                  <div
                    className="cert-marquee-track"
                    style={{
                      display: "flex",
                      width: "max-content",
                      alignItems: "center",
                      gap: 64,
                      padding: "6px 0 6px 6%",
                      animation: "certMarquee 46s linear infinite",
                    }}
                  >
                    {[...CERTIFICATIONS, ...CERTIFICATIONS].map((c, ci) => (
                      <div
                        key={ci}
                        onMouseEnter={() => setIsHoveringBtn(true)}
                        onMouseLeave={() => setIsHoveringBtn(false)}
                        style={{
                          flex: "0 0 auto",
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                          cursor: "none",
                        }}
                      >
                        <div
                          style={{
                            flex: "0 0 auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <CertBadge shape={c.shape} color={c.color} label={c.badge} cross={c.cross} size={56} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                          <span
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontSize: 11.5,
                              fontWeight: 700,
                              letterSpacing: 1.3,
                              textTransform: "uppercase",
                              color: c.color,
                              whiteSpace: "nowrap",
                            }}
                          >
                            {c.label}
                          </span>
                          <p
                            style={{
                              fontFamily: "Georgia, 'Times New Roman', serif",
                              fontSize: 18,
                              color: "#16232e",
                              margin: 0,
                              lineHeight: 1.3,
                              whiteSpace: "nowrap",
                            }}
                          >
                            {c.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

  );
}

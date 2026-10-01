import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UnitIcon from "./UnitIcon.jsx";
import { useProductSpecs } from "../../context/ProductSpecsContext.jsx";

const CONTACT_PATH = "/design-your-water-system#contact";

const ACCENTS = {
  Signature: "#2f6fd6",
  Premium: "#2f6fd6",
  Classic: "#2f6fd6",
  Magnum: "#2f6fd6",
  Dehumidification: "#16324f",
  Residential: "#2f6fd6",
  "Advanced AWG": "#2f6fd6",
};

// The single "Full specs" destination shared by every ProductCard on
// every product page (/products/all + every /products/:categorySlug).
// Renders once at the app root and is driven entirely by
// ProductSpecsContext, so a click anywhere just calls openSpecs(product).
export default function ProductSpecsDrawer() {
  const { activeProduct: product, closeSpecs } = useProductSpecs();
  const navigate = useNavigate();

  const goToContact = () => {
    closeSpecs();
    navigate(CONTACT_PATH);
  };

  useEffect(() => {
    if (!product) return;
    const onKeyDown = (e) => e.key === "Escape" && closeSpecs();
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [product, closeSpecs]);

  if (!product) return null;

  const accent = ACCENTS[product.category] || "#2f6fd6";
  const image = (product.images || [])[0];
  const keyFeatures = [...product.features, ...(product.specs ? [product.specs] : [])];

  return (
    <div className="psd-overlay" onMouseDown={(e) => e.target === e.currentTarget && closeSpecs()}>
      <style>{`
        .psd-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(12, 22, 34, 0.45);
          backdrop-filter: blur(2px);
          display: flex;
          justify-content: flex-end;
          animation: psd-fade 0.2s ease;
        }
        @keyframes psd-fade { from { opacity: 0; } to { opacity: 1; } }
        .psd-panel {
          width: min(860px, 100%);
          height: 100%;
          background: #fff;
          overflow-y: auto;
          position: relative;
          animation: psd-slide 0.28s cubic-bezier(0.22, 1, 0.36, 1);
          font-family: var(--ap-font-body, "Inter", sans-serif);
        }
        @keyframes psd-slide {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .psd-hero {
          position: relative;
          min-height: 340px;
          display: flex;
          align-items: flex-end;
          background: linear-gradient(135deg, #eef2f8, #dde5f2);
          overflow: hidden;
        }
        .psd-hero-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .psd-hero-icon {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .psd-hero-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 18, 28, 0.88) 0%, rgba(10, 18, 28, 0.35) 55%, rgba(10, 18, 28, 0) 100%);
        }
        .psd-close {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 2;
          font-size: 18px;
          color: #12283e;
          transition: background 0.15s ease;
        }
        .psd-close:hover { background: #fff; }
        .psd-hero-text {
          position: relative;
          z-index: 1;
          padding: 28px 40px;
          color: #fff;
        }
        .psd-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.85);
          margin: 0 0 8px;
        }
        .psd-hero-text h2 {
          font-family: var(--ap-font-display, "Cormorant Garamond", serif);
          font-weight: 600;
          font-size: 34px;
          margin: 0;
        }
        .psd-hero-text p {
          font-family: var(--ap-font-display, "Cormorant Garamond", serif);
          font-style: italic;
          font-size: 15px;
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.9);
        }
        .psd-body { padding: 32px 40px 110px; }
        .psd-section-title {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #8a97a6;
          margin: 0 0 18px;
        }
        .psd-features {
          list-style: none;
          margin: 0 0 40px;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 24px;
        }
        .psd-features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          line-height: 1.5;
          color: #2d3b4a;
        }
        .psd-features li::before {
          content: "✓";
          color: var(--psd-accent);
          font-weight: 700;
          flex-shrink: 0;
        }
        .psd-spec-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 12px;
          overflow: hidden;
          border-radius: 12px;
        }
        .psd-spec-table tr:nth-child(odd) td { background: #f3f6fb; }
        .psd-spec-table td {
          padding: 16px 20px;
          font-size: 14px;
          vertical-align: top;
        }
        .psd-spec-table td:first-child {
          color: #6b7786;
          font-weight: 600;
          width: 38%;
        }
        .psd-spec-table td:last-child {
          color: #16222f;
          font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
          font-size: 13.5px;
        }
        .psd-patent-note {
          font-size: 12.5px;
          font-weight: 600;
          color: #b3261e;
          line-height: 1.5;
          margin: 4px 0 0;
        }
        .psd-actions {
          display: flex;
          gap: 14px;
          margin-top: 32px;
          flex-wrap: wrap;
        }
        .psd-quote-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          background: var(--psd-accent);
          border: none;
          border-radius: 999px;
          padding: 15px 28px;
          cursor: pointer;
        }
        .psd-close-btn {
          font-size: 14px;
          font-weight: 700;
          color: #12283e;
          background: #fff;
          border: 1px solid rgba(18, 40, 62, 0.15);
          border-radius: 999px;
          padding: 15px 28px;
          cursor: pointer;
        }
        @media (max-width: 640px) {
          .psd-hero-text, .psd-body { padding-left: 22px; padding-right: 22px; }
          .psd-features { grid-template-columns: 1fr; }
          .psd-hero-text h2 { font-size: 26px; }
        }
      `}</style>

      <div className="psd-panel" style={{ "--psd-accent": accent }} role="dialog" aria-modal="true" aria-label={`${product.name} full specifications`}>
        <div className="psd-hero">
          {image ? (
            <img className="psd-hero-photo" src={image} alt={`${product.name} — ${product.tagline}`} />
          ) : (
            <div className="psd-hero-icon">
              <UnitIcon category={product.category} size={140} />
            </div>
          )}
          <div className="psd-hero-scrim" />
          <button type="button" className="psd-close" aria-label="Close full specs" onClick={closeSpecs}>
            ✕
          </button>
          <div className="psd-hero-text">
            <p className="psd-eyebrow">
              {product.category}
              {product.capacity ? ` · ${product.capacity}` : ""}
            </p>
            <h2>{product.name}</h2>
            <p>{product.tagline}</p>
          </div>
        </div>

        <div className="psd-body">
          {keyFeatures.length > 0 && (
            <>
              <p className="psd-section-title">Key Features</p>
              <ul className="psd-features">
                {keyFeatures.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
            </>
          )}

          {product.fullSpecs && product.fullSpecs.length > 0 && (
            <>
              <p className="psd-section-title">Technical Specifications</p>
              <table className="psd-spec-table">
                <tbody>
                  {product.fullSpecs.map((row) => (
                    <tr key={row.label}>
                      <td>{row.label}</td>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {product.patentNote && (
            <p className="psd-patent-note">{product.patentNote}</p>
          )}

          <div className="psd-actions">
            <button type="button" className="psd-quote-btn" onClick={goToContact}>
              Request Quotation →
            </button>
            <button type="button" className="psd-close-btn" onClick={closeSpecs}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

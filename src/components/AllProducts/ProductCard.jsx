import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UnitIcon from "./UnitIcon.jsx";
import { useProductSpecs } from "../../context/ProductSpecsContext.jsx";

const ACCENTS = {
  Signature: "#2f6fd6",
  Premium: "#2f6fd6",
  Classic: "#2f6fd6",
  Magnum: "#2f6fd6",
  Dehumidification: "#5b6b7c",
  Residential: "#2f6fd6",
  "Advanced AWG": "#2f6fd6",
};

// Every "Enquire" button across every product card — regardless of
// category — always uses this same blue, so it reads as one consistent
// call to action instead of shifting color per category accent.
const ENQUIRE_BLUE = "#1f6fb2";
const CONTACT_PATH = "/design-your-water-system#contact";

export default function ProductCard({ product }) {
  const accent = ACCENTS[product.category] || "#2f6fd6";
  const images = product.images || [];
  const hasPhoto = images.length > 0;
  const [activeImage, setActiveImage] = useState(0);
  const { openSpecs } = useProductSpecs();
  const navigate = useNavigate();

  return (
    <article className="ap-card">
      <style>{`
        .ap-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: var(--ap-paper);
          border: 1px solid var(--ap-line);
          border-radius: 18px;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .ap-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 22px 44px -26px rgba(18, 40, 62, 0.28);
        }
        .ap-card-art {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
          background: linear-gradient(135deg, #eef2f8, #dde5f2);
          overflow: hidden;
          min-height: 260px;
        }
        .ap-card-art--photo {
          padding: 0;
        }
        .ap-card-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .ap-card-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: var(--ap-paper);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 6px 12px;
          border-radius: 999px;
          box-shadow: 0 4px 10px -4px rgba(18, 40, 62, 0.25);
          z-index: 2;
        }
        .ap-card-cap {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(18, 40, 62, 0.92);
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          padding: 6px 12px;
          border-radius: 999px;
          z-index: 2;
        }
        .ap-card-gallery-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.85);
          color: var(--ap-ink);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
        }
        .ap-card-gallery-nav:hover {
          background: #fff;
        }
        .ap-card-gallery-prev {
          left: 10px;
        }
        .ap-card-gallery-next {
          right: 10px;
        }
        .ap-card-gallery-dots {
          position: absolute;
          bottom: 16px;
          right: 16px;
          display: flex;
          gap: 6px;
          z-index: 2;
        }
        .ap-card-gallery-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          border: none;
          padding: 0;
          background: rgba(255, 255, 255, 0.55);
          cursor: pointer;
        }
        .ap-card-gallery-dot--active {
          background: #fff;
        }
        .ap-card-body {
          display: flex;
          flex-direction: column;
          padding: 24px 24px 20px;
        }
        .ap-card-body h3 {
          font-family: var(--ap-font-display);
          font-weight: 600;
          font-size: 24px;
          margin: 0;
          color: var(--ap-ink);
        }
        .ap-card-body .ap-tagline {
          font-family: var(--ap-font-display);
          font-style: italic;
          font-size: 15px;
          color: var(--ap-muted);
          margin: 4px 0 0;
        }
        .ap-card-features {
          list-style: none;
          margin: 16px 0 0;
          padding: 0;
          flex: 1;
        }
        .ap-card-features li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13.5px;
          line-height: 1.5;
          color: var(--ap-muted);
          margin-bottom: 8px;
        }
        .ap-card-features li::before {
          content: "✓";
          color: var(--ap-check);
          font-weight: 700;
          flex-shrink: 0;
        }
        .ap-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          border-top: 1px solid var(--ap-line);
          margin-top: 18px;
          padding-top: 16px;
        }
        .ap-card-price {
          font-size: 12px;
          color: var(--ap-muted);
        }
        .ap-card-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .ap-card-specs-btn {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          border: 1px solid var(--ap-line);
          background: transparent;
          border-radius: 999px;
          padding: 8px 14px;
          cursor: pointer;
          color: var(--ap-ink);
          transition: border-color 0.18s ease, color 0.18s ease;
        }
        .ap-card-specs-btn:hover {
          border-color: var(--ap-check);
          color: var(--ap-check);
        }
        .ap-card-enquire {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: #fff;
          background: var(--ap-enquire-blue);
          border: none;
          border-radius: 999px;
          padding: 9px 16px;
          cursor: pointer;
          transition: background 0.18s ease, transform 0.18s ease;
        }
        .ap-card-enquire:hover {
          background: var(--ap-enquire-blue-hover);
          transform: translateY(-1px);
        }
        @media (max-width: 640px) {
          .ap-card {
            grid-template-columns: 1fr;
          }
          .ap-card-art {
            min-height: 200px;
          }
          .ap-card-body {
            padding: 20px 18px 18px;
          }
          .ap-card-body h3 {
            font-size: 21px;
          }
          .ap-card-footer {
            flex-direction: column;
            align-items: flex-start;
          }
          .ap-card-actions {
            width: 100%;
            justify-content: space-between;
          }
          .ap-card-gallery-prev,
          .ap-card-gallery-next {
            display: none;
          }
        }
      `}</style>

      <div
        className={`ap-card-art ${hasPhoto ? "ap-card-art--photo" : ""}`}
        style={{ "--ap-check": accent }}
      >
        <span className="ap-card-badge" style={{ color: accent }}>
          {product.category}
        </span>

        {hasPhoto ? (
          <>
            <img
              className="ap-card-photo"
              src={images[activeImage]}
              alt={`${product.name} — ${product.tagline}`}
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="ap-card-gallery-nav ap-card-gallery-prev"
                  aria-label="Previous photo"
                  onClick={() =>
                    setActiveImage((i) => (i - 1 + images.length) % images.length)
                  }
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="ap-card-gallery-nav ap-card-gallery-next"
                  aria-label="Next photo"
                  onClick={() => setActiveImage((i) => (i + 1) % images.length)}
                >
                  ›
                </button>
                <div className="ap-card-gallery-dots">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Show photo ${i + 1}`}
                      className={`ap-card-gallery-dot ${
                        i === activeImage ? "ap-card-gallery-dot--active" : ""
                      }`}
                      onClick={() => setActiveImage(i)}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <UnitIcon category={product.category} size={110} />
        )}

        <span className="ap-card-cap">{product.capacity}</span>
      </div>

      <div
        className="ap-card-body"
        style={{
          "--ap-check": accent,
          "--ap-enquire-blue": ENQUIRE_BLUE,
          "--ap-enquire-blue-hover": "#164e80",
        }}
      >
        <h3>{product.name}</h3>
        <p className="ap-tagline">{product.tagline}</p>

        <ul className="ap-card-features">
          {product.features.map((feat) => (
            <li key={feat}>{feat}</li>
          ))}
          {product.specs && <li>{product.specs}</li>}
        </ul>

        <div className="ap-card-footer">
          <span className="ap-card-price">₹ {product.price}</span>
          <div className="ap-card-actions">
            <button
              type="button"
              className="ap-card-specs-btn"
              onClick={() => openSpecs(product)}
            >
              Full specs →
            </button>
            <button
              type="button"
              className="ap-card-enquire"
              onClick={() => navigate(CONTACT_PATH)}
            >
              Enquire
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import "../components/AllProducts/ap-base.css";
import UnitIcon from "../components/AllProducts/UnitIcon.jsx";
import JoinMissionCta from "../components/shared/JoinMissionCta.jsx";
import { allProducts, categoryToSlug } from "../data/allProductsCatalog.js";
import { tm } from "../utils/formatTM.jsx";

const ACCENTS = {
  Signature: "#b9762f",
  Premium: "#2f6fd6",
  Classic: "#2f6fd6",
  Magnum: "#2f6fd6",
  Dehumidification: "#5b6b7c",
  Residential: "#2f6fd6",
};

// The "Full specs" destination for every product card across the
// site (All Products grid + every /products/:categorySlug page all
// share ProductCard, so this one route covers all of them).
export default function ProductDetail() {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return <Navigate to="/products/all" replace />;
  }

  const accent = ACCENTS[product.category] || "#2f6fd6";
  const images = product.images || [];
  const hasPhoto = images.length > 0;

  const specRows = [
    { label: "Category", value: product.category },
    { label: "Capacity", value: product.capacity },
    { label: "Footprint", value: product.footprint },
    { label: "Energy", value: product.energy },
    { label: "Technical specs", value: product.specs },
    { label: "Price", value: `₹ ${product.price}` },
  ].filter((row) => row.value);

  return (
    <main className="ap-page pd-page">
      <style>{`
        .pd-page { padding: 140px 0 0; }
        .pd-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--ap-muted);
          text-decoration: none;
          margin-bottom: 28px;
        }
        .pd-back:hover { color: var(--ap-blue-accent); }
        .pd-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
          padding-bottom: 72px;
        }
        .pd-art {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #eef2f8, #dde5f2);
          border-radius: 22px;
          overflow: hidden;
          min-height: 380px;
        }
        .pd-art--photo { padding: 0; }
        .pd-photo { width: 100%; height: 100%; object-fit: cover; display: block; min-height: 380px; }
        .pd-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: var(--ap-paper);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 7px 14px;
          border-radius: 999px;
          box-shadow: 0 4px 10px -4px rgba(18, 40, 62, 0.25);
        }
        .pd-cap {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(18, 40, 62, 0.92);
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          padding: 7px 14px;
          border-radius: 999px;
        }
        .pd-thumbs {
          display: flex;
          gap: 10px;
          margin-top: 14px;
        }
        .pd-thumb {
          width: 64px;
          height: 64px;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid transparent;
          padding: 0;
          cursor: pointer;
          background: var(--ap-sky-mist);
        }
        .pd-thumb--active { border-color: var(--ap-check); }
        .pd-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .pd-body h1 {
          font-family: var(--ap-font-display);
          font-weight: 600;
          font-size: 40px;
          margin: 0 0 6px;
          color: var(--ap-ink);
        }
        .pd-body .pd-tagline {
          font-family: var(--ap-font-display);
          font-style: italic;
          font-size: 17px;
          color: var(--ap-muted);
          margin: 0 0 28px;
        }
        .pd-spec-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 32px;
        }
        .pd-spec-table tr { border-bottom: 1px solid var(--ap-line); }
        .pd-spec-table td { padding: 12px 0; font-size: 14.5px; }
        .pd-spec-table td:first-child {
          color: var(--ap-muted);
          font-weight: 600;
          width: 40%;
        }
        .pd-spec-table td:last-child { color: var(--ap-ink); font-weight: 600; }
        .pd-features {
          list-style: none;
          margin: 0 0 36px;
          padding: 0;
        }
        .pd-features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--ap-muted);
          margin-bottom: 10px;
        }
        .pd-features li::before {
          content: "✓";
          color: var(--ap-check);
          font-weight: 700;
          flex-shrink: 0;
        }
        .pd-actions { display: flex; gap: 14px; flex-wrap: wrap; }
        .pd-enquire {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: #fff;
          background: var(--ap-check);
          border: none;
          border-radius: 999px;
          padding: 14px 26px;
          cursor: pointer;
        }
        .pd-category-link {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: var(--ap-ink);
          border: 1px solid var(--ap-line);
          border-radius: 999px;
          padding: 14px 26px;
          text-decoration: none;
        }
        .pd-category-link:hover { border-color: var(--ap-check); color: var(--ap-check); }
        @media (max-width: 860px) {
          .pd-hero { grid-template-columns: 1fr; gap: 32px; }
          .pd-body h1 { font-size: 30px; }
        }
      `}</style>

      <div className="ap-container">
        <Link to={`/products/${categoryToSlug(product.category)}`} className="pd-back">
          ← Back to {product.category}
        </Link>

        <div className="pd-hero" style={{ "--ap-check": accent }}>
          <div>
            <div className={`pd-art ${hasPhoto ? "pd-art--photo" : ""}`}>
              <span className="pd-badge" style={{ color: accent }}>
                {product.category}
              </span>
              {hasPhoto ? (
                <img
                  className="pd-photo"
                  src={images[activeImage]}
                  alt={`${product.name} — ${product.tagline}`}
                />
              ) : (
                <UnitIcon category={product.category} size={160} />
              )}
              <span className="pd-cap">{product.capacity}</span>
            </div>

            {images.length > 1 && (
              <div className="pd-thumbs">
                {images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    className={`pd-thumb ${i === activeImage ? "pd-thumb--active" : ""}`}
                    onClick={() => setActiveImage(i)}
                    aria-label={`Show photo ${i + 1}`}
                  >
                    <img src={src} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="pd-body" style={{ "--ap-check": accent }}>
            <span className="ap-eyebrow">Full specification</span>
            <h1>{tm(product.name)}</h1>
            <p className="pd-tagline">{product.tagline}</p>

            <table className="pd-spec-table">
              <tbody>
                {specRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <ul className="pd-features">
              {product.features.map((feat) => (
                <li key={feat}>{feat}</li>
              ))}
            </ul>

            <div className="pd-actions">
              <button type="button" className="pd-enquire">
                Enquire about {tm(product.name)}
              </button>
              <Link to="/products/all" className="pd-category-link">
                View all products
              </Link>
            </div>
          </div>
        </div>
      </div>

      <JoinMissionCta />
    </main>
  );
}

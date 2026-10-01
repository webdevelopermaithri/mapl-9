import { useMemo } from "react";
import ProductCard from "./ProductCard.jsx";
import { AP_CATEGORIES } from "../../data/allProductsCatalog.js";

export default function ProductGrid({ id, products, activeCategory, onCategoryChange }) {
  const filtered = useMemo(
    () => (activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory)),
    [products, activeCategory]
  );

  return (
    <section id={id} className="ap-grid-section">
      <style>{`
        .ap-grid-section {
          padding: 56px 0;
          background: var(--ap-cream);
          scroll-margin-top: 24px;
        }
        .ap-grid-section h2 {
          font-family: var(--ap-font-display);
          font-weight: 500;
          font-size: 44px;
          margin: 18px 0 32px;
          color: var(--ap-ink);
        }
        .ap-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 40px;
        }
        .ap-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .ap-empty {
          text-align: center;
          color: var(--ap-muted);
          font-size: 14px;
          margin-top: 40px;
        }
        @media (max-width: 900px) {
          .ap-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="ap-container">
        <span className="ap-eyebrow">Product models</span>
        <h2>All MEGHDOOT<sup className="tm-mark">®</sup> systems.</h2>

        <div className="ap-tabs" role="tablist" aria-label="Filter products by category">
          {AP_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={cat === activeCategory}
              className={`ap-pill ${cat === activeCategory ? "ap-pill--active" : ""}`}
              onClick={() => onCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="ap-cards">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && <p className="ap-empty">No models in this category yet.</p>}
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import ProductCard from "./ProductCard.jsx";
import { AP_CATEGORIES, categoryToSlug } from "../../data/allProductsCatalog.js";

export default function CategoryGrid({ category, products }) {
  return (
    <section className="ap-grid-section" id="models">
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
        .ap-tabs a {
          text-decoration: none;
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
        <h2>{category} systems.</h2>

        <div className="ap-tabs" role="tablist" aria-label="Browse products by category">
          <Link to="/products/all" className="ap-pill">
            All
          </Link>
          {AP_CATEGORIES.filter((c) => c !== "All").map((cat) => (
            <Link
              key={cat}
              to={`/products/${categoryToSlug(cat)}`}
              className={`ap-pill ${cat === category ? "ap-pill--active" : ""}`}
              aria-current={cat === category ? "page" : undefined}
            >
              {cat}
            </Link>
          ))}
        </div>

        <div className="ap-cards">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && <p className="ap-empty">No models in this category yet.</p>}
      </div>
    </section>
  );
}

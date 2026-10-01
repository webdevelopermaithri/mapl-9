import { Link } from "react-router-dom";
import { categoryToSlug } from "../../data/allProductsCatalog.js";

const CATEGORIES = [
  {
    count: "03",
    title: "Signature",
    desc: "Industrial-scale AWG for large facilities",
    accent: "#2f6fd6",
  },
  {
    count: "02",
    title: "Magnum",
    desc: "For large schools and apartments",
    accent: "#2f6fd6",
  },
  {
    count: "03",
    title: "Premium",
    desc: "For businesses, labs and schools",
    accent: "#2fb0c8",
  },
  {
    count: "02",
    title: "Classic",
    desc: "For households and small offices",
    accent: "#2f6fd6",
  },
  {
    count: "01",
    title: "Residential",
    desc: "Fresh, pure drinking water for your home",
    accent: "#2f6fd6",
  },
  {
    count: "01",
    title: "Advanced AWG",
    desc: "Desert-grade AWG at commercial scale",
    accent: "#2f6fd6",
  },
  {
    count: "01",
    title: "Dehumidification",
    desc: "Indoor humidity control protecting electronics in radar installations",
    accent: "#8a94a3",
  },
];

export default function ProductCategories() {
  return (
    <section className="mp-categories">
      <style>{`
        .mp-categories {
          padding: 88px 0;
          background: var(--mp-cream);
        }
        .mp-categories-head {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 32px;
          align-items: end;
          margin-bottom: 48px;
        }
        .mp-categories-head h2 {
          font-family: var(--mp-font-display);
          font-weight: 500;
          font-size: 42px;
          line-height: 1.15;
          margin: 18px 0 0;
          color: var(--mp-ink);
        }
        .mp-categories-head h2 em {
          font-style: italic;
          color: var(--mp-blue-accent);
        }
        .mp-categories-head p {
          color: var(--mp-muted);
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
        }
        .mp-cat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .mp-cat-card {
          background: var(--mp-paper);
          border: 1px solid var(--mp-line);
          border-radius: 16px;
          padding: 32px 28px 28px;
          display: flex;
          flex-direction: column;
          min-height: 220px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .mp-cat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -22px rgba(18, 40, 62, 0.25);
          border-color: transparent;
        }
        .mp-cat-count {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .mp-cat-card h3 {
          font-family: var(--mp-font-display);
          font-weight: 600;
          font-size: 26px;
          margin: 14px 0 8px;
          color: var(--mp-ink);
        }
        .mp-cat-card p {
          color: var(--mp-muted);
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
          flex: 1;
        }
        .mp-cat-link {
          margin-top: 18px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-decoration: none;
          width: fit-content;
        }
        @media (max-width: 900px) {
          .mp-categories-head {
            grid-template-columns: 1fr;
          }
          .mp-cat-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (min-width: 901px) and (max-width: 1180px) {
          .mp-cat-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <div className="mp-container">
        <div className="mp-categories-head">
          <div>
            <span className="mp-eyebrow">Product Categories</span>
            <h2>
              Explore MEGHDOOT<sup className="tm-mark">®</sup> by <em>product family.</em>
            </h2>
          </div>
          <p>
            Choose a category to view the right systems, capacities, features
            and specifications. Each family has its own detailed product
            page.
          </p>
        </div>

        <div className="mp-cat-grid">
          {CATEGORIES.map((cat) => {
            const slug = categoryToSlug(cat.title);
            return (
              <div className="mp-cat-card" key={cat.title} id={slug}>
                <span className="mp-cat-count" style={{ color: cat.accent }}>
                  {cat.count} Models
                </span>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <Link className="mp-cat-link" to={`/products/${slug}`} style={{ color: cat.accent }}>
                  View Products <span aria-hidden="true">→</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

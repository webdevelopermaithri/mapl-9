import React from "react";
import { Link } from "react-router-dom";
import { categoryToSlug } from "../../data/allProductsCatalog.js";

const CATEGORIES = [
  {
    count: "03",
    title: "Signature",
    displayTitle: "MEGHDOOT Signature",
    desc: "For large corporates and complexes",
    accent: "#2f6fd6",
    image: "/images/products/signature-2k-1.jpg",
  },
  {
    count: "02",
    title: "Magnum",
    displayTitle: "MEGHDOOT Magnum",
    desc: "For large schools and apartments",
    accent: "#2f6fd6",
    image: "/images/products/magnum-1.jpg",
  },
  {
    count: "03",
    title: "Premium",
    displayTitle: "MEGHDOOT Premium",
    desc: "For businesses, labs and schools",
    accent: "#2fb0c8",
    image: "/images/products/premium-1.png",
  },
  {
    count: "02",
    title: "Classic",
    displayTitle: "MEGHDOOT Classic",
    desc: "For households and small offices",
    accent: "#2f6fd6",
    image: "/images/products/classic-plus-1.jpg",
  },
  {
    count: "02",
    title: "Residential",
    desc: "Fresh, pure drinking water for your home",
    accent: "#2f6fd6",
    image: "/images/products/atom-1.png",
  },
  {
    count: "01",
    title: "Advanced AWG",
    displayTitle: "Advanced AWG",
    desc: "Proprietary technology extending AWG operation across diverse climatic conditions",
    accent: "#2f6fd6",
    image: "/images/products/advanced-awg-category.jpg",
  },
  {
    count: "01",
    title: "Dehumidification",
    desc: "Indoor humidity control protecting electronics in radar installations",
    accent: "#8a94a3",
    image: "/images/products/compact-dehumidification-category.jpg",
  },
];

export default function ProductCategories() {
  return (
    <section className="categories">
      <style>{`
        .categories {
          padding: 88px 0;
          background: var(--cream);
        }
        .categories-head {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 32px;
          align-items: end;
          margin-bottom: 48px;
        }
        .categories-head h2 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 42px;
          line-height: 1.15;
          margin: 18px 0 0;
          color: var(--ink);
        }
        .categories-head h2 em {
          font-style: italic;
          color: var(--blue-accent);
        }
        .categories-head p {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
        }
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .cat-card {
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 220px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .cat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -22px rgba(18, 40, 62, 0.25);
          border-color: transparent;
        }
        .cat-card-media {
          aspect-ratio: 16 / 10;
          background: linear-gradient(135deg, #eef2f8, #dbe7fa);
          overflow: hidden;
        }
        .cat-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }
        .cat-card:hover .cat-card-media img {
          transform: scale(1.05);
        }
        .cat-card-body {
          padding: 24px 28px 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .cat-count {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .cat-card h3 {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 26px;
          margin: 14px 0 8px;
          color: var(--ink);
        }
        .cat-card p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
          flex: 1;
        }
        @media (max-width: 900px) {
          .categories-head {
            grid-template-columns: 1fr;
          }
          .cat-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (min-width: 901px) and (max-width: 1180px) {
          .cat-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <div className="container">
        <div className="categories-head">
          <div>
            <span className="eyebrow">Product Categories</span>
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

        <div className="cat-grid">
          {CATEGORIES.map((cat) => {
            const slug = categoryToSlug(cat.title);
            return (
              <Link className="cat-card" key={cat.title} to={`/products/${slug}#models`}>
                <div className="cat-card-media">
                  <img src={cat.image} alt={`${cat.displayTitle || cat.title} MEGHDOOT® product family`} />
                </div>
                <div className="cat-card-body">
                  <span className="cat-count" style={{ color: cat.accent }}>
                    {cat.count} Models
                  </span>
                  <h3>{cat.displayTitle || cat.title}</h3>
                  <p>{cat.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

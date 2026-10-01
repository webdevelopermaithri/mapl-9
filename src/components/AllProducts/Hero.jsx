import UnitIcon from "./UnitIcon.jsx";

const QUICK_PILLS = ["Signature", "Magnum", "Premium", "Classic", "Dehumidification", "Residential"];

export default function Hero({ featured, productCount, onJumpToCategory }) {
  return (
    <section className="ap-hero">
      <style>{`
        .ap-hero {
          position: relative;
          background: linear-gradient(180deg, #ffffff 0%, var(--ap-sky-mist) 100%);
          padding: 96px 0 72px;
          overflow: hidden;
        }
        .ap-hero .ap-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .ap-hero-copy h1 {
          font-family: var(--ap-font-display);
          font-weight: 500;
          font-size: 56px;
          line-height: 1.06;
          margin: 22px 0 0;
          color: var(--ap-ink);
        }
        .ap-hero-copy p {
          margin: 24px 0 32px;
          font-size: 16px;
          line-height: 1.65;
          color: var(--ap-muted);
          max-width: 46ch;
        }
        .ap-hero-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .ap-hero-feature {
          background: var(--ap-paper);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 30px 60px -25px rgba(18, 40, 62, 0.28);
        }
        .ap-hero-feature-art {
          aspect-ratio: 4 / 3;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #eef2f8, #dbe7fa);
          overflow: hidden;
        }
        .ap-hero-feature-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .ap-hero-feature-body {
          padding: 32px;
        }
        .ap-hero-feature-body h2 {
          font-family: var(--ap-font-display);
          font-weight: 600;
          font-size: 30px;
          margin: 10px 0 6px;
          color: var(--ap-ink);
        }
        .ap-hero-feature-body p {
          margin: 0;
          font-size: 14px;
          color: var(--ap-muted);
        }
        .ap-hero-feature-cap {
          display: inline-block;
          margin-top: 18px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--ap-teal);
          background: #e6f6f6;
          padding: 8px 16px;
          border-radius: 999px;
        }
        @media (max-width: 900px) {
          .ap-hero .ap-container {
            grid-template-columns: 1fr;
          }
          .ap-hero-copy h1 {
            font-size: 40px;
          }
        }
      `}</style>

      <div className="ap-container">
        <div className="ap-hero-copy">
          <span className="ap-eyebrow">MEGHDOOT<sup className="tm-mark">®</sup> product family</span>
          <h1>Complete product directory.</h1>
          <p>
            Browse {productCount} models with capacities, features and technical specifications for
            this category. Open full specs on any product to compare fit and deployment needs.
          </p>
          <div className="ap-hero-pills">
            {QUICK_PILLS.map((label) => (
              <button
                key={label}
                type="button"
                className="ap-pill"
                onClick={() => onJumpToCategory(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {featured && (
          <div className="ap-hero-feature">
            <div className="ap-hero-feature-art">
              {featured.images?.length ? (
                <img
                  className="ap-hero-feature-photo"
                  src={featured.images[0]}
                  alt={`${featured.name} — ${featured.tagline}`}
                />
              ) : (
                <UnitIcon category={featured.category} size={140} />
              )}
            </div>
            <div className="ap-hero-feature-body">
              <span className="ap-eyebrow">Featured model</span>
              <h2>{featured.name}</h2>
              <p>{featured.tagline}</p>
              <span className="ap-hero-feature-cap">{featured.capacity}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

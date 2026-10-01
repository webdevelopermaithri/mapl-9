import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="mp-hero">
      <style>{`
        .mp-hero {
          position: relative;
          background: linear-gradient(180deg, #ffffff 0%, #eaf1fb 100%);
          padding: 96px 0 64px;
          overflow: hidden;
        }
        .mp-hero .mp-container {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 56px;
          align-items: center;
        }
        .mp-hero-copy h1 {
          font-family: var(--mp-font-display);
          font-weight: 500;
          font-size: 56px;
          line-height: 1.08;
          margin: 22px 0 0;
          color: var(--mp-ink);
        }
        .mp-hero-copy h1 em {
          display: block;
          font-style: italic;
          font-weight: 500;
          color: var(--mp-blue-accent);
          margin-top: 4px;
        }
        .mp-hero-copy p {
          margin: 26px 0 34px;
          font-size: 18px;
          line-height: 1.65;
          color: var(--mp-muted);
          max-width: 52ch;
        }
        .mp-hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .mp-hero-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 30px 60px -25px rgba(18, 40, 62, 0.35);
          max-width: 100%;
          margin-left: auto;
        }
        .mp-hero-image video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .mp-hero-image-fallback {
          display: none;
          align-items: center;
          justify-content: center;
          aspect-ratio: 4 / 3;
          background: linear-gradient(135deg, #dbe7fa, #cfe0f6);
          color: var(--mp-muted);
          font-size: 14px;
          font-weight: 600;
        }
        @media (max-width: 900px) {
          .mp-hero .mp-container {
            grid-template-columns: 1fr;
          }
          .mp-hero-copy h1 {
            font-size: 40px;
          }
          .mp-hero-image {
            max-width: 100%;
            margin-left: 0;
          }
        }
      `}</style>

      <div className="mp-container">
        <div className="mp-hero-copy">
          <span className="mp-eyebrow">Products</span>
          <h1>
            From a glass at home
            <em>to millions of litres to anywhere.</em>
          </h1>
          <p>
            Purpose-built MEGHDOOT&reg; and humidity-control systems for
            commercial, community, industrial, coastal and residential
            environments.
          </p>
          <div className="mp-hero-actions">
            <Link className="mp-btn mp-btn-primary" to="/design-your-water-system#contact">
              Request Quotation <span aria-hidden="true">→</span>
            </Link>
            <Link className="mp-btn mp-btn-primary" to="/applications">
              See Use Cases <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mp-hero-image">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/meghdoot-unit.jpg"
          >
            <source src="/media/meghdoot-product-turntable.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

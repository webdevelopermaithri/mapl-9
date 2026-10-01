import { Link } from "react-router-dom";
import bubblesVideo from "../../assets/shared/bubbles-bg.mp4";

export default function CTASection() {
  return (
    <section className="mp-cta-section">
      <style>{`
        .mp-cta-section {
          padding: 120px 0 140px;
          background: var(--mp-paper);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .mp-cta-section .mp-cta-bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.4;
          z-index: 0;
          pointer-events: none;
        }
        .mp-cta-section .mp-cta-bubbles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .mp-cta-section .mp-cta-bubbles span {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, rgba(63, 116, 221, 0.16), rgba(63, 116, 221, 0.02));
          animation: mp-float-y 8s ease-in-out infinite;
        }
        .mp-cta-section .mp-cta-bubbles span:nth-child(1) { width: 90px; height: 90px; left: 6%; top: 12%; animation-duration: 7s; }
        .mp-cta-section .mp-cta-bubbles span:nth-child(2) { width: 46px; height: 46px; left: 14%; top: 68%; animation-duration: 6s; animation-delay: 0.6s; }
        .mp-cta-section .mp-cta-bubbles span:nth-child(3) { width: 34px; height: 34px; right: 10%; top: 20%; animation-duration: 9s; animation-delay: 0.3s; }
        .mp-cta-section .mp-cta-bubbles span:nth-child(4) { width: 70px; height: 70px; right: 16%; bottom: 12%; animation-duration: 7.5s; animation-delay: 0.9s; }
        .mp-cta-section .mp-cta-bubbles span:nth-child(5) { width: 20px; height: 20px; left: 48%; top: 8%; animation-duration: 5.5s; }
        @keyframes mp-float-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .mp-cta-section .mp-container {
          position: relative;
          z-index: 1;
        }
        .mp-cta-section .mp-eyebrow {
          justify-content: center;
        }
        .mp-cta-section .mp-eyebrow::before {
          display: none;
        }
        .mp-cta-section h2 {
          font-family: var(--mp-font-display);
          font-weight: 400;
          font-size: clamp(2.1rem, 4.6vw, 3.2rem);
          line-height: 1.2;
          margin: 20px auto 18px;
          max-width: 18ch;
          color: var(--mp-ink);
        }
        .mp-cta-section h2 em {
          font-style: italic;
          color: var(--mp-blue-accent);
          display: block;
        }
        .mp-cta-section p {
          color: var(--mp-muted);
          font-size: 16px;
          line-height: 1.6;
          max-width: 46ch;
          margin: 0 auto 36px;
        }
      `}</style>

      <video className="mp-cta-bg-video" autoPlay muted loop playsInline>
        <source src={bubblesVideo} type="video/mp4" />
      </video>
      <div className="mp-cta-bubbles" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      <div className="mp-container">
        <span className="mp-eyebrow">Not sure which model?</span>
        <h2>
          We'll size the right platform
          <em>for your mission.</em>
        </h2>
        <p>
          Share your scale, geography and timeline. Our engineers will
          propose the exact configuration and service plan.
        </p>
        <Link className="mp-btn mp-btn-primary" to="/design-your-water-system#contact">
          Request Proposal <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

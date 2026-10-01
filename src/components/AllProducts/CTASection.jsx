import { Link } from "react-router-dom";
import bubblesVideo from "../../assets/shared/bubbles-bg.mp4";

export default function CTASection() {
  return (
    <section className="ap-cta">
      <style>{`
        .ap-cta {
          padding: 120px 0 140px;
          background: var(--ap-paper);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .ap-cta .ap-cta-bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.4;
          z-index: 0;
          pointer-events: none;
        }
        .ap-cta .ap-cta-bubbles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .ap-cta .ap-cta-bubbles span {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, rgba(63, 116, 221, 0.16), rgba(63, 116, 221, 0.02));
          animation: ap-float-y 8s ease-in-out infinite;
        }
        .ap-cta .ap-cta-bubbles span:nth-child(1) { width: 90px; height: 90px; left: 6%; top: 12%; animation-duration: 7s; }
        .ap-cta .ap-cta-bubbles span:nth-child(2) { width: 46px; height: 46px; left: 14%; top: 68%; animation-duration: 6s; animation-delay: 0.6s; }
        .ap-cta .ap-cta-bubbles span:nth-child(3) { width: 34px; height: 34px; right: 10%; top: 20%; animation-duration: 9s; animation-delay: 0.3s; }
        .ap-cta .ap-cta-bubbles span:nth-child(4) { width: 70px; height: 70px; right: 16%; bottom: 12%; animation-duration: 7.5s; animation-delay: 0.9s; }
        .ap-cta .ap-cta-bubbles span:nth-child(5) { width: 20px; height: 20px; left: 48%; top: 8%; animation-duration: 5.5s; }
        @keyframes ap-float-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .ap-cta .ap-container {
          position: relative;
          z-index: 1;
        }
        .ap-cta .ap-eyebrow {
          justify-content: center;
        }
        .ap-cta .ap-eyebrow::before {
          display: none;
        }
        .ap-cta h2 {
          font-family: var(--ap-font-display);
          font-weight: 400;
          font-size: clamp(2.1rem, 4.6vw, 3.2rem);
          line-height: 1.2;
          margin: 20px auto 18px;
          max-width: 20ch;
          color: var(--ap-ink);
        }
        .ap-cta h2 em {
          font-style: italic;
          color: var(--ap-blue-accent);
          display: block;
        }
        .ap-cta p {
          color: var(--ap-muted);
          font-size: 16px;
          line-height: 1.6;
          max-width: 46ch;
          margin: 0 auto 36px;
        }
      `}</style>

      <video className="ap-cta-bg-video" autoPlay muted loop playsInline>
        <source src={bubblesVideo} type="video/mp4" />
      </video>
      <div className="ap-cta-bubbles" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      <div className="ap-container">
        <span className="ap-eyebrow">Not sure which model?</span>
        <h2>
          We&rsquo;ll size the right platform
          <em>for your mission.</em>
        </h2>
        <p>
          Share your scale, geography and timeline. Our engineers will propose the exact
          configuration and service plan.
        </p>
        <Link className="ap-btn ap-btn-primary" to="/design-your-water-system#contact">
          Request Proposal <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

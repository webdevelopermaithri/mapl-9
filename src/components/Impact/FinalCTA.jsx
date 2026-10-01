import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section className="il-final-cta">
      <div className="il-section">
        <div className="il-cta-grid">
          <div className="il-cta-photo-frame">
            {!imgFailed && (
              <img
                src="/assets/impact-cta-water-drop.jpg"
                alt="Water droplet rippling outward"
                onError={() => setImgFailed(true)}
              />
            )}
          </div>

          <div>
            <span className="eyebrow">The Next Decade</span>
            <h2 className="il-h2">
              Every litre is <span className="italic" style={{ color: 'var(--blue-600)' }}>a vote for tomorrow.</span>
            </h2>
            <p className="il-sub">
              Our next chapter: national-scale water security deployments, green
              hydrogen feedstock, and the first AWG-powered mega-cities. Join us.
            </p>
            <div className="il-cta-buttons">
              <Link to="/design-your-water-system#contact" className="il-btn il-btn-primary">
                Design Your Water System →
              </Link>
              <Link to="/design-your-water-system#contact" className="il-btn il-btn-secondary">
                Evaluate Your Site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

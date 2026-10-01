import { useState } from 'react';
import backgroundImage from '../../assets/Background image.png';
import BubbleField from '../common/BubbleField.jsx';

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section className="il-hero">
      {!imgFailed && (
        <img
          className="il-hero-bg-img"
          src={backgroundImage}
          alt=""
          onError={() => setImgFailed(true)}
        />
      )}

      <div className="il-hero-scrim" />
      <BubbleField count={16} blendMode="multiply" />

      <div className="il-hero-inner">
        <span className="eyebrow">The Proof Is Live</span>

        <h1 className="il-hero-title">
          We don&rsquo;t preach.
          <br />
          <span className="il-gold">We prove.</span>
        </h1>

        <p className="il-hero-sub">
          Installed, operational Maithri systems generating water from air,
          right now, across 40+ countries. These are not projections. They are
          the ledger of a quietly built decade.
        </p>
      </div>
    </section>
  );
}
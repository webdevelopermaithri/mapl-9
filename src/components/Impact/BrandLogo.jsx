import { useState } from 'react';

// Renders a real company logo (sourced in data/brands.js); if the image
// fails to load, it falls back to the plain company name so the marquee
// never shows a broken image.
export default function BrandLogo({ b }) {
  const [failed, setFailed] = useState(false);
  const showFallback = !b.logo || failed;

  if (showFallback) {
    return <span className="il-brand-logo-fallback">{b.name}</span>;
  }

  return (
    <img
      src={b.logo}
      alt={b.name}
      className="il-brand-logo-img"
      onError={() => setFailed(true)}
    />
  );
}

import Marquee from './Marquee.jsx';
import BrandLogo from './BrandLogo.jsx';
import { BRANDS } from '../../data/brands.js';

const CLIENTS_EYEBROW = '150+ RESTAURANTS, BREWERIES, CAFES, ENTERPRISES';

export default function ClientLogos() {
  return (
    <div className="il-clients-wrap">
      <span className="eyebrow">{CLIENTS_EYEBROW}</span>
      <Marquee
        items={BRANDS}
        speedSeconds={38}
        light
        renderItem={(brand) => <BrandLogo b={brand} />}
      />
    </div>
  );
}

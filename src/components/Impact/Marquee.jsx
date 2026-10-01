// Generic infinite-scroll ticker used by the Impact page's client-logo bar.
// Pass any array of items and a renderItem function.
export default function Marquee({ items, renderItem, speedSeconds = 28, light = false }) {
  // Duplicate once so the loop is seamless (track scrolls exactly -50%).
  const looped = [...items, ...items];

  return (
    <div className={`il-marquee-bar${light ? ' il-light' : ''}`}>
      <div className="il-marquee-track" style={{ '--il-marquee-duration': `${speedSeconds}s` }}>
        {looped.map((item, i) => (
          <div className="il-marquee-item" key={i}>
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  );
}

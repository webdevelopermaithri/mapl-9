import "../Water/WaterHero.css";

function titleCase(str) {
  return str.charAt(0) + str.slice(1).toLowerCase();
}

export default function CategoryHero({ category }) {
  const label = titleCase(category);
  return (
    <section className="wp-hero">
      <p className="wp-hero__eyebrow">
        <span className="wp-hero__eyebrow-rule" />
        R&amp;D Portfolio
      </p>
      <h1 className="wp-hero__title">
        {label} concepts moving from <em>research to pilots.</em>
      </h1>
      <p className="wp-hero__lede">
        Browse Maithri&apos;s {label.toLowerCase()} research map: the concepts, operational
        value and deployment opportunities from the R&amp;D-to-marketing brief — the same
        catalog that powers the full portfolio directory.
      </p>
    </section>
  );
}

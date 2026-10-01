/**
 * Splits a string on the ® character and renders it as a small
 * superscript span, so "MEGHDOOT®" always displays with a properly
 * sized trademark mark instead of a full-size ® glyph.
 *
 * Safe to use anywhere a string is rendered as JSX children, e.g.
 *   <h2>{tm(item.title)}</h2>
 *
 * If the input has no ® character (or isn't a string), it is
 * returned unchanged.
 */
export function tm(text) {
  if (typeof text !== "string" || !text.includes("®")) return text;

  const parts = text.split("®");
  const nodes = [];

  parts.forEach((part, i) => {
    if (part) nodes.push(part);
    if (i < parts.length - 1) {
      nodes.push(
        <sup className="tm-mark" key={`tm-${i}`}>
          ®
        </sup>
      );
    }
  });

  return nodes;
}

export default tm;

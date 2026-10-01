// Formats an integer using the Indian numbering system:
// last 3 digits, then groups of 2 to the left (37,22,236 not 3,722,236).
export function formatIndian(num) {
  const n = Math.round(num);
  const isNegative = n < 0;
  const str = Math.abs(n).toString();

  if (str.length <= 3) return (isNegative ? '-' : '') + str;

  const lastThree = str.slice(-3);
  const rest = str.slice(0, -3);
  const grouped = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',');

  return (isNegative ? '-' : '') + grouped + ',' + lastThree;
}

// Indian digit grouping: last 3 digits, then groups of 2 (e.g. 3722268 -> "37,22,268")
// Indian digit grouping: last 3 digits, then groups of 2 (e.g. 3722268 -> "37,22,268")
export function formatIndian(n) {
  const s = String(Math.round(n));
  if (s.length <= 3) return s;
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3);
  const grouped = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return grouped + "," + last3;
}

export function formatStatValue(n, format) {
  if (format === "indian") return formatIndian(n);
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

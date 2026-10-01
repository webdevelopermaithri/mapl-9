const common = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function HeartIcon() {
  return (
    <svg {...common}>
      <path d="M12 20.5s-7.5-4.6-9.8-9.2C.6 7.6 2.4 4 6 4c2.1 0 3.6 1.2 6 3.6C14.4 5.2 15.9 4 18 4c3.6 0 5.4 3.6 3.8 7.3-2.3 4.6-9.8 9.2-9.8 9.2Z" />
    </svg>
  );
}

export function CompassIcon() {
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="m14.8 9.2-1.9 5.6-5.6 1.9 1.9-5.6 5.6-1.9Z" />
    </svg>
  );
}

export function SparkIcon() {
  return (
    <svg {...common}>
      <path d="M12 2.5 13.6 9l6.5 1.6-6.5 1.6L12 18.7l-1.6-6.5L3.9 10.6l6.5-1.6L12 2.5Z" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19M12 2.5c2.6 2.6 4 6 4 9.5s-1.4 6.9-4 9.5c-2.6-2.6-4-6-4-9.5s1.4-6.9 4-9.5Z" />
    </svg>
  );
}

const registry = {
  heart: HeartIcon,
  compass: CompassIcon,
  spark: SparkIcon,
  globe: GlobeIcon,
};

export default function Icon({ name }) {
  const Cmp = registry[name] || SparkIcon;
  return <Cmp />;
}

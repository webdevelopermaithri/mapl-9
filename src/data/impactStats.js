// Every number lives here ONCE. The six-cell grid below the tabs is shared
// by all three tabs (Reach / Water / Waste) — exactly like the reference
// screenshots, where the grid numbers don't change when you switch tabs.
// Only the section heading/description and the two highlighted callout
// cards change per tab (they just point at a metric id from this list).
export const metrics = [
  {
    id: 'installations',
    value: 2000,
    suffix: '+',
    label: 'Installations operational globally',
    hint: 'Live across 40+ countries.',
  },
  {
    id: 'countries',
    value: 40,
    suffix: '+',
    label: 'Countries with Maithri deployments',
    hint: 'Six continents, one platform.',
  },
  {
    id: 'verticals',
    value: 12,
    suffix: '',
    label: 'Industry verticals powered by AWG',
    hint: 'From villages to semiconductors.',
  },
  {
    id: 'groundwater',
    value: 15,
    suffix: ' Billion+',
    label: 'Litres of groundwater preserved',
    hint: 'Measured, verified, independent.',
  },
  {
    id: 'bottles',
    value: 2172700,
    suffix: '+',
    label: 'Plastic bottles avoided',
    hint: 'Glass & refill-first by design.',
  },
  {
    id: 'purity',
    value: 100,
    suffix: '%',
    label: 'Pure drinking water',
    hint: 'From Sky to your glass.',
  },
];

const metricById = (id) => metrics.find((m) => m.id === id);

export const atlasTabs = [
  {
    key: 'reach',
    tabLabel: 'Reach',
    heading: 'Countries, deployments, and documented proof.',
    description:
      'The atlas lens turns raw growth into an easy read: where Maithri is live, how far it has spread, and how broad the operating footprint already is.',
    callouts: [metricById('countries'), metricById('installations')],
  },
  {
    key: 'water',
    tabLabel: 'Water',
    heading: 'Water security, measured in live resilience.',
    description:
      'This view brings the core water story forward: groundwater preserved, safe output delivered, and the installed systems behind that daily reliability.',
    callouts: [metricById('groundwater'), metricById('purity')],
  },
  {
    key: 'waste',
    tabLabel: 'Waste',
    heading: 'Refill culture replacing extraction and disposal.',
    description:
      'A cleaner system is more than one number. This lens highlights the packaging, extraction, and behavioural shifts that the platform makes visible at scale.',
    callouts: [metricById('bottles'), metricById('groundwater')],
  },
];

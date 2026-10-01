import React, { useState } from 'react';
import './ImpactAtlas.css';
import { atlasTabs, metrics } from '../../data/impactStats.js';
import { MetricCell } from './MetricCell.jsx';
import { useScrolledIntoView } from '../../hooks/useScrolledIntoView.js';
import { useMetricsCountUp } from '../../hooks/useMetricsCountUp.js';
import BubbleField from '../common/BubbleField.jsx';

// Part 2 of the Impact Atlas — the proof half. Tab switcher (Reach /
// Water / Waste) plus the full six-cell metrics grid, which highlights
// the two cells relevant to whichever tab is active. Placed further
// down the page, after the Recognition/Awards section (see
// pages/Impact.jsx), as its own self-contained moment rather than
// immediately under the intro copy in ImpactAtlasIntro.
export default function ImpactAtlasGrid() {
  const [activeKey, setActiveKey] = useState(atlasTabs[0].key);
  const active = atlasTabs.find((t) => t.key === activeKey);

  const { ref, inView } = useScrolledIntoView({
    threshold: 0.25,
  });

  // Counted once here, independent of the intro section's count-up, so
  // this grid animates in on its own when it scrolls into view lower
  // down the page.
  const { values } = useMetricsCountUp(metrics, { start: inView });

  return (
    <section className="atlas relative overflow-hidden" ref={ref}>
      <BubbleField count={24} />

      <div className="atlas-section relative z-10">
        <div className="tab-row tab-row--standalone">
          {atlasTabs.map((tab) => (
            <button
              key={tab.key}
              className={`tab-btn${tab.key === activeKey ? ' active' : ''}`}
              onClick={() => setActiveKey(tab.key)}
            >
              {tab.tabLabel}
            </button>
          ))}
        </div>

        <div className="metrics-grid">
          {metrics.map((metric) => (
            <MetricCell
              key={metric.id}
              metric={metric}
              highlight={active.callouts.some((c) => c.id === metric.id)}
              value={values[metric.id] ?? 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

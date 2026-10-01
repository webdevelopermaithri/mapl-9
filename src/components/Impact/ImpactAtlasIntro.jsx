import React from 'react';
import './ImpactAtlas.css';
import { atlasTabs } from '../../data/impactStats.js';
import { CalloutCard } from './MetricCell.jsx';
import { useScrolledIntoView } from '../../hooks/useScrolledIntoView.js';
import BubbleField from '../common/BubbleField.jsx';

// Part 1 of the Impact Atlas — the narrative half. Just the heading,
// description and the two headline callout numbers for the default
// (Reach) view. The tab-driven full metrics grid lives separately in
// ImpactAtlasGrid, further down the page (see pages/Impact.jsx), so
// this half can open the page's impact story without needing the full
// six-cell breakdown right away.
export default function ImpactAtlasIntro() {
  const active = atlasTabs[0];

  const { ref, inView } = useScrolledIntoView({
    threshold: 0.25,
  });

  return (
    <section id="impact-atlas" className="atlas relative overflow-hidden" ref={ref}>
      <BubbleField count={24} />

      <div className="atlas-section relative z-10">
        <div className="atlas-card atlas-card--intro">
          <div>
            <span className="eyebrow">Impact Atlas</span>

            <h2 className="atlas-fade">{active.heading}</h2>

            <p className="atlas-desc atlas-fade">{active.description}</p>
          </div>

          <div className="callout-stack">
            {active.callouts.map((metric) => (
              <CalloutCard key={metric.id} metric={metric} active={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

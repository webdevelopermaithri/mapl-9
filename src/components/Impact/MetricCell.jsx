import React, { useState } from 'react';
import { formatIndian } from '../../utils/formatNumber.js';
import { useCountUp } from '../../hooks/useMetricsCountUp.js';

// Both cards below are purely presentational: the counting itself
// happens once, up in ImpactAtlas (see useMetricsCountUp), so clicking
// between the Reach / Water / Waste tabs — which remounts whichever
// cards aren't shared between tabs — can never restart a number back
// to 0. Hover here is just a visual highlight; it no longer nudges the
// number, so scrolling the page while hovering a card won't change it.

export function MetricCell({ metric, highlight = false, value = 0 }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`metric-cell${highlight ? ' highlight' : ''}${hovered ? ' hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="metric-value">
        {formatIndian(value)}
        {metric.suffix}
      </div>
      <div className="metric-label">{metric.label}</div>
      <div className="metric-hint">{metric.hint}</div>
    </div>
  );
}

export function CalloutCard({ metric, active = true }) {
  const [hovered, setHovered] = useState(false);
  const value = useCountUp(metric.value, { active, resetKey: metric.id });

  return (
    <div
      className={`callout-card${hovered ? ' hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="value">
        {formatIndian(value)}
        {metric.suffix}
      </div>
      <div className="label">{metric.label}</div>
      <div className="hint">{metric.hint}</div>
    </div>
  );
}

import React from "react";
import { RECOGNITIONS } from "../../data/recognitions";
import RecognitionItem from "./RecognitionItem";
import "./RecognitionBar.css";

function RecognitionBar() {
  const loopItems = [...RECOGNITIONS, ...RECOGNITIONS];

  return (
    <div className="rec-wrap">
      <div className="rec-label">Recognition</div>
      <div className="rec-track">
        {loopItems.map((item, i) => (
          <RecognitionItem
            key={i}
            title={item.title}
            org={item.org}
            alt={item.alt}
            logoSrc={item.logoSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default RecognitionBar;

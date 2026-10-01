import React from "react";
import OrgLogo from "./OrgLogo";

function RecognitionItem({ title, org, alt, logoSrc }) {
  return (
    <div className="rec-item">
      <span className="rec-title">{title}</span>
      <OrgLogo src={logoSrc} alt={alt} />
      <span className="rec-org">{org}</span>
    </div>
  );
}

export default RecognitionItem;

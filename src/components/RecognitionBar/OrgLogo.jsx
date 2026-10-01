import React, { useState } from "react";

function OrgLogo({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // Falls back to a plain text label if the file hasn't been added yet,
    // or the path doesn't resolve.
    return <span className="rec-logo-fallback">{alt}</span>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="rec-logo-img"
      onError={() => setFailed(true)}
    />
  );
}

export default OrgLogo;

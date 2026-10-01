import { useEffect, useState } from "react";

// Small shared breakpoint hook used by hero/section components that need to
// switch *structural* layout (stacking, absolute -> static, flex-direction)
// based on viewport width — things plain CSS `clamp()` can't express.
// Mirrors the project's rough breakpoints: <640 mobile, <1024 tablet,
// else desktop.
function getBreakpoint(width) {
  if (width < 640) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

export default function useViewport() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );

  useEffect(() => {
    let frame;
    const handleResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setWidth(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frame);
    };
  }, []);

  const breakpoint = getBreakpoint(width);
  return {
    width,
    breakpoint,
    isMobile: breakpoint === "mobile",
    isTablet: breakpoint === "tablet",
    isDesktop: breakpoint === "desktop",
    isMobileOrTablet: breakpoint !== "desktop",
  };
}

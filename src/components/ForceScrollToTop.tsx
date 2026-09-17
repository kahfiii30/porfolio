"use client";

import { useEffect } from "react";

export default function ForceScrollToTop() {
  useEffect(() => {
    // Force scroll to top when the component mounts (e.g. on refresh)
    window.scrollTo(0, 0);
    
    // Tell the browser not to restore scroll position automatically for this page
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    return () => {
      // Re-enable auto scroll restoration when leaving the page
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return null;
}

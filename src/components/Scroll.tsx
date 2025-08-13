import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // If navigating to a hash, let it jump to that element
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    // Otherwise reset to top
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, key]); // key catches changes that reuse pathname

  return null;
}

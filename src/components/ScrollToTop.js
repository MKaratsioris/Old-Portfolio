import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scroll_options = {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
    window.scrollTo(scroll_options);
  }, [pathname]);

  return null;
}

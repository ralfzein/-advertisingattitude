import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ignore when on home route (Lenis handles it)
    if (pathname === "/" || pathname === "/home") return;

    // Wait briefly for page render, then scroll up
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

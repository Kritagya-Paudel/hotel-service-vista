import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "@/lib/lenis";

/**
 * Every route change starts at the top of the new page.
 * Lenis drives the scroll position, so telling it directly is what actually
 * sticks — a bare window.scrollTo gets overwritten on Lenis' next frame.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    }
    window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;

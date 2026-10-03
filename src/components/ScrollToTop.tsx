import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { useLenis } from "@/lib/lenis";

/**
 * Route-change scroll handling.
 *
 * Forward navigation (clicking "Learn more" on a room card) starts at the top of
 * the new page; going Back restores where you were, so you don't lose your place
 * in the rooms grid.
 *
 * Lenis drives the scroll position, so telling it directly is what actually
 * sticks; a bare window.scrollTo gets overwritten on Lenis' next frame. Lenis
 * also caches the document height, so it has to be re-measured after the new
 * page renders, otherwise the old page's limit clamps or overshoots scrolling.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const lenis = useLenis();
  const positions = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Remember where we were on the page we are leaving. The cleanup closes over
  // this render's pathname, which is exactly the page being left, and React runs
  // it before the effect below moves the scroll for the incoming page.
  useEffect(() => {
    return () => {
      positions.current.set(pathname, window.scrollY);
    };
  }, [pathname]);

  useEffect(() => {
    const target = navigationType === "POP" ? positions.current.get(pathname) ?? 0 : 0;

    const apply = () => {
      // Re-measure first: the new page is a different height to the old one.
      lenis?.resize();
      if (lenis) {
        lenis.scrollTo(target, { immediate: true, force: true });
      } else {
        window.scrollTo(0, target);
      }
    };

    apply();
    // Images and fonts settle a frame or two later and shift the layout with
    // them; re-apply so the landing position (and Lenis' limit) stay correct.
    const raf = requestAnimationFrame(apply);
    const timers = [setTimeout(apply, 120), setTimeout(() => lenis?.resize(), 600)];

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, [pathname, navigationType, lenis]);

  return null;
};

export default ScrollToTop;

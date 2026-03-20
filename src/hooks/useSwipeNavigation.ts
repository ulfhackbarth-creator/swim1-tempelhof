import { useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const courseRoutes = [
  "/kurse/wassergewoehnung",
  "/kurse/kinderschwimmen",
  "/kurse/erwachsene",
  "/kurse/aquafitness",
  "/kurse/reha",
];

export function useSwipeNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStart.current) return;
      const dx = touchStart.current.x - e.changedTouches[0].clientX;
      const dy = Math.abs(touchStart.current.y - e.changedTouches[0].clientY);
      touchStart.current = null;

      // Ignore if vertical scroll is dominant or swipe too short
      if (Math.abs(dx) < 60 || dy > Math.abs(dx) * 0.75) return;

      const idx = courseRoutes.indexOf(location.pathname);
      if (idx === -1) return;

      const next = dx > 0 ? idx + 1 : idx - 1;
      if (next >= 0 && next < courseRoutes.length) {
        navigate(courseRoutes[next]);
        window.scrollTo({ top: 0 });
      }
    },
    [location.pathname, navigate]
  );

  return { onTouchStart, onTouchEnd };
}

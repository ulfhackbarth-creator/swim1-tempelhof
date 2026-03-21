import { useState, useEffect, useRef, useLayoutEffect, useCallback } from "react";
import { Waves, Activity, HeartPulse, PersonStanding, Droplets } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import StandortDropdown from "@/components/StandortDropdown";

const SCROLL_KEY = "chip-scroll-left";

const chips = [
  { id: "wassergewoehnung", label: "Wassergewöhnung", Icon: Droplets, path: "/kurse/wassergewoehnung" },
  { id: "kinderschwimmen", label: "Kinderschwimmen", Icon: Waves, path: "/kurse/kinderschwimmen" },
  { id: "erwachsene", label: "Erwachsenenschwimmen", Icon: PersonStanding, path: "/kurse/erwachsene" },
  { id: "fitness", label: "Aquafitness", Icon: Activity, path: "/kurse/aquafitness" },
  { id: "reha", label: "Aqua Reha", Icon: HeartPulse, path: "/kurse/reha" },
];

const GlobalHeader = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const isHome = location.pathname === "/";

  // Hide-on-scroll-down, show-on-scroll-up
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const suppressHideUntil = useRef(0);

  const scrollUpAccumulator = useRef(0);
  const SCROLL_UP_THRESHOLD = 60; // px user must scroll up before header reappears

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY.current;

    if (currentScrollY < 50) {
      setIsVisible(true);
      scrollUpAccumulator.current = 0;
    } else if (Date.now() < suppressHideUntil.current) {
      setIsVisible(false);
      scrollUpAccumulator.current = 0;
    } else if (delta > 0) {
      // Scrolling down
      setIsVisible(false);
      scrollUpAccumulator.current = 0;
    } else {
      // Scrolling up — accumulate distance
      scrollUpAccumulator.current += Math.abs(delta);
      if (scrollUpAccumulator.current >= SCROLL_UP_THRESHOLD) {
        setIsVisible(true);
      }
    }
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    const onSuppress = (e: Event) => {
      const duration = (e as CustomEvent).detail?.duration ?? 800;
      suppressHideUntil.current = Date.now() + duration;
      setIsVisible(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("suppress-header", onSuppress);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("suppress-header", onSuppress);
    };
  }, [handleScroll]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    if (isHome) {
      containerRef.current.scrollLeft = 0;
      sessionStorage.removeItem(SCROLL_KEY);
      return;
    }
    const saved = sessionStorage.getItem(SCROLL_KEY);
    if (saved) {
      containerRef.current.scrollLeft = Number(saved);
    }
  }, [location.pathname, isHome]);

  useEffect(() => {
    if (isHome) return;
    const container = containerRef.current;
    const activeChip = chips.find((c) => c.path === location.pathname);
    if (!activeChip || !container) return;

    const activeTab = chipRefs.current[activeChip.id];
    if (!activeTab) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const scrollLeft =
          activeTab.offsetLeft - container.offsetWidth / 2 + activeTab.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      });
    });
  }, [location.pathname, isHome]);

  const saveScroll = () => {
    if (containerRef.current) {
      sessionStorage.setItem(SCROLL_KEY, String(containerRef.current.scrollLeft));
    }
  };

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`} style={{ backgroundColor: "#0F2D52" }}>
      {/* Row 1 — Logo + Standort Dropdown */}
      <div className="px-4 md:px-10 py-3.5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0 })}>
          <Waves className="w-5 h-5 text-white" />
          <span className="font-bold text-lg text-white">SWIM1</span>
        </Link>

        <StandortDropdown variant="ghost-header" align="end" />
      </div>

      {/* Row 2 — Category chips */}
      <div
        ref={containerRef}
        className="px-4 md:px-10 pb-3 pt-3 flex flex-row gap-3 overflow-x-auto scrollbar-hide border-t border-white/10"
      >
        {chips.map((chip) => {
          const isActive = !isHome && location.pathname === chip.path;
          return (
            <Link
              key={chip.id}
              to={chip.path}
              ref={(el) => { chipRefs.current[chip.id] = el; }}
              onClick={() => {
                saveScroll();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`flex items-center gap-2 rounded-full px-4 py-1.5 cursor-pointer transition-colors duration-200 text-sm whitespace-nowrap ${
                isActive
                  ? "bg-white text-[#0F2D52] border border-white font-bold shadow-sm"
                  : "bg-transparent text-white/80 border border-white/40 font-medium hover:border-white hover:text-white"
              }`}
            >
              <chip.Icon className="w-4 h-4" style={{ color: isActive ? "#0F2D52" : undefined }} />
              <span>{chip.label}</span>
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default GlobalHeader;

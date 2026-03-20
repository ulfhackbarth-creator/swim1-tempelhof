import { useEffect, useRef, useLayoutEffect } from "react";
import { Waves, Baby, Activity, HeartPulse, PersonStanding } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const SCROLL_KEY = "chip-scroll-left";

const chips = [
  { id: "wassergewoehnung", label: "Wassergewöhnung", Icon: Baby, path: "/kurse/wassergewoehnung" },
  { id: "kinderschwimmen", label: "Kinderschwimmen", Icon: Waves, path: "/kurse/kinderschwimmen" },
  { id: "erwachsene", label: "Erwachsenenschwimmen", Icon: PersonStanding, path: "/kurse/erwachsene" },
  { id: "fitness", label: "Aquafitness", Icon: Activity, path: "/kurse/aquafitness" },
  { id: "reha", label: "Aqua Reha", Icon: HeartPulse, path: "/kurse/reha" },
];

const GlobalHeader = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // 1) Instantly restore saved scroll position before paint to prevent jump
  useLayoutEffect(() => {
    const saved = sessionStorage.getItem(SCROLL_KEY);
    if (saved && containerRef.current) {
      containerRef.current.scrollLeft = Number(saved);
    }
  }, [location.pathname]);

  // 2) Then smoothly center the active chip from the restored position
  useEffect(() => {
    const container = containerRef.current;
    const activeChip = chips.find((c) => c.path === location.pathname);
    if (!activeChip || !container) return;

    const activeTab = chipRefs.current[activeChip.id];
    if (!activeTab) return;

    // Small delay so layoutEffect restore has applied
    requestAnimationFrame(() => {
      const scrollLeft =
        activeTab.offsetLeft - container.offsetWidth / 2 + activeTab.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    });
  }, [location.pathname]);

  // Save scroll position before navigating
  const saveScroll = () => {
    if (containerRef.current) {
      sessionStorage.setItem(SCROLL_KEY, String(containerRef.current.scrollLeft));
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50" style={{ backgroundColor: "#0F2D52" }}>
      {/* Row 1 — Logo + CTA */}
      <div className="px-4 md:px-10 py-3.5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0 })}>
          <Waves className="w-5 h-5 text-white" />
          <span className="font-bold text-lg text-white">SWIM1</span>
        </Link>
        <Link
          to="/#standorte"
          className="rounded-full px-5 py-2 text-sm font-semibold text-white bg-[#F97316] hover:bg-orange-600 transition-colors"
        >
          Standort wählen →
        </Link>
      </div>

      {/* Row 2 — Category chips */}
      <div
        ref={containerRef}
        className="px-4 md:px-10 pb-3 pt-3 flex flex-row gap-3 overflow-x-auto scrollbar-hide border-t border-white/10"
      >
        {chips.map((chip) => {
          const isActive = location.pathname === chip.path;
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

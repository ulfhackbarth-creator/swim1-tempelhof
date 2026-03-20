import { useEffect, useRef, useLayoutEffect } from "react";
import { Waves, Baby, Activity, HeartPulse, PersonStanding, MapPin, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SCROLL_KEY = "chip-scroll-left";

const chips = [
  { id: "wassergewoehnung", label: "Wassergewöhnung", Icon: Baby, path: "/kurse/wassergewoehnung" },
  { id: "kinderschwimmen", label: "Kinderschwimmen", Icon: Waves, path: "/kurse/kinderschwimmen" },
  { id: "erwachsene", label: "Erwachsenenschwimmen", Icon: PersonStanding, path: "/kurse/erwachsene" },
  { id: "fitness", label: "Aquafitness", Icon: Activity, path: "/kurse/aquafitness" },
  { id: "reha", label: "Aqua Reha", Icon: HeartPulse, path: "/kurse/reha" },
];

const standorte = [
  { label: "Berlin-Tempelhof", path: "/standorte/berlin-tempelhof" },
];

const GlobalHeader = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const isHome = location.pathname === "/";

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
    <header className="sticky top-0 left-0 right-0 z-50" style={{ backgroundColor: "#0F2D52" }}>
      {/* Row 1 — Logo + Standort Dropdown */}
      <div className="px-4 md:px-10 py-3.5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0 })}>
          <Waves className="w-5 h-5 text-white" />
          <span className="font-bold text-lg text-white">SWIM1</span>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="rounded-full px-5 py-2 text-sm font-semibold text-white bg-[#F97316] hover:bg-orange-600 transition-colors flex items-center gap-1.5 active:scale-[0.97]">
              Standort wählen
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={12}
            className="w-64 rounded-xl border-border/50 bg-card p-1 shadow-xl"
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider px-3 py-2">
              Unsere Standorte
            </DropdownMenuLabel>
            {standorte.map((s) => (
              <DropdownMenuItem key={s.path} asChild className="cursor-pointer rounded-lg px-3 py-2.5 focus:bg-primary/5 focus:text-primary">
                <Link to={s.path} className="flex items-center gap-2.5 w-full">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-medium">{s.label}</span>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
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

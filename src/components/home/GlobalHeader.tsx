import { useState, useEffect, useRef, useLayoutEffect, useCallback } from "react";
import { Waves, Activity, HeartPulse, PersonStanding, Droplets, Menu, X, MapPin, HelpCircle, Users, Briefcase, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import StandortDropdown from "@/components/StandortDropdown";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const HEADER_BG = "#0C2D48";

const chips = [
  { id: "wassergewoehnung", label: "Babyschwimmen", mobileLabel: "Baby & Kleinkinder", Icon: Droplets, path: "/kurse/wassergewoehnung" },
  { id: "kinderschwimmen", label: "Kinderschwimmen", mobileLabel: "Kinder", Icon: Waves, path: "/kurse/kinderschwimmen" },
  { id: "erwachsene", label: "Erwachsene", mobileLabel: "Erwachsene", Icon: PersonStanding, path: "/kurse/erwachsene" },
  { id: "fitness", label: "Aquafitness", mobileLabel: "Fitness", Icon: Activity, path: "/kurse/aquafitness" },
  { id: "reha", label: "Aqua Reha", mobileLabel: "Reha", Icon: HeartPulse, path: "/kurse/reha" },
];

const menuLinks = [
  { label: "Über uns", href: "/#philosophie", Icon: Users },
  { label: "FAQ", href: "/#faq", Icon: HelpCircle },
  { label: "Kontakt", href: "/#standorte", Icon: Mail },
  { label: "Karriere", href: "/#karriere", Icon: Briefcase },
];

const SCROLL_KEY = "chip-scroll-left";

const GlobalHeader = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = location.pathname === "/";

  // Hide-on-scroll-down, show-on-scroll-up
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const suppressHideUntil = useRef(0);
  const scrollUpAccumulator = useRef(0);
  const SCROLL_UP_THRESHOLD = 60;

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
      setIsVisible(false);
      scrollUpAccumulator.current = 0;
    } else {
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
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      style={{ backgroundColor: HEADER_BG }}
    >
      {/* Row 1 — Logo + Actions */}
      <div className="px-4 md:px-10 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => window.scrollTo({ top: 0 })}>
          <Waves className="w-5 h-5 text-white" />
          <span className="font-bold text-lg text-white tracking-tight">SWIM1</span>
        </Link>

        <div className="flex items-center gap-2">
          <StandortDropdown variant="ghost-header" align="end" />

          {/* Burger menu */}
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="w-9 h-9 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
                aria-label="Menü öffnen"
              >
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0" style={{ backgroundColor: HEADER_BG, borderColor: "rgba(255,255,255,0.1)" }}>
              <SheetHeader className="p-6 pb-4 border-b border-white/10">
                <SheetTitle className="text-white flex items-center gap-2">
                  <Waves className="w-5 h-5" />
                  SWIM1
                </SheetTitle>
              </SheetHeader>

              {/* Standorte section */}
              <div className="p-6 border-b border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Standorte</p>
                <div className="space-y-1">
                  <Link to="/standorte/berlin-tempelhof" onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0 }); }} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium">
                    <MapPin className="w-4 h-4 text-white/50" /> Berlin-Tempelhof
                  </Link>
                  <Link to="/standorte/schwerin" onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0 }); }} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium">
                    <MapPin className="w-4 h-4 text-white/50" /> Schwerin
                  </Link>
                  <Link to="/standorte/wildau" onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0 }); }} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium">
                    <MapPin className="w-4 h-4 text-white/50" /> Wildau
                  </Link>
                  <Link to="/standorte/bremen" onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0 }); }} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium">
                    <MapPin className="w-4 h-4 text-white/50" /> Bremen
                  </Link>
                </div>
              </div>

              {/* Menu links */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Mehr</p>
                <div className="space-y-1">
                  {menuLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => { setMenuOpen(false); }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium"
                    >
                      <link.Icon className="w-4 h-4 text-white/50" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Row 2 — Category navigation */}
      <div
        ref={containerRef}
        className="px-4 md:px-10 pb-3 pt-1 flex flex-row gap-2 overflow-x-auto scrollbar-hide border-t border-white/10"
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
              className={`flex items-center gap-2 rounded-full px-4 py-2 cursor-pointer transition-all duration-200 text-sm whitespace-nowrap ${
                isActive
                  ? "bg-white/15 border border-white text-white font-bold"
                  : "bg-transparent border border-transparent text-white/70 font-medium hover:text-white hover:bg-white/5"
              }`}
            >
              <chip.Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{chip.label}</span>
              <span className="sm:hidden">{chip.mobileLabel}</span>
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default GlobalHeader;

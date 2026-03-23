import { useState, useEffect, useRef, useLayoutEffect, useCallback } from "react";
import { Waves, Activity, HeartPulse, PersonStanding, Droplets, Menu, X, MapPin, HelpCircle, Users, Mail, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import StandortDropdown from "@/components/StandortDropdown";
import { standorte } from "@/data/standorteData";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const HEADER_BG = "#0C2D48";

const chips = [
  { id: "wassergewoehnung", label: "Baby & Kleinkinder", mobileLabel: "Baby & Kleinkinder", Icon: Droplets, path: "/kurse/wassergewoehnung" },
  { id: "kinderschwimmen", label: "Kinderschwimmen", mobileLabel: "Kinder", Icon: Waves, path: "/kurse/kinderschwimmen" },
  { id: "erwachsene", label: "Erwachsene", mobileLabel: "Erwachsene", Icon: PersonStanding, path: "/kurse/erwachsene" },
  { id: "fitness", label: "Aquafitness", mobileLabel: "Fitness", Icon: Activity, path: "/kurse/aquafitness" },
  { id: "reha", label: "Aqua Reha", mobileLabel: "Reha", Icon: HeartPulse, path: "/kurse/reha" },
];

const menuLinks = [
  { label: "Über uns", href: "/ueber-uns", Icon: Users },
  { label: "FAQ", href: "/faq", Icon: HelpCircle },
  { label: "Kontakt", href: "/kontakt", Icon: Mail },
];

const SCROLL_KEY = "chip-scroll-left";

const CollapsibleSection = ({ title, defaultOpen = false, children }: { title: string; defaultOpen?: boolean; children: React.ReactNode }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-600 transition-colors"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-4 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

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

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY.current;

    if (currentScrollY < 50) {
      setIsVisible(true);
    } else if (Date.now() < suppressHideUntil.current) {
      setIsVisible(false);
    } else if (delta > 0) {
      setIsVisible(false);
    } else if (delta < -5) {
      setIsVisible(true);
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
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
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
            <SheetContent side="right" className="w-80 p-0 bg-white border-slate-200 flex flex-col">
              <SheetHeader className="p-6 pb-4 border-b border-slate-100 flex-shrink-0">
                <SheetTitle className="text-[#0C2D48] flex items-center gap-2">
                  <Waves className="w-5 h-5" />
                  SWIM1
                </SheetTitle>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto">
                {/* Standorte section — collapsible, collapsed by default */}
                <CollapsibleSection title="Standorte">
                  <Link to="/standorte/berlin-tempelhof" onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0 }); }} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0C2D48] transition-colors text-sm font-medium">
                    <MapPin className="w-4 h-4 text-slate-400" /> Berlin-Tempelhof
                  </Link>
                  <Link to="/standorte/schwerin" onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0 }); }} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0C2D48] transition-colors text-sm font-medium">
                    <MapPin className="w-4 h-4 text-slate-400" /> Schwerin
                  </Link>
                  <Link to="/standorte/wildau" onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0 }); }} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0C2D48] transition-colors text-sm font-medium">
                    <MapPin className="w-4 h-4 text-slate-400" /> Wildau
                  </Link>
                  <Link to="/standorte/bremen" onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0 }); }} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0C2D48] transition-colors text-sm font-medium">
                    <MapPin className="w-4 h-4 text-slate-400" /> Bremen
                  </Link>
                </CollapsibleSection>

                {/* Kurse section — collapsible, collapsed by default */}
                <CollapsibleSection title="Kurse">
                  {chips.map((chip) => (
                    <Link
                      key={chip.id}
                      to={chip.path}
                      onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0 }); }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0C2D48] transition-colors text-sm font-medium"
                    >
                      <chip.Icon className="w-4 h-4 text-slate-400" />
                      {chip.label}
                    </Link>
                  ))}
                </CollapsibleSection>

                {/* Mehr section — collapsible, open by default */}
                <CollapsibleSection title="Mehr" defaultOpen>
                  {menuLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => { setMenuOpen(false); }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0C2D48] transition-colors text-sm font-medium"
                    >
                      <link.Icon className="w-4 h-4 text-slate-400" />
                      {link.label}
                    </Link>
                  ))}
                </CollapsibleSection>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Row 2 — Category navigation */}
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto px-4 md:px-6 pb-3 pt-1 flex flex-row gap-2 overflow-x-auto scrollbar-hide border-t border-white/10"
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

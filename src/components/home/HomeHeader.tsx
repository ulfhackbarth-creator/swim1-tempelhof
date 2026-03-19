import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Waves, Menu, X, ChevronDown } from "lucide-react";

const courseDropdown = [
  {
    heading: "Wassergewöhnung",
    items: [
      { label: "Wassergewöhnung", href: "#" },
      { label: "Baby & Kleinkind", href: "#" },
    ],
  },
  {
    heading: "Schwimmen lernen",
    items: [
      { label: "Seepferdchen", href: "#" },
      { label: "Fortgeschrittene", href: "#" },
      { label: "Erwachsenenschwimmen", href: "#" },
    ],
  },
  {
    heading: "Aqua-Fitness",
    items: [{ label: "Aquafitness", href: "#" }],
  },
  {
    heading: "Rehasport",
    items: [
      { label: "Aqua Reha", href: "#" },
      { label: "Aqua Prävention", href: "#" },
    ],
  },
];

const plainLinks = [
  { label: "Standorte", href: "#standorte" },
  { label: "Über uns", href: "#warum" },
  { label: "FAQ", href: "#faq" },
];

const HomeHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileKurseOpen, setMobileKurseOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft transition-all duration-300 py-3"
    >
      <div className="container px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Waves className="w-6 h-6 text-primary" />
            <span className="font-bold text-sm md:text-base text-foreground">
              SWIM1 – Deine Schwimmschule
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                Kurse
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-xl shadow-lg p-4 min-w-[480px] grid grid-cols-4 gap-4 border border-slate-100"
                  >
                    {courseDropdown.map((col) => (
                      <div key={col.heading}>
                        <p className="text-xs font-bold text-[#1B4F8A] uppercase tracking-wide mb-2">
                          {col.heading}
                        </p>
                        <ul className="space-y-1">
                          {col.items.map((item) => (
                            <li key={item.label}>
                              <a
                                href={item.href}
                                onClick={(e) => { e.preventDefault(); scrollTo("#kurse"); }}
                                className="text-sm text-slate-600 hover:text-[#1B4F8A] transition-colors block py-1"
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {plainLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="cta" className="rounded-full" onClick={() => scrollTo("#standorte")}>
              Kurs buchen
            </Button>
          </div>

          <button className="md:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="container px-4 py-4 flex flex-col gap-1">
              <button
                onClick={() => setMobileKurseOpen(!mobileKurseOpen)}
                className="flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-foreground text-left py-2"
              >
                Kurse
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileKurseOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileKurseOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden pl-3 flex flex-col gap-1"
                  >
                    {courseDropdown.map((col) => (
                      <div key={col.heading} className="mb-2">
                        <p className="text-xs font-bold text-[#1B4F8A] uppercase tracking-wide mb-1">
                          {col.heading}
                        </p>
                        {col.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => { e.preventDefault(); scrollTo("#kurse"); }}
                            className="text-sm text-slate-600 hover:text-[#1B4F8A] block py-1 pl-2"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {plainLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground text-left py-2"
                >
                  {l.label}
                </button>
              ))}
              <Button variant="cta" className="rounded-full mt-2" onClick={() => scrollTo("#standorte")}>
                Kurs buchen
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default HomeHeader;

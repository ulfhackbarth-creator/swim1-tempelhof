import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Waves, Menu, X, ChevronDown } from "lucide-react";

const courseItems = [
  { label: "Wassergewöhnung", href: "#kurse" },
  { label: "Schwimmen lernen", href: "#kurse" },
  { label: "Aqua-Fitness", href: "#kurse" },
  { label: "Rehasport", href: "#kurse" },
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
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 py-3"
    >
      <div className="container px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Waves className="w-6 h-6 text-[#1B4F8A]" />
            <span className="font-bold text-sm md:text-base text-slate-900">
              SWIM1 – Deine Schwimmschule
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1"
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
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 p-2 min-w-[200px]"
                  >
                    {courseItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => scrollTo(item.href)}
                        className="block w-full text-left text-sm text-slate-600 hover:text-[#1B4F8A] hover:bg-slate-50 rounded-lg px-4 py-2.5 transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {plainLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("#standorte")}
              className="bg-[#F97316] text-white rounded-full px-6 py-2.5 text-sm font-medium transition-transform hover:scale-105"
            >
              Standort wählen
            </button>
          </div>

          <button className="md:hidden p-2 text-slate-900" onClick={() => setMobileOpen(!mobileOpen)}>
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
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container px-4 py-4 flex flex-col gap-1">
              <button
                onClick={() => setMobileKurseOpen(!mobileKurseOpen)}
                className="flex items-center justify-between text-sm font-medium text-slate-500 hover:text-slate-900 text-left py-2"
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
                    {courseItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => scrollTo(item.href)}
                        className="text-sm text-slate-600 hover:text-[#1B4F8A] text-left py-1.5 pl-2"
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {plainLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-sm font-medium text-slate-500 hover:text-slate-900 text-left py-2"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#standorte")}
                className="bg-[#F97316] text-white rounded-full px-6 py-2.5 text-sm font-medium mt-2 transition-transform hover:scale-105"
              >
                Standort wählen
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default HomeHeader;

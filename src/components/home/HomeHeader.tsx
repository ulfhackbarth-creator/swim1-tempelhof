import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Waves, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Kurse", href: "#kurse" },
  { label: "Standorte", href: "#standorte" },
  { label: "Über uns", href: "#warum" },
  { label: "FAQ", href: "#faq" },
];

const HomeHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 h-16 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Waves className="w-5 h-5 text-[#1B4F8A]" />
          <span className="font-bold text-xl text-[#1B4F8A]">SWIM1</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-slate-600 hover:text-[#1B4F8A] transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#1B4F8A] hover:border-[#1B4F8A] transition-colors">
            Anmelden
          </button>
          <button
            onClick={() => scrollTo("#standorte")}
            className="bg-[#F97316] text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-orange-600 transition-colors"
          >
            Standort wählen
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 text-slate-900" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-16 left-0 right-0 bg-white border-b border-slate-100 overflow-hidden md:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-sm font-medium text-slate-600 hover:text-[#1B4F8A] text-left py-2"
                >
                  {l.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-slate-100">
                <button className="border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-600">
                  Anmelden
                </button>
                <button
                  onClick={() => scrollTo("#standorte")}
                  className="bg-[#F97316] text-white rounded-full px-5 py-2 text-sm font-semibold"
                >
                  Standort wählen
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default HomeHeader;

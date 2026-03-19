import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Waves, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Kurse", href: "#kurse" },
  { label: "Standorte", href: "#standorte" },
  { label: "Über uns", href: "#warum" },
  { label: "FAQ", href: "#faq" },
];

const HomeHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            {navLinks.map((l) => (
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
            <Button
              variant="cta"
              className="rounded-full"
              onClick={() => scrollTo("#standorte")}
            >
              Kurs buchen
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
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
            <div className="container px-4 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground text-left py-2"
                >
                  {l.label}
                </button>
              ))}
              <Button
                variant="cta"
                className="rounded-full mt-2"
                onClick={() => scrollTo("#standorte")}
              >
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

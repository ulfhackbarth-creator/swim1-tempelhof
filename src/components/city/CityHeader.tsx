import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Waves } from "lucide-react";
import { Link } from "react-router-dom";
import type { CityConfig } from "@/config/cities";

interface CityHeaderProps {
  city: CityConfig;
}

const CityHeader = ({ city }: CityHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("warteliste")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-card/95 backdrop-blur-md shadow-soft py-3" : "bg-transparent py-4"}`}>
      <div className="container px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Waves className={`w-6 h-6 transition-colors ${isScrolled ? "text-primary" : "text-primary-foreground"}`} />
            <span className={`font-semibold text-sm md:text-base transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
              SWIM1 - {city.cityName}
            </span>
          </Link>
          <Button variant={isScrolled ? "cta" : "outline"} size="sm" onClick={scrollToForm} className={!isScrolled ? "border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10" : ""}>
            Warteliste
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default CityHeader;

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import HeroTrustLine from "@/components/HeroTrustLine";
import heroImage from "@/assets/hero-pool.jpg";
import type { CityConfig } from "@/config/cities";

interface CityHeroProps {
  city: CityConfig;
}

const CityHero = ({ city }: CityHeroProps) => {
  const scrollToForm = () => {
    document.getElementById("warteliste")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt={`Modernes Schwimmbad – ${city.cityName}`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/60 to-background/95" />
      </div>

      <div className="container relative z-10 px-4 pt-20 pb-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl mx-auto text-center">
          <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-secondary/90 text-secondary-foreground rounded-full backdrop-blur-sm">
            {city.heroTagline}
          </motion.span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
            {city.heroHeading}
          </h1>

          <p className="text-base md:text-lg text-primary-foreground/85 max-w-lg mx-auto mb-8">
            Kleine Gruppen · Zertifizierte Trainer · 32 °C warmes Wasser
          </p>

          <div>
            <Button variant="cta" size="xl" onClick={scrollToForm}>
              Unverbindlich auf die Warteliste
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/70">
            Unverbindlich & kostenlos
          </p>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CityHero;

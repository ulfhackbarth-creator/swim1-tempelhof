import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const locations = [
  {
    name: "Berlin-Tempelhof",
    detail: "Tempelhofer Hafen · Direkt am S+U Tempelhof",
    route: "/",
  },
  {
    name: "Schwerin",
    detail: "Schlosspark-Center · Zentral mit Parkplätzen",
    route: "/schwerin",
  },
  {
    name: "Wildau",
    detail: "Bei Berlin · Gut erreichbar",
    route: "/wildau",
  },
  {
    name: "Bremen",
    detail: "Norddeutschland · Bald verfügbar",
    route: "/bremen",
  },
];

const LocationsSection = () => (
  <section id="standorte" className="py-16 md:py-24 bg-background scroll-mt-20">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
          Unsere Standorte
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {locations.map((loc, i) => (
          <motion.div
            key={loc.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card p-6 rounded-2xl shadow-card hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-1">{loc.name}</h3>
            <p className="text-sm text-muted-foreground mb-6 flex-1">{loc.detail}</p>
            <Button variant="outline" size="sm" className="rounded-full self-start" asChild>
              <Link to={loc.route} onClick={() => window.scrollTo({ top: 0 })}>
                Zum Standort →
              </Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LocationsSection;

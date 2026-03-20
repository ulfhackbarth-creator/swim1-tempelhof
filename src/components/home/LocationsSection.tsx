import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
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
  <section id="standorte" className="py-24 bg-white scroll-mt-20">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#1B4F8A] tracking-tight mb-4">
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
            className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-[#1B4F8A]/20 transition-colors duration-300 flex flex-col"
          >
            <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
              <MapPin className="w-6 h-6 text-[#1B4F8A]" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">{loc.name}</h3>
            <p className="text-sm text-slate-500 mb-8 flex-1 leading-relaxed">{loc.detail}</p>
            <Link
              to={loc.route}
              onClick={() => window.scrollTo({ top: 0 })}
              className="w-full border border-slate-200 rounded-xl py-3 text-center font-medium text-slate-700 hover:border-[#1B4F8A] hover:text-[#1B4F8A] transition-colors"
            >
              Standort entdecken →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LocationsSection;

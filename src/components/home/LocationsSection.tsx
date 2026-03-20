import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const locations = [
  {
    name: "Berlin-Tempelhof",
    address: "Ringbahnstraße 12, 12099 Berlin",
    route: "/",
  },
  {
    name: "Schwerin",
    address: "Wittenburger Chaussee 25, 19059 Schwerin",
    route: "/schwerin",
  },
  {
    name: "Wildau",
    address: "Adresse folgt in Kürze",
    route: "/wildau",
  },
  {
    name: "Bremen",
    address: "Adresse folgt in Kürze",
    route: "/bremen",
  },
];

const LocationsSection = () => (
  <section id="standorte" className="py-16 md:py-24 bg-white scroll-mt-20">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] mb-4">
          Unsere Standorte
        </h2>
        <p className="text-slate-400">
          Finde deine Schwimmschule in deiner Nähe.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {locations.map((loc, i) => (
          <motion.div
            key={loc.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border border-slate-100 rounded-2xl p-8 hover:border-[#1B4F8A]/30 hover:shadow-md transition-all flex flex-col"
          >
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">{loc.name}</h3>
            <p className="text-sm text-[#64748B] mb-4">{loc.address}</p>
            <span className="inline-block bg-green-50 text-green-700 text-xs rounded-full px-2 py-0.5 mb-6 w-fit">
              Jetzt buchbar
            </span>
            <Link
              to={loc.route}
              onClick={() => window.scrollTo({ top: 0 })}
              className="w-full mt-auto border border-slate-200 rounded-full py-2.5 text-sm text-center font-medium text-[#64748B] hover:border-[#1B4F8A] hover:text-[#1B4F8A] transition-colors"
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

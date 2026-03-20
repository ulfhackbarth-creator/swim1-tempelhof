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
  <section id="standorte" className="py-16 md:py-32 bg-slate-50 scroll-mt-20">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-20"
      >
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
          Unsere Standorte
        </h2>
        <p className="text-slate-500">
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
            className="bg-white rounded-[2rem] p-6 md:p-8 shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col"
          >
            <span className="inline-block bg-blue-50 text-[#1B4F8A] text-xs font-bold px-3 py-1 rounded-full mb-6 w-fit">
              Jetzt buchbar
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{loc.name}</h3>
            <p className="text-slate-500 mb-8">{loc.address}</p>
            <Link
              to={loc.route}
              onClick={() => window.scrollTo({ top: 0 })}
              className="w-full mt-auto bg-slate-900 text-white rounded-full py-3.5 text-sm text-center font-semibold hover:bg-slate-800 transition-colors"
            >
              Standort entdecken
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LocationsSection;

import { motion } from "framer-motion";
import { Waves, Baby, Activity, HeartPulse, PersonStanding } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const chips = [
  { id: "kinderschwimmen", label: "Kinderschwimmen", Icon: Waves, path: "/kurse/kinderschwimmen" },
  { id: "wassergewoehnung", label: "Wassergewöhnung", Icon: Baby, path: "/kurse/wassergewoehnung" },
  { id: "erwachsene", label: "Erwachsenenschwimmen", Icon: PersonStanding, path: "/kurse/erwachsene" },
  { id: "fitness", label: "Aquafitness", Icon: Activity, path: "/kurse/aquafitness" },
  { id: "reha", label: "Aqua Reha", Icon: HeartPulse, path: "/kurse/reha" },
];

const GlobalHeader = () => {
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "#0F2D52" }}
    >
      {/* Row 1 — Logo + CTA */}
      <div className="px-4 md:px-10 py-3.5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0 })}>
          <Waves className="w-5 h-5 text-white" />
          <span className="font-bold text-lg text-white">SWIM1</span>
        </Link>
        <Link
          to="/#standorte"
          className="rounded-full px-5 py-2 text-sm font-semibold text-white bg-[#F97316] hover:bg-orange-600 transition-colors"
        >
          Standort wählen →
        </Link>
      </div>

      {/* Row 2 — Category chips as links */}
      <div className="px-4 md:px-10 pb-3 pt-3 flex flex-row gap-3 overflow-x-auto scrollbar-hide border-t border-white/10">
        {chips.map((chip) => {
          const isActive = location.pathname === chip.path;
          return (
            <Link
              key={chip.id}
              to={chip.path}
              onClick={(e) => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
              }}
              className={`flex items-center gap-2 rounded-full px-4 py-1.5 cursor-pointer transition-colors duration-200 text-sm whitespace-nowrap ${
                isActive
                  ? "bg-white text-[#0F2D52] border border-white font-bold shadow-sm"
                  : "bg-transparent text-white/80 border border-white/40 font-medium hover:border-white hover:text-white"
              }`}
            >
              <chip.Icon
                className="w-4 h-4"
                style={{ color: isActive ? "#0F2D52" : undefined }}
              />
              <span>{chip.label}</span>
            </Link>
          );
        })}
      </div>
    </motion.header>
  );
};

export default GlobalHeader;

import { motion } from "framer-motion";
import { Waves, Baby, Activity, HeartPulse, PersonStanding } from "lucide-react";
import type { CourseTab } from "@/pages/Index";

const chips: { id: CourseTab; label: string; Icon: typeof Waves }[] = [
  { id: "kinderschwimmen", label: "Kinderschwimmen", Icon: Waves },
  { id: "wassergewoehnung", label: "Wassergewöhnung", Icon: Baby },
  { id: "erwachsene", label: "Erwachsenenschwimmen", Icon: PersonStanding },
  { id: "fitness", label: "Aquafitness", Icon: Activity },
  { id: "reha", label: "Aqua Reha", Icon: HeartPulse },
];

const HomeHeader = ({
  activeTab,
  onTabChange,
}: {
  activeTab: CourseTab;
  onTabChange: (tab: CourseTab) => void;
}) => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

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
        <a href="/" className="flex items-center gap-2">
          <Waves className="w-5 h-5 text-white" />
          <span className="font-bold text-lg text-white">SWIM1</span>
        </a>
        <button
          onClick={() => scrollTo("#standorte")}
          className="rounded-full px-5 py-2 text-sm font-semibold text-white bg-[#F97316] hover:bg-orange-600 transition-colors"
        >
          Standort wählen →
        </button>
      </div>

      {/* Row 2 — Category chips */}
      <div className="px-4 md:px-10 pb-3 pt-3 flex flex-row gap-3 overflow-x-auto scrollbar-hide border-t border-white/10">
        {chips.map((chip) => {
          const isActive = activeTab === chip.id;
          return (
            <button
              key={chip.id}
              onClick={() => {
                onTabChange(chip.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
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
            </button>
          );
        })}
      </div>
    </motion.header>
  );
};

export default HomeHeader;

import { motion } from "framer-motion";
import { Waves, Baby, Activity, HeartPulse } from "lucide-react";
import type { CourseTab } from "@/pages/Index";

const chips: { id: CourseTab; label: string; Icon: typeof Waves }[] = [
  { id: "schwimmen", label: "Schwimmen lernen", Icon: Waves },
  { id: "wassergewoehnung", label: "Wassergewöhnung", Icon: Baby },
  { id: "fitness", label: "Aqua-Fitness", Icon: Activity },
  { id: "reha", label: "Rehasport", Icon: HeartPulse },
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
      <div className="px-6 md:px-10 py-3.5 flex items-center justify-between">
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
      <div className="px-6 md:px-10 pb-3 pt-3 flex flex-row gap-2 overflow-x-auto scrollbar-hide border-t border-white/10">
        {chips.map((chip) => {
          const isActive = activeTab === chip.id;
          return (
            <button
              key={chip.id}
              onClick={() => onTabChange(chip.id)}
              className={`flex items-center gap-2 rounded-full px-4 py-1.5 cursor-pointer transition-all duration-200 text-sm font-semibold whitespace-nowrap ${
                isActive
                  ? "bg-white text-[#0F2D52]"
                  : "bg-transparent text-white/60 hover:text-white"
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

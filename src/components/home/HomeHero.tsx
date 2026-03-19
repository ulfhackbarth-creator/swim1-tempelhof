import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Waves, Fish, Activity, HeartPulse } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import type { CourseTab } from "@/pages/Index";

const heroContent: Record<CourseTab, { video: string; headline: string; subtext: string }> = {
  wassergewoehnung: {
    video: "https://videos.pexels.com/video-files/5888971/5888971-hd_1920_1080_30fps.mp4",
    headline: "Sicher schwimmen lernen. Mit Spaß.",
    subtext: "Kleine Gruppen · Zertifizierte Trainer · 32°C warmes Wasser",
  },
  schwimmen: {
    video: "https://videos.pexels.com/video-files/9044164/9044164-hd_1920_1080_30fps.mp4",
    headline: "Vom Seepferdchen bis zum Goldabzeichen.",
    subtext: "Strukturierte Kurse · Kleine Gruppen · Bewährte Methodik",
  },
  fitness: {
    video: "https://videos.pexels.com/video-files/8050098/8050098-hd_1920_1080_25fps.mp4",
    headline: "Fitness im Wasser. Gelenkschonend & effektiv.",
    subtext: "Ganzkörper-Workout · Alle Fitness-Level · Viel Spaß in der Gruppe",
  },
  reha: {
    video: "https://videos.pexels.com/video-files/4115399/4115399-hd_1920_1080_25fps.mp4",
    headline: "Rehabilitation & Prävention im Wasser.",
    subtext: "Auf Rezept · Krankenkassen-anerkannt · Medizinisch begleitet",
  },
};

const courseButtons: { id: CourseTab; label: string; icon: typeof Waves; color: string }[] = [
  { id: "wassergewoehnung", label: "Wassergewöhnung", icon: Waves, color: "text-sky-400" },
  { id: "schwimmen", label: "Schwimmen lernen", icon: Fish, color: "text-teal-500" },
  { id: "fitness", label: "Aqua-Fitness", icon: Activity, color: "text-orange-400" },
  { id: "reha", label: "Rehasport", icon: HeartPulse, color: "text-violet-500" },
];

const allTabs: CourseTab[] = ["wassergewoehnung", "schwimmen", "fitness", "reha"];

const locations = [
  { label: "Berlin-Tempelhof", route: "/" },
  { label: "Schwerin", route: "/schwerin" },
  { label: "Wildau", route: "/wildau" },
  { label: "Bremen", route: "/bremen" },
];

const HomeHero = ({
  activeTab,
  onTabChange,
}: {
  activeTab: CourseTab;
  onTabChange: (tab: CourseTab) => void;
}) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [shakeError, setShakeError] = useState(false);
  const navigate = useNavigate();

  const content = heroContent[activeTab];

  const handleCTA = () => {
    if (!selectedLocation) {
      setShakeError(true);
      setTimeout(() => setShakeError(false), 600);
      return;
    }
    const loc = locations.find((l) => l.label === selectedLocation);
    if (loc) {
      navigate(loc.route);
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* All 4 videos preloaded, only active one visible */}
      {allTabs.map((tab) => (
        <video
          key={tab}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            activeTab === tab ? "opacity-100" : "opacity-0"
          }`}
          src={heroContent[tab].video}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="container relative z-10 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-white bg-white/20 backdrop-blur-sm rounded-full"
          >
            Seit 2019 · 4 Standorte · Über 2.000 Kinder
          </motion.span>

          {/* Dynamic headline & subtext */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
                {content.headline}
              </h1>
              <p className="text-lg text-white/80 mb-8">
                {content.subtext}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* White selection box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-6 max-w-xl mx-auto flex flex-col gap-4"
          >
            {/* Step 1: Course selection */}
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-2">Was suchst du?</p>
              <div className="grid grid-cols-2 gap-2">
                {courseButtons.map((btn) => {
                  const Icon = btn.icon;
                  const isActive = activeTab === btn.id;
                  return (
                    <button
                      key={btn.id}
                      onClick={() => onTabChange(btn.id)}
                      className={`flex items-center gap-2 rounded-xl p-3 text-sm transition-all duration-200 ${
                        isActive
                          ? "bg-[#1B4F8A] text-white border border-[#1B4F8A] font-semibold"
                          : "border border-slate-200 text-slate-700 hover:border-[#1B4F8A] hover:text-[#1B4F8A]"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-white" : btn.color}`} />
                      {btn.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Location selection */}
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-2">An welchem Standort?</p>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger
                  className={`w-full rounded-xl p-3 text-slate-700 transition-colors ${
                    shakeError && !selectedLocation
                      ? "border-red-500 animate-[shake_0.5s_ease-in-out] ring-2 ring-red-200"
                      : ""
                  }`}
                >
                  <SelectValue placeholder="Standort wählen..." />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc.label} value={loc.label}>
                      {loc.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleCTA}
              className={`w-full bg-[#F97316] text-white font-bold rounded-xl py-4 text-lg hover:bg-[#EA580C] transition-colors ${
                shakeError ? "animate-[shake_0.5s_ease-in-out]" : ""
              }`}
            >
              Kurse & Termine anzeigen →
            </button>

            <p className="text-xs text-slate-400 text-center">
              Kostenlos · Keine Anmeldung · Sofort buchbar
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

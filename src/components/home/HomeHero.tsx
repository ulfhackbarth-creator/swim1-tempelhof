import { motion, AnimatePresence } from "framer-motion";
import type { CourseTab } from "@/pages/Index";

const heroContent: Record<CourseTab, { video: string; headline: string; subtext: string }> = {
  schwimmen: {
    video: "https://videos.pexels.com/video-files/9044164/9044164-hd_1920_1080_30fps.mp4",
    headline: "Vom Seepferdchen bis zum Goldabzeichen.",
    subtext: "Kleine Gruppen · Zertifizierte Trainer · Bewährte Methodik",
  },
  wassergewoehnung: {
    video: "https://videos.pexels.com/video-files/5888971/5888971-hd_1920_1080_30fps.mp4",
    headline: "Sicher ins Wasser. Von Anfang an.",
    subtext: "Eltern-Kind-Kurse · Ab 2 Monate · 32°C warmes Wasser",
  },
  fitness: {
    video: "https://videos.pexels.com/video-files/8050098/8050098-hd_1920_1080_25fps.mp4",
    headline: "Fitness im Wasser. Für jeden.",
    subtext: "Gelenkschonend · Alle Level · Viel Spaß in der Gruppe",
  },
  reha: {
    video: "https://videos.pexels.com/video-files/4115399/4115399-hd_1920_1080_25fps.mp4",
    headline: "Gesundheit beginnt im Wasser.",
    subtext: "Auf ärztliches Rezept · Krankenkassen-anerkannt · Medizinisch begleitet",
  },
};

const chips: { id: CourseTab; label: string }[] = [
  { id: "schwimmen", label: "Schwimmen lernen" },
  { id: "wassergewoehnung", label: "Wassergewöhnung" },
  { id: "fitness", label: "Aqua-Fitness" },
  { id: "reha", label: "Rehasport" },
];

const allTabs: CourseTab[] = ["schwimmen", "wassergewoehnung", "fitness", "reha"];

const HomeHero = ({
  activeTab,
  onTabChange,
}: {
  activeTab: CourseTab;
  onTabChange: (tab: CourseTab) => void;
}) => {
  const content = heroContent[activeTab];

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Videos */}
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />

      {/* Content — bottom-left */}
      <div className="relative z-10 pb-16 px-6 md:px-16 max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs font-semibold tracking-widest text-white/70 uppercase mb-3"
        >
          Seit 2019 · 4 Standorte · Über 2.000 Kinder
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-4">
              {content.headline}
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              {content.subtext}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-3"
        >
          <button
            onClick={() => scrollTo("#kurse")}
            className="bg-[#F97316] text-white rounded-full px-8 py-4 font-semibold hover:bg-orange-600 transition-colors"
          >
            Jetzt Kurs buchen
          </button>
          <button
            onClick={() => scrollTo("#standorte")}
            className="border-2 border-white text-white rounded-full px-8 py-4 font-semibold hover:bg-white/10 transition-colors"
          >
            Standort wählen
          </button>
        </motion.div>
      </div>

      {/* Course chips — bottom right */}
      <div className="absolute bottom-8 right-6 md:right-16 z-10 flex gap-2">
        {chips.map((chip) => (
          <button
            key={chip.id}
            onClick={() => onTabChange(chip.id)}
            className={`text-xs rounded-full px-3 py-1.5 transition-all ${
              activeTab === chip.id
                ? "bg-white text-[#1B4F8A] font-semibold"
                : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
            }`}
          >
            {chip.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HomeHero;

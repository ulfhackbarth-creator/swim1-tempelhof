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

type Course = { tag: string; name: string; text: string };

const coursesByTab: Record<CourseTab, Course[]> = {
  schwimmen: [
    { tag: "Kinder", name: "Seepferdchen", text: "Strukturierter Kurs für Kinder ab 3,5 Jahren. Schritt für Schritt zum ersten Schwimmabzeichen." },
    { tag: "Kinder", name: "Fortgeschrittene", text: "Aufbaukurse für Kinder mit Seepferdchen. Bronze, Silber und Gold — wir begleiten jeden Schritt." },
    { tag: "Erwachsene", name: "Erwachsenenschwimmen", text: "Für Erwachsene, die schwimmen lernen oder ihre Technik verbessern möchten. Nie zu spät." },
  ],
  wassergewoehnung: [
    { tag: "Eltern-Kind · Ab 2 Monate", name: "Wassergewöhnung", text: "Spielerische Eingewöhnung ins Wasser für die Kleinsten — gemeinsam mit Mama oder Papa in 32°C warmem Wasser." },
  ],
  fitness: [
    { tag: "Alle Level", name: "Aquafitness", text: "Gelenkschonendes Ganzkörper-Training im Wasser. Effektiv, motivierend und für alle Fitness-Level geeignet." },
  ],
  reha: [
    { tag: "Auf Rezept", name: "Aqua Reha", text: "Medizinisches Training im Wasser nach Verletzungen oder bei Gelenkbeschwerden — auf ärztliches Rezept." },
    { tag: "Prävention", name: "Aqua Prävention", text: "Krankenkassen-anerkannte Präventionskurse für Rücken, Gelenke und Herz-Kreislauf." },
  ],
};

const gridClass: Record<CourseTab, string> = {
  schwimmen: "grid-cols-1 md:grid-cols-3",
  wassergewoehnung: "grid-cols-1 max-w-lg mx-auto",
  fitness: "grid-cols-1 max-w-lg mx-auto",
  reha: "grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto",
};

const trustStats: Record<CourseTab, { value: string; label: string }[]> = {
  schwimmen: [
    { value: "Ab 3,5 Jahre", label: "Kursstart" },
    { value: "Max. 6", label: "Kinder pro Gruppe" },
    { value: "Seepferdchen bis Gold", label: "Abzeichen" },
  ],
  wassergewoehnung: [
    { value: "Ab 2 Monate", label: "Kursstart" },
    { value: "32°C", label: "Warmes Wasser" },
    { value: "Eltern-Kind", label: "Kursformat" },
  ],
  fitness: [
    { value: "Alle Level", label: "Für jeden geeignet" },
    { value: "Max. 8", label: "Teilnehmer pro Kurs" },
    { value: "Gelenkschonend", label: "Trainingsform" },
  ],
  reha: [
    { value: "Auf Rezept", label: "Verordnungsfähig" },
    { value: "Krankenkasse", label: "Anerkannt" },
    { value: "Medizinisch", label: "Begleitet" },
  ],
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
    <div>
      {/* TEIL 1 — VIDEO HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
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

        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/80" />

        <div className="relative z-10 pb-12 px-6 md:px-16 max-w-5xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-semibold tracking-widest text-white/60 uppercase mb-4"
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
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-3">
                {content.headline}
              </h1>
              <p className="text-lg text-white/75 mb-8 max-w-xl">
                {content.subtext}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => scrollTo("#standorte")}
              className="bg-[#F97316] text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
            >
              Standort wählen →
            </button>
          </motion.div>
        </div>

        {/* Course chips — bottom right */}
        <div className="absolute bottom-10 right-6 md:right-16 z-10 flex gap-2">
          {chips.map((chip) => (
            <button
              key={chip.id}
              onClick={() => onTabChange(chip.id)}
              className={`text-xs rounded-full px-4 py-2 transition-all cursor-pointer ${
                activeTab === chip.id
                  ? "bg-white text-[#1B4F8A] font-semibold shadow-md"
                  : "bg-white/15 text-white font-medium backdrop-blur-sm border border-white/20 hover:bg-white/25"
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </section>

      {/* TEIL 2 — KURSANGEBOT */}
      <section className="bg-[#0F2D52] py-16 px-6 md:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`grid gap-4 max-w-5xl mx-auto ${gridClass[activeTab]}`}
          >
            {coursesByTab[activeTab].map((course, i) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.12] hover:border-white/20 transition-all cursor-pointer flex flex-col"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F97316] mb-3">
                  {course.tag}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{course.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">{course.text}</p>
                <button className="w-full border border-white/20 text-white/80 rounded-full py-2.5 text-sm font-medium hover:border-white hover:text-white hover:bg-white/10 transition-all">
                  Mehr erfahren →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* TEIL 3 — TRUST BAR */}
      <section className="bg-[#1B4F8A] py-8 px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-white/20 text-center"
          >
            {trustStats[activeTab].map((s) => (
              <div key={s.label} className="px-4">
                <span className="block text-2xl font-bold text-white tracking-tight">
                  {s.value}
                </span>
                <span className="block text-xs font-medium text-white/50 mt-1 uppercase tracking-wider">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

export default HomeHero;

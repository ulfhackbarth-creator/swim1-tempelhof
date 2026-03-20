import { motion, AnimatePresence } from "framer-motion";
import { Waves, Baby, Activity, HeartPulse } from "lucide-react";
import type { CourseTab } from "@/pages/Index";

const categoryColors: Record<CourseTab, string> = {
  schwimmen: "#1B4F8A",
  wassergewoehnung: "#0891B2",
  fitness: "#059669",
  reha: "#7C3AED",
};

const categoryColorsDark: Record<CourseTab, string> = {
  schwimmen: "#153d6b",
  wassergewoehnung: "#067a99",
  fitness: "#047857",
  reha: "#6322c5",
};

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
    { tag: "Ab 2 Monate", name: "Wassergewöhnung", text: "Spielerische Eingewöhnung ins Wasser für die Kleinsten — gemeinsam mit Mama oder Papa." },
  ],
  fitness: [
    { tag: "Alle Level", name: "Aquafitness", text: "Gelenkschonendes Ganzkörper-Training im Wasser. Effektiv, motivierend, für jeden geeignet." },
  ],
  reha: [
    { tag: "Auf Rezept", name: "Aqua Reha", text: "Medizinisches Training im Wasser nach Verletzungen oder bei Gelenkbeschwerden." },
    { tag: "Prävention", name: "Aqua Prävention", text: "Krankenkassen-anerkannte Präventionskurse für Rücken, Gelenke und Herz-Kreislauf." },
  ],
};

const gridClass: Record<CourseTab, string> = {
  schwimmen: "grid-cols-1 md:grid-cols-3",
  wassergewoehnung: "grid-cols-1 max-w-sm mx-auto",
  fitness: "grid-cols-1 max-w-sm mx-auto",
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
    { value: "Alle Level", label: "Für jeden" },
    { value: "Max. 8", label: "Teilnehmer" },
    { value: "Gelenkschonend", label: "Trainingsform" },
  ],
  reha: [
    { value: "Auf Rezept", label: "Verordnungsfähig" },
    { value: "Krankenkasse", label: "Anerkannt" },
    { value: "Medizinisch", label: "Begleitet" },
  ],
};

const chips: { id: CourseTab; label: string; Icon: typeof Waves }[] = [
  { id: "schwimmen", label: "Schwimmen lernen", Icon: Waves },
  { id: "wassergewoehnung", label: "Wassergewöhnung", Icon: Baby },
  { id: "fitness", label: "Aqua-Fitness", Icon: Activity },
  { id: "reha", label: "Rehasport", Icon: HeartPulse },
];

const allTabs: CourseTab[] = ["schwimmen", "wassergewoehnung", "fitness", "reha"];

const HeroSection = ({
  activeTab,
  onTabChange,
}: {
  activeTab: CourseTab;
  onTabChange: (tab: CourseTab) => void;
}) => {
  const content = heroContent[activeTab];
  const color = categoryColors[activeTab];
  const colorDark = categoryColorsDark[activeTab];

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO — full screen with pt for sticky header */}
      <section className="relative min-h-screen overflow-hidden" style={{ paddingTop: "110px" }}>
        {allTabs.map((tab) => (
          <video
            key={tab}
            autoPlay
            muted
            loop
            playsInline
            preload={tab === "schwimmen" ? "auto" : "none"}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              activeTab === tab ? "opacity-100" : "opacity-0"
            }`}
            src={heroContent[tab].video}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />

        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "rgba(255,255,255,0.6)" }}
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
              <p className="text-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
                {content.subtext}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* TEIL 2 — KURSANGEBOT */}
      <section
        className="py-12 px-6 md:px-16 transition-colors duration-500"
        style={{ backgroundColor: color }}
      >
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
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all flex flex-col"
              >
                <span
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color }}
                >
                  {course.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{course.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{course.text}</p>
                <button
                  className="w-full rounded-full py-2.5 text-sm font-semibold text-white transition-all hover:brightness-90"
                  style={{ backgroundColor: color }}
                >
                  Mehr erfahren →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* TEIL 3 — TRUST-BAR */}
      <section
        className="py-8 px-6 transition-colors duration-500"
        style={{ backgroundColor: colorDark, borderTop: "1px solid rgba(255,255,255,0.15)" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="max-w-3xl mx-auto grid grid-cols-3 divide-x divide-white/15 text-center"
          >
            {trustStats[activeTab].map((s) => (
              <div key={s.label} className="px-4">
                <span className="block text-2xl font-bold text-white tracking-tight">
                  {s.value}
                </span>
                <span className="block text-xs font-medium mt-1 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
};

export default HeroSection;

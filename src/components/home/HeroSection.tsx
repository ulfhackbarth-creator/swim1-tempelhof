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
  wassergewoehnung: "grid-cols-1 max-w-lg mx-auto",
  fitness: "grid-cols-1 max-w-lg mx-auto",
  reha: "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto",
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

const allTabs: CourseTab[] = ["schwimmen", "wassergewoehnung", "fitness", "reha"];

const HeroSection = ({
  activeTab,
}: {
  activeTab: CourseTab;
}) => {
  const content = heroContent[activeTab];

  return (
    <>
      {/* HERO — Video */}
      <section className="relative min-h-[85vh] overflow-hidden" style={{ paddingTop: "120px" }}>
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

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-[85vh]" style={{ paddingTop: "120px" }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-medium tracking-widest uppercase text-white/80 mb-6"
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
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                {content.headline}
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                {content.subtext}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* KURSANGEBOT — Premium cards on off-white */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`grid gap-8 ${gridClass[activeTab]}`}
            >
              {coursesByTab[activeTab].map((course, i) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/40 border border-slate-100 transition-transform hover:-translate-y-1 flex flex-col"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1B4F8A] mb-4">
                    {course.tag}
                  </span>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{course.name}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-1">{course.text}</p>
                  <span className="inline-flex items-center text-[#1B4F8A] font-semibold hover:gap-3 transition-all cursor-pointer gap-1">
                    Mehr erfahren <span>→</span>
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* TRUST STATS — minimal, inside off-white */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`trust-${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-slate-200 text-center pt-16 pb-8"
            >
              {trustStats[activeTab].map((s) => (
                <div key={s.label} className="px-4">
                  <span className="block text-5xl font-bold text-[#1B4F8A] tracking-tight mb-2">
                    {s.value}
                  </span>
                  <span className="block text-sm font-medium text-slate-500 uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

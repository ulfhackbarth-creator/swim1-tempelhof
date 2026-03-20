import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CourseTab } from "@/pages/Index";

const heroContent: Record<CourseTab, { video: string; headline: string; subtext: string }> = {
  kinderschwimmen: {
    video: "https://videos.pexels.com/video-files/9044164/9044164-hd_1920_1080_30fps.mp4",
    headline: "Vom Seepferdchen bis zum Goldabzeichen.",
    subtext: "Kleine Gruppen · Zertifizierte Trainer · Bewährte Methodik",
  },
  wassergewoehnung: {
    video: "https://videos.pexels.com/video-files/5888971/5888971-hd_1920_1080_30fps.mp4",
    headline: "Sicher ins Wasser. Von Anfang an.",
    subtext: "Eltern-Kind-Kurse · Ab 2 Monate · 32°C warmes Wasser",
  },
  erwachsene: {
    video: "https://videos.pexels.com/video-files/6539521/6539521-uhd_2560_1440_25fps.mp4",
    headline: "Schwimmen lernen ist keine Frage des Alters.",
    subtext: "Ob kompletter Anfänger oder Technik-Feinschliff – lerne in kleiner Gruppe und geschütztem Rahmen schwimmen.",
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

const courseSectionTitle: Record<CourseTab, string> = {
  kinderschwimmen: "Der Weg zum sicheren Schwimmer",
  wassergewoehnung: "Gemeinsam das Element Wasser entdecken",
  erwachsene: "Schwimmkurse für Erwachsene",
  fitness: "Dein Workout im Wasser",
  reha: "Gesundheit und Mobilität fördern",
};

type Course = { tag: string; name: string; text: string };

const coursesByTab: Record<CourseTab, Course[]> = {
  kinderschwimmen: [
    { tag: "Kinder", name: "Seepferdchen", text: "Strukturierter Kurs für Kinder ab 3,5 Jahren. Schritt für Schritt zum ersten Schwimmabzeichen." },
    { tag: "Kinder", name: "Fortgeschrittene", text: "Aufbaukurse für Kinder mit Seepferdchen. Bronze, Silber und Gold — wir begleiten jeden Schritt." },
  ],
  wassergewoehnung: [
    { tag: "Ab 1,5 Monate", name: "Babyschwimmen", text: "Für Babys von 1,5 Monaten bis ca. 1,5 Jahre. Haut an Haut im 32°C warmen Wasser fördern wir das Urvertrauen und die motorische Entwicklung deines Kindes." },
    { tag: "Ab 1,5 Jahre", name: "Wassergewöhnung", text: "Für Kleinkinder von 1,5 bis 3,5 Jahren. Gemeinsam mit einem Elternteil entdecken wir spielerisch das Element Wasser und bereiten auf den ersten Schwimmkurs vor." },
  ],
  erwachsene: [
    { tag: "Für Anfänger", name: "Erwachsenenschwimmen Anfänger", text: "Überwinde deine Ängste im geschützten Rahmen. Wir gewöhnen dich behutsam ans Wasser und bringen dir die Grundlagen des Brustschwimmens bei." },
    { tag: "Für Fortgeschrittene", name: "Erwachsenenschwimmen Technik", text: "Du kannst bereits schwimmen, möchtest aber deine Technik verbessern oder Kraulen lernen? Hier feilen wir an deiner Wasserlage und Ausdauer." },
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
  kinderschwimmen: "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto",
  wassergewoehnung: "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto",
  erwachsene: "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto",
  fitness: "grid-cols-1 max-w-lg mx-auto",
  reha: "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto",
};

const trustStats: Record<CourseTab, { value: string; label: string }[]> = {
  kinderschwimmen: [
    { value: "Ab 3,5 Jahre", label: "Kursstart" },
    { value: "Max. 6", label: "Kinder pro Gruppe" },
    { value: "Seepferdchen bis Gold", label: "Abzeichen" },
  ],
  wassergewoehnung: [
    { value: "Ab 2 Monate", label: "Kursstart" },
    { value: "32°C", label: "Warmes Wasser" },
    { value: "Eltern-Kind", label: "Kursformat" },
  ],
  erwachsene: [
    { value: "Kleine Gruppen", label: "Max. 8 Personen" },
    { value: "Diskretes Umfeld", label: "Ohne Zuschauer" },
    { value: "Jedes Level", label: "Anfänger bis Technik" },
  ],
  fitness: [
    { value: "Alle Level", label: "Für jeden" },
    { value: "Max. 8", label: "Teilnehmer" },
    { value: "Gelenkschonend", label: "Trainingsform" },
  ],
  reha: [
    { value: "Auf Rezept", label: "Verordnungsfähig" },
    { value: "Von Kassen", label: "Anerkannt" },
    { value: "Medizinisch", label: "Begleitet" },
  ],
};

const allTabs: CourseTab[] = ["kinderschwimmen", "wassergewoehnung", "erwachsene", "fitness", "reha"];

const HeroSection = ({ activeTab }: { activeTab: CourseTab }) => {
  const content = heroContent[activeTab];

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO — Video */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] overflow-hidden pt-32 md:pt-[120px]">
        {allTabs.map((tab) => (
          <video
            key={tab}
            autoPlay
            muted
            loop
            playsInline
            preload={tab === "kinderschwimmen" ? "auto" : "none"}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              activeTab === tab ? "opacity-100" : "opacity-0"
            }`}
            src={heroContent[tab].video}
          />
        ))}

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 min-h-[70vh] md:min-h-[85vh] pt-32 md:pt-[120px] pb-8 md:pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-tight md:leading-[1.1] mb-4 md:mb-6">
                {content.headline}
              </h1>
              <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto">
                {content.subtext}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => scrollTo("#standorte")}
            className="mt-8 md:mt-10 w-full md:w-auto justify-center inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-lg text-white transition-colors shadow-lg bg-[#F97316] hover:bg-[#EA580C]"
            style={{ boxShadow: "0 10px 30px -5px rgba(249,115,22,0.3)" }}
          >
            Standort wählen & Kurse finden
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* KURSANGEBOT */}
      <section className="bg-blue-50/50 py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.h2
              key={`title-${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-center mb-12 md:mb-16"
            >
              {courseSectionTitle[activeTab]}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`grid gap-6 md:gap-8 ${gridClass[activeTab]}`}
            >
              {coursesByTab[activeTab].map((course, i) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="bg-white rounded-[2rem] p-6 md:p-10 shadow-xl shadow-slate-200/40 border border-slate-100 transition-transform hover:-translate-y-1 flex flex-col"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1B4F8A] mb-4">
                    {course.tag}
                  </span>
                  <h3 className="text-xl xl:text-2xl font-bold text-slate-900 mb-3 break-words hyphens-auto">{course.name}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-1">{course.text}</p>
                  <span className="mt-auto inline-flex items-center text-[#1B4F8A] font-semibold hover:gap-3 transition-all cursor-pointer gap-1">
                    Mehr erfahren <span>→</span>
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* TRUST STATS */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`trust-${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-center pt-12 md:pt-16 pb-8"
            >
              {trustStats[activeTab].map((s) => (
                <div key={s.label} className="flex-1 min-w-0 px-4 py-4 md:py-0">
                  <span className="block text-xl md:text-2xl lg:text-3xl font-bold text-[#1B4F8A] tracking-tight mb-2 break-words hyphens-auto">
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

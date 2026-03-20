import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Waves, Fish, Award, User, Activity, HeartPulse, ShieldCheck, Baby, ArrowRight, LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { CourseTab } from "@/pages/Index";

type Course = {
  icon: LucideIcon;
  title: string;
  tag: string;
  description: string;
};

const tabs = [
  { id: "wassergewoehnung" as CourseTab, label: "Wassergewöhnung" },
  { id: "schwimmen" as CourseTab, label: "Schwimmen lernen" },
  { id: "fitness" as CourseTab, label: "Aqua-Fitness" },
  { id: "reha" as CourseTab, label: "Rehasport" },
];

const coursesByTab: Record<CourseTab, Course[]> = {
  wassergewoehnung: [
    {
      icon: Waves,
      title: "Wassergewöhnung",
      tag: "Ab 2 Monate · Eltern-Kind-Kurs",
      description: "Spielerische Wassergewöhnung für die Kleinsten, gemeinsam mit Mama oder Papa. Ideal ab 2 Monaten.",
    },
    {
      icon: Baby,
      title: "Baby & Kleinkind",
      tag: "Ab 2 Monate bis 3 Jahre",
      description: "Erste Erfahrungen im warmen Wasser – sicher, sanft und mit viel Freude.",
    },
  ],
  schwimmen: [
    {
      icon: Fish,
      title: "Seepferdchen",
      tag: "Ab 3,5 Jahre · Erstes Schwimmabzeichen",
      description: "Der erste große Schritt: Dein Kind lernt sicher zu schwimmen.",
    },
    {
      icon: Award,
      title: "Fortgeschrittene",
      tag: "Bronze · Silber · Gold",
      description: "Aufbaukurse für Kinder, die alle drei Abzeichen erreichen wollen.",
    },
    {
      icon: User,
      title: "Erwachsenenschwimmen",
      tag: "Anfänger & Technik · Alle Altersgruppen",
      description: "Nie zu spät: Schwimmen lernen oder die Technik verbessern.",
    },
  ],
  fitness: [
    {
      icon: Activity,
      title: "Aquafitness",
      tag: "Ganzkörper-Workout im Wasser",
      description: "Gelenkschonend, effektiv und mit viel Spaß in der Gruppe. Ideal für alle Fitness-Level – kein Schwimmen erforderlich.",
    },
  ],
  reha: [
    {
      icon: HeartPulse,
      title: "Aqua Reha",
      tag: "Rehabilitation im Wasser",
      description: "Medizinisches Training nach Verletzungen oder bei Gelenkbeschwerden – auf ärztliches Rezept.",
    },
    {
      icon: ShieldCheck,
      title: "Aqua Prävention",
      tag: "Gesundheitsvorsorge",
      description: "Krankenkassen-anerkannte Präventionskurse für Rücken, Gelenke und Herz-Kreislauf.",
    },
  ],
};

const gridClass: Record<CourseTab, string> = {
  wassergewoehnung: "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto",
  schwimmen: "grid-cols-1 sm:grid-cols-3",
  fitness: "grid-cols-1 max-w-md mx-auto",
  reha: "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto",
};

const locations = [
  { label: "Berlin-Tempelhof", route: "/" },
  { label: "Schwerin", route: "/schwerin" },
  { label: "Wildau", route: "/wildau" },
  { label: "Bremen", route: "/bremen" },
];

const CourseCard = ({ course, index }: { course: Course; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.08 }}
    className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-shadow duration-300 p-8 flex flex-col gap-4"
  >
    <div className="bg-slate-50 rounded-xl p-3 w-fit">
      <course.icon className="w-6 h-6 text-[#1B4F8A]" />
    </div>
    <h3 className="font-bold text-xl text-slate-900">{course.title}</h3>
    <p className="text-sm font-medium text-[#1B4F8A]/60">{course.tag}</p>
    <p className="text-slate-500 leading-relaxed">{course.description}</p>
    <a
      href="#"
      className="mt-auto inline-flex items-center gap-2 text-[#1B4F8A] font-medium group-hover:gap-3 transition-all"
    >
      Mehr erfahren <ArrowRight className="w-4 h-4" />
    </a>
  </motion.div>
);

const CourseOverview = ({
  activeTab,
  onTabChange,
}: {
  activeTab: CourseTab;
  onTabChange: (tab: CourseTab) => void;
}) => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0].label);
  const navigate = useNavigate();

  return (
    <section id="kurse" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1B4F8A] tracking-tight mb-4">
            Unser Kursangebot
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Finde den passenden Kurs für dich oder dein Kind.
          </p>

          {/* Tab navigation */}
          <div className="inline-flex flex-wrap justify-center bg-white rounded-full p-1 mt-8 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-4 md:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#1B4F8A] text-white shadow-sm"
                    : "text-slate-500 hover:text-[#1B4F8A] cursor-pointer"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`grid gap-6 ${gridClass[activeTab]}`}
          >
            {coursesByTab[activeTab].map((course, i) => (
              <CourseCard key={course.title} course={course} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Inline CTA bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-3xl mx-auto shadow-sm">
          <p className="font-semibold text-slate-800">
            Bereit? Wähle deinen Standort und buche direkt.
          </p>
          <div className="flex items-center gap-3">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1B4F8A]/20"
            >
              {locations.map((loc) => (
                <option key={loc.label} value={loc.label}>
                  {loc.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => {
                const loc = locations.find((l) => l.label === selectedLocation);
                if (loc) navigate(loc.route);
              }}
              className="bg-[#F97316] text-white rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-[#EA580C] transition-colors"
            >
              Zum Standort →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;

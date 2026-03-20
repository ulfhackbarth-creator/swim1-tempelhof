import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Waves, Fish, Award, User, Activity, HeartPulse, ShieldCheck, Baby, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import type { CourseTab } from "@/pages/Index";

type Course = {
  icon: LucideIcon;
  accentBorder: string;
  accentText: string;
  accentBg: string;
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
      accentBorder: "border-sky-400",
      accentText: "text-sky-400",
      accentBg: "bg-sky-50",
      title: "Wassergewöhnung",
      tag: "Ab 2 Monate · Eltern-Kind-Kurs",
      description: "Spielerische Wassergewöhnung für die Kleinsten, gemeinsam mit Mama oder Papa. Ideal ab 2 Monaten.",
    },
    {
      icon: Baby,
      accentBorder: "border-sky-300",
      accentText: "text-sky-300",
      accentBg: "bg-sky-50",
      title: "Baby & Kleinkind",
      tag: "Ab 2 Monate bis 3 Jahre",
      description: "Erste Erfahrungen im warmen Wasser – sicher, sanft und mit viel Freude.",
    },
  ],
  schwimmen: [
    {
      icon: Fish,
      accentBorder: "border-teal-500",
      accentText: "text-teal-500",
      accentBg: "bg-teal-50",
      title: "Seepferdchen",
      tag: "Ab 3,5 Jahre · Erstes Schwimmabzeichen",
      description: "Der erste große Schritt: Dein Kind lernt sicher zu schwimmen.",
    },
    {
      icon: Award,
      accentBorder: "border-[#1B4F8A]",
      accentText: "text-[#1B4F8A]",
      accentBg: "bg-blue-50",
      title: "Fortgeschrittene",
      tag: "Bronze · Silber · Gold",
      description: "Aufbaukurse für Kinder, die alle drei Abzeichen erreichen wollen.",
    },
    {
      icon: User,
      accentBorder: "border-green-500",
      accentText: "text-green-500",
      accentBg: "bg-green-50",
      title: "Erwachsenenschwimmen",
      tag: "Anfänger & Technik · Alle Altersgruppen",
      description: "Nie zu spät: Schwimmen lernen oder die Technik verbessern.",
    },
  ],
  fitness: [
    {
      icon: Activity,
      accentBorder: "border-orange-400",
      accentText: "text-orange-400",
      accentBg: "bg-orange-50",
      title: "Aquafitness",
      tag: "Ganzkörper-Workout im Wasser",
      description: "Gelenkschonend, effektiv und mit viel Spaß in der Gruppe. Ideal für alle Fitness-Level – kein Schwimmen erforderlich.",
    },
  ],
  reha: [
    {
      icon: HeartPulse,
      accentBorder: "border-violet-500",
      accentText: "text-violet-500",
      accentBg: "bg-violet-50",
      title: "Aqua Reha",
      tag: "Rehabilitation im Wasser",
      description: "Medizinisches Training nach Verletzungen oder bei Gelenkbeschwerden – auf ärztliches Rezept.",
    },
    {
      icon: ShieldCheck,
      accentBorder: "border-purple-400",
      accentText: "text-purple-400",
      accentBg: "bg-purple-50",
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
    className={`bg-white rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 p-6 flex flex-col gap-3 border-t-4 ${course.accentBorder}`}
  >
    <div className={`${course.accentBg} rounded-xl p-3 w-fit`}>
      <course.icon className={`w-6 h-6 ${course.accentText}`} />
    </div>
    <h3 className="font-bold text-lg text-slate-900">{course.title}</h3>
    <p className={`text-sm font-medium ${course.accentText}`}>{course.tag}</p>
    <p className="text-slate-600 text-sm">{course.description}</p>
    <a
      href="#"
      className="mt-auto inline-flex items-center justify-center border-2 border-[#1B4F8A] text-[#1B4F8A] rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#1B4F8A] hover:text-white transition-colors self-start"
    >
      Mehr erfahren
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
    <section id="kurse" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
            Unser Kursangebot
          </h2>

          {/* Tab navigation */}
          <div className="inline-flex flex-wrap justify-center bg-slate-100 rounded-full p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white shadow-sm font-semibold text-[#1B4F8A]"
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
        <div className="mt-8 bg-[#F0F4F8] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
          <p className="font-semibold text-slate-800">
            Bereit? Wähle deinen Standort und buche direkt.
          </p>
          <div className="flex items-center gap-3">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {locations.map((loc) => (
                <option key={loc.label} value={loc.label}>
                  {loc.label}
                </option>
              ))}
            </select>
            <Button
              variant="cta"
              className="rounded-full"
              onClick={() => {
                const loc = locations.find((l) => l.label === selectedLocation);
                if (loc) navigate(loc.route);
              }}
            >
              Zum Standort →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;

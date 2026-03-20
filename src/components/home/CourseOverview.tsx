import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { CourseTab } from "@/pages/Index";

type Course = {
  title: string;
  tag: string;
  description: string;
};

const tabs = [
  { id: "schwimmen" as CourseTab, label: "Schwimmen lernen" },
  { id: "wassergewoehnung" as CourseTab, label: "Wassergewöhnung" },
  { id: "fitness" as CourseTab, label: "Aqua-Fitness" },
  { id: "reha" as CourseTab, label: "Rehasport" },
];

const coursesByTab: Record<CourseTab, Course[]> = {
  schwimmen: [
    {
      title: "Seepferdchen",
      tag: "Ab 3,5 Jahre · Erstes Abzeichen",
      description: "Der erste große Schritt: Dein Kind lernt sicher zu schwimmen und macht das Seepferdchen-Abzeichen.",
    },
    {
      title: "Fortgeschrittene",
      tag: "Bronze · Silber · Gold",
      description: "Aufbaukurse für Kinder, die alle drei Abzeichen erreichen wollen.",
    },
    {
      title: "Erwachsenenschwimmen",
      tag: "Anfänger & Technik",
      description: "Nie zu spät: Schwimmen lernen oder die Technik verbessern – für alle Altersgruppen.",
    },
  ],
  wassergewoehnung: [
    {
      title: "Wassergewöhnung",
      tag: "Ab 2 Monate · Eltern-Kind-Kurs",
      description: "Spielerische Wassergewöhnung für die Kleinsten, gemeinsam mit Mama oder Papa. Im 32°C warmen Wasser.",
    },
  ],
  fitness: [
    {
      title: "Aquafitness",
      tag: "Ganzkörper-Workout im Wasser",
      description: "Gelenkschonend, effektiv und mit viel Spaß in der Gruppe. Ideal für alle Fitness-Level – kein Schwimmen erforderlich.",
    },
  ],
  reha: [
    {
      title: "Aqua Reha",
      tag: "Rehabilitation im Wasser",
      description: "Medizinisches Training nach Verletzungen oder bei Gelenkbeschwerden – auf ärztliches Rezept.",
    },
    {
      title: "Aqua Prävention",
      tag: "Gesundheitsvorsorge",
      description: "Krankenkassen-anerkannte Präventionskurse für Rücken, Gelenke und Herz-Kreislauf.",
    },
  ],
};

const gridClass: Record<CourseTab, string> = {
  schwimmen: "grid-cols-1 sm:grid-cols-3",
  wassergewoehnung: "grid-cols-1 max-w-lg mx-auto",
  fitness: "grid-cols-1 max-w-lg mx-auto",
  reha: "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto",
};

const locations = [
  { label: "Berlin-Tempelhof", route: "/" },
  { label: "Schwerin", route: "/schwerin" },
  { label: "Wildau", route: "/wildau" },
  { label: "Bremen", route: "/bremen" },
];

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
    <section id="kurse" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] mb-4">
            Unser Kursangebot
          </h2>
          <p className="text-lg text-[#64748B]">
            Für jedes Alter. Für jedes Ziel.
          </p>

          {/* Segmented control */}
          <div className="inline-flex flex-wrap justify-center bg-slate-100 rounded-full p-1 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-4 md:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-[#0F172A] shadow-sm"
                    : "text-[#64748B] hover:text-[#0F172A]"
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
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 hover:border-[#1B4F8A]/30 hover:shadow-md transition-all flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#1B4F8A]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1B4F8A]">
                    {course.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{course.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed mb-6 flex-1">{course.description}</p>
                <button className="w-full border border-slate-200 rounded-full py-2.5 text-sm font-medium text-[#64748B] hover:border-[#1B4F8A] hover:text-[#1B4F8A] transition-colors">
                  Mehr erfahren
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Inline CTA */}
        <div className="bg-[#F8FAFC] rounded-2xl p-6 max-w-2xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-semibold text-[#0F172A]">
            Bereit? Wähle deinen Standort.
          </p>
          <div className="flex items-center gap-3">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#1B4F8A]/20"
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
              className="bg-[#F97316] text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap"
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

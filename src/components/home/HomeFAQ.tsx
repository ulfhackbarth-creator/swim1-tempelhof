import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import type { CourseTab } from "@/pages/Index";

type FaqItem = { q: string; a: string };

const faqsByTab: Record<CourseTab, { title: string; items: FaqItem[] }> = {
  schwimmen: {
    title: "Häufige Fragen zum Schwimmenlernen",
    items: [
      { q: "Ab welchem Alter kann mein Kind starten?", a: "Für das Seepferdchen empfehlen wir ein Alter ab 3,5 Jahren." },
      { q: "Wie lange dauert es bis zum Seepferdchen?", a: "Das ist individuell sehr verschieden, meist zwischen 10 und 15 Einheiten." },
      { q: "Dürfen Eltern beim Kurs zuschauen?", a: "Um die Konzentration der Kinder bei den Trainern zu halten, bitten wir Eltern, außerhalb des Bades zu warten." },
    ],
  },
  wassergewoehnung: {
    title: "Häufige Fragen zum Babyschwimmen",
    items: [
      { q: "Ab wann darf mein Baby ins Wasser?", a: "Wir empfehlen den Start ab dem 2. Lebensmonat, wenn der Bauchnabel vollständig verheilt ist." },
      { q: "Was muss ich mitbringen?", a: "Schwimmwindel, zwei große Handtücher und natürlich viel gute Laune." },
      { q: "Was passiert, wenn mein Baby weint?", a: "Das ist völlig normal! Unsere Trainer zeigen dir Griffe, wie du dein Baby im Wasser beruhigen kannst." },
    ],
  },
  fitness: {
    title: "Häufige Fragen zum Training",
    items: [
      { q: "Muss ich schwimmen können?", a: "Nein, unsere Kurse finden im stehtiefen Wasser statt. Du solltest dich aber im Wasser wohlfühlen." },
      { q: "Welche Ausrüstung brauche ich?", a: "Bequeme Badekleidung reicht völlig aus. Alle Trainingsgeräte (Nudeln, Hanteln) stellen wir." },
      { q: "Für welches Fitnesslevel ist der Kurs?", a: "Für jedes! Durch die Geschwindigkeit deiner Bewegungen steuerst du die Intensität selbst." },
    ],
  },
  reha: {
    title: "Häufige Fragen zur Verordnung",
    items: [
      { q: "Wie bekomme ich eine Verordnung?", a: "Dein behandelnder Arzt (z.B. Hausarzt oder Orthopäde) kann dir Rehasport verschreiben (Formular 56)." },
      { q: "Muss ich die Verordnung vorher genehmigen lassen?", a: "Ja, die Verordnung muss vor Kursbeginn von deiner Krankenkasse bewilligt werden." },
      { q: "Ist das Wasser warm genug?", a: "Ja, unsere Therapiebecken haben angenehme 32°C, was die Muskulatur zusätzlich entspannt." },
    ],
  },
};

const HomeFAQ = ({ activeTab }: { activeTab: CourseTab }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const data = faqsByTab[activeTab];

  useEffect(() => {
    setOpenIndex(null);
  }, [activeTab]);

  return (
    <section id="faq" className="py-16 md:py-32 bg-white scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <AnimatePresence mode="wait">
          <motion.h2
            key={`faq-title-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-bold tracking-tight text-slate-900 text-center mb-12 md:mb-20"
          >
            {data.title}
          </motion.h2>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`faq-items-${activeTab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {data.items.map((faq, i) => (
              <div key={i} className="border-b border-slate-100 py-6">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-base md:text-lg font-semibold text-slate-900 pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <p className="text-slate-600 leading-relaxed pt-4">{faq.a}</p>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HomeFAQ;

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Ab welchem Alter kann mein Kind an einem Schwimmkurs teilnehmen?",
    a: "Unsere Wassergewöhnungskurse starten bereits ab 2 Monaten als Eltern-Kind-Kurs. Seepferdchenkurse bieten wir ab 3,5 Jahren an.",
  },
  {
    q: "Wie groß sind die Gruppen?",
    a: "Maximal 6 Kinder pro Gruppe – so können unsere Trainer jedes Kind individuell betreuen und fördern.",
  },
  {
    q: "Wie warm ist das Wasser?",
    a: "Das Wasser in unseren Schwimmbädern ist angenehme 32°C warm – ideal für Babys und Kleinkinder.",
  },
  {
    q: "Sind die Trainer qualifiziert?",
    a: "Alle unsere Trainer sind ausgebildete Rettungsschwimmer mit Erfahrung im Kinderschwimmen und regelmäßigen Fortbildungen.",
  },
  {
    q: "Kann ich einen Kurs kostenlos stornieren?",
    a: "Ja, bis 14 Tage vor Kursbeginn ist eine kostenlose Stornierung möglich. Details findest du in unseren AGB.",
  },
];

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-white scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-slate-900 text-center mb-20"
        >
          Häufige Fragen
        </motion.h2>

        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-slate-100 py-6">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-slate-900 pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <p className="text-slate-600 leading-relaxed pt-4">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;

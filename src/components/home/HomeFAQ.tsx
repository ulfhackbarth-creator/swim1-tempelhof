import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const HomeFAQ = () => (
  <section id="faq" className="py-16 md:py-24 bg-background scroll-mt-20">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
          Häufig gestellte Fragen
        </h2>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl shadow-soft border-none px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default HomeFAQ;

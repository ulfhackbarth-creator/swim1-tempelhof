import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Ist die Warteliste verbindlich?",
    answer: "Nein, die Eintragung ist zu 100% unverbindlich und kostenlos. Du gehst keinerlei Verpflichtung ein.",
  },
  {
    question: "Wann startet der Standort?",
    answer: "Eröffnung zur Saison 2026 – sobald der genaue Starttermin feststeht, informieren wir alle Wartelisten-Teilnehmer als Erste mit Platzgarantie.",
  },
  {
    question: "Wo genau ist der Standort?",
    answer: "Der Standort befindet sich am Tempelhofer Hafen in Berlin, optimal erreichbar mit S+U Tempelhof.",
  },
  {
    question: "Für welche Altersgruppen sind die Kurse?",
    answer: "Wir bieten Kurse für Kinder ab 3 Jahren, Jugendliche und Erwachsene an. Von Wassergewöhnung bis Fortgeschrittene.",
  },
  {
    question: "Mit welchen Preisen kann ich rechnen?",
    answer: "Die genauen Preise werden vor Kursstart bekannt gegeben. Sie werden sich im marktüblichen Rahmen für qualitativ hochwertige Schwimmausbildung bewegen.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Häufige Fragen
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl shadow-soft border-none px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

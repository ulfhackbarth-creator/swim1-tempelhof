import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import GlobalHeader from "@/components/home/GlobalHeader";
import HomeFooter from "@/components/home/HomeFooter";
import SectionDivider from "@/components/SectionDivider";
import StandortDropdown from "@/components/StandortDropdown";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  {
    title: "Allgemeine Fragen",
    items: [
      {
        q: "Wie gewährleisten Sie die Sicherheit der Kinder im Wasser?",
        a: "Die Sicherheit hat für uns höchste Priorität. Alle unsere Schwimmlehrer sind ausgebildet und erfahren im Umgang mit Kindern und Erwachsenen. Durch unsere kleinen Gruppen haben die Trainer jedes einzelne Mitglied immer im Blick. Zudem findet der Unterricht in unseren eigenen, geschützten Becken statt – ohne unübersichtlichen öffentlichen Badebetrieb.",
      },
      {
        q: "Wieviele Teilnehmer sind in einem Schwimmkurs?",
        a: "Wir setzen auf kleine Gruppen, um individuell auf jeden eingehen zu können. In unseren Kinderkursen sind maximal 6 Kinder in einer Gruppe. Bei Erwachsenen- und Gesundheitskursen sind es maximal 8 Teilnehmer. So stellen wir sicher, dass niemand untergeht.",
      },
      {
        q: "Wie lange dauert ein Schwimmkurs?",
        a: "Die Dauer variiert je nach Kursniveau und Altersgruppe. In der Regel laufen unsere Kurse zwischen 8 und 15 Wochen mit einer wöchentlichen Einheit. Genaue Details findest du bei der Kursauswahl an deinem gewünschten Standort.",
      },
      {
        q: "Wie kann ich die Schwimmschule erreichen?",
        a: "Du erreichst uns am besten per E-Mail. Wir bemühen uns, alle Anfragen innerhalb von 24 Stunden (werktags) zu beantworten. Die genauen Kontaktdaten findest du auf der jeweiligen Standortseite.",
      },
    ],
  },
  {
    title: "Vor und während des Kurses",
    items: [
      {
        q: "Mein Kind ist erkältet – kann ich es trotzdem am Schwimmkurs teilnehmen lassen?",
        a: "Wenn dein Kind krank ist (Fieber, starker Husten, ansteckende Krankheiten), sollte es zu Hause bleiben, um sich zu erholen und andere nicht anzustecken. Bei leichtem Schnupfen ohne Fieber ist eine Teilnahme oft möglich, wir empfehlen jedoch, im Zweifel auf den Körper zu hören. Über dein Kundenkonto kannst du dich unkompliziert abmelden.",
      },
      {
        q: "Kann man mit einem Neoprenanzug am Schwimmunterricht teilnehmen?",
        a: "Unser Wasser ist mit 32 °C angenehm warm, sodass ein Neoprenanzug meist nicht nötig ist. Falls du oder dein Kind jedoch besonders schnell frieren, ist ein Neoprenanzug selbstverständlich erlaubt. Er bietet zudem etwas zusätzlichen Auftrieb.",
      },
      {
        q: "Darf ich Fotos oder Videoaufnahmen von meinem Kind während des Kurses machen?",
        a: "Nein, das ist aus Datenschutzgründen und aus Rücksicht auf die anderen Teilnehmer strikt verboten. Video- und Fotoaufnahmen sind an allen unseren Standorten während der Kurse nicht gestattet. Du kannst aber gerne nach dem Kurs (z.\u00A0B. beim Bestehen eines Abzeichens) ein Foto von deinem Kind und dem Trainer machen.",
      },
      {
        q: "Sind Schwimmwindeln für das Babyschwimmen erforderlich?",
        a: "Ja, wir bitten darum, dass alle Babys und Kleinkinder, die noch nicht trocken sind, in unseren Kursen Schwimmwindeln tragen. Dies sorgt für Hygiene und Sicherheit im Wasser für alle Teilnehmer.",
      },
    ],
  },
  {
    title: "Buchung und Anmeldung",
    items: [
      {
        q: "Kann ich eine Probestunde vereinbaren?",
        a: "Wir bieten keine klassischen Probestunden an, da die Kinder (und auch Erwachsene) Zeit brauchen, um sich an die Gruppe und den Trainer zu gewöhnen. Sollte sich nach den ersten Einheiten herausstellen, dass der Kurs absolut nicht der richtige ist, finden wir gemeinsam eine Lösung oder buchen dich in einen passenderen Kurs um.",
      },
      {
        q: "Der Kurs ist ausgebucht – was kann ich tun?",
        a: "Wenn dein Wunschkurs ausgebucht ist, kannst du dich unverbindlich auf die Warteliste setzen lassen. Sobald ein Platz frei wird oder wir einen neuen Kurs eröffnen, informieren wir dich umgehend.",
      },
      {
        q: "Finden die Kurse auch in den Schulferien statt?",
        a: "Das hängt vom jeweiligen Standort und Kursformat ab. Die genauen Termine deines Kurses siehst du direkt bei der Buchung und in deinem Kundenkonto.",
      },
    ],
  },
];

const anim = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const FAQ = () => (
  <>
    <Helmet>
      <title>Häufige Fragen | SWIM1</title>
      <meta name="description" content="Antworten auf die häufigsten Fragen zu unseren Schwimmkursen, der Anmeldung, Sicherheit und unseren Standorten." />
    </Helmet>

    <GlobalHeader />

    {/* Hero */}
    <section className="bg-primary pt-16 pb-14 md:pt-24 md:pb-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
        >
          Häufige Fragen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto"
        >
          Alles, was du über unsere Schwimmkurse, die Anmeldung und unsere Standorte wissen musst.
        </motion.p>
      </div>
    </section>

    {/* FAQ Categories */}
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-2xl mx-auto px-4 space-y-14">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            custom={ci}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={anim}
          >
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-5">{cat.title}</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {cat.items.map((item, qi) => (
                <AccordionItem
                  key={qi}
                  value={`${ci}-${qi}`}
                  className="bg-card rounded-xl shadow-soft border-none px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4"
        >
          Deine Frage war nicht dabei?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-primary-foreground/80 mb-8"
        >
          Wir helfen dir gerne weiter. Finde deinen Standort und kontaktiere das Team vor Ort.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StandortDropdown
            variant="orange-large"
            label="Standorte entdecken"
            align="center"
          />
        </motion.div>
      </div>
    </section>

    <SectionDivider fromColor="#0C2D48" />
    <HomeFooter />
  </>
);

export default FAQ;

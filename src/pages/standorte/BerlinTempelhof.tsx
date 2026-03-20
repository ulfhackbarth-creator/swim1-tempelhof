import { useRef, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Thermometer, Car, Droplets, Train, Shirt, Wind, Coffee, ChevronRight, Phone, Clock, ArrowRight, ShowerHead } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GlobalHeader from "@/components/home/GlobalHeader";
import HomeFooter from "@/components/home/HomeFooter";

const trustBadges = [
  { icon: Thermometer, label: "32 °C Wassertemperatur" },
  { icon: Car, label: "Kostenlose Parkplätze" },
  { icon: Droplets, label: "Salzwasser-Pool" },
];

const amenities = [
  { icon: Shirt, label: "Einzelumkleiden" },
  { icon: Wind, label: "Föhn-Stationen" },
  { icon: Coffee, label: "Café-Lounge" },
];

const courses = [
  {
    id: "wassergewoehnung",
    title: "Wassergewöhnung",
    description: "Für Babys (3–12 Monate) und Kleinkinder (1–3 Jahre). Samstags & Sonntags.",
    cta: "Kurszeiten & Buchung",
    courseKeys: ["babyschwimmen", "kleinkind-wassergewohnung", "kleinkind-wassergewöhnung", "wassergewoehnung"],
  },
  {
    id: "kinderschwimmen",
    title: "Kinderschwimmen",
    description: "Seepferdchen und Bronze-Kurse. Kleine Gruppen (max. 6 Kinder). Dienstags & Donnerstags.",
    cta: "Kurszeiten & Buchung",
    courseKeys: ["seepferdchen", "bronze", "silber", "gold", "kinderschwimmen"],
  },
  {
    id: "erwachsene",
    title: "Erwachsenenschwimmen",
    description: "Anfänger und Kraul-Technik. Diskretes Umfeld. Mittwochs.",
    cta: "Kurszeiten & Buchung",
    courseKeys: ["anfanger-schwimmen", "anfänger-schwimmen", "technik-&-kraulen", "erwachsenenschwimmen", "erwachsene"],
  },
  {
    id: "aquafitness",
    title: "Aquafitness",
    description: "Power-Workout im Wasser. Gelenkschonend. Montags & Freitags.",
    cta: "Kurszeiten & Buchung",
    courseKeys: ["aquafitness", "ganzkorper-workout", "ganzkörper-workout"],
  },
  {
    id: "reha",
    title: "Aqua Reha",
    description: "Von den Krankenkassen zertifiziert. Mit Rezept 100 % kostenfrei.",
    cta: "Rezept einreichen",
    courseKeys: ["reha-sport", "praventionskurse", "präventionskurse", "aqua-reha", "reha"],
  },
];

const pricingCards = [
  {
    title: "Flex-Ticket",
    subtitle: "Einzelkarte für Aquafitness",
    price: "15 €",
    highlight: false,
  },
  {
    title: "Kurs-Block",
    subtitle: "10er Block Kinderschwimmen",
    price: "180 €",
    highlight: true,
  },
  {
    title: "Reha-Sport",
    subtitle: "Mit ärztlicher Verordnung",
    price: "0 €",
    highlight: false,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const BerlinTempelhof = () => {
  const kurseRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();
  const courseParam = searchParams.get("course") || searchParams.get("preselect") || "";

  const displayCourseName = courseParam
    ? decodeURIComponent(courseParam).replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "";

  const matchedAccordion = useMemo(() => {
    if (!courseParam) return "";
    const normalized = decodeURIComponent(courseParam).toLowerCase();
    const match = courses.find((c) =>
      c.courseKeys.some((k) => normalized.includes(k)) || c.id === normalized
    );
    return match?.id || "";
  }, [courseParam]);

  useEffect(() => {
    if (matchedAccordion) {
      const timer = setTimeout(() => {
        kurseRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [matchedAccordion]);

  const scrollToKurse = () =>
    kurseRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="min-h-screen bg-background">
      <GlobalHeader />

      {/* ─── HERO ─── */}
      <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-[hsl(200,70%,40%)]" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center mix-blend-overlay opacity-20" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
          <motion.span
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/70 mb-5"
          >
            Standort Berlin
          </motion.span>

          <motion.h1
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground tracking-tight leading-[1.08] mb-5"
          >
            Swim1 Schwimmschule
            <br className="hidden md:block" /> Berlin-Tempelhof
          </motion.h1>

          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
          >
            Dein Premium-Standort für Schwimmkurse, Aquafitness und Aqua&nbsp;Reha in Berlin.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.24 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {trustBadges.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-sm font-semibold px-4 py-2.5 rounded-full border border-primary-foreground/20"
              >
                <b.icon className="w-4 h-4" />
                {b.label}
              </span>
            ))}
          </motion.div>

          <motion.button
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.32 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToKurse}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-lg px-8 py-4 rounded-full shadow-[var(--shadow-cta)] hover:brightness-110 transition-all active:scale-[0.97]"
          >
            Verfügbarkeit anfragen
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* ─── KURSANGEBOT (AKKORDEON) ─── */}
      <section ref={kurseRef} className="py-16 md:py-24 bg-secondary/50 px-5 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center mb-4"
          >
            Kursangebot am Standort
          </motion.h2>
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-muted-foreground text-center mb-12 md:mb-16"
          >
            Wähle eine Kategorie und sichere dir deinen Platz.
          </motion.p>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <Accordion type="single" collapsible defaultValue={matchedAccordion} className="space-y-3">
              {courses.map((course) => {
                const isHighlighted = matchedAccordion === course.id && !!courseParam;
                return (
                  <AccordionItem
                    key={course.id}
                    value={course.id}
                    className={`bg-card rounded-2xl border shadow-[var(--shadow-soft)] px-6 data-[state=open]:shadow-[var(--shadow-card)] transition-all ${
                      isHighlighted
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-border"
                    }`}
                  >
                    <AccordionTrigger className="text-lg font-bold text-foreground hover:no-underline py-5">
                      {course.title}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="text-muted-foreground mb-5 leading-relaxed">{course.description}</p>
                      <button
                        className={`inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-full transition-all active:scale-[0.97] ${
                          isHighlighted
                            ? "bg-accent text-accent-foreground shadow-lg hover:brightness-110"
                            : "bg-primary text-primary-foreground hover:brightness-110"
                        }`}
                      >
                        {isHighlighted ? "Kurs buchen" : course.cta}
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ─── PREISPAKETE ─── */}
      <section className="py-16 md:py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center mb-4"
          >
            Transparente Preise
          </motion.h2>
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-muted-foreground text-center mb-12 md:mb-16"
          >
            Keine versteckten Kosten. Keine Vertragsbindung.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingCards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-3xl p-8 border flex flex-col text-center transition-transform hover:-translate-y-1 ${
                  card.highlight
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-card text-foreground border-border shadow-[var(--shadow-card)]"
                }`}
              >
                <span className={`text-xs font-bold uppercase tracking-[0.15em] mb-3 ${card.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {card.title}
                </span>
                <span className="text-4xl md:text-5xl font-bold tracking-tight mb-2">{card.price}</span>
                <span className={`text-sm mb-8 ${card.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {card.subtitle}
                </span>
                <button
                  className={`mt-auto w-full py-3.5 rounded-full font-semibold text-sm transition-all active:scale-[0.97] ${
                    card.highlight
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : "bg-primary text-primary-foreground hover:brightness-110"
                  }`}
                >
                  Jetzt buchen
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SO FINDEST DU UNS ─── */}
      <section className="py-16 md:py-24 bg-secondary/50 px-5">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center mb-14"
          >
            So findest du uns
          </motion.h2>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="bg-card rounded-3xl p-8 shadow-[var(--shadow-card)] border border-border"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Adresse</p>
                    <p className="text-muted-foreground">Musterstraße 123, 12099 Berlin-Tempelhof</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Train className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">ÖPNV</p>
                    <p className="text-muted-foreground">U6 Tempelhof, 3 Minuten Fußweg</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Car className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Parken</p>
                    <p className="text-muted-foreground">Kostenlose Parkplätze direkt vor Ort</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Öffnungszeiten</p>
                    <p className="text-muted-foreground">Mo–Fr 07:00–21:00 Uhr · Sa–So 08:00–18:00 Uhr</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-muted rounded-2xl border border-border flex flex-col items-center justify-center min-h-[280px] text-center p-8">
                <MapPin className="w-12 h-12 text-muted-foreground/40 mb-4" />
                <p className="text-muted-foreground font-semibold mb-1">Google Maps</p>
                <p className="text-sm text-muted-foreground/70">Karte wird geladen…</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 md:py-24 px-5">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center mb-12 md:mb-16"
          >
            Häufige Fragen zu unserem Standort
          </motion.h2>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="anmeldung" className="bg-card rounded-2xl border border-border shadow-[var(--shadow-soft)] px-6 data-[state=open]:shadow-[var(--shadow-card)] transition-shadow">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline py-5">
                  Wie melde ich mein Kind für einen Kurs an?
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Du kannst dich direkt über den „Kurs Buchen" Button anmelden oder uns telefonisch kontaktieren.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="umkleiden" className="bg-card rounded-2xl border border-border shadow-[var(--shadow-soft)] px-6 data-[state=open]:shadow-[var(--shadow-card)] transition-shadow">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline py-5">
                  Gibt es Umkleiden und Duschen?
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Ja, unser Standort verfügt über geräumige Einzelumkleiden, Duschen und Föhn-Stationen.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="probestunde" className="bg-card rounded-2xl border border-border shadow-[var(--shadow-soft)] px-6 data-[state=open]:shadow-[var(--shadow-card)] transition-shadow">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline py-5">
                  Kann ich eine Probestunde buchen?
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Ja, wir bieten für alle Kurse eine kostenlose Schnupperstunde an.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="krankenkasse" className="bg-card rounded-2xl border border-border shadow-[var(--shadow-soft)] px-6 data-[state=open]:shadow-[var(--shadow-card)] transition-shadow">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline py-5">
                  Werden die Kosten von der Krankenkasse übernommen?
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Für unsere zertifizierten Aqua Reha Kurse übernehmen alle gesetzlichen Krankenkassen die Kosten vollständig bei Vorlage eines Rezepts.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      <HomeFooter />

      {/* ─── STICKY MOBILE CTA ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-md border-t border-border px-4 py-3 safe-area-pb">
        <button
          onClick={scrollToKurse}
          className="w-full bg-accent text-accent-foreground font-bold text-base py-3.5 rounded-full shadow-[var(--shadow-cta)] active:scale-[0.97] transition-transform"
        >
          Jetzt Platz sichern
        </button>
      </div>
    </div>
  );
};

export default BerlinTempelhof;

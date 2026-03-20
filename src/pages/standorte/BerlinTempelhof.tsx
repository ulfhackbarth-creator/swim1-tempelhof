import { useRef, useMemo, useState, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Thermometer, Car, Droplets, Train, Shirt, Clock, ArrowDown,
  ChevronRight, Star, ShieldCheck, Users, Baby, Fish, Medal, Trophy, Sun,
  LifeBuoy, Timer, Dumbbell, HeartPulse, CheckCircle2, ChevronDown,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import GlobalHeader from "@/components/home/GlobalHeader";
import HomeFooter from "@/components/home/HomeFooter";
import heroImage from "@/assets/hero-pool.jpg";

/* ─── DATA ─── */

const trustBadges = [
  { icon: ShieldCheck, label: "Zertifizierte Trainer" },
  { icon: Users, label: "Kleine Gruppen (max. 6–8)" },
  { icon: Thermometer, label: "32 °C warmes Wasser" },
];

const amenities = [
  { icon: Car, label: "Kostenlose Parkplätze", desc: "Direkt vor der Tür" },
  { icon: Shirt, label: "Familien-Umkleiden", desc: "Geräumig mit Wickeltisch" },
  { icon: Droplets, label: "Salzwasser-Pool", desc: "Schonend für Haut & Augen" },
  { icon: Thermometer, label: "32 °C Wassertemperatur", desc: "Angenehm warm" },
];

const courses = [
  {
    id: "wassergewoehnung",
    icon: Baby,
    title: "Wassergewöhnung",
    description: "Babyschwimmen & Eltern-Kind-Kurse. Spielerische Wassergewöhnung für die Kleinsten.",
    subCourses: [
      { name: "Babyschwimmen", key: "babyschwimmen", interest: "baby", desc: "Ab 3 Monaten – spielerisch das Wasser entdecken." },
      { name: "Eltern-Kind-Kurse", key: "eltern-kind-kurse", interest: "baby", desc: "Ab 1 Jahr – gemeinsam mit Mama oder Papa." },
    ],
    courseKeys: ["babyschwimmen", "eltern-kind", "wassergewoehnung", "wassergewöhnung"],
  },
  {
    id: "kinderschwimmen",
    icon: Fish,
    title: "Kinderschwimmen",
    description: "Vom Seepferdchen bis Gold. Kleine Gruppen mit max. 6 Kindern.",
    subCourses: [
      { name: "Seepferdchen", key: "seepferdchen", interest: "seepferdchen", desc: "Ab 3,5 Jahren – der erste Schritt zum sicheren Schwimmer." },
      { name: "Bronze", key: "bronze", interest: "fortgeschrittene", desc: "Aufbaukurs nach dem Seepferdchen." },
      { name: "Silber", key: "silber", interest: "fortgeschrittene", desc: "Für sichere Schwimmer – Ausdauer & Technik." },
      { name: "Gold", key: "gold", interest: "fortgeschrittene", desc: "Das höchste Jugendschwimmabzeichen." },
      { name: "Ferienintensivkurse", key: "ferienintensivkurse", interest: "seepferdchen", desc: "Tägliche Einheiten in den Schulferien." },
    ],
    courseKeys: ["seepferdchen", "bronze", "silber", "gold", "ferienintensivkurse", "kinderschwimmen"],
  },
  {
    id: "erwachsene",
    icon: LifeBuoy,
    title: "Erwachsenenschwimmen",
    description: "Anfängerschwimmen & Technik-Training. Im geschützten Rahmen.",
    subCourses: [
      { name: "Anfängerschwimmen", key: "anfaengerschwimmen", interest: "erwachsene", desc: "Schwimmen lernen – behutsam und ohne Zuschauer." },
      { name: "Technik", key: "technik", interest: "erwachsene", desc: "Kraulen lernen und Technik verbessern." },
    ],
    courseKeys: ["anfängerschwimmen", "anfaengerschwimmen", "technik", "erwachsene", "erwachsenenschwimmen"],
  },
  {
    id: "aquafitness",
    icon: Dumbbell,
    title: "Aquafitness",
    description: "Power-Workout im Wasser. Gelenkschonend für alle Level.",
    subCourses: [],
    courseKeys: ["aquafitness"],
    interest: "aquafitness",
  },
  {
    id: "aquareha",
    icon: HeartPulse,
    title: "Aqua Reha",
    description: "Krankenkassen-zertifiziert. Mit Rezept 100 % kostenfrei.",
    subCourses: [],
    courseKeys: ["aquareha", "aqua-reha", "reha"],
    interest: "aquareha",
  },
];

const testimonials = [
  {
    name: "Sandra M.",
    location: "Tempelhof",
    text: "Meine Tochter hatte anfangs große Angst vor dem Wasser. Die Trainer sind unglaublich geduldig und am Ende hat sie ihr Seepferdchen geschafft!",
    course: "Seepferdchenkurs",
    stars: 5,
  },
  {
    name: "Thomas K.",
    location: "Neukölln",
    text: "Endlich eine Schwimmschule mit warmem Wasser! Mein Sohn liebt die Wassergewöhnung. Kleine Gruppen, tolle Atmosphäre.",
    course: "Wassergewöhnung",
    stars: 5,
  },
  {
    name: "Julia R.",
    location: "Kreuzberg",
    text: "Beide Kinder haben hier schwimmen gelernt – vom Seepferdchen bis Gold. Professionell, herzlich und immer zuverlässig.",
    course: "Fortgeschrittenenkurse",
    stars: 5,
  },
];

const faqs = [
  {
    q: "Was muss ich zum ersten Termin mitbringen?",
    a: "Badekleidung, Handtuch, Badelatschen und für Kinder ggf. eine Schwimmwindel. Föhns und Umkleiden sind vorhanden.",
  },
  {
    q: "Darf ich beim Kurs zuschauen?",
    a: "Bei Kinderkursen gibt es einen Eltern-Wartebereich mit Blick auf das Becken. Bei Erwachsenenkursen ist das Bad ohne Zuschauer – für ein entspanntes Lernumfeld.",
  },
  {
    q: "Ist die Eintragung verbindlich?",
    a: "Nein, die Warteliste ist zu 100 % unverbindlich und kostenlos. Du gehst keinerlei Verpflichtung ein.",
  },
  {
    q: "Werden die Kosten von der Krankenkasse übernommen?",
    a: "Für unsere zertifizierten Aqua Reha Kurse übernehmen alle gesetzlichen Krankenkassen die Kosten bei Vorlage eines ärztlichen Rezepts.",
  },
  {
    q: "Wann startet der Standort?",
    a: "Eröffnung zur Saison 2026 – sobald der genaue Starttermin feststeht, informieren wir alle Wartelisten-Teilnehmer als Erste.",
  },
];

const formSchema = z.object({
  name: z.string().trim().min(2, "Bitte gib deinen Namen ein").max(100),
  email: z.string().trim().email("Bitte gib eine gültige E-Mail ein").max(255),
  plz: z.string().trim().min(3, "Bitte gib deine PLZ ein").max(50),
  interests: z.array(z.string()).min(1, "Bitte wähle mindestens ein Interesse"),
});

const interestOptions = [
  { id: "baby", label: "Wassergewöhnung / Babyschwimmen" },
  { id: "seepferdchen", label: "Seepferdchen (ab 3,5 Jahren)" },
  { id: "fortgeschrittene", label: "Fortgeschrittene (Bronze / Silber / Gold)" },
  { id: "erwachsene", label: "Erwachsenenkurse" },
  { id: "aquafitness", label: "Aquafitness" },
  { id: "aquareha", label: "Aqua Reha" },
];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* ─── COMPONENT ─── */

const BerlinTempelhof = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const heroSentinelRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();
  const courseParam = searchParams.get("course") || "";
  const { toast } = useToast();

  // Sticky CTA visibility
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const sentinel = heroSentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyCta(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Pre-select course interest from URL param
  const initialInterest = useMemo(() => {
    if (!courseParam) return "";
    const normalized = decodeURIComponent(courseParam).toLowerCase();
    for (const c of courses) {
      const sub = c.subCourses.find((s) => normalized.includes(s.key));
      if (sub) return sub.interest;
      if (c.courseKeys.some((k) => normalized.includes(k))) {
        return (c as any).interest || (c.subCourses[0]?.interest ?? "");
      }
    }
    return "";
  }, [courseParam]);

  // Accordion initial match
  const initialAccordion = useMemo(() => {
    if (!courseParam) return "";
    const normalized = decodeURIComponent(courseParam).toLowerCase();
    for (const c of courses) {
      if (c.subCourses.find((s) => normalized.includes(s.key))) return c.id;
      if (c.courseKeys.some((k) => normalized.includes(k))) return c.id;
    }
    return "";
  }, [courseParam]);

  const [activeAccordion, setActiveAccordion] = useState(initialAccordion);

  // ─── FORM STATE ───
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plz: "",
    interests: initialInterest ? [initialInterest] : [] as string[],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const scrollToForm = useCallback((preSelectInterest?: string) => {
    if (preSelectInterest) {
      setFormData((prev) => ({
        ...prev,
        interests: prev.interests.includes(preSelectInterest)
          ? prev.interests
          : [...prev.interests, preSelectInterest],
      }));
    }
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, []);

  const handleInterestChange = (id: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, id] : prev.interests.filter((i) => i !== id),
    }));
    setErrors((prev) => ({ ...prev, interests: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-waitlist`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          },
          body: JSON.stringify({
            name: result.data.name,
            email: result.data.email,
            plz: result.data.plz,
            interests: result.data.interests,
            city: "tempelhof",
          }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        if (data.code === "DUPLICATE_EMAIL") {
          setErrors({ email: "Diese E-Mail ist bereits eingetragen." });
          setIsLoading(false);
          return;
        }
        throw new Error(data.error || "Unbekannter Fehler");
      }
      setIsSubmitted(true);
      toast({ title: "Erfolgreich eingetragen!", description: "Du erhältst alle Neuigkeiten zuerst." });
    } catch {
      toast({ title: "Fehler", description: "Bitte versuche es später erneut.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  // SEO
  useEffect(() => {
    document.title = "Swim1 Schwimmschule Berlin-Tempelhof – Warteliste";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Trag dich jetzt unverbindlich auf die Warteliste für Schwimmkurse am Tempelhofer Hafen ein.");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <GlobalHeader />

      {/* ═══════════ 1. HERO ═══════════ */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Swim1 Schwimmschule Berlin-Tempelhof" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/90" />
        </div>

        <div className="container relative z-10 px-4 pt-28 pb-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-5 text-sm font-semibold bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/20">
              Standort Berlin-Tempelhof
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Swim1 Schwimmschule in Berlin-Tempelhof
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-xl mx-auto">
              Professionelle Schwimmkurse für Kinder & Erwachsene. Kleine Gruppen, zertifizierte Trainer, 32 °C warmes Wasser.
            </p>

            <Button variant="cta" size="xl" onClick={() => scrollToForm()} className="mb-8">
              Jetzt auf die Warteliste setzen
              <ArrowDown className="w-5 h-5 ml-1" />
            </Button>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {trustBadges.map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full border border-white/20">
                  <b.icon className="w-4 h-4" />
                  {b.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sentinel for sticky CTA */}
        <div ref={heroSentinelRef} className="absolute bottom-0 h-1 w-full" />
      </section>

      {/* ═══════════ 2. QUICK FACTS & STANDORT ═══════════ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Standort & Ausstattung
          </motion.h2>
          <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Alles, was du für ein optimales Schwimmerlebnis brauchst – an einem Ort.
          </motion.p>

          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-card rounded-3xl p-6 md:p-10 shadow-card border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Address + Map */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Adresse</p>
                    <p className="text-muted-foreground">Ringbahnstraße 12, 12099 Berlin</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Train className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">ÖPNV</p>
                    <p className="text-muted-foreground">S+U Tempelhof, 3 Min. Fußweg</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Öffnungszeiten</p>
                    <p className="text-muted-foreground">Mo–Fr 07:00–21:00 · Sa–So 08:00–18:00</p>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-secondary rounded-2xl border border-border flex flex-col items-center justify-center min-h-[180px] text-center p-6">
                  <MapPin className="w-10 h-10 text-muted-foreground/30 mb-2" />
                  <p className="text-sm text-muted-foreground">Google Maps – Karte wird geladen…</p>
                </div>
              </div>

              {/* Right: Amenities */}
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((a, i) => (
                  <motion.div key={a.label} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }} className="bg-secondary/60 rounded-2xl p-5 text-center flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <a.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground text-sm">{a.label}</p>
                    <p className="text-xs text-muted-foreground">{a.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ 3. KURSANGEBOT AKKORDEON ═══════════ */}
      <section className="py-16 md:py-24 bg-secondary/40 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Unser Kursangebot
          </motion.h2>
          <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="text-muted-foreground text-center mb-12">
            Wähle eine Kategorie und sichere dir deinen Platz auf der Warteliste.
          </motion.p>

          <Accordion type="single" collapsible value={activeAccordion} onValueChange={setActiveAccordion} className="space-y-3">
            {courses.map((course) => (
              <AccordionItem
                key={course.id}
                value={course.id}
                className={`bg-card rounded-2xl border shadow-soft px-6 transition-all ${activeAccordion === course.id ? "border-primary ring-2 ring-primary/20 shadow-card" : "border-border"}`}
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <span className="flex items-center gap-3 text-left">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <course.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span>
                      <span className="text-lg font-bold text-foreground block">{course.title}</span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground mb-5 leading-relaxed">{course.description}</p>

                  {course.subCourses.length > 0 ? (
                    <div className="space-y-2.5">
                      {course.subCourses.map((sub) => (
                        <div key={sub.key} className="flex items-center justify-between bg-secondary/60 rounded-xl p-4 border border-border">
                          <div>
                            <p className="font-semibold text-foreground">{sub.name}</p>
                            <p className="text-sm text-muted-foreground">{sub.desc}</p>
                          </div>
                          <Button
                            variant="cta"
                            size="sm"
                            className="shrink-0 ml-3"
                            onClick={() => scrollToForm(sub.interest)}
                          >
                            Auf die Warteliste
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Button
                      variant="cta"
                      size="default"
                      onClick={() => scrollToForm((course as any).interest)}
                    >
                      Auf die Warteliste
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══════════ 4. TESTIMONIALS ═══════════ */}
      <section className="py-16 md:py-24 px-4" style={{ backgroundColor: "hsl(213 65% 18%)" }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Das sagen unsere Teilnehmer
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-white/90 italic mb-4 leading-relaxed text-sm">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-white/60 text-xs">{t.location} · {t.course}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 5. WARTELISTEN-FORMULAR ═══════════ */}
      <section ref={formRef} id="warteliste" className="py-16 md:py-24 bg-secondary/50 px-4 scroll-mt-0">
        <div className="max-w-md mx-auto">
          {isSubmitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center bg-card p-8 md:p-10 rounded-2xl shadow-card">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Danke für dein Interesse!</h3>
              <p className="text-muted-foreground">Du bist jetzt auf der Warteliste. Wir melden uns mit Startinfo und Kursplätzen zuerst bei dir.</p>
            </motion.div>
          ) : (
            <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Sichere dir jetzt deinen Platz!</h2>
                <p className="text-muted-foreground">
                  Unverbindliche Eintragung – wir melden uns, sobald ein Platz frei wird.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-card p-6 md:p-8 rounded-2xl shadow-card space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="wl-name">Name</Label>
                  <Input id="wl-name" placeholder="Dein Vorname" value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors((p) => ({ ...p, name: "" })); }} className={errors.name ? "border-destructive" : ""} />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wl-email">E-Mail</Label>
                  <Input id="wl-email" type="email" placeholder="deine.email@adresse.de" value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors((p) => ({ ...p, email: "" })); }} className={errors.email ? "border-destructive" : ""} />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wl-plz">PLZ / Stadtteil</Label>
                  <Input id="wl-plz" placeholder="z.B. 12099" value={formData.plz} onChange={(e) => { setFormData({ ...formData, plz: e.target.value }); setErrors((p) => ({ ...p, plz: "" })); }} className={errors.plz ? "border-destructive" : ""} />
                  {errors.plz && <p className="text-sm text-destructive">{errors.plz}</p>}
                </div>

                <div className="space-y-3">
                  <Label>Interesse an</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {interestOptions.map((option) => (
                      <label key={option.id} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-secondary/50 cursor-pointer transition-colors">
                        <Checkbox checked={formData.interests.includes(option.id)} onCheckedChange={(checked) => handleInterestChange(option.id, checked as boolean)} />
                        <span className="text-sm font-medium text-foreground">{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.interests && <p className="text-sm text-destructive">{errors.interests}</p>}
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? "Wird eingetragen..." : "Jetzt Platz sichern"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Deine Daten werden vertraulich behandelt und nur für die Kontaktaufnahme verwendet.
                </p>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══════════ 6. FAQ ═══════════ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Häufige Fragen
          </motion.h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-2xl border border-border shadow-soft px-6 data-[state=open]:shadow-card transition-shadow">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <HomeFooter />

      {/* ═══════════ STICKY MOBILE CTA ═══════════ */}
      <AnimatePresence>
        {showStickyCta && !isSubmitted && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-border shadow-lg md:hidden"
          >
            <Button variant="cta" size="lg" className="w-full" onClick={() => scrollToForm()}>
              Auf die Warteliste
              <ArrowDown className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BerlinTempelhof;

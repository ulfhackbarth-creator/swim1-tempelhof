import { useRef, useMemo, useState, useCallback, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  MapPin, Car, Train, Clock, ArrowDown,
  ChevronRight, Star, Users, Baby, Fish,
  LifeBuoy, Dumbbell, HeartPulse, CheckCircle2, ChevronDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import GlobalHeader from "@/components/home/GlobalHeader";
import HomeFooter from "@/components/home/HomeFooter";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import heroImage from "@/assets/hero-pool.jpg";

/* ─── SHARED DATA ─── */

const courses = [
  {
    id: "wassergewoehnung",
    icon: Baby,
    title: "Baby und Kleinkinder",
    description: "Babyschwimmen & Eltern-Kind-Kurse. Wasser gemeinsam erleben, Bindung stärken.",
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
    description: "Schwimmen von Grund auf lernen. Kleine Gruppen, klarer Weg, echte Sicherheit im Wasser.",
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
    description: "Anfängerschwimmen & Technik. Sicherer Rahmen, erfahrene Trainer, dein Tempo.",
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
    description: "Bewegung im Wasser – gelenkschonend, in Gemeinschaft, mit Spaß.",
    subCourses: [],
    courseKeys: ["aquafitness"],
    interest: "aquafitness",
  },
  {
    id: "aquareha",
    icon: HeartPulse,
    title: "Aqua Reha",
    description: "Zurück zu alter Stärke. Auf Rezept, von Krankenkassen anerkannt.",
    subCourses: [],
    courseKeys: ["aquareha", "aqua-reha", "reha"],
    interest: "aquareha",
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

const trustStats = [
  { value: "32 °C", label: "Wassertemperatur" },
  { value: "5:1", label: "Betreuungsverhältnis" },
  { value: "100 %", label: "Eigene Becken" },
  { value: "4,9 ★", label: "Google Bewertung" },
];

/* ─── TYPES ─── */

export interface LocationConfig {
  slug: string;
  heroHeadline: string;
  heroVideos?: string[];
  heroPoster?: string;
  locationInfo: { icon: LucideIcon; title: string; text: string }[];
  testimonials: { name: string; location: string; text: string; course: string; stars: number }[];
  faqs: { q: string; a: string }[];
  waitlistCount: string;
  metaTitle: string;
  metaDescription: string;
  displayName: string;
  geoText: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
  };
}

/* ─── COMPONENT ─── */

const LocationPageTemplate = ({ config }: { config: LocationConfig }) => {
  const formRef = useRef<HTMLDivElement>(null);
  const accordionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [searchParams] = useSearchParams();
  const courseParam = searchParams.get("course") || "";
  const { toast } = useToast();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const initialAccordion = useMemo(() => {
    if (!courseParam) return "";
    const normalized = decodeURIComponent(courseParam).toLowerCase();
    for (const c of courses) {
      if (c.subCourses.find((s) => normalized.includes(s.key))) return c.id;
      if (c.courseKeys.some((k) => normalized.includes(k))) return c.id;
    }
    return "";
  }, [courseParam]);

  const initialSelectedCourse = useMemo(() => {
    if (!courseParam) return null;
    const normalized = decodeURIComponent(courseParam).toLowerCase();
    for (const c of courses) {
      const sub = c.subCourses.find((s) => normalized.includes(s.key));
      if (sub) return sub.key;
      // For courses without subCourses (e.g. Aquafitness, Aqua Reha)
      if (c.subCourses.length === 0 && c.courseKeys.some((k) => normalized.includes(k))) return c.id;
    }
    return null;
  }, [courseParam]);

  const [activeAccordion, setActiveAccordion] = useState(initialAccordion);

  // Scroll to the selected accordion category when it changes (user interaction only)
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (!activeAccordion) return;
    const el = accordionRefs.current[activeAccordion];
    if (el) {
      // Suppress header show-on-scroll-up during programmatic scroll
      window.dispatchEvent(new CustomEvent("suppress-header"));
      setTimeout(() => {
        const top = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: "smooth" });
      }, 150);
    }
  }, [activeAccordion]);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(initialSelectedCourse);

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
            city: config.slug,
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

  const canonicalUrl = `https://swim1.de/standorte/${config.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    "name": `SWIM1 Schwimmschule ${config.displayName}`,
    "image": "https://swim1.de/logo.png",
    "url": canonicalUrl,
    "telephone": "+49 30 1234567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": config.address.streetAddress,
      "addressLocality": config.address.addressLocality,
      "postalCode": config.address.postalCode,
      "addressCountry": "DE",
    },
    "priceRange": "$$",
  };

  const hasVideo = config.heroVideos && config.heroVideos.length > 0;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{config.metaTitle}</title>
        <meta name="description" content={config.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://swim1.de/" },
            { "@type": "ListItem", "position": 2, "name": config.displayName, "item": canonicalUrl }
          ]
        })}</script>
      </Helmet>
      <GlobalHeader />

      {/* Breadcrumb strip */}
      <nav aria-label="breadcrumb" className="sr-only">
        <ol className="flex items-center gap-1.5 text-xs text-gray-400 max-w-6xl mx-auto">
          <li><Link to="/" className="hover:text-gray-600 transition-colors">Startseite</Link></li>
          <li aria-hidden="true">›</li>
          <li aria-current="page"><span className="text-gray-500 font-medium">{config.displayName}</span></li>
        </ol>
      </nav>

      {/* ═══════════ 1. HERO ═══════════ */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden">
        {hasVideo ? (
          <HeroVideoBackground videos={config.heroVideos!} poster={config.heroPoster} />
        ) : (
          <img src={heroImage} alt={config.heroHeadline} className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-[#0C2D48]/45" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 min-h-[85vh] md:min-h-[90vh] pt-32 md:pt-[120px] pb-8 md:pb-0">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-tight md:leading-[1.1] mb-4 md:mb-6">
              {config.heroHeadline}
            </h1>
            <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto">
              Kleine Gruppen · Zertifizierte Trainer · 32 °C warmes Wasser
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => scrollToForm()}
            className="mt-8 md:mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-base text-[#0C2D48] transition-colors shadow-lg bg-[#C6FF00] hover:bg-[#B0E000]"
            style={{ boxShadow: "0 8px 24px -4px rgba(198,255,0,0.3)" }}
          >
            Jetzt auf die Warteliste setzen <ArrowDown className="w-4 h-4" />
          </motion.button>
        </div>
      </section>

      {/* ═══════════ 2. STANDORT & AUSSTATTUNG ═══════════ */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Standort & Ausstattung</h2>
            <p className="text-slate-500">Alles, was du brauchst – an einem Ort.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {config.locationInfo.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-5"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-secondary text-[#0C2D48] flex items-center justify-center">
                  <item.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Geo-Targeting Text */}
          <p className="text-sm text-slate-400 leading-relaxed mt-10 md:mt-14 text-center max-w-2xl mx-auto">
            {config.geoText}
          </p>
        </div>
      </section>

      {/* ═══════════ TRUST STATS BAR ═══════════ */}
      <section className="bg-[#0C2D48] py-12 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {trustStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <span className="block text-2xl md:text-3xl font-bold text-white tracking-tight mb-1">{s.value}</span>
              <span className="block text-xs font-semibold text-white/50 uppercase tracking-wider">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════ 3. KURSANGEBOT AKKORDEON ═══════════ */}
      <section className="py-16 md:py-32 bg-secondary/50 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">Unser Kursangebot</h2>
            <p className="text-slate-500">Wähle eine Kategorie und sichere dir deinen Platz auf der Warteliste.</p>
          </motion.div>

          <Accordion type="single" collapsible value={activeAccordion} onValueChange={setActiveAccordion} className="space-y-3">
            {courses.map((course) => (
              <AccordionItem
                key={course.id}
                value={course.id}
                ref={(el: HTMLDivElement | null) => { accordionRefs.current[course.id] = el; }}
                className={`bg-white rounded-[2rem] border-2 shadow-xl shadow-slate-200/40 px-6 md:px-8 transition-all hover:shadow-2xl ${
                  activeAccordion === course.id ? "border-[#0C2D48]" : "border-slate-100 hover:border-slate-200"
                }`}
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <span className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-2xl bg-secondary text-[#0C2D48] flex items-center justify-center shrink-0">
                      <course.icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span>
                      <span className="text-lg font-bold text-slate-900 block">{course.title}</span>
                      <span className="text-sm text-slate-500">{course.description}</span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  {course.subCourses.length > 0 ? (
                    <div className="space-y-3">
                      {course.subCourses.map((sub) => {
                        const isActive = selectedCourse === sub.key;
                        return (
                          <div
                            key={sub.key}
                            onClick={() => setSelectedCourse(isActive ? null : sub.key)}
                            className={`flex items-center justify-between rounded-2xl p-4 md:p-5 cursor-pointer transition-all duration-200 ${
                              isActive
                                ? "bg-[#0C2D48] border-2 border-[#0C2D48] ring-2 ring-[#0C2D48]/20"
                                : "bg-secondary/60 border-2 border-transparent hover:border-slate-200"
                            }`}
                          >
                            <div className="min-w-0 flex-1 flex items-center gap-3">
                              {isActive && <CheckCircle2 className="w-5 h-5 text-white shrink-0" />}
                              <div>
                                <p className={`font-bold ${isActive ? "text-white" : "text-slate-900"}`}>{sub.name}</p>
                                <p className={`text-sm ${isActive ? "text-white/70" : "text-slate-500"}`}>{sub.desc}</p>
                              </div>
                            </div>
                            <button
                              onClick={(e) => { e.stopPropagation(); scrollToForm(sub.interest); }}
                              className={`shrink-0 ml-4 inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                                "text-[#0C2D48] bg-[#C6FF00] hover:bg-[#B0E000]"
                              }`}
                            >
                              Warteliste <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {(() => {
                        const isActive = selectedCourse === course.id;
                        return (
                          <div
                            onClick={() => setSelectedCourse(isActive ? null : course.id)}
                            className={`flex items-center justify-between rounded-2xl p-4 md:p-5 cursor-pointer transition-all duration-200 ${
                              isActive
                                ? "bg-[#0C2D48] border-2 border-[#0C2D48] ring-2 ring-[#0C2D48]/20"
                                : "bg-secondary/60 border-2 border-transparent hover:border-slate-200"
                            }`}
                          >
                            <div className="min-w-0 flex-1 flex items-center gap-3">
                              {isActive && <CheckCircle2 className="w-5 h-5 text-white shrink-0" />}
                              <div>
                                <p className={`font-bold ${isActive ? "text-white" : "text-slate-900"}`}>{course.title}</p>
                                <p className={`text-sm ${isActive ? "text-white/70" : "text-slate-500"}`}>{course.description}</p>
                              </div>
                            </div>
                            <button
                              onClick={(e) => { e.stopPropagation(); scrollToForm((course as any).interest); }}
                              className={`shrink-0 ml-4 inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                                "text-[#0C2D48] bg-[#C6FF00] hover:bg-[#B0E000]"
                              }`}
                            >
                              Warteliste <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══════════ 4. TESTIMONIALS ═══════════ */}
      <section className="py-16 md:py-32 bg-[#0C2D48]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4">Das sagen unsere Teilnehmer</h2>
            <p className="text-white/70 font-medium">Über 4,9 Sterne auf Google</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {config.testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-[#0C2D48]/40 border border-white/10 rounded-[2rem] p-6 md:p-10 backdrop-blur-sm h-full flex flex-col">
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-lg text-white/90 font-medium leading-relaxed italic mb-8 flex-1">„{t.text}"</p>
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-white/50 text-sm">{t.location} · {t.course}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 5. WARTELISTEN-FORMULAR ═══════════ */}
      <section ref={formRef} id="warteliste" className="py-16 md:py-32 bg-secondary/50 px-4 scroll-mt-0">
        <div className="max-w-lg mx-auto">
          {isSubmitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Danke für dein Interesse!</h3>
              <p className="text-slate-600">Du bist jetzt auf der Warteliste. Wir melden uns mit Startinfo und Kursplätzen zuerst bei dir.</p>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Sichere dir jetzt deinen Platz!</h2>
                <p className="text-slate-500">
                  Bereits über {config.waitlistCount} Kursteilnehmer stehen auf der Liste. Trag dich jetzt unverbindlich ein, bevor die Warteliste schließt.
                </p>

                <div className="flex items-center justify-center gap-3 mt-5">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-secondary border-2 border-white flex items-center justify-center">
                      <Users className="w-4 h-4 text-[#0C2D48]" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-secondary border-2 border-white flex items-center justify-center text-xs font-bold text-[#0C2D48]">S</div>
                    <div className="w-8 h-8 rounded-full bg-secondary/70 border-2 border-white flex items-center justify-center text-xs font-bold text-[#0C2D48]">T</div>
                    <div className="w-8 h-8 rounded-full bg-blue-200/60 border-2 border-white flex items-center justify-center text-xs font-bold text-[#0C2D48]">J</div>
                  </div>
                  <span className="text-sm font-semibold text-[#0C2D48]">{config.waitlistCount} Kursteilnehmer warten bereits</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="wl-name" className="text-slate-900 font-semibold">Name</Label>
                  <Input id="wl-name" placeholder="Dein Vorname" value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors((p) => ({ ...p, name: "" })); }} className={`bg-slate-50 border-slate-200 ${errors.name ? "border-destructive" : ""}`} />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wl-email" className="text-slate-900 font-semibold">E-Mail</Label>
                  <Input id="wl-email" type="email" placeholder="deine.email@adresse.de" value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors((p) => ({ ...p, email: "" })); }} className={`bg-slate-50 border-slate-200 ${errors.email ? "border-destructive" : ""}`} />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wl-plz" className="text-slate-900 font-semibold">PLZ / Stadtteil</Label>
                  <Input id="wl-plz" placeholder="z.B. 12099" value={formData.plz} onChange={(e) => { setFormData({ ...formData, plz: e.target.value }); setErrors((p) => ({ ...p, plz: "" })); }} className={`bg-slate-50 border-slate-200 ${errors.plz ? "border-destructive" : ""}`} />
                  {errors.plz && <p className="text-sm text-destructive">{errors.plz}</p>}
                </div>

                <div className="space-y-3">
                  <Label className="text-slate-900 font-semibold">Interesse an</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {interestOptions.map((option) => {
                      const isActive = formData.interests.includes(option.id);
                      return (
                      <label key={option.id} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200 ${isActive ? "bg-[#0C2D48] border-[#0C2D48] text-white" : "bg-slate-50 border-slate-200 hover:border-[#0C2D48]/30 text-slate-700"}`}>
                        <Checkbox checked={isActive} onCheckedChange={(checked) => handleInterestChange(option.id, checked as boolean)} className={isActive ? "border-white data-[state=checked]:bg-white data-[state=checked]:text-[#0C2D48]" : ""} />
                        <span className={`text-sm font-medium ${isActive ? "text-white" : "text-slate-700"}`}>{option.label}</span>
                      </label>
                      );
                    })}
                  </div>
                  {errors.interests && <p className="text-sm text-destructive">{errors.interests}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-full py-4 font-bold text-lg text-[#0C2D48] bg-[#C6FF00] hover:bg-[#B0E000] transition-colors disabled:opacity-50 shadow-lg"
                  style={{ boxShadow: "0 10px 30px -5px rgba(198,255,0,0.3)" }}
                >
                  {isLoading ? "Wird eingetragen..." : "Jetzt Platz sichern"}
                </button>

                <p className="text-xs text-center text-slate-400">
                  Deine Daten werden vertraulich behandelt und nur für die Kontaktaufnahme verwendet.
                </p>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══════════ 6. FAQ ═══════════ */}
      <section className="py-16 md:py-32 bg-[#0C2D48]">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white text-center mb-12 md:mb-20">Häufige Fragen</h2>
          {config.faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10 py-6">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between text-left">
                <span className="text-base md:text-lg font-semibold text-white pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-white/40 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && <p className="text-white/70 leading-relaxed pt-4">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default LocationPageTemplate;

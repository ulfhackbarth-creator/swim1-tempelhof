import { useState, useEffect, useLayoutEffect, useRef, useCallback, useMemo } from "react";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeNavigation } from "@/hooks/useSwipeNavigation";
import { ArrowDown, ChevronDown, ChevronLeft, ChevronRight as ChevronRightIcon, Star, Check, MapPin } from "lucide-react";
import { HeroWave } from "@/components/HeroWave";

import TestimonialCard from "@/components/TestimonialCard";
import { useIsMobile } from "@/hooks/use-mobile";
import GlobalHeader from "@/components/home/GlobalHeader";
import HomeFooter from "@/components/home/HomeFooter";
import SectionDivider from "@/components/SectionDivider";
import StandortDropdown from "@/components/StandortDropdown";
import type { CourseTab } from "@/types/course";
import { heroContent, coursesByTab, courseSectionTitle, gridClass, trustStats } from "@/data/courseData";
import { uspsByTab } from "@/data/uspData";
import { testimonialsByTab } from "@/data/testimonialData";
import { faqsByTab } from "@/data/faqData";
import { standorte } from "@/data/standorteData";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

const locationSubtitle: Record<CourseTab, string> = {
  kinderschwimmen: "Finde die passende Schwimmschule in deiner Nähe",
  wassergewoehnung: "Finde den passenden Standort für Baby- und Kleinkinderkurse",
  erwachsene: "Finde den passenden Standort für dein Training",
  fitness: "Finde den passenden Standort für dein Training",
  reha: "Finde deinen Standort für Aqua Reha",
};

const categoryMeta: Record<CourseTab, { name: string; path: string }> = {
  wassergewoehnung: { name: "Baby und Kleinkinder", path: "/kurse/wassergewoehnung" },
  kinderschwimmen: { name: "Kinderschwimmen", path: "/kurse/kinderschwimmen" },
  erwachsene: { name: "Erwachsenenschwimmen", path: "/kurse/erwachsene" },
  fitness: { name: "Aquafitness", path: "/kurse/aquafitness" },
  reha: { name: "Aqua Reha", path: "/kurse/reha" },
};

const KursePage = ({ tab }: { tab: CourseTab }) => {
  const isMobile = useIsMobile();
  const content = heroContent[tab];
  const videos = useMemo(() => Array.isArray(content.video) ? content.video : [content.video], [content.video]);
  const mobileVideos = useMemo(() => content.mobileVideo ? (Array.isArray(content.mobileVideo) ? content.mobileVideo : [content.mobileVideo]) : undefined, [content.mobileVideo]);
  
  const usps = uspsByTab[tab];
  const tests = testimonialsByTab[tab];
  const faqs = faqsByTab[tab];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [canScrollLeftK, setCanScrollLeftK] = useState(false);
  const [canScrollRightK, setCanScrollRightK] = useState(true);
  const kurseSectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const locationCardRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const scrollContainerRefK = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isSwipe = (location.state as any)?.isSwipe === true;
  const direction = (location.state as any)?.direction ?? 1;

  useEffect(() => { setOpenIndex(null); setSelectedCourse(null); setSelectedLocation(null); setShowAllMobile(false); }, [tab]);

  const updateScrollButtonsK = useCallback(() => {
    const el = scrollContainerRefK.current;
    if (!el) return;
    setCanScrollLeftK(el.scrollLeft > 10);
    setCanScrollRightK(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scrollByK = useCallback((amount: number) => {
    scrollContainerRefK.current?.scrollBy({ left: amount, behavior: "smooth" });
  }, []);

  const handleSelectLocation = useCallback((name: string, index: number) => {
    const isClosing = selectedLocation === name;
    setSelectedLocation(isClosing ? null : name);
    if (!isClosing) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const card = locationCardRefs.current.get(index);
          if (card) {
            window.dispatchEvent(new CustomEvent("suppress-header", { detail: { duration: 800 } }));
            const y = card.getBoundingClientRect().top + window.scrollY - 20;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 150);
      });
    }
  }, [selectedLocation]);

  useLayoutEffect(() => {
    const scrollY = (location.state as any)?.maintainScrollPosition;
    if (typeof scrollY === "number") {
      window.scrollTo({ top: scrollY, behavior: "auto" });
    }
  }, [location.key]);


  const handleSelectCourse = useCallback((name: string, index: number) => {
    const isClosing = selectedCourse === name;
    const next = isClosing ? null : name;
    setSelectedCourse(next);

    if (!isClosing) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const card = cardRefs.current.get(index);
          if (card) {
            window.dispatchEvent(new CustomEvent("suppress-header", { detail: { duration: 800 } }));
            const y = card.getBoundingClientRect().top + window.scrollY - 20;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 150);
      });
    }
  }, [selectedCourse]);

  const swipe = useSwipeNavigation();

  const pageContent = (
    <>
      <Helmet>
        <title>{categoryMeta[tab].name} in kleinen Gruppen | SWIM1 Schwimmschule</title>
        <meta name="description" content={`Entdecke unsere Kurse für ${categoryMeta[tab].name}. Zertifizierte Trainer, sicheres Lernen und schnelle Fortschritte im 32°C warmen Wasser.`} />
        <link rel="canonical" href={`https://swim1.de${categoryMeta[tab].path}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://swim1.de/" },
            { "@type": "ListItem", "position": 2, "name": categoryMeta[tab].name, "item": `https://swim1.de${categoryMeta[tab].path}` }
          ]
        })}</script>
      </Helmet>
      {/* Breadcrumb strip */}
      <nav aria-label="breadcrumb" className="sr-only">
        <ol className="flex items-center gap-1.5 text-xs text-gray-400 max-w-6xl mx-auto">
          <li><Link to="/" className="hover:text-gray-600 transition-colors">Startseite</Link></li>
          <li aria-hidden="true">›</li>
          <li aria-current="page"><span className="text-gray-500 font-medium">{categoryMeta[tab].name}</span></li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] overflow-visible">
        <div className="absolute inset-0 overflow-hidden">
          <HeroVideoBackground videos={videos} mobileVideos={mobileVideos} poster={content.poster} mobilePoster={content.mobilePoster} />
          <div className={`absolute inset-0 ${tab === "kinderschwimmen" || tab === "erwachsene" ? "bg-[#0C2D48]/35" : "bg-[#0C2D48]/45"}`} />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 min-h-[85vh] md:min-h-[90vh] pt-32 md:pt-[120px] pb-8 md:pb-0" style={{ paddingBottom: '120px' }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-tight md:leading-[1.1] mb-4 md:mb-6">
              {content.headline}
            </h1>
            <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto">
              {content.subtext}
            </p>
          </motion.div>
          <button
            onClick={() => {
              const el = document.getElementById('kurse-section');
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="mt-8 md:mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-base text-[#0C2D48] transition-all shadow-lg bg-[#C6FF00] hover:bg-[#B0E000] hover:scale-105 active:scale-[0.97]"
            style={{ boxShadow: "0 8px 24px -4px rgba(198,255,0,0.3)" }}
          >
            Kurs wählen <ArrowDown className="w-4 h-4" />
          </button>
          
        </div>
        <HeroWave fillColor="#ffffff" />
      </section>




      {/* KURSANGEBOT + TRUST */}
      <section id="kurse-section" ref={kurseSectionRef} className="bg-secondary/50 py-16 md:py-24 px-4 md:px-6 scroll-mt-[0px]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-center mb-12 md:mb-16">
            {courseSectionTitle[tab]}
          </h2>
          <div className={`grid gap-6 md:gap-8 ${gridClass[tab]}`}>
            {coursesByTab[tab].map((course, i) => {
              const isSelected = selectedCourse === course.name;
              const courseParam = encodeURIComponent(course.name.toLowerCase().replace(/\s+/g, "-"));
              return (
                <motion.div
                  key={course.name}
                  ref={(el) => { if (el) cardRefs.current.set(i, el); }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  onClick={() => handleSelectCourse(course.name, i)}
                  className={`relative rounded-[2rem] p-6 md:p-10 shadow-lg shadow-slate-300/50 border-2 transition-all duration-200 cursor-pointer flex flex-col ${
                    isSelected
                      ? "bg-[#0C2D48] border-[#0C2D48] shadow-xl shadow-slate-400/30"
                      : "bg-white border-slate-200 hover:-translate-y-1 hover:shadow-xl"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#0C2D48]" strokeWidth={3} />
                    </div>
                  )}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center transition-colors duration-200 ${
                      isSelected ? "bg-white/15" : "bg-secondary"
                    }`}>
                      <course.icon className={`w-6 h-6 transition-colors duration-200 ${isSelected ? "text-white" : "text-primary"}`} strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <span className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${isSelected ? "text-white/70" : "text-[#0C2D48]"}`}>{course.tag}</span>
                      <h3 className={`text-xl xl:text-2xl font-bold break-words hyphens-auto transition-colors duration-200 ${isSelected ? "text-white" : "text-slate-900"}`}>{course.name}</h3>
                    </div>
                  </div>
                  <p className={`leading-relaxed transition-colors duration-200 ${isSelected ? "text-white/80" : "text-slate-600"}`}>{course.text}</p>

                  {/* Inline accordion detail */}
                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="pt-6 border-t border-white/20 mt-6">
                          <p className="text-white/85 leading-relaxed mb-5">{course.details}</p>
                          <ul className="space-y-2.5 mb-6">
                            {course.highlights.map((h) => (
                              <li key={h} className="flex items-center gap-2.5 text-white/90 text-sm font-medium">
                                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                </span>
                                {h}
                              </li>
                            ))}
                          </ul>
                          <StandortDropdown
                            variant="orange-large"
                            align="start"
                            label="Standort wählen"
                            queryParams={`?course=${courseParam}`}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isSelected && (
                    <span className="mt-6 inline-flex items-center font-semibold text-[#0C2D48] hover:gap-3 transition-all gap-1">
                      Mehr erfahren <span>→</span>
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* Trust Stats */}
      <section className="bg-[#0C2D48] py-12 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {trustStats[tab].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <span className="block text-2xl md:text-3xl font-bold text-white tracking-tight mb-1">
                {s.value}
              </span>
              <span className="block text-xs font-semibold text-white/50 uppercase tracking-wider">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider fromColor="#0C2D48" toColor="#ffffff" />

      {/* USPs */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-4xl font-bold tracking-tight text-slate-900 text-center mb-12 md:mb-20">
            {usps.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {usps.items.map((usp, i) => (
              <motion.div key={usp.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex flex-row items-start gap-6 text-left">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                  <usp.Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{usp.label}</h3>
                  <p className="text-slate-600 leading-relaxed">{usp.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider → Testimonials */}
      <div className="w-full bg-[#0C2D48]" style={{ marginTop: -3 }}>
        <svg width="100%" height="40" viewBox="0 0 1440 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="block">
          <rect x="0" y="0" width="1440" height="4" fill="#ffffff" />
          <path d="M0,20 C240,0 360,40 720,20 C1080,0 1200,40 1440,20 L1440,0 L0,0 Z" fill="#ffffff" />
          <path d="M0,20 C240,0 360,40 720,20 C1080,0 1200,40 1440,20" fill="none" stroke="#0C2D48" strokeWidth="2" />
        </svg>
      </div>

      {/* TESTIMONIALS */}
      <section className="pb-16 pt-4 md:pb-32 md:pt-8 bg-[#0C2D48]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4">Das sagen andere Eltern & Schwimmer</h2>
            <p className="text-white/70 font-medium">Über 4,9 Sterne von glücklichen Eltern & Schwimmern</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tests.items.map((t, i) => (
              <TestimonialCard key={t.name} text={t.text} name={t.name} location={t.location} index={i} variant="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 text-center mb-12 md:mb-20">{faqs.title}</h2>
          {faqs.items.map((faq, i) => (
            <div key={i} className="border-b border-slate-100 py-6">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between text-left">
                <span className="text-base md:text-lg font-semibold text-slate-900 pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && <p className="text-slate-600 leading-relaxed pt-4">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Wave Divider → Standorte */}
      <div className="w-full bg-slate-50" style={{ marginTop: -3 }}>
        <svg width="100%" height="40" viewBox="0 0 1440 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="block">
          <rect x="0" y="0" width="1440" height="4" fill="#ffffff" />
          <path d="M0,20 C240,0 360,40 720,20 C1080,0 1200,40 1440,20 L1440,0 L0,0 Z" fill="#ffffff" />
          <path d="M0,20 C240,0 360,40 720,20 C1080,0 1200,40 1440,20" fill="none" stroke="#f8fafc" strokeWidth="2" />
        </svg>
      </div>

      {/* STANDORTE */}
      <section id="standorte" className="pb-16 pt-4 md:pb-32 md:pt-8 bg-slate-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Unsere Standorte</h2>
            <p className="text-slate-500">{locationSubtitle[tab]}</p>
          </motion.div>
          {/* Desktop: horizontal scroll slider */}
          <div className="hidden md:block relative">
            <div
              ref={scrollContainerRefK}
              onScroll={updateScrollButtonsK}
              className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {standorte.map((loc, i) => {
                const isSelected = selectedLocation === loc.name;
                return (
                  <motion.div
                    key={loc.name}
                    ref={(el) => { if (el) locationCardRefs.current.set(i, el); }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    onClick={() => handleSelectLocation(loc.name, i)}
                    className={`relative rounded-[2rem] p-6 shadow-lg shadow-slate-300/50 border-2 flex flex-col transition-all duration-200 cursor-pointer flex-shrink-0 w-[280px] ${
                      isSelected
                        ? "bg-[#0C2D48] border-[#0C2D48] shadow-xl shadow-slate-400/30"
                        : "bg-white border-slate-200 hover:-translate-y-1 hover:shadow-xl"
                    }`}
                    style={{ scrollSnapAlign: "start" }}
                  >
                    {isSelected && (
                      <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#0C2D48]" strokeWidth={3} />
                      </div>
                    )}
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-fit transition-colors duration-200 ${
                      isSelected ? "bg-white/15 text-white/80" : "bg-green-100 text-green-800"
                    }`}>
                      ✓ Warteliste
                    </span>
                    <h3 className={`text-xl font-bold mb-1 transition-colors duration-200 ${isSelected ? "text-white" : "text-slate-900"}`}>{loc.name}</h3>
                    <p className={`text-sm mb-4 transition-colors duration-200 ${isSelected ? "text-white/60" : "text-slate-500"}`}>{loc.address}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {loc.features.map((f) => (
                        <span key={f} className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full transition-colors duration-200 ${
                          isSelected ? "bg-white/15 text-white/80" : "text-[#0C2D48] bg-secondary"
                        }`}>{f}</span>
                      ))}
                    </div>

                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="pt-5 border-t border-white/20 mt-2">
                            <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
                              <MapPin className="w-4 h-4" />
                              <span>{loc.address}</span>
                            </div>
                            <Link
                              to={loc.route}
                              onClick={() => window.scrollTo({ top: 0 })}
                              className="w-full block mt-auto rounded-full py-3 text-sm text-center font-semibold transition-all bg-[#C6FF00] hover:bg-[#B0E000] hover:scale-105 active:scale-[0.97] text-[#0C2D48]"
                            >
                              Standort entdecken
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!isSelected && (
                      <Link
                        to={loc.route}
                        onClick={(e) => { e.stopPropagation(); window.scrollTo({ top: 0 }); }}
                        className="w-full mt-auto rounded-full py-3 text-sm text-center font-semibold transition-colors bg-[#C6FF00] hover:bg-[#B0E000] text-[#0C2D48]"
                      >
                        Standort entdecken
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {canScrollLeftK && (
              <button
                onClick={() => scrollByK(-300)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors z-10"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
            )}
            {canScrollRightK && (
              <button
                onClick={() => scrollByK(300)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors z-10"
              >
                <ChevronRightIcon className="w-5 h-5 text-slate-600" />
              </button>
            )}
          </div>

          {/* Mobile: show first 3, expand with "Mehr" button */}
          <div className="md:hidden">
            <div className="grid grid-cols-1 gap-5">
              {standorte.slice(0, showAllMobile ? standorte.length : 3).map((loc, i) => {
                const isSelected = selectedLocation === loc.name;
                return (
                  <motion.div
                    key={loc.name}
                    ref={(el) => { if (el) locationCardRefs.current.set(i, el); }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    onClick={() => handleSelectLocation(loc.name, i)}
                    className={`relative rounded-[2rem] p-6 shadow-lg shadow-slate-300/50 border-2 flex flex-col transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#0C2D48] border-[#0C2D48] shadow-xl shadow-slate-400/30"
                        : "bg-white border-slate-200 hover:-translate-y-1 hover:shadow-xl"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#0C2D48]" strokeWidth={3} />
                      </div>
                    )}
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-fit transition-colors duration-200 ${
                      isSelected ? "bg-white/15 text-white/80" : "bg-green-100 text-green-800"
                    }`}>
                      ✓ Warteliste
                    </span>
                    <h3 className={`text-xl font-bold mb-1 transition-colors duration-200 ${isSelected ? "text-white" : "text-slate-900"}`}>{loc.name}</h3>
                    <p className={`text-sm mb-4 transition-colors duration-200 ${isSelected ? "text-white/60" : "text-slate-500"}`}>{loc.address}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {loc.features.map((f) => (
                        <span key={f} className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full transition-colors duration-200 ${
                          isSelected ? "bg-white/15 text-white/80" : "text-[#0C2D48] bg-secondary"
                        }`}>{f}</span>
                      ))}
                    </div>

                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="pt-5 border-t border-white/20 mt-2">
                            <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
                              <MapPin className="w-4 h-4" />
                              <span>{loc.address}</span>
                            </div>
                            <Link
                              to={loc.route}
                              onClick={() => window.scrollTo({ top: 0 })}
                              className="w-full block mt-auto rounded-full py-3 text-sm text-center font-semibold transition-all bg-[#C6FF00] hover:bg-[#B0E000] hover:scale-105 active:scale-[0.97] text-[#0C2D48]"
                            >
                              Standort entdecken
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!isSelected && (
                      <Link
                        to={loc.route}
                        onClick={(e) => { e.stopPropagation(); window.scrollTo({ top: 0 }); }}
                        className="w-full mt-auto rounded-full py-3 text-sm text-center font-semibold transition-colors bg-[#C6FF00] hover:bg-[#B0E000] text-[#0C2D48]"
                      >
                        Standort entdecken
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {!showAllMobile && standorte.length > 3 && (
              <button
                onClick={() => setShowAllMobile(true)}
                className="mt-6 mx-auto flex items-center gap-2 text-sm font-semibold text-[#0C2D48] hover:text-[#0C2D48]/80 transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
                Alle {standorte.length} Standorte anzeigen
              </button>
            )}
          </div>
        </div>
      </section>

      <SectionDivider fromColor="#f8fafc" />
      <HomeFooter />
    </>
  );

  return (
    <div className="min-h-screen">
      <GlobalHeader />
      <main className="overflow-x-hidden" onTouchStart={swipe.onTouchStart} onTouchEnd={swipe.onTouchEnd}>
      <AnimatePresence mode="wait" custom={direction}>
        {isSwipe ? (
          <motion.div
            key={tab}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {pageContent}
          </motion.div>
        ) : (
          <div key={tab}>
            {pageContent}
          </div>
        )}
      </AnimatePresence>
      </main>
    </div>
  );
};

export default KursePage;

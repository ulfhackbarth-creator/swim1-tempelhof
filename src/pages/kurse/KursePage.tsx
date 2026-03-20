import { useState, useEffect, useLayoutEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeNavigation } from "@/hooks/useSwipeNavigation";
import { ArrowRight, ChevronDown, Star, Check, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import GlobalHeader from "@/components/home/GlobalHeader";
import HomeFooter from "@/components/home/HomeFooter";
import type { CourseTab } from "@/types/course";
import { heroContent, coursesByTab, courseSectionTitle, gridClass, trustStats } from "@/data/courseData";
import { uspsByTab } from "@/data/uspData";
import { testimonialsByTab } from "@/data/testimonialData";
import { faqsByTab } from "@/data/faqData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  wassergewoehnung: "Finde den passenden Standort für Babys und Kleinkinder",
  erwachsene: "Finde den passenden Standort für dein Training",
  fitness: "Finde den passenden Standort für dein Training",
  reha: "Finde deinen Standort für Aqua Reha",
};

const locations = [
  { name: "Berlin-Tempelhof", address: "Ringbahnstraße 12, 12099 Berlin", route: "/schwerin" },
  { name: "Schwerin", address: "Wittenburger Chaussee 25, 19059 Schwerin", route: "/schwerin" },
  { name: "Wildau", address: "Adresse folgt in Kürze", route: "/wildau" },
  { name: "Bremen", address: "Adresse folgt in Kürze", route: "/bremen" },
];

const KursePage = ({ tab }: { tab: CourseTab }) => {
  const content = heroContent[tab];
  const usps = uspsByTab[tab];
  const tests = testimonialsByTab[tab];
  const faqs = faqsByTab[tab];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isSwipe = (location.state as any)?.isSwipe === true;
  const direction = (location.state as any)?.direction ?? 1;

  useEffect(() => { setOpenIndex(null); setSelectedCourse(null); }, [tab]);

  // Restore scroll position from swipe navigation
  useLayoutEffect(() => {
    const scrollY = (location.state as any)?.maintainScrollPosition;
    if (typeof scrollY === "number") {
      window.scrollTo({ top: scrollY, behavior: "auto" });
    }
  }, [location.key]);

  useEffect(() => {
    if (location.hash === "#kurse") {
      const timer = setTimeout(() => {
        document.getElementById("kurse")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [location.hash, tab]);

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const handleSelectCourse = (name: string) => {
    setSelectedCourse((prev) => (prev === name ? null : name));
  };

  const handleFindLocation = () => {
    if (!selectedCourse) return;
    const param = encodeURIComponent(selectedCourse.toLowerCase().replace(/\s+/g, "-"));
    navigate(`/standorte/berlin-tempelhof?preselect=${param}`);
  };

  const swipe = useSwipeNavigation();

  const pageContent = (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] overflow-hidden pt-32 md:pt-[120px]">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" src={content.video} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 min-h-[70vh] md:min-h-[85vh] pt-32 md:pt-[120px] pb-8 md:pb-0">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-tight md:leading-[1.1] mb-4 md:mb-6">
              {content.headline}
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto">{content.subtext}</p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
             onClick={() => scrollTo("#kurse")}
             className="mt-8 md:mt-10 w-full md:w-auto justify-center inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-lg text-white transition-colors shadow-lg bg-[#F97316] hover:bg-[#EA580C]"
             style={{ boxShadow: "0 10px 30px -5px rgba(249,115,22,0.3)" }}
           >
             Kurs auswählen & Standort finden <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* KURSANGEBOT + TRUST */}
      <section id="kurse" className="bg-blue-50/50 py-16 md:py-24 px-4 md:px-6 scroll-mt-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-center mb-12 md:mb-16">
            {courseSectionTitle[tab]}
          </h2>
           <div className={`grid gap-6 md:gap-8 ${gridClass[tab]}`}>
             {coursesByTab[tab].map((course, i) => {
               const isSelected = selectedCourse === course.name;
               return (
                 <motion.div
                   key={course.name}
                   initial={{ opacity: 0, y: 15 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.3, delay: i * 0.06 }}
                   onClick={() => handleSelectCourse(course.name)}
                   className={`relative bg-white rounded-[2rem] p-6 md:p-10 shadow-xl shadow-slate-200/40 border-2 transition-all duration-200 cursor-pointer flex flex-col ${
                     isSelected
                       ? "border-[#1B4F8A] ring-2 ring-[#1B4F8A]/20 bg-blue-50/40 -translate-y-1"
                       : "border-slate-100 hover:-translate-y-1"
                   }`}
                 >
                   {isSelected && (
                     <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#1B4F8A] flex items-center justify-center">
                       <Check className="w-4 h-4 text-white" strokeWidth={3} />
                     </div>
                   )}
                   <span className="text-xs font-bold uppercase tracking-widest text-[#1B4F8A] mb-4">{course.tag}</span>
                   <h3 className="text-xl xl:text-2xl font-bold text-slate-900 mb-3 break-words hyphens-auto">{course.name}</h3>
                   <p className="text-slate-600 leading-relaxed mb-8 flex-1">{course.text}</p>
                   <span className={`mt-auto inline-flex items-center font-semibold transition-all gap-1 ${
                     isSelected ? "text-[#1B4F8A]" : "text-[#1B4F8A] hover:gap-3"
                   }`}>
                     {isSelected ? "Ausgewählt ✓" : <>Auswählen <span>→</span></>}
                   </span>
                 </motion.div>
               );
             })}
           </div>

           {/* Dynamic CTA */}
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: selectedCourse ? 1 : 0, y: selectedCourse ? 0 : 10 }}
             transition={{ duration: 0.25 }}
             className={`flex justify-center pt-10 ${!selectedCourse ? "pointer-events-none" : ""}`}
           >
             <button
               onClick={handleFindLocation}
               disabled={!selectedCourse}
               className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-lg text-white transition-all shadow-lg bg-[#F97316] hover:bg-[#EA580C] disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.97]"
               style={{ boxShadow: selectedCourse ? "0 10px 30px -5px rgba(249,115,22,0.3)" : "none" }}
             >
               Standort für „{selectedCourse || "…"}" finden <ArrowRight className="w-5 h-5" />
             </button>
           </motion.div>

          {/* Trust Stats */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-center pt-12 md:pt-16 pb-8">
            {trustStats[tab].map((s) => (
              <div key={s.label} className="flex-1 min-w-0 px-4 py-4 md:py-0">
                <span className="block text-xl md:text-2xl lg:text-3xl font-bold text-[#1B4F8A] tracking-tight mb-2 break-words hyphens-auto">{s.value}</span>
                <span className="block text-sm font-medium text-slate-500 uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-4xl font-bold tracking-tight text-slate-900 text-center mb-12 md:mb-20">
            {usps.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {usps.items.map((usp, i) => (
              <motion.div key={usp.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex flex-row items-start gap-6 text-left">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-50 text-[#1B4F8A] flex items-center justify-center">
                  <usp.Icon className="w-8 h-8" strokeWidth={1.5} />
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

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-32 bg-[#0F2D52]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4">{tests.title}</h2>
            <p className="text-white/70 font-medium">Über 4,9 Sterne auf Google</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tests.items.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-[#1B4F8A]/40 border border-white/10 rounded-[2rem] p-6 md:p-10 backdrop-blur-sm h-full flex flex-col">
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current text-[#F59E0B]" />)}
                </div>
                <p className="text-lg text-white/90 font-medium leading-relaxed italic mb-8 flex-1">„{t.text}"</p>
                <div><p className="text-white font-bold">{t.name}</p><p className="text-white/50 text-sm">{t.location}</p></div>
              </motion.div>
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

      {/* STANDORTE */}
      <section id="standorte" className="py-16 md:py-32 bg-slate-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Unsere Standorte</h2>
            <p className="text-slate-500">{locationSubtitle[tab]}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc, i) => (
              <motion.div key={loc.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-[2rem] p-6 md:p-8 shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col">
                <span className="inline-block bg-blue-50 text-[#1B4F8A] text-xs font-bold px-3 py-1 rounded-full mb-6 w-fit">Jetzt buchbar</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{loc.name}</h3>
                <p className="text-slate-500 mb-8">{loc.address}</p>
                <Link to={loc.route} onClick={() => window.scrollTo({ top: 0 })} className="w-full mt-auto bg-slate-900 text-white rounded-full py-3.5 text-sm text-center font-semibold hover:bg-slate-800 transition-colors">
                  Standort entdecken
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HomeFooter />
    </>
  );

  return (
    <main className="min-h-screen overflow-x-hidden" onTouchStart={swipe.onTouchStart} onTouchEnd={swipe.onTouchEnd}>
      <GlobalHeader />
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
  );
};

export default KursePage;

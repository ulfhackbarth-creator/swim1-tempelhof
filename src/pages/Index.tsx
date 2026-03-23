import { useState, useCallback, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Star, Waves, Droplets, PersonStanding, Activity, HeartPulse, ShieldCheck, Lock, Users, Heart, Check, MapPin } from "lucide-react";

import TestimonialCard from "@/components/TestimonialCard";
import GlobalHeader from "@/components/home/GlobalHeader";
import HomeFooter from "@/components/home/HomeFooter";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import { HeroWave } from "@/components/HeroWave";
import { WaveSection } from "@/components/WaveSection";
import { standorte } from "@/data/standorteData";

const heroVideos = [
  "/videos/kinderschwimmen_desktop.mp4",
  "/videos/baby_kleinkinder_desktop.mp4",
  "/videos/erwachsene_mobile.mp4",
  "/videos/erwachsene_desktop.mp4",
  "/videos/aquafitness_desktop.mp4",
  "/videos/aquareha_desktop.mp4",
];
const heroMobileVideos = [
  "/videos/kinderschwimmen_desktop.mp4",
  "/videos/baby_kleinkinder_desktop.mp4",
  "/videos/erwachsene_mobile.mp4",
  "/videos/erwachsene_mobile.mp4",
  "/videos/aquafitness_desktop.mp4",
  "/videos/aquareha_desktop.mp4",
];

const trustStats = [
  { value: "Max. 6 Kinder", label: "Kleine Gruppen" },
  { value: "Zertifiziert", label: "Einfühlsame Trainer" },
  { value: "32°C", label: "Warmes Wohlfühlwasser" },
];

const categories = [
  { Icon: Droplets, tag: "Ab 3 Monaten", title: "Baby und Kleinkinder", text: "Wasser gemeinsam erleben, Bindung stärken, erste motorische Fähigkeiten aufbauen.", path: "/kurse/wassergewoehnung" },
  { Icon: Waves, tag: "Ab 3,5 Jahren", title: "Kinderschwimmen", text: "Schwimmen von Grund auf lernen. Sicherheit im Wasser gewinnen. Eine Fähigkeit fürs Leben.", path: "/kurse/kinderschwimmen" },
  { Icon: PersonStanding, tag: "Alle Level", title: "Erwachsenenschwimmen", text: "Es ist nie zu spät, schwimmen zu lernen. Sicherer Rahmen, erfahrene Trainer, dein Tempo.", path: "/kurse/erwachsene" },
  { Icon: Activity, tag: "Gelenkschonend", title: "Aquafitness", text: "Bewegung im Wasser – gelenkschonend, in Gemeinschaft und mit echtem Spaß.", path: "/kurse/aquafitness" },
  { Icon: HeartPulse, tag: "Auf Rezept", title: "Aqua Reha", text: "Zurück zu alter Stärke. Das Wasser gibt dir den Raum, den du dafür brauchst.", path: "/kurse/reha" },
];

const philosophy = [
  { Icon: ShieldCheck, title: "Sicherheit zuerst", text: "Unsere Trainer sind zertifiziert, pädagogisch geschult und wissen, wie man Sicherheit im Wasser wirklich vermittelt." },
  { Icon: Lock, title: "Geschützter Rahmen", text: "Kein öffentlicher Badebetrieb. Eigene Becken, ruhige Atmosphäre – damit du dich voll auf das Lernen konzentrieren kannst." },
  { Icon: Users, title: "Individuelles Tempo", text: "Jeder Mensch lernt anders. Kleine Gruppen bedeuten echte Aufmerksamkeit – für jedes Kind, jeden Erwachsenen." },
  { Icon: Heart, title: "Von Krankenkassen anerkannt", text: "Unsere Reha-Kurse sind von den Krankenkassen anerkannt. Das gibt dir zusätzliche Sicherheit und Vertrauen." },
];


const testimonials = [
  { text: "Mia hatte panische Angst, wenn auch nur ein Tropfen Wasser in ihr Gesicht kam. Nach nur sechs Wochen bei SWIM1 springt sie lachend vom Beckenrand. Die Trainer haben ein echtes Wunder vollbracht.", name: "Sarah T.", location: "Mutter von Mia (4)" },
  { text: "Das 32 Grad warme Wasser ist ein Traum. Unser Sohn liebt die ruhige Atmosphäre und wir als Eltern fühlen uns in jeder Sekunde sicher aufgehoben. Ein Highlight unserer Woche.", name: "Julian M.", location: "Vater von Leo (1)" },
  { text: "Ich habe mich mit 45 Jahren endlich getraut, richtig schwimmen zu lernen. Die Geduld und Diskretion des Trainers haben mir vom ersten Tag an die Scham genommen.", name: "Michael K.", location: "Anfängerkurs" },
];

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const locationCardRefs = useRef<Map<number, HTMLDivElement>>(new Map());

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
  return (
  <main className="min-h-screen">
    <Helmet>
      <title>SWIM1 Schwimmschule | Schwimmkurse für Kinder & Erwachsene</title>
      <meta name="description" content="Premium Schwimmschule an 4 Standorten. Vom Seepferdchen bis zur perfekten Kraultechnik. Kleine Gruppen, 32°C warmes Wasser." />
      <link rel="canonical" href="https://swim1.de/" />
    </Helmet>
    <GlobalHeader />

    {/* ─── HERO ─── */}
    <section className="relative min-h-[85vh] md:min-h-[90vh]" style={{ zIndex: 1 }}>
      <div className="absolute inset-0 overflow-hidden">
        <HeroVideoBackground videos={heroVideos} mobileVideos={heroMobileVideos} poster="/videos/kinderschwimmen_desktop_poster.jpg" mobilePoster="/videos/kinderschwimmen_desktop_poster.jpg" />
        <div className="absolute inset-0 bg-[#0C2D48]/45" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 min-h-[85vh] md:min-h-[90vh] pt-32 md:pt-[120px] pb-8 md:pb-0" style={{ paddingBottom: '120px' }}>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-tight md:leading-[1.1] mb-4 md:mb-6">
            Sicher im Wasser.
            <br />
            Stolz fürs Leben.
          </h1>
          <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto">
            Für Kinder & Erwachsene · Kleine Gruppen · 32 °C warmes Wasser
          </p>
        </motion.div>
        <button
          onClick={() => scrollTo("#kurse")}
          className="mt-8 md:mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-base text-[#0C2D48] transition-all shadow-lg bg-[#C6FF00] hover:bg-[#B0E000] hover:scale-105 active:scale-[0.97]"
          style={{ boxShadow: "0 8px 24px -4px rgba(198,255,0,0.3)" }}
        >
           Passenden Kurs finden <ArrowDown className="w-4 h-4" />
        </button>
        
      </div>
      <HeroWave fillColor="#f2f6f8" />
    </section>

    {/* ─── KURS-ÜBERSICHT ─── */}
    <section id="kurse" className="py-16 md:py-28 bg-secondary/50" style={{ position: 'relative', zIndex: 2 }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-center mb-14 md:mb-20"
        >
          Finde den passenden Kurs
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={cat.path}
                onClick={() => window.scrollTo({ top: 0 })}
                className="group bg-white rounded-[2rem] p-6 md:p-10 shadow-lg shadow-slate-300/50 border-2 border-slate-200 flex flex-col h-full hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-secondary text-[#0C2D48] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <cat.Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#0C2D48]">{cat.tag}</span>
                    <h3 className="text-xl xl:text-2xl font-bold text-slate-900 break-words hyphens-auto">{cat.title}</h3>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">{cat.text}</p>
                <span className="inline-flex items-center text-[#0C2D48] font-semibold gap-1 group-hover:gap-2 transition-all">
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

    {/* ─── TRUST STATS ─── */}
    <WaveSection background="#0C2D48" zIndex={3} divider="smooth" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {trustStats.map((s, i) => (
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
    </WaveSection>

    {/* ─── PHILOSOPHIE ─── */}
    <WaveSection background="#ffffff" zIndex={4} divider="smooth" className="py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Der SWIM1-Weg
          </h2>
          <p className="text-slate-500 text-lg">Warum SWIM1 anders ist</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {philosophy.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-row items-start gap-6 text-left"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-50 text-[#1a6fb5] flex items-center justify-center">
                <item.Icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </WaveSection>

    {/* ─── TESTIMONIALS ─── */}
    <WaveSection background="#0C2D48" zIndex={5} divider="smooth" className="py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Das sagen andere Eltern & Schwimmer
          </h2>
          <p className="text-white/70 font-medium">Über 4,9 Sterne von glücklichen Eltern & Schwimmern</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} text={t.text} name={t.name} location={t.location} index={i} variant="dark" />
          ))}
        </div>
      </div>
    </WaveSection>

    {/* ─── STANDORTE ─── */}
    <section id="standorte" className="py-16 md:py-32 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            SWIM1 in deiner Nähe
          </h2>
          <p className="text-slate-500 font-medium">4 Standorte – immer in deiner Nähe</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                <p className={`text-sm font-semibold mb-0.5 transition-colors duration-200 ${isSelected ? "text-white/80" : "text-[#0C2D48]"}`}>{loc.center}</p>
                <p className={`text-sm mb-4 transition-colors duration-200 ${isSelected ? "text-white/60" : "text-slate-500"}`}>{loc.address}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {loc.features.map((f) => (
                    <span key={f} className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full transition-colors duration-200 ${
                      isSelected ? "bg-white/15 text-white/80" : "text-[#0C2D48] bg-slate-100"
                    }`}>{f}</span>
                  ))}
                </div>
                <p className={`text-xs mb-5 transition-colors duration-200 ${isSelected ? "text-white/50" : "text-slate-400"}`}>Dein Team vor Ort freut sich auf dich.</p>

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
      </div>
    </section>

    <HomeFooter />
  </main>
  );
};

export default Index;

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Waves, Baby, PersonStanding, Activity, HeartPulse, ShieldCheck, Lock, Users } from "lucide-react";
import GlobalHeader from "@/components/home/GlobalHeader";
import HomeFooter from "@/components/home/HomeFooter";

const heroVideos = [
  "https://videos.pexels.com/video-files/5888971/5888971-hd_1920_1080_30fps.mp4",
  "https://videos.pexels.com/video-files/9044164/9044164-hd_1920_1080_30fps.mp4",
  "/videos/erwachsene-hero.mp4",
  "https://videos.pexels.com/video-files/4115399/4115399-hd_1920_1080_25fps.mp4",
];

const trustStats = [
  { value: "Über 2.000", label: "Zufriedene Schwimmer" },
  { value: "4", label: "Moderne Standorte" },
  { value: "32°C", label: "Warmes Wasser" },
  { value: "Max. 8", label: "Kinder pro Gruppe" },
];

const categories = [
  { Icon: Baby, title: "Wassergewöhnung", text: "Haut an Haut das Element Wasser entdecken. Ab 1,5 Monaten.", path: "/kurse/wassergewoehnung#kurse" },
  { Icon: Waves, title: "Kinderschwimmen", text: "Schwimmen lernen mit Spaß und Sicherheit. Ab 4 Jahren.", path: "/kurse/kinderschwimmen#kurse" },
  { Icon: PersonStanding, title: "Erwachsenenschwimmen", text: "Ängste abbauen oder Technik perfektionieren.", path: "/kurse/erwachsene#kurse" },
  { Icon: Activity, title: "Aquafitness", text: "Gelenkschonendes Ganzkörpertraining.", path: "/kurse/aquafitness#kurse" },
  { Icon: HeartPulse, title: "Aqua Reha", text: "Medizinisch begleitete Rehabilitation im Wasser.", path: "/kurse/reha#kurse" },
];

const philosophy = [
  { Icon: ShieldCheck, title: "Sicherheit zuerst", text: "Unsere Trainer sind hochqualifiziert und auf Überlebenstechniken im Wasser geschult." },
  { Icon: Lock, title: "Geschützter Rahmen", text: "Kein öffentlicher Badebetrieb. Wir lernen in privaten, ruhigen Pools ohne Ablenkung." },
  { Icon: Users, title: "Individuelles Tempo", text: "Jeder lernt anders. Unsere kleinen Gruppen garantieren persönliche Betreuung." },
];

const locations = [
  { name: "Berlin-Tempelhof", address: "Ringbahnstraße 12, 12099 Berlin", route: "/schwerin" },
  { name: "Schwerin", address: "Wittenburger Chaussee 25, 19059 Schwerin", route: "/schwerin" },
  { name: "Wildau", address: "Adresse folgt in Kürze", route: "/wildau" },
  { name: "Bremen", address: "Adresse folgt in Kürze", route: "/bremen" },
];

const testimonials = [
  { text: "Meine Tochter hatte anfangs große Angst vor dem Wasser. Die Trainer sind unglaublich geduldig und am Ende hat sie stolz ihr Seepferdchen geschafft!", name: "Sandra M.", location: "Berlin-Tempelhof" },
  { text: "Ich habe mich mit 45 Jahren endlich getraut. Der Trainer war unglaublich geduldig. Ich fühle mich jetzt sicher im Wasser.", name: "Markus T.", location: "Berlin-Tempelhof" },
  { text: "Endlich eine Schwimmschule mit richtig warmem Wasser! Mein Sohn liebt die Wassergewöhnung. Tolle, ruhige Atmosphäre.", name: "Thomas K.", location: "Schwerin" },
  { text: "Nach meiner Hüft-OP war das Training im Wasser die Rettung. Ich konnte Bewegungen machen, die an Land undenkbar waren.", name: "Klaus D.", location: "Berlin-Tempelhof" },
];

const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

const ROTATION_INTERVAL = 7000;

const Index = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const rotate = useCallback(() => {
    setActiveVideo((prev) => (prev + 1) % heroVideos.length);
  }, []);

  useEffect(() => {
    const id = setInterval(rotate, ROTATION_INTERVAL);
    return () => clearInterval(id);
  }, [rotate]);

  return (
  <main className="min-h-screen">
    <GlobalHeader />

    {/* ─── HERO ─── */}
    <section className="relative min-h-[70vh] md:min-h-[90vh] overflow-hidden">
      {/* Video Rotator Background */}
      {heroVideos.map((src, i) => (
        <video
          key={src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === activeVideo ? 1 : 0 }}
          src={src}
        />
      ))}
      <div className="absolute inset-0 bg-[#0F2D52]/70" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 min-h-[70vh] md:min-h-[90vh] pt-20 md:pt-[80px]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-tight md:leading-[1.1] mb-5"
        >
          Sicher im Wasser.
          <br />
          Ein Leben lang.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-8"
        >
          Von der ersten Wassergewöhnung bis zur perfekten Kraultechnik. Swim1 ist deine Premium-Schwimmschule an 4 Standorten.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollTo("#kurse")}
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-lg text-white bg-[#F97316] hover:bg-[#EA580C] transition-colors shadow-lg"
            style={{ boxShadow: "0 10px 30px -5px rgba(249,115,22,0.3)" }}
          >
            Kurs finden <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollTo("#standorte")}
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-lg text-white border-2 border-white/60 hover:bg-white/10 transition-colors"
          >
            Standort wählen
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex items-center gap-2 text-white/70 text-sm"
        >
          <Star className="w-4 h-4 fill-current text-[#F59E0B]" />
          <span>4.8/5 bei über 500 Google-Bewertungen</span>
        </motion.div>
      </div>
    </section>

    {/* ─── TRUST BAR ─── */}
    <section className="bg-white py-10 md:py-14 border-b border-slate-100">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
        {trustStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <span className="block text-2xl md:text-3xl font-bold text-[#1B4F8A] tracking-tight mb-1">
              {s.value}
            </span>
            <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ─── KURS-ÜBERSICHT ─── */}
    <section id="kurse" className="py-16 md:py-28 bg-blue-50/50 scroll-mt-20">
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
              className={i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""}
            >
              <Link
                to={cat.path}
                onClick={() => { /* scroll handled by #kurse hash */ }}
                className="group bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col h-full hover:-translate-y-1 transition-transform"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1B4F8A] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <cat.Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">{cat.text}</p>
                <span className="inline-flex items-center text-[#1B4F8A] font-semibold gap-1 group-hover:gap-2 transition-all">
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── PHILOSOPHIE ─── */}
    <section className="py-16 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Der Swim1-Weg
          </h2>
          <p className="text-slate-500 text-lg">Mehr als nur Schwimmen lernen</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {philosophy.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-row items-start gap-6 text-left"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-50 text-[#1B4F8A] flex items-center justify-center">
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
    </section>

    {/* ─── STANDORTE ─── */}
    <section id="standorte" className="py-16 md:py-32 bg-slate-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-center mb-14 md:mb-20"
        >
          Immer in deiner Nähe
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[2rem] p-6 md:p-8 shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col"
            >
              <span className="inline-block bg-blue-50 text-[#1B4F8A] text-xs font-bold px-3 py-1 rounded-full mb-6 w-fit">
                Jetzt buchbar
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{loc.name}</h3>
              <p className="text-slate-500 mb-8">{loc.address}</p>
              <Link
                to={loc.route}
                onClick={() => window.scrollTo({ top: 0 })}
                className="w-full mt-auto bg-slate-900 text-white rounded-full py-3.5 text-sm text-center font-semibold hover:bg-slate-800 transition-colors"
              >
                Standort entdecken
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── TESTIMONIALS ─── */}
    <section className="py-16 md:py-32 bg-[#0F2D52]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Was Kursteilnehmer über uns sagen
          </h2>
          <p className="text-white/70 font-medium">Über 4,9 Sterne auf Google</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1B4F8A]/40 border border-white/10 rounded-[2rem] p-6 md:p-8 backdrop-blur-sm flex flex-col"
            >
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current text-[#F59E0B]" />
                ))}
              </div>
              <p className="text-white/90 font-medium leading-relaxed italic mb-6 flex-1">
                „{t.text}"
              </p>
              <div>
                <p className="text-white font-bold">{t.name}</p>
                <p className="text-white/50 text-sm">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <HomeFooter />
  </main>
  );
};

export default Index;

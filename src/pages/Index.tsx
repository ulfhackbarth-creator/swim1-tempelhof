import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Waves, Droplets, PersonStanding, Activity, HeartPulse, ShieldCheck, Lock, Users } from "lucide-react";
import GlobalHeader from "@/components/home/GlobalHeader";
import HomeFooter from "@/components/home/HomeFooter";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import { standorte } from "@/data/standorteData";

const heroVideos = [
  "https://videos.pexels.com/video-files/5888968/5888968-uhd_2560_1440_30fps.mp4",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028281720/oNJkUzlVKWrdgGBV.mp4",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028281720/sLFSYxdJMAiQdOXX.mp4",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028281720/jUDOvskOIkWiOmuC.mp4",
  "https://videos.pexels.com/video-files/8050098/8050098-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/6539674/6539674-hd_1920_1080_25fps.mp4",
];

const trustStats = [
  { value: "Über 2.000", label: "Zufriedene Schwimmer" },
  { value: "4", label: "Moderne Standorte" },
  { value: "32°C", label: "Warmes Wasser" },
  { value: "Kleine", label: "Kursgruppen" },
];

const categories = [
  { Icon: Droplets, tag: "Ab 3 Monaten", title: "Wassergewöhnung", text: "Babyschwimmen & Eltern-Kind-Kurse für die Kleinsten.", path: "/kurse/wassergewoehnung" },
  { Icon: Waves, tag: "Ab 3,5 Jahren", title: "Kinderschwimmen", text: "Vom Seepferdchen bis zum Goldabzeichen – mit Spaß und Sicherheit.", path: "/kurse/kinderschwimmen" },
  { Icon: PersonStanding, tag: "Alle Level", title: "Erwachsenenschwimmen", text: "Ängste abbauen oder Technik perfektionieren – in kleiner Gruppe.", path: "/kurse/erwachsene" },
  { Icon: Activity, tag: "Gelenkschonend", title: "Aquafitness", text: "Effektives Ganzkörpertraining im 32 °C warmen Wasser.", path: "/kurse/aquafitness" },
  { Icon: HeartPulse, tag: "Auf Rezept", title: "Aqua Reha", text: "Medizinisch begleitete Rehabilitation – von Krankenkassen anerkannt.", path: "/kurse/reha" },
];

const philosophy = [
  { Icon: ShieldCheck, title: "Sicherheit zuerst", text: "Unsere Trainer sind hochqualifiziert und auf Überlebenstechniken im Wasser geschult." },
  { Icon: Lock, title: "Geschützter Rahmen", text: "Kein öffentlicher Badebetrieb. Wir lernen in privaten, ruhigen Pools ohne Ablenkung." },
  { Icon: Users, title: "Individuelles Tempo", text: "Jeder lernt anders. Unsere kleinen Gruppen garantieren persönliche Betreuung." },
];


const testimonials = [
  { text: "Meine Tochter hatte anfangs große Angst vor dem Wasser. Die Trainer sind unglaublich geduldig und am Ende hat sie stolz ihr Seepferdchen geschafft!", name: "Sandra M.", location: "Berlin-Tempelhof" },
  { text: "Ich habe mich mit 45 Jahren endlich getraut. Der Trainer war unglaublich geduldig. Ich fühle mich jetzt sicher im Wasser.", name: "Markus T.", location: "Berlin-Tempelhof" },
  { text: "Wegen meiner Knieprobleme kann ich nicht mehr joggen. Aqua-Fitness ist die perfekte Alternative, um fit zu bleiben.", name: "Peter W.", location: "Schwerin" },
  { text: "Nach meiner Hüft-OP war das Training im Wasser die Rettung. Ich konnte Bewegungen machen, die an Land undenkbar waren.", name: "Klaus D.", location: "Berlin-Tempelhof" },
];

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const Index = () => {

  return (
  <main className="min-h-screen">
    <GlobalHeader />

    {/* ─── HERO ─── */}
    <section className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden pt-32 md:pt-[120px]">
      <HeroVideoBackground videos={heroVideos} />
      <div className="absolute inset-0 bg-[#0F2D52]/45" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 min-h-[85vh] md:min-h-[90vh] pt-32 md:pt-[120px] pb-8 md:pb-0">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-tight md:leading-[1.1] mb-4 md:mb-6">
            Sicher im Wasser.
            <br />
            Ein Leben lang.
          </h1>
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto">
            Vom Seepferdchen bis zur perfekten Kraultechnik. Swim1 ist deine Premium-Schwimmschule an 4 Standorten.
          </p>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => scrollTo("#standorte")}
          className="mt-8 md:mt-10 w-full md:w-auto justify-center inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-lg text-white transition-colors shadow-lg bg-[#F97316] hover:bg-[#EA580C]"
          style={{ boxShadow: "0 10px 30px -5px rgba(249,115,22,0.3)" }}
        >
          Zum Standort in deiner Nähe <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </section>

    {/* ─── KURS-ÜBERSICHT ─── */}
    <section id="kurse" className="py-16 md:py-28 bg-blue-50/50">
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
                className="group bg-white rounded-[2rem] p-8 md:p-10 shadow-lg shadow-slate-300/50 border-2 border-slate-200 flex flex-col h-full hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1B4F8A] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <cat.Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#1B4F8A] mb-3">{cat.tag}</span>
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

    {/* ─── TRUST STATS ─── */}
    <section className="bg-[#0F2D52] py-12 md:py-16">
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
          Swim1 in deiner Nähe
        </motion.h2>

        <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-xl shadow-slate-200/40 border border-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {standorte.map((loc, i) => {
              return (
                <motion.div
                  key={loc.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-[2rem] p-6 border bg-slate-50 border-slate-100 flex flex-col"
                >
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-fit bg-green-50 text-green-700">
                    ✓ Warteliste
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{loc.name}</h3>
                  <p className="text-sm font-medium text-[#1B4F8A] mb-0.5">{loc.center}</p>
                  <p className="text-slate-500 text-sm mb-4">{loc.address}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {loc.features.map((f) => (
                      <span key={f} className="text-[11px] font-medium text-[#1B4F8A] bg-blue-50 px-2.5 py-0.5 rounded-full">{f}</span>
                    ))}
                  </div>
                  <Link
                    to={loc.route}
                    onClick={() => window.scrollTo({ top: 0 })}
                    className="w-full mt-auto rounded-full py-3 text-sm text-center font-semibold transition-colors bg-[#F97316] hover:bg-[#EA580C] text-white"
                  >
                    Standort entdecken
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    <HomeFooter />
  </main>
  );
};

export default Index;

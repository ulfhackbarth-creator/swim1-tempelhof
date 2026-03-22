import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Star, Waves, Droplets, PersonStanding, Activity, HeartPulse, ShieldCheck, Lock, Users } from "lucide-react";
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
];


const testimonials = [
  { text: "Mia hatte panische Angst, wenn auch nur ein Tropfen Wasser in ihr Gesicht kam. Nach nur sechs Wochen bei Swim1 springt sie lachend vom Beckenrand. Die Trainer haben ein echtes Wunder vollbracht.", name: "Sarah T.", location: "Mutter von Mia (4)" },
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

  return (
  <main className="min-h-screen">
    <Helmet>
      <title>SWIM1 Schwimmschule | Schwimmkurse für Kinder & Erwachsene</title>
      <meta name="description" content="Premium Schwimmschule an 4 Standorten. Vom Seepferdchen bis zur perfekten Kraultechnik. Kleine Gruppen, 32°C warmes Wasser." />
      <link rel="canonical" href="https://swim1.de/" />
    </Helmet>
    <GlobalHeader />

    {/* ─── HERO ─── */}
    <section className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden">
      <HeroVideoBackground videos={heroVideos} />
      <div className="absolute inset-0 bg-[#0F2D52]/45" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 min-h-[85vh] md:min-h-[90vh] pt-32 md:pt-[120px] pb-8 md:pb-0">
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
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => scrollTo("#standorte")}
          className="mt-8 md:mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-base text-[#0F2D52] transition-colors shadow-lg bg-[#C6FF00] hover:bg-[#B0E000]"
          style={{ boxShadow: "0 8px 24px -4px rgba(198,255,0,0.3)" }}
        >
          Passenden Kurs finden <ArrowDown className="w-4 h-4" />
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
                className="group bg-white rounded-[2rem] p-6 md:p-10 shadow-lg shadow-slate-300/50 border-2 border-slate-200 flex flex-col h-full hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 text-[#1B4F8A] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <cat.Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#1B4F8A]">{cat.tag}</span>
                    <h3 className="text-xl xl:text-2xl font-bold text-slate-900 break-words hyphens-auto">{cat.title}</h3>
                  </div>
                </div>
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
          <p className="text-slate-500 text-lg">Warum Swim1 anders ist</p>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    className="w-full mt-auto rounded-full py-3 text-sm text-center font-semibold transition-colors bg-[#C6FF00] hover:bg-[#B0E000] text-[#0F2D52]"
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

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Users, Heart, Baby, Waves, PersonStanding, HeartPulse, ArrowRight, ArrowDown } from "lucide-react";
import StandortDropdown from "@/components/StandortDropdown";
import GlobalHeader from "@/components/home/GlobalHeader";
import HomeFooter from "@/components/home/HomeFooter";
import HeroVideoBackground from "@/components/HeroVideoBackground";

const philosophy = [
  {
    Icon: ShieldCheck,
    title: "Eigene, geschützte Becken",
    text: "Kein öffentlicher Badebetrieb, keine fremden Zuschauer. Unsere Standorte sind ruhige Lernorte mit 32 °C warmem Wasser.",
  },
  {
    Icon: Users,
    title: "Kleine Gruppen",
    text: "Wir glauben an individuelle Betreuung. Mit maximal 6 Kindern (bzw. 8 Erwachsenen) pro Gruppe hat jeder die Aufmerksamkeit, die er braucht.",
  },
  {
    Icon: Heart,
    title: "Pädagogik & Herz",
    text: "Unsere Trainer sind nicht nur zertifiziert, sie sind empathisch. Wir arbeiten ohne Druck, bauen Ängste spielerisch ab und stärken das Vertrauen.",
  },
];

const journey = [
  { Icon: Baby, title: "Baby & Kleinkinder", text: "Die ersten Erfahrungen im Element Wasser.", path: "/kurse/wassergewoehnung" },
  { Icon: Waves, title: "Kinder", text: "Vom Seepferdchen bis zum sicheren Schwimmer.", path: "/kurse/kinderschwimmen" },
  { Icon: PersonStanding, title: "Erwachsene", text: "Ängste überwinden und Technik perfektionieren.", path: "/kurse/erwachsene" },
  { Icon: HeartPulse, title: "Gesundheit", text: "Aquafitness und Aqua Reha für lebenslange Mobilität.", path: "/kurse/aquafitness" },
];

const UeberUns = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Über uns | SWIM1 Schwimmschule</title>
        <meta name="description" content="Erfahre mehr über SWIM1 – unsere Mission, Philosophie und was uns als Schwimmschule einzigartig macht. Eigene Becken, kleine Gruppen, warmes Wasser." />
        <link rel="canonical" href="https://swim1.de/ueber-uns" />
      </Helmet>
      <GlobalHeader />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden">
        <HeroVideoBackground
          videos={["/videos/baby_kleinkinder_desktop.mp4"]}
          poster="/videos/baby_kleinkinder_desktop_poster.jpg"
        />
        <div className="absolute inset-0 bg-[#0C2D48]/50" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 min-h-[85vh] md:min-h-[90vh] pt-32 md:pt-[120px] pb-8 md:pb-0">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-tight md:leading-[1.1] mb-4 md:mb-6">
              Wir verändern, wie Menschen schwimmen lernen.
            </h1>
            <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto">
              Eigene Standorte · Warmes Wasser · Eine Philosophie des Vertrauens
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => {
              const el = document.getElementById("mission");
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: "smooth" });
            }}
            className="mt-8 md:mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-base text-[#0C2D48] transition-all shadow-lg bg-[#C6FF00] hover:bg-[#B0E000] hover:scale-105 active:scale-[0.97]"
            style={{ boxShadow: "0 8px 24px -4px rgba(198,255,0,0.3)" }}
          >
            Mehr erfahren <ArrowDown className="w-4 h-4" />
          </motion.button>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section id="mission" className="py-16 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Mehr als nur eine Schwimmschule.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Schwimmen ist nicht nur eine Sportart – es ist eine Fähigkeit fürs Leben. Doch viel zu oft scheitert das Lernen an überfüllten öffentlichen Bädern, kaltem Wasser und Zeitdruck.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mt-4">
                Deshalb haben wir SWIM1 gegründet. Wir bauen eigene Schwimmschulen, die exakt auf eine Sache ausgerichtet sind: in einer geschützten, warmen Umgebung in kleinen Gruppen schwimmen zu lernen. Ohne Stress, dafür mit ganz viel Herz.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-[2rem] overflow-hidden shadow-lg shadow-slate-300/50 border-2 border-slate-200"
            >
              <img
                src="/videos/baby_kleinkinder_desktop_poster.jpg"
                alt="Trainer mit Kind im Wasser bei SWIM1"
                className="w-full h-72 md:h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHIE ─── */}
      <section className="py-16 md:py-32 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Unsere Philosophie
            </h2>
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
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white text-[#0C2D48] flex items-center justify-center shadow-lg shadow-slate-300/50 border-2 border-slate-200">
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

      {/* ─── REISE ─── */}
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
              Wir begleiten euch ein Leben lang.
            </h2>
            <p className="text-slate-500 text-lg">
              Von den ersten Momenten im Wasser bis zur perfekten Technik. SWIM1 ist für die ganze Familie da.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={card.path}
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="group bg-white rounded-[2rem] p-6 md:p-8 shadow-lg shadow-slate-300/50 border-2 border-slate-200 flex flex-col h-full hover:-translate-y-1 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-secondary text-[#0C2D48] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <card.Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4 flex-1">{card.text}</p>
                  <span className="inline-flex items-center text-[#0C2D48] font-semibold gap-1 group-hover:gap-2 transition-all">
                    Mehr erfahren <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM / KARRIERE ─── */}
      <section className="py-16 md:py-32 bg-[#0C2D48]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] overflow-hidden"
            >
              <img
                src="/videos/standort_desktop_poster.jpg"
                alt="Das SWIM1 Team am Beckenrand"
                className="w-full h-72 md:h-96 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Werde Teil unseres Teams.
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Hinter SWIM1 stehen Menschen, die das Wasser lieben und diese Leidenschaft weitergeben wollen. Wir suchen ständig nach zertifizierten Trainern und engagierten Menschen, die unsere Vision teilen.
              </p>
              <a
                href="mailto:karriere@swim1.de"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-base text-[#0C2D48] transition-all shadow-lg bg-[#C6FF00] hover:bg-[#B0E000] hover:scale-105 active:scale-[0.97]"
                style={{ boxShadow: "0 8px 24px -4px rgba(198,255,0,0.3)" }}
              >
                Zu den offenen Stellen <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Bereit für den ersten Sprung?
            </h2>
            <p className="text-slate-500 text-lg mb-10">
              Finde jetzt den passenden Kurs an einem unserer Standorte in deiner Nähe.
            </p>
            <StandortDropdown
              variant="orange-large"
              label="Standorte entdecken"
              align="center"
            />
          </motion.div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default UeberUns;

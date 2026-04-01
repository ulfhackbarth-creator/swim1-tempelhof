import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ShieldCheck, Building2, Thermometer } from "lucide-react";
import GlobalHeader from "@/components/home/GlobalHeader";
import HomeFooter from "@/components/home/HomeFooter";

const locations = [
  { name: "Berlin-Tempelhof", center: "Tempelhofer Hafen", address: "Ordensmeisterstr. 1–3, 12099 Berlin", pills: ["32 °C Wasser", "U6-Anbindung", "Parkplätze"], route: "/standorte/berlin-tempelhof" },
  { name: "Schwerin", center: "Schlosspark-Center", address: "Marienplatz 5–6, 19053 Schwerin", pills: ["32 °C Wasser", "Zentrale Lage"], route: "/standorte/schwerin" },
  { name: "Wildau", center: "A10 Center", address: "Chausseestr. 1, 15745 Wildau", pills: ["32 °C Wasser", "4.000+ Parkplätze"], route: "/standorte/wildau" },
  { name: "Bremen", center: "Roland Center", address: "Alter Dorfweg 30-50, 28259 Bremen", pills: ["32 °C Wasser", "Parkplätze"], route: "/standorte/bremen" },
  { name: "Erlangen", center: "Weidenweg", address: "Weidenweg 1, 91058 Erlangen", pills: ["32 °C Wasser", "Parkplätze"], route: "/standorte/erlangen" },
];

const stats = [
  { value: "32 °C", label: "WASSERTEMPERATUR" },
  { value: "5:1", label: "BETREUUNGSVERHÄLTNIS" },
  { value: "100 %", label: "EIGENE BECKEN" },
  { value: "4,9 ★", label: "GOOGLE BEWERTUNG" },
];

const features = [
  { Icon: ShieldCheck, title: "Sicherheit zuerst", text: "Unsere Trainer sind zertifiziert und pädagogisch geschult. Kleine Gruppen bedeuten echte Aufmerksamkeit für jedes Kind." },
  { Icon: Building2, title: "Eigene Becken", text: "Kein öffentlicher Badebetrieb. Unsere eigenen Becken bieten eine ruhige, geschützte Atmosphäre – damit du dich voll auf das Lernen konzentrieren kannst." },
  { Icon: Thermometer, title: "32 °C warmes Wasser", text: "Angenehm temperiertes Wasser für Babys, Kinder und Erwachsene. Wohlfühlen ist die Grundlage für erfolgreiches Schwimmenlernen." },
];

const Standorte = () => (
  <>
    <Helmet>
      <title>SWIM1 Standorte – Alle Schwimmschulen im Überblick</title>
      <meta name="description" content="Alle SWIM1 Standorte auf einen Blick: Berlin-Tempelhof, Schwerin, Wildau, Bremen und Erlangen. Eröffnung 2026 – jetzt Platz auf der Warteliste sichern." />
    </Helmet>
    <GlobalHeader />

    {/* Hero */}
    <section className="bg-[#F9FAFB] py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-5">
          Wir wachsen!
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          Finde deinen SWIM1-Standort
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          5 Standorte in Deutschland – alle mit Eröffnung 2026. Trag dich jetzt auf die Warteliste deines Standorts ein.
        </p>
      </div>
    </section>

    {/* Location Cards Grid */}
    <section id="standorte-grid" className="bg-[#F9FAFB] py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {locations.map((loc, i) => (
            <div
              key={loc.route}
              className={`bg-white rounded-2xl shadow-md p-6 flex flex-col ${
                i >= 3 ? "lg:last:col-start-auto" : ""
              }`}
              style={i === 3 ? { gridColumn: "auto" } : i === 4 ? {} : undefined}
            >
              <span className="inline-block self-start bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                ✓ WARTELISTE
              </span>
              <h3 className="text-[22px] font-bold text-primary">{loc.name}</h3>
              <p className="text-[15px] text-primary/80 mt-0.5">{loc.center}</p>
              <p className="text-sm text-muted-foreground mt-1">{loc.address}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {loc.pills.map((pill) => (
                  <span key={pill} className="bg-slate-100 text-primary text-xs font-medium px-3 py-1 rounded-full">
                    {pill}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic mt-3">Dein Team vor Ort freut sich auf dich.</p>
              <div className="mt-auto pt-5">
                <Link
                  to={loc.route}
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="block w-full text-center bg-accent text-accent-foreground font-bold py-3 px-6 rounded-full hover:brightness-95 active:scale-[0.97] transition-all"
                >
                  Zur Warteliste →
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Center last 2 cards on desktop */}
        <style>{`
          @media (min-width: 1024px) {
            #standorte-grid .grid {
              justify-items: center;
            }
            #standorte-grid .grid > :nth-child(4) {
              grid-column-start: 1;
              margin-left: auto;
              margin-right: 0;
              max-width: calc(100% - 0px);
            }
          }
        `}</style>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="py-12" style={{ background: "linear-gradient(135deg, hsl(203,72%,16%) 0%, hsl(195,60%,25%) 100%)" }}>
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={s.label} className="text-center relative">
            <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
            <p className="text-[11px] tracking-widest uppercase text-white/80 mt-1">{s.label}</p>
            {i < stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/20" />
            )}
          </div>
        ))}
      </div>
    </section>

    {/* Why SWIM1 */}
    <section className="bg-[#F9FAFB] py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-2">Warum SWIM1?</h2>
        <p className="text-muted-foreground text-center mb-10">Wir sind mehr als eine Schwimmschule.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <f.Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="bg-primary py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Noch keinen Standort in deiner Nähe?</h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Wir wachsen weiter. Trag dich auf die Warteliste deines nächsten Standorts ein und sei bei der Eröffnung 2026 als Erstes dabei.
        </p>
        <a
          href="#standorte-grid"
          className="inline-block bg-accent text-accent-foreground font-bold py-4 px-10 rounded-full hover:brightness-95 active:scale-[0.97] transition-all"
        >
          Zum nächsten Standort →
        </a>
      </div>
    </section>

    <HomeFooter />
  </>
);

export default Standorte;

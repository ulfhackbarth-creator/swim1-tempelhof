import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const locations = [
  { label: "Berlin-Tempelhof", route: "/" },
  { label: "Schwerin", route: "/schwerin" },
  { label: "Wildau", route: "/wildau" },
  { label: "Bremen", route: "/bremen" },
];

const HomeHero = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCTA = () => {
    if (selected) {
      const loc = locations.find((l) => l.label === selected);
      if (loc) {
        navigate(loc.route);
        window.scrollTo({ top: 0 });
      }
    } else {
      document.getElementById("standorte")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/5888971/5888971-hd_1920_1080_30fps.mp4"
      />
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="container relative z-10 px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-5 py-2 mb-6 text-sm font-semibold bg-white/20 backdrop-blur-md text-[#1B4F8A] rounded-full"
            style={{ color: '#1B4F8A', backgroundColor: 'rgba(255,255,255,0.85)' }}
          >
            Seit 2019 · 4 Standorte · Über 2.000 Kinder
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight"
          >
            Sicher schwimmen lernen. Mit Spaß.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-white/90 mb-8"
          >
            Kleine Gruppen · Zertifizierte Trainer · 32°C warmes Wasser
          </motion.p>

          {/* Location selector box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-card p-6 md:p-8 max-w-2xl mx-auto"
          >
            <p className="text-sm font-medium text-muted-foreground mb-4">
              Wo möchtest du schwimmen lernen?
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {locations.map((loc) => (
                <button
                  key={loc.label}
                  onClick={() => setSelected(loc.label)}
                  className={`px-4 py-2 rounded-full border-2 text-sm font-semibold transition-all duration-200 ${
                    selected === loc.label
                      ? "bg-primary border-primary text-primary-foreground"
                      : "border-primary text-primary hover:bg-primary/5"
                  }`}
                >
                  {loc.label}
                </button>
              ))}
            </div>
            <Button
              variant="cta"
              size="lg"
              className="rounded-full w-full md:w-auto md:px-10"
              onClick={handleCTA}
            >
              Kurse & Termine anzeigen →
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">
              Unverbindlich · Kostenlos · Sofort buchbar
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;

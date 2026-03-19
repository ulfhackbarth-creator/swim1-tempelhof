import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import type { CourseTab } from "@/pages/Index";

const locations = [
  { label: "Berlin-Tempelhof", route: "/" },
  { label: "Schwerin", route: "/schwerin" },
  { label: "Wildau", route: "/wildau" },
  { label: "Bremen", route: "/bremen" },
];

const heroContent: Record<CourseTab, { video: string; headline: string; subtext: string }> = {
  wassergewoehnung: {
    video: "https://videos.pexels.com/video-files/5888971/5888971-hd_1920_1080_30fps.mp4",
    headline: "Sicher schwimmen lernen. Mit Spaß.",
    subtext: "Kleine Gruppen · Zertifizierte Trainer · 32°C warmes Wasser",
  },
  schwimmen: {
    video: "https://videos.pexels.com/video-files/9044164/9044164-hd_1920_1080_30fps.mp4",
    headline: "Vom Seepferdchen bis zum Goldabzeichen.",
    subtext: "Strukturierte Kurse · Kleine Gruppen · Bewährte Methodik",
  },
  fitness: {
    video: "https://videos.pexels.com/video-files/8050098/8050098-hd_1920_1080_25fps.mp4",
    headline: "Fitness im Wasser. Gelenkschonend & effektiv.",
    subtext: "Ganzkörper-Workout · Alle Fitness-Level · Viel Spaß in der Gruppe",
  },
  reha: {
    video: "https://videos.pexels.com/video-files/4115399/4115399-hd_1920_1080_25fps.mp4",
    headline: "Rehabilitation & Prävention im Wasser.",
    subtext: "Auf Rezept · Krankenkassen-anerkannt · Medizinisch begleitet",
  },
};

const HomeHero = ({ activeTab }: { activeTab: CourseTab }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const prevVideoRef = useRef<HTMLVideoElement>(null);
  const [currentVideo, setCurrentVideo] = useState(heroContent.wassergewoehnung.video);
  const [nextVideo, setNextVideo] = useState<string | null>(null);

  const content = heroContent[activeTab];

  // Crossfade video on tab change
  useEffect(() => {
    const newVideo = heroContent[activeTab].video;
    if (newVideo !== currentVideo) {
      setNextVideo(newVideo);
    }
  }, [activeTab]);

  const handleNextVideoReady = () => {
    if (nextVideo) {
      setCurrentVideo(nextVideo);
      setNextVideo(null);
    }
  };

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
      {/* Current video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${nextVideo ? "opacity-0" : "opacity-100"}`}
        src={currentVideo}
      />
      {/* Next video (crossfade) */}
      {nextVideo && (
        <video
          ref={prevVideoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover animate-fade-in"
          src={nextVideo}
          onCanPlay={handleNextVideoReady}
        />
      )}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="container relative z-10 px-4 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-5 py-2 mb-6 text-sm font-semibold rounded-full backdrop-blur-md"
            style={{ color: '#1B4F8A', backgroundColor: 'rgba(255,255,255,0.85)' }}
          >
            Seit 2019 · 4 Standorte · Über 2.000 Kinder
          </motion.span>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                {content.headline}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                {content.subtext}
              </p>
            </motion.div>
          </AnimatePresence>

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
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    selected === loc.label
                      ? "bg-[#1B4F8A] text-white border-2 border-[#1B4F8A]"
                      : "bg-white border-2 border-[#1B4F8A] text-[#1B4F8A] hover:bg-primary/5"
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
              Jetzt Kurse entdecken →
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">
              Kostenlos · Keine Anmeldung · Sofort buchbar
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

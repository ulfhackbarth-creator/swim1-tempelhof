import { motion } from "framer-motion";
import { Award, MapPin, ThumbsUp } from "lucide-react";
import type { CityConfig } from "@/config/cities";

interface CityAboutUsProps {
  city: CityConfig;
}

const CityAboutUs = ({ city }: CityAboutUsProps) => {
  const highlights = [
    { icon: Award, title: "Erfahrenes Team", description: "Qualifizierte Schwimmlehrer mit jahrelanger Erfahrung" },
    { icon: MapPin, title: "Mehrere Standorte", description: "Etabliertes Netzwerk – jetzt auch in " + city.cityName },
    { icon: ThumbsUp, title: "Qualitätsfokus", description: "Höchste Standards bei Sicherheit & Ausbildung" },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Über uns</h2>
          <p className="text-muted-foreground">{city.aboutUsText}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {highlights.map((highlight, index) => (
            <motion.div key={highlight.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-card p-6 rounded-xl shadow-soft text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                <highlight.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityAboutUs;

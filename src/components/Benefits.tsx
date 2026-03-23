import { motion } from "framer-motion";
import { Users, Shield, Thermometer, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Users,
    title: "Kleine Gruppen",
    description: "Individuelle Betreuung für optimalen Lernerfolg",
  },
  {
    icon: Shield,
    title: "Sichere Ausbildung",
    description: "Qualifizierte Trainer mit langjähriger Erfahrung",
  },
  {
    icon: Thermometer,
    title: "32 °C warmes Wasser",
    description: "Angenehme Temperatur für alle Kurse",
  },
  {
    icon: MapPin,
    title: "Zentral erreichbar",
    description: "Direkt am S+U Tempelhof",
  },
];

const Benefits = () => {
  const scrollToForm = () => {
    document.getElementById("warteliste")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Warum bei uns?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Qualität und Sicherheit stehen bei uns an erster Stelle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 mb-4 rounded-2xl bg-secondary flex items-center justify-center shadow-soft">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="mt-12 text-center"
        >
          <Button variant="cta" size="lg" onClick={scrollToForm}>
            Jetzt Kursplatz vormerken
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;

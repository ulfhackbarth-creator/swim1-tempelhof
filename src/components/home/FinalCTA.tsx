import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToLocations = () => {
    document.getElementById("standorte")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
            Bereit für den ersten Sprung ins Wasser?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Wähle jetzt deinen Standort und buche deinen Kurs – unverbindlich und kostenlos.
          </p>
          <Button
            size="lg"
            className="rounded-full bg-white text-primary hover:bg-white/90 font-bold px-10"
            onClick={scrollToLocations}
          >
            Jetzt Kurs buchen
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;

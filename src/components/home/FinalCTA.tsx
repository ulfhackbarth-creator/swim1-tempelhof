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
            Dein Kurs wartet auf dich.
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Finde jetzt den passenden Kurs an deinem Standort – in weniger als 2 Minuten.
          </p>
          <Button
            size="lg"
            className="rounded-full font-bold px-10"
            style={{ backgroundColor: '#F97316', color: '#FFFFFF' }}
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

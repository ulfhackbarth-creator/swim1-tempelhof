import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Bell, Star } from "lucide-react";

const waitlistBenefits = [
  {
    icon: Check,
    text: "100% unverbindlich",
  },
  {
    icon: Bell,
    text: "Infos zuerst erhalten",
  },
  {
    icon: Star,
    text: "Priorität bei Buchung",
  },
];

const WaitlistBenefits = () => {
  const scrollToForm = () => {
    document.getElementById("warteliste")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-water text-primary-foreground">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Dein Vorteil auf der Warteliste
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            {waitlistBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          <Button
            variant="ctaOutline"
            size="lg"
            onClick={scrollToForm}
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Jetzt vormerken
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistBenefits;

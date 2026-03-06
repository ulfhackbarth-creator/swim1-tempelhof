import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-pool.jpg";
const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("warteliste")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Modernes Schwimmbad mit kristallklarem Wasser" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/55 via-primary/40 to-background/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 pt-20 pb-12">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} className="max-w-2xl mx-auto text-center">
          <motion.span initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }} className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-secondary/90 text-secondary-foreground rounded-full backdrop-blur-sm">SWIM1 in Berlin-Tempelhof</motion.span>

          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3,
          duration: 0.6
        }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">Sichere dir einen der begehrten Plätze am Tempelhofer Hafen!</motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-lg mx-auto">Die Nachfrage ist hoch. Trag dich in die kostenlose VIP-Liste ein und erhalte 48 Stunden vor allen anderen Zugriff auf die Kursbuchung.</motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5,
          duration: 0.6
        }}>
            <Button variant="cta" size="xl" onClick={scrollToForm}>
              Kostenlosen Vorab-Zugang sichern
            </Button>
          </motion.div>

          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.7,
          duration: 0.5
        }} className="mt-6 text-sm text-primary-foreground/70">
            Unverbindlich & kostenlos
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 0.5
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}>
          <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
        </motion.div>
      </motion.div>
    </section>;
};
export default Hero;
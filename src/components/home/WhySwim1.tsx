import { motion } from "framer-motion";
import { ShieldCheck, Heart, Award } from "lucide-react";

const usps = [
  {
    icon: ShieldCheck,
    title: "Sicherheit zuerst",
    text: "Alle Trainer sind ausgebildete Rettungsschwimmer. Maximale Gruppengröße: 6 Kinder für optimale Betreuung.",
  },
  {
    icon: Heart,
    title: "Geduld & Methodik",
    text: "Bewährte Lernmethoden, die auch ängstlichen Kindern helfen. Wir nehmen uns die Zeit, die jedes Kind braucht.",
  },
  {
    icon: Award,
    title: "Nachweisbare Erfolge",
    text: "Über 2.000 Kinder haben bei SWIM1 schwimmen gelernt. Von der Wassergewöhnung bis zum Goldabzeichen.",
  },
];

const WhySwim1 = () => (
  <section id="warum" className="py-24 bg-slate-50 scroll-mt-20">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#1B4F8A] tracking-tight mb-4">
          Das macht SWIM1 besonders
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {usps.map((usp, i) => (
          <motion.div
            key={usp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center flex flex-col items-center"
          >
            <usp.icon className="w-12 h-12 text-[#1B4F8A] mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-slate-900 mb-4">{usp.title}</h3>
            <p className="text-slate-600 leading-relaxed">{usp.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySwim1;

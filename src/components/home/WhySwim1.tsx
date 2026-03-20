import { motion } from "framer-motion";
import { Award, Users, ShieldCheck } from "lucide-react";

const usps = [
  {
    Icon: Award,
    label: "Zertifizierte Trainer",
    text: "Alle unsere Trainer sind nach DLRG-Standard ausgebildet und regelmäßig weitergebildet.",
  },
  {
    Icon: Users,
    label: "Max. 6 Kinder pro Kurs",
    text: "Jedes Kind bekommt die Aufmerksamkeit, die es braucht. Keine Massenveranstaltungen.",
  },
  {
    Icon: ShieldCheck,
    label: "Über 2.000 Kinder",
    text: "Seit 2019 helfen wir Kindern und Erwachsenen, sicher und selbstbewusst im Wasser zu sein.",
  },
];

const WhySwim1 = () => (
  <section id="warum" className="py-16 md:py-32 bg-white scroll-mt-20">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
      >
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
          Das macht SWIM1 besonders
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {usps.map((usp, i) => (
          <motion.div
            key={usp.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1B4F8A] flex items-center justify-center mb-6">
              <usp.Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{usp.label}</h3>
            <p className="text-slate-600 leading-relaxed">{usp.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySwim1;

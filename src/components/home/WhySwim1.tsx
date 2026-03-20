import { motion } from "framer-motion";

const usps = [
  {
    value: "100%",
    label: "Zertifizierte Trainer",
    text: "Alle unsere Trainer sind nach DLRG-Standard ausgebildet und regelmäßig weitergebildet.",
  },
  {
    value: "Max. 6",
    label: "Kinder pro Kurs",
    text: "Jedes Kind bekommt die Aufmerksamkeit, die es braucht. Keine Massenveranstaltungen.",
  },
  {
    value: "2.000+",
    label: "Kinder sicher schwimmen gelernt",
    text: "Seit 2019 helfen wir Kindern und Erwachsenen, sicher und selbstbewusst im Wasser zu sein.",
  },
];

const WhySwim1 = () => (
  <section id="warum" className="py-16 md:py-24 bg-[#F8FAFC] scroll-mt-20">
    <div className="max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold tracking-tight text-[#0F172A] text-center mb-16"
      >
        Das macht SWIM1 besonders
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {usps.map((usp, i) => (
          <motion.div
            key={usp.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="block text-5xl font-bold text-[#1B4F8A] mb-1">{usp.value}</span>
            <span className="block text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              {usp.label}
            </span>
            <p className="text-[#64748B] leading-relaxed text-sm">{usp.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySwim1;

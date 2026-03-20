import { motion } from "framer-motion";

const stats = [
  { value: "4,9 / 5", label: "Google-Bewertung" },
  { value: "32°C", label: "Warmes Wasser" },
  { value: "Max. 6", label: "Kinder pro Gruppe" },
];

const TrustBar = () => (
  <section className="bg-[#1B4F8A] py-16 md:py-20">
    <div className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-white/20 text-center px-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="px-4"
        >
          <span className="block text-5xl md:text-7xl font-bold text-white tracking-tight">
            {s.value}
          </span>
          <span className="block text-sm font-medium text-white/60 mt-2 uppercase tracking-wider">
            {s.label}
          </span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TrustBar;

import { motion } from "framer-motion";
import { Star, Baby, Users, Thermometer } from "lucide-react";

const items = [
  { icon: Star, fill: "#F59E0B", color: "#F59E0B", value: "4,9 / 5", label: "Google-Bewertung" },
  { icon: Thermometer, fill: "none", color: "#1B4F8A", value: "32°C", label: "Warmes Wasser" },
  { icon: Users, fill: "none", color: "#1B4F8A", value: "Max. 6", label: "Kinder pro Gruppe" },
  { icon: Baby, fill: "none", color: "#1B4F8A", value: "Ab 2", label: "Monate Kursstart" },
];

const TrustBar = () => (
  <section className="py-8 bg-white border-y border-slate-100">
    <div className="container px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center justify-center gap-1 px-4 py-2"
          >
            <item.icon size={28} color={item.color} fill={item.fill} />
            <span className="text-2xl font-bold text-slate-900">{item.value}</span>
            <span className="text-sm text-slate-500">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;

import { motion } from "framer-motion";
import { Star, Baby, Users, Thermometer } from "lucide-react";

const items = [
  { icon: Star, fill: "#F59E0B", color: "#F59E0B", text: "4,9 / 5 Google-Bewertung" },
  { icon: Baby, fill: "none", color: "#1B4F8A", text: "Kurse ab 2 Monaten" },
  { icon: Users, fill: "none", color: "#1B4F8A", text: "Max. 6 Kinder pro Gruppe" },
  { icon: Thermometer, fill: "none", color: "#1B4F8A", text: "32°C warmes Wasser" },
];

const TrustBar = () => (
  <section className="py-6 border-y border-slate-200" style={{ backgroundColor: '#F0F4F8' }}>
    <div className="container px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center justify-center gap-2 text-sm font-medium text-foreground"
          >
            <item.icon size={24} color={item.color} fill={item.fill} />
            <span>{item.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;

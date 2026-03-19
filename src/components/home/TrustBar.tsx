import { motion } from "framer-motion";

const items = [
  { emoji: "⭐", text: "4,9/5 Google-Bewertung" },
  { emoji: "👶", text: "Kurse ab 2 Monaten" },
  { emoji: "🏊", text: "Max. 6 Kinder pro Gruppe" },
  { emoji: "🌡️", text: "32°C warmes Wasser" },
];

const TrustBar = () => (
  <section className="py-6 bg-muted">
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
            <span className="text-lg">{item.emoji}</span>
            <span>{item.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;

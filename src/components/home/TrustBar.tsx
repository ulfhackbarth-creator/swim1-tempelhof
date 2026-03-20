import { motion } from "framer-motion";
import { Star, Thermometer, Users, Baby } from "lucide-react";

const items = [
  { icon: Star, value: "4,9 / 5", label: "GOOGLE-BEWERTUNG" },
  { icon: Thermometer, value: "32°C", label: "WARMES WASSER" },
  { icon: Users, value: "Max. 6", label: "KINDER PRO GRUPPE" },
  { icon: Baby, value: "Ab 2", label: "MONATE KURSSTART" },
];

const TrustBar = () => (
  <section className="py-12 bg-white">
    <div className="container px-4">
      <div className="flex flex-wrap justify-center">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`flex flex-col items-center justify-center gap-2 px-8 py-4 w-1/2 md:w-auto md:flex-1 ${
              i > 0 ? "md:border-l md:border-slate-200" : ""
            }`}
          >
            <item.icon className="w-7 h-7 text-[#1B4F8A]/40" strokeWidth={1.5} />
            <span className="text-4xl font-light text-[#1B4F8A]">{item.value}</span>
            <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;

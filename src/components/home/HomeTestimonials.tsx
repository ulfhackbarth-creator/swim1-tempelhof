import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Meine Tochter hatte anfangs große Angst vor dem Wasser. Die Trainer sind unglaublich geduldig und am Ende hat sie ihr Seepferdchen geschafft!",
    name: "Sandra M.",
    location: "Berlin-Tempelhof",
  },
  {
    text: "Endlich eine Schwimmschule mit warmem Wasser! Mein Sohn liebt die Wassergewöhnung. Kleine Gruppen, tolle Atmosphäre.",
    name: "Thomas K.",
    location: "Schwerin",
  },
  {
    text: "Beide Kinder haben hier schwimmen gelernt – vom Seepferdchen bis Gold. Professionell, herzlich und immer zuverlässig.",
    name: "Julia R.",
    location: "Wildau",
  },
];

const HomeTestimonials = () => (
  <section className="py-32" style={{ backgroundColor: "#0F2D52" }}>
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
          Eltern über ihre Erfahrungen
        </h2>
        <p className="text-white/50">Über 4,9 Sterne auf Google</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-[2rem] p-10 border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <div className="flex gap-0.5 mb-6">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-lg text-white/90 font-medium leading-relaxed mb-8">
              „{t.text}"
            </p>
            <p className="font-bold text-white">{t.name}</p>
            <p className="text-white/50 text-sm">{t.location}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeTestimonials;

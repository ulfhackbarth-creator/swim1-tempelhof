import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Meine Tochter hatte anfangs große Angst vor dem Wasser. Die Trainer sind unglaublich geduldig und am Ende hat sie ihr Seepferdchen geschafft!",
    name: "Sandra M.",
    location: "Berlin-Tempelhof",
    course: "Seepferdchenkurs",
  },
  {
    text: "Endlich eine Schwimmschule mit warmem Wasser! Mein Sohn (2 Jahre) liebt die Wassergewöhnung. Kleine Gruppen, tolle Atmosphäre.",
    name: "Thomas K.",
    location: "Schwerin",
    course: "Wassergewöhnung",
  },
  {
    text: "Beide Kinder haben hier schwimmen gelernt – vom Seepferdchen bis Gold. Professionell, herzlich und immer zuverlässig. Absolute Empfehlung!",
    name: "Julia R.",
    location: "Wildau",
    course: "Fortgeschrittenenkurse",
  },
];

const HomeTestimonials = () => (
  <section className="py-24 bg-white">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#1B4F8A] tracking-tight mb-4">
          Eltern über ihre Erfahrungen
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative border border-slate-100 bg-white p-8 rounded-2xl"
          >
            <span className="absolute top-4 left-6 text-6xl text-slate-100 font-serif leading-none select-none -z-0">
              „
            </span>
            <div className="relative z-10">
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-lg font-medium leading-relaxed text-slate-800 mb-6">
                „{t.text}"
              </p>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">
                  {t.location} · {t.course}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeTestimonials;

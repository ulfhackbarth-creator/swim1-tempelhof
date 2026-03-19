import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
  <section className="py-16 md:py-24 bg-background">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
          Das sagen Eltern über SWIM1
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card p-6 rounded-2xl shadow-card relative"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground mb-4 leading-relaxed">„{t.text}"</p>
            <div className="border-t border-border pt-4">
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">
                {t.location} · {t.course}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeTestimonials;

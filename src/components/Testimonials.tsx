import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sandra M.",
    location: "Tempelhof",
    text: "Meine Tochter hatte anfangs große Angst vor dem Wasser. Nach nur 8 Wochen hat sie ihr Seepferdchen geschafft! Die Trainer sind unglaublich geduldig.",
    course: "Seepferdchenkurs",
  },
  {
    name: "Thomas K.",
    location: "Neukölln",
    text: "Endlich eine Schwimmschule mit warmem Wasser! Mein Sohn (2 Jahre) liebt die Wassergewöhnung. Kleine Gruppen, tolle Atmosphäre.",
    course: "Wassergewöhnung",
  },
  {
    name: "Julia R.",
    location: "Kreuzberg",
    text: "Beide Kinder haben hier schwimmen gelernt – vom Seepferdchen bis Gold. Professionell, herzlich und immer zuverlässig. Absolute Empfehlung!",
    course: "Fortgeschrittenenkurse",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Das sagen Eltern
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Erfahrungen aus unseren anderen Standorten
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl shadow-card relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
              
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-foreground mb-4 leading-relaxed">
                „{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location} · {testimonial.course}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

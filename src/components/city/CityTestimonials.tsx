import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { CityConfig } from "@/config/cities";

interface CityTestimonialsProps {
  city: CityConfig;
}

const CityTestimonials = ({ city }: CityTestimonialsProps) => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Das sagen Eltern</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Erfahrungen aus unseren anderen Standorten</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {city.testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }} className="bg-white p-6 md:p-10 rounded-[2rem] shadow-lg shadow-slate-300/50 border-2 border-slate-200 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">„{testimonial.text}"</p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.location} · {testimonial.course}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityTestimonials;

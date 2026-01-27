import { motion } from "framer-motion";
import { Baby, Users, Waves, Award } from "lucide-react";

const offerings = [{
  icon: Baby,
  title: "Wassergewöhnung",
  description: "Eltern & Kind – ab 2 Monaten bis 2,5 Jahre"
}, {
  icon: Waves,
  title: "Seepferdchenkurse",
  description: "Für Kinder ab 3,5 Jahren"
}, {
  icon: Award,
  title: "Fortgeschrittenenkurse",
  description: "Bronze, Silber & Gold"
}, {
  icon: Users,
  title: "Erwachsenenkurse",
  description: "Einstieg & Technik"
}];
const Offerings = () => {
  return <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Unser Angebot</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Vielfältige Kurse für alle Altersgruppen und Bedürfnisse
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {offerings.map((offering, index) => <motion.div key={offering.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-card p-5 md:p-6 rounded-xl shadow-card text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <offering.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">
                {offering.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {offering.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Offerings;
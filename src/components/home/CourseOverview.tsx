import { motion } from "framer-motion";
import { Waves, Fish, Trophy, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    icon: Waves,
    title: "Wassergewöhnung",
    tag: "Ab 2 Monate · Eltern-Kind-Kurs",
    description:
      "Spielerische Wassergewöhnung für die Kleinsten, gemeinsam mit Mama oder Papa.",
  },
  {
    icon: Fish,
    title: "Seepferdchen",
    tag: "Ab 3,5 Jahre · Erstes Schwimmabzeichen",
    description:
      "Der erste große Schritt: Dein Kind lernt sicher zu schwimmen und besteht das Seepferdchen.",
  },
  {
    icon: Trophy,
    title: "Fortgeschrittene",
    tag: "Bronze · Silber · Gold",
    description:
      "Aufbaukurse für Kinder, die ihr Können weiter ausbauen und alle drei Abzeichen erreichen wollen.",
  },
  {
    icon: User,
    title: "Erwachsene",
    tag: "Anfänger & Technik",
    description:
      "Nie zu spät: Schwimmen lernen oder die Technik verbessern – in kleinen Gruppen und ohne Stress.",
  },
];

const CourseOverview = () => (
  <section id="kurse" className="py-16 md:py-24 bg-background scroll-mt-20">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
          Kurse für jedes Alter
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {courses.map((course, i) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card p-6 rounded-2xl shadow-card hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4">
              <course.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-1">{course.title}</h3>
            <p className="text-xs font-medium text-primary mb-3">{course.tag}</p>
            <p className="text-sm text-muted-foreground mb-6 flex-1">
              {course.description}
            </p>
            <Button variant="outline" size="sm" className="rounded-full self-start" asChild>
              <a href="#">Mehr erfahren</a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CourseOverview;

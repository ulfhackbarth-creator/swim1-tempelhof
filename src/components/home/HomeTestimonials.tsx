import { motion, AnimatePresence } from "framer-motion";
import type { CourseTab } from "@/pages/Index";

type Testimonial = { text: string; name: string; location: string };

const testimonialsByTab: Record<CourseTab, { title: string; items: Testimonial[] }> = {
  schwimmen: {
    title: "Das sagen andere Eltern",
    items: [
      { text: "Meine Tochter hatte anfangs große Angst vor dem Wasser. Die Trainer sind unglaublich geduldig und am Ende hat sie stolz ihr Seepferdchen geschafft!", name: "Sandra M.", location: "Berlin-Tempelhof" },
      { text: "Beide Kinder haben hier schwimmen gelernt. Professionell, herzlich und immer zuverlässig. Absolute Empfehlung!", name: "Julia R.", location: "Wildau" },
      { text: "Die kleinen Gruppen machen den Unterschied. Mein Sohn geht jede Woche mit einem Lächeln zum Kurs.", name: "Michael T.", location: "Bremen" },
    ],
  },
  wassergewoehnung: {
    title: "Erfahrungen von anderen Mamas & Papas",
    items: [
      { text: "Endlich eine Schwimmschule mit richtig warmem Wasser! Mein Sohn liebt die Wassergewöhnung. Tolle, ruhige Atmosphäre.", name: "Thomas K.", location: "Schwerin" },
      { text: "Unsere Trainerin hat so eine beruhigende Art. Selbst beim ersten Tauchen gab es keine Tränen. Ein wunderbares Erlebnis für uns beide.", name: "Lisa M.", location: "Berlin-Tempelhof" },
      { text: "Der Kurs ist unser wöchentliches Highlight. Die Lieder und Spiele sind super auf die Kleinen abgestimmt.", name: "Sarah B.", location: "Wildau" },
    ],
  },
  fitness: {
    title: "Das sagen unsere Teilnehmer",
    items: [
      { text: "Ich hätte nie gedacht, dass Sport im Wasser so anstrengend sein kann! Ein tolles Workout, nach dem man sich großartig fühlt.", name: "Martina S.", location: "Berlin-Tempelhof" },
      { text: "Wegen meiner Knieprobleme kann ich nicht mehr joggen. Aqua-Fitness ist die perfekte Alternative, um fit zu bleiben.", name: "Peter W.", location: "Schwerin" },
      { text: "Die Trainerin bringt so viel Energie mit. Man merkt gar nicht, wie die Zeit vergeht.", name: "Elena K.", location: "Bremen" },
    ],
  },
  reha: {
    title: "Erfahrungen unserer Patienten",
    items: [
      { text: "Nach meiner Hüft-OP war das Training im Wasser die Rettung. Ich konnte Bewegungen machen, die an Land undenkbar waren.", name: "Klaus D.", location: "Berlin-Tempelhof" },
      { text: "Die Therapeuten gehen auf jeden einzeln ein. Meine Rückenschmerzen sind durch den Kurs deutlich besser geworden.", name: "Renate H.", location: "Schwerin" },
      { text: "Tolle Betreuung von der ersten Verordnung bis zur letzten Stunde. Fühle mich hier sehr gut aufgehoben.", name: "Dieter M.", location: "Wildau" },
    ],
  },
};

const HomeTestimonials = ({ activeTab }: { activeTab: CourseTab }) => {
  const data = testimonialsByTab[activeTab];

  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`test-title-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              {data.title}
            </h2>
            <p className="text-slate-500 font-medium">Über 4,9 Sterne auf Google</p>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`test-items-${activeTab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {data.items.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-slate-100 rounded-[2rem] p-6 md:p-10 shadow-lg shadow-slate-200/40 h-full flex flex-col"
              >
                <p className="text-lg text-slate-800 font-medium leading-relaxed italic mb-8 flex-1">
                  „{t.text}"
                </p>
                <div className="flex flex-col">
                  <p className="text-slate-900 font-bold">{t.name}</p>
                  <p className="text-slate-500 text-sm">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HomeTestimonials;

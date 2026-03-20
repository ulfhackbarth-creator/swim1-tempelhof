import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, Heart, Thermometer, Smile, Activity, Droplets, Users, HeartPulse, FileText, UserCheck } from "lucide-react";
import type { CourseTab } from "@/pages/Index";

type UspItem = { Icon: typeof Award; label: string; text: string };

const uspsByTab: Record<CourseTab, { title: string; items: UspItem[] }> = {
  schwimmen: {
    title: "Warum Eltern uns vertrauen",
    items: [
      { Icon: ShieldCheck, label: "100% zertifizierte Trainer", text: "Unsere Trainer sind pädagogisch geschult und wissen genau, wie sie Kindern die Angst vor dem Wasser nehmen." },
      { Icon: Award, label: "Kleine Gruppen (Max. 6)", text: "Keine Massenabfertigung. Jedes Kind bekommt die Aufmerksamkeit, die es braucht, um in seinem eigenen Tempo zu lernen." },
      { Icon: Heart, label: "Nachweisbare Erfolge", text: "Vom ersten angstfreien Tauchen bis zum Goldabzeichen – wir feiern jeden kleinen und großen Fortschritt gemeinsam." },
    ],
  },
  wassergewoehnung: {
    title: "Sicherheit und Geborgenheit für dein Baby",
    items: [
      { Icon: Thermometer, label: "Wohlfühl-Temperatur", text: "Mit durchgehend 32°C Wassertemperatur garantieren wir, dass dein Baby nicht friert und sich vollkommen entspannen kann." },
      { Icon: Smile, label: "Bindung stärken", text: "Haut an Haut im warmen Wasser: Unsere Kurse fördern das Urvertrauen und die motorische Entwicklung deines Kindes." },
      { Icon: ShieldCheck, label: "Hygiene & Sicherheit", text: "Höchste Wasserqualität und speziell geschulte Kursleiter für Säuglinge und Kleinkinder." },
    ],
  },
  fitness: {
    title: "Warum Aqua-Fitness so effektiv ist",
    items: [
      { Icon: Activity, label: "Gelenkschonend", text: "Der Wasserauftrieb reduziert dein Körpergewicht auf 10%. Perfekt für ein intensives Training ohne Gelenkbelastung." },
      { Icon: Droplets, label: "Ganzkörper-Workout", text: "Der Wasserwiderstand trainiert Kraft, Ausdauer und Beweglichkeit gleichzeitig – deutlich effektiver als an Land." },
      { Icon: Users, label: "Gruppendynamik", text: "Mitreißende Musik und motivierende Trainer sorgen dafür, dass der Spaß beim Auspowern nie zu kurz kommt." },
    ],
  },
  reha: {
    title: "Professionelle Begleitung für deine Gesundheit",
    items: [
      { Icon: HeartPulse, label: "Medizinisch begleitet", text: "Unsere Therapeuten sind speziell für Rehabilitationssport im Wasser ausgebildet." },
      { Icon: FileText, label: "Kostenübernahme", text: "Unsere Kurse sind von den Krankenkassen anerkannt. Mit einer ärztlichen Verordnung ist die Teilnahme für dich oft kostenfrei." },
      { Icon: UserCheck, label: "Sanfter Aufbau", text: "Wir passen die Übungen individuell an deine Beschwerden an und bauen deine Mobilität behutsam wieder auf." },
    ],
  },
};

const WhySwim1 = ({ activeTab }: { activeTab: CourseTab }) => {
  const data = uspsByTab[activeTab];

  return (
    <section id="warum" className="py-16 md:py-32 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`usp-title-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
          >
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              {data.title}
            </h2>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`usp-items-${activeTab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {data.items.map((usp, i) => (
              <motion.div
                key={usp.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1B4F8A] flex items-center justify-center mb-6">
                  <usp.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{usp.label}</h3>
                <p className="text-slate-600 leading-relaxed">{usp.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhySwim1;

import { ShieldCheck, Award, Heart, Activity, Droplets, Users, HeartPulse, FileText, UserCheck, Shield, Baby } from "lucide-react";
import type { CourseTab } from "@/types/course";

type UspItem = { Icon: typeof Award; label: string; text: string };

export const uspsByTab: Record<CourseTab, { title: string; items: UspItem[] }> = {
  kinderschwimmen: {
    title: "Warum Eltern uns vertrauen",
    items: [
      { Icon: ShieldCheck, label: "Zertifizierte Trainer", text: "Unsere Trainer sind pädagogisch ausgebildet und wissen, wie man Kindern Schwimmen wirklich beibringt – mit Geduld, Methode und Wärme." },
      { Icon: Award, label: "Kleine Gruppen (Max. 6)", text: "Maximal 6 Kinder pro Gruppe. So kann jedes Kind in seinem eigenen Tempo lernen – und der Trainer hat immer ein Auge auf jedes einzelne." },
      { Icon: Heart, label: "Ein klarer Weg", text: "Vom Seepferdchen bis zum Goldabzeichen gibt es einen klaren, strukturierten Weg. Jeder Schritt zählt – und jeder Fortschritt wird gefeiert." },
    ],
  },
  wassergewoehnung: {
    title: "Warum Eltern uns vertrauen",
    items: [
      { Icon: Baby, label: "Auf die Entwicklung abgestimmt", text: "Unsere Kurse folgen dem natürlichen Entwicklungsrhythmus von Babys und Kleinkindern – kein Druck, dafür gezielte Förderung." },
      { Icon: Heart, label: "Bindung stärken", text: "Gemeinsam im Wasser sein ist mehr als ein Kurs. Es ist Zeit, die euch verbindet – und Vertrauen, das bleibt." },
      { Icon: ShieldCheck, label: "Warmes Wasser (32°C)", text: "32°C warmes Wasser – damit sich dein Kind von der ersten Sekunde an wohlfühlt." },
    ],
  },
  erwachsene: {
    title: "Warum Erwachsene sich bei uns wohlfühlen",
    items: [
      { Icon: Shield, label: "Geschützter Rahmen", text: "Kein öffentlicher Badebetrieb. Du lernst ungestört und ohne fremde Zuschauer in unseren privaten Becken." },
      { Icon: Users, label: "Kleine Gruppen", text: "Mit maximal 8 Teilnehmern kann sich unser Trainer intensiv um deine individuellen Bedürfnisse kümmern." },
      { Icon: Heart, label: "Einfühlsame Trainer", text: "Unsere Trainer sind speziell für Erwachsene ausgebildet und helfen dir, Ängste Schritt für Schritt abzubauen." },
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

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
      { Icon: Shield, label: "Geschützter Rahmen", text: "Eigene Becken, kein öffentlicher Badebetrieb, keine fremden Zuschauer. Du lernst in einem Umfeld, in dem du dich sicher fühlen kannst." },
      { Icon: Users, label: "Kleine Gruppen", text: "Maximal 8 Teilnehmer pro Kurs. So bleibt genug Raum für individuelle Begleitung – und niemand geht unter." },
      { Icon: Heart, label: "Einfühlsame Trainer", text: "Unsere Trainer wissen, dass Erwachsene andere Bedürfnisse haben als Kinder. Kein Druck, keine Ungeduld – dafür echte Unterstützung." },
    ],
  },
  fitness: {
    title: "Was Aquafitness bei Swim1 besonders macht",
    items: [
      { Icon: Activity, label: "Gelenkschonend", text: "Das Wasser trägt dich – buchstäblich. Der Auftrieb schont deine Gelenke, während du trotzdem deinen ganzen Körper trainierst." },
      { Icon: Droplets, label: "Wirkungsvolles Training", text: "Der Wasserwiderstand trainiert Kraft, Ausdauer und Beweglichkeit gleichzeitig. Effektiv – ohne dass es sich wie Arbeit anfühlt." },
      { Icon: Users, label: "Gemeinsam mehr Spaß", text: "In der Gruppe macht Bewegung mehr Spaß. Unsere Trainer bringen Energie mit – und du gehst jedes Mal mit einem guten Gefühl nach Hause." },
    ],
  },
  reha: {
    title: "Was du bei uns bekommst",
    items: [
      { Icon: HeartPulse, label: "Medizinisch begleitet", text: "Unsere Trainer sind speziell für Rehabilitationssport im Wasser ausgebildet – und passen die Übungen individuell an deine Situation an." },
      { Icon: FileText, label: "Kostenübernahme", text: "Mit ärztlicher Verordnung übernehmen die gesetzlichen Krankenkassen die Kosten. Wir helfen dir, den Weg dahin so einfach wie möglich zu machen." },
      { Icon: UserCheck, label: "Dein Tempo", text: "Kein Druck, kein Vergleich. Wir bauen deine Mobilität und Kraft in deinem Tempo wieder auf – Schritt für Schritt." },
    ],
  },
};

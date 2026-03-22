import type { CourseTab } from "@/types/course";
import type { LucideIcon } from "lucide-react";
import { Fish, Medal, Trophy, Sun, Baby, Users, LifeBuoy, Timer, Dumbbell, HeartPulse } from "lucide-react";

export const heroContent: Record<CourseTab, { video: string | string[]; headline: string; subtext: string }> = {
  kinderschwimmen: {
    video: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028281720/oNJkUzlVKWrdgGBV.mp4",
    headline: "Dein Kind lernt schwimmen. Sicher, geduldig und mit Spaß.",
    subtext: "Vom ersten mutigen Sprung bis zum stolzen Seepferdchen-Abzeichen. Unsere Trainer wissen genau, wie sie Kindern die Angst nehmen und Selbstvertrauen aufbauen.",
  },
  wassergewoehnung: {
    video: "https://videos.pexels.com/video-files/5888968/5888968-uhd_2560_1440_30fps.mp4",
    headline: "Wasser gemeinsam erleben. Von Anfang an.",
    subtext: "Der erste Kontakt mit dem Wasser ist ein besonderer Moment. In unseren Wassergewöhnungskursen geht es darum, das Element Wasser gemeinsam zu erleben und die Bindung zwischen dir und deinem Kind zu stärken. In warmem Wasser und ruhiger Atmosphäre schaffen wir spielerisch die Grundlage für erste motorische Fähigkeiten – ganz ohne Druck, dafür mit viel Vertrauen.",
  },
  erwachsene: {
    video: ["https://files.manuscdn.com/user_upload_by_module/session_file/310419663028281720/sLFSYxdJMAiQdOXX.mp4", "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028281720/jUDOvskOIkWiOmuC.mp4"],
    headline: "Es ist nie zu spät, sich im Wasser sicher zu fühlen.",
    subtext: "Egal, ob du deine Angst überwinden, von Grund auf neu lernen oder deine Technik perfektionieren möchtest – wir begleiten dich in einem geschützten, diskreten Rahmen.",
  },
  fitness: {
    video: "https://videos.pexels.com/video-files/8050098/8050098-hd_1920_1080_25fps.mp4",
    headline: "Fitness im Wasser. Für jeden.",
    subtext: "Gelenkschonend · Alle Level · Voller Freude und Energie in der Gruppe",
  },
  reha: {
    video: "https://videos.pexels.com/video-files/6539674/6539674-hd_1920_1080_25fps.mp4",
    headline: "Gesundheit beginnt im Wasser.",
    subtext: "Auf ärztliches Rezept · Krankenkassen-anerkannt · Medizinisch begleitet",
  },
};

export const courseSectionTitle: Record<CourseTab, string> = {
  kinderschwimmen: "Der Weg zum sicheren Schwimmer",
  wassergewoehnung: "Wassergewöhnung für die Kleinsten",
  erwachsene: "Schwimmkurse für Erwachsene",
  fitness: "Dein Workout im Wasser",
  reha: "Gesundheit und Mobilität fördern",
};

export type Course = {
  icon: LucideIcon;
  tag: string;
  name: string;
  text: string;
  details: string;
  highlights: string[];
};

export const coursesByTab: Record<CourseTab, Course[]> = {
  kinderschwimmen: [
    {
      icon: Fish, tag: "Abzeichen", name: "Seepferdchen",
      text: "Der wichtigste Meilenstein: Dein Kind lernt die Grundlagen des Brustschwimmens, das Tauchen und den mutigen Sprung vom Beckenrand.",
      details: "Im Seepferdchen-Kurs lernen Kinder ab 3,5 Jahren die Grundlagen des Schwimmens. Ziel ist es, 25 Meter ohne Hilfe zu schwimmen und einen Gegenstand aus schultertiefem Wasser zu holen.",
      highlights: ["Ab 3,5 Jahren", "Max. 6 Kinder pro Gruppe", "Inkl. Schwimmabzeichen"],
    },
    {
      icon: Medal, tag: "Abzeichen", name: "Bronze",
      text: "Aufbaukurs nach dem Seepferdchen. Dein Kind festigt seine Technik und erlangt das Bronzeabzeichen.",
      details: "Im Bronze-Kurs wird die Schwimmtechnik gefestigt. Dein Kind lernt 200 m in max. 15 Minuten zu schwimmen, vom Beckenrand zu springen und 2 m tief zu tauchen.",
      highlights: ["Nach Seepferdchen", "200 m Schwimmen", "Sprung & Tauchen"],
    },
    {
      icon: Medal, tag: "Abzeichen", name: "Silber",
      text: "Fortgeschrittener Kurs für sichere Schwimmer. Ausdauer und Technik auf dem Weg zum Silberabzeichen.",
      details: "Im Silber-Kurs trainieren Kinder Ausdauer und erweiterte Techniken. 400 m Schwimmen in max. 25 Minuten, 10 m Streckentauchen und ein Sprung aus 3 m Höhe gehören dazu.",
      highlights: ["400 m Schwimmen", "10 m Streckentauchen", "Sprung aus 3 m Höhe"],
    },
    {
      icon: Trophy, tag: "Abzeichen", name: "Gold",
      text: "Das höchste Jugendschwimmabzeichen. Für starke Schwimmer, die sich im Wasser zu Hause fühlen.",
      details: "Das Goldabzeichen ist die Königsdisziplin: 600 m in max. 24 Minuten, 25 m Streckentauchen und Transportschwimmen. Für Kinder, die echte Sicherheit im Wasser bewiesen haben.",
      highlights: ["600 m Schwimmen", "25 m Streckentauchen", "Transportschwimmen"],
    },
    {
      icon: Sun, tag: "Ferien", name: "Ferienintensivkurse",
      text: "Tägliche Kurseinheiten in den Schulferien für schnelle Fortschritte in kompakter Zeit.",
      details: "Jeden Tag eine Stunde Schwimmunterricht – ideal für schnelle Fortschritte in den Ferien. Ob Seepferdchen oder Aufbaukurs, hier wird intensiv und mit viel Spaß trainiert.",
      highlights: ["Tägliche Einheiten", "Alle Levels", "In den Schulferien"],
    },
  ],
  wassergewoehnung: [
    {
      icon: Baby, tag: "Ab 3 Monate", name: "Babyschwimmen",
      text: "Gemeinsame Zeit im warmen Wasser. Dein Baby lernt erste Bewegungen, baut Vertrauen auf und stärkt spielerisch seine Motorik.",
      details: "Babyschwimmen fördert die motorische Entwicklung und stärkt die Bindung zwischen Eltern und Kind. In 32 °C warmem Wasser entdecken Babys spielerisch das Element Wasser.",
      highlights: ["Ab 3 Monaten", "Mit Mama oder Papa", "32 °C Wassertemperatur"],
    },
    {
      icon: Users, tag: "Ab 1 Jahr", name: "Eltern-Kind-Kurse",
      text: "Gemeinsam mit Mama oder Papa das Wasser entdecken. Spaß und Sicherheit für Kleinkinder ab 1 Jahr.",
      details: "Kleinkinder ab 1 Jahr erkunden gemeinsam mit einem Elternteil das Wasser. Mit altersgerechten Spielen und Übungen wird Vertrauen aufgebaut und erste Schwimmbewegungen geübt.",
      highlights: ["Ab 1 Jahr", "Spielerisches Lernen", "Vertrauensaufbau im Wasser"],
    },
  ],
  erwachsene: [
    {
      icon: LifeBuoy, tag: "Für Anfänger", name: "Anfängerschwimmen",
      text: "Es ist nie zu spät, sich im Wasser sicher zu fühlen. Wir begleiten dich behutsam – ohne Druck, ohne Zuschauer.",
      details: "Der perfekte Einstieg für Erwachsene, die noch nicht schwimmen können oder Angst vor dem Wasser haben. In kleinen Gruppen und ohne Zuschauer lernst du die Grundlagen sicher und entspannt.",
      highlights: ["Kleine Gruppen (max. 8)", "Ohne Zuschauer", "Behutsamer Aufbau"],
    },
    {
      icon: Timer, tag: "Für Fortgeschrittene", name: "Technik",
      text: "Du kannst bereits schwimmen, möchtest aber deine Technik verbessern oder Kraulen lernen? Hier feilen wir an deiner Wasserlage und Ausdauer.",
      details: "Verbessere deine Schwimmtechnik gezielt: Kraulschwimmen, Wasserlage, Atmung und Ausdauer. Unser Trainer gibt dir individuelles Feedback für spürbare Fortschritte.",
      highlights: ["Kraul- & Brusttechnik", "Individuelles Feedback", "Für alle Fitnesslevel"],
    },
  ],
  fitness: [
    {
      icon: Dumbbell, tag: "Alle Level", name: "Aquafitness",
      text: "Gelenkschonendes Ganzkörper-Training im Wasser. Effektiv, motivierend, für jeden geeignet.",
      details: "Aquafitness bietet ein effektives Ganzkörper-Workout, das Gelenke schont und gleichzeitig Kraft, Ausdauer und Beweglichkeit trainiert. Ideal für alle, die Spaß an Bewegung im Wasser haben.",
      highlights: ["Gelenkschonend", "Max. 8 Teilnehmer", "Für jedes Fitnesslevel"],
    },
  ],
  reha: [
    {
      icon: HeartPulse, tag: "Auf Rezept", name: "Aquareha",
      text: "Medizinisches Training im Wasser nach Verletzungen oder bei Gelenkbeschwerden. Von allen gesetzlichen Krankenkassen anerkannt.",
      details: "Aquareha ist ein medizinisch begleitetes Rehabilitationstraining im Wasser. Es hilft bei Gelenkbeschwerden, nach Operationen oder Verletzungen – verordnungsfähig auf Rezept.",
      highlights: ["Auf ärztliches Rezept", "Krankenkassen-anerkannt", "Medizinisch begleitet"],
    },
  ],
};

export const gridClass: Record<CourseTab, string> = {
  kinderschwimmen: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto",
  wassergewoehnung: "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto",
  erwachsene: "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto",
  fitness: "grid-cols-1 max-w-lg mx-auto",
  reha: "grid-cols-1 max-w-lg mx-auto",
};

export const trustStats: Record<CourseTab, { value: string; label: string }[]> = {
  kinderschwimmen: [
    { value: "Ab 3,5 Jahre", label: "Kursstart" },
    { value: "Max. 6", label: "Kinder pro Gruppe" },
    { value: "32 °C", label: "Wassertemperatur" },
    { value: "Seepferdchen bis Gold", label: "Abzeichen" },
  ],
  wassergewoehnung: [
    { value: "Ab 3 Monate", label: "Kursstart" },
    { value: "Mit Elternteil", label: "Begleitung" },
    { value: "32 °C", label: "Wassertemperatur" },
    { value: "Spielerisch", label: "Methodik" },
  ],
  erwachsene: [
    { value: "Kleine Gruppen", label: "Max. 8 Personen" },
    { value: "Diskretes Umfeld", label: "Ohne Zuschauer" },
    { value: "32 °C", label: "Wassertemperatur" },
    { value: "Jedes Level", label: "Anfänger bis Technik" },
  ],
  fitness: [
    { value: "Alle Level", label: "Für jeden" },
    { value: "Max. 8", label: "Teilnehmer" },
    { value: "32 °C", label: "Wassertemperatur" },
    { value: "Gelenkschonend", label: "Trainingsform" },
  ],
  reha: [
    { value: "Auf Rezept", label: "Verordnungsfähig" },
    { value: "Von Kassen", label: "Anerkannt" },
    { value: "32 °C", label: "Wassertemperatur" },
    { value: "Medizinisch", label: "Begleitet" },
  ],
};

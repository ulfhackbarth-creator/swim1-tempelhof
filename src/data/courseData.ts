import type { CourseTab } from "@/types/course";
import type { LucideIcon } from "lucide-react";
import { Fish, Medal, Trophy, Sun, Baby, Users, LifeBuoy, Timer, Dumbbell, HeartPulse } from "lucide-react";

export const heroContent: Record<CourseTab, { video: string | string[]; mobileVideo?: string | string[]; poster?: string; mobilePoster?: string; headline: string; subtext: string }> = {
  kinderschwimmen: {
    video: "/videos/kinderschwimmen_desktop.mp4",
    poster: "/videos/kinderschwimmen_desktop_poster.jpg",
    headline: "Schwimmen lernen. Eine Fähigkeit fürs Leben.",
    subtext: "Ab 3,5 Jahren · Max. 6 Kinder · Vom Seepferdchen bis Gold",
  },
  wassergewoehnung: {
    video: "/videos/baby_kleinkinder_desktop.mp4",
    poster: "/videos/baby_kleinkinder_desktop_poster.jpg",
    headline: "Wasser gemeinsam erleben. Von Anfang an.",
    subtext: "Ab 3 Monaten · Mit Elternteil · Warmes Wasser, ruhige Atmosphäre",
  },
  erwachsene: {
    video: ["/videos/erwachsene_mobile.mp4", "/videos/erwachsene_desktop.mp4"],
    mobileVideo: ["/videos/erwachsene_mobile.mp4", "/videos/erwachsene_mobile.mp4"],
    poster: "/videos/erwachsene_mobile_poster.jpg",
    mobilePoster: "/videos/erwachsene_mobile_poster.jpg",
    headline: "Es ist nie zu spät, schwimmen zu lernen.",
    subtext: "Anfänger & Fortgeschrittene · Ohne Zuschauer · In deinem Tempo",
  },
  fitness: {
    video: "/videos/aquafitness_desktop.mp4",
    poster: "/videos/aquafitness_desktop_poster.jpg",
    headline: "Bewegung, die sich leicht anfühlt.",
    subtext: "Gelenkschonend · Alle Level · 32 °C warmes Wasser",
  },
  reha: {
    video: "/videos/aquareha_desktop.mp4",
    poster: "/videos/aquareha_desktop_poster.jpg",
    headline: "Zurück zu alter Stärke.",
    subtext: "Auf ärztliches Rezept · Krankenkassen-anerkannt · Medizinisch begleitet",
  },
};

export const courseSectionTitle: Record<CourseTab, string> = {
  kinderschwimmen: "Der Weg zum sicheren Schwimmer",
  wassergewoehnung: "Baby und Kleinkinder – unsere Kurse",
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
      text: "Der erste echte Schritt: Dein Kind lernt die Grundlagen des Schwimmens – Brustschwimmen, Tauchen, Sprung vom Beckenrand. Sicher und selbstbewusst.",
      details: "Im Seepferdchen-Kurs lernen Kinder ab 3,5 Jahren die Grundlagen des Schwimmens. Ziel ist es, 25 Meter ohne Hilfe zu schwimmen und einen Gegenstand aus schultertiefem Wasser zu holen.",
      highlights: ["Ab 3,5 Jahren", "Max. 6 Kinder pro Gruppe", "Inkl. Schwimmabzeichen"],
    },
    {
      icon: Medal, tag: "Abzeichen", name: "Bronze",
      text: "Technik festigen, Ausdauer aufbauen, Sicherheit im Wasser weiter stärken – auf dem Weg zum Bronzeabzeichen.",
      details: "Im Bronze-Kurs wird die Schwimmtechnik gefestigt. Dein Kind lernt 200 m in max. 15 Minuten zu schwimmen, vom Beckenrand zu springen und 2 m tief zu tauchen.",
      highlights: ["Nach Seepferdchen", "200 m Schwimmen", "Sprung & Tauchen"],
    },
    {
      icon: Medal, tag: "Abzeichen", name: "Silber",
      text: "Für Kinder, die bereits sicher schwimmen und ihre Fähigkeiten weiter ausbauen wollen. Richtung Silberabzeichen.",
      details: "Im Silber-Kurs trainieren Kinder Ausdauer und erweiterte Techniken. 400 m Schwimmen in max. 25 Minuten, 10 m Streckentauchen und ein Sprung aus 3 m Höhe gehören dazu.",
      highlights: ["400 m Schwimmen", "10 m Streckentauchen", "Sprung aus 3 m Höhe"],
    },
    {
      icon: Trophy, tag: "Abzeichen", name: "Gold",
      text: "Das Goldabzeichen ist mehr als ein Abzeichen – es ist der Beweis, dass dein Kind wirklich sicher und ausdauernd schwimmen kann.",
      details: "Das Goldabzeichen ist die Königsdisziplin: 600 m in max. 24 Minuten, 25 m Streckentauchen und Transportschwimmen. Für Kinder, die echte Sicherheit im Wasser bewiesen haben.",
      highlights: ["600 m Schwimmen", "25 m Streckentauchen", "Transportschwimmen"],
    },
    {
      icon: Sun, tag: "Ferien", name: "Ferienintensivkurse",
      text: "Intensiv, kompakt, effektiv: In den Schulferien täglich schwimmen – und in kurzer Zeit echte Fortschritte machen.",
      details: "Jeden Tag eine Stunde Schwimmunterricht – ideal für schnelle Fortschritte in den Ferien. Ob Seepferdchen oder Aufbaukurs, hier wird intensiv und mit viel Spaß trainiert.",
      highlights: ["Tägliche Einheiten", "Alle Levels", "In den Schulferien"],
    },
  ],
  wassergewoehnung: [
    {
      icon: Baby, tag: "Ab 3 Monate", name: "Babyschwimmen",
      text: "Dein Baby entdeckt das Wasser – in deiner Nähe, in warmem Wasser, in kleinen Gruppen. Gemeinsame Zeit, die Vertrauen schafft.",
      details: "Babyschwimmen fördert die motorische Entwicklung und stärkt die Bindung zwischen Eltern und Kind. In 32 °C warmem Wasser entdecken Babys spielerisch das Element Wasser.",
      highlights: ["Ab 3 Monaten", "Mit Mama oder Papa", "32 °C Wassertemperatur"],
    },
    {
      icon: Users, tag: "Ab 1 Jahr", name: "Eltern-Kind-Kurse",
      text: "Wasser erleben, Bindung stärken, erste Bewegungen üben – gemeinsam mit dir als Elternteil.",
      details: "Kleinkinder ab 1 Jahr erkunden gemeinsam mit einem Elternteil das Wasser. Mit altersgerechten Spielen und Übungen wird Vertrauen aufgebaut und erste Schwimmbewegungen geübt.",
      highlights: ["Ab 1 Jahr", "Spielerisches Lernen", "Vertrauensaufbau im Wasser"],
    },
  ],
  erwachsene: [
    {
      icon: LifeBuoy, tag: "Für Anfänger", name: "Anfängerschwimmen",
      text: "Du hast nie richtig schwimmen gelernt – oder es liegt lange zurück. Wir begleiten dich von Grund auf, ohne Druck und ohne Zuschauer.",
      details: "Der perfekte Einstieg für Erwachsene, die noch nicht schwimmen können oder Angst vor dem Wasser haben. In kleinen Gruppen und ohne Zuschauer lernst du die Grundlagen sicher und entspannt.",
      highlights: ["Kleine Gruppen (max. 8)", "Ohne Zuschauer", "Behutsamer Aufbau"],
    },
    {
      icon: Timer, tag: "Für Fortgeschrittene", name: "Technik",
      text: "Du schwimmst bereits, willst aber effizienter und sicherer werden. Wir arbeiten gezielt an Technik, Wasserlage und Ausdauer.",
      details: "Verbessere deine Schwimmtechnik gezielt: Kraulschwimmen, Wasserlage, Atmung und Ausdauer. Unser Trainer gibt dir individuelles Feedback für spürbare Fortschritte.",
      highlights: ["Kraul- & Brusttechnik", "Individuelles Feedback", "Für alle Fitnesslevel"],
    },
  ],
  fitness: [
    {
      icon: Dumbbell, tag: "Alle Level", name: "Aquafitness",
      text: "Bewegung im Wasser, die dir guttut. Gelenkschonend, in kleiner Gruppe, mit Trainern, die dabei sind.",
      details: "Aquafitness bietet ein effektives Ganzkörper-Workout, das Gelenke schont und gleichzeitig Kraft, Ausdauer und Beweglichkeit trainiert. Ideal für alle, die Spaß an Bewegung im Wasser haben.",
      highlights: ["Gelenkschonend", "Max. 8 Teilnehmer", "Für jedes Fitnesslevel"],
    },
  ],
  reha: [
    {
      icon: HeartPulse, tag: "Auf Rezept", name: "Aquareha",
      text: "Gezielte Bewegung im Wasser – nach Verletzungen, bei Gelenkbeschwerden oder auf ärztliche Empfehlung. Von den gesetzlichen Krankenkassen anerkannt.",
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

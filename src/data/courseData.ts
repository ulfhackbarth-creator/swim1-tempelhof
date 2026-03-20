import type { CourseTab } from "@/types/course";

export const heroContent: Record<CourseTab, { video: string; headline: string; subtext: string }> = {
  kinderschwimmen: {
    video: "https://videos.pexels.com/video-files/9044164/9044164-hd_1920_1080_30fps.mp4",
    headline: "Vom Seepferdchen bis zum Goldabzeichen.",
    subtext: "Kleine Gruppen · Zertifizierte Trainer · Bewährte Methodik",
  },
  wassergewoehnung: {
    video: "https://videos.pexels.com/video-files/5888971/5888971-hd_1920_1080_30fps.mp4",
    headline: "Sicher ins Wasser. Von Anfang an.",
    subtext: "Eltern-Kind-Kurse · Ab 2 Monate · 32°C warmes Wasser",
  },
  erwachsene: {
    video: "/videos/erwachsene-hero.mp4",
    headline: "Schwimmen lernen ist keine Frage des Alters.",
    subtext: "Ob kompletter Anfänger oder Technik-Feinschliff – lerne in kleiner Gruppe und geschütztem Rahmen schwimmen.",
  },
  fitness: {
    video: "https://videos.pexels.com/video-files/8050098/8050098-hd_1920_1080_25fps.mp4",
    headline: "Fitness im Wasser. Für jeden.",
    subtext: "Gelenkschonend · Alle Level · Viel Spaß in der Gruppe",
  },
  reha: {
    video: "https://videos.pexels.com/video-files/4115399/4115399-hd_1920_1080_25fps.mp4",
    headline: "Gesundheit beginnt im Wasser.",
    subtext: "Auf ärztliches Rezept · Krankenkassen-anerkannt · Medizinisch begleitet",
  },
};

export const courseSectionTitle: Record<CourseTab, string> = {
  kinderschwimmen: "Der Weg zum sicheren Schwimmer",
  wassergewoehnung: "Gemeinsam das Element Wasser entdecken",
  erwachsene: "Schwimmkurse für Erwachsene",
  fitness: "Dein Workout im Wasser",
  reha: "Gesundheit und Mobilität fördern",
};

type Course = { tag: string; name: string; text: string };

export const coursesByTab: Record<CourseTab, Course[]> = {
  kinderschwimmen: [
    { tag: "Kinder", name: "Seepferdchen", text: "Strukturierter Kurs für Kinder ab 3,5 Jahren. Schritt für Schritt zum ersten Schwimmabzeichen." },
    { tag: "Kinder", name: "Fortgeschrittene", text: "Aufbaukurse für Kinder mit Seepferdchen. Bronze, Silber und Gold — wir begleiten jeden Schritt." },
  ],
  wassergewoehnung: [
    { tag: "Ab 1,5 Monate", name: "Babyschwimmen", text: "Für Babys von 1,5 Monaten bis ca. 1,5 Jahre. Haut an Haut im 32°C warmen Wasser fördern wir das Urvertrauen und die motorische Entwicklung deines Kindes." },
    { tag: "Ab 1,5 Jahre", name: "Wassergewöhnung", text: "Für Kleinkinder von 1,5 bis 3,5 Jahren. Gemeinsam mit einem Elternteil entdecken wir spielerisch das Element Wasser und bereiten auf den ersten Schwimmkurs vor." },
  ],
  erwachsene: [
    { tag: "Für Anfänger", name: "Erwachsenenschwimmen Anfänger", text: "Überwinde deine Ängste im geschützten Rahmen. Wir gewöhnen dich behutsam ans Wasser und bringen dir die Grundlagen des Brustschwimmens bei." },
    { tag: "Für Fortgeschrittene", name: "Erwachsenenschwimmen Technik", text: "Du kannst bereits schwimmen, möchtest aber deine Technik verbessern oder Kraulen lernen? Hier feilen wir an deiner Wasserlage und Ausdauer." },
  ],
  fitness: [
    { tag: "Alle Level", name: "Aquafitness", text: "Gelenkschonendes Ganzkörper-Training im Wasser. Effektiv, motivierend, für jeden geeignet." },
  ],
  reha: [
    { tag: "Auf Rezept", name: "Aqua Reha", text: "Medizinisches Training im Wasser nach Verletzungen oder bei Gelenkbeschwerden." },
    { tag: "Prävention", name: "Aqua Prävention", text: "Krankenkassen-anerkannte Präventionskurse für Rücken, Gelenke und Herz-Kreislauf." },
  ],
};

export const gridClass: Record<CourseTab, string> = {
  kinderschwimmen: "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto",
  wassergewoehnung: "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto",
  erwachsene: "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto",
  fitness: "grid-cols-1 max-w-lg mx-auto",
  reha: "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto",
};

export const trustStats: Record<CourseTab, { value: string; label: string }[]> = {
  kinderschwimmen: [
    { value: "Ab 3,5 Jahre", label: "Kursstart" },
    { value: "Max. 6", label: "Kinder pro Gruppe" },
    { value: "Seepferdchen bis Gold", label: "Abzeichen" },
  ],
  wassergewoehnung: [
    { value: "Ab 2 Monate", label: "Kursstart" },
    { value: "32°C", label: "Warmes Wasser" },
    { value: "Eltern-Kind", label: "Kursformat" },
  ],
  erwachsene: [
    { value: "Kleine Gruppen", label: "Max. 8 Personen" },
    { value: "Diskretes Umfeld", label: "Ohne Zuschauer" },
    { value: "Jedes Level", label: "Anfänger bis Technik" },
  ],
  fitness: [
    { value: "Alle Level", label: "Für jeden" },
    { value: "Max. 8", label: "Teilnehmer" },
    { value: "Gelenkschonend", label: "Trainingsform" },
  ],
  reha: [
    { value: "Auf Rezept", label: "Verordnungsfähig" },
    { value: "Von Kassen", label: "Anerkannt" },
    { value: "Medizinisch", label: "Begleitet" },
  ],
};

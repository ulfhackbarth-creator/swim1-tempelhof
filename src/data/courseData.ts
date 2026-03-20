import type { CourseTab } from "@/types/course";

export const heroContent: Record<CourseTab, { video: string; headline: string; subtext: string }> = {
  kinderschwimmen: {
    video: "https://videos.pexels.com/video-files/9044164/9044164-hd_1920_1080_30fps.mp4",
    headline: "Vom Seepferdchen bis zum Goldabzeichen.",
    subtext: "Kleine Gruppen · Zertifizierte Trainer · Bewährte Methodik",
  },
  wassergewoehnung: {
    video: "https://videos.pexels.com/video-files/5888968/5888968-uhd_2560_1440_30fps.mp4",
    headline: "Erste Schritte im Wasser. Für die Kleinsten.",
    subtext: "Ab 3 Monaten · Mit Mama oder Papa · Spielerische Wassergewöhnung",
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
  wassergewoehnung: "Wassergewöhnung für die Kleinsten",
  erwachsene: "Schwimmkurse für Erwachsene",
  fitness: "Dein Workout im Wasser",
  reha: "Gesundheit und Mobilität fördern",
};

type Course = { tag: string; name: string; text: string };

export const coursesByTab: Record<CourseTab, Course[]> = {
  kinderschwimmen: [
    { tag: "Abzeichen", name: "Seepferdchen", text: "Strukturierter Kurs für Kinder ab 3,5 Jahren. Schritt für Schritt zum ersten Schwimmabzeichen." },
    { tag: "Abzeichen", name: "Bronze", text: "Aufbaukurs nach dem Seepferdchen. Dein Kind festigt seine Technik und erlangt das Bronzeabzeichen." },
    { tag: "Abzeichen", name: "Silber", text: "Fortgeschrittener Kurs für sichere Schwimmer. Ausdauer und Technik auf dem Weg zum Silberabzeichen." },
    { tag: "Abzeichen", name: "Gold", text: "Das höchste Jugendschwimmabzeichen. Für starke Schwimmer, die sich im Wasser zu Hause fühlen." },
    { tag: "Ferien", name: "Ferienintensivkurse", text: "Tägliche Kurseinheiten in den Schulferien für schnelle Fortschritte in kompakter Zeit." },
  ],
  wassergewoehnung: [
    { tag: "Ab 3 Monate", name: "Babyschwimmen", text: "Spielerische Wassergewöhnung für Babys ab 3 Monaten mit einem Elternteil. Fördert Motorik und Bindung." },
    { tag: "Ab 1 Jahr", name: "Eltern-Kind-Kurse", text: "Gemeinsam mit Mama oder Papa das Wasser entdecken. Spaß und Sicherheit für Kleinkinder ab 1 Jahr." },
  ],
  erwachsene: [
    { tag: "Für Anfänger", name: "Anfängerschwimmen", text: "Überwinde deine Ängste im geschützten Rahmen. Wir gewöhnen dich behutsam ans Wasser und bringen dir die Grundlagen des Brustschwimmens bei." },
    { tag: "Für Fortgeschrittene", name: "Technik", text: "Du kannst bereits schwimmen, möchtest aber deine Technik verbessern oder Kraulen lernen? Hier feilen wir an deiner Wasserlage und Ausdauer." },
  ],
  fitness: [
    { tag: "Alle Level", name: "Aquafitness", text: "Gelenkschonendes Ganzkörper-Training im Wasser. Effektiv, motivierend, für jeden geeignet." },
  ],
  reha: [
    { tag: "Auf Rezept", name: "Aquareha", text: "Medizinisches Training im Wasser nach Verletzungen oder bei Gelenkbeschwerden. Von allen gesetzlichen Krankenkassen anerkannt." },
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
    { value: "Seepferdchen bis Gold", label: "Abzeichen" },
  ],
  wassergewoehnung: [
    { value: "Ab 3 Monate", label: "Kursstart" },
    { value: "Mit Elternteil", label: "Begleitung" },
    { value: "32 °C", label: "Wassertemperatur" },
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

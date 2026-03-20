import type { CourseTab } from "@/types/course";

type Testimonial = { text: string; name: string; location: string };

export const testimonialsByTab: Record<CourseTab, { title: string; items: Testimonial[] }> = {
  kinderschwimmen: {
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
  erwachsene: {
    title: "Das sagen unsere erwachsenen Teilnehmer",
    items: [
      { text: "Ich habe mich mit 45 Jahren endlich getraut. Der Trainer war unglaublich geduldig. Ich fühle mich jetzt sicher im Wasser.", name: "Markus T.", location: "Berlin-Tempelhof" },
      { text: "Der Technikkurs war genau das, was ich gesucht habe. Mein Kraulstil hat sich in nur 10 Wochen extrem verbessert!", name: "Sarah W.", location: "Schwerin" },
      { text: "Tolle Atmosphäre, weil das Bad nicht öffentlich ist. Man ist wirklich unter sich und muss sich für nichts schämen.", name: "Thomas H.", location: "Wildau" },
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

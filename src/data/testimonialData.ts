import type { CourseTab } from "@/types/course";

type Testimonial = { text: string; name: string; location: string };

export const testimonialsByTab: Record<CourseTab, { title: string; items: Testimonial[] }> = {
  kinderschwimmen: {
    title: "Das sagen andere Eltern",
    items: [
      { text: "Mia hatte panische Angst, wenn auch nur ein Tropfen Wasser in ihr Gesicht kam. Nach nur sechs Wochen bei Swim1 springt sie lachend vom Beckenrand. Die Trainer haben ein echtes Wunder vollbracht.", name: "Sarah T.", location: "Mutter von Mia (4)" },
      { text: "Beide Kinder haben hier schwimmen gelernt – vom Seepferdchen bis Gold. Die Geduld und Herzlichkeit der Trainer hat uns als Familie tief beeindruckt.", name: "Julia R.", location: "Mutter von Lina (6) und Tom (8)" },
      { text: "Unser Sohn hatte null Vertrauen ins Wasser. Heute schwimmt er seine Bahnen allein. Dieses Selbstvertrauen ist unbezahlbar.", name: "Michael T.", location: "Vater von Jonas (5)" },
    ],
  },
  wassergewoehnung: {
    title: "Das sagen andere Eltern",
    items: [
      { text: "Das 32 Grad warme Wasser ist ein Traum. Unser Sohn liebt die ruhige Atmosphäre und wir als Eltern fühlen uns in jeder Sekunde sicher aufgehoben. Ein Highlight unserer Woche.", name: "Julian M.", location: "Vater von Leo (1)" },
      { text: "Die Kursleiterin geht so liebevoll mit den Kleinen um. Unsere Tochter strahlt jedes Mal, wenn sie ins Wasser darf. Eine wunderbare Erfahrung für uns beide.", name: "Anna S.", location: "Mutter von Emma (8 Monate)" },
      { text: "Toll, wie spielerisch die Wassergewöhnung abläuft. Man merkt, dass die Trainer echte Erfahrung mit Babys haben und jedes Kind individuell begleiten.", name: "Carolin F.", location: "Mutter von Leni (14 Monate)" },
    ],
  },
  erwachsene: {
    title: "Das sagen unsere erwachsenen Teilnehmer",
    items: [
      { text: "Ich habe mich mit 45 Jahren endlich getraut, richtig schwimmen zu lernen. Die Geduld und Diskretion des Trainers haben mir vom ersten Tag an die Scham genommen.", name: "Michael K.", location: "Anfängerkurs" },
      { text: "Der Technikkurs war genau das, was ich gesucht habe. Mein Kraulstil hat sich enorm verbessert – und das in einem Umfeld, in dem man sich wirklich wohlfühlt.", name: "Sarah W.", location: "Technikkurs" },
      { text: "Die geschützte Atmosphäre ohne Zuschauer war für mich entscheidend. Hier konnte ich endlich ohne Scham lernen. Das hat mein Leben verändert.", name: "Thomas H.", location: "Anfängerkurs" },
    ],
  },
  fitness: {
    title: "Das sagen unsere Teilnehmer",
    items: [
      { text: "Ich hätte nie gedacht, dass Training im Wasser so intensiv sein kann! Nach jeder Stunde fühle ich mich großartig – und meine Gelenke danken es mir.", name: "Martina S.", location: "Aquafitness" },
      { text: "Wegen meiner Knieprobleme kann ich nicht mehr joggen. Aquafitness gibt mir die Bewegung zurück, die ich so vermisst habe – voller Freude.", name: "Peter W.", location: "Aquafitness" },
      { text: "Die Trainerin bringt so viel Energie mit. Man merkt gar nicht, wie die Zeit vergeht. Sport mit Spaß – genau das hat mir gefehlt.", name: "Elena K.", location: "Aquafitness" },
    ],
  },
  reha: {
    title: "Erfahrungen unserer Patienten",
    items: [
      { text: "Nach meiner Hüft-OP war das Training im Wasser die Rettung. Ich konnte Bewegungen machen, die an Land undenkbar waren. Die Therapeuten haben mich Schritt für Schritt begleitet.", name: "Klaus D.", location: "Aqua Reha" },
      { text: "Meine Rückenschmerzen sind durch den Kurs deutlich besser geworden. Die individuelle Betreuung gibt mir das Vertrauen, dass ich in guten Händen bin.", name: "Renate H.", location: "Aqua Reha" },
      { text: "Von der ersten Verordnung bis zur letzten Stunde – ich habe mich hier sicher und gut aufgehoben gefühlt. Echte Fürsorge.", name: "Dieter M.", location: "Aqua Reha" },
    ],
  },
};

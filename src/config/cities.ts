export interface CityConfig {
  slug: string;
  cityName: string;
  locationLabel: string; // e.g. "Berlin-Tempelhof" or "Schwerin"
  heroTagline: string;
  heroHeading: string;
  heroSubtext: string;
  locationBenefit: {
    title: string;
    description: string;
  };
  aboutUsText: string;
  faqLocationAnswer: string;
  testimonials: {
    name: string;
    location: string;
    text: string;
    course: string;
  }[];
  waitlistCount: string; // e.g. "120+"
  metaTitle: string;
  metaDescription: string;
}

export const cityConfigs: Record<string, CityConfig> = {
  tempelhof: {
    slug: "tempelhof",
    cityName: "Berlin-Tempelhof",
    locationLabel: "SWIM1 in Berlin-Tempelhof",
    heroTagline: "SWIM1 in Berlin-Tempelhof",
    heroHeading: "Willkommen bei Swim1 in Berlin-Tempelhof.",
    heroSubtext:
      "Deine Premium-Schwimmschule direkt vor Ort. Entdecke unsere Kurse für Kinder und Erwachsene in einer familiären, sicheren Atmosphäre.",
    locationBenefit: {
      title: "Zentral erreichbar",
      description: "Direkt am S+U Tempelhof",
    },
    aboutUsText:
      "Wir sind ein erfahrenes Schwimmschul-Team mit Leidenschaft für sichere und effektive Schwimmausbildung. Mit mehreren Standorten in Berlin bringen wir unsere Expertise nun auch an den Tempelhofer Hafen.",
    faqLocationAnswer:
      "Der Standort befindet sich am Tempelhofer Hafen in Berlin, optimal erreichbar mit S+U Tempelhof.",
    testimonials: [
      {
        name: "Sarah T.",
        location: "Mutter von Mia (4)",
        text: "Mia hatte panische Angst, wenn auch nur ein Tropfen Wasser in ihr Gesicht kam. Nach nur sechs Wochen bei Swim1 springt sie lachend vom Beckenrand. Die Trainer haben ein echtes Wunder vollbracht.",
        course: "Kinderschwimmen",
      },
      {
        name: "Julian M.",
        location: "Vater von Leo (1)",
        text: "Das 32 Grad warme Wasser ist ein Traum. Unser Sohn liebt die ruhige Atmosphäre und wir als Eltern fühlen uns in jeder Sekunde sicher aufgehoben. Ein Highlight unserer Woche.",
        course: "Wassergewöhnung",
      },
      {
        name: "Michael K.",
        location: "Anfängerkurs",
        text: "Ich habe mich mit 45 Jahren endlich getraut, richtig schwimmen zu lernen. Die Geduld und Diskretion des Trainers haben mir vom ersten Tag an die Scham genommen.",
        course: "Erwachsenenschwimmen",
      },
    ],
    waitlistCount: "120+",
    metaTitle: "Schwimmkurse Tempelhofer Hafen Berlin – Warteliste",
    metaDescription:
      "Trag dich jetzt unverbindlich auf die Warteliste für Schwimmkurse am Tempelhofer Hafen ein. Kinder-Schwimmkurse, Wassergewöhnung, Erwachsene & Aquafitness.",
  },
  schwerin: {
    slug: "schwerin",
    cityName: "Schwerin",
    locationLabel: "SWIM1 im Schlosspark-Center Schwerin",
    heroTagline: "SWIM1 im Schlosspark-Center Schwerin",
    heroHeading: "Willkommen bei Swim1 in Schwerin.",
    heroSubtext:
      "Deine Premium-Schwimmschule direkt vor Ort. Entdecke unsere Kurse für Kinder und Erwachsene in einer familiären, sicheren Atmosphäre.",
    locationBenefit: {
      title: "Im Schlosspark-Center",
      description: "Zentral in Schwerin – mit Parkplätzen & bester Anbindung",
    },
    aboutUsText:
      "SWIM1 steht für sichere, liebevolle und professionelle Schwimmausbildung. Mit bewährten Konzepten aus Berlin bringen wir unsere Erfahrung jetzt ins Schlosspark-Center Schwerin – für Familien aus Schwerin und Umgebung.",
    faqLocationAnswer:
      "Unser neuer Standort befindet sich im Schlosspark-Center Schwerin, zentral gelegen mit guter Anbindung und ausreichend Parkmöglichkeiten.",
    testimonials: [
      {
        name: "Sarah T.",
        location: "Mutter von Mia (4)",
        text: "Mia hatte panische Angst, wenn auch nur ein Tropfen Wasser in ihr Gesicht kam. Nach nur sechs Wochen bei Swim1 springt sie lachend vom Beckenrand. Die Trainer haben ein echtes Wunder vollbracht.",
        course: "Kinderschwimmen",
      },
      {
        name: "Julian M.",
        location: "Vater von Leo (1)",
        text: "Das 32 Grad warme Wasser ist ein Traum. Unser Sohn liebt die ruhige Atmosphäre und wir als Eltern fühlen uns in jeder Sekunde sicher aufgehoben. Ein Highlight unserer Woche.",
        course: "Wassergewöhnung",
      },
      {
        name: "Michael K.",
        location: "Anfängerkurs",
        text: "Ich habe mich mit 45 Jahren endlich getraut, richtig schwimmen zu lernen. Die Geduld und Diskretion des Trainers haben mir vom ersten Tag an die Scham genommen.",
        course: "Erwachsenenschwimmen",
      },
    ],
    waitlistCount: "80+",
    metaTitle: "Schwimmkurse Schwerin – Schlosspark-Center | SWIM1 Warteliste",
    metaDescription:
      "SWIM1 eröffnet im Schlosspark-Center Schwerin! Sichere dir jetzt einen Platz auf der Warteliste für Kinder-Schwimmkurse, Wassergewöhnung, Erwachsenenkurse & Aquafitness.",
  },
  wildau: {
    slug: "wildau",
    cityName: "Wildau",
    locationLabel: "SWIM1 im A10 Center Wildau",
    heroTagline: "SWIM1 im A10 Center Wildau",
    heroHeading: "Willkommen bei Swim1 in Wildau.",
    heroSubtext:
      "Deine Premium-Schwimmschule direkt vor Ort. Entdecke unsere Kurse für Kinder und Erwachsene in einer familiären, sicheren Atmosphäre.",
    locationBenefit: {
      title: "Im A10 Center",
      description: "Zentral in Wildau – mit Parkplätzen & bester Anbindung",
    },
    aboutUsText:
      "SWIM1 steht für sichere, liebevolle und professionelle Schwimmausbildung. Mit bewährten Konzepten aus Berlin bringen wir unsere Erfahrung jetzt ins A10 Center Wildau – für Familien aus Wildau und Umgebung.",
    faqLocationAnswer:
      "Unser neuer Standort befindet sich im A10 Center Wildau, zentral gelegen mit guter Anbindung und ausreichend Parkmöglichkeiten.",
    testimonials: [
      {
        name: "Sarah T.",
        location: "Mutter von Mia (4)",
        text: "Mia hatte panische Angst, wenn auch nur ein Tropfen Wasser in ihr Gesicht kam. Nach nur sechs Wochen bei Swim1 springt sie lachend vom Beckenrand. Die Trainer haben ein echtes Wunder vollbracht.",
        course: "Kinderschwimmen",
      },
      {
        name: "Julian M.",
        location: "Vater von Leo (1)",
        text: "Das 32 Grad warme Wasser ist ein Traum. Unser Sohn liebt die ruhige Atmosphäre und wir als Eltern fühlen uns in jeder Sekunde sicher aufgehoben. Ein Highlight unserer Woche.",
        course: "Wassergewöhnung",
      },
      {
        name: "Michael K.",
        location: "Anfängerkurs",
        text: "Ich habe mich mit 45 Jahren endlich getraut, richtig schwimmen zu lernen. Die Geduld und Diskretion des Trainers haben mir vom ersten Tag an die Scham genommen.",
        course: "Erwachsenenschwimmen",
      },
    ],
    waitlistCount: "50+",
    metaTitle: "Schwimmkurse Wildau – A10 Center | SWIM1 Warteliste",
    metaDescription:
      "SWIM1 eröffnet im A10 Center Wildau! Sichere dir jetzt einen Platz auf der Warteliste für Kinder-Schwimmkurse, Wassergewöhnung, Erwachsenenkurse & Aquafitness.",
  },
  bremen: {
    slug: "bremen",
    cityName: "Bremen",
    locationLabel: "SWIM1 in der Waterfront Bremen",
    heroTagline: "SWIM1 in der Waterfront Bremen",
    heroHeading: "Willkommen bei Swim1 in Bremen.",
    heroSubtext:
      "Deine Premium-Schwimmschule direkt vor Ort. Entdecke unsere Kurse für Kinder und Erwachsene in einer familiären, sicheren Atmosphäre.",
    locationBenefit: {
      title: "In der Waterfront",
      description: "Zentral in Bremen – mit Parkplätzen & bester Anbindung",
    },
    aboutUsText:
      "SWIM1 steht für sichere, liebevolle und professionelle Schwimmausbildung. Mit bewährten Konzepten aus Berlin bringen wir unsere Erfahrung jetzt in die Waterfront Bremen – für Familien aus Bremen und Umgebung.",
    faqLocationAnswer:
      "Unser neuer Standort befindet sich in der Waterfront Bremen, zentral gelegen mit guter Anbindung und ausreichend Parkmöglichkeiten.",
    testimonials: [
      {
        name: "Laura M.",
        location: "Bremen-Mitte",
        text: "Wir freuen uns riesig, dass SWIM1 nach Bremen kommt! Endlich eine professionelle Schwimmschule mit warmem Wasser direkt vor der Haustür.",
        course: "Seepferdchenkurs",
      },
      {
        name: "Stefan K.",
        location: "Bremen-Nord",
        text: "Meine Kinder lieben Wasser und wir haben lange nach einem guten Kursangebot in Bremen gesucht. SWIM1 klingt perfekt!",
        course: "Wassergewöhnung",
      },
      {
        name: "Maria S.",
        location: "Bremen-Ost",
        text: "Toll, dass es bald auch Aquafitness in der Waterfront Bremen gibt. Ich bin schon auf der Warteliste – kann es kaum erwarten!",
        course: "Aquafitness",
      },
    ],
    waitlistCount: "60+",
    metaTitle: "Schwimmkurse Bremen – Waterfront | SWIM1 Warteliste",
    metaDescription:
      "SWIM1 eröffnet in der Waterfront Bremen! Sichere dir jetzt einen Platz auf der Warteliste für Kinder-Schwimmkurse, Wassergewöhnung, Erwachsenenkurse & Aquafitness.",
  },
};

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
    heroHeading: "Sichere dir einen der begehrten Plätze am Tempelhofer Hafen!",
    heroSubtext:
      "Die Nachfrage ist hoch. Trag dich in die kostenlose Warteliste ein und erhalte 48 Stunden vor allen anderen Zugriff auf die Kursbuchung.",
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
        name: "Sandra M.",
        location: "Tempelhof",
        text: "Meine Tochter hatte anfangs große Angst vor dem Wasser. Die Trainer sind unglaublich geduldig und am Ende hat sie ihr Seepferdchen geschafft!",
        course: "Seepferdchenkurs",
      },
      {
        name: "Thomas K.",
        location: "Neukölln",
        text: "Endlich eine Schwimmschule mit warmem Wasser! Mein Sohn (2 Jahre) liebt die Wassergewöhnung. Kleine Gruppen, tolle Atmosphäre.",
        course: "Wassergewöhnung",
      },
      {
        name: "Julia R.",
        location: "Kreuzberg",
        text: "Beide Kinder haben hier schwimmen gelernt – vom Seepferdchen bis Gold. Professionell, herzlich und immer zuverlässig. Absolute Empfehlung!",
        course: "Fortgeschrittenenkurse",
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
    heroHeading: "Schwimmkurse für die ganze Familie – jetzt in Schwerin!",
    heroSubtext:
      "SWIM1 eröffnet im Schlosspark-Center Schwerin. Trag dich kostenlos auf die Warteliste ein und sichere dir 48 Stunden vor allen anderen Zugriff auf die Kursbuchung.",
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
        name: "Kathrin L.",
        location: "Schwerin",
        text: "Wir freuen uns riesig, dass SWIM1 nach Schwerin kommt! Endlich eine professionelle Schwimmschule mit warmem Wasser direkt vor der Haustür.",
        course: "Seepferdchenkurs",
      },
      {
        name: "Marco W.",
        location: "Schwerin-Lankow",
        text: "Meine Kinder lieben Wasser und wir haben lange nach einem guten Kursangebot in Schwerin gesucht. SWIM1 klingt perfekt!",
        course: "Wassergewöhnung",
      },
      {
        name: "Anne S.",
        location: "Schwerin-Weststadt",
        text: "Toll, dass es bald auch Aquafitness im Schlosspark-Center gibt. Ich bin schon auf der Warteliste – kann es kaum erwarten!",
        course: "Aquafitness",
      },
    ],
    waitlistCount: "80+",
    metaTitle: "Schwimmkurse Schwerin – Schlosspark-Center | SWIM1 Warteliste",
    metaDescription:
      "SWIM1 eröffnet im Schlosspark-Center Schwerin! Sichere dir jetzt einen Platz auf der Warteliste für Kinder-Schwimmkurse, Wassergewöhnung, Erwachsenenkurse & Aquafitness.",
  },
};

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
    locationLabel: "SWIM1 in Schwerin",
    heroTagline: "SWIM1 in Schwerin",
    heroHeading: "Sichere dir einen der begehrten Plätze in Schwerin!",
    heroSubtext:
      "Die Nachfrage ist hoch. Trag dich in die kostenlose Warteliste ein und erhalte 48 Stunden vor allen anderen Zugriff auf die Kursbuchung.",
    locationBenefit: {
      title: "Zentral in Schwerin",
      description: "Gut erreichbar im Herzen der Stadt",
    },
    aboutUsText:
      "Wir sind ein erfahrenes Schwimmschul-Team mit Leidenschaft für sichere und effektive Schwimmausbildung. Nach erfolgreichen Standorten in Berlin bringen wir unsere Expertise nun auch nach Schwerin.",
    faqLocationAnswer:
      "Unser neuer Standort befindet sich zentral in Schwerin. Die genaue Adresse geben wir vor Kursstart bekannt.",
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
    waitlistCount: "80+",
    metaTitle: "Schwimmkurse Schwerin – Warteliste | SWIM1",
    metaDescription:
      "Trag dich jetzt unverbindlich auf die Warteliste für Schwimmkurse in Schwerin ein. Kinder-Schwimmkurse, Wassergewöhnung, Erwachsene & Aquafitness.",
  },
};

export interface Standort {
  name: string;
  address: string;
  route: string;
  status: "active" | "coming-soon";
}

export const standorte: Standort[] = [
  { name: "Berlin-Tempelhof", address: "Ringbahnstraße 12, 12099 Berlin", route: "/standorte/berlin-tempelhof", status: "active" },
  { name: "Schwerin", address: "Wittenburger Chaussee 25, 19059 Schwerin", route: "/schwerin", status: "coming-soon" },
  { name: "Wildau", address: "Adresse folgt in Kürze", route: "/wildau", status: "coming-soon" },
  { name: "Bremen", address: "Adresse folgt in Kürze", route: "/bremen", status: "coming-soon" },
];

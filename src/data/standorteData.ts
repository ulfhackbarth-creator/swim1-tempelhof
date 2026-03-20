export interface Standort {
  name: string;
  address: string;
  route: string;
  status: "active" | "coming-soon";
  features: string[];
}

export const standorte: Standort[] = [
  { name: "Berlin-Tempelhof", address: "Ringbahnstraße 12, 12099 Berlin", route: "/standorte/berlin-tempelhof", status: "active", features: ["32 °C Wasser", "Parkplätze", "Alle Kurse"] },
  { name: "Schwerin", address: "Wittenburger Chaussee 25, 19059 Schwerin", route: "/schwerin", status: "coming-soon", features: ["32 °C Wasser", "Zentrale Lage"] },
  { name: "Wildau", address: "A10 Center Wildau", route: "/wildau", status: "coming-soon", features: ["32 °C Wasser", "Parkplätze"] },
  { name: "Bremen", address: "Waterfront Bremen", route: "/bremen", status: "coming-soon", features: ["32 °C Wasser", "Zentrale Lage"] },
];

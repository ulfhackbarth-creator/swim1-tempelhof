export interface Standort {
  name: string;
  center: string;
  address: string;
  route: string;
  status: "active" | "coming-soon";
  features: string[];
}

export const standorte: Standort[] = [
  { name: "Berlin-Tempelhof", center: "Tempelhofer Hafen", address: "Ordensmeisterstr. 1–3, 12099 Berlin", route: "/standorte/berlin-tempelhof", status: "active", features: ["32 °C Wasser", "Parkplätze", "Alle Kurse"] },
  { name: "Schwerin", center: "Schlosspark-Center", address: "Marienplatz 5–6, 19053 Schwerin", route: "/standorte/schwerin", status: "coming-soon", features: ["32 °C Wasser", "Zentrale Lage"] },
  { name: "Wildau", center: "A10 Center", address: "Chausseestr. 1, 15745 Wildau", route: "/standorte/wildau", status: "coming-soon", features: ["32 °C Wasser", "Parkplätze"] },
  { name: "Bremen", center: "Roland Center", address: "AG-Weser-Str. 3, 28237 Bremen", route: "/standorte/bremen", status: "coming-soon", features: ["32 °C Wasser", "Zentrale Lage"] },
  { name: "Erlangen", center: "Weidenweg", address: "Weidenweg 1, 91058 Erlangen", route: "/standorte/erlangen", status: "coming-soon", features: ["32 °C Wasser", "Parkplätze", "Alle Kurse"] },
];

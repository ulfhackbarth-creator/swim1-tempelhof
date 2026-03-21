import { MapPin, Train, Clock, Car } from "lucide-react";
import LocationPageTemplate from "@/components/standorte/LocationPageTemplate";
import type { LocationConfig } from "@/components/standorte/LocationPageTemplate";

const config: LocationConfig = {
  slug: "berlin-tempelhof",
  displayName: "Berlin-Tempelhof",
  heroHeadline: "Swim1 Schwimmschule in Berlin-Tempelhof",
  heroVideos: [
    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028281720/gBnQiwwnZrqJaDTm.mp4",
  ],
  address: {
    streetAddress: "Ordensmeisterstr. 1–3",
    addressLocality: "Berlin",
    postalCode: "12099",
  },
  geoText: "Unser Standort im Tempelhofer Hafen ist ideal erreichbar für Familien aus Tempelhof, Neukölln, Kreuzberg und Mariendorf. Dank der direkten Anbindung an die U6 und kostenlosen Parkplätzen sind wir deine zentrale Schwimmschule im Berliner Süden.",
  locationInfo: [
    { icon: MapPin, title: "Adresse", text: "Tempelhofer Hafen, Ordensmeisterstr. 1–3, 12099 Berlin" },
    { icon: Train, title: "ÖPNV", text: "S+U Tempelhof, 3 Min. Fußweg" },
    { icon: Clock, title: "Öffnungszeiten", text: "Mo–Fr 07:00–21:00 · Sa–So 08:00–18:00" },
    { icon: Car, title: "Kostenlose Parkplätze", text: "Direkt vor der Tür" },
  ],
  testimonials: [
    { name: "Sandra M.", location: "Tempelhof", text: "Meine Tochter hatte anfangs große Angst vor dem Wasser. Die Trainer sind unglaublich geduldig und am Ende hat sie ihr Seepferdchen geschafft!", course: "Seepferdchenkurs", stars: 5 },
    { name: "Thomas K.", location: "Neukölln", text: "Endlich eine Schwimmschule mit warmem Wasser! Mein Sohn liebt die Wassergewöhnung. Kleine Gruppen, tolle Atmosphäre.", course: "Wassergewöhnung", stars: 5 },
    { name: "Julia R.", location: "Kreuzberg", text: "Beide Kinder haben hier schwimmen gelernt – vom Seepferdchen bis Gold. Professionell, herzlich und immer zuverlässig.", course: "Fortgeschrittenenkurse", stars: 5 },
  ],
  faqs: [
    { q: "Was muss ich zum ersten Termin mitbringen?", a: "Badekleidung, Handtuch, Badelatschen und für Kinder ggf. eine Schwimmwindel. Föhns und Umkleiden sind vorhanden." },
    { q: "Darf ich beim Kurs zuschauen?", a: "Bei Kinderkursen gibt es einen Eltern-Wartebereich mit Blick auf das Becken. Bei Erwachsenenkursen ist das Bad ohne Zuschauer – für ein entspanntes Lernumfeld." },
    { q: "Ist die Eintragung verbindlich?", a: "Nein, die Warteliste ist zu 100 % unverbindlich und kostenlos. Du gehst keinerlei Verpflichtung ein." },
    { q: "Werden die Kosten von der Krankenkasse übernommen?", a: "Für unsere zertifizierten Aqua Reha Kurse übernehmen alle gesetzlichen Krankenkassen die Kosten bei Vorlage eines ärztlichen Rezepts." },
    { q: "Wann startet der Standort?", a: "Eröffnung zur Saison 2026 – sobald der genaue Starttermin feststeht, informieren wir alle Wartelisten-Teilnehmer als Erste." },
  ],
  waitlistCount: "120+",
  metaTitle: "Schwimmschule Berlin-Tempelhof | Kurse & Warteliste | SWIM1",
  metaDescription: "Deine Premium Schwimmschule in Berlin-Tempelhof. Jetzt unverbindlich auf die Warteliste für Kinderschwimmen, Babyschwimmen und Erwachsenenkurse eintragen.",
};

const BerlinTempelhof = () => <LocationPageTemplate config={config} />;

export default BerlinTempelhof;

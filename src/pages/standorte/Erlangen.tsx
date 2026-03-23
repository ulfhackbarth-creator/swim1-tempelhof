import { MapPin, Train, Clock, Car } from "lucide-react";
import LocationPageTemplate from "@/components/standorte/LocationPageTemplate";
import type { LocationConfig } from "@/components/standorte/LocationPageTemplate";

const config: LocationConfig = {
  slug: "erlangen",
  displayName: "Erlangen",
  heroHeadline: "SWIM1 – Deine Schwimmschule in Erlangen",
  heroVideos: ["/videos/standort_desktop.mp4"],
  heroPoster: "/videos/standort_desktop_poster.jpg",
  address: {
    streetAddress: "Weidenweg 1",
    addressLocality: "Erlangen",
    postalCode: "91058",
  },
  geoText: "Unser Standort im Weidenweg – gut erreichbar für Familien aus Erlangen, Büchenbach, Bruck und dem gesamten Erlanger Stadtgebiet. Kostenlose Parkplätze, warmes Wasser. Alles, was du brauchst, um anzufangen.",
  locationInfo: [
    { icon: MapPin, title: "Adresse", text: "Weidenweg 9, 91058 Erlangen" },
    { icon: Train, title: "ÖPNV", text: "Bushaltestelle Weidenweg, ca. 3 Min. Fußweg" },
    { icon: Clock, title: "Öffnungszeiten", text: "Mo–Fr 07:00–21:00 · Sa–So 08:00–18:00" },
    { icon: Car, title: "Kostenlose Parkplätze", text: "Direkt vor der Tür" },
  ],
  testimonials: [
    { name: "Lisa M.", location: "Erlangen-Büchenbach", text: "Endlich eine Schwimmschule in Erlangen, die wirklich auf die Kinder eingeht. Meine Tochter hatte Angst vor dem Wasser – jetzt springt sie selbst rein.", course: "Seepferdchenkurs", stars: 5 },
    { name: "Felix K.", location: "Erlangen-Bruck", text: "Warmes Wasser, kleine Gruppen, tolle Trainer. Genau das, was wir gesucht haben. Unser Sohn freut sich jede Woche auf den Kurs.", course: "Wassergewöhnung", stars: 5 },
    { name: "Anna W.", location: "Erlangen", text: "Als Erwachsene habe ich es nie gelernt. Hier war der Rahmen endlich sicher genug, um es anzugehen. Ich bin so froh, dass es SWIM1 in Erlangen gibt.", course: "Erwachsenenschwimmen", stars: 5 },
  ],
  faqs: [
    { q: "Was muss ich zum ersten Termin mitbringen?", a: "Badekleidung, Handtuch, Badelatschen und für Kinder ggf. eine Schwimmwindel. Föhns und Umkleiden sind vorhanden." },
    { q: "Darf ich beim Kurs zuschauen?", a: "Bei Kinderkursen gibt es einen Eltern-Wartebereich mit Blick auf das Becken. Bei Erwachsenenkursen ist das Bad ohne Zuschauer – für ein entspanntes Lernumfeld." },
    { q: "Ist die Eintragung verbindlich?", a: "Nein, die Warteliste ist zu 100 % unverbindlich und kostenlos. Du gehst keinerlei Verpflichtung ein." },
    { q: "Werden die Kosten von der Krankenkasse übernommen?", a: "Für unsere zertifizierten Aqua Reha Kurse übernehmen alle gesetzlichen Krankenkassen die Kosten bei Vorlage eines ärztlichen Rezepts." },
    { q: "Wann startet der Standort?", a: "Eröffnung zur Saison 2026 – sobald der genaue Starttermin feststeht, informieren wir alle Wartelisten-Teilnehmer als Erste." },
  ],
  waitlistCount: "80+",
  metaTitle: "Schwimmschule Erlangen | Kurse & Warteliste | SWIM1",
  metaDescription: "SWIM1 Erlangen – Schwimmkurse für Kinder & Erwachsene. Kleine Gruppen, 32 °C warmes Wasser, zertifizierte Trainer. Jetzt Platz auf der Warteliste sichern.",
};

const Erlangen = () => <LocationPageTemplate config={config} />;

export default Erlangen;

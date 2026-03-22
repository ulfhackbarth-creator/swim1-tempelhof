import { MapPin, Train, Clock, Car } from "lucide-react";
import LocationPageTemplate from "@/components/standorte/LocationPageTemplate";
import type { LocationConfig } from "@/components/standorte/LocationPageTemplate";

const config: LocationConfig = {
  slug: "bremen",
  displayName: "Bremen",
  heroVideos: ["/videos/standort_desktop.mp4"],
  heroPoster: "/videos/standort_desktop_poster.jpg",
  heroHeadline: "SWIM1 Schwimmschule in Bremen",
  address: {
    streetAddress: "AG-Weser-Str. 3",
    addressLocality: "Bremen",
    postalCode: "28237",
  },
  geoText: "Unser Standort in der Waterfront ist ideal erreichbar für Familien aus Gröpelingen, Walle, Findorff und der Bremer Neustadt. Dank der Straßenbahn-Anbindung (Linie 3 & 5) und über 4.000 kostenlosen Parkplätzen sind wir deine zentrale Schwimmschule an der Weser.",
  locationInfo: [
    { icon: MapPin, title: "Adresse", text: "Waterfront, AG-Weser-Str. 3, 28237 Bremen" },
    { icon: Train, title: "ÖPNV", text: "Straßenbahn Linie 3 & 5, Haltestelle Waterfront" },
    { icon: Clock, title: "Öffnungszeiten", text: "Mo–Fr 07:00–21:00 · Sa 08:00–18:00" },
    { icon: Car, title: "Kostenlose Parkplätze", text: "Über 4.000 Parkplätze an der Waterfront" },
  ],
  testimonials: [
    { name: "Laura M.", location: "Bremen-Mitte", text: "Wir freuen uns riesig, dass SWIM1 nach Bremen kommt! Endlich eine professionelle Schwimmschule mit warmem Wasser direkt vor der Haustür.", course: "Seepferdchenkurs", stars: 5 },
    { name: "Stefan K.", location: "Bremen-Nord", text: "Meine Kinder lieben Wasser und wir haben lange nach einem guten Kursangebot in Bremen gesucht. SWIM1 klingt perfekt!", course: "Wassergewöhnung", stars: 5 },
    { name: "Maria S.", location: "Bremen-Ost", text: "Toll, dass es bald auch Aquafitness in der Waterfront Bremen gibt. Ich bin schon auf der Warteliste – kann es kaum erwarten!", course: "Aquafitness", stars: 5 },
  ],
  faqs: [
    { q: "Was muss ich zum ersten Termin mitbringen?", a: "Badekleidung, Handtuch, Badelatschen und für Kinder ggf. eine Schwimmwindel. Föhns und Umkleiden sind vorhanden." },
    { q: "Darf ich beim Kurs zuschauen?", a: "Bei Kinderkursen gibt es einen Eltern-Wartebereich mit Blick auf das Becken. Bei Erwachsenenkursen ist das Bad ohne Zuschauer – für ein entspanntes Lernumfeld." },
    { q: "Ist die Eintragung verbindlich?", a: "Nein, die Warteliste ist zu 100 % unverbindlich und kostenlos. Du gehst keinerlei Verpflichtung ein." },
    { q: "Werden die Kosten von der Krankenkasse übernommen?", a: "Für unsere zertifizierten Aqua Reha Kurse übernehmen alle gesetzlichen Krankenkassen die Kosten bei Vorlage eines ärztlichen Rezepts." },
    { q: "Wo genau befindet sich der Standort?", a: "Unser Standort befindet sich in der Waterfront Bremen an der Weser, mit hervorragender Anbindung per Straßenbahn und über 4.000 kostenlosen Parkplätzen." },
  ],
  waitlistCount: "60+",
  metaTitle: "Schwimmschule Bremen | Kurse & Warteliste | SWIM1",
  metaDescription: "Deine Premium Schwimmschule in Bremen. Jetzt unverbindlich auf die Warteliste für Kinderschwimmen, Babyschwimmen und Erwachsenenkurse eintragen.",
};

const BremenPage = () => <LocationPageTemplate config={config} />;

export default BremenPage;

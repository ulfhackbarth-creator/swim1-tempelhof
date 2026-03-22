import { MapPin, Train, Clock, Car } from "lucide-react";
import LocationPageTemplate from "@/components/standorte/LocationPageTemplate";
import type { LocationConfig } from "@/components/standorte/LocationPageTemplate";

const config: LocationConfig = {
  slug: "wildau",
  displayName: "Wildau",
  heroVideos: ["/videos/standort_wildau_desktop.mp4"],
  heroPoster: "/videos/standort_wildau_desktop_poster.jpg",
  heroHeadline: "SWIM1 Schwimmschule in Wildau",
  address: {
    streetAddress: "Chausseestr. 1",
    addressLocality: "Wildau",
    postalCode: "15745",
  },
  geoText: "Unser Standort im A10 Center ist ideal erreichbar für Familien aus Wildau, Königs Wusterhausen, Zeuthen und Schulzendorf. Direkt an der A10 gelegen, mit über 4.000 kostenlosen Parkplätzen – deine Schwimmschule südlich von Berlin.",
  locationInfo: [
    { icon: MapPin, title: "Adresse", text: "A10 Center, Chausseestr. 1, 15745 Wildau" },
    { icon: Train, title: "ÖPNV", text: "S-Bahn Wildau, 5 Min. Fußweg zum A10 Center" },
    { icon: Clock, title: "Öffnungszeiten", text: "Mo–Fr 07:00–21:00 · Sa 08:00–18:00" },
    { icon: Car, title: "Kostenlose Parkplätze", text: "Über 4.000 Parkplätze am A10 Center" },
  ],
  testimonials: [
    { name: "Sabine K.", location: "Wildau", text: "Wir freuen uns riesig, dass SWIM1 nach Wildau kommt! Endlich eine professionelle Schwimmschule mit warmem Wasser direkt vor der Haustür.", course: "Seepferdchenkurs", stars: 5 },
    { name: "Michael B.", location: "Königs Wusterhausen", text: "Meine Kinder lieben Wasser und wir haben lange nach einem guten Kursangebot in der Region gesucht. SWIM1 klingt perfekt!", course: "Wassergewöhnung", stars: 5 },
    { name: "Petra M.", location: "Zeuthen", text: "Toll, dass es bald auch Aquafitness im A10 Center gibt. Ich bin schon auf der Warteliste – kann es kaum erwarten!", course: "Aquafitness", stars: 5 },
  ],
  faqs: [
    { q: "Was muss ich zum ersten Termin mitbringen?", a: "Badekleidung, Handtuch, Badelatschen und für Kinder ggf. eine Schwimmwindel. Föhns und Umkleiden sind vorhanden." },
    { q: "Darf ich beim Kurs zuschauen?", a: "Bei Kinderkursen gibt es einen Eltern-Wartebereich mit Blick auf das Becken. Bei Erwachsenenkursen ist das Bad ohne Zuschauer – für ein entspanntes Lernumfeld." },
    { q: "Ist die Eintragung verbindlich?", a: "Nein, die Warteliste ist zu 100 % unverbindlich und kostenlos. Du gehst keinerlei Verpflichtung ein." },
    { q: "Werden die Kosten von der Krankenkasse übernommen?", a: "Für unsere zertifizierten Aqua Reha Kurse übernehmen alle gesetzlichen Krankenkassen die Kosten bei Vorlage eines ärztlichen Rezepts." },
    { q: "Wo genau befindet sich der Standort?", a: "Unser Standort befindet sich im A10 Center Wildau an der Chausseestraße, mit hervorragender Anbindung über die A10 und ausreichend kostenlosen Parkplätzen." },
  ],
  waitlistCount: "50+",
  metaTitle: "Schwimmschule Wildau | Kurse & Warteliste | SWIM1",
  metaDescription: "Deine Premium Schwimmschule in Wildau. Jetzt unverbindlich auf die Warteliste für Kinderschwimmen, Babyschwimmen und Erwachsenenkurse eintragen.",
};

const WildauPage = () => <LocationPageTemplate config={config} />;

export default WildauPage;

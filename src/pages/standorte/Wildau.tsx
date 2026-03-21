import { MapPin, Train, Clock, Car } from "lucide-react";
import LocationPageTemplate from "@/components/standorte/LocationPageTemplate";
import type { LocationConfig } from "@/components/standorte/LocationPageTemplate";

const config: LocationConfig = {
  slug: "wildau",
  heroHeadline: "Swim1 Schwimmschule in Wildau",
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
  metaTitle: "Swim1 Schwimmschule Wildau – A10 Center | Warteliste",
  metaDescription: "SWIM1 eröffnet im A10 Center Wildau! Sichere dir jetzt einen Platz auf der Warteliste für Schwimmkurse.",
};

const WildauPage = () => <LocationPageTemplate config={config} />;

export default WildauPage;

import { MapPin, Train, Clock, Car } from "lucide-react";
import LocationPageTemplate from "@/components/standorte/LocationPageTemplate";
import type { LocationConfig } from "@/components/standorte/LocationPageTemplate";

const config: LocationConfig = {
  slug: "schwerin",
  displayName: "Schwerin",
  heroVideos: ["/videos/standort_schwerin_desktop.mp4"],
  heroPoster: "/videos/standort_schwerin_desktop_poster.jpg",
  heroHeadline: "SWIM1 Schwimmschule in Schwerin",
  address: {
    streetAddress: "Marienplatz 5–6",
    addressLocality: "Schwerin",
    postalCode: "19053",
  },
  geoText: "Unser Standort im Schlosspark-Center ist ideal erreichbar für Familien aus Schwerin, Lankow, Weststadt und Görries. Zentral am Marienplatz gelegen, mit guter ÖPNV-Anbindung und ausreichend Parkmöglichkeiten – deine Schwimmschule im Herzen von Schwerin.",
  locationInfo: [
    { icon: MapPin, title: "Adresse", text: "Schlosspark-Center, Marienplatz 5–6, 19053 Schwerin" },
    { icon: Train, title: "ÖPNV", text: "Haltestelle Marienplatz, direkt vor dem Center" },
    { icon: Clock, title: "Öffnungszeiten", text: "Mo–Fr 07:00–21:00 · Sa 08:00–18:00" },
    { icon: Car, title: "Kostenlose Parkplätze", text: "Im Parkhaus des Schlosspark-Centers" },
  ],
  testimonials: [
    { name: "Kathrin L.", location: "Schwerin", text: "Wir freuen uns riesig, dass SWIM1 nach Schwerin kommt! Endlich eine professionelle Schwimmschule mit warmem Wasser direkt vor der Haustür.", course: "Seepferdchenkurs", stars: 5 },
    { name: "Marco W.", location: "Schwerin-Lankow", text: "Meine Kinder lieben Wasser und wir haben lange nach einem guten Kursangebot in Schwerin gesucht. SWIM1 klingt perfekt!", course: "Wassergewöhnung", stars: 5 },
    { name: "Anne S.", location: "Schwerin-Weststadt", text: "Toll, dass es bald auch Aquafitness im Schlosspark-Center gibt. Ich bin schon auf der Warteliste – kann es kaum erwarten!", course: "Aquafitness", stars: 5 },
  ],
  faqs: [
    { q: "Was muss ich zum ersten Termin mitbringen?", a: "Badekleidung, Handtuch, Badelatschen und für Kinder ggf. eine Schwimmwindel. Föhns und Umkleiden sind vorhanden." },
    { q: "Darf ich beim Kurs zuschauen?", a: "Bei Kinderkursen gibt es einen Eltern-Wartebereich mit Blick auf das Becken. Bei Erwachsenenkursen ist das Bad ohne Zuschauer – für ein entspanntes Lernumfeld." },
    { q: "Ist die Eintragung verbindlich?", a: "Nein, die Warteliste ist zu 100 % unverbindlich und kostenlos. Du gehst keinerlei Verpflichtung ein." },
    { q: "Werden die Kosten von der Krankenkasse übernommen?", a: "Für unsere zertifizierten Aqua Reha Kurse übernehmen alle gesetzlichen Krankenkassen die Kosten bei Vorlage eines ärztlichen Rezepts." },
    { q: "Wo genau befindet sich der Standort?", a: "Unser Standort befindet sich im Schlosspark-Center Schwerin am Marienplatz, zentral gelegen mit guter ÖPNV-Anbindung und ausreichend Parkmöglichkeiten." },
  ],
  waitlistCount: "80+",
  metaTitle: "Schwimmschule Schwerin | Kurse & Warteliste | SWIM1",
  metaDescription: "Deine Premium Schwimmschule in Schwerin. Jetzt unverbindlich auf die Warteliste für Kinderschwimmen, Babyschwimmen und Erwachsenenkurse eintragen.",
};

const SchwerinPage = () => <LocationPageTemplate config={config} />;

export default SchwerinPage;

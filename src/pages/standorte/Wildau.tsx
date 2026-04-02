import { MapPin, Train, Clock, Car } from "lucide-react";
import LocationPageTemplate from "@/components/standorte/LocationPageTemplate";
import type { LocationConfig } from "@/components/standorte/LocationPageTemplate";

const config: LocationConfig = {
  slug: "wildau",
  mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.432867825026!2d13.605720976670836!3d52.31395695927572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a83f1cc671c271%3A0xeded9fea5e352c8b!2sA10%20Center!5e0!3m2!1sde!2sde!4v1711999999999!5m2!1sde!2sde",
  displayName: "Wildau",
  heroVideos: ["/videos/standort_wildau_desktop.mp4"],
  heroPoster: "/videos/standort_wildau_desktop_poster.jpg",
  heroHeadline: "SWIM1 kommt nach Wildau! Eröffnung 2026.",
  heroBadge: "Bald in deiner Nähe!",
  heroSubline: "Kleine Gruppen · Zertifizierte Trainer · 32 °C warmes Wasser.",
  address: {
    streetAddress: "Chausseestr. 1",
    addressLocality: "Wildau",
    postalCode: "15745",
  },
  geoText: "Wir bauen aktuell für dich! Ab 2026 findest du unseren neuen Standort im A10 Center – ideal erreichbar für Familien aus Wildau, Königs Wusterhausen, Zeuthen und Schulzendorf. Direkt an der A10 gelegen, mit über 4.000 kostenlosen Parkplätzen. Werde Teil der SWIM1-Familie!",
  courseHeading: "Unsere geplanten Kurse ab 2026",
  courseSubline: "Wähle eine Kategorie und trag dich in die Warteliste ein.",
  courseAppendText: "Trag dich in die Warteliste ein, um als Erstes über den Kursstart informiert zu werden.",
  waitlistHeading: "Sei von Anfang an dabei – trag dich unverbindlich ein!",
  waitlistIntro: "Die Plätze für unsere Neueröffnung 2026 sind limitiert. Sichere dir jetzt unverbindlich deinen Platz auf der Warteliste.",
  locationInfo: [
    { icon: MapPin, title: "Adresse", text: "Chausseestr. 1, 15745 Wildau" },
    { icon: Train, title: "ÖPNV", text: "Gute Anbindung · Direkt an der A10" },
    { icon: Clock, title: "Öffnungszeiten", text: "Mo–Fr 07:00–21:00 · Sa 08:00–18:00" },
    { icon: Car, title: "Kostenlose Parkplätze", text: "Über 4.000 kostenlose Parkplätze" },
  ],
  testimonials: [
    { name: "Jana M.", location: "Wildau", text: "Wir freuen uns riesig, dass SWIM1 nach Wildau kommt! Endlich eine professionelle Schwimmschule mit warmem Wasser südlich von Berlin.", course: "Kinderschwimmen", stars: 5 },
    { name: "Stefan B.", location: "Königs Wusterhausen", text: "Meine Kinder lieben Wasser und wir haben lange nach einem guten Kursangebot in der Region gesucht. SWIM1 klingt perfekt!", course: "Wassergewöhnung", stars: 5 },
    { name: "Nicole F.", location: "Zeuthen", text: "Toll, dass es bald auch Aquafitness im A10 Center gibt. Ich bin schon auf der Warteliste – kann es kaum erwarten!", course: "Aquafitness", stars: 5 },
  ],
  faqs: [
    { q: "Wann genau eröffnet der Standort Wildau?", a: "Wir planen die Eröffnung für das Jahr 2026. Sobald der genaue Termin feststeht, informieren wir alle Personen auf der Warteliste als Erstes." },
    { q: "Was muss ich zum ersten Termin mitbringen?", a: "Badekleidung, Handtuch, Badelatschen und für Kinder ggf. eine Schwimmwindel. Föhns und Umkleiden sind vorhanden." },
    { q: "Darf ich beim Kurs zuschauen?", a: "Bei Kinderkursen gibt es einen Eltern-Wartebereich mit Blick auf das Becken. Bei Erwachsenenkursen ist das Bad ohne Zuschauer – für ein entspanntes Lernumfeld." },
    { q: "Ist die Eintragung verbindlich?", a: "Nein, die Warteliste ist zu 100 % unverbindlich und kostenlos. Du gehst keinerlei Verpflichtung ein." },
    { q: "Werden die Kosten von der Krankenkasse übernommen?", a: "Für unsere zertifizierten Aqua Reha Kurse übernehmen alle gesetzlichen Krankenkassen die Kosten bei Vorlage eines ärztlichen Rezepts." },
    { q: "Wo genau befindet sich der Standort?", a: "Der neue Standort entsteht im A10 Center in Wildau. Die genaue Adresse geben wir rechtzeitig vor der Eröffnung bekannt." },
  ],
  waitlistCount: "60+",
  plzExample: "15745",
  metaTitle: "Schwimmschule Wildau | Kurse & Warteliste | SWIM1",
  metaDescription: "Deine Premium Schwimmschule in Wildau. Jetzt unverbindlich auf die Warteliste für Kinderschwimmen, Babyschwimmen und Erwachsenenkurse eintragen.",
};

const WildauPage = () => <LocationPageTemplate config={config} />;

export default WildauPage;

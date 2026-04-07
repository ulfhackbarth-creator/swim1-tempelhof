import { MapPin, Train, Clock, Car } from "lucide-react";
import LocationPageTemplate from "@/components/standorte/LocationPageTemplate";
import type { LocationConfig } from "@/components/standorte/LocationPageTemplate";

const config: LocationConfig = {
  slug: "bremen",
  mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.448550244171!2d8.738576776702522!3d53.04713090001797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b0d647711a6469%3A0x4c1e21cb16629592!2sRoland-Center%20Bremen!5e0!3m2!1sde!2sde!4v1711999999999!5m2!1sde!2sde",
  displayName: "Bremen",
  heroVideos: ["/videos/standort_bremen_desktop.mp4"],
  heroPoster: "/videos/standort_bremen_desktop_poster.jpg",
  heroHeadline: "SWIM1 kommt nach Bremen! Eröffnung 2026.",
  heroBadge: "Bald in deiner Nähe!",
  heroSubline: "Kleine Gruppen · Zertifizierte Trainer · 32 °C warmes Wasser.",
  address: {
    streetAddress: "Alter Dorfweg 30-50",
    addressLocality: "Bremen",
    postalCode: "28259",
  },
  geoText: "Wir bauen aktuell für dich! Ab 2026 findest du unseren neuen Standort im Roland Center – ideal erreichbar für Familien aus Huchting, Obervieland, Neustadt und der Bremer Südseite. Dank guter Verkehrsanbindung und ausreichend Parkmöglichkeiten sind wir deine zentrale Schwimmschule in Bremen. Werde Teil der SWIM1-Familie!",
  courseHeading: "Unser Kursangebot",
  courseSubline: "Wähle eine Kategorie und trag dich in die Warteliste ein.",
  courseAppendText: "Trag dich in die Warteliste ein, um als Erstes über den Kursstart informiert zu werden.",
  waitlistHeading: "Sei von Anfang an dabei – trag dich unverbindlich ein!",
  waitlistIntro: "Die Plätze für unsere Neueröffnung 2026 sind limitiert. Sichere dir jetzt unverbindlich deinen Platz auf der Warteliste.",
  locationInfo: [
    { icon: MapPin, title: "Adresse", text: "Roland Center, Alter Dorfweg 30-50, 28259 Bremen" },
    { icon: Train, title: "ÖPNV", text: "Gute ÖPNV-Anbindung, Haltestelle Roland Center" },
    { icon: Clock, title: "Öffnungszeiten", text: "Mo–Fr 07:00–21:00 · Sa 08:00–18:00" },
    { icon: Car, title: "Kostenlose Parkplätze", text: "Ausreichend Parkplätze am Roland Center" },
  ],
  testimonials: [
    { name: "Laura M.", location: "Bremen-Mitte", text: "Wir freuen uns riesig, dass SWIM1 nach Bremen kommt! Endlich eine professionelle Schwimmschule mit warmem Wasser direkt vor der Haustür.", course: "Seepferdchenkurs", stars: 5 },
    { name: "Stefan K.", location: "Bremen-Nord", text: "Meine Kinder lieben Wasser und wir haben lange nach einem guten Kursangebot in Bremen gesucht. SWIM1 klingt perfekt!", course: "Wassergewöhnung", stars: 5 },
    { name: "Maria S.", location: "Bremen-Ost", text: "Toll, dass es bald auch Aquafitness im Roland Center Bremen gibt. Ich bin schon auf der Warteliste – kann es kaum erwarten!", course: "Aquafitness", stars: 5 },
  ],
  faqs: [
    { q: "Wann genau eröffnet der Standort Bremen?", a: "Wir planen die Eröffnung für das Jahr 2026. Sobald der genaue Termin feststeht, informieren wir alle Personen auf der Warteliste als Erstes." },
    { q: "Was muss ich zum ersten Termin mitbringen?", a: "Badekleidung, Handtuch, Badelatschen und für Kinder ggf. eine Schwimmwindel. Föhns und Umkleiden sind vorhanden." },
    { q: "Darf ich beim Kurs zuschauen?", a: "Bei Kinderkursen gibt es einen Eltern-Wartebereich mit Blick auf das Becken. Bei Erwachsenenkursen ist das Bad ohne Zuschauer – für ein entspanntes Lernumfeld." },
    { q: "Ist die Eintragung verbindlich?", a: "Nein, die Warteliste ist zu 100 % unverbindlich und kostenlos. Du gehst keinerlei Verpflichtung ein." },
    { q: "Werden die Kosten von der Krankenkasse übernommen?", a: "Für unsere zertifizierten Aqua Reha Kurse übernehmen alle gesetzlichen Krankenkassen die Kosten bei Vorlage eines ärztlichen Rezepts." },
    { q: "Wo genau befindet sich der Standort?", a: "Der neue Standort wird im Roland Center, Alter Dorfweg 30-50, 28259 Bremen entstehen. Aktuell laufen die Vorbereitungen." },
  ],
  waitlistCount: "60+",
  plzExample: "28259",
  metaTitle: "Schwimmschule Bremen | Kurse & Warteliste | SWIM1",
  metaDescription: "Deine Premium Schwimmschule in Bremen. Jetzt unverbindlich auf die Warteliste für Kinderschwimmen, Babyschwimmen und Erwachsenenkurse eintragen.",
};

const BremenPage = () => <LocationPageTemplate config={config} />;

export default BremenPage;

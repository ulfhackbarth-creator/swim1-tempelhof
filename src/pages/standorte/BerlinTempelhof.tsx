import { MapPin, Train, Clock, Car } from "lucide-react";
import LocationPageTemplate from "@/components/standorte/LocationPageTemplate";
import type { LocationConfig } from "@/components/standorte/LocationPageTemplate";

const config: LocationConfig = {
  slug: "berlin-tempelhof",
  mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.730303666358!2d13.385576876676834!3d52.45517554023247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84557745e0d4d%3A0x32972a08c4cee669!2sOrdensmeisterstra%C3%9Fe%201-3%2C%2012099%20Berlin!5e0!3m2!1sde!2sde!4v1711999999999!5m2!1sde!2sde",
  displayName: "Berlin-Tempelhof",
  heroHeadline: "SWIM1 kommt nach Berlin-Tempelhof! Eröffnung 2026.",
  heroBadge: "Bald in deiner Nähe!",
  heroSubline: "Kleine Gruppen · Zertifizierte Trainer · 32 °C warmes Wasser.",
  heroVideos: ["/videos/standort_desktop.mp4"],
  heroPoster: "/videos/standort_desktop_poster.jpg",
  address: {
    streetAddress: "Tempelhofer Hafen",
    addressLocality: "Berlin",
    postalCode: "12099",
  },
  geoText: "Wir bauen aktuell für dich! Ab 2026 findest du unseren neuen Standort im Tempelhofer Hafen – ideal erreichbar für Familien aus Tempelhof, Neukölln, Kreuzberg und Mariendorf. Direkte U6-Anbindung und kostenlose Parkplätze machen uns zu deiner zentralen Schwimmschule in Berlin. Werde Teil der SWIM1-Familie!",
  courseHeading: "Unser Kursangebot",
  courseSubline: "Wähle eine Kategorie und trag dich in die Warteliste ein.",
  courseAppendText: "Trag dich in die Warteliste ein, um als Erstes über den Kursstart informiert zu werden.",
  waitlistHeading: "Sei von Anfang an dabei – trag dich unverbindlich ein!",
  waitlistIntro: "Die Plätze für unsere Neueröffnung 2026 sind limitiert. Sichere dir jetzt unverbindlich deinen Platz auf der Warteliste.",
  locationInfo: [
    { icon: MapPin, title: "Adresse", text: "Ordensmeisterstr. 1–3, 12099 Berlin" },
    { icon: Train, title: "ÖPNV", text: "Direkte Anbindung an die U6" },
    { icon: Clock, title: "Öffnungszeiten", text: "Mo–Fr 07:00–21:00 · Sa 08:00–18:00" },
    { icon: Car, title: "Kostenlose Parkplätze", text: "Kostenlose Parkplätze am Tempelhofer Hafen" },
  ],
  testimonials: [
    { name: "Anna K.", location: "Tempelhof", text: "Wir freuen uns riesig, dass SWIM1 nach Tempelhof kommt! Endlich eine professionelle Schwimmschule mit warmem Wasser direkt vor der Haustür.", course: "Kinderschwimmen", stars: 5 },
    { name: "Markus R.", location: "Neukölln", text: "Meine Kinder lieben Wasser und wir haben lange nach einem guten Kursangebot in Berlin-Süd gesucht. SWIM1 klingt perfekt!", course: "Wassergewöhnung", stars: 5 },
    { name: "Sandra M.", location: "Mariendorf", text: "Toll, dass es bald auch Aquafitness im Tempelhofer Hafen gibt. Ich bin schon auf der Warteliste – kann es kaum erwarten!", course: "Aquafitness", stars: 5 },
  ],
  faqs: [
    { q: "Wann genau eröffnet der Standort Berlin-Tempelhof?", a: "Wir planen die Eröffnung für das Jahr 2026. Sobald der genaue Termin feststeht, informieren wir alle Personen auf der Warteliste als Erstes." },
    { q: "Was muss ich zum ersten Termin mitbringen?", a: "Badekleidung, Handtuch, Badelatschen und für Kinder ggf. eine Schwimmwindel. Föhns und Umkleiden sind vorhanden." },
    { q: "Darf ich beim Kurs zuschauen?", a: "Bei Kinderkursen gibt es einen Eltern-Wartebereich mit Blick auf das Becken. Bei Erwachsenenkursen ist das Bad ohne Zuschauer – für ein entspanntes Lernumfeld." },
    { q: "Ist die Eintragung verbindlich?", a: "Nein, die Warteliste ist zu 100 % unverbindlich und kostenlos. Du gehst keinerlei Verpflichtung ein." },
    { q: "Werden die Kosten von der Krankenkasse übernommen?", a: "Für unsere zertifizierten Aqua Reha Kurse übernehmen alle gesetzlichen Krankenkassen die Kosten bei Vorlage eines ärztlichen Rezepts." },
    { q: "Wo genau befindet sich der Standort?", a: "Unser Standort befindet sich im Tempelhofer Hafen, Ordensmeisterstr. 1–3, 12099 Berlin." },
  ],
  waitlistCount: "60+",
  plzExample: "12099",
  metaTitle: "Schwimmschule Berlin-Tempelhof | Kurse & Warteliste | SWIM1",
  metaDescription: "Deine Premium Schwimmschule in Berlin-Tempelhof. Jetzt unverbindlich auf die Warteliste für Kinderschwimmen, Babyschwimmen und Erwachsenenkurse eintragen.",
};

const BerlinTempelhof = () => <LocationPageTemplate config={config} />;

export default BerlinTempelhof;

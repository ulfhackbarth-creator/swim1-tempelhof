import { MapPin, Train, Clock, Car } from "lucide-react";
import LocationPageTemplate from "@/components/standorte/LocationPageTemplate";
import type { LocationConfig } from "@/components/standorte/LocationPageTemplate";

const config: LocationConfig = {
  slug: "erlangen",
  mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.666710433244!2d10.98567427656911!3d49.56183695587932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1ff2399b210cd%3A0xa79c44182f8be3d9!2sWeidenweg%201%2C%2091058%20Erlangen!5e0!3m2!1sde!2sde!4v1711999999999!5m2!1sde!2sde",
  displayName: "Erlangen",
  heroHeadline: "SWIM1 kommt nach Erlangen! Eröffnung 2026.",
  heroVideos: ["/videos/standort_desktop.mp4"],
  heroPoster: "/videos/standort_desktop_poster.jpg",
  heroBadge: "Bald in deiner Nähe!",
  heroSubline: "Kleine Gruppen · Zertifizierte Trainer · 32 °C warmes Wasser.",
  address: {
    streetAddress: "Weidenweg 1",
    addressLocality: "Erlangen",
    postalCode: "91058",
  },
  geoText: "Wir bauen aktuell für dich! Ab 2026 findest du unseren neuen Standort im Weidenweg – gut erreichbar für Familien aus Erlangen, Büchenbach, Bruck und dem gesamten Stadtgebiet. Kostenlose Parkplätze und warmes Wasser warten auf dich. Werde Teil der SWIM1-Familie!",
  courseHeading: "Unsere geplanten Kurse ab 2026",
  courseSubline: "Wähle eine Kategorie und trag dich in die Warteliste ein.",
  courseAppendText: "Trag dich in die Warteliste ein, um als Erstes über den Kursstart informiert zu werden.",
  waitlistHeading: "Sei von Anfang an dabei – trag dich unverbindlich ein!",
  waitlistIntro: "Die Plätze für unsere Neueröffnung 2026 sind limitiert. Sichere dir jetzt unverbindlich deinen Platz auf der Warteliste.",
  locationInfo: [
    { icon: MapPin, title: "Adresse", text: "Weidenweg 1, 91058 Erlangen" },
    { icon: Train, title: "ÖPNV", text: "Gut erreichbar im Erlanger Stadtgebiet" },
    { icon: Clock, title: "Öffnungszeiten", text: "Mo–Fr 07:00–21:00 · Sa 08:00–18:00" },
    { icon: Car, title: "Kostenlose Parkplätze", text: "Kostenlose Parkplätze vorhanden" },
  ],
  testimonials: [
    { name: "Sabine H.", location: "Erlangen-Mitte", text: "Wir freuen uns riesig, dass SWIM1 nach Erlangen kommt! Endlich eine professionelle Schwimmschule mit warmem Wasser direkt in der Stadt.", course: "Kinderschwimmen", stars: 5 },
    { name: "Michael P.", location: "Büchenbach", text: "Meine Kinder lieben Wasser und wir haben lange nach einem guten Kursangebot in Erlangen gesucht. SWIM1 klingt perfekt!", course: "Wassergewöhnung", stars: 5 },
    { name: "Claudia N.", location: "Bruck", text: "Toll, dass es bald auch Aquafitness im Weidenweg gibt. Ich bin schon auf der Warteliste – kann es kaum erwarten!", course: "Aquafitness", stars: 5 },
  ],
  faqs: [
    { q: "Wann genau eröffnet der Standort Erlangen?", a: "Wir planen die Eröffnung für das Jahr 2026. Sobald der genaue Termin feststeht, informieren wir alle Personen auf der Warteliste als Erstes." },
    { q: "Was muss ich zum ersten Termin mitbringen?", a: "Badekleidung, Handtuch, Badelatschen und für Kinder ggf. eine Schwimmwindel. Föhns und Umkleiden sind vorhanden." },
    { q: "Darf ich beim Kurs zuschauen?", a: "Bei Kinderkursen gibt es einen Eltern-Wartebereich mit Blick auf das Becken. Bei Erwachsenenkursen ist das Bad ohne Zuschauer – für ein entspanntes Lernumfeld." },
    { q: "Ist die Eintragung verbindlich?", a: "Nein, die Warteliste ist zu 100 % unverbindlich und kostenlos. Du gehst keinerlei Verpflichtung ein." },
    { q: "Werden die Kosten von der Krankenkasse übernommen?", a: "Für unsere zertifizierten Aqua Reha Kurse übernehmen alle gesetzlichen Krankenkassen die Kosten bei Vorlage eines ärztlichen Rezepts." },
    { q: "Wo genau befindet sich der Standort?", a: "Unser Standort befindet sich im Weidenweg 1, 91058 Erlangen." },
  ],
  waitlistCount: "60+",
  plzExample: "91058",
  metaTitle: "Schwimmschule Erlangen | Kurse & Warteliste | SWIM1",
  metaDescription: "Deine Premium Schwimmschule in Erlangen. Jetzt unverbindlich auf die Warteliste für Kinderschwimmen, Babyschwimmen und Erwachsenenkurse eintragen.",
};

const Erlangen = () => <LocationPageTemplate config={config} />;

export default Erlangen;

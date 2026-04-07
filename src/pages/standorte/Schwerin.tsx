import { MapPin, Train, Clock, Car } from "lucide-react";
import LocationPageTemplate from "@/components/standorte/LocationPageTemplate";
import type { LocationConfig } from "@/components/standorte/LocationPageTemplate";

const config: LocationConfig = {
  slug: "schwerin",
  mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.748643884323!2d11.407122176717524!3d53.62819375262334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47adda1fd263952f%3A0xa3b60da8fb8f122!2sSchlo%C3%9Fpark-Center%20Schwerin!5e0!3m2!1sde!2sde!4v1711999999999!5m2!1sde!2sde",
  displayName: "Schwerin",
  heroVideos: ["/videos/standort_schwerin_desktop.mp4"],
  heroPoster: "/videos/standort_schwerin_desktop_poster.jpg",
  heroHeadline: "SWIM1 kommt nach Schwerin! Eröffnung 2026.",
  heroBadge: "Bald in deiner Nähe!",
  heroSubline: "Kleine Gruppen · Zertifizierte Trainer · 32 °C warmes Wasser.",
  address: {
    streetAddress: "Marienplatz 5–6",
    addressLocality: "Schwerin",
    postalCode: "19053",
  },
  geoText: "Wir bauen aktuell für dich! Ab 2026 findest du unseren neuen Standort im Schlosspark-Center – ideal erreichbar für Familien aus Schwerin, Lankow, Weststadt und Görries. Zentral am Marienplatz gelegen, mit guter ÖPNV-Anbindung und ausreichend Parkmöglichkeiten. Werde Teil der SWIM1-Familie!",
  courseHeading: "Unser Kursangebot",
  courseSubline: "Wähle eine Kategorie und trag dich in die Warteliste ein.",
  courseAppendText: "Trag dich in die Warteliste ein, um als Erstes über den Kursstart informiert zu werden.",
  waitlistHeading: "Sei von Anfang an dabei – trag dich unverbindlich ein!",
  waitlistIntro: "Die Plätze für unsere Neueröffnung 2026 sind limitiert. Sichere dir jetzt unverbindlich deinen Platz auf der Warteliste.",
  locationInfo: [
    { icon: MapPin, title: "Adresse", text: "Marienplatz 5–6, 19053 Schwerin" },
    { icon: Train, title: "ÖPNV", text: "Zentral am Marienplatz · Gute ÖPNV-Anbindung" },
    { icon: Clock, title: "Öffnungszeiten", text: "Mo–Fr 07:00–21:00 · Sa 08:00–18:00" },
    { icon: Car, title: "Kostenlose Parkplätze", text: "Ausreichend Parkmöglichkeiten im Center" },
  ],
  testimonials: [
    { name: "Laura S.", location: "Schwerin-Mitte", text: "Wir freuen uns riesig, dass SWIM1 nach Schwerin kommt! Endlich eine professionelle Schwimmschule mit warmem Wasser direkt vor der Haustür.", course: "Kinderschwimmen", stars: 5 },
    { name: "Thomas W.", location: "Lankow", text: "Meine Kinder lieben Wasser und wir haben lange nach einem guten Kursangebot in Schwerin gesucht. SWIM1 klingt perfekt!", course: "Wassergewöhnung", stars: 5 },
    { name: "Petra K.", location: "Weststadt", text: "Toll, dass es bald auch Aquafitness im Schlosspark-Center gibt. Ich bin schon auf der Warteliste – kann es kaum erwarten!", course: "Aquafitness", stars: 5 },
  ],
  faqs: [
    { q: "Wann genau eröffnet der Standort Schwerin?", a: "Wir planen die Eröffnung für das Jahr 2026. Sobald der genaue Termin feststeht, informieren wir alle Personen auf der Warteliste als Erstes." },
    { q: "Was muss ich zum ersten Termin mitbringen?", a: "Badekleidung, Handtuch, Badelatschen und für Kinder ggf. eine Schwimmwindel. Föhns und Umkleiden sind vorhanden." },
    { q: "Darf ich beim Kurs zuschauen?", a: "Bei Kinderkursen gibt es einen Eltern-Wartebereich mit Blick auf das Becken. Bei Erwachsenenkursen ist das Bad ohne Zuschauer – für ein entspanntes Lernumfeld." },
    { q: "Ist die Eintragung verbindlich?", a: "Nein, die Warteliste ist zu 100 % unverbindlich und kostenlos. Du gehst keinerlei Verpflichtung ein." },
    { q: "Werden die Kosten von der Krankenkasse übernommen?", a: "Für unsere zertifizierten Aqua Reha Kurse übernehmen alle gesetzlichen Krankenkassen die Kosten bei Vorlage eines ärztlichen Rezepts." },
    { q: "Wo genau befindet sich der Standort?", a: "Unser Standort befindet sich im Schlosspark-Center, Marienplatz 5–6, 19053 Schwerin." },
  ],
  waitlistCount: "60+",
  plzExample: "19053",
  metaTitle: "Schwimmschule Schwerin | Kurse & Warteliste | SWIM1",
  metaDescription: "Deine Premium Schwimmschule in Schwerin. Jetzt unverbindlich auf die Warteliste für Kinderschwimmen, Babyschwimmen und Erwachsenenkurse eintragen.",
};

const SchwerinPage = () => <LocationPageTemplate config={config} />;

export default SchwerinPage;

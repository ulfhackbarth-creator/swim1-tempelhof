import { MapPin, Train, Clock, Car } from "lucide-react";
import LocationPageTemplate from "@/components/standorte/LocationPageTemplate";
import type { LocationConfig } from "@/components/standorte/LocationPageTemplate";

const config: LocationConfig = {
  slug: "erlangen",
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
  geoText: "Wir bauen aktuell für dich! Ab 2026 findest du unseren neuen Standort im Weidenweg – ideal erreichbar für Familien aus Erlangen, Büchenbach, Bruck und dem gesamten Erlanger Stadtgebiet. Kostenlose Parkplätze, warmes Wasser. Werde Teil der SWIM1-Familie!",
  courseHeading: "Unsere geplanten Kurse ab 2026",
  courseSubline: "Wähle eine Kategorie und trag dich in die Warteliste ein.",
  courseAppendText: "Trag dich in die Warteliste ein, um als Erstes über den Kursstart informiert zu werden.",
  waitlistHeading: "Sei von Anfang an dabei – trag dich unverbindlich ein!",
  waitlistIntro: "Die Plätze für unsere Neueröffnung 2026 sind limitiert. Sichere dir jetzt unverbindlich deinen Platz auf der Warteliste.",
  locationInfo: [
    { icon: MapPin, title: "Adresse", text: "Weidenweg 1, 91058 Erlangen" },
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
    { q: "Wann genau eröffnet der Standort Erlangen?", a: "Wir planen die Eröffnung für das Jahr 2026. Sobald der genaue Termin feststeht, informieren wir alle Personen auf der Warteliste als Erstes." },
    { q: "Was muss ich zum ersten Termin mitbringen?", a: "Badekleidung, Handtuch, Badelatschen und für Kinder ggf. eine Schwimmwindel. Föhns und Umkleiden sind vorhanden." },
    { q: "Darf ich beim Kurs zuschauen?", a: "Bei Kinderkursen gibt es einen Eltern-Wartebereich mit Blick auf das Becken. Bei Erwachsenenkursen ist das Bad ohne Zuschauer – für ein entspanntes Lernumfeld." },
    { q: "Ist die Eintragung verbindlich?", a: "Nein, die Warteliste ist zu 100 % unverbindlich und kostenlos. Du gehst keinerlei Verpflichtung ein." },
    { q: "Werden die Kosten von der Krankenkasse übernommen?", a: "Für unsere zertifizierten Aqua Reha Kurse übernehmen alle gesetzlichen Krankenkassen die Kosten bei Vorlage eines ärztlichen Rezepts." },
    { q: "Wo genau befindet sich der Standort?", a: "Der neue Standort wird im Weidenweg entstehen. Aktuell laufen die Vorbereitungen." },
  ],
  waitlistCount: "80+",
  plzExample: "91058",
  metaTitle: "Schwimmschule Erlangen | Kurse & Warteliste | SWIM1",
  metaDescription: "Deine Premium Schwimmschule in Erlangen. Jetzt unverbindlich auf die Warteliste für Kinderschwimmen, Babyschwimmen und Erwachsenenkurse eintragen.",
};

const Erlangen = () => <LocationPageTemplate config={config} />;

export default Erlangen;

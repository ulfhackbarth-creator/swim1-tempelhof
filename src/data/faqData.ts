import type { CourseTab } from "@/types/course";

type FaqItem = { q: string; a: string };

export const faqsByTab: Record<CourseTab, { title: string; items: FaqItem[] }> = {
  kinderschwimmen: {
    title: "Häufige Fragen zum Schwimmenlernen",
    items: [
      { q: "Ab welchem Alter kann mein Kind starten?", a: "Für das Seepferdchen empfehlen wir ein Alter ab 3,5 Jahren." },
      { q: "Wie lange dauert es bis zum Seepferdchen?", a: "Das ist individuell sehr verschieden, meist zwischen 10 und 15 Einheiten." },
      { q: "Dürfen Eltern beim Kurs zuschauen?", a: "Um die Konzentration der Kinder bei den Trainern zu halten, bitten wir Eltern, außerhalb des Bades zu warten." },
    ],
  },
  erwachsene: {
    title: "Häufige Fragen zum Erwachsenenschwimmen",
    items: [
      { q: "Ich habe große Angst vor Wasser. Ist der Kurs für mich geeignet?", a: "Ja, absolut. Unsere Anfängerkurse sind genau dafür konzipiert. Wir starten im flachen Wasser und gehen komplett auf dein Tempo ein." },
      { q: "Brauche ich Vorkenntnisse für den Technikkurs?", a: "Du solltest dich sicher im tiefen Wasser bewegen können und mindestens eine Schwimmart (meist Brustschwimmen) grundlegend beherrschen." },
      { q: "Sind Zuschauer beim Kurs erlaubt?", a: "Nein. Wir legen großen Wert auf eine diskrete und geschützte Atmosphäre, in der sich alle Teilnehmer wohlfühlen." },
    ],
  },
  fitness: {
    title: "Häufige Fragen zum Training",
    items: [
      { q: "Muss ich schwimmen können?", a: "Nein, unsere Kurse finden im stehtiefen Wasser statt. Du solltest dich aber im Wasser wohlfühlen." },
      { q: "Welche Ausrüstung brauche ich?", a: "Bequeme Badekleidung reicht völlig aus. Alle Trainingsgeräte (Nudeln, Hanteln) stellen wir." },
      { q: "Für welches Fitnesslevel ist der Kurs?", a: "Für jedes! Durch die Geschwindigkeit deiner Bewegungen steuerst du die Intensität selbst." },
    ],
  },
  reha: {
    title: "Häufige Fragen zur Verordnung",
    items: [
      { q: "Wie bekomme ich eine Verordnung?", a: "Dein behandelnder Arzt (z.B. Hausarzt oder Orthopäde) kann dir Rehasport verschreiben (Formular 56)." },
      { q: "Muss ich die Verordnung vorher genehmigen lassen?", a: "Ja, die Verordnung muss vor Kursbeginn von deiner Krankenkasse bewilligt werden." },
      { q: "Ist das Wasser warm genug?", a: "Ja, unsere Therapiebecken haben angenehme 32°C, was die Muskulatur zusätzlich entspannt." },
    ],
  },
};

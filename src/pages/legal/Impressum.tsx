import LegalLayout from "./LegalLayout";

const Impressum = () => (
  <LegalLayout title="Impressum">
    <p><strong>SWIM1 Service GmbH</strong></p>
    <p>
      Hohenbinder Steig 9<br />
      12589 Berlin<br />
      Deutschland
    </p>
    <p>E-Mail: <a href="mailto:kontakt@swim1.de">kontakt@swim1.de</a></p>

    <p><strong>Vertretungsberechtigter Geschäftsführer:</strong></p>
    <p>Markus Malti</p>

    <p><strong>Handelsregister:</strong></p>
    <p>
      Handelsregisternummer: HRB 284903 B<br />
      Amtsgericht Charlottenburg
    </p>

    <h3>Streitschlichtung</h3>
    <p>
      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
      <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
        https://ec.europa.eu/consumers/odr
      </a>.
    </p>
    <p>
      Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an
      Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
    </p>

    <h3>Urheber- und Kennzeichenrecht</h3>
    <p>
      Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und
      Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts
      und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung
      ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind!
    </p>
    <p>
      Die Nutzungsrechte für veröffentlichte, vom Betreiber der Webseite selbst erstellte Objekte bleibt
      allein beim Betreiber der Webseite. Eine Vervielfältigung oder Verwendung solcher Grafiken,
      Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist
      ohne ausdrückliche Zustimmung des Betreibers der Webseite nicht gestattet.
    </p>
  </LegalLayout>
);

export default Impressum;

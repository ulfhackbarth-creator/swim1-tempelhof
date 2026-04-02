import { useState } from "react";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface GoogleMapConsentProps {
  iframeSrc: string;
  className?: string;
}

const GoogleMapConsent = ({ iframeSrc, className = "" }: GoogleMapConsentProps) => {
  const [hasConsent, setHasConsent] = useState(false);

  if (hasConsent) {
    return (
      <iframe
        src={iframeSrc}
        className={`w-full h-[400px] rounded-xl border-0 ${className}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        title="Google Maps Standortkarte"
      />
    );
  }

  return (
    <div className={`w-full h-[400px] rounded-xl bg-muted flex flex-col items-center justify-center p-6 text-center ${className}`}>
      <MapPin className="w-10 h-10 text-primary mb-4" />
      <p className="text-primary text-sm md:text-base max-w-md mb-5">
        Um die Karte zu sehen, musst du die Einbindung von Google Maps aktivieren. Dabei werden Daten an Google übertragen.
      </p>
      <button
        onClick={() => setHasConsent(true)}
        className="bg-accent text-accent-foreground font-bold py-3 px-8 rounded-lg hover:brightness-95 active:scale-[0.97] transition-all"
      >
        Karte laden
      </button>
      <Link
        to="/datenschutz"
        className="text-muted-foreground text-xs mt-3 hover:underline"
      >
        Mehr Infos in unserer Datenschutzerklärung.
      </Link>
    </div>
  );
};

export default GoogleMapConsent;

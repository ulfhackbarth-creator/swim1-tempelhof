import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById("hero");
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroElement);
    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    const form = document.getElementById("warteliste");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#0B3A52] p-4 rounded-t-xl shadow-[0_-4px_20px_-2px_rgba(11,58,82,0.15)]">
        <div className="flex items-center justify-between gap-3">
          <span className="text-white text-xs font-bold uppercase tracking-wider">
            Eröffnung 2026
          </span>
          <button
            onClick={scrollToForm}
            className="bg-[#AAFF00] text-[#0B3A52] font-bold px-4 py-2 rounded-lg text-sm shadow-lg active:scale-95 transition-transform flex items-center gap-2"
          >
            Zur Warteliste
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

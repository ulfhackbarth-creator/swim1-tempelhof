import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export function MobileStickyCTA() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById("hero");
    const formElement = document.getElementById("warteliste");

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const formObserver = new IntersectionObserver(
      ([entry]) => {
        setIsFormVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroElement) heroObserver.observe(heroElement);
    if (formElement) formObserver.observe(formElement);

    return () => {
      heroObserver.disconnect();
      formObserver.disconnect();
    };
  }, []);

  const isVisible = !isHeroVisible && !isFormVisible;

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

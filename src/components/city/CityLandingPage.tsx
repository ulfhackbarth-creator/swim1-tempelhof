import { useEffect } from "react";
import CityHeader from "./CityHeader";
import CityHero from "./CityHero";
import Offerings from "@/components/Offerings";
import CityBenefits from "./CityBenefits";
import CityTestimonials from "./CityTestimonials";
import WaitlistBenefits from "@/components/WaitlistBenefits";
import CityAboutUs from "./CityAboutUs";
import CityFAQ from "./CityFAQ";
import CityWaitlistForm from "./CityWaitlistForm";
import Footer from "@/components/Footer";
import type { CityConfig } from "@/config/cities";

interface CityLandingPageProps {
  city: CityConfig;
}

const CityLandingPage = ({ city }: CityLandingPageProps) => {
  useEffect(() => {
    document.title = city.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", city.metaDescription);
  }, [city]);

  return (
    <main className="min-h-screen">
      <CityHeader city={city} />
      <CityHero city={city} />
      <Offerings />
      <CityBenefits city={city} />
      <CityTestimonials city={city} />
      <WaitlistBenefits />
      <CityAboutUs city={city} />
      <CityFAQ city={city} />
      <CityWaitlistForm city={city} />
      <Footer />
    </main>
  );
};

export default CityLandingPage;

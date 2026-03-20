import { useState } from "react";
import HomeHeader from "@/components/home/HomeHeader";
import HeroSection from "@/components/home/HeroSection";
import WhySwim1 from "@/components/home/WhySwim1";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeFAQ from "@/components/home/HomeFAQ";
import LocationsSection from "@/components/home/LocationsSection";
import HomeFooter from "@/components/home/HomeFooter";

export type CourseTab = "kinderschwimmen" | "wassergewoehnung" | "erwachsene" | "fitness" | "reha";

const Index = () => {
  const [activeTab, setActiveTab] = useState<CourseTab>("kinderschwimmen");

  return (
    <main className="min-h-screen">
      <HomeHeader activeTab={activeTab} onTabChange={setActiveTab} />
      <HeroSection activeTab={activeTab} />
      <WhySwim1 activeTab={activeTab} />
      <HomeTestimonials activeTab={activeTab} />
      <HomeFAQ activeTab={activeTab} />
      <LocationsSection activeTab={activeTab} />
      <HomeFooter />
    </main>
  );
};

export default Index;

import { useState } from "react";
import HomeHeader from "@/components/home/HomeHeader";
import HeroSection from "@/components/home/HeroSection";
import WhySwim1 from "@/components/home/WhySwim1";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeFAQ from "@/components/home/HomeFAQ";
import LocationsSection from "@/components/home/LocationsSection";
import HomeFooter from "@/components/home/HomeFooter";

export type CourseTab = "wassergewoehnung" | "schwimmen" | "fitness" | "reha";

const Index = () => {
  const [activeTab, setActiveTab] = useState<CourseTab>("schwimmen");

  return (
    <main className="min-h-screen">
      <HomeHeader />
      <HeroSection activeTab={activeTab} onTabChange={setActiveTab} />
      <WhySwim1 />
      <HomeTestimonials />
      <HomeFAQ />
      <LocationsSection />
      <HomeFooter />
    </main>
  );
};

export default Index;

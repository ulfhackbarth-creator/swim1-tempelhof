import HomeHeader from "@/components/home/HomeHeader";
import HomeHero from "@/components/home/HomeHero";
import TrustBar from "@/components/home/TrustBar";
import CourseOverview from "@/components/home/CourseOverview";
import LocationsSection from "@/components/home/LocationsSection";
import WhySwim1 from "@/components/home/WhySwim1";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeFAQ from "@/components/home/HomeFAQ";
import FinalCTA from "@/components/home/FinalCTA";
import HomeFooter from "@/components/home/HomeFooter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HomeHeader />
      <HomeHero />
      <TrustBar />
      <CourseOverview />
      <LocationsSection />
      <WhySwim1 />
      <HomeTestimonials />
      <HomeFAQ />
      <FinalCTA />
      <HomeFooter />
    </main>
  );
};

export default Index;

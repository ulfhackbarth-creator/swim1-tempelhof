import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offerings from "@/components/Offerings";
import Benefits from "@/components/Benefits";
import WaitlistBenefits from "@/components/WaitlistBenefits";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Offerings />
      <Benefits />
      <WaitlistBenefits />
      <AboutUs />
      <FAQ />
      <WaitlistForm />
      <Footer />
    </main>
  );
};

export default Index;

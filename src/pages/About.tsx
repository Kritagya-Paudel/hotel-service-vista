
import Header from "@/components/about/Header";
import HeroSection from "@/components/about/HeroSection";
import WelcomeSection from "@/components/about/WelcomeSection";
import SkiingSection from "@/components/about/SkiingSection";
import TraditionSection from "@/components/about/TraditionSection";
import TimelineCarousel from "@/components/about/TimelineCarousel";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-light-blue text-ocean-blue">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <SkiingSection />
      <TraditionSection />
      <TimelineCarousel />
      <Footer />
    </div>
  );
};

export default About;

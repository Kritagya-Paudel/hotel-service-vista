
import Header from "@/components/about/Header";
import { usePageTitle } from "@/hooks/usePageTitle";
import HeroSection from "@/components/about/HeroSection";
import WelcomeSection from "@/components/about/WelcomeSection";
import SkiingSection from "@/components/about/SkiingSection";
import FounderSection from "@/components/about/FounderSection";
import TraditionSection from "@/components/about/TraditionSection";
import TimelineCarousel from "@/components/about/TimelineCarousel";
import Footer from "@/components/Footer";

const About = () => {
  usePageTitle("Our Story — Khumbu Lodge", "The story of Khumbu Lodge and its founder, Pasang Kami Sherpa, in Namche Bazaar since 1973.");
  return (
    <div className="min-h-screen bg-light-blue text-ocean-blue">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <SkiingSection />
      <FounderSection />
      <TraditionSection />
      <TimelineCarousel />
      <Footer />
    </div>
  );
};

export default About;

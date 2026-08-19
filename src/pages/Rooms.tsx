import Header from "@/components/about/Header";
import { usePageTitle } from "@/hooks/usePageTitle";
import RoomsSection from "@/components/RoomsSection";
import Footer from "@/components/Footer";

const Rooms = () => {
  usePageTitle("Rooms — Khumbu Lodge", "Basic Standard and Deluxe Double rooms at Khumbu Lodge, Namche Bazaar.");
  return (
    <div className="min-h-screen">
      <Header />
      <RoomsSection />
      <Footer />
    </div>
  );
};

export default Rooms;

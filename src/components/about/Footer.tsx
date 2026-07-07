
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ocean-blue text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg md:text-xl font-serif mb-3 md:mb-4">Khumbu Lodge</h3>
            <p className="text-xs md:text-sm text-sky-blue leading-relaxed">
              A legacy of alpine hospitality since 1927.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-3 md:mb-4 text-sm md:text-base">Stay</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-sky-blue">
              <li><a href="#" className="hover:text-white transition-colors">Rooms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suites</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chalets</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3 md:mb-4 text-sm md:text-base">Experience</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-sky-blue">
              <li><a href="#" className="hover:text-white transition-colors">Skiing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dining</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wellness</a></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3 md:mb-4 text-sm md:text-base">Contact</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-sky-blue">
              <li>Namche Bazaar, Nepal</li>
              <li>+977 123-456789</li>
              <li>info@khumbulodge.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-6 md:mt-8 pt-6 md:pt-8">
          <p className="text-center text-xs md:text-sm text-sky-blue">
            © 2025 Khumbu Lodge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

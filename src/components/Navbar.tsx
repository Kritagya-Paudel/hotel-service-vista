
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-sm border-b sticky top-0 z-50 bg-background border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 sm:h-20">
          {/* Desktop Navigation Links - Left */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a href="#home" className="px-3 py-2 text-sm font-medium transition-colors text-foreground">
                Home
              </a>
              <a href="#rooms" className="px-3 py-2 text-sm font-medium transition-colors hover:opacity-80 text-primary">
                Rooms
              </a>
              <a href="#services" className="px-3 py-2 text-sm font-medium transition-colors hover:opacity-80 text-primary">
                Services
              </a>
              <a href="#about" className="px-3 py-2 text-sm font-medium transition-colors hover:opacity-80 text-primary">
                About
              </a>
              <a href="#contact" className="px-3 py-2 text-sm font-medium transition-colors hover:opacity-80 text-primary">
                Contact
              </a>
            </div>
          </div>

          {/* Logo - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <img 
              src="/lovable-uploads/5fca111b-f362-4052-961d-1c72aa4f11c0.png" 
              alt="Khuabu Lodge" 
              className="h-20 sm:h-16 w-auto"
            />
          </div>

          {/* Book Now Button - Right */}
          <div className="hidden md:block">
            <button className="bg-secondary text-secondary-foreground px-6 py-2 rounded-md text-sm font-medium transition-colors hover:opacity-90">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none p-2 text-primary"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t bg-background border-border">
              <a href="#home" className="block px-3 py-2 text-base font-medium transition-colors text-foreground">
                Home
              </a>
              <a href="#rooms" className="block px-3 py-2 text-base font-medium transition-colors hover:opacity-80 text-primary">
                Rooms
              </a>
              <a href="#services" className="block px-3 py-2 text-base font-medium transition-colors hover:opacity-80 text-primary">
                Services
              </a>
              <a href="#about" className="block px-3 py-2 text-base font-medium transition-colors hover:opacity-80 text-primary">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium transition-colors hover:opacity-80 text-primary">
                Contact
              </a>
              <div className="px-3 py-2">
                <button className="w-full bg-secondary text-secondary-foreground px-6 py-2 rounded-md text-sm font-medium transition-colors hover:opacity-90">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

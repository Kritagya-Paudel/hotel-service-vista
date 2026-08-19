
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLenis } from "@/lib/lenis";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const lenis = useLenis();

  // Keep the page from scrolling underneath the full-screen menu.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();
    return () => {
      document.body.style.overflow = previous;
      lenis?.start();
    };
  }, [isOpen, lenis]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 1000); // Match the fade-out duration
  };

  const handleMenuItemClick = () => {
    handleClose();
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-foreground/10 bg-background/70">
        <div className="container mx-auto flex h-[7.5rem] items-center justify-between px-4 md:px-6 ">
          
          {/* Hamburger Menu */}
          <button 
            className="flex flex-col space-y-1 p-2 z-50"
            onClick={() => (isOpen ? handleClose() : setIsOpen(true))}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-forest-green" />
            ) : (
              <Menu className="w-6 h-6 text-forest-green" />
            )}
            <span className="sr-only">Menu</span>
          </button>
          
          {/* Centered Logo - 10% of screen width */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/">
              <img 
                src="/lovable-uploads/5fca111b-f362-4052-961d-1c72aa4f11c0.png" 
                alt="Khumbu Lodge" 
                className="w-[20vw] min-w-[90px] max-w-[130px] h-auto"
              />
            </Link>
          </div>
          
          {/* Book Button */}
          <div className="flex items-center">
            <Button asChild className="bg-primary hover:bg-secondary text-primary-foreground rounded-none px-4 md:px-8 text-xs uppercase tracking-[0.25em]">
              <Link to="/booking">Book</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Full Screen Overlay Menu */}
      {isOpen && (
        <div 
          className={`fixed inset-0 z-40 bg-light-blue flex items-center justify-center ${
            isClosing ? 'animate-fade-out' : 'animate-fade-in'
          }`}
        >
          <nav className="flex flex-col items-center space-y-8">
            <Link 
              to="/" 
              className="font-Editorial text-4xl md:text-5xl text-primary hover:italic hover:text-secondary transition-colors"
              onClick={handleMenuItemClick}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-Editorial text-4xl md:text-5xl text-primary hover:italic hover:text-secondary transition-colors"
              onClick={handleMenuItemClick}
            >
              About
            </Link>
            <Link 
              to="/gallery" 
              className="font-Editorial text-4xl md:text-5xl text-primary hover:italic hover:text-secondary transition-colors"
              onClick={handleMenuItemClick}
            >
              Gallery
            </Link>
            <Link 
              to="/rooms" 
              className="font-Editorial text-4xl md:text-5xl text-primary hover:italic hover:text-secondary transition-colors"
              onClick={handleMenuItemClick}
            >
              Rooms
            </Link>
            <Link 
              to="/services" 
              className="font-Editorial text-4xl md:text-5xl text-primary hover:italic hover:text-secondary transition-colors"
              onClick={handleMenuItemClick}
            >
              Services
            </Link>
            <Link 
              to="/booking" 
              className="font-Editorial text-4xl md:text-5xl text-primary hover:italic hover:text-secondary transition-colors"
              onClick={handleMenuItemClick}
            >
              Book
            </Link>
            
          </nav>
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes fadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }
          
          .animate-fade-in {
            animation: fadeIn 1s ease-in-out;
          }
          
          .animate-fade-out {
            animation: fadeOut 1s ease-in-out;
          }
        `}
      </style>
    </>
  );
};

export default Header;

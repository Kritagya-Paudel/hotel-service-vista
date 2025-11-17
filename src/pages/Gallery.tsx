import { useEffect, useRef, useState } from 'react';
import Header from '@/components/about/Header';
import { X } from 'lucide-react';

declare global {
  interface Window {
    LocomotiveScroll: any;
  }
}

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollInstance = useRef<any>(null);
  const [overlayImage, setOverlayImage] = useState<string | null>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    // Load locomotive scroll CSS
    const locomotiveCSS = document.createElement('link');
    locomotiveCSS.rel = 'stylesheet';
    locomotiveCSS.href = 'https://unpkg.com/locomotive-scroll@4.0.6/dist/locomotive-scroll.min.css';
    document.head.appendChild(locomotiveCSS);

    // Load locomotive scroll JS
    const locomotiveJS = document.createElement('script');
    locomotiveJS.src = 'https://unpkg.com/locomotive-scroll@4.0.6/dist/locomotive-scroll.min.js';
    locomotiveJS.onload = () => {
      if (scrollRef.current && window.LocomotiveScroll) {
        initializeScroll();
      }
    };
    document.head.appendChild(locomotiveJS);

    return () => {
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
      }
      document.head.removeChild(locomotiveCSS);
      document.head.removeChild(locomotiveJS);
    };
  }, []);

  const initializeScroll = () => {
    if (!scrollRef.current) return;

    scrollInstance.current = new window.LocomotiveScroll({
      el: scrollRef.current,
      direction: 'horizontal',
      smooth: true,
      lerp: 0.05,
      tablet: {
        smooth: true,
        direction: 'horizontal',
        gestureDirection: 'both'
      },
      smartphone: {
        smooth: true,
        direction: 'horizontal',
        gestureDirection: 'both'
      }
    });

    const images = scrollRef.current.querySelectorAll('.image');

    images.forEach((image: Element) => {
      image.addEventListener('click', () => {
        const imgElement = image as HTMLImageElement;
        setOverlayImage(imgElement.src);
        setIsOverlayVisible(true);
      });
    });

    setTimeout(showImages, 1000);
  };

  const showImages = () => {
    if (!scrollRef.current) return;
    const images = scrollRef.current.querySelectorAll('.image');
    images.forEach((image: Element) => {
      image.classList.remove('-clicked');
      image.classList.add('-active');
    });
  };

  const hideImages = () => {
    if (!scrollRef.current) return;
    const images = scrollRef.current.querySelectorAll('.image');
    images.forEach((image: Element) => {
      image.classList.remove('-active');
    });

    setTimeout(showImages, 2000);
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
    setTimeout(() => setOverlayImage(null), 300);
  };

  return (
    <div className="min-h-screen bg-gray-200 overflow-hidden">
      <Header />
      
      {/* Image Overlay */}
      {overlayImage && (
        <div 
          className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-300 ${
            isOverlayVisible ? 'opacity-90' : 'opacity-0'
          }`}
          onClick={closeOverlay}
        >
          <button
            onClick={closeOverlay}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={32} />
          </button>
          <img
            src={overlayImage}
            alt="Gallery overlay"
            className={`max-w-[90vw] max-h-[90vh] object-contain transition-all duration-500 ${
              isOverlayVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      
      <div className="scroll-animations-example" data-scroll-container ref={scrollRef}>
        <div className="scrollsection" data-scroll-section>
          <div className="item -normal" data-scroll data-scroll-speed="2">
            <img className="image" src="https://picsum.photos/id/1005/300/400" alt="Gallery image" />
          </div>
          <div className="item -big" data-scroll data-scroll-speed="1">
            <img className="image" src="https://picsum.photos/id/1019/600/800" alt="Gallery image" />
          </div>
          <div className="item -small -horizontal" data-scroll data-scroll-speed="4">
            <img className="image" src="https://picsum.photos/id/1027/400/300" alt="Gallery image" />
          </div>
          <div className="item -normal" data-scroll data-scroll-speed="3">
            <img className="image" src="https://picsum.photos/id/1028/300/400" alt="Gallery image" />
          </div>
          <div className="item -normal -horizontal" data-scroll data-scroll-speed="2">
            <img className="image" src="https://picsum.photos/id/1041/400/300" alt="Gallery image" />
          </div>
          <div className="item -big -horizontal" data-scroll data-scroll-speed="4">
            <img className="image" src="https://picsum.photos/id/1042/800/600" alt="Gallery image" />
          </div>
          <div className="item -small" data-scroll data-scroll-speed="2">
            <img className="image" src="https://picsum.photos/id/1049/300/400" alt="Gallery image" />
          </div>
          <div className="item -normal -horizontal" data-scroll data-scroll-speed="1">
            <img className="image" src="https://picsum.photos/id/1056/300/400" alt="Gallery image" />
          </div>
          <div className="item -small -horizontal" data-scroll data-scroll-speed="3">
            <img className="image" src="https://picsum.photos/id/1062/400/300" alt="Gallery image" />
          </div>
          <div className="item -big" data-scroll data-scroll-speed="1">
            <img className="image" src="https://picsum.photos/id/1068/600/800" alt="Gallery image" />
          </div>
          <div className="item -normal -horizontal" data-scroll data-scroll-speed="2">
            <img className="image" src="https://picsum.photos/id/1069/400/300" alt="Gallery image" />
          </div>
          <div className="item -normal -horizontal" data-scroll data-scroll-speed="1">
            <img className="image" src="https://picsum.photos/id/1072/300/400" alt="Gallery image" />
          </div>
          <div className="item -small -horizontal" data-scroll data-scroll-speed="4">
            <img className="image" src="https://picsum.photos/id/1075/400/300" alt="Gallery image" />
          </div>
          <div className="item -big" data-scroll data-scroll-speed="3">
            <img className="image" src="https://picsum.photos/id/1081/600/800" alt="Gallery image" />
          </div>
          <div className="item -normal -horizontal" data-scroll data-scroll-speed="2">
            <img className="image" src="https://picsum.photos/id/111/400/300" alt="Gallery image" />
          </div>
          <div className="item -small -horizontal" data-scroll data-scroll-speed="4">
            <img className="image" src="https://picsum.photos/id/129/400/300" alt="Gallery image" />
          </div>
          <div className="item -big" data-scroll data-scroll-speed="2">
            <img className="image" src="https://picsum.photos/id/137/600/800" alt="Gallery image" />
          </div>
          <div className="item -normal -horizontal" data-scroll data-scroll-speed="1">
            <img className="image" src="https://picsum.photos/id/141/300/400" alt="Gallery image" />
          </div>
          <div className="item -small -horizontal" data-scroll data-scroll-speed="3">
            <img className="image" src="https://picsum.photos/id/145/400/300" alt="Gallery image" />
          </div>
          <div className="item -normal" data-scroll data-scroll-speed="1">
            <img className="image" src="https://picsum.photos/id/147/300/400" alt="Gallery image" />
          </div>
        </div>
      </div>

      <style>{`
        .scroll-animations-example {
          touch-action: pan-x;
          -webkit-overflow-scrolling: touch;
        }
        .scroll-animations-example > .scrollsection {
          padding: 10vh 10vh 10vh 10vmax;
          min-width: 550vh;
        }
        .scroll-animations-example > .scrollsection > .item {
          display: inline-block;
          position: relative;
          margin: 0 -30vh 0 3vh;
        }
        
        @media (max-width: 768px) {
          .scroll-animations-example > .scrollsection {
            padding: 5vh 5vh 5vh 5vw;
            min-width: 300vh;
          }
          .scroll-animations-example > .scrollsection > .item {
            margin: 0 -15vh 0 2vh;
          }
          .scroll-animations-example > .scrollsection > .item.-big {
            height: 50vh !important;
            width: 37.5vh !important;
          }
          .scroll-animations-example > .scrollsection > .item.-big.-horizontal {
            height: 37.5vh !important;
            width: 50vh !important;
          }
          .scroll-animations-example > .scrollsection > .item.-normal {
            height: 40vh !important;
            width: 30vh !important;
          }
          .scroll-animations-example > .scrollsection > .item.-normal.-horizontal {
            height: 30vh !important;
            width: 40vh !important;
          }
          .scroll-animations-example > .scrollsection > .item.-small {
            height: 25vh !important;
            width: 18.75vh !important;
          }
          .scroll-animations-example > .scrollsection > .item.-small.-horizontal {
            height: 18.75vh !important;
            width: 25vh !important;
          }
        }
        .scroll-animations-example > .scrollsection > .item::before {
          content: '';
          display: inline-block;
          vertical-align: middle;
          height: 100%;
        }
        .scroll-animations-example > .scrollsection > .item.-big {
          height: 80vh;
          width: 60vh;
        }
        .scroll-animations-example > .scrollsection > .item.-big.-horizontal {
          height: 60vh;
          width: 80vh;
        }
        .scroll-animations-example > .scrollsection > .item.-normal {
          height: 60vh;
          width: 45vh;
          z-index: 1;
        }
        .scroll-animations-example > .scrollsection > .item.-normal.-horizontal {
          height: 45vh;
          width: 60vh;
        }
        .scroll-animations-example > .scrollsection > .item.-normal:nth-of-type(3n) {
          bottom: 5vh;
        }
        .scroll-animations-example > .scrollsection > .item.-normal:nth-of-type(4n) {
          bottom: -5vh;
        }
        .scroll-animations-example > .scrollsection > .item.-small {
          height: 40vh;
          width: 30vh;
          z-index: 2;
        }
        .scroll-animations-example > .scrollsection > .item.-small.-horizontal {
          height: 30vh;
          width: 40vh;
        }
        .scroll-animations-example > .scrollsection > .item.-small:nth-of-type(3n) {
          bottom: 13vh;
        }
        .scroll-animations-example > .scrollsection > .item.-small:nth-of-type(4n) {
          bottom: -13vh;
        }
        .scroll-animations-example > .scrollsection > .item > .image {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          filter: grayscale(1);
          opacity: 0;
          pointer-events: none;
          transform: translateX(0) translateY(0) scale(1);
          transition: filter 0.3s ease, opacity 1s ease, transform 1s ease;
        }
        .scroll-animations-example > .scrollsection > .item:nth-of-type(4n) > .image {
          transform: translateX(-30vh) translateY(-30vh) scale(0.8);
          transition-delay: 0;
        }
        .scroll-animations-example > .scrollsection > .item:nth-of-type(4n - 1) > .image {
          transform: translateX(30vh) translateY(30vh) scale(0.8);
          transition-delay: 0.05s;
        }
        .scroll-animations-example > .scrollsection > .item:nth-of-type(4n - 2) > .image {
          transform: translateX(-30vh) translateY(30vh) scale(0.8);
          transition-delay: 0.1s;
        }
        .scroll-animations-example > .scrollsection > .item:nth-of-type(4n - 3) > .image {
          transform: translateX(-30vh) translateY(-30vh) scale(0.8);
          transition-delay: 0.15s;
        }
        .scroll-animations-example > .scrollsection > .item > .image.-active {
          transform: translateX(0) translateY(0) scale(1);
          opacity: 0.8;
          pointer-events: auto;
          transition: filter 0.3s ease, opacity 1s ease, transform 1s ease;
        }
        .scroll-animations-example > .scrollsection > .item > .image.-clicked {
          transform: translateX(0) translateY(0) scale(5);
          opacity: 0;
          pointer-events: auto;
          transition: filter 0.3s ease, opacity 1s ease, transform 1s ease;
        }
        .scroll-animations-example > .scrollsection > .item > .image.-active:hover {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          filter: grayscale(0);
          opacity: 1;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
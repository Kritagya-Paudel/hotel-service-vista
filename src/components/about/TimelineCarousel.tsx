import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TimelineCarousel = () => {
  const timelineData = [
    {
      year: "1975",
      title: "Khumbu Lodge Established",
      description: "Khumbu Lodge was established, marking the beginning of a unique hospitality experience in the Everest region.",
      years: ["1975", "1985", "1990", "2005", "2020"],
      labels: ["LODGE ESTABLISHED", "LIBRARY BUILT", "VISIT BY PRESIDENT JIMMY CARTER", "EXPANSION PROJECT", "MODERNIZATION"],
      images: [
        { 
          src: "/lovable-uploads/khumbu-lodge-1975.jpg", 
          alt: "Khumbu Lodge in 1975", 
          className: "absolute top-1/4 left-2 md:left-4 w-32 h-24 md:w-48 md:h-36 lg:w-64 lg:h-48 rotate-[-8deg] z-10" 
        },
        { 
          src: "/lovable-uploads/khumbu-lodge-1975-exterior.jpg", 
          alt: "Khumbu Lodge exterior", 
          className: "absolute top-0 right-2 md:right-4 w-40 h-28 md:w-56 md:h-40 lg:w-72 lg:h-52 rotate-[3deg] z-10" 
        }
      ]
    },
    {
      year: "1985",
      title: "Library Built",
      description: "A dedicated library was built, enriching the lodge's cultural and educational offerings for guests and the community.",
      years: ["1975", "1985", "1990", "2005", "2020"],
      labels: ["LODGE ESTABLISHED", "LIBRARY BUILT", "VISIT BY PRESIDENT JIMMY CARTER", "EXPANSION PROJECT", "MODERNIZATION"],
      images: [
        { 
          src: "/lovable-uploads/khumbu-lodge-library.jpg", 
          alt: "Library at Khumbu Lodge", 
          className: "absolute top-1/3 left-4 md:left-8 w-28 h-20 md:w-44 md:h-32 lg:w-56 lg:h-40 rotate-[-12deg] z-10" 
        },
        { 
          src: "/lovable-uploads/khumbu-lodge-library-inside.jpg", 
          alt: "Inside the library", 
          className: "absolute top-1/4 right-4 md:right-8 w-28 h-36 md:w-40 md:h-48 lg:w-52 lg:h-60 rotate-[6deg] z-10" 
        }
      ]
    },
    {
      year: "1990",
      title: "Visit by President Jimmy Carter",
      description: "The lodge had the honor of hosting former U.S. President Jimmy Carter, highlighting its international recognition.",
      years: ["1975", "1985", "1990", "2005", "2020"],
      labels: ["LODGE ESTABLISHED", "LIBRARY BUILT", "VISIT BY PRESIDENT JIMMY CARTER", "EXPANSION PROJECT", "MODERNIZATION"],
      images: [
        { 
          src: "/lovable-uploads/jimmy-carter-visit.jpg", 
          alt: "President Jimmy Carter visiting Khumbu Lodge", 
          className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-32 md:w-64 md:h-44 lg:w-80 lg:h-56 rotate-[-2deg] z-10" 
        }
      ]
    },
    {
      year: "2005",
      title: "Expansion Project Completed",
      description: "A major expansion project was completed, adding more guest rooms and modern amenities while preserving the lodge's traditional charm.",
      years: ["1975", "1985", "1990", "2005", "2020"],
      labels: ["LODGE ESTABLISHED", "LIBRARY BUILT", "VISIT BY PRESIDENT JIMMY CARTER", "EXPANSION PROJECT", "MODERNIZATION"],
      images: [
        { 
          src: "/lovable-uploads/khumbu-lodge-expansion.jpg", 
          alt: "Khumbu Lodge expansion", 
          className: "absolute top-1/4 left-1/4 w-36 h-28 md:w-48 md:h-36 lg:w-60 lg:h-44 rotate-[-5deg] z-10" 
        }
      ]
    },
    {
      year: "2020",
      title: "Modernization",
      description: "Recent modernization efforts have enhanced guest comfort and sustainability, ensuring Khumbu Lodge remains a premier destination.",
      years: ["1975", "1985", "1990", "2005", "2020"],
      labels: ["LODGE ESTABLISHED", "LIBRARY BUILT", "VISIT BY PRESIDENT JIMMY CARTER", "EXPANSION PROJECT", "MODERNIZATION"],
      images: [
        { 
          src: "/lovable-uploads/khumbu-lodge-modern.jpg", 
          alt: "Modern Khumbu Lodge", 
          className: "absolute top-1/3 right-1/4 w-28 h-20 md:w-40 md:h-28 lg:w-52 lg:h-36 rotate-[12deg] z-10" 
        }
      ]
    }
  ];


  const [currentTimelineIndex, setCurrentTimelineIndex] = useState(0);

  const handlePreviousTimeline = () => {
    setCurrentTimelineIndex((prev) => (prev > 0 ? prev - 1 : timelineData.length - 1));
  };

  const handleNextTimeline = () => {
    setCurrentTimelineIndex((prev) => (prev < timelineData.length - 1 ? prev + 1 : 0));
  };

  const currentTimeline = timelineData[currentTimelineIndex];

  return (
    <section className="relative py-12 md:py-16 lg:py-24 px-4">
      <div className="container mx-auto max-w-6xl px-14 md:px-6">
        <div className="mb-8 md:mb-12 relative overflow-hidden min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
          <div className="relative">
            <div className="flex justify-center relative z-0">
              <h2 className="font-BOONE text-[6rem] md:text-[10rem] lg:text-[16rem] text-ocean-blue leading-none">
                {currentTimeline.year}
              </h2>
            </div>
            
            {/* Historical Photos Overlay */}
            {currentTimeline.images.map((image, index) => (
              <img 
                key={index}
                src={image.src} 
                alt={image.alt} 
                className={`${image.className} object-cover shadow-lg border-2 md:border-4 border-white transition-all duration-500 ease-in-out hover:scale-105`}
              />
            ))}
          </div>
          
          <h3 className="font-BOONE text-lg md:text-xl lg:text-2xl text-steel-blue text-center mt-6 md:mt-8 mb-3 md:mb-4 relative z-20 px-2">
            {currentTimeline.title}
          </h3>
          <p className="font-AvenirLight text-xs md:text-sm lg:text-base text-center mx-auto max-w-3xl relative z-20 px-2 leading-relaxed text-forest-green">
            {currentTimeline.description}
          </p>
        </div>
        
        <div className="flex justify-between mt-8 md:mt-20 border-t border-steel-blue/20 pt-4 pb-2">
          {currentTimeline.years.map((year, index) => (
            <div key={year} className={`font-BOONE text-sm md:text-lg lg:text-2xl ${
              index === currentTimelineIndex
                ? 'text-ocean-blue'
                : index < currentTimelineIndex
                  ? 'text-steel-blue'
                  : 'text-sky-blue'
            }`}>
              {year}
            </div>
          ))}
        </div>
        <div className="hidden md:flex justify-between text-[8px] md:text-xs uppercase tracking-wider font-AvenirLight">
          {currentTimeline.labels.map((label, index) => (
            <div key={label} className={`text-center max-w-[80px] lg:max-w-none ${
              index === currentTimelineIndex
                ? 'text-ocean-blue'
                : index < currentTimelineIndex
                  ? 'text-steel-blue'
                  : 'text-sky-blue'
            }`}>
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Edge-positioned square nav buttons */}
      <Button
        onClick={handlePreviousTimeline}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-ocean-blue hover:bg-steel-blue rounded-none h-12 w-12 md:h-14 md:w-14 p-0 flex items-center justify-center border-2 border-steel-blue/40"
      >
        <span className="sr-only">Previous</span>
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </Button>
      <Button
        onClick={handleNextTimeline}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-ocean-blue hover:bg-steel-blue rounded-none h-12 w-12 md:h-14 md:w-14 p-0 flex items-center justify-center border-2 border-steel-blue/40"
      >
        <span className="sr-only">Next</span>
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </Button>
    </section>
  );
};

export default TimelineCarousel;

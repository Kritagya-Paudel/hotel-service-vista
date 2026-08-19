
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselImages = [
  {
    id: 1,
    src: "/lovable-uploads/gallery/gallery-04.jpeg",
    alt: "The lodge frontage in Namche Bazaar, with Himalayan Java Coffee below"
  },
  {
    id: 2,
    src: "/lovable-uploads/gallery/gallery-05.jpeg",
    alt: "The dining room and hand-painted bar at the heart of the lodge"
  },
  {
    id: 3,
    src: "/lovable-uploads/gallery/gallery-01.jpeg",
    alt: "Framed mountain photography lining the lodge corridor"
  },
  {
    id: 4,
    src: "/lovable-uploads/gallery/gallery-02.jpeg",
    alt: "The stone-paved lane running past the lodge in Namche Bazaar"
  },
  {
    id: 5,
    src: "/lovable-uploads/gallery/gallery-03.jpeg",
    alt: "Namche Bazaar seen from the trail above, cupped in its mountain bowl"
  }
];

export const PhotoCarousel = () => {
  return (
    <div className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {carouselImages.map((image) => (
            <CarouselItem key={image.id}>
              <div className="relative aspect-[4/4] overflow-hidden shadow-2xl border border-background/20">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground border-0 shadow-lg" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground border-0 shadow-lg" />
      </Carousel>
    </div>
  );
};

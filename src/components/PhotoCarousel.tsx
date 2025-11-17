
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
    src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
    alt: "Luxurious hotel living room with modern amenities"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
    alt: "Alpine wildlife and mountain scenery"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
    alt: "Evening ambiance with warm lighting"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
    alt: "Serene mountain lake surrounded by trees"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop",
    alt: "Mountain river valley with dramatic clouds"
  }
];

export const PhotoCarousel = () => {
  return (
    <div className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {carouselImages.map((image) => (
            <CarouselItem key={image.id}>
              <div className="relative aspect-[4/4] overflow-hidden rounded-lg shadow-2xl border border-muted/20">
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

      {/* Decorative Elements */}
      <div className="absolute -top-8 -right-8 w-24 h-24 bg-muted/10 rounded-full blur-xl" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
    </div>
  );
};

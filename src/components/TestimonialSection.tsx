
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";


const testimonials = [
  {
    id: 1,
    quote: "A great Family and fine hospitality",
    description: "In 1987, we had the honor of hosting the former US President Jimmy Carter. During his stay, he praised Khumbu Lodge for its welcoming family atmosphere and the genuine Sherpa hospitality that has remained our pride ever since.",
    source: "Former US President Jimmy Carter"
  },
  {
    id: 2,
    quote: "The best place to stay in the Himalayas",
    description: "We were privileged to welcome astronaut Scott Parazynski, who has been to space five times. After experiencing the heights of the Himalayas with us, he called Khumbu Lodge the best place to stay in the region.",
    source: "Astronaut Scott Parazynski (STS-66, 86, 95, 100, 120)"
  },
  {
    id: 3,
    quote: "17th times in Khumbu... 15 times in Khumbu Lodge. I hope there will be many more",
    description: "Tim McGrath from Ireland has returned to Khumbu Lodge fifteen times over the years. His loyalty speaks volumes about the warmth, comfort, and friendships that keep our guests coming back.",
    source: "Tim McGrath, Ireland"
  },
  {
    id: 4,
    quote: "Best Yak Steak",
    description: "Claus Bundgaard from Denmark delighted in our signature yak steak, calling it the best he has ever tasted. It’s a dish we prepare with care, bringing the flavors of the Himalayas to your plate.",
    source: "Claus Bundgaard, Denmark"
  }
];



const TestimonialSection = () => {
  return (
    <section className="py-16 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-BOONE text-4xl md:text-6xl font-serif text-primary mb-4">
            In The Press
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto relative">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  {/* Desktop Layout */}
                  <div className="hidden md:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[400px] px-4 lg:px-16">
                    {/* Quote Mark and Quote */}
                    <div className="lg:col-span-6 flex items-start space-x-4 lg:space-x-8">
                      <div className="text-6xl lg:text-8xl font-serif text-primary leading-none mt-2">
                        "
                      </div>
                      <div className="flex-1">
                        <div className="w-20 h-0.5 bg-foreground mb-6"></div>
                        <h3 className="font-AvenirBlack text-2xl lg:text-4xl font-serif text-primary leading-tight">
                          {testimonial.quote}
                        </h3>
                      </div>
                    </div>

                    {/* Description and Source */}
                    <div className="lg:col-span-5 space-y-6">
                      <p className="font-AvenirLight text-foreground/60 lg:text-lg text-muted-foreground leading-relaxed">
                        {testimonial.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="font-AvenirBlack text-sm font-medium tracking-wider text-foreground/100 uppercase">
                          {testimonial.source}
                        </p>
                        {/* <ChevronRight className="w-6 h-6 text-foreground" /> */}
                      </div>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="lg:col-span-1"></div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden px-4 py-8 text-center min-h-[400px] flex flex-col justify-center">
                    {/* Large quote mark centered */}
                    <div className="text-8xl font-serif text-foreground leading-none mb-8">
                      "
                    </div>
                    
                    {/* Quote */}
                    <h3 className="font-AvenirBlack text-2xl font-serif text-foreground leading-tight mb-8 px-4">
                      {testimonial.quote}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-AvenirLight text-base text-muted-foreground leading-relaxed mb-8 px-4">
                      {testimonial.description}
                    </p>
                    
                    {/* Source */}
                    <p className="font-AvenirBlack text-sm font-medium tracking-wider text-foreground uppercase">
                      {testimonial.source}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Desktop Navigation - positioned on the sides */}
            <CarouselPrevious className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 bg-background hover:bg-muted text-foreground border-foreground/20 shadow-lg h-12 w-12" />
            <CarouselNext className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 bg-background hover:bg-muted text-foreground border-foreground/20 shadow-lg h-12 w-12" />
            
            {/* Mobile Navigation - positioned on the sides but smaller */}
            <CarouselPrevious className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 bg-background hover:bg-muted text-foreground border-foreground/20 shadow-lg h-10 w-10" />
            <CarouselNext className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 bg-background hover:bg-muted text-foreground border-foreground/20 shadow-lg h-10 w-10" />
          </Carousel>
        </div>
      </div>
      <div className="px-[5rem]">
        <div className="border-t border-foreground-300 w-full"></div>
      </div>

    </section>
  );
};

export default TestimonialSection;

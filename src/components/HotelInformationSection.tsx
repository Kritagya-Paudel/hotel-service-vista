
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from 'lucide-react';

const hotelInfo = [
  {
    id: 'rooms',
    number: '01',
    title: 'ROOMS & APARTMENTS',
    content: 'Khumbu Lodge offers 20 rooms with attached bathrooms, 25 normal private rooms to cater to budget travellers without compromising comfort, and 9 fully furnished apartments for long-term stays. Different ranges of rooms suit every budget.'
  },
  {
    id: 'restaurant',
    number: '02',
    title: 'RESTAURANT',
    content: 'Our restaurant serves local delicacies through to international cuisine, enjoyed with a 360 degree view of Namche and the majestic mountains around it.'
  },
  {
    id: 'location',
    number: '03',
    title: 'LOCATION',
    content: 'Namche Bazar-3, Solukhumbu, Nepal — at 3,443 metres, the gateway to Mt. Everest Base Camp. The lodge sits in the centre of Namche, with more than four decades of history and reputation lining its corridors.'
  },
  {
    id: 'reservations',
    number: '04',
    title: 'RESERVATIONS & ENQUIRIES',
    content: 'Rates, availability, arrival times and cancellation terms are confirmed directly with us. Write to info@khumbulodge.com or call +977 38-540144 / 540166, and we will answer with everything you need for your stay.'
  }
];

const HotelInformationSection = () => {
  return (
    <section className="py-10 pb-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-AvenirLight text-secondary text-xs uppercase tracking-[0.35em] mb-6">
            Additional Info
          </p>
          <h2 className="font-Editorial text-4xl md:text-6xl tracking-[-0.02em] text-primary mb-6">
            Hotel &amp; Room <em className="italic">Information</em>
          </h2>
          <p className="font-AvenirLight text-foreground/80 text-lg max-w-2xl mx-auto">
            What we can tell you before you arrive — and how to reach us for the rest
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-1">
          <Accordion type="single" collapsible className="w-full">
            {hotelInfo.map((info) => (
              <AccordionItem 
                key={info.id} 
                value={info.id}
                className="border-b border-border hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline group py-8 [&[data-state=open]>div>svg]:rotate-45">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-6">
                      <span className="font-Editorial italic text-secondary text-lg min-w-[2rem]">
                        {info.number}
                      </span>
                      <span className="font-AvenirLight text-foreground font-medium text-base md:text-lg uppercase tracking-wide">
                        {info.title}
                      </span>
                    </div>
                    {/* <Plus className="h-5 w-5 text-primary transition-transform duration-200 flex-shrink-0 ml-4" /> */}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-8 pl-12">
                  <p className="font-AvenirLight leading-relaxed">
                    {info.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HotelInformationSection;

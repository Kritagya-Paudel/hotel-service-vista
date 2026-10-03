
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Utensils, Coffee, BookOpen, Stethoscope, WashingMachine, Wifi, Package, Plane, Droplets, Info } from 'lucide-react';

const services = [
  {
    id: 'restaurant',
    title: 'Restaurant',
    icon: Utensils,
    content: `Serving Sherpa delicacies to international cuisine, our restaurant offers a diverse culinary experience complemented by fresh local coffee and Lavazza coffee. Guests can relax in a comfortable seating arrangement while enjoying access to a well-stocked library and Wi-Fi. And of course, you’ll be treated to the best view in all of Namche.`
  },
  {
    id: 'himalayan-java',
    title: 'Himalayan Java',
    icon: Coffee,
    content: `Nepal’s finest coffee franchise, Himalayan Java, sits on the same premises, so a proper espresso, cappuccino or flat white is a few steps from your room. Freshly roasted Nepali beans, at 3,440 metres.`
  },
  {
    id: 'mini-library',
    title: 'Mini Library',
    icon: BookOpen,
    content: `For those guests staying here for an acclimatization day, enjoy reading a large collection of books on mountaineering, Sherpa culture, and Buddhism.`
  },
  {
    id: 'doctors-on-call',
    title: 'Doctors on Call',
    icon: Stethoscope,
    content: `We own the hospital in Namche, so a doctor can be called to the lodge whenever a guest needs one, day or night. Altitude sickness, minor injuries and trail ailments can all be looked at without you going anywhere.`
  },
  {
    id: 'laundry',
    title: 'Laundry on Command',
    icon: WashingMachine,
    content: `Quick laundry service on request. Hand it in and have it back clean and dry, ready for the next leg of the trek.`
  },
  {
    id: 'wifi',
    title: 'Complimentary Wi-Fi',
    icon: Wifi,
    content: `Wi-Fi is complimentary for all our guests. Khumbu Lodge was the first to bring Internet to Namche, using V-SAT technology, and we still keep guests connected today. A postal service is also available for hotel guests.`
  },
  {
    id: 'storage',
    title: 'Complimentary Storage',
    icon: Package,
    content: `Leave what you don’t need with us, free of charge, while you trek higher up the mountain, and collect it on your way back down.`
  },
  {
    id: 'helicopter',
    title: 'Helicopter Charter & Flight Ticketing',
    icon: Plane,
    content: `Ticketing and booking reconfirmation while you are in Namche or anywhere else in Sagarmatha National Park.
If you need to change or book an air ticket, we will do that. We also arrange helicopter charters, including sightseeing flights over the Khumbu.`
  },
  {
    id: 'uv-filter',
    title: 'Ultraviolet Filter',
    icon: Droplets,
    content: `In an effort to minimize pollution in Sagarmatha National Park, KL introduced ultraviolet water with a 0.5 micron filter.`
  },
  {
    id: 'free-info',
    title: 'Free Local Information',
    icon: Info,
    content: `Liquid gold information that you cannot find on the internet, straight from the owner himself. Trekking routes, altitude sickness, weather, what is actually open further up the valley.`
  }
];

export const ServiceAccordion = () => {
  return (
    <div className="space-y-2">
      <Accordion type="single" collapsible className="w-full">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <AccordionItem 
              key={service.id} 
              value={service.id}
              className="border-background/20 hover:border-background/40 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline group py-6 gap-3 pr-1 [&>svg]:text-white">
                <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                  <IconComponent className="h-5 w-5 shrink-0 text-background/60 group-hover:text-background transition-colors" />
                  <span className="font-AvenirLight text-background uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[13px] sm:text-sm md:text-base group-hover:text-background transition-colors">
                    {service.title}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="font-AvenirLight text-background/75 pb-6 pl-9">
                <p className="leading-relaxed">
                  {service.content}
                </p>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SkiingSection = () => {
  return (
    <section className="bg-ocean-blue text-white py-12 md:py-16 lg:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 text-steel-blue text-[8rem] md:text-[12rem] lg:text-[20rem] leading-none opacity-10 font-serif">
        KHUMBU LODGE
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <Card className="bg-light-blue border-steel-blue border rounded-none overflow-hidden">
          <CardContent className="p-2">
  <div className="font-AvenirLight border-2 border-ocean-blue p-1">
    <div className="border-2 border-ocean-blue p-4">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="p-6 md:p-8 lg:p-12">
          <h2 className="font-BOONE text-3xl md:text-4xl lg:text-5xl font-serif italic text-ocean-blue mb-4 leading-tight">
            Khumbu Lodge –<br />
            <span className="italic">Hospitality at the Top of the World</span>
          </h2>
          <p className="font-AvenirBlack text-lg md:text-xl lg:text-2xl font-medium text-steel-blue mb-6 md:mb-8 leading-relaxed">
            Established in 1975 in Namche Bazaar, Khumbu Lodge has been welcoming trekkers, mountaineers, and travelers from all over the globe for nearly five decades.
          </p>
          <p className="text-sm md:text-base text-forest-green mb-4 leading-relaxed">
            As one of the oldest family-run lodges in the Everest region, we pride ourselves on warm Sherpa hospitality and unmatched comfort. Whether you are acclimatizing on your way to Everest Base Camp or seeking a peaceful stay in Namche, our lodge offers the perfect retreat surrounded by the grandeur of the Himalayas.
          </p>
          <p className="text-sm md:text-base text-forest-green leading-relaxed">
            From our rooms, guests enjoy panoramic views of snow-capped peaks while experiencing a blend of tradition and modern amenities—making every stay both memorable and rejuvenating.
          </p>
        </div>
        <div className="p-6 md:p-8 lg:p-12 border-l border-steel-blue/20">
          <p className="text-sm md:text-base text-forest-green mb-4 leading-relaxed">
            Khumbu Lodge offers 54 rooms, ranging from standard accommodations to private ensuite options and furnished apartments for longer stays. Every room is designed to ensure comfort in the high-altitude environment of Namche Bazaar (3,443 m).
          </p>
          <p className="text-sm md:text-base text-forest-green mb-4 leading-relaxed">
            Our restaurant serves authentic Sherpa cuisine alongside international favorites, with ingredients sourced locally and coffee brewed to perfection—all enjoyed with breathtaking views of Namche valley and the surrounding peaks.
          </p>
          <p className="text-sm md:text-base text-forest-green mb-6 md:mb-8 leading-relaxed">
            Over the years, Khumbu Lodge has hosted countless trekkers, volunteers, and climbers, earning a reputation as a home away from home in the heart of the Himalayas. Here, every guest is part of our family.
          </p>
          <p className="text-sm md:text-base font-medium mb-4 text-forest-green">Warm regards,</p>
          <div className="font-AvenirBlack italic text-xl md:text-2xl font-serif text-ocean-blue">
            Pemba Sherpa & Family
          </div>
          <div className="mt-4">
            <img src="/lovable-uploads/signature.png" alt="Sherpa Seal" className="h-[5rem] w-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  </div>
</CardContent>

        </Card>
        <div className="flex justify-center mt-6 md:mt-8">
          <Button className="bg-light-blue hover:bg-sky-blue text-ocean-blue border border-steel-blue rounded-none px-6 md:px-8 text-sm md:text-base">
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkiingSection;

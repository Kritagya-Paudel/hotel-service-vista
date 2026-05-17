
import { Button } from "@/components/ui/button";

const WelcomeSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-2 text-center mb-8 md:mb-12">
            <p className="font-AvenirBlack text-xs md:text-sm uppercase tracking-widest text-forest-green mb-4">ABOUT THE HOTEL</p>
            <h2 className="font-BOONE text-3xl md:text-4xl lg:text-6xl font-serif italic text-ocean-blue leading-tight">
              Welcome to<br />
              <span className="text-4xl md:text-5xl lg:text-7xl">Khumbu Lodge</span>
            </h2>
            
          </div>
          
          <div className="order-2 lg:order-1">
            <img 
              src="/lovable-uploads/Khumbu-front.jpeg" 
              alt="Khumbu Lodge Entrance"
              className="w-full h-[43rem] object-cover"
            />
          </div>
          
          <div className="order-1 lg:order-2 flex flex-col justify-center space-y-4 md:space-y-6">
            <h3 className="font-AvenirBlack text-xl md:text-2xl lg:text-3xl font-serif text-ocean-blue leading-relaxed">
              Since 1927, the Khumnu Lodge has embodied alpine charm, blending tradition with modern luxury. Thoughtfully expanded over the years, it retains its nostalgic family atmosphere while offering exceptional comfort.
            </h3>
            <p className="font-AvenirLight text-sm md:text-base text-forest-green leading-relaxed">
              Now guided by the Sherpa family who founded it decades ago, Khumbu Lodge has changed little in spirit. The rooms are warmer, the meals heartier, yet the feeling endures: a home built for high mountain life, where trekkers are greeted with easy familiarity and cared for as if they’ve been here before.            </p>
            <p className="font-AvenirLight text-sm md:text-base text-forest-green leading-relaxed">
              Along the stairwell, old photographs trace the lodge’s beginnings—of early expeditions and dusty footpaths, of climbers and porters who shared stories long into the night. Their presence lingers still, not in grand displays, but in the crackle of the stove on cold mornings and the way the staff remember exactly when you like your tea.
            </p>
            <p className="font-AvenirLight text-sm md:text-base text-forest-green leading-relaxed mb-6">
              Some lodges are made to impress. Khumbu Lodge was made to belong.
            </p>
            <Button className="font-AvenirBlack self-start bg-transparent hover:bg-transparent text-ocean-blue border-b-2 border-ocean-blue rounded-none px-0 font-bold text-sm md:text-base">
              OUR HISTORY
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

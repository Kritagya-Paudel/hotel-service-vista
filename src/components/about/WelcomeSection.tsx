
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
              alt="Lorünser Hotel Entrance" 
              className="w-full h-[43rem] object-cover"
            />
          </div>
          
          <div className="order-1 lg:order-2 flex flex-col justify-center space-y-4 md:space-y-6">
            <h3 className="font-AvenirBlack text-xl md:text-2xl lg:text-3xl font-serif text-ocean-blue leading-relaxed">
              Since 1927, the Khumnu Lodge has embodied alpine charm, blending tradition with modern luxury. Thoughtfully expanded over the years, it retains its nostalgic family atmosphere while offering exceptional comfort.
            </h3>
            <p className="font-AvenirLight text-sm md:text-base text-forest-green leading-relaxed">
              Now in the hands of the Jochum family's third generation, little has changed in spirit. The comforts are finer, the dining more refined, but the feeling remains the same: a house built for mountain life, where guests are welcomed with quiet familiarity and looked after with care.
            </p>
            <p className="font-AvenirLight text-sm md:text-base text-forest-green leading-relaxed">
              In the ski cellar, a small museum tells the story of those early days—of rope tows and wooden skis, of guides and guests who became lifelong friends. Their mark is still felt, not in spectacle, but in the way the snow squeaks underfoot, and the way the staff know just how you take your coffee.
            </p>
            <p className="font-AvenirLight text-sm md:text-base text-forest-green leading-relaxed mb-6">
              Some places are made to impress. The Lorünser was made to endure.
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

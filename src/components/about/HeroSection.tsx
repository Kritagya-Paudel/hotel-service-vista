
const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat" 
             style={{ backgroundImage: `url('/lovable-uploads/Khumbu-front.jpeg')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative container mx-auto h-full flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="font-BOONE text-4xl md:text-6xl lg:text-8xl font-serif italic mb-4">Our Story</h1>
        <div className="font-AvenirLight flex flex-col items-center mb-8 md:mb-12">
          <p className="text-xs md:text-sm uppercase tracking-widest mb-2">SINCE 1927</p>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-serif italic text-center max-w-xs md:max-w-none">
            More Than a Hotel,<br />
            a Heritage of Hospitality
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';



const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        >
        <source src="/lovable-uploads/namche-aerial-shot.mp4" type="video/mp4" />
      </video>

      {/* Content */}
        <div className="font-BOONE absolute z-10 h-full flex flex-col justify-end items-center text-center text-background px-0 pb-[8rem]">
          <h2 className="text-[2.8rem] font-normal mb-5">
            Finest Lodge in
          </h2>
          <div className="flex justify-between w-screen text-[8vw] md:text-[6vw] font-bold uppercase tracking-0 px-4">
            <span>N</span>
            <span>A</span>
            <span>M</span>
            <span>C</span>
            <span>H</span>
            <span>E</span>
            <span>B</span>
            <span>A</span>
            <span>Z</span>
            <span>A</span>
            <span>R</span>
          </div>
          <p className="text-[2rem] md:text-[2rem] max-md:text-[1.2rem] mt-5 italic tracking-[0.5em]">
          1 9 7 3
          </p>
        </div>
    </section>
  );
};

export default HeroSection;

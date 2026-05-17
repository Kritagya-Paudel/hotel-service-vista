import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!videoRef.current) return;
      const scrollY = window.scrollY;
      // Video moves at half scroll speed (parallax)
      videoRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative h-[calc(100vh-6rem)] sm:h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-[120%] object-cover -top-[10%] hero-parallax"
      >
        <source src="/lovable-uploads/namche-aerial-shot.mp4" type="video/mp4" />
      </video>

      {/* Subtle dark gradient at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-[1]" />

      {/* Content */}
      <div className="font-BOONE absolute z-10 h-full flex flex-col justify-end items-center text-center text-background px-0 pb-[4rem] sm:pb-[6rem] md:pb-[8rem]">
        <h2 className="text-[1.4rem] sm:text-[2rem] md:text-[2.8rem] font-normal mb-3 md:mb-5 reveal revealed">
          Finest Lodge in
        </h2>
        <div className="flex justify-between w-screen text-[8vw] md:text-[6vw] font-bold uppercase tracking-0 px-4 reveal revealed reveal-delay-1">
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
        <p className="text-[1rem] sm:text-[1.5rem] md:text-[2rem] mt-3 md:mt-5 italic tracking-[0.5em] reveal revealed reveal-delay-2">
          1 9 7 3
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

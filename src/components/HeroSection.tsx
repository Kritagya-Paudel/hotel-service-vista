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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/lovable-uploads/hero-poster.jpg"
        className="absolute inset-0 w-full h-[120%] object-cover -top-[10%] hero-parallax"
      >
        <source src="/lovable-uploads/namche-aerial-shot.mp4" type="video/mp4" />
      </video>

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20"></div>

      {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end items-center text-center text-background px-0 pb-[5rem] md:pb-[7rem]">
          <p className="font-Editorial italic text-2xl md:text-4xl mb-6 reveal revealed">
            The finest lodge in
          </p>
          <h1 className="font-Editorial flex justify-between w-full text-[9vw] md:text-[7vw] leading-none tracking-[-0.02em] px-4 md:px-6 reveal revealed reveal-delay-1">
            {'NAMCHEBAZAR'.split('').map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </h1>
          <p className="font-AvenirLight text-[0.7rem] md:text-xs uppercase tracking-[0.5em] mt-8 reveal revealed reveal-delay-2">
            The finest home for trekkers since 1973
          </p>
        </div>
    </section>
  );
};

export default HeroSection;

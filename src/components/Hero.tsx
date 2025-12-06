const Hero = () => {
  return (
    <section className="relative w-full max-w-full min-h-[100vh] md:min-h-[120vh] overflow-hidden bg-black flex items-center justify-center">
      {/* Full Background Image */}
      <div className="w-full max-w-full flex items-center justify-center py-10 md:pt-20 px-4 md:px-0">
        <img 
          src="https://res.cloudinary.com/dez7clpi8/image/upload/v1764699237/Screenshot_2025-12-02_234329_udxynn.png"
          alt="Hero Background"
          className="w-full max-w-full md:max-w-[1920px] h-auto object-contain"
        />
      </div>

      {/* Floating elements - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-lg rotate-12 animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-accent/20 rounded-lg -rotate-12 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 border-2 border-primary/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>



      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

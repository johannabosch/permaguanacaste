const Hero = () => {
  return (
    <section 
      className="hero h-[90vh] w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="hero-overlay bg-black bg-opacity-40"></div>
      
      <div className="hero-content text-center text-white z-10 absolute inset-0 flex items-center justify-center pt-0 pb-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl lg:text-6xl mb-8 font-maname tracking-wide">
            P E R M A G U A N A C A S T E
          </h1>
          <p className="text-xl lg:text-2xl font-anicizer italic leading-relaxed max-w-3xl mx-auto tracking-widest">
            Landscape Design and Consultation
          </p>
          <p className="text-lg lg:text-xl font-anicizer italic opacity-90 tracking-widest">
            Guanacaste, Costa Rica
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero; 
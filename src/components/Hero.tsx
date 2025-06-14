const Hero = () => {
  return (
    <section 
      className="hero h-[70vh] w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="hero-overlay bg-black bg-opacity-40"></div>
      
      <div className="hero-content text-center text-white z-10 absolute inset-0 flex items-start justify-center pt-24 lg:pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl mb-6 font-maname tracking-wide">
            P E R M A G U A N A C A S T E
          </h1>
          <p className="text-lg lg:text-xl font-anicizer italic leading-relaxed max-w-3xl mx-auto tracking-widest">
            Landscape Design and Consultation
          </p>
          <p className="text-base lg:text-lg font-anicizer italic opacity-90 tracking-widest">
            Guanacaste, Costa Rica
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
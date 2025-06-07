const FoodSystems = () => {
  return (
    <div>
      {/* Hero-style heading section */}
      <section className="py-20 bg-gradient-to-b from-green-800 to-green-600">
        <div className="container mx-auto px-4 lg:px-8 text-center text-white">
          <h1 className="text-5xl lg:text-6xl mb-8 font-maname tracking-wide">
            F O O D   S Y S T E M   D E S I G N S
          </h1>
          <p className="text-xl lg:text-2xl font-anicizer italic leading-relaxed max-w-3xl mx-auto tracking-widest">
            Regenerative Food Production Systems
          </p>
          <p className="text-lg lg:text-xl font-anicizer italic opacity-90 tracking-widest">
            From Garden to Table
          </p>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="text-center">
            <div className="rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-maname tracking-wide mb-6">
                Food Forest Design
              </h3>
              <p className="text-lg font-maname text-gray-700 leading-relaxed mb-6">
                Our food forest designs mimic natural forest ecosystems while producing abundant harvests. 
                We create multi-layered systems with canopy trees, understory shrubs, herbaceous plants, 
                ground covers, and root crops that work together symbiotically.
              </p>
              <p className="text-lg font-maname text-gray-700 leading-relaxed">
                These self-sustaining systems require minimal maintenance once established, providing 
                year-round food production while building soil health, sequestering carbon, and creating 
                habitat for beneficial wildlife.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-maname tracking-wide mb-6">
                Market Garden Systems
              </h3>
              <p className="text-lg font-maname text-gray-700 leading-relaxed mb-6">
                We design intensive market garden systems that maximize production in small spaces using 
                permaculture principles. Our designs incorporate companion planting, succession planting, 
                and integrated pest management for optimal yields.
              </p>
              <p className="text-lg font-maname text-gray-700 leading-relaxed">
                These systems are perfect for families wanting fresh produce year-round or small-scale 
                farmers looking to increase productivity while reducing external inputs and building 
                long-term soil fertility.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-maname tracking-wide mb-6">
                Integrated Livestock Systems
              </h3>
              <p className="text-lg font-maname text-gray-700 leading-relaxed mb-6">
                Our livestock integration designs create beneficial relationships between animals and plants. 
                Chickens provide pest control and fertilizer, goats clear brush and provide milk, and 
                rotational grazing systems improve pasture health.
              </p>
              <p className="text-lg font-maname text-gray-700 leading-relaxed">
                These systems close nutrient loops, reduce waste, and create diverse income streams while 
                maintaining animal welfare and environmental health. Every element serves multiple functions 
                in the overall food production system.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-maname tracking-wide mb-6">
                Seed to Table Planning
              </h3>
              <p className="text-lg font-maname text-gray-700 leading-relaxed mb-6">
                We design complete food systems that include seed saving, food processing, preservation, 
                and storage facilities. Our holistic approach ensures food security and reduces dependence 
                on external food sources.
              </p>
              <p className="text-lg font-maname text-gray-700 leading-relaxed">
                From planning seasonal harvests to designing root cellars and fermentation spaces, we help 
                you create a complete food system that provides nourishment throughout the year while 
                connecting you deeply to your land and food sources.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default FoodSystems; 
const Banner = () => {
    return (
      <section className="relative bg-gray-100 py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-yellow-500 font-semibold mb-2">WELCOME TO NOSEI</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Best IT-Solution <br /> And Business
            </h1>
            <p className="text-gray-600 mb-6">
              We provide top-quality IT solutions to help your business grow.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Get Started
            </button>
          </div>
  
          {/* Right Image */}
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <img
              src="/banner-image.png"
              alt="IT Solution"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Banner;
  
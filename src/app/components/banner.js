import Button from "./Button";

const Banner = () => {
  return (
    <section
      className="relative bg-gray-100 py-32 
      bg-[url('/banner.jpeg')] bg-cover bg-right bg-no-repeat"
    >
      <div className="absolute inset-0 bg-blue-900 opacity-80"></div>

      <div className="container relative mx-auto mt-10 flex flex-col lg:flex-row items-center justify-between px-6">
        {/* Left Content */}
        <div className="lg text-center lg:text-left p-6 rounded-md">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-7 leading-tight">
            AI-Powered, Scalable, & Agile driven Software Solutions.
          </h1>

          <p className="text-xl mb-6">
            We transform your vision into cutting-edge software solutions,
            leveraging AI, cloud, and agile development for scalable success.
          </p>

          <div className="flex  justify-center lg:justify-start">
            <Button href="" text="DISCOVER MORE" px="8" py="3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

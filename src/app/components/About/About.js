import AboutCompany from "./AboutCompany";
import Card from "./Card";
import ClientSatisfaction from "./ClientSatisfaction";
import ImageGrid from "./ImageGrid";

const About = () => {
  return (
    <section className="bg-gray-100 py-16 bg-cover bg-right bg-no-repeat relative">
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-x-8 px-4 sm:px-6 lg:px-8 z-10">
        {/* Right Section: About Company */}
        <div className="w-full ">
          <AboutCompany />
        </div>
      </div>
    </section>
  );
};

export default About;

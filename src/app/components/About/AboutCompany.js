import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { BsGlobe } from "react-icons/bs";
import Button from "../Button";

const AboutCompany = () => {
  return (
    <section className=" py-16 px-6 ">
      <div className="container mx-auto max-w-6xl">
        {/* Heading Section */}
        <h2 className="text-primary uppercase text-3xl font-bold tracking-wider mb-2 flex items-center">
          About Our Company
          <span className="w-16 h-1 bg-primary ml-2"></span>
        </h2>
        
        <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed mb-8">
          At Scrum-Stack, we are a team of visionary engineers, AI enthusiasts,
          and agile experts committed to building software that scales. We
          specialize in AI-driven applications, SaaS solutions, rapid MVP
          development, and IT consultancy—helping businesses stay ahead in an
          ever-evolving tech landscape.
          <br />
          Our expertise ensures that from ideation to execution, your software
          is secure, scalable, and future-ready. With a strong focus on AI,
          automation, and digital transformation, we work with startups and
          enterprises alike to create high-performing, scalable software
          solutions that drive real business impact.
        </p>
        <h3 className="text-lg sm:text-lg font-bold text-secondary leading-tight mb-4">
          🚀 Innovation Through Agility
        </h3>
        <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed mb-8">
          We follow a scrum-based agile approach to rapidly deliver high-quality
          software—allowing businesses to iterate, grow, and scale with
          confidence. From Concept to Execution—We Build What Matters.
        </p>
      </div>
    </section>
  );
};

export default AboutCompany;

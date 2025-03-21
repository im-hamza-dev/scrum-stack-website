import Card from "./Card";

const servicesData = [
  {
    image: "/service1.jpg",
    title: "Ai Chatbots",
    description:
      "We've designed a culture that allows our stewards to assimilate.",
  },
  {
    image: "/service2.jpg",
    title: "Software Development",
    description:
      "We've designed a culture that allows our stewards to assimilate.",
  },
  {
    image: "/service3.jpg",
    title: "SAAS Development",
    description:
      "We've designed a culture that allows our stewards to assimilate.",
  },
  {
    image: "/service3.jpg",
    title: "Mobile App Development",
    description:
      "We've designed a culture that allows our stewards to assimilate.",
  },
  {
    image: "/service3.jpg",
    title: "Web Development",
    description:
      "We've designed a culture that allows our stewards to assimilate.",
  },
  {
    image: "/service3.jpg",
    title: "SEO ( Search Engine Optimization )",
    description:
      "We've designed a culture that allows our stewards to assimilate.",
  },
];

const Services = () => {
  return (
    <section className="py-12 flex flex-col items-center w-full">
      <div className="text-center w-full">
        <h2 className="lg:text-4xl text-primary font-semibold uppercase">
          Our Offerings
        </h2>
        <p>
          From the initial stages of development to QA processes to robust IT
          operations to AI solutions, we offer a broad range of tech services
          and solutions customized to your requirements.
        </p>
      </div>
      <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;

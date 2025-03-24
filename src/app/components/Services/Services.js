"use client";
import { useState } from "react";

const services = [
  {
    title: "Development & QA",
    content: `Do you know why some software projects don't meet expectations? Well! There are two possible reasons:

You might be missing important steps in your development and QA processes, leading to unreliable software.

Or you're doing things right, but others are doing them better.

The question is: how can you make sure your tech services are strong, scalable, and trustworthy, and that they give users a smooth experience?

With over 17 years of experience in development and QA services, Arbisoft has been building tech services that meet industry standards. The problem is, many teams overlook key details, which results in software that doesn't perform well. But don't worry; this can be avoided if you have a partner who understands every part of software development and quality assurance.

In our journey, we've developed many applications and created a process that's easy to follow. You just need to work with us and follow the steps as we guide you.

To keep things clear and make the process smooth, we've divided our development and QA services into three main sections`,
heading1: "1-Ensuring Compatibility and Smooth Integration",
content1:"In this part, we focus on making sure our services work well across different systems and environments. This includes handling compatibility across platforms, integrating with various APIs, and ensuring smooth communication between different parts of the software.",
heading2:"2-Careful Testing and Validation",
content2:"This section requires close attention to detail. We design our testing processes to find and fix any bugs, performance issues, or security problems. For example, we perform thorough tests to ensure your application isn't just working but working well.",
heading3:"3-Providing a Smooth User Experience",
content3:"This part is all about making the user experience better. We use design principles to make your software easy to use. We ask important questions like: How can we make the application respond faster? Do we need new technologies to improve performance and user satisfaction? Now imagine your software project reaching its full potential. To save time and resources, we can work on some of these development and QA steps at the same time.",
},
  {
    title: "Mobility & Apps",
    content: `In today's fast-moving digital world, having solid software isn't enough. You also need new apps that engage users and drive business growth.`,
    heading1:"Expanding into Mobility & Apps",
    content1:`Many businesses struggle to create mobile and web apps that truly connect with users. This can happen because:

They might not be using the latest technologies, leading to apps that don't perform well.

Or their apps don't align with their business goals, so they miss chances for growth.

So, how can you turn your ideas into apps that are both new and easy to use?

Building on our strong foundation in development and QA, Arbisoft offers services in mobility and apps to help you succeed. We integrate this into our overall process to ensure a smooth experience.

We've divided our mobility and app services into three key areas:`,
heading2:"1-Developing Apps That Perform Best on Each Platform",
content2:`We create Android and iOS apps optimized for each platform. By focusing on the unique features of each, we make sure your app runs smoothly and provides a great user experience.`,
heading3:"2-Hybrid App Development for Cross-Platform Solutions",
content3:`Our hybrid app development combines the strengths of different platforms. This allows us to deliver cross-platform solutions with performance similar to native apps. It helps you reach more users without needing separate apps for each platform.`,
heading4:"3-Web App Development and Progressive Web Apps (PWAs)",
content4:`We make your applications accessible and responsive across all devices. Our web app development and Progressive Web App services ensure your apps work well on any device with a web browser. This increases your app's availability and keeps users engaged.

By integrating these services into our overall approach, we provide a complete solution that covers all your software needs.`,
  },
  {
    title: "IT Operations",
    content: ` Building on our expertise, Arbisoft offers IT Operations services to help you achieve operational excellence. We integrate these services into our overall process to ensure your technology works seamlessly.

We've expanded our IT Operations services into four key areas:`,
heading1:"1-Streamlining Development and Operations with DevOps",
content1:`We offer DevOps services that streamline your development and operations. This helps increase productivity and reduce deployment times. By automating processes and improving teamwork between developers and operations staff, we make sure your software moves smoothly from development to production.`,
heading2:"2- Enhancing Security with Cybersecurity Services",
content2:`Our cybersecurity services protect your data and systems from threats. We help you keep your business secure by identifying vulnerabilities and implementing protective measures. This way, your operations aren't disrupted by security issues.`,
heading3:"3-Designing Scalable and Reliable Infrastructure",
content3:`We design infrastructure and create systems that are scalable and reliable, customized to your needs. Whether you're a small business or growing fast, we build IT systems that can grow with you. This means you won't have to worry about outgrowing your technology.`,
heading4:"Providing Ongoing Technical Support",
content4:`We offer technical support to fix any issues right away. Our team is ready to help you keep your IT operations running smoothly, so you can focus on your core business.

By adding these IT services to our overall approach, we offer a complete solution that covers all aspects of your technology needs.`
     },
];


const solutionsTabs = ["Education Technology", "Data, ML & AI", "E-Commerce"];

export default function ServicesComponent() {
  const [selected, setSelected] = useState(0);
  const [activeTab, setActiveTab] = useState("services");

  return (
    <>
      {/* Title & Description */}
      <h2 className="lg:text-5xl mt-10 text-center text-primary font-semibold uppercase">
        <span className="text-secondary">Our</span> Offerings
      </h2>
      <p className="text-center mt-4 w-11/12 md:w-3/4 text-gray-700 mx-auto">
        From the initial stages of development to QA processes to robust IT
        operations to AI solutions, we offer a broad range of tech services and
        solutions customized to your requirements.
      </p>

      {/* Navigation Tabs */}
      <div className="flex justify-center mt-10 space-x-6">
        {["services", "solutions"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-2xl inline-block relative ${activeTab === tab ? "text-primary" : "text-secondary"
              }`}
          >
            {tab === "services" ? "Our Services" : "Our Solutions"}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 w-full border-b-2 border-primary"></span>
            )}
          </button>
        ))}
      </div>

      {/* Services & Solutions Section */}
      <div className="flex flex-col md:flex-row h-auto p-6 md:p-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-300 ">
          <ul className="space-y-4">
            {(activeTab === "services" ? services : solutionsTabs).map(
              (item, index) => (
                <li
                  key={index}
                  onClick={() => setSelected(index)}
                  className={`cursor-pointer px-4 py-2 text-center text-secondary text-3xl ${selected === index
                      ? "border-r-2 border-primary"
                      : ""
                    }`}
                >
                  {activeTab === "services" ? item.title : item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Content Area */}
        <div className="w-full mt-10 md:w-2/3 lg:w-3/4 h-auto bg-[#F3F4F6]  md:mt-0 md:ml-6 p-6 md:p-8">
          <h2 className="text-3xl md:text-5xl font-bold text-[#223554]">
            {activeTab === "services"
              ? services[selected].title
              : solutionsTabs[selected]}
          </h2>
          <p className="mt-4 text-secondary whitespace-pre-line">
            {services[selected].content}
          </p>

          {/* Headings & Content */}
          {["heading1", "heading2", "heading3", "heading4"].map(
            (headingKey, index) =>
              services[selected][headingKey] && (
                <div key={index} className="mt-4">
                  <h3 className="text-xl font-semibold text-secondary">
                    {services[selected][headingKey]}
                  </h3>
                  <p className="mt-2 text-secondary">
                    {services[selected][`content${index + 1}`]}
                  </p>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}


//import Card from "./Card";

// const servicesData = [
//   {
//     image: "/service1.jpg",
//     title: "Ai Chatbots",
//     description:
//       "We've designed a culture that allows our stewards to assimilate.",
//   },
//   {
//     image: "/service2.jpg",
//     title: "Software Development",
//     description:
//       "We've designed a culture that allows our stewards to assimilate.",
//   },
//   {
//     image: "/service3.jpg",
//     title: "SAAS Development",
//     description:
//       "We've designed a culture that allows our stewards to assimilate.",
//   },
//   {
//     image: "/service3.jpg",
//     title: "Mobile App Development",
//     description:
//       "We've designed a culture that allows our stewards to assimilate.",
//   },
//   {
//     image: "/service3.jpg",
//     title: "Web Development",
//     description:
//       "We've designed a culture that allows our stewards to assimilate.",
//   },
//   {
//     image: "/service3.jpg",
//     title: "SEO ( Search Engine Optimization )",
//     description:
//       "We've designed a culture that allows our stewards to assimilate.",
//   },
// ];

// const Services = () => {
//   return (
//     <section className="py-12 flex flex-col items-center w-full">
//       <div className="text-center w-full">
//         <h2 className="lg:text-4xl text-primary font-semibold uppercase">
//           Our Offerings
//         </h2>
//         <p>
//           From the initial stages of development to QA processes to robust IT
//           operations to AI solutions, we offer a broad range of tech services
//           and solutions customized to your requirements.
//         </p>
//       </div>
//       <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {servicesData.map((service, index) => (
//           <Card key={index} {...service} />
//         ))}
//       </div>
//     </section>
//   );
// };


//export default Services;

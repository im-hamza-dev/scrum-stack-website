import React, { useState } from "react";

const SDLCProcess = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const updates = [
    {
      processName: "Planning",
      step: "Step 1",
      color: "bg-green-500",
      time: "10h ago",
      details: [
        "Understanding Client Vision: We collaborate with clients to define their goals, business needs, and target audience.",
        "Feasibility Assessment: We analyze project requirements, budget, and technology stack to ensure a viable solution.",
        "Strategic Roadmap: We create a structured development plan with clear milestones, timelines, and risk mitigation strategies."
      ]
    },
    {
      processName: "Requirements Gathering",
      step: "Step 2",
      color: "bg-green-500",
      time: "9h ago",
      details: [
        "Client Consultation: We engage in deep discussions to gather precise business and technical requirements.",
        "User-Centric Approach: We focus on end-user needs to ensure a seamless and intuitive experience.",
        "Detailed Documentation: We prepare well-structured specifications covering features, integrations, and security considerations.",
        "Validation & Refinement: We ensure all requirements align with business goals and technical feasibility."
      ]
    },
    {
      processName: "Design",
      step: "Step 3",
      color: "bg-blue-500",
      time: "8h ago",
      details: [
        "Innovative UI/UX Design: We create wireframes, prototypes, and high-fidelity designs for an engaging user experience.",
        "Scalable Architecture: We design flexible and robust system architectures to support future growth and enhancements.",
        "Optimized Database Design: We structure databases efficiently to ensure high performance and scalability.",
        "Technology Stack Selection: We choose the best tools and frameworks to build a secure, high-quality product."
      ]
    },
    {
      processName: "Implementation",
      step: "Step 4",
      color: "bg-yellow-500",
      time: "7h ago",
      details: [
        "Agile Development: We follow an iterative approach to ensure continuous feedback and improvements.",
        "Code Quality Standards: Our developers write clean, maintainable, and well-documented code.",
        "Version Control & CI/CD: We use Git and CI/CD pipelines to ensure smooth deployments and version management.",
        "Seamless Integrations: We integrate APIs, third-party services, and essential functionalities for a complete solution."
      ]
    },
    {
      processName: "Testing",
      step: "Step 5",
      color: "bg-red-500",
      time: "6h ago",
      details: [
        "Automated & Manual Testing: We run rigorous functional, performance, and security tests.",
        "Bug Tracking & Fixing: Our QA team ensures a flawless experience by identifying and resolving issues.",
        "User Acceptance Testing (UAT): We validate the system with client feedback to ensure it meets business needs.",
        "Scalability & Load Testing: We test performance under high-traffic conditions for a seamless user experience."
      ]
    },
    {
      processName: "Deployment",
      step: "Step 6",
      color: "bg-purple-500",
      time: "5h ago",
      details: [
        "Production Readiness: We ensure the system is optimized, secure, and scalable before going live.",
        "Seamless Deployment: We deploy applications on cloud platforms with minimal downtime.",
        "Monitoring & Performance Checks: We track system performance, security, and stability post-launch.",
        "User Training & Documentation: We provide guides and support to help clients manage their new system."
      ]
    },
    {
      processName: "Maintenance",
      step: "Step 7",
      color: "bg-gray-500",
      time: "4h ago",
      details: [
        "Proactive Monitoring: We continuously track application performance and fix issues before they impact users.",
        "Regular Updates: We roll out security patches, feature upgrades, and optimizations as needed.",
        "Scalability Enhancements: We help businesses scale their software as their needs evolve.",
        "24/7 Support: Our team provides ongoing assistance to ensure smooth operations."
      ]
    }
  ];
  

  return (
    <div className="bg-white mt-10">
    <h1 className="text-center lg:text-5xl md:text-5xl sm:text-4xl text-3xl text-secondary font-semibold ">How We Deliver High-Quality Software</h1>
      <div className="max-w-xl mx-auto p-8">
        <div className="flow-root">
          <ul className="-mb-8">
            {updates.map((update, index) => (
              <li key={index}>
                <div className="relative pb-8">
                  {index !== updates.length - 1 && (
                    <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                  )}
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-1">
                        <div className="h-8 w-8 bg-primary rounded-full ring-8 ring-white flex items-center justify-center">
                          <svg className="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-0">
                      <div className="text-md text-secondary">
                        <div>
                          <button onClick={() => toggleDetails(index)} className="font-medium text-gray-900 mr-2 focus:outline-none">
                            {update.processName}
                          </button>
                          <span className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                            <span className={`h-1.5 w-1.5 rounded-full ${update.color}`} aria-hidden="true"></span>
                            <span className="ml-3.5 font-medium text-gray-900">{update.step}</span>
                          </span>
                        </div>
                       
                      </div>
                      <div className={`mt-2 text-gray-700 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                        {update.details.map((detail, i) => (
                          <p key={i} className="transition-opacity duration-500">- {detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SDLCProcess;
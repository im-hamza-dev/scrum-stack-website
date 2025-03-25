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
        "Define Objectives: Clearly outline project goals, scope, and success criteria.",
        "Assess Feasibility: Evaluate resources, budget, and potential risks.",
        "Develop a Roadmap: Create a structured timeline with key milestones and deliverables."
      ]
    },
    {
      processName: "Requirements Gathering",
      step: "Step 2",
      color: "bg-green-500",
      time: "9h ago",
      details: [
        "Identify Needs: Collect detailed requirements from stakeholders, users, and clients.",
        "Analyze Feasibility: Assess technical, operational, and business feasibility of requirements.",
        "Document Specifications: Create a structured document outlining functional and non-functional requirements.",
        "Validate Requirements: Review and confirm requirements with stakeholders to ensure alignment with project goals."
      ]
    },
    {
      processName: "Design",
      step: "Step 3",
      color: "bg-blue-500",
      time: "8h ago",
      details: [
        "Architectural Design: Define system structure, components, and interactions.",
        "UI/UX Design: Create wireframes, prototypes, and user experience flows.",
        "Database Design: Plan the schema, tables, and relationships for efficient data storage.",
        "Technology Selection: Choose frameworks, tools, and programming languages for development."
      ]
    },
    {
      processName: "Implementation",
      step: "Step 4",
      color: "bg-yellow-500",
      time: "7h ago",
      details: [
        "Code Development: Write and integrate components based on the design specifications.",
        "Version Control: Use Git or other tools to manage and track code changes.",
        "Integration: Combine modules and ensure seamless interaction between system components.",
        "Unit Testing: Perform initial tests to validate functionality and catch early bugs."
      ]
    },
    {
      processName: "Testing",
      step: "Step 5",
      color: "bg-red-500",
      time: "6h ago",
      details: [
        "Functional Testing: Ensure all features work as expected.",
        "Performance Testing: Test system speed, scalability, and stability.",
        "Security Testing: Identify and fix vulnerabilities to protect user data.",
        "Bug Fixing: Resolve any issues found during testing to improve reliability."
      ]
    },
    {
      processName: "Deployment",
      step: "Step 6",
      color: "bg-purple-500",
      time: "5h ago",
      details: [
        "Prepare for Release: Package and configure the application for production.",
        "Deploy to Server: Upload and host the software on cloud or on-premises infrastructure.",
        "Monitor Performance: Track system behavior and address any immediate issues.",
        "User Training: Provide documentation and guidance for end-users."
      ]
    },
    {
      processName: "Maintenance",
      step: "Step 7",
      color: "bg-gray-500",
      time: "4h ago",
      details: [
        "Bug Fixes: Address and resolve any post-deployment issues.",
        "Performance Optimization: Continuously improve system speed and efficiency.",
        "Feature Enhancements: Add new functionalities based on user feedback.",
        "Security Updates: Regularly update the system to patch vulnerabilities."
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
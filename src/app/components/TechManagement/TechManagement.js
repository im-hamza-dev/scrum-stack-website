"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TechManagement() {
  return (
    <div className="py-10 px-6 text-center max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
        How Can We Work With You
      </h2>

      <div className="mt-6 bg-gray-100 flex-col rounded-lg p-8 flex md:flex-col  lg:flex-row sm:flex-col items-center justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-xl font-bold text-gray-800">Dedicated Teams</h3>
          <p className="text-gray-600 mt-2">
            You get a fully committed team that integrates into your
            organization and culture.
          </p>
        </div>

        {/* Right Section */}

        <ProcessFlow />


      </div>
      <div className="mt-6 bg-gray-100 flex-col rounded-lg p-8 flex  md:flex-col  lg:flex-row sm:flex-col items-center justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-xl font-bold text-gray-800">
            Software Development Outsourcing
          </h3>
          <p className="text-gray-600 mt-2">
            We build your software from start to finish, letting you focus on
            your core business.
          </p>
        </div>

        {/* Right Section */}
        <ProcessFlow />
      </div>
    </div>
  );
}

function ProcessFlow() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [show, setshow] = useState(true);
  const [showYou, setshowYou] = useState(true);
  const [showExpert, setshowExpert] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartAnimation(false); // Reset animation
      setTimeout(() => setStartAnimation(true), 500); // Restart animation after a short delay
    }, 18000); // Total duration of animation
  
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setshow(false);
      setshowYou(false);
    }, 12000); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setshowYou(true);
      setshowExpert(false);
    }, 18000); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <div className="relative  flex flex-row items-center   justify-center py-5 pt-14">
      {/* Arbisoft */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 6 }}
        className="flex flex-col items-center "
      >
        <div className="md:w-20 md:h-20 lg:w-20 lg:h-20 sm:h-20 sm:w-20 bg-primary w-16 h-16 text-white flex items-center justify-center text-center rounded-full text-lg font-bold">
          Scrum Stack
        </div>
      </motion.div>



      {/* Moving Blue Circles */}
      {show && [...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 150 }}
          transition={{ duration: 0.5, delay: i + 6.5 }}
          className=" md:w-4 md:h-4 lg:w-4 lg:h-4 sm:w-4 sm:h-4 w-2 h-2 bg-blue-400 rounded-full left-16 absolute"
        ></motion.div>
      ))}


      {/* Connecting Line to Project */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "70px" }}
        transition={{ duration: 0.6, delay: 6.5 }}
        className="h-2 border-dotted border-gray-500 border-b-2 mx-2"
      ></motion.div>
      {/* Your Project */}
      <motion.div className="relative flex flex-col items-center z-10">
        {/* Project Icon */}
        {showYou ? (<div className="relative md:w-24 md:h-24 lg:w-24 lg:h-24 sm:w-24 sm:h-24 w-20 h-20 bg-gray-200 text-secondary flex items-center justify-center rounded-full text-3xl font-extrabold">
          {`< >`}
        </div>) : (

          <div className="relative  md:w-24 md:h-24 lg:w-24 lg:h-24 sm:w-24 sm:h-24 w-20 h-20 bg-gray-200 text-secondary flex items-center justify-center rounded-full text-3xl animate-bounce font-extrabold">
            {`Dev`}
          </div>)}
        {showYou && (<p className="mt-2 font-semibold text-gray-700">Your Project</p>)}

        {/* Circular Animation for Team Members */}
        {
          [
            { video: "/animations/expert1.mp4" },
            { video: "/animations/expert2.mp4" },
            { video: "/animations/expert3.mp4" },
            { video: "/animations/expert4.mp4" },

          ].map((item, index) => {
            const totalMembers = 6; // Adjust for more/less members
            const radiusX = showExpert ? 0 : 0; // Adjust the circle size
            const radiusY = showExpert ? 0 : 0;
            const angle = (index / totalMembers) * 2 * Math.PI; // Evenly spaced
            const x = Math.cos(angle) * radiusX;
            const y = Math.sin(angle) * radiusY;

            return (
              <motion.div
                key={index}
                className="absolute flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                animate={{ opacity: 1, scale: 1, x, y }}
                transition={{ duration: 0.5, delay: index * 2 }}
              >
                {/* Animated Team Member Icon */}
                <motion.div className="relative w-8 h-8 md:w-12 md:h-12 bg-white rounded-full border flex items-center justify-center overflow-hidden shadow-lg">
                  <video autoPlay loop muted className="w-full h-full object-cover rounded-full">
                    <source src={item.video} type="video/mp4" />
                  </video>

                  {/* Small icon for index >= 2 */}
                  {index >= 2 && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 md:w-5 md:h-5 bg-primary text-white text-xs md:text-sm flex items-center justify-center rounded-full">
                      S
                    </div>
                  )}
                </motion.div>


              </motion.div>
            );
          })}
      </motion.div>




      {/* Moving Black Circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: showExpert ? 100 : -50 }}
          animate={{ opacity: 1, x: showExpert ? -80 : 60 }}
          exit={{ opacity: 0 }} // Hides after animation completes
          transition={{ duration: 0.5, delay: i + 2 }}
          className=" md:w-4 md:h-4 lg:w-4 lg:h-4 sm:w-4 sm:h-4 w-2 h-2 bg-black rounded-full mx-1"
        ></motion.div>
      ))}

      {/* Connecting Line */}

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100px" }}
        transition={{ duration: 0.6, delay: 2 }}
        className="h-2 border-dotted border-gray-500 border-b-2 mx-2 absolute right-10"
      ></motion.div>



      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: -20 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <div className=" md:w-20 md:h-20 lg:w-20 lg:h-20 sm:w-20 sm:h-20 w-16 h-16  bg-gray-500 flex items-center justify-center rounded-full text-2xl">
          👥
        </div>
        <p className="mt-2 font-semibold text-gray-700">You</p>
      </motion.div>

    </div>
  );
}
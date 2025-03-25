import { motion } from "framer-motion";

export default function TechManagement() {
  return (
    <div className="py-10 px-6 text-center max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
        How Can We Work With You
      </h2>

      <div className="mt-6 bg-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
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
      <div className="mt-6 bg-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
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
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-5 pt-14">
      {/* scrum stack Section */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: -4 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <div className="w-24 h-24 bg-primary flex items-center justify-center rounded-full  text-lg font-extrabold text-white leading-none">
          scrum <br />
          stack
        </div>
      </motion.div>

      {/* Connecting Dots */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "50px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="h-2 bg-gray-300 rounded-full mx-2"
      ></motion.div>

      {/* Your Project */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative flex flex-col items-center"
      >
        <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-full  text-3xl text-black font-extrabold">
          {`< >`}
        </div>
        <p className="mt-2 font-semibold text-gray-700">Your Project</p>

        {/* Team Members */}
        <motion.div
          className="absolute -top-8 left-1/4 w-10 h-10 bg-white rounded-full border-primary flex items-center justify-center"
          initial={{ opacity: 0, y: -10, x: 0 }}
          animate={{ opacity: 1, y: -30, x: -60 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          👩🏻‍💻
        </motion.div>
        <motion.div
          className="absolute -top-8 right-1/4 w-10 h-10 bg-white rounded-full border  flex items-center justify-center"
          initial={{ opacity: 0, y: -10, x: 0 }}
          animate={{ opacity: 1, y: -40, x: -5 }}
          transition={{ duration: 0.4, delay: 1 }}
        >
          🧑🏽‍💻
        </motion.div>
        <motion.div
          className="absolute -top-8 right-1/4 w-10 h-10 bg-white rounded-full border  flex items-center justify-center"
          initial={{ opacity: 0, y: -10, x: 0 }}
          animate={{ opacity: 1, y: -30, x: 60 }}
          transition={{ duration: 0.4, delay: 1.2 }}
        >
          👩🏾‍💻
        </motion.div>
      </motion.div>

      {/* Connecting Dots */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "50px" }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="h-2 bg-gray-300 rounded-full mx-2"
      ></motion.div>

      {/* You Section */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="flex flex-col items-center"
      >
        <div className="w-20 h-20 bg-[#bbbbbb] flex items-center justify-center rounded-full  text-2xl">
          👥
        </div>
        <p className="mt-2 font-semibold text-gray-700">You</p>
      </motion.div>
    </div>
  );
}

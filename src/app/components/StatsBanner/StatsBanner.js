export default function StatsBanner() {
    return (
      <div className="bg-gray-100 py-10 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          A Journey of{" "}
          <span className="text-blue-600 font-bold">18 years</span> with{" "}
          <span className="text-blue-600 font-bold">550+</span> projects and{" "}
          <span className="text-blue-600 font-bold">100+</span> tech partnerships
        </h2>
  
        <div className="mt-6 bg-gray-900 text-white rounded-lg flex flex-wrap justify-center gap-6 p-6">
          <StatBox value="95%" label="Client Satisfaction Rate" />
          <StatBox value="Zero" label="Detractors" />
          <StatBox value="81.8" label="Net Promoter Score" />
          <StatBox value="Avg. 5 Years" label="Client Relationship" />
        </div>
      </div>
    );
  }
  
  function StatBox({ value, label }) {
    return (
      <div className="text-center">
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm text-gray-300">{label}</p>
      </div>
    );
  }
  
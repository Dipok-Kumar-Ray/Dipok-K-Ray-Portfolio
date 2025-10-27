import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "Gopalganj Polytechnic Institute",
      duration: "2022 - 2026",
      description:
        "Focused on Computer Science fundamentals, MERN Stack Development, and problem-solving skills. Completed multiple academic and personal projects in web development and software engineering."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Lohakuchi High School & College",
      duration: "2018 - 2020",
      description:
        "Completed secondary education with a concentration in Science. Developed strong foundations in mathematics, physics, and logical thinking."
    }
  ];

  return (
    <section id="education" className="bg-[#0F172A] text-white py-16 px-6 lg:max-w-7xl">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-green-400 mb-10 text-center">
          Education
        </h2>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-[#1E293B] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-green-400"
            >
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                {edu.degree}
              </h3>
              <p className="text-lg text-gray-300">{edu.institution}</p>
              <span className="text-sm text-gray-400 block mb-4">
                {edu.duration}
              </span>
              <p className="text-gray-400 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

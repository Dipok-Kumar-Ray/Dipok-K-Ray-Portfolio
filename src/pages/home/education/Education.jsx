import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "Gopalganj Polytechnic Institute",
      duration: "2021 - 2025",
      description:
        "Focused on Computer Science fundamentals, MERN Stack Development, and problem-solving skills. Completed multiple academic and personal projects in web development and software engineering."
    }
  ];

  return (
    <section className="bg-[#0F172A] text-white py-16 px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-primary mb-10 border-b-4 border-primary inline-block text-center">
          Education
        </h2>

        {/* Education List */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className=" p-6 rounded-xl  hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold">{edu.degree}</h3>
              <p className="text-lg text-gray-300">{edu.institution}</p>
              <span className="text-sm text-gray-400">{edu.duration}</span>
              <p className="mt-4 text-gray-300 leading-relaxed">
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

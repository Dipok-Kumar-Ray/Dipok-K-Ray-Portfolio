const skills = [
  "MERN Stack Development",
  "Competitive Programming",
  "Problem Solving",
  "Software Engineering",
  "JavaScript, React, Node.js",
  "Database Management (MongoDB)",
  "Version Control (Git/GitHub)",
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0F172A] max-w-4xl px-6 py-20 scroll-mt-20"
      aria-label="About Section"
    >
      <h2 className="text-4xl font-bold text-primary mb-12 text-center">
        About Me
      </h2>

      <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 text-white">
        {/* Left Side: Bio Text */}
        <div>
          <p className="text-lg leading-relaxed mb-6">
            Hello! I am{" "}
            <span className="font-semibold text-primary">Dipok Kumar Ray</span>, a dedicated Diploma graduate in Computer Science & Engineering. I specialize in the MERN stack, focusing on creating efficient, scalable, and maintainable web applications.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I am passionate about becoming a competitive programmer and problem solver. I continuously work to enhance my skills and contribute to impactful software projects.
          </p>

          <p className="text-lg leading-relaxed">
            I am a strong believer in clean code practices, teamwork, and continuous learning, aiming to deliver quality software solutions that meet real-world needs.
          </p>
        </div>

        {/* Right Side: Skills List */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-primary">
            Skills & Expertise
          </h3>
          <ul className="list-disc list-inside space-y-2 text-white text-base">
            {skills.map((skill, idx) => (
              <li
                key={idx}
                className="hover:text-primary transition-colors duration-300 cursor-default"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

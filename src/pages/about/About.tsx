import { useEffect } from "react";
import { motion } from "framer-motion";

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
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section
      id="about"
      className="bg-[#0F172A] mx-auto lg:max-w-full px-4 sm:px-6 py-16"
      aria-label="About Section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-primary mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-16 text-white items-center">
          {/* Left Side: Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:pr-8"
          >
            <p className="text-lg leading-relaxed mb-6">
              Hello! I am{" "}
              <span className="font-semibold text-primary">Dipok Kumar Ray</span>,
              a dedicated Diploma graduate in Computer Science & Engineering. I
              specialize in the MERN stack, focusing on creating efficient,
              scalable, and maintainable web applications.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              I am passionate about becoming a competitive programmer and problem
              solver. I continuously work to enhance my skills and contribute to
              impactful software projects.
            </p>

            <p className="text-lg leading-relaxed">
              I am a strong believer in clean code practices, teamwork, and
              continuous learning, aiming to deliver quality software solutions
              that meet real-world needs.
            </p>
          </motion.div>

          {/* Right Side: Skills List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:pl-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Skills & Expertise
            </h3>
            <ul className="space-y-3 text-white text-base">
              {skills.map((skill, idx) => (
                <motion.li
                  key={idx}
                  className="hover:text-primary transition-colors duration-300 cursor-default flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
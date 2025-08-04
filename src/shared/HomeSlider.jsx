// HeroSlider.jsx
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import Profile from "../assets/profile.png";
import { FaChevronDown } from "react-icons/fa";

const HeroSlider = () => {
  // Smooth scroll handler for "About" section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-base-100 dark:bg-gray-900">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient opacity-30 dark:opacity-20"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 h-screen px-6 py-10 md:py-0">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
            <Typewriter
              words={["Hi,", "I'm Dipok Kumar Ray"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>

          <p className="text-md sm:text-lg md:text-2xl mb-6 text-gray-700 dark:text-gray-300">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Frontend Enthusiast",
                "JavaScript Lover",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="/resume.pdf"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            <Link to="/contact" className="btn btn-outline btn-primary">
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            className="w-40 sm:w-52 md:w-72 lg:w-80 rounded-full shadow-lg border-4 border-primary"
            src={Profile}
            alt="Profile"
          />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-primary text-3xl z-20"
        aria-label="Scroll down to About section"
      >
        <FaChevronDown />
      </button>
    </div>
  );
};

export default HeroSlider;

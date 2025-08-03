import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router";

const HomeSlider = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-base-100 dark:bg-base-300 transition-colors duration-600">
      {/* Animated Intro */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-4 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
               <Typewriter
          words={[
            "Hi,",
             "I am Dipok Kumar Ray"
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h1>

      {/* Typewriter Text */}
      <motion.p
        className="text-lg md:text-2xl mb-6 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Typewriter
          words={[
            // "MERN Stack Developer",
            "Frontend Developer",
            "JavaScript Lover",
            "React Enthusiast",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
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
      </motion.div>
    </section>
  );
};

export default HomeSlider;

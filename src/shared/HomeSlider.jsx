import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaStackOverflow,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import ProfilePhoto from "../assets/profile.png";
import { motion } from "framer-motion";

// Function to handle resume download
const handleResumeDownload = () => {
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/uc?export=download&id=1pGcYvWkBsZQ0wnm-VXD_16aLxiLpaG1e';
  link.download = 'Dipok_Kumar_Ray_Resume.pdf';
  link.target = '_blank';
  
  // Append to the body, click it, and then remove it
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Function to handle resume view
const handleResumeView = () => {
  // Open the resume in a new tab
  window.open('https://drive.google.com/file/d/1pGcYvWkBsZQ0wnm-VXD_16aLxiLpaG1e/view?usp=sharing', '_blank');
};

const HomeSlider = () => {
  return (
    <section id="home" className="bg-[#0F172A] text-white min-h-screen flex items-center px-4 sm:px-6 py-10">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-12 mx-auto">

        {/* ================= Left Content ================= */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* === Name + Typewriter === */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight">
            I'm{" "}
            <span className="text-green-400 block sm:inline">
              Dipok Kumar Ray
            </span>
            ,
            <br className="hidden sm:block" />
            <span className="block sm:inline text-green-400 mt-2 sm:mt-0">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "JavaScript Developer",
                  "MERN Stack Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>

          {/* === Description === */}
          <motion.p 
            className="mt-4 text-gray-300 max-w-lg mx-auto md:mx-0 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I'm Dipok Kumar Ray, a passionate MERN stack developer from Bangladesh.
            I create modern, user-focused web applications using JavaScript and the
            MERN stack, aiming for clean and efficient solutions.
          </motion.p>

          {/* === Buttons === */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="bg-green-400 text-black px-6 py-3 rounded-full font-medium hover:bg-green-500 transition transform hover:scale-105"
            >
              View My Work
            </a>
          </motion.div>

          {/* === Social Icons === */}
          <motion.div 
            className="flex justify-center md:justify-start gap-5 mt-6 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="https://www.facebook.com/dipok.kumer.roy.2024"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-transform transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/Dipok-Kumar-Ray"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dipok-kumar-ray/?locale=en_US"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://stackoverflow.com/users/29004572/dipok-kumay-ray"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-transform transform hover:scale-110"
            >
              <FaStackOverflow />
            </a>
          </motion.div>
        </motion.div>

        {/* ================= Right Image ================= */}
        <motion.div 
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72">
            {/* === Gradient Border === */}
            <motion.div 
              className="rounded-full p-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={ProfilePhoto}
                alt="Dipok"
                className="block rounded-full w-full h-full object-cover shadow-lg"
              />
            </motion.div>

            {/* === Tag === */}
            <motion.div 
              className="absolute -bottom-4 right-0 bg-green-500 text-black px-4 py-1 rounded-lg text-xs sm:text-sm font-bold shadow-md whitespace-nowrap"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              MERN Stack Developer
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSlider;
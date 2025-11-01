import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaStackOverflow, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  // Back to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="bg-[#0F172A] text-gray-300 p-6 border-t border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo / Name */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="text-lg md:text-xl font-extrabold text-white flex items-center space-x-1"
          >
            <span className="text-green-400">{'<'}</span>
            <span>Dipok K. Ray</span>
            <span className="text-green-400">{' />'}</span>
          </Link>
          <p className="text-sm text-gray-400 mt-1">MERN Stack Developer</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="flex flex-wrap gap-4 text-sm md:text-base"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/about" className="hover:text-green-400 transition-colors duration-300">About</Link>
          <Link to="/projects" className="hover:text-green-400 transition-colors duration-300">Projects</Link>
          <Link to="/contact-info" className="hover:text-green-400 transition-colors duration-300">Contact</Link>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          className="flex gap-5 text-2xl"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="mailto:dipok7316@gmail.com"
            className="hover:text-green-400 transition-transform transform hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.facebook.com/dipok.kumer.roy.2024"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition-transform transform hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/Dipok-Kumar-Ray"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition-transform transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dipok-kumar-ray/?locale=en_US"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition-transform transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://stackoverflow.com/users/29004572/dipok-kumay-ray"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition-transform transform hover:scale-110"
            aria-label="Stack Overflow"
          >
            <FaStackOverflow />
          </a>
        </motion.div>
      </div>

      {/* 🔹 Horizontal Row */}
      <hr className="border-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6" />

      {/* Bottom Section */}
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-center text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p>© {new Date().getFullYear()} Dipok Kumar Ray. All Rights Reserved.</p>
        
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="mt-4 md:mt-0 flex items-center gap-1 hover:text-green-400 transition-all duration-300 group"
        >
          <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" /> Back to Top
        </button>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
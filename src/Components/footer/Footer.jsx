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
      className="bg-base-200 dark:bg-gray-900 text-base-content dark:text-gray-300 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo / Name */}
        <div>
          <Link
            to="/"
            className="text-lg md:text-xl font-extrabold text-primary flex items-center space-x-1"
          >
            <span className="text-secondary">{'<'}</span>
            <span>Dipok K. Ray</span>
            <span className="text-secondary">{' />'}</span>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-4 text-sm md:text-base">
          <Link to="/about" className="hover:text-green-400">About</Link>
          <Link to="/projects" className="hover:text-green-400">Projects</Link>
          <Link to="/contact-info" className="hover:text-green-400">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-2xl">
          <a
            href="mailto:dipok7316@gmail.com"
            className="hover:text-green-400 transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
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
        </div>
      </div>

      {/* 🔹 Horizontal Row */}
      <hr className="border-0 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent my-6" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} Dipok Kumar Ray. All Rights Reserved.</p>
        
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="mt-4 md:mt-0 flex items-center gap-1 hover:text-green-400 transition-transform transform hover:scale-110"
        >
          <FaArrowUp /> Back to Top
        </button>
      </div>
    </motion.footer>
  );
};

export default Footer;

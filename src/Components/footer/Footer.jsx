import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="bg-base-200 dark:bg-gray-900 text-base-content dark:text-gray-300 p-6 mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo / Name */}
        <Link
          to="/"
          className="text-xl font-bold text-primary hover:opacity-80 transition"
        >
          Dipok Kumar Ray
        </Link>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaFacebook />
          </a>
          <a
            href="mailto:youremail@gmail.com"
            className="hover:text-primary transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Dipok Kumar Ray. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

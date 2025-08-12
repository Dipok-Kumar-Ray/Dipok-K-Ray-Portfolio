import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaStackOverflow } from "react-icons/fa";

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
<div className="">
  <Link
    to="/"
    className="text-lg md:text-xl font-extrabold text-primary flex items-center space-x-1"
  >
    <span className="text-secondary">{'<'}</span>
    <span>Dipok K Ray</span>
    <span className="text-secondary">{' />'}</span>
  </Link>
</div>

        {/* Social Links */}
             {/* Social Icons */}
                  <div className="flex gap-5 mt-6 text-2xl">
                    <Link
                      to="https://www.facebook.com/dipok.kumer.roy.2024"
                      rel="noreferrer"
                      className="hover:text-green-400"
                    >
                      <FaFacebook />
                    </Link>
                    <Link
                      to="https://github.com/Dipok-Kumar-Ray"
                      rel="noreferrer"
                      className="hover:text-green-400"
                    >
                      <FaGithub />
                    </Link>
                    <Link
                      to="https://www.linkedin.com/in/dipok-kumar-ray/?locale=en_US"
                      rel="noreferrer"
                      className="hover:text-green-400"
                    >
                      <FaLinkedin />
                    </Link>
                    <Link
                      to="https://stackoverflow.com/users/29004572/dipok-kumay-ray"
                      rel="noreferrer"
                      className="hover:text-green-400"
                    >
                      <FaStackOverflow />
                    </Link>
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

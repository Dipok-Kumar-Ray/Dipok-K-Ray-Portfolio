import { Link, NavLink } from "react-router";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/education"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }
        >
          Education
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-info"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-base-100 shadow-md fixed top-0 mb-20 left-0 w-full z-50 px-4 md:px-12">
      {/* Left Logo */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold text-primary flex items-center space-x-1"
        >
          <span className="text-secondary">{"<"}</span>
          <span>Dipok K. Ray</span>
          <span className="text-secondary">{" />"}</span>
        </Link>
      </div>

      {/* Center Nav Links */}
      <div className="hidden md:flex justify-center">
        <ul className="menu menu-horizontal text-lg">{navLinks}</ul>
      </div>

      {/* Right: Resume Buttons */}
      <div className="flex-1 flex justify-end gap-2">
        {/* View Resume */}
        <a
          href="/resume.pdf"
          className="btn btn-outline btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>

        {/* Download Resume */}
        <a
          href="/resume.pdf"
          download="Dipok_Kumar_Ray_Resume.pdf"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden ml-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-ghost text-3xl"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-base-100 shadow-lg rounded-lg w-56">
          <ul className="menu p-2">{navLinks}</ul>
          <div className="p-2 border-t mt-2 flex flex-col gap-2">
            {/* View Resume */}
            <a
              href="/resume.pdf"
              className="btn btn-outline btn-primary w-full text-center"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              View Resume
            </a>

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download="Dipok_Kumar_Ray_Resume.pdf"
              className="btn btn-primary w-full text-center"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Download
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

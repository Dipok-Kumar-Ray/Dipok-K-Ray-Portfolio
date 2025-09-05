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
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-base-100 shadow-md fixed top-0 left-0 w-full z-50 px-4 md:px-12">
      {/* Left Logo */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold text-primary flex items-center space-x-1"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-secondary">{"<"}</span>
          <span>Dipok K. Ray</span>
          <span className="text-secondary">{" />"}</span>
        </Link>
      </div>

      {/* Center Nav Links (Desktop Only) */}
      <div className="hidden md:flex justify-center">
        <ul className="menu menu-horizontal text-lg">{navLinks}</ul>
      </div>

      {/* Right: Resume Buttons (Desktop) */}
      <div className="hidden md:flex flex-1 justify-end gap-2">
        <a
          href="/resume.pdf"
          className="btn btn-outline btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
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
          className="btn btn-ghost text-3xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 right-0 w-full bg-base-100 shadow-lg transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="menu p-4 space-y-2 text-lg border-b">{navLinks}</ul>

        <div className="p-4 flex flex-col gap-2">
          <a
            href="/resume.pdf"
            className="btn btn-outline btn-primary w-full text-center"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            View Resume
          </a>

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
    </nav>
  );
};

export default Navbar;

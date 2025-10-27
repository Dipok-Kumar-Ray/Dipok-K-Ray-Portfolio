import { Link, NavLink, useNavigate, useLocation } from "react-router";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Calculate offset for fixed navbar
      const navbarHeight = 80;
      const elementPosition = section.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Handle navigation to home page sections
  const handleHomeSectionClick = (e, sectionId) => {
    e.preventDefault();
    // Close mobile menu
    setIsOpen(false);
    
    // If we're already on the home page, scroll directly
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      // Navigate to home page first
      navigate('/');
      
      // Scroll to section after a short delay to ensure page loads
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  // Handle hash changes and initial load
  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Remove the # symbol
      const sectionId = location.hash.substring(1);
      // Scroll to the section after a short delay to ensure page loads
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location]);

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
        <a
          href="/#skills"
          onClick={(e) => handleHomeSectionClick(e, 'skills')}
          className="hover:text-primary"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="/#education"
          onClick={(e) => handleHomeSectionClick(e, 'education')}
          className="hover:text-primary"
        >
          Education
        </a>
      </li>
      <li>
        <a
          href="/#projects"
          onClick={(e) => handleHomeSectionClick(e, 'projects')}
          className="hover:text-primary"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="/#contact"
          onClick={(e) => handleHomeSectionClick(e, 'contact')}
          className="hover:text-primary"
        >
          Contact
        </a>
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
          href="https://drive.google.com/drive/folders/1pGcYvWkBsZQ0wnm-VXD_16aLxiLpaG1e?usp=sharing"
          className="btn btn-outline btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
        <a
          href="https://drive.google.com/drive/folders/1pGcYvWkBsZQ0wnm-VXD_16aLxiLpaG1e?usp=sharing"
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
            href="https://drive.google.com/drive/folders/1pGcYvWkBsZQ0wnm-VXD_16aLxiLpaG1e?usp=sharing"
            className="btn btn-outline btn-primary w-full text-center"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            View Resume
          </a>

          <a
            href="https://drive.google.com/drive/folders/1pGcYvWkBsZQ0wnm-VXD_16aLxiLpaG1e?usp=sharing"
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
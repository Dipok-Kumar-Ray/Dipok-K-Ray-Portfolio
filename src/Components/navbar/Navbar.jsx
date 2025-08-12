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
    <nav className="navbar bg-base-100 shadow-md fixed top-0 left-0 w-full z-50 px-4 md:px-12">
<div className="flex-1">
  <Link
    to="/"
    className="text-2xl md:text-3xl font-extrabold text-primary flex items-center space-x-1"
  >
    <span className="text-secondary">{'<'}</span>
    <span>Dipok K Ray</span>
    <span className="text-secondary">{' />'}</span>
  </Link>
</div>


  <div className="hidden md:flex justify-center">
  <ul className="menu menu-horizontal text-lg">{navLinks}</ul>
</div>



      {/* Right: Resume Button */}
      <div className="flex-1 flex justify-end">
        <a
          href="/resume.pdf" // তোমার রিজিউমের পাথ এখানে দিবে
          download
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
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
        <div className="absolute top-16 right-4 bg-base-100 shadow-lg rounded-lg w-48">
          <ul className="menu p-2">{navLinks}</ul>
          <div className="p-2 border-t mt-2">
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary w-full text-center"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

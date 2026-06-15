import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar({
  darkMode,
  setDarkMode,
}) {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className="logo"
      >
      Syed Musa
      </NavLink>


      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <button
        className="theme-toggle"
        onClick={() =>
        setDarkMode(!darkMode)
        }
      >
       {darkMode ? "☀️" : "🌙"}
      </button>

    </nav>
  );
}

export default Navbar;
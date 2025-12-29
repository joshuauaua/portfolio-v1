import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logowhite.png";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${menuOpen ? "menu-active" : ""}`}>
      <div className="nav-left">
        <HashLink smooth to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Joshua Ng Logo" className="nav-logo" />
        </HashLink>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><HashLink smooth to="/about" onClick={() => setMenuOpen(false)}>ABOUT</HashLink></li>
        <li><HashLink smooth to="/projects" onClick={() => setMenuOpen(false)}>PROJECTS</HashLink></li>
        <li><HashLink smooth to="/#contact" onClick={() => setMenuOpen(false)}>CONTACT</HashLink></li>
      </ul>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}
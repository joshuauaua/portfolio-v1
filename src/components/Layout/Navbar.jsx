import { useState, useEffect } from "react";
import logo from "../../assets/logowhite.png";
import { HashLink } from "react-router-hash-link";

import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "py-4 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="z-50 relative">
          <HashLink smooth to="/" onClick={() => setMenuOpen(false)}>
            <img
              src={logo}
              alt="Joshua Ng Logo"
              className="h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
          </HashLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 items-center">
            {["ABOUT", "PROJECTS", "CONTACT"].map((item) => (
              <li key={item}>
                <HashLink
                  smooth
                  to={item === "CONTACT" ? "/#contact" : `/${item.toLowerCase()}`}
                  className="relative text-sm font-medium tracking-wide text-neutral-800 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-emerald-500 dark:after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </HashLink>
              </li>
            ))}
          </ul>
          <div className="pl-6 border-l border-neutral-200 dark:border-white/10">

          </div>
        </div>

        {/* Mobile Hamburger & Toggle */}
        <div className="flex items-center gap-4 md:hidden z-50">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-between w-8 h-6 cursor-pointer group"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-0.5 w-full bg-neutral-900 dark:bg-white rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-neutral-900 dark:bg-white rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-neutral-900 dark:bg-white rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center gap-8 text-center">
            {["ABOUT", "PROJECTS", "CONTACT"].map((item) => (
              <li key={item}>
                <HashLink
                  smooth
                  to={item === "CONTACT" ? "/#contact" : `/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  {item}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
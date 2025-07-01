import { useEffect, useState } from "react";
import LINKS from "../constants/links";
import NAVLINK from "../components/Link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateActiveLinkFromHash = () => {
      const currentHash = window.location.hash || "#";
      const found = LINKS.find((item) => item.link === currentHash);
      if (found) {
        setActiveLink(found.name);
      }
    };

    updateActiveLinkFromHash(); 
    window.addEventListener("hashchange", updateActiveLinkFromHash);
    return () => window.removeEventListener("hashchange", updateActiveLinkFromHash);
  }, []);

  // Handle click to update hash and active link
  const handleNavClick = (name, link) => {
    window.location.hash = link; 
    setActiveLink(name);       
    setMenuOpen(false);         
  };

  return (
    <nav className="z-50 w-full fixed bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center relative">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {LINKS.map(({ name, link }, index) => (
            <li key={index}>
              <NAVLINK
                name={name}
                link={link}
                isActive={activeLink === name}
                onClick={() => handleNavClick(name, link)}
              />
            </li>
          ))}
        </ul>

        {/* Hamburger Button - Mobile Only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden absolute right-6 text-gray-800 dark:text-gray-200 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 items-center">
          {LINKS.map(({ name, link }, index) => (
            <li key={index}>
              <NAVLINK
                name={name}
                link={link}
                isActive={activeLink === name}
                onClick={() => handleNavClick(name, link)}
              />
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

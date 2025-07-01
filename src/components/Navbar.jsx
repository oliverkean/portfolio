import { useEffect, useState } from "react";
import LINKS from "../constants/links";
import NAVLINK from "../components/Link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = LINKS.map(({ link, name }) => {
        const el = document.querySelector(link);
        return el
          ? { name, offset: el.getBoundingClientRect().top }
          : { name, offset: Infinity };
      });

      const current = sectionOffsets.find(
        ({ offset }) => offset > 0 && offset < window.innerHeight / 2
      );

      if (current) setActiveLink(current.name);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                onClick={() => setActiveLink(name)}
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
                onClick={() => {
                  setActiveLink(name);
                  setMenuOpen(false);
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

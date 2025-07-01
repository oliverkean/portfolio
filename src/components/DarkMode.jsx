import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function DarkModeToggleButton() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = localStorage.getItem("theme") === "dark";

    if (isDark) {
      root.classList.add("dark");
      setDarkMode(true);
    } else {
      root.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    const isDark = root.classList.contains("dark");

    if (isDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-4 right-4 z-50 bg-purple-700 hover:bg-purple-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors text-xl sm:text-2xl"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FiSun /> : <FiMoon />}
    </button>
  );
}

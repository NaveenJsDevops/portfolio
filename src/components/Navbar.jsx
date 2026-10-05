import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks, resumeLink, aboutMe } from "../constants";
import { scrollToSection } from "../lib/helperFunctions";
import { FiDownload, FiSun, FiMoon, FiFileText } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { useResume } from "../context/ResumeContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { openResume } = useResume();

  return (
    <nav className="w-full flex justify-between items-center py-4 relative z-50">
      {/* Brand Logo with Multi-Hue Gradient */}
      <a
        href="#home"
        className="font-poppins font-bold text-xl tracking-tight flex items-center gap-1 group"
      >
        <span className="text-indigo-600 dark:text-indigo-400 font-mono text-2xl group-hover:rotate-12 transition-transform">&lt;</span>
        <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-500 dark:from-indigo-300 dark:via-sky-300 dark:to-emerald-300 bg-clip-text text-transparent font-bold">
          {aboutMe.name}
        </span>
        <span className="text-emerald-600 dark:text-emerald-400 font-mono text-2xl group-hover:-rotate-12 transition-transform">/&gt;</span>
      </a>

      {/* Desktop Links & Actions */}
      <div className="sm:flex hidden items-center space-x-7">
        <ul className="list-none flex items-center space-x-6">
          {navLinks.map((nav, index) => {
            const hoverColors = [
              "hover:text-indigo-600 dark:hover:text-indigo-400",
              "hover:text-sky-600 dark:hover:text-sky-400",
              "hover:text-emerald-600 dark:hover:text-emerald-400",
              "hover:text-purple-600 dark:hover:text-purple-400",
              "hover:text-rose-600 dark:hover:text-rose-400",
            ];
            const activeColor = hoverColors[index % hoverColors.length];

            return (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[15px] text-slate-700 dark:text-slate-300 ${activeColor} transition-colors py-1 relative group`}
                onClick={() => scrollToSection(nav.id)}
              >
                {nav.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            );
          })}
        </ul>

        {/* Multi-Color Gradient Resume Preview Button */}
        <button
          onClick={openResume}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 rounded-full transition-all shadow-md shadow-indigo-500/20 hover:scale-105 cursor-pointer"
          title="Open In-App Resume Preview"
        >
          <FiFileText className="text-sm" />
          <span>Resume Preview</span>
        </button>

        {/* Celestial Day/Night Horizon Theme Slider */}
        <div className="flex items-center pl-1">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu & Theme Toggle */}
      <div className="sm:hidden flex items-center gap-3">
        <ThemeToggle />

        <button
          onClick={() => setToggle((prev) => !prev)}
          className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white"
          aria-label="Toggle Navigation"
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[20px] h-[20px] object-contain dark:invert-0 invert"
          />
        </button>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 glass-card absolute top-16 right-0 mx-4 my-2 min-w-[220px] rounded-2xl sidebar flex-col z-50 shadow-xl`}
        >
          <ul className="list-none flex flex-col space-y-4 mb-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-poppins font-medium cursor-pointer text-[15px] text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-sky-300"
                onClick={() => {
                  setToggle(false);
                  scrollToSection(nav.id);
                }}
              >
                {nav.title}
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              setToggle(false);
              openResume();
            }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-sky-600 rounded-full text-center shadow"
          >
            <FiFileText />
            <span>Preview Resume</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

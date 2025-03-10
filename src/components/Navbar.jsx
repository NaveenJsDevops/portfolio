import { useState, useEffect } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import { scrollToSection } from "../lib/helperFunctions";
import Lottie from "lottie-react";
import home from "../assets/home.json";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("home");
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        setIsHomePage(top <= 0 && bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full flex justify-between items-center navbar relative">
      {/* List of links */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 pt-2">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins
              font-medium
              cursor-pointer
              text-[16px]
              ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
              text-white hover:text-teal-200`}
            onClick={() => scrollToSection(nav.id)}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      {/* only for mobile devices */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient
            absolute top-20 right-0 mx-4 my-2
            min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins
                  font-normal
                  cursor-pointer
                  text-[16px]
                  ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
                  text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Home Icon */}
      {!isHomePage && (
        <a
          href="#"
          className="fixed bottom-5 right-5 bg-gray-200 hover:bg-gray-600 
            w-[50px] h-[50px] rounded-full flex justify-center items-center shadow-lg"
          style={{ zIndex: 50 }}
        >
          <Lottie animationData={home} loop className="w-[150px] h-[150px]" />
        </a>
      )}
    </nav>
  );
};

export default Navbar;

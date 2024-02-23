import React from "react";
import { RiSparkling2Fill } from "react-icons/ri";
import { Navlinks } from "../Link";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import ThemeSwitcher, { darkModeAtom } from "./ThemeSwitcher";
const Navbar = () => {
  const [darkMode] = useAtom(darkModeAtom);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-bgLightColor dark:bg-bgDarkColor py-5">
        <nav className="container flex justify-between items-center">
          {/* left side */}
          <Link
            to={"/"}
            className="font-primaryFont dark:text-white  text-2xl font-bold flex justify-between items-center gap-3"
          >
            <RiSparkling2Fill />
            <h1>Portfolio</h1>
          </Link>

          {/* right side */}

          <div className="flex justify-between items-center gap-5">
            <ul className="flex justify-between items-center gap-5 font-primaryFont">
              {Navlinks.map(({ href, title }) => (
                <Link
                  key={href}
                  to={href}
                  className="text-GrayishBlue dark:text-white text-sm font-medium hover:text-orange-500  dark:hover:text-[#FDB813] duration-150"
                >
                  {title}
                </Link>
              ))}
              <ThemeSwitcher />
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

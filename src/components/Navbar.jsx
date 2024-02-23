import React from "react";
import { RiSparkling2Fill } from "react-icons/ri";
import { Navlinks } from "../Link";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" py-5">
      <nav className="container ">
        <div className="flex justify-between items-center bg-[#1A1A1A] py-2 px-4 rounded-3xl">
          {/* left side */}
          <Link
            to={"/"}
            className="font-primaryFont text-white  text-2xl font-bold flex justify-between items-center gap-3"
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
                  className="text-GrayishBlue text-white text-sm font-medium hover:text-[#FDB813] duration-150"
                >
                  {title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { RiSparkling2Fill } from "react-icons/ri";
import { Navlinks } from "../Link";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menu, setmenu] = useState(false);

  const toggleMenu = () => {
    setmenu(!menu);
  };
  return (
    <div className=" py-5">
      <nav className="container ">
        <div className="flex justify-between items-center bg-[#1A1A1A] py-2 px-4 rounded-3xl relative">
          {/* left side */}
          <Link
            to={"/"}
            className="font-primaryFont text-white  text-2xl font-bold flex justify-between items-center gap-3"
          >
            <RiSparkling2Fill />
            <h1>Portfolio</h1>
          </Link>

          {/* right side */}
          {/* DESKTOP  */}
          <div className="flex justify-between items-center gap-5">
            <ul className="hidden md:flex justify-between items-center gap-5 font-primaryFont">
              {Navlinks.map(({ href, title }) => (
                <Link
                  key={href}
                  to={href}
                  className=" text-white text-sm font-medium hover:text-[#FDB813] duration-150"
                >
                  {title}
                </Link>
              ))}
            </ul>

            <div className="md:hidden ">
              <div
                className="text-white text-lg font-bold"
                onClick={toggleMenu}
              >
                <div className="absolute top-4 right-5 z-50">
                  {menu ? <IoClose /> : <GiHamburgerMenu />}
                </div>

                {menu ? (
                  <ul className="flex flex-col gap-5 font-primaryFont absolute top-0 right-0 py-52 h-screen  w-[200px] backdrop-blur-sm px-5 rounded-3xl">
                    {Navlinks.map(({ href, title }) => (
                      <Link
                        key={href}
                        to={href}
                        className=" text-white text-sm font-medium hover:text-[#FDB813] duration-150"
                      >
                        {title}
                      </Link>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

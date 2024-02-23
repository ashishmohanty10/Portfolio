import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="container flex justify-center items-center">
        <div className=" flex justify-center items-center gap-5">
          <button className="font-medium text-white text-2xl hover:text-opacity-80">
            <a href="https://github.com/ashishmohanty10" target="_blank">
              <FaGithub />
            </a>
          </button>

          <button className="font-medium text-white text-2xl hover:text-opacity-80">
            <a
              href="https://www.linkedin.com/in/ashish---mohanty/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </button>
          <button className="font-medium text-white text-2xl hover:text-opacity-80">
            <a href="https://twitter.com/tw_sk1llz" target="_blank">
              <BsTwitterX />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

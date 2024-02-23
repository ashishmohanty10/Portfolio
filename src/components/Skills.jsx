import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";

const Skills = () => {
  return (
    <div className="py-16">
      <div className="container flex flex-col justify-center items-center mb-10">
        <h2 className="text-[45px] font-extrabold text-white">SKILLS</h2>
        <p className="bg-gradient-to-r from-[#9C83FF] to-[#FF9051] bg-clip-text text-transparent font-semibold text-lg mb-2">
          Explore Now
        </p>

        <div className="flex flex-col gap-5 mb:4">
          <div>
            <p className="text-base font-medium text-white mb-4">
              Tech Stacks:
            </p>

            <div className="font-medium text-white text-4xl grid md:grid-cols-2 ">
              <div className="flex justify-start items-center gap-5 mb-4 md:mb-0">
                <FaHtml5 />
                <FaCss3 />
                <IoLogoJavascript />
                <FaReact />
              </div>
              <div className="flex justify-start items-center gap-5 mb-4 md:mb-0">
                <SiExpress />
                <IoLogoNodejs />
                <SiTailwindcss />
                <SiMysql />
                <SiMongodb />
              </div>
            </div>
          </div>

          <div>
            <p className="text-base font-medium text-white mb-4">Others:</p>

            <div className="font-medium text-white text-4xl flex justify-start items-center gap-5">
              <IoLogoFigma />
              <SiAdobephotoshop />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

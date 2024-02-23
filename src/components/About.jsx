import React from "react";
import { GoCodeReview } from "react-icons/go";
import { IoLogoYoutube } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa";
import Balancer from "react-wrap-balancer";
const About = () => {
  return (
    <div className="container py-16">
      <div className="container flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-[45px] font-extrabold text-white">ABOUT</h2>
          <p className="bg-gradient-to-r from-[#9C83FF] to-[#FF9051] bg-clip-text text-transparent font-semibold text-lg mb-2">
            Explore Now
          </p>

          <ul className="font-medium text-white flex justify-center items-center gap-5 mb-10">
            <li className="flex justify-center items-center gap-2 hover:text-yellow-400 duration-100">
              <GoCodeReview className="text-xl" />{" "}
              <span className="text-base">Coder</span>
            </li>

            <li className="flex justify-center items-center gap-2 hover:text-red-700 duration-100">
              <IoLogoYoutube className="text-xl" />{" "}
              <span className="text-base">Youtuber</span>
            </li>

            <li className="flex justify-center items-center gap-2 hover:text-cyan-500 duration-100">
              <FaGamepad className="text-xl" />{" "}
              <span className="text-base">Gamer</span>
            </li>
          </ul>

          <Balancer className="text-base font-medium text-white">
            I am an engineering fresher who has a hunger for learning new
            things. I have explored domains like photoshop, web development , 3D
            rendering and video editing apart from my college studies. Currently
            learning backend technologies like Node JS,Express JS,Mongo DB and
            Postgress to become a Full-Stack Developer
          </Balancer>
        </div>
      </div>
    </div>
  );
};

export default About;

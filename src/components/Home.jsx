import { useAtom } from "jotai";
import React from "react";
import Me from "/Me.png";
import Balancer from "react-wrap-balancer";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className=" py-16 bg-[url('/BG.svg')]">
      <div className="container flex flex-col justify-center items-center">
        <div className="w-[230px] h-[230px] bg-[#1A1A1A] rounded-full flex justify-center items-center overflow-hidden mb-10">
          <img src={Me} alt="" className="w-[2300px]" />
        </div>

        <div className="text-center mb-4">
          <h2 className="text-4xl font-extrabold text-white ">
            Ashish Mohanty
          </h2>
          <p className="bg-gradient-to-r from-[#9C83FF] to-[#FF9051] bg-clip-text text-transparent font-semibold text-lg mb-5">
            Frontend Developer
          </p>

          <Balancer className="w-[70%] text-base font-medium text-white  mb-6">
            Passionate Frontend Devloper with a focus on React development,
            dedicated to crafting elegant and user-friendly web applications.
          </Balancer>

          <div>
            <button className="py-3 px-4 rounded-3xl border text-white  text-sm font-bold hover:bg-white hover:text-slate-950 duration-100">
              <a href="./assets/Resume.pdf" download>
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

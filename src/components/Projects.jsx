import React from "react";
import { ProjectsLinks } from "../Link";
import { Link } from "react-router-dom";
import Balancer from "react-wrap-balancer";

const Projects = () => {
  return (
    <div className="py-16  bg-[url('/BG.svg')]">
      <div className="container flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-[45px] font-extrabold text-white">Projects</h2>
          <p className="bg-gradient-to-r from-[#9C83FF] to-[#FF9051] bg-clip-text text-transparent font-semibold text-lg mb-4">
            Explore Now
          </p>

          <div>
            {ProjectsLinks.map((data, index) => (
              <Link
                to={data.href}
                key={index}
                className="grid md:grid-cols-2 justify-center md:justify-start items-center gap-4  py-2 px-2 rounded-3xl hover:backdrop-blur-sm"
              >
                <div className="mb-2 flex justify-center md:justify-start items-center">
                  <img src={data.imgUrl} alt="" className="w-[300px]" />
                </div>

                <div className="flex flex-col justify-start md:text-left text-center gap-3">
                  <p className="text-base font-medium text-white">
                    {data.title}
                  </p>
                  <Balancer className="text-sm font-normal text-slate-300">
                    {data.description}
                  </Balancer>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import pathfinding from "../assets/portfolio/pathfinding.jpg";
import technotes from "../assets/portfolio/technotes.jpg";
import inotebook from "../assets/portfolio/inotebook.jpg";
import netflixclone from "../assets/portfolio/netflixclone.jpg";
import textutils from "../assets/portfolio/textutils.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: pathfinding,
      demoLink: "https://path-finding-visualizer.onrender.com",
      codeLink: "https://github.com/Ayu727575/path-finding-visualizer",
    },
    {
      id: 2,
      src: technotes,
      demoLink: "https://technotes-z3wi.onrender.com",
      codeLink: "https://github.com/Ayu727575/tech-notes",
    },
    {
      id: 4,
      src: inotebook,
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 5,
      src: netflixclone,
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 6,
      src: textutils,
      demoLink: "https://textutils-qyvr.onrender.com",
      codeLink: "https://github.com/Ayu727575/TextUtils",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white lg:h-screen md:h-screen sm:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className=" py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => {
                      window.open(demoLink, "_blank");
                    }}
                    target="_blank"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => {
                      window.open(codeLink, "_blank");
                    }}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

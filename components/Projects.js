import React from "react";
import Image from "next/image";
import myPic from "../assets/dlf10_0gfEPCHLKZ.json";
import { Player } from "@lottiefiles/react-lottie-player";

const projects = [
  {
    name: "Password Tracker",
    description: "A password tracker.",
    deployment: "https://password-tracker.herokuapp.com/login",
    repo: "https://github.com/AlexanderBarlow/password-tracker",
    skill1: "ReactJS",
    skill2: "NodeJS",
  },
  {
    name: "Disney Charactor Locator",
    description: "A character locator.",
    deployment: "https://alexanderbarlow.github.io/disney-character-locator/",
    repo: "https://github.com/AlexanderBarlow/disney-character-locator",
    skill1: "Handlebars",
    skill2: "NodeJS",
  },
  {
    name: "NestEase",
    description: "A rental site.",
    deployment: "https://nestease.herokuapp.com/",
    repo: "https://github.com/AlexanderBarlow/rental-site",
    skill1: "ReactJS",
    skill2: "NodeJS",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Projects() {
  return (
    <section
      className="lg:grid lg:grid-rows-3 lg:gap-4 lg:items-center lg:h-screen lg:snap-center grid grid-rows-3 lg:grid-cols-3  grid-cols-2 items-center h-screen snap-start"
      id="projects"
    >
      <a href="projects"></a>
      <div className="lg:w-60 lg:row-start-1 lg:row-span-1 row start-1 row-span-1 col-start-2" id="lottie1">
        <h1 className="text-white text-6xl underline">Projects</h1>
      </div>
      <div className="lg:row-end-4 lg:row-span-3 lg:col-start-1 lg:col-span-3 col-start-1 col-span-2 col-end-3 grid-rows-3 row-start-2 row-end-3">
        <div className="flex space-x-4 col-start-1">
          {projects.map((item) => (
            <div
              className={classNames(
                "text-gray-300 hover:bg-gray-700 hover:text-white",
                "lg:rounded-md lg:px-8 lg:py-8 lg:text-sm lg:font-medium ",
                ""
              )}
            > <a href={item.deployment}>
              <h1 key={item.name} className="text-purple-700 lg:text-3xl text-6xl">
                {item.name}
              </h1>
              <p className="lg:text-xl text-5xl">{item.description}</p>
              <ul className="">
                <li className="bg-purple-950 text-purple-400 font-semibold  lg:py-2 lg:px-4 py-1 px-1 border border-purple-500 rounded w-fit m-2 text-5xl lg:text-xl">{item.skill1}</li>
                <li className="bg-purple-950  text-purple-400 font-semibold  lg:py-2 lg:px-4 py-1 px-1 border border-purple-500 rounded w-fit m-2 text-5xl lg:text-xl">{item.skill2}</li>
              </ul>
              </a>
            </div>
            
          ))}
        </div>
      </div>
      <div
        className="w-60  row-start-3 row-end-4 justify-items-end"
        id="lottie2"
      >
        <Player
          src="https://lottie.host/4b0df32b-269c-4272-86cb-a79bdf0925ed/1azfI1QwGd.json"
          className="player"
          loop
          autoplay
        />
      </div>
    </section>
  );
}

export default Projects;

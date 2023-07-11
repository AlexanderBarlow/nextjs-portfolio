import React from "react";
import Image from "next/image";
import myPic from "../assets/dlf10_0gfEPCHLKZ.json";
import { Player } from "@lottiefiles/react-lottie-player";

const projects = [
  {
    name: "Password Tracker",
    description: "A password tracker.",
    deployment: "https://password-tracker.herokuapp.com/login",
    repo: "",
    skill1: "ReactJS",
    skill2: "NodeJS",
  },
  {
    name: "Disney",
    description: "A character locator.",
    deployment: "https://password-tracker.herokuapp.com/login",
    repo: "",
    skill1: "Handlebars",
    skill2: "NodeJS",
  },
  {
    name: "NestEase",
    description: "A rental site.",
    deployment: "https://password-tracker.herokuapp.com/login",
    repo: "",
    skill1: "ReactJS",
    skill2: "NodeJS",
  },
  {
    name: "NestEase",
    description: "A rental site.",
    deployment: "https://password-tracker.herokuapp.com/login",
    repo: "",
    skill1: "ReactJS",
    skill2: "NodeJS",
  },
  {
    name: "NestEase",
    description: "A rental site.",
    deployment: "https://password-tracker.herokuapp.com/login",
    repo: "",
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
      className="lg:grid lg:grid-rows-3 lg:grid-flow-col lg:gap-4 lg:items-center lg:h-screen lg:snap-center grid grid-rows-3 grid-flow-col items-center h-screen"
      id="projects"
    >
      <a href="projects"></a>
      <div className="w-60 row-start-1 row-span-1" id="lottie1">
        <h1 className="text-white text-4xl underline">Projects</h1>
      </div>
      <div className="row-end-4 row-span-3">
        <div className="flex space-x-4">
          {projects.map((item) => (
            <div
              className={classNames(
                "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium "
              )}
            >
              <h1 key={item.name} className="text-purple-700">
                {item.name}
              </h1>
              <p>{item.description}</p>
              <ul>
                <li>{item.skill1}</li>
                <li>{item.skill2}</li>
              </ul>
              <button href={item.deployment}>Deployment</button>
              <button href={item.repo}>Repository</button>
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

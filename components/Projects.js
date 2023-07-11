import React from "react";
import Image from "next/image";
import myPic from "../assets/dlf10_0gfEPCHLKZ.json";
import { Player } from "@lottiefiles/react-lottie-player";

const projects = [
  {name: 'Password Tracker', description: "A password tracker.", deployment: "https://password-tracker.herokuapp.com/login", repo: "", stack: ["React", "NodeJS"]},
  {name: 'Disney', description: "A character locator.", deployment: "https://password-tracker.herokuapp.com/login", repo: "", stack: ["React", "NodeJS"]},
  {name: 'NestEase', description: "A rental site.", deployment: "https://password-tracker.herokuapp.com/login", repo: "", stack: ["React", "NodeJS"]},
  {name: 'NestEase', description: "A rental site.", deployment: "https://password-tracker.herokuapp.com/login", repo: "", stack: ["React", "NodeJS"]},
  {name: 'NestEase', description: "A rental site.", deployment: "https://password-tracker.herokuapp.com/login", repo: "", stack: ["React", "NodeJS"]},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

let skill 

function skills() {
  for (let y = 0; y < projects.length; y++) {
    let e = projects[y];
    console.log(e);
  
  for (let i = 0; i < e.stack.length; i++) {
    skill = e.stack[i];
    console.log(skill);
    return skill
  }
}
}

function Projects() {
  return (
    <section
      className="grid grid-rows-3 grid-flow-col gap-4 items-center justify-center h-screen"
      id="projects"
    >
      <a href="projects"></a>
      <div className="w-60 row-start-1 row-span-1" id="lottie1">
        <h1 className="text-white text-4xl underline">
          Projects
        </h1>
      </div>
      <div className="row-end-4 row-span-3">
      <div className="flex space-x-4">
                  {projects.map((item) => (
                    <div  className={classNames(
                      'text-gray-300 hover:bg-gray-700 hover:text-white',
                     'rounded-md px-3 py-2 text-sm font-medium '
                   )}>
                    <h1
                      key={item.name} className="text-purple-700"
                    >
                      {item.name}
                    </h1>
                    <p>
                    {item.description}
                    </p>
                    <button href={item.deployment}>
                      Deployment
                    </button>
                    <button href={item.repo}>
                      Repository
                    </button>
                    <ul>
                      <li>
                      {skills(skill)}
                      </li>
                     </ul>
                    </div>
                  ))}
                </div>
      </div>
      <div
        className="w-60  row-start-3 row-end-4 justify-items-end"
        id="lottie2"
      >
        <Player
          src="https://lottie.host/24eecb54-4941-4284-b26c-133ad3a3c271/EYWD4Y3JFc.json"
          className="player"
          loop
          autoplay
        />
      </div>
    </section>
  );
}

export default Projects;

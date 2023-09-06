import React from "react";
import Image from "next/image";
import myPic from "../assets/dlf10_0gfEPCHLKZ.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    name: "Password Tracker",
    description:
      "A fullstack application. This application utilizes MySQL, Rest APIs and HandleBarsJS for server side rendering. This application authenticates users to create user sessions. Passwords can be added to help users keep track of them given some additional criteria. Passwords are encrypted upon storage and decrypted upon retrieval using a custom axlorithm.",
    deployment: "https://password-tracker.herokuapp.com/login",
    repo: "https://github.com/AlexanderBarlow/password-tracker",
    skill1: "HandleBarsJS",
    skill2: "NodeJS",
    skill3: "MySQL",
    skill4: "RESTful",
    skill5: "Authentication",
    skill6: "ExpressJS",
  },
  {
    name: "Disney Charactor Locator",
    description:
      "This application is a simple search engine utilizing third party APIs. The application uses cookies to save searches and results. The APIs data are cross referenced to ensure accurate results.",
    deployment: "https://alexanderbarlow.github.io/disney-character-locator/",
    repo: "https://github.com/AlexanderBarlow/disney-character-locator",
    skill1: "HTML",
    skill2: "CSS",
    skill3: "Bulma",
    skill4: "API",
    skill5: "Cookies",
    skill6: "Session Cache",
  },
  {
    name: "NestEase",
    description:
      "This is a full stack application using the MERN stack. User sessions are verified through JWT (Json Web Token). This application allows users to create a profile and add rentable items to nearby users. They can also access the marketplace to rent items from other users in the area.",
    deployment: "https://nestease.herokuapp.com/",
    repo: "https://github.com/AlexanderBarlow/rental-site",
    skill1: "ReactJS",
    skill2: "NodeJS",
    skill3: "MongoDB",
    skill4: "JWT",
    skill5: "Materialize",
    skill6: "GraphQL",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Projects() {
  return (
    <>
      <div className="xl:flex xl:w-fit xl:h-screen lg:flex lg:w-fit lg:h-screen sm:h-fit sm:w-fit sm:flex sm:justify-center sm:align-middle sm:mt-36">
        <section id="projects">
          <a href="projects" className="hidden"></a>
          <div className="flex flex-100 items-center" id="lottie1">
            <h1 className="flex flex-100 text-white lg:text-6xl sm:text-8xl  sm:justify-center sm:align-middle">
              Projects
            </h1>
          </div>
          <div className="flex flex-100 w-fit justify-center justify-items-center">
            <div className="flex flex-100 flex-wrap flex-row justify-center space-x-4  m-20 ">
              {projects.map((item) => (
                <div
                  className={classNames(
                    "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-8 py-8 font-medium h-fit mb-2 gap-4 flex w-11/12 ",
                    ""
                  )}
                  key={item.name}
                >
                  {" "}
                  <a href={item.deployment}>
                    <h1 className="text-purple-700 xl:text-3xl font-bold lg:text-3xl sm:text-7xl">
                      {item.name}{" "}
                      <i
                        className="fa-solid fa-square-arrow-up-right fa-sm"
                        style={{ color: "#b332af" }}
                      ></i>
                    </h1>

                    <div className="flex flex-wrap flex-row flex-100 h-fit">
                      <p className="m-2 leading-relaxed h-fit w-11/12 lg:text-3xl sm:text-6xl sm:leading-normal">
                        {item.description}
                      </p>
                    </div>
                    <ul className="flex flex-wrap justify-start ">
                      <li className="bg-purple-950 text-purple-400 font-semibold  xl:py-2 xl:px-4 py-1 px-1 border border-purple-500 rounded w-fit m-2 sm:text-6xl lg:text-xl xl:text-xl flex-25">
                        {item.skill1}
                      </li>
                      <li className="bg-purple-950  text-purple-400 font-semibold  xl:py-2 xl:px-4 py-1 px-1 border border-purple-500 rounded w-fit m-2 sm:text-6xl lg:text-xl xl:text-xl flex-25">
                        {item.skill2}
                      </li>
                      <li className="bg-purple-950 text-purple-400 font-semibold  xl:py-2 xl:px-4 py-1 px-1 border border-purple-500 rounded w-fit m-2 sm:text-6xl lg:text-xl xl:text-xl flex-25">
                        {item.skill3}
                      </li>
                      <li className="bg-purple-950  text-purple-400 font-semibold  xl:py-2 xl:px-4 py-1 px-1 border border-purple-500 rounded w-fit m-2 sm:text-6xl lg:text-xl xl:text-xl flex-25">
                        {item.skill4}
                      </li>
                      <li className="bg-purple-950  text-purple-400 font-semibold  xl:py-2 xl:px-4 py-1 px-1 border border-purple-500 rounded w-fit m-2 sm:text-6xl lg:text-xl xl:text-xl flex-25">
                        {item.skill5}
                      </li>
                      <li className="bg-purple-950  text-purple-400 font-semibold  xl:py-2 xl:px-4 py-1 px-1 border border-purple-500 rounded w-fit m-2 sm:text-6xl lg:text-xl xl:text-xl flex-25">
                        {item.skill6}
                      </li>
                    </ul>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div
            className="grid w-60 justify-items-center min-h-fit items-center"
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
      </div>
    </>
  );
}

export default Projects;

import React from "react";
import Image from "next/image";
import myPic from "../assets/dlf10_0gfEPCHLKZ.json";
import { Player } from "@lottiefiles/react-lottie-player";

function Skills() {
  return (
    <section
      className="grid justify-items-center align-middle h-screen"
      id="skills"
    >
      <a href="skills" className="scroll-smooth hidden"></a>
      <div className="flex flex-100" id="lottie1">
        <h1 className="text-white lg:text-4xl underline text-6xl ">Skills</h1>
      </div>
      <div className="flex flex-100 justify-evenly">
      <div className="m-5">
        <h2 className="text-purple-700 text-5xl italic font-bold">Front-End</h2>
        <ul className="text-white text-4xl">
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>HandleBars</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
      <div className="m-5">
        <h2 className="text-purple-700 text-5xl italic font-bold">Back-End</h2>
        <ul className="text-white text-4xl">
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>Sequelize</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
        </ul>
      </div>
      </div>
      <div
        className="lg:w-70 w-60 row-start-3 row-end-4 justify-items-end"
        id="lottie2"
      >
        <Player
          src="https://lottie.host/85facef7-e842-4a92-a20e-70a7a8ca835d/UY4iYNPUiI.json"
          className="player"
          loop
          autoplay
        />
      </div>
    </section>
  );
}

export default Skills;

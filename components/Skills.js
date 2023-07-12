import React from "react";
import Image from "next/image";
import myPic from "../assets/dlf10_0gfEPCHLKZ.json";
import { Player } from "@lottiefiles/react-lottie-player";

function Skills() {
  return (
    <section
      className="lg:grid lg:grid-rows-3 lg:grid-flow-col lg:gap-4 lg:items-center lg:h-screen lg:snap-center lg:justify-center grid grid-rows-3 grid-cols-7 items-center h-screen gap-8 snap-start"
      id="skills"
    >
      <a href="skills" className="scroll-smooth"></a>
      <div className="lg:w-60 lg:row-start-1 lg:row-span-1 row-start-1 row-span-1 col-start-3" id="lottie1">
        <h1 className="text-white lg:text-4xl underline text-6xl ">Skills</h1>
      </div>
      <div className="lg:row-end-4 lg:row-span-3 row-end-4 row-span-3 col-start-2">
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
      <div className="lg:row-end-4 lg:row-span-3 row-end-4 row-span-3 col-start-5">
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

import React from "react";
import Image from "next/image";
import myPic from "../assets/dlf10_0gfEPCHLKZ.json";
import { Player } from "@lottiefiles/react-lottie-player";

function Skills() {
  return (
    <section
      className="grid grid-rows-3 grid-flow-col gap-4 items-center justify-center h-screen "
      id="skills"
    >
      <a href="skills" className="scroll-smooth"></a>
      <div className="w-60 row-start-1 row-span-1" id="lottie1">
        <h1 className="text-white text-4xl underline ">Skills</h1>
      </div>
      <div className="row-end-4 row-span-3">
        <h2 className="text-purple-700 text-xl italic font-bold">Front-End</h2>
        <ul className="text-white">
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>HandleBars</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
      <div className="row-end-4 row-span-3">
        <h2 className="text-purple-700 text-xl italic font-bold">Back-End</h2>
        <ul className="text-white">
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>Sequelize</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
        </ul>
      </div>
      <div
        className="w-60  row-start-3 row-end-4 justify-items-end"
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

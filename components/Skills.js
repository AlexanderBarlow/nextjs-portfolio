import React from "react";
import Image from "next/image";
import myPic from "../assets/dlf10_0gfEPCHLKZ.json";
import { Player } from "@lottiefiles/react-lottie-player";

function Skills() {
  return (
    <section
      className="inline-flex flex-wrap flex-row flex-100 justify-items-center items-center h-fit w-fit lg:grid lg:grid-cols-3 mb-48 gap-4 justify-evenly"
      id="skills"
    >
      <a href="skills" className="hidden"></a>
        <h1 className="text-white lg:text-4xl underline text-6xl flex flex-100 justify-center ">Skills</h1>
      <div className="m-5">
        <h2 className="text-purple-700 text-5xl italic font-bold">Front-End</h2>
        <ul className="text-white text-4xl">
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>HandleBars</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>BootStrap</li>
          <li>TailWind</li>
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
          <li>Restful</li>
          <li>Mongoose</li>
        </ul>
      </div>
      <div
        className="lg:w-70 w-60 justify-end"
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

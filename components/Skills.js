import React from "react";
import Image from "next/image";
import myPic from "../assets/dlf10_0gfEPCHLKZ.json";
import { Player } from "@lottiefiles/react-lottie-player";

function Skills() {
  return (
    <>
    <div className="flex justify-center w-11/12">
    <section
      className="flex flex-wrap flex-row flex-100 justify-self-center justify-evenly justify-items-center h-fit w-11/12 gap-4 m-5 "
      id="skills"
    >
      <a href="skills" className="hidden"></a>
        <h1 className="text-white text-8xl flex flex-100 justify-center mb-2">Skills</h1>
      <div className="m-5">
        <h2 className="text-purple-700 text-7xl italic font-bold">Front-End</h2>
        <ul className="text-white text-7xl leading-relaxed">
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
        <h2 className="text-purple-700 text-7xl italic font-bold">Back-End</h2>
        <ul className="text-white text-7xl leading-relaxed">
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
        className="flex flex-100 h-fit w-60 justify-center"
        id="lottie2"
      >
        <Player
          src="https://lottie.host/85facef7-e842-4a92-a20e-70a7a8ca835d/UY4iYNPUiI.json"
          className="player w-60 h-60" 
          loop
          autoplay
        />
      </div>
    </section>
    </div>
    </>
  );
}

export default Skills;

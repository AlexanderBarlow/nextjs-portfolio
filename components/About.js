import React from "react";
import Image from "next/image";
import myPic from "../assets/dlf10_0gfEPCHLKZ.json";
import { Player } from "@lottiefiles/react-lottie-player";

function About() {
  return (
    <section
      className="items-center"
      id="about"
    >
      <a href="about"></a>
      <div className="grid grid-rows-1 lg:w-60 lg:row-start-1 lg:row-span-1 w-72 row-start-1 row-end-2 justify-items-start" id="lottie1">
        <Player
          src="https://lottie.host/f4596bf9-6f9d-4e9e-8409-68b7508b7adf/tVpcrC2opN.json"
          className="player"
          loop
          autoplay
        />
      </div>
      <div className="grid grid-rows-2 grid-flow-col lg:row-end-4 lg:row-span-3 lg:justify-items-center leading-loose">
        <div className="" id="name">
          <h1 className="lg:text-5xl text-purple-900 lg:hover:underline text-6xl font-bold row-start-1 ">
            Alexander Barlow
          </h1>
          <h2 className="text-5xl text-white lg:text-4xl font-bold ">
            Full Stack Software Engineer
          </h2>
        </div>
        <div  id="aboutme">
          <p className=" lg:text-md text-white text-4xl lg:leading-relaxed">
            I am a Full Stack Web Developer dedicated to making UI/UXs that are
            <span className="italic text-purple-500 underline">
              {" "}
            out of This World!
            </span>{" "}
            I am fluent in HTML, CSS and many things JavaScript.
          </p>
        </div>
      </div>
      <div
        className="grid grid-rows-1 w-60 justify-items-end"
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

export default About;

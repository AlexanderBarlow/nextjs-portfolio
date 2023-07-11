import React from "react";
import Image from "next/image";
import myPic from "../assets/dlf10_0gfEPCHLKZ.json";
import { Player } from "@lottiefiles/react-lottie-player";

function About() {
  return (
    <section
      className="lg:grid lg:grid-rows-3 lg:grid-flow-col lg:gap-4 lg:items-center lg:h-screen lg:snap-center grid grid-rows-3 grid-flow-col items-center h-screen"
      id="about"
    >
      <a href="about"></a>
      <div className="lg:w-60 lg:row-start-1 lg:row-span-1 w-72 row-start-1" id="lottie1">
        <Player
          src="https://lottie.host/f4596bf9-6f9d-4e9e-8409-68b7508b7adf/tVpcrC2opN.json"
          className="player"
          loop
          autoplay
        />
      </div>
      <div className="lg:row-end-4 lg:row-span-3 row-end-4 row-span-3">
        <div className="" id="name">
          <h1 className="lg:text-5xl text-purple-950 lg:hover:underline text-8xl">
            Alexander Barlow
          </h1>
        </div>
        <div  id="aboutme">
          <p className=" lg:text-md text-white text-4xl  ">
            I am a Full Stack Web Developer dedicated to making UI/UXs that are
            <span className="italic text-purple-500">
              {" "}
              out of This World!
            </span>{" "}
            I am fluent in HTML, CSS and many things JavaScript.
          </p>
        </div>
      </div>
      <div
        className="lg:w-60 lg:row-start-3 lg:row-end-4 lg:justify-items-end w-60 row-start-3 row-end-4 "
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

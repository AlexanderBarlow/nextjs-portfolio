import React from "react";
import Image from "next/image";
import myPic from "../assets/dlf10_0gfEPCHLKZ.json";
import { Player } from "@lottiefiles/react-lottie-player";

function About() {
  return (
    <section
      className="grid grid-rows-3 grid-flow-col gap-4 items-center h-screen sm:h-screen snap-center"
      id="about"
    >
      <a href="about"></a>
      <div className="w-60 row-start-1 row-span-1 " id="lottie1">
        <Player
          src="https://lottie.host/f4596bf9-6f9d-4e9e-8409-68b7508b7adf/tVpcrC2opN.json"
          className="player"
          loop
          autoplay
        />
      </div>
      <div className="row-end-4 row-span-3">
        <div className="" id="name">
          <h1 className="text-5xl text-purple-950 hover:underline ">
            Alexander Barlow
          </h1>
        </div>
        <div className="" id="aboutme">
          <p className=" text-md text-white ">
            I am a Full Stack Web Developer dedicated to making UI/UXs that are
            <span className="italic text-lg text-purple-500">
              {" "}
              out of This World!
            </span>{" "}
            I am fluent in HTML, CSS and many things JavaScript.
          </p>
        </div>
      </div>
      <div
        className="w-60 row-start-3 row-end-4 justify-items-end"
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

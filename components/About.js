import React from "react";
import Image from "next/image";
import myPic from "../assets/dlf10_0gfEPCHLKZ.json";
import { Player } from "@lottiefiles/react-lottie-player";

function About() {
  return (
    <section
      className="items-center snap-start m-8 lg:h-screen grid mb-12"
      id="about"
    >
      <a href="about" className="hidden"></a>
      <div className="grid grid-rows-2 lg:row-end-4 lg:row-span-3 lg:justify-items-center h-screen">
        <div className="mt-9" id="name">
          <h1 className="lg:text-5xl text-purple-900 lg:hover:underline text-6xl font-bold mb-2">
            Alexander Barlow
          </h1>
          <h2 className="text-5xl text-white lg:text-4xl font-bold ">
            Software Engineer
          </h2>
        </div>
        <div id="aboutme">
          <p className=" lg:text-md text-white text-4xl lg:leading-relaxed leading-relaxed">
            I am a Full Stack Web Developer dedicated to making UI/UXs that are
            <span className="italic text-purple-500 underline">
              {" "}
            out of This World!
            </span>{" "}
            I am fluent in HTML, CSS and many things JavaScript. My interest sparked through developer tools. I would change the css to sites like Google to make the background color purple. Or, make google my name. I found the ability to display my creativy on what connects the world captivating.
          </p>
        </div>
      </div>
      <div
        className="grid grid-rows-1 w-60 place-self-end mt-12"
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

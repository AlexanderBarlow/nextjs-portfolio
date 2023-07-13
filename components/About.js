import React from "react";
import Image from "next/image";
import myPic from "../assets/dlf10_0gfEPCHLKZ.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


function About() {
  return (
    <>
    <section
      className="items-center snap-start m-6  grid sm:mb-12"
      id="about"
    >
      <a href="about" className="hidden"></a>
      <div className="grid grid-rows-2 lg:row-end-4 lg:row-span-3 sm:h-screen">
        <div className="mt-9 h-fit mb-0" id="name">
          <h1 className="lg:text-5xl text-purple-900 lg:hover:underline text-6xl font-bold mb-2">
            Alexander Barlow
          </h1>
          <h2 className="text-5xl text-white lg:text-4xl font-bold ">
            Software Engineer
          </h2>
          <a href="https://www.instagram.com/abarlow17/" className="">
          <i className="fa-brands fa-instagram fa-2xl mr-8 mt-8" style={{"color": "#963cc3"}}/>
          </a>
          <a href="https://github.com/AlexanderBarlow?ocid=AIDcmmc3fhtaow_SEM_CjwKCAiA-dCcBhBQEiwAeWidtWXkU6iAgzfg1eQxF4OTYNXDO5o3VSvsynenWnYZDucyhfkRwcbZehoCA6oQAvD_BwE:G:s">
          <i className="fa-brands fa-github m-8 fa-2xl" style={{"color": "#963cc3"}}/>
          </a>
          <a href="https://www.linkedin.com/in/alexanderlbarlow/">
          <i className="fa-brands fa-linkedin fa-2xl m-8" style={{"color": "#963cc3"}}/>
          </a>
          <a href="https://twitter.com/Barlow_17">
          <i className="fa-brands fa-twitter fa-2xl m-8" style={{"color": "#963cc3"}}/>
          </a>
        </div>
        <div  className="mt-0" id="aboutme">
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
        className="grid grid-rows-1 w-60 place-self-end sm:mt-12 mt-0"
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
    </>
  );
}

export default About;

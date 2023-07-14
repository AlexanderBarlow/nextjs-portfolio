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
      className="items-start snap-start m-6  flex flex-100 flex-wrap flex-row justify-items-center align-middle justify-center h-fit"
      id="about"
    >
      <a href="about" className="hidden"></a>
        <div className="mt-9 mb-0 flex justify-start" id="name">
          <div className="flex flex-100 flex-wrap flex-row">
          <h1 className=" text-purple-900 lg:hover:underline text-7xl font-bold mb-2 flex-100">
            Alexander Barlow
          </h1>
          <h2 className="text-5xl text-white font-bold flex-100">
            Software Engineer
          </h2>
          <a href="https://www.instagram.com/abarlow17/" className="">
          <i className="fa-brands fa-instagram fa-3x mr-8 mt-8" style={{"color": "#963cc3"}}/>
          </a>
          <a href="https://github.com/AlexanderBarlow?ocid=AIDcmmc3fhtaow_SEM_CjwKCAiA-dCcBhBQEiwAeWidtWXkU6iAgzfg1eQxF4OTYNXDO5o3VSvsynenWnYZDucyhfkRwcbZehoCA6oQAvD_BwE:G:s">
          <i className="fa-brands fa-github m-8 fa-3x" style={{"color": "#963cc3"}}/>
          </a>
          <a href="https://www.linkedin.com/in/alexanderlbarlow/">
          <i className="fa-brands fa-linkedin fa-3x m-8" style={{"color": "#963cc3"}}/>
          </a>
          <a href="https://twitter.com/Barlow_17">
          <i className="fa-brands fa-twitter fa-3x m-8" style={{"color": "#963cc3"}}/>
          </a>
          </div>
        </div>
        <div className="flex clear-right min-w-fit w-screen h-fit min-h-fit">
          <p className=" text-white text-5xl leading-relaxed clear-right mt-12 m-6 justify-end w-11/12">
            I am a Full Stack Web Developer dedicated to making UI/UXs that are
            <span className="italic text-purple-500 underline">
              {" "}
            accessible and gravitating!
            </span>{" "}
            I am fluent in HTML, CSS and many things JavaScript. My interest sparked through developer tools. I would change the css to sites like Google to make the background color purple. Or, make google my name. I found the ability to display my creativy on what connects the world captivating.
          </p>
          </div>
          <div className="flex flex-100 justify-end">
        <Player
          src="https://lottie.host/24eecb54-4941-4284-b26c-133ad3a3c271/EYWD4Y3JFc.json"
          className="player w-60 h-60"
          loop
          autoplay
        />
        </div>
    </section>
    </>
  );
}

export default About;

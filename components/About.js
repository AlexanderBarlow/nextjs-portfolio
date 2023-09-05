import React from "react";
import Image from "next/image";
import myPic from "../assets/dlf10_0gfEPCHLKZ.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Import the PDF file
import resumePDF from "../public/current_resume.pdf"; 

function About() {
  return (
    <>
      <section
        className="lg:flex lg:h-screen lg:w-screen lg:align-middle lg:justify-center lg:flex-wrap h-fit flex w-fit justify-center align-middle flex-wrap "
        id="about"
      >
        <a href="about" className="hidden"></a>
        <div className="mt-9 mb-0 flex" id="name">
          <div className="flex flex-100 flex-wrap flex-row">
            <h1 className=" text-purple-900 lg:hover:underline lg:text-8xl text-8xl font-bold mb-2 flex-100">
              Alexander Barlow
            </h1>
            <h2 className="text-7xl lg:text-5xl text-white font-bold flex-100">
              Full-Stack Web Developer
            </h2>
            <a href="https://www.instagram.com/abarlow17/" className="">
              <i
                className="fa-brands fa-instagram fa-5x mr-8 mt-8"
                style={{ color: "#963cc3" }}
              />
            </a>
            <a href="https://github.com/AlexanderBarlow?ocid=AIDcmmc3fhtaow_SEM_CjwKCAiA-dCcBhBQEiwAeWidtWXkU6iAgzfg1eQxF4OTYNXDO5o3VSvsynenWnYZDucyhfkRwcbZehoCA6oQAvD_BwE:G:s">
              <i
                className="fa-brands fa-github m-8 fa-5x"
                style={{ color: "#963cc3" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/alexanderlbarlow/">
              <i
                className="fa-brands fa-linkedin fa-5x m-8"
                style={{ color: "#963cc3" }}
              />
            </a>
            <a href="https://twitter.com/Barlow_17">
              <i
                className="fa-brands fa-twitter fa-5x m-8"
                style={{ color: "#963cc3" }}
              />
            </a>
            <a href={resumePDF} download="current_resume.pdf">
              <i
                className="fa-solid fa-file fa-5x m-8 hover:fa-bounce"
                style={{ color: "#963cc3", cursor: "pointer" }}
              />
            </a>
          </div>
        </div>
        <div className="flex lg:w-fit lg:h-fit lg:justify-center min-w-fit w-screen h-fit min-h-fit">
          <p className=" text-white text-7xl lg:text-5xl lg:leading-relaxed leading-relaxed clear-right mt-12 m-6 justify-end w-11/12">
            I am a Full Stack Web Developer dedicated to making UI/UXs that are
            <span className="italic text-purple-500 underline">
              {" "}
              accessible and gravitating!
            </span>{" "}
            I am fluent in HTML, CSS and many things JavaScript. My interest
            sparked through developer tools. I would change the CSS on sites
            like Google to make the background color purple or change Google to my name. I found the ability to display my creativity on what connects the world captivating.
          </p>
        </div>
        <div className="lg:flex lg:flex-100 lg:h-fit lg:w-fit lg:justify-center lg:align-middle hidden lg:z-0">
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

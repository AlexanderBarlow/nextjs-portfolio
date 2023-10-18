import React from "react";
import Image from "next/image";
import myPic from "../assets/dlf10_0gfEPCHLKZ.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Import the PDF file
import resumePDF from "../public/currentresume.pdf";

function About() {
  return (
    <>
      <section
        className="xl:flex xl:h-screen xl:w-fit xl:align-middle xl:justify-center xl:flex-wrap lg:flex lg:w-fit lg:h-screen lg:justify-center lg:align-middle lg:flex-wrap sm:h-fit sm:mt-36 ml-12 lg:mr-36 lg:mt-12"
        id="about"
      >
        <a href="about" className="hidden"></a>
        <div className="mt-9 mb-0 flex lg:mt-2 lg:mb-0" id="name">
          <div className="flex flex-100 flex-wrap flex-row">
            <h1 className=" text-purple-900 xl:hover:underline xl:text-7xl text-8xl font-bold mb-2 flex-100 lg:text-6xl lg:leading-none lg:mb-0 sm:mb-5">
              Alexander Barlow
            </h1>
            <h2 className="text-7xl xl:text-5xl text-white font-bold flex-100 lg:text-4xl">
              Full-Stack Web Developer
            </h2>
            <div>
              <a href="https://www.instagram.com/abarlow17/">
                <i
                  className="fa-brands fa-instagram fa-5x mr-8 mt-8 lg:text-6xl"
                  style={{ color: "#963cc3" }}
                />
              </a>
              <a href="https://github.com/AlexanderBarlow?ocid=AIDcmmc3fhtaow_SEM_CjwKCAiA-dCcBhBQEiwAeWidtWXkU6iAgzfg1eQxF4OTYNXDO5o3VSvsynenWnYZDucyhfkRwcbZehoCA6oQAvD_BwE:G:s">
                <i
                  className="fa-brands fa-github m-8 fa-5x lg:text-6xl"
                  style={{ color: "#963cc3" }}
                />
              </a>
              <a href="https://www.linkedin.com/in/alexanderlbarlow/">
                <i
                  className="fa-brands fa-linkedin fa-5x m-8 lg:text-6xl"
                  style={{ color: "#963cc3" }}
                />
              </a>
              <a href="https://twitter.com/Barlow_17">
                <i
                  className="fa-brands fa-twitter fa-5x m-8 lg:text-6xl"
                  style={{ color: "#963cc3" }}
                />
              </a>
              <a href={resumePDF} download="current_resume.pdf">
                <i
                  className="fa-solid fa-file fa-5x m-8 hover:fa-bounce lg:text-6xl lg:cursor-pointer"
                  style={{ color: "#963cc3" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap xl:w-fit xl:h-fit xl:justify-center lg:w-fit lg:h-fit lg:flex lg:justify-center">
          <p className=" text-white text-7xl xl:text-5xl xl:leading-relaxed lg:text-3xl lg:leading-loose sm:leading-normal">
            I am a Full Stack Web Developer dedicated to making UI/UXs that are
            <span className="italic text-purple-500 underline">
              {" "}
              accessible and gravitating!
            </span>{" "}
            I am fluent in HTML, CSS and many things JavaScript. My interest
            sparked through developer tools. I would change the CSS on sites
            like Google to make the background color purple or change Google to
            my name. I found the ability to display my creativity on what
            connects the world captivating.
          </p>
        </div>
        <div className="xl:flex xl:flex-100 xl:h-fit xl:w-fit xl:justify-center xl:align-middle hidden xl:z-0">
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

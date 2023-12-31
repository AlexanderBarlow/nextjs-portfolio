import React from "react";
import Image from "next/image";
import myPic from "../assets/dlf10_0gfEPCHLKZ.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Import the PDF file
import resumePDF from "../public/current_resume (4).pdf";

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
            <h1 className=" text-purple-900 xl:hover:underline xl:text-7xl text-8xl font-bold flex-100 lg:text-6xl lg:leading-none lg:mb-0 sm:mb-5">
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
            I have experience in planning, developing and mantaining user
            friendly websites. Below, you can find some of my projects as well
            as the technologies I am familiar with.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;

import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import React from "react";
import About from "../components/About";
import { Trispace } from "next/font/google";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useState, useEffect, useC } from "react";
import RingLoader from "react-spinners/RingLoader";

// If loading a variable font, you don't need to specify the font weight
const triscape = Trispace({ subsets: ["latin"] });

function consoleClear() {
  if (console) {
    console.clear();
  }
  console.log(
    "%cMade By Alexander Barlow!",
    "color: #f709bb; font-family: sans-serif; font-size: 4rem; margin: 1rem; border: 2px solid #f709bb; border-radius: 4px; text-shadow: 1px 1px 1px #0a0121; background: #020617"
  );
}

export default function Home(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4100);
  }, []);

  return (
    <>
      <div className={triscape.className} class="h-screen">
        {loading ? (
          <div className="flex justify-center items-center w-screen h-screen">
            <RingLoader
              color="#a21caf"
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </>
        )}
      </div>
      {consoleClear()}
    </>
  );
}

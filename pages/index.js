import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import React from "react";
import About from "../components/About";
import { Trispace } from "next/font/google";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

// If loading a variable font, you don't need to specify the font weight
const triscape = Trispace({ subsets: ["latin"] });

export default function Home(props) {
  return (
    <>
      <Header />
        <div className={triscape.className} class="h-screen snap-mandatory  overflow-scroll">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
    </>
  );
}

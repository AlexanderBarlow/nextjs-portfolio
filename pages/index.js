import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header"
import React from "react";
import About from '../components/About'
import { Trispace } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const triscape = Trispace({ subsets: ['latin'] })




export default function Home(props) {
  return (
    <main className={triscape.className}>
    <Header />
    <About />
    </main>
)
}



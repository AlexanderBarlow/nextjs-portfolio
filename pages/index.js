import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header"
import React from "react";
import About from '../components/About'




export default function Home(props) {
  return (
    <>
    <Header />
    <About />
    </>
)
}



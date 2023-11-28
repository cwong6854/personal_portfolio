import Head from "next/head";
import Main from "@/pages/Main";
import About from "./about";
import Project from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Curtis Wong | Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

import { useEffect, useRef } from "react";
import Footer from "./components/footer/Footer";
import { gsap } from "gsap";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <Project />
      <Footer />
    </>
  );
}

export default App;

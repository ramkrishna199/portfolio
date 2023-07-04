import React from "react";

import NavBar from "./Home/NavBar";
import Experties from "./Home/Experties";
import Service from "./Home/Service";
import Projects from "./Home/Projects";
import Contact from "./Home/Contact";
import About from "./Home/About";

const Home = () => {
  return (
    <>
      <body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="51">
        <NavBar />
        <About />
        <Experties />
        <Service />
        <Projects />
        <Contact />
        <a href="/" class="btn btn-lg btn-primary btn-lg-square back-to-top">
          <i class="bi bi-arrow-up"></i>
        </a>
      </body>
    </>
  );
};

export default Home;

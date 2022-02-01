import React from "react";
import Name from "./Name";
import "./componentsCSS/singlePageStyles.css";
import About from "./About";
import Navbar from "./Navbar";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import "./componentsCSS/backgroundStyles.css";

const SinglePage = () => {
  return (
    <>
      <div className="background">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
        <div className="container-fluied">
          <p className="go-down">scroll down</p>
          <section className="page-navbar">
            <Navbar />
          </section>
          <section className="page-1">
            <Name />
          </section>
          <section className="page-2">
            <About />
          </section>
          <section className="page-3">
            <Project />
          </section>
          <section className="page-4">
            <Skills />
          </section>
          <section className="page-5">
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
};

export default SinglePage;

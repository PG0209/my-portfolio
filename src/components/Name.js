import React from "react";
import "./componentsCSS/nameStyles.css";
import "./componentsCSS/skillsStyles.css";
const Name = () => {
  return (
    <>
      <div className="name-section container">
        <div className="intro">
          <p className="duction">&ensp;Hi there, this is</p>
        </div>
        <div className="my-name">
          <span className="letters">P</span>
          <span className="letters">R</span>
          <span className="letters">A</span>
          <span className="letters">D</span>
          <span className="letters">E</span>
          <span className="letters">E</span>
          <span className="letters">P</span>
          <span className="letters">&ensp;</span>
          <span className="letters">Y</span>
          <span className="letters">M</span>
        </div>
        <div className="wrapper">
          <p className="know">and, I know</p>&ensp;
          <div className="interested">
            <div className="fields">
              <span className="html">HTML</span> 
              <i className="fab fa-html5">.</i>
            </div>
            <div className="fields">
              <span className="css">CSS</span>
              <i className="fab fa-css3-alt">.</i>
            </div>
            <div className="fields">
              <span className="js">JAVASCRIPT</span> 
              <i className="fab fa-js-square">.</i>
            </div>
            <div className="fields">
              <span className="react">REACT</span> 
              <i className="fab fa-react">.</i>
            </div>
            <div className="fields">
              <span className="html">HTML</span>{" "}
              <i className="fab fa-html5">.</i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Name;

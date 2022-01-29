import React from "react";
import "./componentsCSS/projectStyles.css";
import pi3 from "./Assets/screenshot3.png";
import pi4 from "./Assets/screenshot4.png";
import pi5 from "./Assets/screenshot5.png";
import pi6 from "./Assets/screenshot6.png";
 
const Project = () => {
  return (
    <>
      <div className="project-container container">
        <div className="head">
          <h3 className="name">My Project</h3>
        </div>
        <div className="project container">
          <div className="project-title ">
            <h3 className="project-name">SHOPZEE..</h3>
            <p className="project-dis">
              I have built this E-Commerce appliction by uising Fake API, and I
              also used React Routes for rendering and React Redux for state
              manegment and also used Redux Thunk as middleware. As of now the
              project is almost 75% completed. Here you can see my project, have
              a look...
            </p>
            <ul className="tools">
              <h3 className="tools-head">Used tools and library</h3>
              <li className="used">Bootstrap</li>
              <li className="used">Redux</li>
              <li className="used">Redux Thunk</li>
              <li className="used">API</li>
            </ul>
          </div>
          <div className="project-img">
            <div className="project-img1">
              <img src={pi3} alt="shopzee.." />
              <img src={pi4} alt="shopzee.." />
              <img src={pi5} alt="shopzee.." />
              <img src={pi6} alt="shopzee.." />
            </div>
            <div className="git-link">
              <button className="btn-default">
                click here to see the code
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

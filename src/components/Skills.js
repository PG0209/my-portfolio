import React from "react";
import "./componentsCSS/skillsStyles.css";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const Skills = () => {
  return (
    <>
      <div className="skills-heading">
        <h4 className="skills-title">SkillSet.</h4>
        <p className="learnt">
          I have learnt all these skill in just three months by AchiversIt.
        </p>
        <p className="skills-dis">
          (Based an my work experience, I am rating am own sills out of 100%)
        </p>
        <div className="skills container">
          <div className="card">
            <i className="icon-html">
              <FaHtml5 size={150} />
            </i>
            <hr />
            <div className="skills-dis">
              <p className="dis">
                Am aware that HTML is the piller of WEB Design, and I'am sure
                that i can handle and deal with any kind of HTML tasks.
              </p>
            </div>
            <div className="new">
              <div className="bar">
                <div className="html-bar"></div>
              </div>
              <div className="details">90%</div>
            </div>
          </div>
          <div className="card">
            <i className="icon-react">
              <FaReact size={150} />
            </i>
            <hr />
            <div className="skills-dis">
              <p className="dis">
                React is like a smart phones, each and ever months or year they
                update the new features, and am ready to test those new
                features.
              </p>
            </div>
            <div className="new">
              <div className="bar">
                <div className="react-bar"></div>
              </div>
              <div className="details">78%</div>
            </div>
          </div>
          <div className="card">
            <i className="icon-css">
              <FaCss3Alt size={150} />
            </i>
            <hr />
            <div className="skills-dis">
              <p className="dis">
                CSS, Wow its like an ocean, i know how to swim and I'am trying
                to swim faster.
              </p>
            </div>
            <div className="new">
              <div className="bar">
                <div className="css-bar"></div>
              </div>
              <div className="details">75%</div>
            </div>
          </div>
          <div className="card">
            <i className="icon-js">
              <IoLogoJavascript size={150} />
            </i>
            <hr />
            <div className="skills-dis">
              <p className="dis">
                Javascript, it's like human brain, it conrols the UI and the
                Code. It's my first programming languages and I'll keep
                learning.
              </p>
            </div>
            <div className="new">
              <div className="bar">
                <div className="js-bar"></div>
              </div>
              <div className="details">72%</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

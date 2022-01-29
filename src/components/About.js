import React from "react";
import "./componentsCSS/aboutStyles.css";

const About = () => {
  return (
    <div className="page-container " id="about">
      <h1 className="about-page">About Me.</h1>
      <div className="heading container">
        <div className="about-me">
          <div>
            <p className="me-1">
              Well, as you know my name is pradeep. Just stay little longer, I
              wont take much of your time.</p>
              <p className="me-2">
                I did completed my 10 and 12th with first class rank (it's just
                only more than 60%, exactly 64.95% and 63.5%). And after that I
                did joined to Engineering in REVE University, but unfortunately
                I have to drop my dgree in the year of 2019, because of some
                personal reasons. So after that I worked as a Delivery boy in
                Zomato and Exicutive-Operations in Inteliminds BPO solutions. To
                be frank the reason why I left those jobs, because I know that I
                can do something better. So I rejected a very good job offer in
                NoBroker.in and I joined to AchiversIt Banglore for UI
                developments course. So here I am completed my cource on Jan
                2022, and i have buit and deployed my own portfolio.
              </p>
              <p className="me-3">
                And now am looking to work in realtime projects in your great
                organization. And I hope we will meet one day. :)
              </p>
            
          </div>
          <hr className="line" />
          <div className="about-info">
            <ul className="points">
              <li className="ticks">
                Certificates: UI Design from AchiversIT Bangalore.{" "}
              </li>
              <li className="ticks">
                Education: 10th, 12th, Engineering Discontinued &#x1F62D;.
              </li>
              <li className="ticks">Hobbies: Sketching, Drawings, Movies...</li>
              <li className="ticks">
                Experience: 1 Year experience in BPO (non IT &#128543;)
              </li>
              <li className="ticks">
                Language: Englisg, Kannada, Telugu, Hindi.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

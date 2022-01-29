import React, { useState } from "react";
import "./componentsCSS/navbarStyles.css";

const Navbar = () => {
  // const [click, setClick] = useState(true);

  // const handleClick = () => {
  //   setClick(!click);
  // };
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="brand">
            <a className="brand-name">
              Portfo<spam className="lio">lio.</spam>
            </a>
          </div>
          {/* <div className="d-flex">
                 <ul className="nav">            
                      <li className="nav-item" id="about">
                       <a className="nav-link" href="#About" >About Me</a> 
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">Projects</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">Contact Me</a>
                      </li>
                 </ul>
                </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

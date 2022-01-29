import React from "react";
import "./componentsCSS/navbarStyles.css";

const Navbar = () => {
  
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="brand">
            <a className="brand-name">
              Portfo<span className="lio">lio.</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

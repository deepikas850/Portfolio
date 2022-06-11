import React from "react";
import "./navbar.scss";

export default function navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"Navbar " + (menuOpen && "active")} id="Navbar">
      <div className="Wrapper">
        <div className="Left">
          <a href="#AboutMe" className="Logo">
            Deepika
          </a>
          {/* <div className="ItemContainer">
            <i className="fa fa-user"></i>
            <span>+918307252540</span>
          </div>
          <div className="ItemContainer">
            <i className="fa fa-envelope"></i>
            <span>ishikabindal56@gmail.com</span>
          </div> */}
        </div>
        <div className="Right">
          <div className="Hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="Line1"></span>
            <span className="Line2"></span>
            <span className="Line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

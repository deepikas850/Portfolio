import React, { useState } from "react";
import "./Resume.scss";
import Education from "./Education/Education";
import ProgrammingSkills from "./ProgrammingSkills/ProgrammingSkills";
import DevelopmentSkills from "./DevelopmentSkills/DevelopmentSkills";
import Intrests from "./Intrests/Intrests";

export default function Resume() {
  const [currpage,setcurrpage] = useState("Education");
  const scrollResume = (y) => {
    document
      .querySelector(".ResumeDetails")
      .scroll(0, document.querySelector(".ResumeDetails").offsetHeight * y);
  };
  return (
    <div className="Resume" id="Resume">
      <h1>Resume</h1>
      <h5 className="BioDetails">My Formal Bio Details</h5>
      <div className="rule"></div>
      <div className="ResumeContainer">
        <div className="ResumeSubContainer">
          <div className="ResumeIcons">
            {/* <i className="fas fa-user-graduate" aria-hidden="true"></i>
            <i className="far fa-chart-bar" aria-hidden="true"></i>
            <i className="fas fa-laptop-code" aria-hidden="true"></i>
            <i className="fas fa-palette" aria-hidden="true"></i> */}
          </div>
          <div className="ResumeList">
            <button className="Education" onClick={() => {scrollResume(0); setcurrpage("Educations");}}>
              <div className={currpage==="Education"&&"resumebackground"}></div>
              <i className="fas fa-user-graduate" aria-hidden="true"></i>
              <p className={currpage==="Education"&&"pbackground"}>Education</p>
            </button>
            <button className="ProgrammingSkills" onClick={() => {scrollResume(1); setcurrpage("ProgrammingSkills");}}>
              <div className={currpage==="ProgrammingSkills"&&"resumebackground"}></div>
              <i className="fas fa-file-code"></i>
              <p className={currpage==="ProgrammingSkills"&&"pbackground"}>Programming Skills</p>
            </button>
            <button className="Projects" onClick={() => {scrollResume(2); setcurrpage("Projects")}}>
              <div className={currpage==="Projects"&&"resumebackground"}></div>
              <i className="far fa-chart-bar" aria-hidden="true"></i>
              <p className={currpage==="Projects"&&"pbackground"}>Development Skills</p>
            </button>
            <button className="Intrests" onClick={() => {scrollResume(3); setcurrpage("Intrests");}}>
              <div className={currpage==="Intrests"&&"resumebackground"}></div>
              <i className="fas fa-palette" aria-hidden="true"></i>
              <p className={currpage==="Intrests"&&"pbackground"}>Interests</p>
            </button>
          </div>
        </div>
        <div className="ResumeDetails">
          <Education />
          <ProgrammingSkills />
          <DevelopmentSkills />
          <Intrests />
        </div>
      </div>
    </div>
  );
}

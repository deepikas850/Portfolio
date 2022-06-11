import React from "react";
import "./DevelopmentSkills.scss";
import Progressbar from "./ProgressBar/ProgressBar";

export default function DevelopmentSkills() {
  return (
    <div className="DSkills">
      <div className="DProgress">
        <div className="DLeft">
          <Progressbar text="HTML" progress="90" />
          <Progressbar text="CSS" progress="80" />
          <Progressbar text="Javascript" progress="75" />
          <Progressbar text="JQuery" progress="80" />
          <Progressbar text="React" progress="75" />
        </div>
        <div className="DRight">
          <Progressbar text="Bootstrap" progress="80" />
          <Progressbar text="NodeJS" progress="65" />
          <Progressbar text="Express" progress="70" />
          <Progressbar text="MongoDB" progress="75" />
        </div>
      </div>
      <div className="DConclusion">
        All of these skills are at the intermediate level for me. I've worked on
        a few projects with Node.js, MongoDB, and Express. In addition, I've
        built a number of React-based projects. I also used HTML, CSS, and
        JavaScript to develop a proper project.
      </div>
    </div>
  );
}

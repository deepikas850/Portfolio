import React from "react";
import "./ProgressBar.scss";

const ProgressBar = ({ text, progress }) => {
  return (
    <div className="ProgressBar">
      <h6 className="PHeading">{`${text}`}</h6>
      <div className="Parentdiv">
        <div style={{ width: `${progress}%` }} className="Childdiv">
          <span className="progresstext">{`${progress}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

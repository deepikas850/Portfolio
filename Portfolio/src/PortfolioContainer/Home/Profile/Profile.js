import React from "react";
import Typical from "react-typical";
import "./Profile.scss";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.linkedin.com/in/deepika-sharma-704a07196"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/deepiiiii__/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://github.com/deepikas850"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Deepika</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic dev 🔴 ",
                    2000,
                    "Full Stack developer 💻",
                    2000,
                    "MERN Stack dev 😎",
                    2000,
                    "React developer 📱",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="#ContactMe">
              <button className="btn primary-btn"> Hire Me </button>
            </a>
            <a href="deepika.pdf" download="deepika.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

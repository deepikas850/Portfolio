import React from "react";
import Comments from "./Comments/Comments";
import "./Testimonial.scss";

export default function Home() {
  return (
    <div className="TestContainer" id="Testimonial">
      <h1 className="TestTitle">Projects</h1>
      <h5 className="TestSubtitle">Projects I Have Designed</h5>
      <div className="rule"></div>
      <Comments />
    </div>
  );
}

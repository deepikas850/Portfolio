import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home-container" id="Home">
      <Profile />
      <Footer />
    </div>
  );
}

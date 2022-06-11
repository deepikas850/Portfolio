import "./App.scss";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Menu from "./PortfolioContainer/Menu/Menu";
import Home from "./PortfolioContainer/Home/Home";
import Navbar from "./PortfolioContainer/Navbar/navbar";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Testimonial from "./PortfolioContainer/Testimonial/Testimonial";
import Resume from "./PortfolioContainer/Resume/Resume";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="Sections">
        <Home />
        <AboutMe />
        <Resume />
        <Testimonial />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./Navbar.scss";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const showNavBar = () => {
    setToggle(true);
  };

  const hideNavBar = () => {
    setToggle(false)
  }

  return (
    <nav>
      <h1 className="logo">
        <a href="https://github.com/OlaleyeFisayo">OlaleyeFisayo</a>
      </h1>

      <div className="desktop-view">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="hamburger-menu" onClick={showNavBar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`mobile-view ${toggle ? "show" : ""}`}>
        <div class="x" onClick={hideNavBar}>
          <div class="line line1"></div>
          <div class="line line2"></div>
        </div>

        <ul>
          <li onClick={hideNavBar}>
            <a href="#home">Home</a>
          </li>
          <li onClick={hideNavBar}>
            <a href="#about">About</a>
          </li>
          <li onClick={hideNavBar}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={hideNavBar}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

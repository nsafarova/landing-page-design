import "./NavBar.css";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      <nav id="nav">
        <div className="nav-wrapper">
          <a className="logo" href="#home">
            Digital&nbsp;Agency
          </a>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <RxHamburgerMenu size={20}/>
          </div>
          <div className={`nav-list  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#testimonials">testimonials</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul></div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

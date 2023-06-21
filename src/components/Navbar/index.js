import React, { useState, useEffect } from "react";
import Logo from "../../assets/logoPe.png";
import "./styles.css";
import home from "../../pages/onepage/index";

const Navbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 60) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = `navbar ${isNavbarFixed ? "fixed" : ""}`;

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className={navbarClass}>
        <a href={home}>
          {" "}
          <img className="logo" src={Logo} alt="Logo da Empresa" />
        </a>
        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li>
              <a className="active" href="">
                HOME
              </a>
            </li>
            <li>
              <a href="">ATUAÇÃO</a>
            </li>
            <li>
              <a href="">EQUIPE</a>
            </li>
            <li>
              <a href="">BLOG</a>
            </li>
            <li>
              <a href="">CONTATO</a>
            </li>
          </ul>
        </div>

        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

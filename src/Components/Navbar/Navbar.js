import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [menuDisplay, setMenuDisplay] = useState(false);

  const openMenu = () => {
    setToggleMenu(true);
    setMenuDisplay(false);
  }
  
  
  const closeMenu = () => {
    setToggleMenu(false);
    setMenuDisplay(true);
  }

  return (
    <div className="bfm__navbar-container">
      <div className="bfm__navbar-nav-buttons">
        {toggleMenu ? (
          <RiMenu3Line
            className="bfm__mobile-menu-toggle menu-opened"
            color="#131313"
            size={50}
            onClick={closeMenu}
          />
        ) : (
          <RiCloseLine
            className="bfm__mobile-menu-toggle menu-closed"
            color="#131313"
            size={50}
            onClick={openMenu}
          />
        )}
        {menuDisplay && (
          <div className="bfm__dropdown">
            <a className="bfm__link-dropdown " href="#home" onClick={openMenu}>
          <p>Home</p>
        </a>
        <a className="bfm__link-dropdown " href="#about" onClick={openMenu}>
          <p>About</p>
        </a>
        <a className="bfm__link-dropdown " href="#roadmap" onClick={openMenu}>
          <p>Roadmap</p>
        </a>
        <a className="bfm__link-dropdown" href="#team" onClick={openMenu}>
          <p>Our Team</p>
        </a>
            
            
            </div>
        )}
       

        <a className="bfm__link-primary bfm__navbar_nav-link" href="#home">
          <p>Home</p>
        </a>
        <a className="bfm__link-primary bfm__navbar_nav-link" href="#about">
          <p>About</p>
        </a>
        <a className="bfm__link-primary bfm__navbar_nav-link" href="#roadmap">
          <p>Roadmap</p>
        </a>
        <a className="bfm__link-primary bfm__navbar_nav-link" href="#team">
          <p>Our Team</p>
        </a>
      </div>
      <div className="bfm__navbar-mint-date">
        <p>Mint Date: TBA</p>
      </div>
      <div className="bfm__navbar-social-links">
        <a href="https://twitter.com/boredfrenboards">
        <FaTwitter className="navbar-social-link" color="#131313" size={27} />
        </a>
        <FaDiscord className="navbar-social-link" color="#131313" size={27} />

        <FaInstagram className="navbar-social-link" color="#131313" size={27} />
      </div>
    </div>
  );
};

export default Navbar;

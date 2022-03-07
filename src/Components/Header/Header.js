import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="bfm__header-container" id="home">
      <div className="bfm__header-upper-container">
        <img src="/media/bfb_logo.png" alt="A red bored fren NFT"></img>
      </div>
      <div className="bfm__header-lower-container">
        <div className="bfm__fren-container">
          <img src="/media/bfb2.png" alt="a Bored Fren NFT"></img>
        </div>
        <div className="bfm__header-title-container">
          <h1>Bored Fren Boards</h1>
          <h2>Come Join the Fun!</h2>
        </div>
        <div className="bfm__header-thf-container">
          <img
            src="/media/skpj-10-white.png"
            alt="Tony Hawk Foundation Logo"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Header;

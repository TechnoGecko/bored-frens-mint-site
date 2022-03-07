import React from "react";
import "./footer.css";
import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return <div className="bfm__footer-container">
    <div className="bfm__footer-cta">
      <h2 className="bfm__footer-cta cta1">Now, how about you stop being bored</h2>
      <h3 className="bfm__footer-cta cta2">and</h3>
      <h1 className="bfm__footer-cta cta3">Join the Boards</h1>
    </div>
    <div className="bfm__footer-lower">
      <div className="bfm__social-wrapper">
        <p className="bfm__email"><span className="bfm__email-contact">Contact for anything: </span><a className="email-link" href="mailto:boredfrenboards@gmail.com">BoredFrenBoards@gmail.com</a></p>
      <div className="bfm__social-links">
        <a href="https://twitter.com/boredfrenboards" className="bfm__social-link">
      <FaTwitter  color="#64BAAA" size={27} />
      </a>
      <a href="https://twitter.com/boredfrenboards" className="bfm__social-link">
      <FaDiscord  color="#64BAAA" size={27} />
      </a>
      <a href="https://twitter.com/boredfrenboards" className="bfm__social-link">
      <FaInstagram  color="#64BAAA" size={27} />
      </a>
      </div>
      </div>
      <img className="bfm__footer-img" src="/media/bfb2.png" alt="photo of a Bored Fren Board NFT"></img>
    </div>
  </div>;
};

export default Footer;

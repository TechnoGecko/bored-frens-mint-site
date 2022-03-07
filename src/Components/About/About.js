import React from "react";
import "./about.css";
import { FaMouse, FaChevronDown } from "react-icons/fa";

const About = () => {
  return (
    <div className="bfm__about-container" id="about">
      <span className="bfm__about-scroll">
        <FaMouse className="about-scroll-mouse" size={32} color="white" />
        <FaChevronDown
          className="about-scroll-chevron slide-out-bottom fade-out"
          size={32}
          color="#c79dcd"
        />

        <h3>See how we're giving back</h3>
      </span>
      <div className="bfm__about-info-container">
        <div className="bfm__about-info">
          <h1>Who are the bored frens?</h1>
          <p>
            We are building a community of people who care about <i>people</i>. A grass roots group of dudes wanting to grow a community of skateboarders and web3'ers alike. <br/><br/>We plan to aid in funding skatepark projects across the globe, build a skate and streetwear brand, give gear to those who are less fortunate, and teach people how to skate.
          </p>
        </div>
        <div className="bfm__about-img">
          <img src="/media/bfb1.jpg" alt="A bored fren NFT"></img>
        </div>
      </div>
    </div>
  );
};

export default About;

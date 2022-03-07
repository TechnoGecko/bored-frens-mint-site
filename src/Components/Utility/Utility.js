import React from "react";
import "./utility.css";

const Utility = () => {
  return (
    <div className="bfm__utility-container">
      <div className="bfm__utility-title">
        <h3>Offering Utility That's</h3>
        <h1>
          Tan<span className="bfm__utility-rad">G</span>ible
        </h1>
      </div>
      <div className="bfm__utility-body">
        <div className="bfm__utility-img">
          <img
            src="/media/rpf-board-preview-crop.png"
            alt="A custom-printed skateboard featuring an NFT"
          />
        </div>
        <div className="bfm__utility-text">
          <ul className="bfm__utility-list">
            <li className="bfm__utility-list-item">Exclusive Merch for holders</li>
            <li className="bfm__utility-list-item">Brand/project partnerships and collaborations</li>
            <li className="bfm__utility-list-item">Meetups and regular community skate sessions</li>
            <li className="bfm__utility-list-item">Lessons for new riders</li>
            <li className="bfm__utility-list-item">Challenges for prizes ( participation = skill )</li>
            <li className="bfm__utility-list-item">And lots more to come!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Utility;

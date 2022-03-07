import React from "react";
import "./team.css";
import Member from './Member/Member';

const Team = () => {
  return <div className="bfm__team-container" id="team">
    <h1 className="bfm__team-title">Our Team</h1>

    <div className="bfm__team-grid">
      <Member imageUrl="/media/bfb-rectangle.jpg" memberName="IAmRectangle.eth" memberDescription="Founder/Artist/Amazing human" twitterHandle="https://twitter.com/LortWizard"/>
      <Member imageUrl="/media/bfb-cody.jpg" memberName="CodyCodes" memberDescription="Dev" twitterHandle="https://twitter.com/codingreeves"/>
      
    </div>
    </div>;
};

export default Team;

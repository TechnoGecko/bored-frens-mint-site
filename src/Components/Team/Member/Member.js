import React from 'react'
import './member.css';
import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";

const Member = (props) => {
  return (
    <div className="bfm__member-container">
        <div className="bfm__member-img-container">
            <img className="bfm__member-img" src={props.imageUrl} alt="an NFT representing the team member"></img>
            <h3 className="bfm__member-name">{props.memberName}</h3>
            <h4 className="bfm__member-description">{props.memberDescription}</h4>
            <a href={props.twitterHandle}><FaTwitter color="#eeeeee" size={28}/></a>
            </div>
        </div>
  )
}

export default Member
import React from 'react'
import "./DataBlocks.scss";
import DataBlock from "./DataBlock";
import kenanPhoto from "../images/kenanRustamov.jpg";
import partifyGif from "../images/partify.png"
import DashCardImg from "../images/DashCardImg.png";
import BentleyPhoto from "../images/BentleyPhoto.jpeg";
import PortfolioPic from "../images/PortfolioPic.png"
import krLogo from "../images/krLogo.svg"

const DataBlocks = (props: any) => {
    let content = 
    <div className={"data"}>
        <DataBlock propInput ={{title: "Profile",infoTitle:"Kenan Rustamov", infoSubtitle:"Full Stack Developer", infoText:"I currently study Computer Science and am on the Pre-med track at the University of Pittsburgh. I am currently the fundraising chair for Oakland Outreach, a volunteering club at Pitt, and about to create a web development club.", infoImg: kenanPhoto}}></DataBlock>
        <DataBlock propInput ={{title: "Work Experience",infoTitle:"Bentley Systems", infoSubtitle:"Full-Stack Software Engineering Intern", infoText: "Created a modal that allowed additions and deletions of users from sessions from the screen and server, a profile bubble for users that is used across the app.", infoImg: BentleyPhoto, alt: "Yes, that is my favorite shirt"}}></DataBlock>
        <DataBlock propInput ={{title: "Projects",infoTitle:"Partify", infoSubtitle:"React/TypeScript/Scss", infoText:"Partify is an app that allows you to use you and your friends' music tastes to create a custom tailored playlist for any occasion.", infoImg: partifyGif}}></DataBlock>
        <DataBlock propInput ={{title: "",infoTitle:"DashCard", infoSubtitle:"Java/XML/Android Studios/Room Persistence", infoText:"Quick flashcard app that allows you to create, delete, and edit flash cards.", infoImg: DashCardImg}}></DataBlock>
        <DataBlock propInput ={{title: "",infoTitle:"Portfolio", infoSubtitle:"TypeScript/Scss/React/HTML", infoText:"This portfolio was created from scratch using the skills I learned as a web developer from my summer internship.  The designs, logo, and code was all done by me.", infoImg: krLogo}}></DataBlock>
        <DataBlock propInput ={{title: "Skills",infoTitle: null, infoSubtitle:"", infoText:"", infoImg: null}}></DataBlock>
        <DataBlock propInput ={{title: "",infoTitle:"Languages:", infoSubtitle:"Java, Javascript, Python, and C, HTML/CSS", infoText:"", infoImg: ""}}></DataBlock>
        <DataBlock propInput ={{title: "",infoTitle:"Other Technologies:", infoSubtitle:"React, Redux, MongoDB, Node.js, Android Studios", infoText:"", infoImg: ""}}></DataBlock>
        <DataBlock propInput ={{title: "Contact",infoTitle: "Click the button to contact me!", infoSubtitle:"", infoText:"", infoImg: null, other: <a href="mailto:ker108@pitt.edu" className="emailButton">Email</a>}}></DataBlock>
  </div>;
    return content;
};

export default DataBlocks;
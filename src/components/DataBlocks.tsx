import React from 'react'
import "./DataBlocks.scss";
import DataBlock from "./DataBlock";
import kenanPhoto from "../images/kenanRustamov.jpg";
import partifyGif from "../images/partify.png"
import DashCardImg from "../images/DashCardImg.png";
import BentleyPhoto from "../images/BentleyPhoto.jpeg";
import krLogo from "../images/krLogo.svg";
import emailLogo from "../images/emailLogo.svg";


const DataBlocks = (props: any) => {
    let content = 
    <div className={"data"}>
        <DataBlock propInput ={{title: "Profile",infoTitle:"Kenan Rustamov", infoSubtitle:"Full Stack Developer", infoText:"I currently study Computer Science and am on the Pre-med track at the University of Pittsburgh. I am currently the fundraising chair for Oakland Outreach, a volunteering club at Pitt, and am in the process of creating a web development club.", infoImg: kenanPhoto}}></DataBlock>
        <DataBlock propInput ={{title: "Work Experience",infoTitle:"Bentley Systems", infoSubtitle:"Full-Stack Software Engineering Intern", infoText: "Created a modal that allowed additions and deletions of users in sessions from the screen and server, a profile bubble for users that is used across the app.", infoImg: BentleyPhoto, alt: "Yes, that is my favorite shirt"}}></DataBlock>
        <DataBlock propInput ={{title: "Projects",infoTitle:"Partify", infoSubtitle:"React/TypeScript/Scss", infoText:"Partify is an app that allows you to create a custom tailored playlist for any occasion based on the user and their friends' music tastes.", infoImg: partifyGif}}></DataBlock>
        <DataBlock propInput ={{title: "",infoTitle:"DashCard", infoSubtitle:"Java/XML/Android Studios/Room Persistence", infoText:"Quick flashcard app that allows you to create, delete, and edit flashcards.", infoImg: DashCardImg}}></DataBlock>
        <DataBlock propInput ={{title: "",infoTitle:"Portfolio", infoSubtitle:"TypeScript/Scss/React/HTML", infoText:"This portfolio was created from scratch using the skills I learned as a web developer at my summer internship.  The designs, logo, and code were all done by me.", infoImg: krLogo}}></DataBlock>
        <DataBlock propInput ={{title: "Skills",ignoreInfo: "", infoTitle: null, infoSubtitle:"", infoText:"", infoImg: null}}></DataBlock>
        <DataBlock propInput ={{title: "",infoTitle:"Languages:", infoSubtitle:"Java, Javascript, Python, and C, HTML/CSS", infoText:"", infoImg: ""}}></DataBlock>
        <DataBlock propInput ={{title: "",infoTitle:"Other Technologies:", infoSubtitle:"React, Redux, MongoDB, Node.js, Android Studios", infoText:"", infoImg: ""}}></DataBlock>
        <DataBlock propInput ={{title: "Contact",infoTitle: null, infoSubtitle:"", infoText:"", infoImg: null, other: <a href="mailto:ker108@pitt.edu" className="emailButton"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg></a>}}></DataBlock>
  </div>;
    return content;
};

export default DataBlocks;
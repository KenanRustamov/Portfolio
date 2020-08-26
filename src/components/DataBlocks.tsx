import React from 'react'
import "./DataBlocks.scss";
import DataBlock from "./DataBlock";
import kenanPhoto from "../images/kenanRustamov.jpg";
import partifyImg from "../images/partify.png"
import SnackCheck from "../images/snackcheck.png";
import BentleyPhoto from "../images/BentleyPhoto.jpeg";
import bnymellon from "../images/bnymellon.png";
import krLogo from "../images/krLogo.svg";
import emailLogo from "../images/emailLogo.svg";


const DataBlocks = (props: any) => {
    let content = 
    <div className={"data"}>
        <DataBlock id ={"1"} link ={"https://github.com/KenanRustamov"} propInput ={{title: "Profile",infoTitle:"Kenan Rustamov", infoSubtitle:"Full Stack Developer", infoText:"I currently major in Computer Science with a minor in Chemistry at the University of Pittsburgh. I am currently the fundraising chair for Oakland Outreach, a volunteering club at Pitt, and am in the process of creating a web development club.", infoImg: kenanPhoto, alt: "Professionalish looking photo at the beach"}}></DataBlock>
        <DataBlock id ={"2"} link ={"https://bnymellon.com"} propInput ={{title: "Work Experience",infoTitle:"BNY Mellon", infoSubtitle:"Full-Stack Software Engineering Intern", infoText: "Worked on a project to allow internal users to communicate with Fircosoft to verify large transactions.  Specifically worked on creating CRUD operations for the project and project setup.", infoImg: bnymellon, alt: "image of bnymellon"}}></DataBlock>
        <DataBlock link= {"https://www.bentley.com/en"} propInput ={{title: "",infoTitle:"Bentley Systems", infoSubtitle:"Full-Stack Software Engineering Intern", infoText: "Created the ability for end users of the application to add and remove users from projects, persisted in the backend.", infoImg: BentleyPhoto, alt: "Yes, that is my favorite shirt"}}></DataBlock>
        <DataBlock id ={"3"} link ={"http://www.partify-us.com/"} propInput ={{title: "Projects",infoTitle:"Partify", infoSubtitle:"React TypeScript Scss", infoText:"Partify is an app that allows you to create a custom tailored playlist for any occasion based on the user and their friends' music tastes.", infoImg: partifyImg, alt: "Image of my partify application"}}></DataBlock>
        <DataBlock link ={"https://github.com/KenanRustamov/SnackCheck"} propInput ={{title: "",infoTitle:"SnackCheck", infoSubtitle:"JavaScript React-Native Expo", infoText:"SnackCheck allows users to find recipes based on dietary preferences such as veganism or allergies such as shellfish.", infoImg: SnackCheck, alt: "Image of my snackcheck application"}}></DataBlock>
        <DataBlock link ={"https://kenanr.com/"} propInput ={{title: "",infoTitle:"Portfolio", infoSubtitle:"TypeScript Scss React HTML", infoText:"This portfolio was created from scratch using the skills I learned as a web developer at my summer internship.  The designs, logo, and code were all done by me.", infoImg: krLogo, alt: "Logo created in photoshop"}}></DataBlock>
        <DataBlock id ={"4"} propInput ={{title: "Skills",ignoreInfo: "", infoTitle: null, infoSubtitle:"", infoText:"", infoImg: null}}></DataBlock>
        <DataBlock textOnly = {true} propInput ={{title: "",infoTitle:"Languages:", infoSubtitle:"Java, Javascript, Python, and C, HTML/CSS", infoText:"", infoImg: ""}}></DataBlock>
        <DataBlock textOnly = {true} propInput ={{title: "",infoTitle:"Other Technologies:", infoSubtitle:"React, Redux, MongoDB, Node.js,Spring, MySQL, JPA, Android Studios", infoText:"", infoImg: ""}}></DataBlock>
        <DataBlock icon= {true} id ={"5"} propInput ={{title: "Contact",infoTitle: null, infoSubtitle:"", infoText:"", infoImg: null, other: <a href="mailto:ker108@pitt.edu" className="emailButton"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg></a>}}></DataBlock>
  </div>;
    return content;
};

export default DataBlocks;
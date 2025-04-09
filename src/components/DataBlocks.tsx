import React from 'react'
import "./DataBlocks.scss";
import DataBlock from "./DataBlock";
import kenanPhoto from "../images/kenanRustamov.jpg";
import partifyImg from "../images/partify.png"
import SnackCheck from "../images/snack_check.png";
import BentleyPhoto from "../images/Bentley.png";
import bnymellon from "../images/bnymellon.png";
import krLogo from "../images/krLogo.svg";


const DataBlocks = (props: any) => {
    let content = 
    <div className={"data"}>
        <DataBlock className="card" id ={"1"} github={"https://github.com/KenanRustamov"} link ={"https://www.linkedin.com/in/kenanrustamov/"} propInput ={{infoTitle:"Kenan Rustamov", infoSubtitle:"Full Stack Developer", infoText:"I currently major in Computer Science with a minor in Chemistry at the University of Pittsburgh. I am a co-founder of a club for minorities in computing and fundraising chair of Oakland Outreach, a volunteer club. Currently, I also TA for Discrete Structures.", infoImg: kenanPhoto, alt: "Professionalish looking photo at the beach"}}></DataBlock>
        <div className="dataBlock card">
            <DataBlock className="interior" id ={"2"} link ={"https://bnymellon.com"} propInput ={{title: "Work Experience",infoTitle:"BNY Mellon", infoSubtitle:"Full-Stack Software Engineering Intern", infoText: "Worked on a project to allow internal users to communicate with Fircosoft to verify large transactions utilizing test-driven development in an agile environment.  Specifically worked on creating CRUD operations for the project and database/project setup.", infoImg: bnymellon, alt: "image of bnymellon"}}></DataBlock>
            <DataBlock className="interior" link= {"https://www.bentley.com/en"} propInput ={{title: "",infoTitle:"Bentley Systems", infoSubtitle:"Full-Stack Software Engineering Intern", infoText: "Created the ability for end users of the application to add and remove users from projects, persisted in the backend.", infoImg: BentleyPhoto, alt: "Yes, that is my favorite shirt"}}></DataBlock>
        </div>
        <div className="dataBlock card">
            <DataBlock className="interior" id ={"3"} github={"https://github.com/KenanRustamov/Partify"} link ={"http://www.partify-us.com/"} propInput ={{title: "Projects",infoTitle:"Partify", infoSubtitle:"React TypeScript Scss", infoText:"Partify is an app that allows you to create a custom tailored playlist for any occasion based on the user and their friends' music tastes.", infoImg: partifyImg, alt: "Image of my partify application"}}></DataBlock>
            <DataBlock className="interior" link ={"https://github.com/KenanRustamov/SnackCheck"} propInput ={{title: "",infoTitle:"SnackCheck", infoSubtitle:"JavaScript React-Native Expo", infoText:"SnackCheck allows users to find recipes based on dietary preferences such as veganism or allergies such as shellfish.", infoImg: SnackCheck, alt: "Image of my snackcheck application"}}></DataBlock>
        </div>
  </div>;
    return content;
};

export default DataBlocks;
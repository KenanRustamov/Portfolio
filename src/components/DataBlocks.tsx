import React from 'react'
import { motion } from 'framer-motion'
import "./DataBlocks.scss";
import DataBlock from "./DataBlock";
import IntroDataBlock from "./IntroDataBlock";
import kenanPhoto from "../images/kenanRustamov.jpg";
import partifyImg from "../images/partify.png"
import SnackCheck from "../images/snack_check.png";
import BentleyPhoto from "../images/Bentley.png";
import bnymellon from "../images/bnymellon.png";
import jpmc from "../images/jpmc.jpeg";
import krLogo from "../images/krLogo.svg";


const DataBlocks = (props: any) => {
    // Define variants for the container groups
    const groupVariants = {
        hidden: { opacity: 0 }, // Simple fade-in for the group
        visible: { 
            opacity: 1, 
            transition: { 
                duration: 0.5, 
                delay: 0.1, // Add a slight delay 
                when: "beforeChildren", // Ensure parent fades in before children (if children had animations)
                staggerChildren: 0.2 // Stagger children if they were animated
            }
        }
    };

    // Define longer descriptions
    const bnyLongText = "During my internship at BNY Mellon, I contributed to a critical internal tool designed for transaction verification via the Fircosoft platform. My role involved full-stack development within an Agile framework, emphasizing Test-Driven Development (TDD). Key contributions included implementing comprehensive CRUD (Create, Read, Update, Delete) operations for core data models, setting up the initial database schema using Liquibase for version control, and configuring the Java Spring Boot project structure. This project aimed to streamline compliance checks and improve the efficiency of verifying large-scale financial transactions.";
    const bentleyLongText = "At Bentley Systems, I worked on enhancing project user management capabilities within a large-scale web application. My main task was to develop the front-end (React) and back-end (C# .NET) components necessary to allow administrators and project managers to add or remove team members from specific projects directly through the UI. This involved designing API endpoints, updating database schemas to reflect user-project relationships, and ensuring data persistence and integrity across the system. The feature improved project collaboration and access control for end-users.";
    const partifyLongText = "Partify is a web application built with React, TypeScript, and SCSS, leveraging the Spotify API to generate collaborative playlists. Users can log in with their Spotify accounts, create a 'Partify' session, and invite friends. The application analyzes the musical preferences of all participants by fetching their top tracks and artists from Spotify. It then employs an algorithm to identify common genres and musical features, generating a unique playlist tailored to the group's collective taste, perfect for parties or shared listening experiences. The project involved complex API interactions, state management, and responsive UI design.";
    const snackCheckLongText = "SnackCheck is a mobile application developed using React Native and Expo, targeting users with specific dietary needs. It allows users to search for recipes while filtering based on various dietary restrictions (e.g., vegan, gluten-free) and common allergies (e.g., nuts, shellfish, dairy). The app utilizes external recipe APIs to fetch and display relevant recipes, providing detailed ingredient lists and cooking instructions. Key challenges included managing API integrations, implementing robust filtering logic, and creating an intuitive user interface suitable for mobile platforms.";

    let content = 
    <div className={"data"}>
        <IntroDataBlock 
            className="card"
            id ={"1"} 
            github={"https://github.com/KenanRustamov"} 
            link ={"https://www.linkedin.com/in/kenanrustamov/"} 
            instagram={"https://www.instagram.com/kenanrustamov1/"}
            resume={"/ComputerScienceResume.pdf"}
            propInput ={{infoTitle:"Kenan Rustamov", infoSubtitle:"Ex-Software Engineer and Current Graduate Student", infoText:"I currently study at Johns Hopkins University for a Masters in Computer Science, and conduct AI research at the Johns Hopkins Center for Language and Speech Processing under Professor Jason Eisner. I previously worked as a Software Engineer for 3 years, most recently at JP Morgan Chase on scalable cloud APIs.", infoImg: kenanPhoto, alt: "Professionalish looking photo at the beach"}}
        />
        <motion.div 
            id="work-experience-section"
            className="dataBlock card standard-block-group"
            variants={groupVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <DataBlock 
                className="interior" 
                id={"2"} 
                link={"https://bnymellon.com"} 
                propInput={{
                    title: "Work Experience",
                    infoTitle:"JP Morgan Chase",
                    infoSubtitle:"Software Engineer II",
                    infoTextShort: "Worked on a project to allow internal users to communicate with Fircosoft to verify large transactions utilizing test-driven development in an agile environment. Specifically worked on creating CRUD operations for the project and database/project setup.",
                    infoTextLong: bnyLongText,
                    infoImg: jpmc,
                    alt: "image of jpmc"
                }}
            />
                        <DataBlock 
                className="interior" 
                id={"2"} 
                link={"https://bnymellon.com"} 
                propInput={{
                    infoTitle:"BNY Mellon",
                    infoSubtitle:"Full-Stack Software Engineering Intern",
                    infoTextShort: "Worked on a project to allow internal users to communicate with Fircosoft to verify large transactions utilizing test-driven development in an agile environment. Specifically worked on creating CRUD operations for the project and database/project setup.",
                    infoTextLong: bnyLongText,
                    infoImg: bnymellon,
                    alt: "image of bnymellon"
                }}
            />
            <DataBlock 
                className="interior" 
                link={"https://www.bentley.com/en"} 
                propInput={{
                    infoTitle:"Bentley Systems",
                    infoSubtitle:"Full-Stack Software Engineering Intern",
                    infoTextShort: "Created the ability for end users of the application to add and remove users from projects, persisted in the backend.",
                    infoTextLong: bentleyLongText,
                    infoImg: BentleyPhoto,
                    alt: "Yes, that is my favorite shirt"
                }}
            />
        </motion.div>
        <motion.div 
            className="dataBlock card standard-block-group"
            variants={groupVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <DataBlock 
                className="interior" 
                id ={"3"} 
                github={"https://github.com/KenanRustamov/Partify"} 
                link ={"http://www.partify-us.com/"} 
                propInput={{
                    title: "Projects",
                    infoTitle:"Partify",
                    infoSubtitle:"React TypeScript Scss",
                    infoTextShort:"Partify is an app that allows you to create a custom tailored playlist for any occasion based on the user and their friends' music tastes.",
                    infoTextLong: partifyLongText,
                    infoImg: partifyImg,
                    alt: "Image of my partify application"
                }}
            />
            <DataBlock 
                className="interior" 
                link ={"https://github.com/KenanRustamov/SnackCheck"} 
                propInput ={{
                    infoTitle:"SnackCheck",
                    infoSubtitle:"JavaScript React-Native Expo",
                    infoTextShort:"SnackCheck allows users to find recipes based on dietary preferences such as veganism or allergies such as shellfish.",
                    infoTextLong: snackCheckLongText,
                    infoImg: SnackCheck,
                    alt: "Image of my snackcheck application"
                }}
            />
        </motion.div>
  </div>;
    return content;
};

export default DataBlocks;
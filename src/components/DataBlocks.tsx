import React from "react";
import "./DataBlocks.scss";
import IntroDataBlock from "./IntroDataBlock";
import Timeline from "./Timeline";
import ProjectShowcase from "./ProjectShowcase";

import kenanPhoto from "../images/kenanRustamov.jpg";
import partifyImg from "../images/partify.png"
import SnackCheck from "../images/snack_check.png";


const DataBlocks = (props: any) => {



    // Work experience data
    const workExperiences = [
        {
            company: "JP Morgan Chase",
            position: "Software Engineer II",
            description: "Developed scalable cloud APIs and worked on internal tools to enhance transaction processing systems. Focused on building robust backend services using Java Spring Boot and implementing comprehensive testing strategies in an Agile environment.",
            url: "https://www.jpmorganchase.com",
            dates: "2022 - 2024",
            skills: ["Java", "Spring Boot", "AWS", "Microservices"]
        },
        {
            company: "BNY Mellon",
            position: "Full-Stack Software Engineering Intern",
            description: "Contributed to a critical internal tool designed for transaction verification via the Fircosoft platform. Implemented comprehensive CRUD operations for core data models, set up initial database schema using Liquibase for version control, and configured Java Spring Boot project structure within an Agile framework emphasizing Test-Driven Development.",
            url: "https://www.bnymellon.com",
            dates: "Summer 2021",
            skills: ["Java", "Spring Boot", "PostgreSQL", "Liquibase"]
        },
        {
            company: "Bentley Systems",
            position: "Full-Stack Software Engineering Intern",
            description: "Enhanced project user management capabilities within a large-scale web application. Developed front-end (React) and back-end (C# .NET) components to allow administrators and project managers to add or remove team members from projects. Designed API endpoints and updated database schemas to ensure data persistence and integrity.",
            url: "https://www.bentley.com",
            dates: "Summer 2020",
            skills: ["React", "C#", ".NET", "SQL Server"]
        }
    ];

    // Project data
    const projects = [
        {
            title: "Partify",
            subtitle: "React TypeScript SCSS",
            description: "Partify is a web application built with React, TypeScript, and SCSS, leveraging the Spotify API to generate collaborative playlists. Users can log in with their Spotify accounts, create a 'Partify' session, and invite friends. The application analyzes the musical preferences of all participants by fetching their top tracks and artists from Spotify. It then employs an algorithm to identify common genres and musical features, generating a unique playlist tailored to the group's collective taste, perfect for parties or shared listening experiences.",
            url: "http://www.partify-us.com/",
            githubUrl: "https://github.com/KenanRustamov/Partify",
            skills: ["React", "TypeScript", "SCSS", "Spotify API"],
            image: partifyImg,
            alt: "Image of my partify application"
        },
        {
            title: "SnackCheck",
            subtitle: "JavaScript React Native Expo",
            description: "SnackCheck is a mobile application developed using React Native and Expo, targeting users with specific dietary needs. It allows users to search for recipes while filtering based on various dietary restrictions (e.g., vegan, gluten-free) and common allergies (e.g., nuts, shellfish, dairy). The app utilizes external recipe APIs to fetch and display relevant recipes, providing detailed ingredient lists and cooking instructions.",
            url: "https://github.com/KenanRustamov/SnackCheck",
            githubUrl: "https://github.com/KenanRustamov/SnackCheck",
            skills: ["React Native", "JavaScript", "Expo", "REST APIs"],
            image: SnackCheck,
            alt: "Image of my snackcheck application"
        }
    ];

    let content = 
    <div className={"data"}>
        <IntroDataBlock 
            title="Kenan Rustamov"
            introText="Hello, my name is"
            subtitle="Ex-Software Engineer and Current Graduate Student"
            description="I currently study at Johns Hopkins University for a Masters in Computer Science, and conduct AI research at the Johns Hopkins Center for Language and Speech Processing under Professor Jason Eisner. I previously worked as a Software Engineer for 3 years, most recently at JP Morgan Chase on scalable cloud APIs."
            profileImage={kenanPhoto}
            icons={[]}
        />
        <div id="work-experience-section">
            <Timeline 
                title="Work Experience"
                experiences={workExperiences}
            />
        </div>
        <div id="projects-section">
            <ProjectShowcase 
                title="Projects"
                projects={projects}
            />
        </div>
  </div>;
    return content;
};

export default DataBlocks;
import React from "react";
import IntroDataBlock from "./IntroDataBlock";
import Timeline from "./Timeline";
import ProjectShowcase from "./ProjectShowcase";

// Use public folder for responsive image loading
const kenanPhoto = "/kenanRustamov.webp";
const partifyImg = "/partify.webp";
const SnackCheck = "/snack_check.webp";


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
            dates: "2021 - 2022",
            skills: ["Java", "Spring Boot", "React", "SQL", "Liquibase"]
        },
        {
            company: "Bentley Systems",
            position: "Software Engineering Intern",
            description: "Developed efficient data processing pipelines for real-time infrastructure monitoring systems. Worked with large-scale data analytics and visualization tools to help engineering teams make data-driven decisions about critical infrastructure projects.",
            url: "https://www.bentley.com",
            dates: "2020 - 2021",
            skills: ["Python", "Data Analytics", "SQL", "Visualization"]
        }
    ];

    // Project data
    const projects = [
        {
            title: "Partify",
            subtitle: "React TypeScript Node.js",
            description: "A collaborative music platform that allows multiple users to contribute to shared playlists in real-time. Features Spotify integration, real-time synchronization, and social voting mechanisms.",
            url: "https://github.com/KenanRustamov/Partify",
            githubUrl: "https://github.com/KenanRustamov/Partify",
            skills: ["React", "Node.js", "Socket.io", "Express"],
            image: partifyImg,
            alt: "Image of my partify application"
        },
        {
            title: "SnackCheck",
            subtitle: "React Native JavaScript Expo",
            description: "A mobile application that helps users track nutritional information and discover healthier food alternatives through barcode scanning and nutritional analysis.",
            url: "https://github.com/KenanRustamov/SnackCheck",
            githubUrl: "https://github.com/KenanRustamov/SnackCheck",
            skills: ["React Native", "JavaScript", "Expo", "REST APIs"],
            image: SnackCheck,
            alt: "Image of my snackcheck application"
        }
    ];

    return (
        <div className="
            relative flex flex-col items-center
            min-h-screen w-full
        ">
            <IntroDataBlock 
                title="Kenan Rustamov"
                introText="Hello, my name is"
                subtitle="Ex-Software Engineer and Current Graduate Student"
                description="I currently study at Johns Hopkins University for a Masters in Computer Science, and conduct AI research at the Johns Hopkins Center for Language and Speech Processing under Professor Jason Eisner. I previously worked as a Software Engineer for 3 years, most recently at JP Morgan Chase on scalable cloud APIs."
                profileImage={kenanPhoto}
            />
            <div id="work-experience-section" className="w-full">
                <Timeline 
                    title="Work Experience"
                    experiences={workExperiences}
                />
            </div>
            <div id="projects-section" className="w-full">
                <ProjectShowcase 
                    title="Projects"
                    projects={projects}
                />
            </div>
        </div>
    );
};

export default DataBlocks;
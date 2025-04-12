import React from 'react';
import { motion } from 'framer-motion';
import "./IntroDataBlock.scss"; // Import specific styles
import { ReactComponent as PdfIcon } from "../images/pdf.svg"; // Import SVG as component
import { ReactComponent as GitHubIcon } from "../images/gitHubLogo.svg";
import { ReactComponent as LinkedInIcon } from "../images/linkedInLogo.svg";
import { ReactComponent as InstagramIcon } from "../images/instagramLogo.svg";

// Define Props interface specifically for IntroDataBlock
interface IntroDataBlockProps {
    className?: string;
    id?: string;
    github?: string;
    link?: string;
    instagram?: string;
    resume?: string;
    propInput: {
        title?: string; // Title is optional here, often not used in intro
        infoTitle: string; // Required for Intro
        infoSubtitle: string; // Required for Intro
        infoText: string; // Required for Intro
        infoImg: string; // Required for Intro
        alt?: string;
        ignoreInfo?: boolean;
        other?: React.ReactNode;
    };
}

const IntroDataBlock = (props: IntroDataBlockProps) => {

    // Framer Motion animation variants (can be kept or moved to parent)
    const blockVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // Helper function to render social/link icons
    const renderIcons = () => (
        <div className="dataBlock-icons">
            {props.github && (
                <a href={props.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <GitHubIcon className="dynamicLogo" />
                    <span className="icon-label">GitHub</span>
                </a>
            )}
             {props.link && (
                 <a href={props.link} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <LinkedInIcon className="dynamicLogo" />
                    <span className="icon-label">LinkedIn</span>
                 </a>
             )}
            {props.instagram && (
                <a href={props.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                    <InstagramIcon className="dynamicLogo" />
                    <span className="icon-label">Instagram</span>
                </a>
            )}
            {props.resume && (
                <a href={props.resume} target="_blank" rel="noopener noreferrer" aria-label="Resume">
                     <PdfIcon className="dynamicLogo" />
                    <span className="icon-label">Resume</span>
                </a>
            )}
        </div>
    );

    // Helper function to render the image
    const renderImage = () => (
        props.propInput.infoImg ?
            (props.link ? // If a link is provided for the image (e.g., profile pic links to LinkedIn)
                <a href={props.link} target="_blank" rel="noopener noreferrer" aria-label={props.propInput.alt || "Link related to image"}>
                    <img className="image clickable" src={props.propInput.infoImg} alt={props.propInput.alt}/>
                </a>
                :
                <img className="image" src={props.propInput.infoImg} alt={props.propInput.alt}/>
            )
        : null
    );

    // The main structure of the IntroDataBlock
    const content = (
        <motion.div
            className={`introDataBlock ${props.className || ""}`}
            id={props.id}
            variants={blockVariants}
            initial="hidden"
            animate="visible" // Always animate intro block on load
            viewport={{ once: true, amount: 0.1 }} // Keep viewport settings if desired
        >
            {/* Optional title rendering (usually not needed for intro) */}
            {props.propInput.title &&
                 <div className="title intro-title">
                     <div className="text">{props.propInput.title}</div>
                 </div>}

            {!props.propInput.ignoreInfo && (
                <div className="info">
                    <div className="infoTextContainer">
                        {/* Specific intro text */} 
                        <div className="introText">Hello, my name is</div>
                        {/* Main titles and text */} 
                        <div className="infoTitle">{props.propInput.infoTitle}
                            <div className ="subtitle">{props.propInput.infoSubtitle}</div>
                        </div>
                        <div className="infoText">{props.propInput.infoText}</div>
                        {/* Icons */}
                        {renderIcons()}
                    </div>
                    {/* Image */}
                    {renderImage()}
                    {/* Any other content passed via props.propInput.other */} 
                    {props.propInput.other}
                </div>
            )}
        </motion.div>
    );

    return content;
};

export default IntroDataBlock;

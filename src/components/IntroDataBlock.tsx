import React, { useState, useEffect, useRef } from 'react';
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

    // State for intro text animation
    const introTextTarget = "Hello, my name is";
    const [introTypedText, setIntroTypedText] = useState("");
    const [showIntroCursor, setShowIntroCursor] = useState(true); // Start visible
    const introTypingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const introCursorTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Effect for intro text typewriter
    useEffect(() => {
        let currentText = "";
        let typingDelay = 80; // Slower typing for intro
        let cursorBlinkDuration = 3000; // 3 seconds

        const typeIntro = () => {
            if (currentText.length < introTextTarget.length) {
                currentText = introTextTarget.substring(0, currentText.length + 1);
                setIntroTypedText(currentText);
                introTypingTimeoutRef.current = setTimeout(typeIntro, typingDelay);
            } else {
                // Finished typing intro
                introTypingTimeoutRef.current = null;
                // Keep cursor blinking for a bit, then hide
                introCursorTimeoutRef.current = setTimeout(() => {
                    setShowIntroCursor(false);
                    introCursorTimeoutRef.current = null;
                }, cursorBlinkDuration);
            }
        };

        // Start typing after a short delay
        introTypingTimeoutRef.current = setTimeout(typeIntro, 500); // Delay before intro typing starts

        // Cleanup
        return () => {
            if (introTypingTimeoutRef.current) clearTimeout(introTypingTimeoutRef.current);
            if (introCursorTimeoutRef.current) clearTimeout(introCursorTimeoutRef.current);
        };
    }, []); // Empty dependency array means run only once on mount

    // Framer Motion animation variants - removed opacity fade to prevent image darkening
    const blockVariants = {
        hidden: { y: 30 },
        visible: {
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
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

    // Scroll handler function
    const handleScrollDown = () => {
        const nextSection = document.getElementById('work-experience-section');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // The main structure of the IntroDataBlock
    const content = (
        <motion.div
            className={`introDataBlock ${props.className || ""}`}
            id={props.id}
            variants={blockVariants}
            initial="hidden"
            animate="visible" // Always animate intro block on load
            viewport={{ once: true, amount: 0.1 }} // Keep viewport settings if desired
            style={{ position: 'relative' }} // Ensure parent is positioned for absolute child
        >
            {/* Optional title rendering (usually not needed for intro) */}
            {props.propInput.title &&
                 <div className="title intro-title">
                     <div className="text">{props.propInput.title}</div>
                 </div>}

            {!props.propInput.ignoreInfo && (
                <div className="info">
                    <div className="infoTextContainer">
                        {/* Specific intro text with typewriter */}
                        <div className="introText">
                             {introTypedText}
                             {showIntroCursor && <span className="typing-cursor">|</span>} 
                        </div>
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

            {/* Scroll Down Icon Container */}
            <div className="scroll-down-icon-container" onClick={handleScrollDown}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="scroll-down-icon">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
                </svg>
            </div>
        </motion.div>
    );

    return content;
};

export default IntroDataBlock;

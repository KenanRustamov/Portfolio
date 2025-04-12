import React, { RefObject } from 'react';
import { motion } from 'framer-motion';
import "./DataBlock.scss";
import { ReactComponent as PdfIcon } from "../images/pdf.svg"; // Import SVG as component
import { ReactComponent as GitHubIcon } from "../images/gitHubLogo.svg";
import { ReactComponent as LinkedInIcon } from "../images/linkedInLogo.svg";
import { ReactComponent as InstagramIcon } from "../images/instagramLogo.svg";

// Define layout types
// type LayoutType = 'intro' | 'standard'; // Removed layout types

// Define Props interface for better type safety
interface DataBlockProps {
    className?: string;
    id?: string;
    github?: string;
    link?: string;
    instagram?: string;
    resume?: string;
    propInput: {
        title?: string;
        infoTitle?: string;
        infoSubtitle?: string;
        infoText?: string;
        infoImg?: string;
        alt?: string;
        ignoreInfo?: boolean;
        other?: React.ReactNode;
    };
    icon?: boolean; // Assuming this is for hiding the image if an icon is present?
    textOnly?: boolean; // Assuming this affects image styling?
    // layoutType?: LayoutType; // Removed layoutType prop
}

const DataBlock = (props: DataBlockProps) => {
    // const layout = props.layoutType || 'standard'; // Removed layout logic

    // Framer Motion animation variants
    const blockVariants = {
        hidden: { opacity: 0, y: 20 }, // Start hidden and slightly down
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } // Define transition here
        }
    };

    // Animate all blocks by default now
    // const isIntro = layout === 'intro'; // Removed isIntro flag

    const renderStandardLayout = () => (
        <>
            {props.propInput.title && (
                <div className="title-container standard-title">
                    <div className="title-text">{props.propInput.title}</div>
                </div>
            )}
            <div className={`info ${!props.propInput.title ? 'no-title-sibling' : ''}`}>
                <div className="infoTextContainer">
                    {/* Title and Subtitle are now handled differently in standard layout if needed */}
                    {props.propInput.infoTitle && (
                        <div className="infoTitle">{props.propInput.infoTitle}
                            {props.propInput.infoSubtitle && <div className="subtitle">{props.propInput.infoSubtitle}</div>}
                        </div>
                    )}
                    <div className="infoText">{props.propInput.infoText}</div>
                    {renderIcons()}
                </div>
                {renderImage()}
            </div>
        </>
    );

    const renderIcons = () => (
        <div className="dataBlock-icons">
            {props.github && (
                <a href={props.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <GitHubIcon className="dynamicLogo" />
                    <span className="icon-label">GitHub</span>
                </a>
            )}
            {props.link && !props.propInput.infoImg && ( // Only show LinkedIn text if it's not the main link for an image block
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

     const renderImage = () => (
         !props.icon && props.propInput.infoImg ?
            (props.link ?
                <a href={props.link} target={"_blank"} rel="noopener noreferrer" aria-label={props.propInput.alt || "Link related to image"}>
                    <img className="image clickable" src={props.propInput.infoImg} alt={props.propInput.alt}/>
                </a>
                :
                <img className={props.textOnly ? "line" : "image"} src={props.propInput.infoImg} alt={props.propInput.alt}/>
            )
         : null
     );

    const content =
    <motion.div
        // className={`dataBlock ${props.className || ""} layout-${layout}`} // Use standard class
        className={`dataBlock standard-layout ${props.className || ""}`} // Apply standard layout class directly
        id={props.id}
        variants={blockVariants}
        initial="hidden"
        // animate={isIntro ? "visible" : undefined} // Removed conditional animation
        // whileInView={!isIntro ? "visible" : undefined} // Always use whileInView
        whileInView="visible"
        // viewport={!isIntro ? { once: true, amount: 0.1 } : undefined} // Always use viewport
        viewport={{ once: true, amount: 0.1 }}
    >
         {!props.propInput.ignoreInfo ? (
             // layout === 'intro' ? renderIntroLayout() : renderStandardLayout() // Always render standard
             renderStandardLayout()
         ) : null}
    </motion.div>
    ;
    return content ;
}
export default DataBlock;
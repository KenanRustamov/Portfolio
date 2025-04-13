import React, { RefObject, useState, useEffect, useRef } from 'react';
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
        infoText?: string; // For blocks without expansion
        infoTextShort?: string; // Short version
        infoTextLong?: string; // Long version
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

    const { infoTextShort, infoTextLong, infoText } = props.propInput;
    const hasExpandableText = infoTextShort && infoTextLong;

    // State for managing expanded view and typing animation
    const [isExpanded, setIsExpanded] = useState(false);
    const [displayText, setDisplayText] = useState(infoTextShort || infoText || "");
    const [isTyping, setIsTyping] = useState(false);
    const [showCursor, setShowCursor] = useState(false);
    const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const cursorTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const initialLoadRef = useRef<boolean>(true);
    const hasExpandedChangedRef = useRef<boolean>(false); // Ref to track if user interacted

    // Function to clear all timeouts and reset animation state
    const clearTimeoutsAndResetState = () => {
        if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
        if (cursorTimeoutRef.current) clearTimeout(cursorTimeoutRef.current);
        typingTimeoutRef.current = null;
        cursorTimeoutRef.current = null;
        // Reset state as well, important for StrictMode cleanup
        setIsTyping(false); 
        setShowCursor(false);
    };

    // Effect for typewriter animation
    useEffect(() => {
        // Skip effect entirely on initial mount
        if (initialLoadRef.current) {
            initialLoadRef.current = false;
            return;
        }

        // If isExpanded hasn't actually changed from initial state (false),
        // and we are not currently expanded, don't run the animation.
        // This prevents the animation on the second Strict Mode mount 
        // unless the button was clicked or state is already expanded.
        if (!hasExpandedChangedRef.current && !isExpanded) {
             return;
        }

        // --- Animation Logic --- (Only runs if initialLoadRef is false AND hasExpandedChangedRef is true or isExpanded is true)
        if (!hasExpandableText || !infoTextShort || !infoTextLong) return;

        clearTimeoutsAndResetState();

        setIsTyping(true);
        setShowCursor(true);

        const targetText = isExpanded ? infoTextLong : infoTextShort;
        let currentText = "";
        let typingDelay = 15;
        let cursorBlinkDuration = 3000;

        setDisplayText("");

        const type = () => {
            if (!typingTimeoutRef.current && !cursorTimeoutRef.current) return; 

            if (currentText.length < targetText.length) {
                currentText = targetText.substring(0, currentText.length + 1);
                setDisplayText(currentText);
                typingTimeoutRef.current = setTimeout(type, typingDelay);
            } else {
                setIsTyping(false);
                typingTimeoutRef.current = null; 
                cursorTimeoutRef.current = setTimeout(() => {
                    setShowCursor(false);
                    cursorTimeoutRef.current = null;
                }, cursorBlinkDuration);
            }
        };

        typingTimeoutRef.current = setTimeout(type, 50);

        return clearTimeoutsAndResetState;

    }, [isExpanded]); // Dependency is correct

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

    // Handler for Learn More/Less toggle
    const handleToggleExpand = () => {
        if (!isTyping) {
            hasExpandedChangedRef.current = true; // Mark that interaction has occurred
            setIsExpanded(!isExpanded);
        }
    };

    // Handler for Complete button
    const handleCompleteTyping = () => {
        if (!infoTextShort || !infoTextLong) return;
        clearTimeoutsAndResetState();
        const targetText = isExpanded ? infoTextLong : infoTextShort;
        setDisplayText(targetText);
        // Setting hasExpandedChangedRef is not needed here, only tracks user *toggle* action
    };

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
                    {/* Display state-managed text */} 
                    <div className="infoText"> 
                         {displayText}
                         {showCursor && <span className="typing-cursor">|</span>} 
                    </div>
                    {renderIcons()}
                     {/* Add Learn More/Less button if applicable */} 
                     {hasExpandableText && (
                        <button
                            className="learn-more-button"
                            onClick={isTyping ? handleCompleteTyping : handleToggleExpand} // Conditional onClick
                            disabled={false} // Button is never truly disabled, action just changes
                        >
                             {/* Add arrow icon */}
                            {isTyping ? "Complete" : (isExpanded ? <>Learn Less <span className="button-arrow">▲</span></> : <>Learn More <span className="button-arrow">▼</span></>)}
                        </button>
                    )}
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
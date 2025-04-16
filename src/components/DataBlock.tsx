import React, { RefObject, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    const [isAnimatingCollapse, setIsAnimatingCollapse] = useState(false); // State for collapse text delay

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

    // Variants for image transitions
    const singleImageVariants = {
        initial: { opacity: 0 }, // Start hidden
        animate: { opacity: 1, transition: { duration: 0.3, delay: 0.1 } }, // Match total stacked duration, fade in with button
        exit: { opacity: 0, transition: { duration: 0.3 } } // Fade out quick
    };

    const expandedImageContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3, // Faster container fade-in
                when: "beforeChildren", // Ensure container is visible before children animate
                staggerChildren: 0.2 // Stagger the images
            }
        },
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };

    const expandedImageVariants = {
        hidden: { opacity: 0, y: 10 }, // Start slightly down
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } // Eased fade-in
    };

    // Combined container variants for the stack (handles stagger)
    const imageStackContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren", // Animate children after container is visible
                staggerChildren: 0.2 // Stagger the images
            }
        },
        exit: {
            opacity: 0,
            transition: {
                 when: "afterChildren", // Ensure children finish exiting first
                 staggerChildren: 0.1, // Stagger exit slightly
                 staggerDirection: -1 // Reverse stagger on exit
            }
        }
    };

    // Variants for individual images within the stack
    const stackedImageVariants = {
        hidden: { opacity: 0, y: 15 }, // Start slightly down
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }, // Eased fade-in
        exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" } } // Fade out upwards
    };

    // Variants for button fade
    const buttonVariants = {
        // Use 'initial' and 'animate' states for consistency
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.4, delay: 0.9 } }, // Significantly delay enter
        exit: { opacity: 0, transition: { duration: 0.3 } } // Slightly longer exit
    };

    // Animate all blocks by default now
    // const isIntro = layout === 'intro'; // Removed isIntro flag

    // Handler for Learn More/Less toggle
    const handleToggleExpand = () => {
        if (!isTyping) {
            if (isExpanded) { // If we are currently expanded (about to collapse)
                setIsAnimatingCollapse(true); // Signal that collapse animation is starting
            }
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

    // Effect to reset isAnimatingCollapse after collapse animation
    useEffect(() => {
        // Only run if state is collapsed AND we were animating the collapse
        if (!isExpanded && isAnimatingCollapse) {
            const timer = setTimeout(() => {
                setIsAnimatingCollapse(false);
            }, 300); // Duration slightly longer than button exit animation (0.25s)

            // Cleanup timeout on unmount or if dependencies change before timer fires
            return () => clearTimeout(timer);
        }
    }, [isExpanded, isAnimatingCollapse]); // Depend on both states

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
                    {/* Button back inside text container, wrapped for animation */} 
                    {hasExpandableText && (
                        <AnimatePresence mode="wait">
                            {/* Always render the wrapper if expandable, use key to animate changes */}
                            <motion.div
                                key={isExpanded ? 'expanded-button' : 'collapsed-button'}
                                variants={buttonVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="button-motion-wrapper"
                            >
                                {/* Button content depends on expanded state, typing state, AND collapse animation state */}
                                <button
                                    className="learn-more-button"
                                    onClick={isTyping ? handleCompleteTyping : handleToggleExpand}
                                    disabled={false}
                                >
                                    {(isExpanded || isAnimatingCollapse) // Show expanded text if expanded OR animating collapse
                                        ? (isTyping ? "Complete" : <>Learn Less <span className="button-arrow">▲</span></>)
                                        : <>Learn More <span className="button-arrow">▼</span></>}
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    )}
                </div>
                {/* Image is a direct sibling again */} 
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

     const renderImage = () => {
         if (props.icon || !props.propInput.infoImg) {
             return null; // Don't render if icon is present or no image provided
         }

         const { infoImg, alt } = props.propInput;
         const placeholderAlt = alt || "Placeholder image";

         return (
            // Add conditional class for styling purposes if needed
            <div className={`image-container ${isExpanded ? 'expanded-stack-active' : ''}`}>
                <AnimatePresence mode="wait">
                    {!isExpanded ? (
                        <motion.div
                            key="single-image" // Unique key for the single image state
                            initial="initial"
                            animate="animate" // Use animate state for fade-in
                            exit="exit"
                            variants={singleImageVariants}
                        >
                             {props.link ? (
                                 <a href={props.link} target={"_blank"} rel="noopener noreferrer" aria-label={alt || "Link related to image"}>
                                     <img className="image clickable single-image-element" src={infoImg} alt={alt}/>
                                 </a>
                             ) : (
                                 <img className="image single-image-element" src={infoImg} alt={alt}/>
                             )}
                         </motion.div>
                     ) : (
                         // Use a motion.div wrapper for the stack to apply staggerChildren
                         <motion.div
                             key="expanded-image-stack" // Unique key for the stacked images state
                             className="expanded-image-stack" // Class for the stack container
                             variants={imageStackContainerVariants}
                             initial="hidden"
                             animate="visible"
                             exit="exit"
                         >
                             {[1, 2, 3].map((index) => (
                                 <motion.img
                                     key={`stacked-img-${index}`} // Unique key for each stacked image
                                     className="image stacked-image-item" // Use common 'image' class + specific stack item class
                                     src={infoImg} // Use the same image as placeholder
                                     alt={`${placeholderAlt} ${index}`}
                                     variants={stackedImageVariants} // Apply individual item animation
                                     // initial, animate, exit are handled by container variants + stagger
                                 />
                             ))}
                         </motion.div>
                     )}
                 </AnimatePresence>
             </div>
         );
     };

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
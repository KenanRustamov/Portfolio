import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./DataBlock.scss";
import { ReactComponent as PdfIcon } from "../images/pdf.svg"; // Import SVG as component
import { ReactComponent as GitHubIcon } from "../images/gitHubLogo.svg";
import { ReactComponent as LinkedInIcon } from "../images/linkedInLogo.svg";
import { ReactComponent as InstagramIcon } from "../images/instagramLogo.svg";

import { useTypewriter } from "../hooks/useTypewriter";
import {
  BUTTON_FADE_IN_DELAY,
  BUTTON_FADE_IN_DURATION,
  BUTTON_FADE_OUT_DURATION,
  STACK_IMAGE_DURATION,
  STACK_IMAGE_STAGGER,
  SUMMARY_IMAGE_FADE_IN_DURATION,
  SUMMARY_IMAGE_FADE_IN_DELAY,
} from "../constants/animation";

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
        infoTextShort?: string;
        infoTextLong?: string;
        infoImg?: string;
        alt?: string;
        ignoreInfo?: boolean;
        other?: React.ReactNode;
    };
    icon?: boolean;
    textOnly?: boolean;
}

const blockVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const singleImageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: SUMMARY_IMAGE_FADE_IN_DURATION,
      delay: SUMMARY_IMAGE_FADE_IN_DELAY,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const imageStackContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: STACK_IMAGE_STAGGER,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const stackedImageVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: STACK_IMAGE_DURATION, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" } },
};

const buttonVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: BUTTON_FADE_IN_DURATION,
      delay: BUTTON_FADE_IN_DELAY,
    },
  },
  exit: { opacity: 0, transition: { duration: BUTTON_FADE_OUT_DURATION } },
};

const DataBlock = (props: DataBlockProps) => {
    const { infoTextShort, infoTextLong, infoText } = props.propInput;
    const hasExpandableText = Boolean(infoTextShort && infoTextLong);

    const [isExpanded, setIsExpanded] = useState(false);
    const [isAnimatingCollapse, setIsAnimatingCollapse] = useState(false);

    const defaultShort = (infoTextShort ?? infoText ?? "") as string;
    const defaultLong = (infoTextLong ?? defaultShort) as string;

    const { displayText, isTyping, showCursor, completeTyping } = useTypewriter({
        textShort: defaultShort,
        textLong: defaultLong,
        expanded: isExpanded,
    });

    useEffect(() => {
        if (!isExpanded && isAnimatingCollapse) {
            const timer = setTimeout(() => {
                setIsAnimatingCollapse(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isExpanded, isAnimatingCollapse]);

    const handleToggleExpand = () => {
        if (!isTyping) {
            if (isExpanded) {
                setIsAnimatingCollapse(true);
            }
            setIsExpanded(!isExpanded);
        }
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
                    {props.propInput.infoTitle && (
                        <div className="infoTitle">{props.propInput.infoTitle}
                            {props.propInput.infoSubtitle && <div className="subtitle">{props.propInput.infoSubtitle}</div>}
                        </div>
                    )}
                    <div className="infoText"> 
                         {displayText}
                         {showCursor && <span className="typing-cursor">|</span>} 
                    </div>
                    {renderIcons()}
                    {hasExpandableText && (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isExpanded ? 'expanded-button' : 'collapsed-button'}
                                variants={buttonVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="button-motion-wrapper"
                            >
                                <button
                                    className="learn-more-button"
                                    onClick={isTyping ? completeTyping : handleToggleExpand}
                                    disabled={false}
                                >
                                    {(isExpanded || isAnimatingCollapse)
                                        ? (isTyping ? "Complete" : <>Learn Less <span className="button-arrow">▲</span></>)
                                        : <>Learn More <span className="button-arrow">▼</span></>}
                                </button>
                            </motion.div>
                        </AnimatePresence>
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
            {props.link && !props.propInput.infoImg && (
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
             return null;
         }

         const { infoImg, alt } = props.propInput;
         const placeholderAlt = alt || "Placeholder image";

         return (
            <div className={`image-container ${isExpanded ? 'expanded-stack-active' : ''}`}>
                <AnimatePresence mode="wait">
                    {!isExpanded ? (
                        <motion.div
                            key="single-image"
                            initial="initial"
                            animate="animate"
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
                         <motion.div
                             key="expanded-image-stack"
                             className="expanded-image-stack"
                             variants={imageStackContainerVariants}
                             initial="hidden"
                             animate="visible"
                             exit="exit"
                         >
                             {[1, 2, 3].map((index) => (
                                 <motion.img
                                     key={`stacked-img-${index}`}
                                     className="image stacked-image-item"
                                     src={infoImg}
                                     alt={`${placeholderAlt} ${index}`}
                                     variants={stackedImageVariants}
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
        className={`dataBlock standard-layout ${props.className || ""}`}
        id={props.id}
        variants={blockVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
    >
         {!props.propInput.ignoreInfo ? (
             renderStandardLayout()
         ) : null}
    </motion.div>
    ;
    return content ;
}
export default DataBlock;
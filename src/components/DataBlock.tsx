import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./DataBlock.scss";
import { ReactComponent as PdfIcon } from "../images/pdf.svg"; // Import SVG as component
import { ReactComponent as GitHubIcon } from "../images/gitHubLogo.svg";
import { ReactComponent as LinkedInIcon } from "../images/linkedInLogo.svg";
import { ReactComponent as InstagramIcon } from "../images/instagramLogo.svg";

import {
  BUTTON_FADE_IN_DELAY,
  BUTTON_FADE_IN_DURATION,
  BUTTON_FADE_OUT_DURATION,
  STACK_IMAGE_DURATION,
  STACK_IMAGE_STAGGER,
  SUMMARY_IMAGE_FADE_IN_DURATION,
  SUMMARY_IMAGE_FADE_IN_DELAY,
  COLLAPSE_RESET_DELAY_MS,
  STACK_IMAGE_EXIT_STAGGER,
} from "../constants/animation";

// Text fade-in variants
const textVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

interface PropInput {
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
}

interface DataBlockProps {
  className?: string;
  id?: string;
  github?: string;
  link?: string;
  instagram?: string;
  resume?: string;
  propInput: PropInput;
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
      staggerChildren: STACK_IMAGE_EXIT_STAGGER,
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

// -----------------------------------------------------------------------------
// Sub-components to keep DataBlock render small and readable (SRP / KISS)
// -----------------------------------------------------------------------------

interface ExpandButtonProps {
  isExpanded: boolean;
  isCollapsing: boolean;
  toggleExpand: () => void;
}

const ExpandButton: React.FC<ExpandButtonProps> = ({
  isExpanded,
  isCollapsing,
  toggleExpand,
}) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={isExpanded ? "expanded-button" : "collapsed-button"}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="button-motion-wrapper"
    >
      <button
        className="learn-more-button"
        onClick={toggleExpand}
        disabled={false}
      >
        {isExpanded || isCollapsing ? (
          <>
            Learn Less <span className="button-arrow">▲</span>
          </>
        ) : (
          <>
            Learn More <span className="button-arrow">▼</span>
          </>
        )}
      </button>
    </motion.div>
  </AnimatePresence>
);

interface ImageDisplayProps {
  infoImg: string | undefined;
  alt: string | undefined;
  link?: string;
  isExpanded: boolean;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ infoImg, alt, link, isExpanded }) => {
  if (!infoImg) return null;

  const placeholderAlt = alt || "Placeholder image";

  return (
    <div className={`image-container ${isExpanded ? "expanded-stack-active" : ""}`}>
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.div
            key="single-image"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={singleImageVariants}
          >
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer" aria-label={alt || "Link related to image"}>
                <img className="image clickable single-image-element" src={infoImg} alt={alt} />
              </a>
            ) : (
              <img className="image single-image-element" src={infoImg} alt={alt} />
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

const DataBlock = (props: DataBlockProps) => {
    const { infoTextShort, infoTextLong, infoText } = props.propInput;
    const hasExpandableText = Boolean(infoTextShort && infoTextLong);

    const [isExpanded, setIsExpanded] = useState(false);
    const [isCollapsing, setIsCollapsing] = useState(false);

    const defaultShort = (infoTextShort ?? infoText ?? "") as string;
    const defaultLong = (infoTextLong ?? defaultShort) as string;

    const displayText = isExpanded ? defaultLong : defaultShort;

    useEffect(() => {
        if (!isExpanded && isCollapsing) {
            const timer = setTimeout(() => {
                setIsCollapsing(false);
            }, COLLAPSE_RESET_DELAY_MS);
            return () => clearTimeout(timer);
        }
    }, [isExpanded, isCollapsing]);

    const handleToggleExpand = () => {
        if (isExpanded) {
            setIsCollapsing(true); // about to collapse
        }
        setIsExpanded(!isExpanded);
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
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isExpanded ? "expanded-text" : "collapsed-text"}
                        className="infoText"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                         {displayText}
                      </motion.div>
                    </AnimatePresence>
                    {renderIcons()}
                    {hasExpandableText && (
                      <ExpandButton
                        isExpanded={isExpanded}
                        isCollapsing={isCollapsing}
                        toggleExpand={handleToggleExpand}
                      />
                    )}
                </div>
                <ImageDisplay
                  infoImg={props.propInput.infoImg}
                  alt={props.propInput.alt}
                  link={props.link}
                  isExpanded={isExpanded}
                />
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

    // renderImage function removed - replaced by ImageDisplay component above

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
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import GlassButton from "./Glass/GlassButton";
import IconButton from "./IconButton";
import emailLogo from "../images/emailLogo.svg";
import gitHubLogo from "../images/gitHubLogo.svg";
import linkedInLogo from "../images/linkedInLogo.svg";
import pdf from "../images/pdf.svg";

interface IntroDataBlockProps {
    title: string;
    introText: string;
    profileImage: string;
    subtitle: string;
    description: string;
}

const IntroDataBlock = (props: IntroDataBlockProps) => {
    const [introTypedText, setIntroTypedText] = useState('');
    const [showIntroCursor, setShowIntroCursor] = useState(true);
    const [isIntroTypingComplete, setIsIntroTypingComplete] = useState(false);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        let index = 0;
        const fullText = props.introText.toUpperCase();
        
        const typeIntro = () => {
            if (index < fullText.length) {
                setIntroTypedText(fullText.substring(0, index + 1));
                index++;
            } else {
                setIsIntroTypingComplete(true);
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            }
        };

        intervalRef.current = setInterval(typeIntro, 50);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [props.introText]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowIntroCursor(prev => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    // Stop cursor blinking after 3 seconds when typing is complete
    useEffect(() => {
        if (isIntroTypingComplete) {
            const stopCursorTimer = setTimeout(() => {
                setShowIntroCursor(false);
            }, 3000); // Stop blinking after 3 seconds

            return () => clearTimeout(stopCursorTimer);
        }
    }, [isIntroTypingComplete]);

    const blockVariants = {
        hidden: { y: 50 },
        visible: { y: 0, transition: { duration: 0.8 } },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.3,
            },
        }),
    };

    return (
        <motion.div
            className="
                flex flex-col items-center justify-center min-h-screen w-full max-w-6xl
                px-[5%] py-16 mx-auto box-border relative mb-0
                text-gray-800 dark:text-gray-100
            "
            variants={blockVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Main Content */}
            <div className="
                w-full flex flex-col lg:flex-row items-center justify-center
                gap-10 lg:gap-16 mb-10
            ">
                {/* Text Container */}
                <div className="
                    flex flex-col flex-1 min-w-[300px] lg:items-start items-center
                    order-2 lg:order-1
                ">
                    {/* Intro Text with Typewriter */}
                    <div 
                        className="
                            mb-2 font-semibold lg:text-left text-center
                            text-sm uppercase tracking-wider opacity-90
                            text-sky-300
                        "
                    >
                        {introTypedText}
                        {showIntroCursor && (
                            <span className="inline-block ml-1 animate-pulse">|</span>
                        )}
                    </div>

                    {/* Main Title */}
                    <h1 
                        className="
                            font-bold flex flex-col mb-5 w-full
                            text-4xl sm:text-5xl lg:text-6xl lg:text-left text-center
                            text-gray-800 dark:text-white
                        "
                    >
                        {props.title}
                    </h1>

                    {/* Subtitle */}
                    <h2 
                        className="
                            font-semibold mb-6 lg:text-left text-center
                            text-xl sm:text-2xl lg:text-3xl
                            text-gray-600 dark:text-gray-200
                        "
                    >
                        {props.subtitle}
                    </h2>

                    {/* Description */}
                    <p 
                        className="
                            mb-8 leading-relaxed lg:text-left text-center max-w-2xl
                            text-base sm:text-lg
                            text-gray-600 dark:text-gray-300
                        "
                    >
                        {props.description}
                    </p>

                    {/* Icons */}
                    <motion.div 
                        className="flex gap-6 justify-center lg:justify-start"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {[
                            { src: emailLogo, alt: "Email", href: "mailto:kenanrustamov@gmail.com", label: "Email", isExternal: false },
                            { src: gitHubLogo, alt: "GitHub", href: "https://github.com/kenanr", label: "GitHub", isExternal: true },
                            { src: linkedInLogo, alt: "LinkedIn", href: "https://linkedin.com/in/kenanrustamov", label: "LinkedIn", isExternal: true },
                            { src: pdf, alt: "Resume", href: "/ComputerScienceResume.pdf", label: "Resume", isExternal: true }
                        ].map((icon, index) => (
                            <IconButton
                                key={icon.label}
                                src={icon.src}
                                alt={icon.alt}
                                href={icon.href}
                                label={icon.label}
                                isExternal={icon.isExternal}
                                variants={iconVariants}
                                custom={index}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Profile Image */}
                <motion.div 
                    className="
                        relative order-1 lg:order-2 flex-shrink-0
                        w-80 h-80 lg:w-96 lg:h-96
                    "
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="profile-image-container group">
                        <img 
                            srcSet="/kenanRustamov-300.webp 300w, /kenanRustamov.webp 1160w"
                            sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 480px"
                            src={props.profileImage} 
                            alt="Profile"
                            loading="eager"
                            className="
                                w-full h-full object-cover object-center
                                group-hover:scale-105 transition-transform duration-500 ease-out
                            "
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="
                    absolute bottom-8 left-1/2 transform -translate-x-1/2
                    text-gray-700 dark:text-gray-300 cursor-pointer
                "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                onClick={() => {
                    const workExperienceSection = document.getElementById('work-experience-section');
                    if (workExperienceSection) {
                        workExperienceSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            >
                <div className="flex flex-col items-center">
                    <span className="text-sm font-medium mb-3 text-blue-600 dark:text-blue-400">Scroll Down</span>
                    <div className="scroll-indicator">
                        <div className="
                            w-1.5 h-3 
                            bg-gradient-to-b from-blue-500 to-purple-500 
                            dark:from-blue-400 dark:to-purple-400
                            rounded-full mt-2 animate-bounce
                            shadow-sm
                        "></div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default IntroDataBlock;

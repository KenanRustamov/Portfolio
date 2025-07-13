import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import GlassButton from "./Glass/GlassButton";
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
    icons: Array<{
        src: string;
        alt: string;
        href: string;
        isExternal?: boolean;
    }>;
}

const IntroDataBlock = (props: IntroDataBlockProps) => {
    // State for intro text animation
    const introTextTarget = "Hello, my name is";
    const [introTypedText, setIntroTypedText] = useState("");
    const [showIntroCursor, setShowIntroCursor] = useState(true);
    const introTypingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const introCursorTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Effect for intro text typewriter
    useEffect(() => {
        let currentText = "";
        let typingDelay = 80;
        let cursorBlinkDuration = 3000;

        const typeIntro = () => {
            if (currentText.length < introTextTarget.length) {
                currentText = introTextTarget.substring(0, currentText.length + 1);
                setIntroTypedText(currentText);
                introTypingTimeoutRef.current = setTimeout(typeIntro, typingDelay);
            } else {
                introTypingTimeoutRef.current = null;
                introCursorTimeoutRef.current = setTimeout(() => {
                    setShowIntroCursor(false);
                    introCursorTimeoutRef.current = null;
                }, cursorBlinkDuration);
            }
        };

        introTypingTimeoutRef.current = setTimeout(typeIntro, 500);

        return () => {
            if (introTypingTimeoutRef.current) clearTimeout(introTypingTimeoutRef.current);
            if (introCursorTimeoutRef.current) clearTimeout(introCursorTimeoutRef.current);
        };
    }, []);

    // Framer Motion animation variants
    const blockVariants = {
        hidden: { y: 30 },
        visible: {
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.1 + 0.5,
                duration: 0.4,
                ease: "easeOut"
            }
        })
    };

    return (
        <motion.div
            className="
                flex flex-col items-center justify-center min-h-screen w-full max-w-6xl
                px-[5%] py-16 mx-auto box-border relative mb-0
            "
            style={{ color: 'var(--text-color)' }}
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
                        "
                        style={{ color: 'var(--link-hover-color)' }}
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
                            leading-tight tracking-tight
                        "
                        style={{ color: 'var(--text-color)' }}
                    >
                        {props.title}
                    </h1>

                    {/* Subtitle */}
                    <h2 
                        className="
                            text-lg sm:text-xl lg:text-2xl mt-2
                            font-normal lg:text-left text-center opacity-80
                        "
                        style={{ color: 'var(--text-color)' }}
                    >
                        {props.subtitle}
                    </h2>

                    {/* Description */}
                    <p 
                        className="
                            text-base leading-relaxed mt-4
                            lg:text-left text-center max-w-2xl
                        "
                        style={{ color: 'var(--data-block-text)' }}
                    >
                        {props.description}
                    </p>

                    {/* Social Icons */}
                    <div className="
                        flex justify-center lg:justify-start items-center gap-3 mt-8
                    ">
                        {[
                            { src: emailLogo, alt: "Email", href: "mailto:kenanrustamov@gmail.com", label: "Email" },
                            { src: gitHubLogo, alt: "GitHub", href: "https://github.com/kenanr", label: "GitHub", isExternal: true },
                            { src: linkedInLogo, alt: "LinkedIn", href: "https://linkedin.com/in/kenanrustamov", label: "LinkedIn", isExternal: true },
                            { src: pdf, alt: "Resume", href: "/ComputerScienceResume.pdf", label: "Resume", isExternal: true }
                        ].map((icon, index) => (
                            <motion.div
                                key={icon.alt}
                                custom={index}
                                variants={iconVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <GlassButton
                                    variant="ghost"
                                    size="sm"
                                    href={icon.href}
                                    target={icon.isExternal ? "_blank" : undefined}
                                    className="
                                        p-2 group transition-all duration-300 ease-out
                                    "
                                    style={{ 
                                        color: 'var(--svg-fill)',
                                        borderColor: 'var(--border-color)'
                                    }}
                                    animate
                                >
                                    <img
                                        src={icon.src}
                                        alt={icon.alt}
                                        className="w-4 h-4 transition-all duration-300 group-hover:scale-110"
                                        style={{ filter: 'brightness(0) saturate(100%) invert(50%)' }}
                                    />
                                    <span className="text-xs font-normal ml-2 hidden sm:inline">
                                        {icon.label}
                                    </span>
                                </GlassButton>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Profile Image */}
                <div className="
                    flex-shrink-0 order-1 lg:order-2
                ">
                    <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={props.profileImage}
                            alt="Profile"
                            className="
                                w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl
                                transition-all duration-500 ease-out
                                border-2 shadow-lg group-hover:shadow-xl
                            "
                            style={{ 
                                borderColor: 'var(--border-color)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
                            }}
                        />
                        {/* Glass overlay effect on hover */}
                        <div 
                            className="
                                absolute inset-0 rounded-2xl opacity-0
                                group-hover:opacity-20 transition-opacity duration-500
                                pointer-events-none
                            "
                            style={{ 
                                background: 'var(--card-bg)'
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default IntroDataBlock;

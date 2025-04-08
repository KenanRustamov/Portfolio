import React, { useState, useEffect } from 'react';
import "./Links.scss"; // Ensure SCSS is imported

interface LinkData {
    text: string;
    href: string;
    px: number;
    id: string;
}

interface LinkProps {
    linkData: LinkData;
    onLinkClick?: () => void; // Add optional callback prop
}

const Link: React.FC<LinkProps> = ({ linkData, onLinkClick }) => {
    const [isActive, setIsActive] = useState(false);

    // Function to check if the link's target section is in view
    const checkActive = () => {
        const element = document.getElementById(linkData.text.toLowerCase().replace(" ", "-")); // Assuming ID matches text
        if (element) {
            const rect = element.getBoundingClientRect();
            // Adjust threshold as needed
            const threshold = window.innerHeight * 0.5;
            setIsActive(rect.top <= threshold && rect.bottom >= threshold);
        }
    };

    useEffect(() => {
        // Check on mount and add scroll listener
        checkActive();
        window.addEventListener('scroll', checkActive);
        return () => window.removeEventListener('scroll', checkActive);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleClick = () => {
        // Call the passed-in callback when the link is clicked
        if (onLinkClick) {
            onLinkClick();
        }
        // Add smooth scrolling if it's an internal link
        if (linkData.href.startsWith('#')) {
            const element = document.querySelector(linkData.href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Determine the correct href for the anchor tag
    const href = linkData.href.startsWith('#') ? linkData.href : `#${linkData.text.toLowerCase().replace(" ", "-")}`;

    return (
        <li className={`linkItem ${isActive ? 'active' : ''}`}>
            <a 
                href={href} 
                onClick={handleClick} 
                // Add target="_blank" rel="noopener noreferrer" for external links
                {...(linkData.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
                {linkData.text}
            </a>
        </li>
    );
};

export default Link;
import React from 'react'
import "./Links.scss";
import Link from "./Link"

interface LinkData {
    text: string;
    href: string;
    px: number;
    id: string;
}

interface LinksProps {
    links: LinkData[];
    onLinkClick?: () => void;
}

const Links: React.FC<LinksProps> = ({ links, onLinkClick }) => {
    let content = (
        <ul className="linksContainer">
            {links.map((link) => (
                <Link 
                    key={link.id} 
                    linkData={link} 
                    onLinkClick={onLinkClick}
                />
            ))}
        </ul>
    );
    return content;
};

export default Links;
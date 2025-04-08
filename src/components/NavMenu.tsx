import React, { useState } from 'react';
import Links from "./Links";
import "./NavMenu.scss";

interface LinkData {
    text: string;
    href: string;
    px: number;
    id: string;
}

interface NavMenuProps {
    links: LinkData[];
}

const NavMenu: React.FC<NavMenuProps> = ({ links }) => {
    const [animate, setAnimate] = useState(false);

    const handleLinkClick = () => {
        setAnimate(!animate);
    };

    return (
        <div>
            {!animate ? <div className={`lineWrapper ${animate ? "lineWrapper-animation" : ""}`} onClick={() => setAnimate(!animate)}>
                <div className="topLine"></div>
                <div className="middleLine"></div>
                <div className="bottomLine"></div>
            </div> : null}
            <div className={`slate ${animate ? "slate-animation" : ""}`}>
                {animate ? <div className="exitIcon" onClick={() => setAnimate(!animate)}>
                    <div className="leftLine"></div>
                    <div className="rightLine"></div>
                </div> : null}
                <div className="linksWrapper">
                    <Links links={links} onLinkClick={handleLinkClick} />
                </div>
            </div>
        </div>
    );
};

export default NavMenu;
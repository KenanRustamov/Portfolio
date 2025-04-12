import React from 'react';
import "./Footer.scss";
import ThemeSwitch from './ThemeSwitch';
import { ReactComponent as GitHubIcon } from "../images/gitHubLogo.svg";
import { ReactComponent as LinkedInIcon } from "../images/linkedInLogo.svg";
import { ReactComponent as InstagramIcon } from "../images/instagramLogo.svg";
import { ReactComponent as PdfIcon } from "../images/pdf.svg";

const Footer = (props: any) => {
  let content = 
  <footer className = "footer">
        <div className="logoLinks" >
          <a href="https://github.com/KenanRustamov" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <GitHubIcon className="dynamicLogo" />
              <span className="icon-label">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/kenanrustamov/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <LinkedInIcon className="dynamicLogo" />
              <span className="icon-label">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/kenanrustamov1/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
            <InstagramIcon className="dynamicLogo" />
             <span className="icon-label">Instagram</span>
          </a>   
          <a href="/ComputerScienceResume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
              <PdfIcon className="dynamicLogo" />
              <span className="icon-label">Resume</span>
          </a>    
        </div>
        <div className="footer-controls">
          <ThemeSwitch />
        </div>
        <div className="bottomText">Created By Kenan Rustamov</div>
  </footer>
    return content;
};

export default Footer;
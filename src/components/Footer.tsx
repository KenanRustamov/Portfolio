import React from "react";
import { motion } from "framer-motion";
import IconButton from "./IconButton";
import gitHubLogo from "../images/gitHubLogo.svg";
import linkedInLogo from "../images/linkedInLogo.svg";
import instagramLogo from "../images/instagramLogo.svg";
import pdf from "../images/pdf.svg";

import ThemeSwitch from './ThemeSwitch';

const Footer = (props: any) => {
  let content = 
  <footer className="
    relative flex flex-col justify-center w-full
    text-white bottom-0
  ">
        <motion.div 
          className="flex gap-6 justify-center items-center"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {[
            { src: gitHubLogo, alt: "GitHub", href: "https://github.com/KenanRustamov", label: "GitHub Profile" },
            { src: linkedInLogo, alt: "LinkedIn", href: "https://www.linkedin.com/in/kenanrustamov/", label: "LinkedIn Profile" },
            { src: instagramLogo, alt: "Instagram", href: "https://www.instagram.com/kenanrustamov1/", label: "Instagram Profile" },
            { src: pdf, alt: "Resume", href: "/ComputerScienceResume.pdf", label: "Resume" }
          ].map((item, index) => (
            <IconButton
              key={item.label}
              src={item.src}
              alt={item.alt}
              href={item.href}
              label={item.label}
              isExternal={true}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: (i: number) => ({
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: i * 0.1,
                    duration: 0.3,
                  },
                }),
              }}
              custom={index}
            />
          ))}
        </motion.div>
        <div className="flex justify-center items-center mt-4 w-full">
          <ThemeSwitch />
        </div>
        <div className="flex text-xs justify-center mb-2.5 mt-4 text-gray-500">Created By Kenan Rustamov</div>
  </footer>
    return content;
};

export default Footer;
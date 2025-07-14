import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as GitHubIcon } from "../images/gitHubLogo.svg?react";
import { ReactComponent as LinkedInIcon } from "../images/linkedInLogo.svg?react";
import { ReactComponent as InstagramIcon } from "../images/instagramLogo.svg?react";
import { ReactComponent as PdfIcon } from "../images/pdf.svg?react";

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
            { href: "https://github.com/KenanRustamov", icon: GitHubIcon, label: "GitHub Profile" },
            { href: "https://www.linkedin.com/in/kenanrustamov/", icon: LinkedInIcon, label: "LinkedIn Profile" },
            { href: "https://www.instagram.com/kenanrustamov1/", icon: InstagramIcon, label: "Instagram Profile" },
            { href: "/ComputerScienceResume.pdf", icon: PdfIcon, label: "Resume" }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.label}
                className="
                  group relative w-12 h-12 
                  flex items-center justify-center
                  backdrop-blur-md bg-white/10 dark:bg-white/5
                  border border-white/20 dark:border-white/10
                  rounded-xl shadow-lg shadow-blue-500/10
                  hover:shadow-xl hover:shadow-blue-500/20
                  hover:bg-white/20 dark:hover:bg-white/10
                  hover:border-white/30 dark:hover:border-white/20
                  hover:scale-105 hover:-translate-y-1
                  transition-all duration-300 ease-out
                  cursor-pointer
                "
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
                onClick={() => window.open(item.href, '_blank')}
              >
                <IconComponent className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-all duration-300 filter brightness-0 dark:brightness-100 dark:invert-0 group-hover:brightness-110" />
              </motion.div>
            );
          })}
        </motion.div>
        <div className="flex justify-center items-center mt-4 w-full">
          <ThemeSwitch />
        </div>
        <div className="flex text-xs justify-center mb-2.5 mt-4 text-gray-500">Created By Kenan Rustamov</div>
  </footer>
    return content;
};

export default Footer;
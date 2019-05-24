import React from 'react';
import "./Footer.css";
import Links from "./Links"

const Footer = (props: any) => {
  let content = 
  <footer className = "footer">
    <ul>
      <React.Fragment>
        <Links links={props.links} />
      </React.Fragment> 
    </ul>
  </footer>
    return content;
};

export default Footer;
import React from 'react'
import "./Links.css";
import Link from "./Link"

const Links = (props: any) => {
    let content = 
    props.links.map((link: any) => (
        <li><Link href={link.href} text={link.text}/></li> 
    ));
    return content;
};

export default Links;
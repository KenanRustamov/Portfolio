import React from 'react'
import "./Links.scss";
import Link from "./Link"

const Links = (props: any) => {
    let content = 
    props.links.map((link: any) => (
        <Link href={link.href} text={link.text}/>
    ));
    return content;
};

export default Links;
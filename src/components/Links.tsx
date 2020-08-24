import React from 'react'
import "./Links.scss";
import Link from "./Link"

const Links = (props: any) => {
    let content = 
    props.links.map((link: any) => (
        <Link text={link.text} px ={link.px} onClick={props.onClick} id={link.id}/>
    ));
    return content;
};

export default Links;
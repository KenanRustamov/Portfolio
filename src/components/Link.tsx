import React from 'react'

 const Link = (props:any) => {
    const content = 
    <a 
        className="App-link" 
        href={props.href} 
        target="_blank" 
        rel="noopener noreferrer">{props.text}</a>
        
    return content;
}

export default Link;
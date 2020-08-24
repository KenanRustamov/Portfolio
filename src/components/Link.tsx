import React from 'react'

 const Link = (props:any) => {
     function findPosition(obj:any) { 
        let currenttop:number = 0; 
        if (obj) { 
            do { 
                currenttop += obj.offsetTop; 
            } while ((obj = obj.offsetParent));
            if(currenttop !== undefined) {
                return currenttop;
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    } 

    const content = 
    <a 
        onClick={() => {window.scrollTo({
            top: findPosition(document.getElementById(props.id)),
            behavior: 'smooth',
        });
        if(props.onClick){props.onClick()}}}
        className="App-link" 
        href={props.href} 
        target="_blank" 
        rel="noopener noreferrer">{props.text}</a>
        
    return content;
}

export default Link;
import React, { RefObject } from 'react'
import "./DataBlock.scss";

const DataBlock = (props: any) => {
    const ref: RefObject<any> = React.createRef();
    
    const content = 
    <div ref={ref} className = {`dataBlock ${props.className ? props.className : ""}`} id={props.id}>
        <div className="title">
            <div className="text">{props.propInput.title}</div>
        </div>
        {props.propInput.ignoreInfo == null? 
         <div className="info">
         {props.propInput.infoTitle != null?
            <div className="infoTitle">{props.propInput.infoTitle}
                <div className ="subtitle">{props.propInput.infoSubtitle}</div>
                <div className="infoText">{props.propInput.infoText}</div>
                <div className="dataBlock-icons">
                    {props.github ? <a href={props.github}><svg height="25" className="dynamicLogo" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"  /></svg></a>: null}
                    {props.link ? <a href={props.link}><svg className= "dynamicLogo linkLogo" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 24 24" width="25"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg></a> : null}
                </div>
            </div>: null}
            {!props.icon ? props.propInput.infoImg && props.link ? <a href={props.link} target={"_blank"} rel="noopener noreferrer"><img className = "image clickable" src={props.propInput.infoImg} alt = {props.propInput.alt}></img></a>: <img className =  {props.textOnly ? "line" : "image"} src={props.propInput.infoImg} alt = {props.propInput.alt}></img>: null}
            {props.propInput.other}
         </div> : null}
    </div>
    ;
    return content ;
}
export default DataBlock;
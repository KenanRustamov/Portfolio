import React, { RefObject } from 'react'
import "./DataBlock.scss";

const DataBlock = (props: any) => {
    const ref: RefObject<any> = React.createRef();
    const handleClick = () => {
        ref.current.scrollIntoView({
            behavior:'smooth',
            block: 'start',
        })
    }

    const content = 
    <div ref={ref} className = "dataBlock" id={props.id}>
        <div className="title">
            <div className="text">{props.propInput.title}</div>
            <div className="bottomBorder"></div>
        </div>
        {props.propInput.ignoreInfo == null? 
         <div className="info">
         {props.propInput.infoTitle != null?
            <div className="infoTitle">{props.propInput.infoTitle}
                <div className ="subtitle">{props.propInput.infoSubtitle}</div>
                <div className="infoText">{props.propInput.infoText}</div>
            </div>: null}
            {!props.icon ? props.propInput.infoImg && props.link ? <a href={props.link} target={"_blank"} rel="noopener noreferrer"><img className = "image clickable" src={props.propInput.infoImg} alt = {props.propInput.alt}></img></a>: <img className =  {props.textOnly ? "line" : "image"} src={props.propInput.infoImg} alt = {props.propInput.alt}></img>: null}
            {props.propInput.other}
         </div> : null}
    </div>
    ;
    return content ;
}
export default DataBlock;
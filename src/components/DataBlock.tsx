import React from 'react'
import "./DataBlock.scss";

const DataBlock = (props: any) => {
    const content = 
    <div className = "dataBlock">
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
            {props.propInput.infoImg != null ? <img className = "image" src={props.propInput.infoImg} alt = {props.alt} ></img> : null}
            {props.propInput.other}
         </div> : null}
    </div>
    ;
    return content ;
}
export default DataBlock;
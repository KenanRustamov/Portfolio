import React from 'react'
import "./DataBlock.css";
import kenanPhoto from "../images/kenanRustamov.jpg";

const DataBlock = (props: any) => {
    const photoWidth = 250;
    const content = 
    <div className = "dataBlock">
        <div className="title">
            <div className="text">PROFILE</div>
            <div className="bottomBorder"></div>
        </div>
        <div className="info">
            <img className = "image" src={kenanPhoto} width={photoWidth} height = {photoWidth*1.105}></img>
            <div className="infoTitle">Kenan Rustamov
                <div className ="subtitle">Full Stack Developer</div>
                <div className="infoText"></div>
            </div>
        </div>
    </div>
    ;
    return content ;
}
export default DataBlock;
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
            <div className="infoTitle">Kenan Rustamov
                <div className ="subtitle">Full Stack Developer</div>
                <div className="infoText">I currently study Computer Science and am on the Pre-Med track at the University of Pittsburgh.</div>
            </div>
            <img className = "image" src={kenanPhoto} width={photoWidth} height = {photoWidth*1.105}></img>
        </div>
    </div>
    ;
    return content ;
}
export default DataBlock;
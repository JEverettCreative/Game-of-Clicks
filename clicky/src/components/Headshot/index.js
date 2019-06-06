import React from "react";
import "./style.css";

function Headshot(props) {
    // debugger;
    return (
        <div onClick={() => props.reorderHeadshots(props.id)} className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
      </div>
    )
}

export default Headshot;
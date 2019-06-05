import React from "react";
import "./style.css";

function Score(props) {
    return (
        <span className="h4 mb-0">
            Score: {props.score}
        </span>
    )
}

export default Score;
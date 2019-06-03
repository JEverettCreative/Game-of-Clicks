import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid jumbo-got text-center">
            <h1 className="dark-text">The Game of Clicks</h1>
            <p className="dark-text">Click the GoT characters to get points. But don't click the same one twice!</p>
        </div>
    )
}

export default Jumbotron;
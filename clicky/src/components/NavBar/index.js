import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav className="navbar navbar-dark got-theme">
            <span className="navbar-brand mb-0 h1">
                Game of Clicks
            </span>
            <span className="h4 mb-0">
                Click an image to begin!
            </span>
            <div className="score">{props.children}</div>
        </nav>
    )
}

export default NavBar;
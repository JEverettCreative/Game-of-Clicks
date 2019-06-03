import React from "react";
import "./style.css";

function NavBar() {
    return (
        <nav className="navbar navbar-dark got-theme">
            <span className="navbar-brand mb-0 h1">
                Game of Clicks
            </span>
            <ul className="navbar-nav justify-content-around">
                <li className="nav-item">
                    Click an image to begin!
                </li>
                <li className="nav-item">
                    Score: <p className="score">0</p>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
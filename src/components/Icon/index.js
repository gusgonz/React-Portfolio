import React from "react";
import './style.css';

function Icon(props) {
    return (
        <a href={props.url} className="icons" target="_blank" rel="noopener noreferrer">
            <img className="icon-image" src={props.image} alt={`Link to my ${props.alt}`} />
        </a>
    )
}

export default Icon;
import React from "react";
import './style.css';
import Jumbotron from "react-bootstrap/Jumbotron";


function Jumbo(props) {
    return (
        <Jumbotron id="jumbo" bg="dark">
            {props.children}
        </Jumbotron>
    );
};

export default Jumbo;
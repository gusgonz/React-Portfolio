import React from "react";
import './style.css';
// import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Icon from "../../components/Icon";


function Footer() {
    return (
        <footer className="footer">
            <Container fluid id="footer-container">
                <Icon url="https://www.github.com/gusgonz/" alt="GitHub" image="images/github-logo.svg" />
                <Icon url="https://www.linkedin.com/in/gusgonz/" alt="LinkedIn" image="images/linkedin-logo.svg" />
            </Container>
        </footer>
    );

}

export default Footer;
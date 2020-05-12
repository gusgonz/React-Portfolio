import React from "react";
import './style.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function Header() {
    return (
        <header>
            <Navbar fixed="top" expand="md" bg="dark" variant="dark" id="nav">
                <Navbar.Brand href="/" id="name">Gus Gonzalez</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/connect">Connect</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>

    );
};

export default Header;

import React from "react";
import './style.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, animateScroll as scroll } from 'react-scroll';

function Header() {

    const url = window.location.href;

    // true = home page, false = contact page
    const page = !url.includes("contact");

    const scrollOptions = {
        spy: true,
        smooth: true,
        offset: -76,
        duration: 1000
    }

    return (
        <header>
            <Navbar fixed="top" expand="md" id="nav">
                <Navbar.Brand href="/" id="name">Gus Gonzalez</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="justify-content-end nav-links" style={{ width: "100%" }}>
                        {/* Home link to react router */}
                        {
                            page
                                ?
                                <Navbar.Text className="nav-links" onClick={scroll.scrollToTop}>Home</Navbar.Text>
                                :
                                <Nav.Link className="nav-links" href="/">Home</Nav.Link>
                        }
                        {/* About scroll link */}
                        {
                            page
                                ?
                                (<Link to="about" spy={scrollOptions.spy} smooth={scrollOptions.smooth} offset={scrollOptions.offset} duration={scrollOptions.duration} >
                                    <Navbar.Text className="nav-links" href="">About</Navbar.Text>
                                </Link>)
                                :
                                ""
                        }
                        {/* Projects scroll link */}
                        {
                            page
                                ?
                                (<Link to="projects" spy={scrollOptions.spy} smooth={scrollOptions.smooth} offset={scrollOptions.offset} duration={scrollOptions.duration} >
                                    <Navbar.Text className="nav-links" href="/projects">Projects</Navbar.Text>
                                </Link>)
                                :
                                ""
                        }
                        {/* Connect scroll link */}
                        {
                            page
                                ?
                                (<Link to="connect" spy={scrollOptions.spy} smooth={scrollOptions.smooth} offset={scrollOptions.offset} duration={scrollOptions.duration} >
                                    <Navbar.Text className="nav-links" href="/connect">Connect</Navbar.Text>
                                </Link>)
                                :
                                ""
                        }
                        {/* Contact link to react router */}
                        {
                            page
                                ?
                                (<Nav.Link className="nav-links" href="/contact">Contact</Nav.Link>)
                                :
                                ""
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;

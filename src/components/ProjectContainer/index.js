import React from "react";
import './style.css';
import Container from "react-bootstrap/Container";

function ProjectContainer({ children }) {
    return (
        <Container id="projects">{children}</Container>
    );
};

export default ProjectContainer;
import React from "react";
import './style.css';
import Container from "react-bootstrap/Container";

function PageContainer({ children }) {
    return (
        <Container fluid id="content">{children}</Container>
    );
};

export default PageContainer;
import React from "react";
import './style.css';
import Card from "react-bootstrap/Card";

function Project(props) {
    return (
        <Card bg="secondary" className="project-cards">
            <Card.Body>
                <Card.Title className="project-title" as="h3">{props.name}</Card.Title>

                <Card.Subtitle className="mb-2 project-tech">{props.tech}</Card.Subtitle>
                <Card.Link href={props.deploy}>
                    <Card.Img src={props.image} />
                </Card.Link>
                <Card.Text className="project-text">
                    {props.desc}
                </Card.Text>
                <Card.Link className="project-gh" href={props.gh}>{props.gh}</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Project;
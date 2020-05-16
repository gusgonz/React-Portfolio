import React from "react";
import './style.css';
import Jumbo from "../../components/Jumbo";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageContainer from "../../components/PageContainer";
import ProjectContainer from "../../components/ProjectContainer";
import Project from "../../components/Project";
import projects from "../../utils/projects";
import resume from "../../utils/RESUME.pdf"
import { Element } from 'react-scroll';


function Home() {

    const projectComponents = projects.map(proj => (
        <Project {...proj} />
    ));


    return (
        <PageContainer>

            <div id="home-images">
                <Image src="images/atlanta.jpg" style={{ opacity: .8 }} fluid />
                <Image src="images/headshot.jpg" roundedCircle id="me" />
            </div>
            <Jumbo>
                <Container >
                    <Row className="home-rows">
                        <Col xs={12} md={4}>
                            <Element name="about"><h1 >About me</h1></Element>
                        </Col>
                        <Col xs={12} md={8}>

                            <div >
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget. Purus viverra accumsan in nisl nisi scelerisque. Quam id leo in vitae turpis massa sed elementum tempus. Nibh mauris cursus mattis molestie a. Et odio pellentesque diam volutpat commodo sed egestas egestas. Lectus nulla at volutpat diam ut venenatis.
                                    </p>

                                <p>
                                    Nulla facilisi cras fermentum odio. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Mattis molestie a iaculis at erat pellentesque. Consequat nisl vel pretium lectus quam id leo in. Vulputate mi sit amet mauris commodo quis imperdiet massa. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Ultrices eros in cursus turpis massa tincidunt dui ut. In hendrerit gravida rutrum quisque non tellus orci ac auctor.
                                    </p>
                            </div>

                        </Col>

                    </Row>

                    <Row className="project-rows">
                        <Col xs={12} md={4}>
                            <Element name="projects"><h1 >Projects</h1></Element>
                        </Col>

                        <Col xs={12} md={12} >
                            <ProjectContainer>
                                <Row>
                                    <Col md={6} >{projectComponents[0]}</Col>
                                    <Col md={6} lg={6}>{projectComponents[1]}</Col>
                                </Row>
                                <Row>
                                    <Col md={6} lg={6}>{projectComponents[2]}</Col>
                                    <Col md={6} lg={6}>{projectComponents[3]}</Col>
                                </Row>
                                <Row>
                                    <Col md={6} lg={6}>{projectComponents[4]}</Col>
                                    <Col md={6} lg={6}>{projectComponents[5]}</Col>
                                </Row>
                            </ProjectContainer>

                        </Col>
                    </Row>

                    <Row className="home-rows">
                        <Col xs={12} md={5} id="nopadding">
                            <Element name="connect"><h1 >Connect</h1></Element>
                        </Col>
                        <Col xs={12} md={7}>
                            <Row><p><a className="connect-links" href="/contact">Email: gus.gonzalez.15@gmail.com</a></p></Row>
                            <Row><p>Phone Number: (786) 564-1133</p></Row>
                            <Row><p>GitHub: <a className="connect-links" href="https://www.github.com/gusgonz/">https://www.github.com/gusgonz/</a></p></Row>
                            <Row><p>LinkedIn: <a className="connect-links" href="https://www.linkedin.com/in/gusgonz/">https://www.linkedin.com/in/gusgonz/</a></p></Row>
                            <Row><p>Resume: <a className="connect-links" href={resume} target="_blank" rel="noopener noreferrer">Open in new tab here</a></p></Row>
                        </Col>
                    </Row>
                </Container>

            </Jumbo>
        </PageContainer>


    );
};

export default Home;
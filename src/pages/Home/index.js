import React from "react";
import './style.css';
import Jumbo from "../../components/Jumbo";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageContainer from "../../components/PageContainer";


function Home() {
    return (
        <PageContainer>
            <div id="home-images">
                <Image src="images/atlanta.jpg" fluid />
                <Image src="images/headshot.jpg" roundedCircle id="mepic" />
            </div>
            <Jumbo>
                <Container >
                    <Row>
                        <h1 id="aboutme">About me</h1>
                        <Col lg>


                            <div id="about-me-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget. Purus viverra accumsan in nisl nisi scelerisque. Quam id leo in vitae turpis massa sed elementum tempus. Nibh mauris cursus mattis molestie a. Et odio pellentesque diam volutpat commodo sed egestas egestas. Lectus nulla at volutpat diam ut venenatis.
                                    </p>

                                <p>
                                    Nulla facilisi cras fermentum odio. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Mattis molestie a iaculis at erat pellentesque. Consequat nisl vel pretium lectus quam id leo in. Vulputate mi sit amet mauris commodo quis imperdiet massa. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Ultrices eros in cursus turpis massa tincidunt dui ut. In hendrerit gravida rutrum quisque non tellus orci ac auctor.
                                    </p>
                            </div>

                        </Col>

                    </Row>

                </Container>

            </Jumbo>
        </PageContainer>


    );
};

export default Home;
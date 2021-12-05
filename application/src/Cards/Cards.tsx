import React from "react";
import { Card, Container, Row, CardGroup, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = () => {
    return (
        <React.Fragment>
            <div className="cards mb-3">
                <div className="Resume"><p style={{ textAlign: 'center', color: 'blue', fontWeight: 'bold', fontSize: '250%' }}>RESUME</p>
                    <Container>
                        <Row>
                            <Col lg="4">
                                <Card className="mb-2">
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Resume Format 1</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Link to="/Generate"><Button variant="primary"> Make Resume </Button> </Link>
                                        <Link to="/ResumeFormat1"><Button variant="primary">Preview</Button> </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="4" md="6">
                                <Card className="mb-2">
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Intershala Resume</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Link to="/Information"><Button variant="primary"> Make resume </Button> </Link>
                                        <Link to="/Preveiw"><Button variant="primary" style={{ margin: "1" }}>preview</Button> </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="mb-2">
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Resume format 3</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Make Resume</Button>
                                        <Link to="/Resume2_Template"><Button variant="primary" >Preview</Button></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="cards">
                <div className="cards"><p style={{ textAlign: 'center', color: 'blue', fontWeight: 'bold', fontSize: '250%' }}>Curriculum vitae</p>
                    <Container>
                        <Row>
                            <Col lg="4">
                                <Card className="mb-2">
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>CV Format1</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        
                                        <Link to="/Information"><Button variant="primary"> Make CV </Button> </Link>
                                        <Link to="/Cv1_template"><Button variant="primary">Preview</Button> </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="4" md="6">
                                <Card className="mb-2">
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>CV Format 2</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Link to="/Information"><Button variant="primary"> Make Resume </Button> </Link>
                                        <Link to="/"><Button variant="primary" style={{ margin: '1%' }}>preview</Button> </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="mb-2">
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Link to="/Information"><Button variant="primary"> Make Resume </Button> </Link>
                                        <Link to="/"><Button variant="primary" style={{ margin: '1%' }}> Preview </Button></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Cards;
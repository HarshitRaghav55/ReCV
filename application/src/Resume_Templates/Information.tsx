import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';


const Information = () => {
    const [name,setName]=useState("");
    // const [email,setEmail] = useState("");
    return (
        <React.Fragment>
            <div>
                <Form style={{ margin: '1%', padding: "0.5%" }}>
                    <Form.Group className="mb-2" controlId="formGeneralInformation">
                        <Form.Label style={{color:'darkblue'}}>Enter your Full_Name</Form.Label>
                        <Form.Control className="mb-2"type="text" placeholder="Enter your name" />
                        <Form.Label style={{color:'darkblue'}}>Enter your Address</Form.Label>
                        <Form.Control type="text" placeholder="Address here" />
                        <Container style={{padding:"0.5%"}}>
                            <Row>,
                                <Col lg >
                                <Form.Control className="mb-2" type="email" placeholder="Enter your e-mail address" />
                                </Col>
                                <Col lg>
                                <Form.Control className="mb-2" type="email" placeholder="Enter your Phone Number" />
                                </Col>
                            </Row>
                        </Container>
                    </Form.Group>
                </Form>
            </div>
            <div style={{ margin: '1%', padding: "0.5%" }}>
                <Form >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{color:'darkblue'}}>EDUCATION</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <Form >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{color:'darkblue'}}>INTERNSHIP EXPERIENCE</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <Form >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{color:'darkblue'}}>PROJECTS</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <Form >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{color:'darkblue'}}>SKILL</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <Form >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{color:'darkblue'}}>EXTRA/CO-CURRICULAR ACTIVITIES</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <Form >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{color:'darkblue'}}>DECLARATTION</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </div>
            
        </React.Fragment>
        
    );
}
export default Information;
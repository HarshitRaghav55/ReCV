import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ResumeFormat1 from './ResumeFormat1';
const Information1 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [objective, setObjective] = useState("");
    const [mobileNumber, setMobileNumber] = useState<number>();
    const [address, setAddress] = useState("");
    const [educationBachelor, setEducationBachelor] = useState("");
    const [educationMasters, setEducationMasters] = useState("");
    const [educationIntermediate, setEducationIntermediate] = useState("");
    const [educationHighSchool, setEducationHighSchool] = useState("");
    const [internship1Title, setInternship1Title] = useState("");
    const [internship1, setInternship1] = useState("");
    const [internship2Title, setInternship2Title] = useState("");
    const [internship2, setInternship2] = useState("");
    const [project1, setProject1] = useState("");
    const [project2, setProject2] = useState("");
    const [project1Title, setProject1Title] = useState("");
    const [project2Title, setProject2Title] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [link1,setLink1] = useState("");
    const [link2,setLink2] = useState("");

    const [formSubmitted, setFormSubmitted] = useState(false);
    const submit = (e: any) => {
        if (!name || !mobileNumber || !email || !educationHighSchool || !educationIntermediate) {
            alert('All * feilds are required');
            e.preventDefault();
        }
        else {
            setFormSubmitted(true);
        }
    }
    return (
        <React.Fragment>
            {!formSubmitted ?
                <>
                    <div>
                        <Form style={{ margin: '1%', padding: "0.5%" }}>
                            <Form.Group className="mb-2" controlId="formGeneralInformation">
                                <Form.Label style={{ color: 'darkblue' }}>Enter your Full_Name</Form.Label>
                                <Form.Control className="mb-2" type="text" value={name} onChange={event => setName(event.target.value)}
                                    placeholder="Enter your name" />

                                <Container style={{ padding: "0.5%" }}>
                                    <Row>
                                        <Col lg >
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label style={{ color: 'darkblue' }}>Enter your email</Form.Label>
                                                <Form.Control className="mb-2" type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Enter your e-mail address" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg>
                                            <Form.Label style={{ color: 'darkblue' }}>Enter your Phone Number</Form.Label>
                                            <Form.Control className="mb-2" type="number" value={mobileNumber} onChange={event => setMobileNumber(parseInt(event.target.value))} placeholder="Enter your Phone Number" />
                                        </Col>
                                        <Col lg >
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label style={{ color: 'darkblue' }}>Address</Form.Label>
                                                <Form.Control className="mb-2" type="text" value={address} onChange={event => setAddress(event.target.value)} placeholder="Enter your e-mail address" />
                                            </Form.Group>
                                        </Col>

                                    </Row>
                                </Container>
                            </Form.Group>
                        </Form>
                    </div>
                    <div style={{ margin: '1%', padding: "0.5%" }}>

                        <Form >
                            <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                <h4><Form.Label style={{ color: 'darkblue' }}>EDUCATION</Form.Label></h4>
                                <Row>

                                    <h5><Form.Label style={{ color: 'darkblue' }}>Post-Graduate</Form.Label></h5>

                                    <Form.Label style={{ color: 'darkblue' }}>Degree</Form.Label>
                                    <Form.Control as="textarea" value={educationMasters} onChange={event => setEducationMasters(event.target.value)} rows={1} />


                                </Row>
                                <Row>

                                    <h5><Form.Label style={{ color: 'darkblue' }}>Graduate</Form.Label></h5>
                                    <Col lg>
                                        <Form.Label style={{ color: 'darkblue' }}>Bachelors Degree</Form.Label>
                                        <Form.Control as="textarea" value={educationBachelor} onChange={event => setEducationBachelor(event.target.value)} rows={1} />
                                    </Col>

                                </Row>
                                <Row>

                                    <h5><Form.Label style={{ color: 'darkblue' }}>Senior Secondary(XII)</Form.Label></h5>
                                    <Col lg>
                                        <Form.Label style={{ color: 'darkblue' }}>Branch</Form.Label>
                                        <Form.Control as="textarea" value={educationIntermediate} onChange={event => setEducationIntermediate(event.target.value)} rows={1} />
                                    </Col>


                                </Row>
                                <Row>

                                    <h5><Form.Label style={{ color: 'darkblue' }}>Secondary(X)</Form.Label></h5>
                                    <Col lg>
                                        <Form.Label style={{ color: 'darkblue' }}>School</Form.Label>
                                        <Form.Control as="textarea" value={educationHighSchool} onChange={event => setEducationHighSchool(event.target.value)} rows={1} />
                                    </Col>


                                </Row>
                            </Form.Group>
                        </Form>
                

                        <Form >
                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <h4> <Form.Label style={{ color: 'darkblue' }}>INTERNSHIP EXPERIENCE</Form.Label></h4>
                                <Form.Label style={{ color: 'darkblue' }}>INTERNSHIP 1 TITLE</Form.Label>
                                <Form.Control as="textarea" value={internship1Title} onChange={event => setInternship1Title(event.target.value)} rows={2} />
                                <Form.Label style={{ color: 'darkblue' }}>INTERNSHIP 1 DESCRIPTION</Form.Label>
                                <Form.Control as="textarea" value={internship1} onChange={event => setInternship1(event.target.value)} rows={2} />
                                <Form.Label style={{ color: 'darkblue' }}>INTERNSHIP 2 TITLE</Form.Label>
                                <Form.Control as="textarea" value={internship1Title} onChange={event => setInternship1Title(event.target.value)} rows={2} />
                                <Form.Label style={{ color: 'darkblue' }}>INTERNSHIP 2 DESCRIPTION</Form.Label>
                                <Form.Control as="textarea" value={internship1} onChange={event => setInternship1(event.target.value)} rows={2} />
                            </Form.Group>

                        </Form>
                        <Form >

                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <h4> <Form.Label style={{ color: 'darkblue' }}>PROJECTS</Form.Label></h4>
                                <Form.Label style={{ color: 'darkblue' }}>PROJECT 1 Title</Form.Label>
                                <Form.Control as="textarea" value={project1Title} onChange={event => setProject1Title(event.target.value)} rows={2} />
                                <Form.Label style={{ color: 'darkblue' }}>PROJECT 1 Description</Form.Label>
                                <Form.Control as="textarea" value={project1} onChange={event => setProject1(event.target.value)} rows={2} />
                                <Form.Label style={{ color: 'darkblue' }}>PROJECT 2 Title</Form.Label>
                                <Form.Control as="textarea" value={project2Title} onChange={event => setProject2Title(event.target.value)} rows={2} />
                                <Form.Label style={{ color: 'darkblue' }}>PROJECT 2 Description</Form.Label>
                                <Form.Control as="textarea" value={project2} onChange={event => setProject2(event.target.value)} rows={2} />
                            </Form.Group>
                        </Form>
                        <Form >
                            <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                <h4><Form.Label style={{ color: 'darkblue' }}>Skill</Form.Label></h4>
                                <Row>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>First</Form.Label>
                                        <Form.Control as="textarea" value={skill1} onChange={event => setSkill1(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Second</Form.Label>
                                        <Form.Control as="textarea" value={skill2} onChange={event => setSkill2(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Third</Form.Label>
                                        <Form.Control as="textarea" value={skill3} onChange={event => setSkill3(event.target.value)} rows={1} />
                                    </Col>
                                    
                                </Row>
                            </Form.Group>
                        </Form>
                        <Form >

                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <h4> <Form.Label style={{ color: 'darkblue' }}>PERSONAL LINKS</Form.Label></h4>
                                <Form.Label style={{ color: 'darkblue' }}>Link 1</Form.Label>
                                <Form.Control as="textarea" value={link1} onChange={event => setLink1(event.target.value)} rows={2} />
                                <Form.Label style={{ color: 'darkblue' }}>Link 2</Form.Label>
                                <Form.Control as="textarea" value={link2} onChange={event => setLink2(event.target.value)} rows={2} />
                                
                            </Form.Group>
                        </Form>

                        <div className="form-group">
                            <button type="button" onClick={submit} className="btn btn-primary btn-lg">Submit</button>
                        </div>
                    </div>
                </>


                : <ResumeFormat1
                    name={name}
                    email={email}
                    mobileNumber={mobileNumber!}
                    objective ={objective}
                    address={address}
                    skill1={skill1}
                    skill2={skill2}
                    skill3={skill3}
                    internship1={internship1}
                    internship1Title={internship1Title}
                    internship2={internship2}
                    internship2Title={internship2Title}
                    project1={project1}
                    project1Title={project1Title}
                    project2={project2}
                    project2Title={project2Title}
                    educationBachelor={educationBachelor}
                    educationMasters={educationMasters}
                    educationHighSchool={educationHighSchool}
                    educationIntermediate={educationIntermediate!}
                    link1 = {link1}
                    link2 = {link2}



                />

            }
        </React.Fragment>
    );
}
export default Information1;
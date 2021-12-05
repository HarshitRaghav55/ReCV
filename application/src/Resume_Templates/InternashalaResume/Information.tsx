import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../Header/Header';
import InternshalaResume from './InternshalaResume';


const Information = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState<number>();
    const [address, setAddress] = useState("");
    const [educationBachelor, setEducationBachelor] = useState("");
    const [educationBachelor_date, setEducationBachelor_date] = useState<number>();
    const [educationBachelor_University, setEducationBachelor_University] = useState("");
    const [educationMasters, setEducationMasters] = useState("");
    const [educationMasters_date, setEducationMasters_date] = useState<number>()
    const [educationMasters_University, setEducationMasters_University] = useState("");
    const [educationIntermediate_Branch, setEducationIntermediate_Branch] = useState("");
    const [educationIntermediate_date, setEducationIntermediate_date] = useState<number>();
    const [educationIntermediate_School, setEducationIntermediate_School] = useState("");
    const [educationIntermediate_Board, setEducationIntermediate_Board] = useState("");
    const [educationHighSchool, setEducationHighSchool] = useState("");
    const [educationHighSchool_date, setEducationHighSchool_date] = useState<number>();
    const [educationHighSchool_Board, setEducationHighSchool_Board] = useState("");
    const [internship, setInternship] = useState("");
    const [project1, setProject1] = useState("");
    const [skill, setSkill] = useState("");
    const [summary, setSummary] = useState("");
    const [extraCurricular, setExtraCurricular] = useState("");

    const [formSubmitted, setFormSubmitted] = useState(false);
    const submit = (e: any) => {
        if (name == null || email == null || educationBachelor == null || skill == null || summary == null) {
            alert('All * feilds are required');
            e.preventDefault();
        }
        else {
            setFormSubmitted(true);
        }
    }
    return (

        <React.Fragment>
            {/* <Header /> */}
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
                                    </Row>
                                </Container>
                            </Form.Group>
                        </Form>
                    </div>
                    <div style={{ margin: '1%', padding: "0.5%" }}>

                        <Form >
                            <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                <h3><Form.Label style={{ color: 'darkblue' }}>EDUCATION</Form.Label></h3>
                                <Row>
                                    <Row>
                                        <h5><Form.Label style={{ color: 'darkblue' }}>Post-Graduate</Form.Label></h5>
                                        <Col lg>
                                            <Form.Label style={{ color: 'darkblue' }}>Degree</Form.Label>
                                            <Form.Control as="textarea" value={educationMasters} onChange={event => setEducationMasters(event.target.value)} rows={1} />
                                        </Col>
                                        <Col lg>
                                            <Form.Label style={{ color: 'darkblue' }}>Year Of Completion</Form.Label>
                                            <Form.Control className="mb-2" type="number" value={educationMasters_date} onChange={event => setEducationMasters_date(parseInt(event.target.value))} placeholder="Year Of Completion" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg>
                                            <Form.Label style={{ color: 'darkblue' }}>University</Form.Label>
                                            <Form.Control as="textarea" value={educationMasters_University} onChange={event => setEducationMasters_University(event.target.value)} rows={1} />
                                        </Col>
                                    </Row>
                                </Row>
                                <Row>
                                    <Row>
                                        <h5><Form.Label style={{ color: 'darkblue' }}>Graduate</Form.Label></h5>
                                        <Col lg>
                                            <Form.Label style={{ color: 'darkblue' }}>Bachelors Degree</Form.Label>
                                            <Form.Control as="textarea" value={educationBachelor} onChange={event => setEducationBachelor(event.target.value)} rows={1} />
                                        </Col>
                                        <Col lg>
                                            <Form.Label style={{ color: 'darkblue' }}>Year Of Completion</Form.Label>
                                            <Form.Control className="mb-2" type="number" value={educationBachelor_date} onChange={event => setEducationBachelor_date(parseInt(event.target.value))} placeholder="Year Of Completion" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Form.Label style={{ color: 'darkblue' }}>University</Form.Label>
                                        <Form.Control as="textarea" value={educationBachelor_University} onChange={event => setEducationBachelor_University(event.target.value)} rows={1} />
                                    </Row>
                                </Row>
                                <Row>
                                    <Row>
                                        <h5><Form.Label style={{ color: 'darkblue' }}>Senior Secondary(XII)</Form.Label></h5>
                                        <Col lg>
                                            <Form.Label style={{ color: 'darkblue' }}>Branch</Form.Label>
                                            <Form.Control as="textarea" value={educationIntermediate_Branch} onChange={event => setEducationIntermediate_Branch(event.target.value)} rows={1} />
                                        </Col>
                                        <Col lg>
                                            <Form.Label style={{ color: 'darkblue' }}>Year Of Completion</Form.Label>
                                            <Form.Control className="mb-2" type="number" value={educationBachelor_date} onChange={event => setEducationBachelor_date(parseInt(event.target.value))} placeholder="Year Of Completion" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md>
                                            <Form.Label style={{ color: 'darkblue' }}>School</Form.Label>
                                            <Form.Control as="textarea" value={educationIntermediate_School} onChange={event => setEducationIntermediate_School(event.target.value)} rows={1} />
                                        </Col>
                                        <Col md>
                                            <Form.Label style={{ color: 'darkblue' }}>Board</Form.Label>
                                            <Form.Control as="textarea" value={educationIntermediate_Board} onChange={event => setEducationIntermediate_Board(event.target.value)} rows={1} />
                                        </Col>
                                    </Row>
                                </Row>
                                <Row>
                                    <Row>
                                        <h5><Form.Label style={{ color: 'darkblue' }}>Secondary(X)</Form.Label></h5>
                                        <Col lg>
                                            <Form.Label style={{ color: 'darkblue' }}>School</Form.Label>
                                            <Form.Control as="textarea" value={educationHighSchool} onChange={event => setEducationHighSchool(event.target.value)} rows={1} />
                                        </Col>
                                        <Col lg>
                                            <Form.Label style={{ color: 'darkblue' }}>Year Of Completion</Form.Label>
                                            <Form.Control className="mb-2" type="number" value={educationHighSchool_date} onChange={event => setEducationHighSchool_date(parseInt(event.target.value))} placeholder="Year Of Completion" />
                                        </Col>
                                    </Row>
                                    <Row>

                                        <Col md>
                                            <Form.Label style={{ color: 'darkblue' }}>Board</Form.Label>
                                            <Form.Control as="textarea" value={educationIntermediate_Board} onChange={event => setEducationIntermediate_Board(event.target.value)} rows={1} />
                                        </Col>
                                    </Row>
                                </Row>
                            </Form.Group>
                        </Form>
                        <Form >
                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={{ color: 'darkblue' }}>INTERNSHIP EXPERIENCE</Form.Label>
                                <Form.Control as="textarea" value={internship} onChange={event => setInternship(event.target.value)} rows={2} />
                            </Form.Group>
                        </Form>
                        <Form >
                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={{ color: 'darkblue' }}>PROJECTS</Form.Label>
                                <Form.Control as="textarea" value={project1} onChange={event => setProject1(event.target.value)} rows={2} />
                            </Form.Group>
                        </Form>
                        <Form >
                            <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={{ color: 'darkblue' }}>SKILL</Form.Label>
                                <Form.Control as="textarea" value={skill} onChange={event => setSkill(event.target.value)} rows={1} />
                            </Form.Group>
                        </Form>
                        <Form >
                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={{ color: 'darkblue' }}>EXTRA/CO-CURRICULAR ACTIVITIES</Form.Label>
                                <Form.Control as="textarea" value={extraCurricular} onChange={event => setExtraCurricular(event.target.value)} rows={2} />
                            </Form.Group>
                        </Form>
                        <Form >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={{ color: 'darkblue' }}>Summary</Form.Label>
                                <Form.Control as="textarea" value={summary} onChange={event => setSummary(event.target.value)} rows={3} />
                            </Form.Group>
                        </Form>
                        <div className="form-group">
                            <button type="button" onClick={submit} className="btn btn-primary btn-lg">Submit</button>
                        </div>
                    </div>
                </>


                : <InternshalaResume name={name} email={email} educationBachelor={educationBachelor} mobileNumber={mobileNumber!} skill={skill} summary={summary} extraCurricular={extraCurricular} educationBachelor_date={educationBachelor_date!} />

            }
        </React.Fragment>
    );


}
export default Information;
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../Header/Header';
import Resume2_Template from './Resume2_Template';


const Information2 = () => {


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
    const [internship_Title, setInternship_Title] = useState("");
    const [internship, setInternship] = useState("");
    const [internship_date, setInternship_date] = useState("");
    const [trainingAndCourse, setTrainingAndCourse] = useState("");
    const [trainingAndCourse_date, setTrainingAndCourse_date] = useState("");
    const [trainingAndCourse_Title, setTrainingAndCourse_Title] = useState("");
    const [project1, setProject1] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill1_level, setSkill1_level] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill2_level, setSkill2_level] = useState("");
    const [skill3, setSkill3] = useState("");
    const [skill3_level, setSkill3_level] = useState("");
    const [skill4, setSkill4] = useState("");
    const [skill4_level, setSkill4_level] = useState("");
    const [skill5, setSkill5] = useState("");
    const [skill5_level, setSkill5_level] = useState("");
    const [skill6, setSkill6] = useState("");
    const [skill6_level, setSkill6_level] = useState("");
    const [summary, setSummary] = useState("");
    const [extraCurricular, setExtraCurricular] = useState("");


    const [formSubmitted, setFormSubmitted] = useState(false);
    const submit = (e: any) => {
        if (!name || !mobileNumber || !email || !educationHighSchool || !educationHighSchool_Board ||
            !educationHighSchool_date || !educationIntermediate_Board || !educationIntermediate_School || !educationIntermediate_Branch || !educationIntermediate_date) {
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
                                                <Form.Label style={{ color: 'darkblue' }}>City</Form.Label>
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
                                            <Form.Control className="mb-2" type="number" value={educationIntermediate_date} onChange={event => setEducationIntermediate_date(parseInt(event.target.value))} placeholder="Year Of Completion" />
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
                                            <Form.Control as="textarea" value={educationHighSchool_Board} onChange={event => setEducationHighSchool_Board(event.target.value)} rows={1} />
                                        </Col>
                                    </Row>
                                </Row>
                            </Form.Group>
                        </Form>
                        <Form >
                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <h4><Form.Label style={{ color: 'darkblue' }}>TRAININGS and COURSES</Form.Label></h4>
                                <Form.Label style={{ color: 'darkblue' }}>TITLE</Form.Label>
                                <Form.Control as="textarea" value={trainingAndCourse_Title} onChange={event => setTrainingAndCourse_Title(event.target.value)} rows={2} />
                                <Form.Label style={{ color: 'darkblue' }}>DESCRIPTION</Form.Label>
                                <Form.Control as="textarea" value={trainingAndCourse} onChange={event => setTrainingAndCourse(event.target.value)} rows={2} />
                                <Form.Label style={{ color: 'darkblue' }}>DURATION</Form.Label>
                                <Form.Control as="textarea" value={trainingAndCourse_date} onChange={event => setTrainingAndCourse_date(event.target.value)} rows={1} />
                            </Form.Group>
                        </Form>

                        <Form >
                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <h4> <Form.Label style={{ color: 'darkblue' }}>INTERNSHIP EXPERIENCE</Form.Label></h4>
                                <Form.Label style={{ color: 'darkblue' }}>INTERNSHIP TITLE</Form.Label>
                                <Form.Control as="textarea" value={internship_Title} onChange={event => setInternship_Title(event.target.value)} rows={2} />
                                <Form.Label style={{ color: 'darkblue' }}>INTERNSHIP DESCRIPTION</Form.Label>
                                <Form.Control as="textarea" value={internship} onChange={event => setInternship(event.target.value)} rows={2} />
                                <Form.Label style={{ color: 'darkblue' }}>DURATION</Form.Label>
                                <Form.Control as="textarea" value={internship_date} onChange={event => setInternship_date(event.target.value)} rows={1} />
                            </Form.Group>

                        </Form>
                        <Form >

                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <h4> <Form.Label style={{ color: 'darkblue' }}>PROJECTS</Form.Label></h4>
                                <Form.Control as="textarea" value={project1} onChange={event => setProject1(event.target.value)} rows={2} />
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
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Fourth</Form.Label>
                                        <Form.Control as="textarea" value={skill4} onChange={event => setSkill4(event.target.value)} rows={1} />
                                    </Col>
                                </Row>
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


                : <Resume2_Template
                    name={name}
                    email={email}
                    mobileNumber={mobileNumber!}
                    skill1={skill1}
                    skill2={skill2}
                    skill3={skill3}
                    skill4={skill4}
                    skill1_level={skill1_level}
                    skill2_level={skill2_level}
                    skill3_level={skill3_level}
                    skill4_level={skill4_level}
                    internship={internship}
                    internship_date={internship_date}
                    internship_title={internship_Title}
                    educationBachelor_University={educationBachelor_University}
                    educationBachelor={educationBachelor}
                    educationBachelor_date={educationBachelor_date!}
                    educationMasters={educationMasters}
                    educationMasters_date={educationMasters_date!}
                    educationMasters_University={educationMasters_University}
                    education_HighSchool={educationHighSchool}
                    education_HighSchool_Board={educationHighSchool_Board}
                    education_HighSchool_date={educationHighSchool_date!}
                    education_Intermediate_School={educationIntermediate_School}
                    education_Intermediate_Board={educationIntermediate_Board}
                    education_Intermediate_Branch={educationIntermediate_Branch}
                    education_Intermediate_date={educationIntermediate_date!}
                    trainingAndCourse={trainingAndCourse}
                    trainingAndCourse_date={trainingAndCourse_date}
                    trainingAndCourse_title={trainingAndCourse_Title}


                />

            }
        </React.Fragment>
    );


}
export default Information2;
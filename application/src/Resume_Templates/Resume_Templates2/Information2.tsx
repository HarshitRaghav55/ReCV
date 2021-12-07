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
    const [educationBachelorCpi, setEducationBachelorCpi] = useState<number>();
    const [educationBachelor_date, setEducationBachelor_date] = useState<number>();
    const [educationBachelor_University, setEducationBachelor_University] = useState("");
    const [educationMasters, setEducationMasters] = useState("");
    const [educationMastersCpi, setEducationMastersCpi] = useState<number>();
    const [educationMasters_date, setEducationMasters_date] = useState<number>()
    const [educationMasters_University, setEducationMasters_University] = useState("");
    const [educationIntermediate_Branch, setEducationIntermediate_Branch] = useState("");
    const [educationIntermediate_date, setEducationIntermediate_date] = useState<number>();
    const [educationIntermediate_Percentage, setEducationIntermediate_Percentage] = useState("");
    const [educationIntermediate_Board, setEducationIntermediate_Board] = useState("");
    const [educationHighSchool_Percentage, setEducationHighSchool_Percentage] = useState("");
    const [educationHighSchool_date, setEducationHighSchool_date] = useState<number>();
    const [educationHighSchool_Board, setEducationHighSchool_Board] = useState("");
    const [internship_Title, setInternship_Title] = useState("");
    const [internship, setInternship] = useState("");
    const [internship_date, setInternship_date] = useState("");
    const [course1, setCourse1] = useState("");
    const [course2, setCourse2] = useState("");
    const [course3, setCourse3] = useState("");
    const [course4, setCourse4] = useState("");
    const [project1, setProject1] = useState("");
    const [project2, setProject2] = useState("");
    const [project3, setProject3] = useState("");
    const [project4, setProject4] = useState("");
    const [progSkill1, setProgSkill1] = useState("");
    const [progSkill2, setProgSkill2] = useState("");
    const [progSkill3, setProgSkill3] = useState("");
    const [webSkill1, setWebSkill1] = useState("");
    const [webSkill2, setWebSkill2] = useState("");
    const [webSkill3, setWebSkill3] = useState("");
    const [dataSkill1, setDataSkill1] = useState("");
    const [dataSkill2, setDataSkill2] = useState("");
    const [dataSkill3, setDataSkill3] = useState("");
    const [osSkill1, setOsSkill1] = useState("");
    const [osSkill2, setOsSkill2] = useState("");
    const [misSkill2, setMisSkill2] = useState("");
    const [misSkill1, setMisSkill1] = useState("");
    const [internshipCompany, setInternshipCompany] = useState("");
    const [achievement1, setAchievement1] = useState("");
    const [achievement1Title, setAchievement1Title] = useState("");
    const [link1, setLink1] = useState("");
    const [link2, setLink2] = useState("");
    const [link3, setLink3] = useState("");
    const [link4, setLink4] = useState("");
    const [hobbies1, setHobbies1] = useState("");
    const [hobbies2, setHobbies2] = useState("");
    const [hobbies3, setHobbies3] = useState("");
    const [hobbies4, setHobbies4] = useState("");




    const [formSubmitted, setFormSubmitted] = useState(false);
    const submit = (e: any) => {
        if (!name || !mobileNumber || !email || !educationHighSchool_Percentage || !educationHighSchool_Board ||
            !educationHighSchool_date || !educationIntermediate_Board || !educationIntermediate_Percentage || !educationIntermediate_Branch || !educationIntermediate_date) {
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
                                        <Col lg>
                                            <Form.Label style={{ color: 'darkblue' }}>CPI</Form.Label>
                                            <Form.Control as="textarea" value={educationMastersCpi} onChange={event => setEducationMastersCpi(parseInt(event.target.value))} rows={1} />
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
                                        <Col lg>
                                            <Form.Label style={{ color: 'darkblue' }}>University</Form.Label>
                                            <Form.Control as="textarea" value={educationBachelor_University} onChange={event => setEducationBachelor_University(event.target.value)} rows={1} />
                                        </Col>
                                        <Col lg>
                                            <Form.Label style={{ color: 'darkblue' }}>CPI</Form.Label>
                                            <Form.Control as="textarea" value={educationBachelorCpi} onChange={event => setEducationBachelorCpi(parseInt(event.target.value))} rows={1} />
                                        </Col>
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
                                            <Form.Label style={{ color: 'darkblue' }}>Percentage</Form.Label>
                                            <Form.Control as="textarea" value={educationIntermediate_Percentage} onChange={event => setEducationIntermediate_Percentage(event.target.value)} rows={1} />
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
                                            <Form.Label style={{ color: 'darkblue' }}>Percentage</Form.Label>
                                            <Form.Control as="textarea" value={educationHighSchool_Percentage} onChange={event => setEducationHighSchool_Percentage(event.target.value)} rows={1} />
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
                                <h4><Form.Label style={{ color: 'darkblue' }}>COURSES</Form.Label></h4>
                                <Row>
                                    <Col lg>
                                        <Form.Label style={{ color: 'darkblue' }}>Course 1</Form.Label>
                                        <Form.Control as="textarea" value={course1} onChange={event => setCourse1(event.target.value)} rows={2} />
                                    </Col>
                                    <Col lg>
                                        <Form.Label style={{ color: 'darkblue' }}>Course 2</Form.Label>
                                        <Form.Control as="textarea" value={course2} onChange={event => setCourse2(event.target.value)} rows={2} />
                                    </Col>
                                    <Col lg>
                                        <Form.Label style={{ color: 'darkblue' }}>Course 3</Form.Label>
                                        <Form.Control as="textarea" value={course3} onChange={event => setCourse3(event.target.value)} rows={1} />
                                    </Col>
                                    <Col lg>
                                        <Form.Label style={{ color: 'darkblue' }}>Course 4</Form.Label>
                                        <Form.Control as="textarea" value={course4} onChange={event => setCourse4(event.target.value)} rows={1} />
                                    </Col>
                                </Row>
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
                                <Form.Label style={{ color: 'darkblue' }}>Company's Website</Form.Label>
                                <Form.Control as="textarea" value={internshipCompany} onChange={event => setInternshipCompany(event.target.value)} rows={1} />
                            </Form.Group>

                        </Form>
                        <Form >

                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <h4> <Form.Label style={{ color: 'darkblue' }}>PROJECTS</Form.Label></h4>
                                <Form.Label style={{ color: 'darkblue' }}>PROJECT 1</Form.Label>
                                <Form.Control as="textarea" value={project1} onChange={event => setProject1(event.target.value)} rows={2} />
                                <Form.Label style={{ color: 'darkblue' }}>PROJECT 2</Form.Label>
                                <Form.Control as="textarea" value={project2} onChange={event => setProject2(event.target.value)} rows={2} />
                                <Form.Label style={{ color: 'darkblue' }}>PROJECT 3</Form.Label>
                                <Form.Control as="textarea" value={project3} onChange={event => setProject3(event.target.value)} rows={2} />
                                <Form.Label style={{ color: 'darkblue' }}>PROJECT 4</Form.Label>
                                <Form.Control as="textarea" value={project4} onChange={event => setProject4(event.target.value)} rows={2} />
                            </Form.Group>
                        </Form>
                        <Form >
                            <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                <h4><Form.Label style={{ color: 'darkblue' }}>Skills</Form.Label></h4>
                                <h5><Form.Label style={{ color: 'darkblue' }}>Programming Skills</Form.Label></h5>
                                <Row>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>First</Form.Label>
                                        <Form.Control as="textarea" value={progSkill1} onChange={event => setProgSkill1(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Second</Form.Label>
                                        <Form.Control as="textarea" value={progSkill2} onChange={event => setProgSkill2(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Third</Form.Label>
                                        <Form.Control as="textarea" value={progSkill3} onChange={event => setProgSkill3(event.target.value)} rows={1} />
                                    </Col>

                                </Row>
                                <h5><Form.Label style={{ color: 'darkblue' }}>Web Skills</Form.Label></h5>
                                <Row>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>First</Form.Label>
                                        <Form.Control as="textarea" value={webSkill1} onChange={event => setWebSkill1(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Second</Form.Label>
                                        <Form.Control as="textarea" value={webSkill2} onChange={event => setWebSkill2(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Third</Form.Label>
                                        <Form.Control as="textarea" value={webSkill3} onChange={event => setWebSkill3(event.target.value)} rows={1} />
                                    </Col>
                                </Row>
                                <h5><Form.Label style={{ color: 'darkblue' }}>data Skills</Form.Label></h5>
                                <Row>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>First</Form.Label>
                                        <Form.Control as="textarea" value={dataSkill1} onChange={event => setDataSkill1(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Second</Form.Label>
                                        <Form.Control as="textarea" value={dataSkill2} onChange={event => setDataSkill2(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Third</Form.Label>
                                        <Form.Control as="textarea" value={dataSkill3} onChange={event => setDataSkill3(event.target.value)} rows={1} />
                                    </Col>
                                </Row>
                                <h5><Form.Label style={{ color: 'darkblue' }}>Operating System Skills</Form.Label></h5>
                                <Row>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>First</Form.Label>
                                        <Form.Control as="textarea" value={osSkill1} onChange={event => setOsSkill1(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Second</Form.Label>
                                        <Form.Control as="textarea" value={osSkill2} onChange={event => setOsSkill2(event.target.value)} rows={1} />
                                    </Col>
                                </Row>
                                <h5><Form.Label style={{ color: 'darkblue' }}>Miscellaneous Skills</Form.Label></h5>
                                <Row>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>First</Form.Label>
                                        <Form.Control as="textarea" value={misSkill1} onChange={event => setMisSkill1(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Second</Form.Label>
                                        <Form.Control as="textarea" value={misSkill2} onChange={event => setMisSkill2(event.target.value)} rows={1} />
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
                                <Form.Label style={{ color: 'darkblue' }}>Link 3</Form.Label>
                                <Form.Control as="textarea" value={link3} onChange={event => setLink3(event.target.value)} rows={2} />
                                <Form.Label style={{ color: 'darkblue' }}>Link 4</Form.Label>
                                <Form.Control as="textarea" value={link4} onChange={event => setLink4(event.target.value)} rows={2} />
                            </Form.Group>
                        </Form>
                        <Form >

                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <h4> <Form.Label style={{ color: 'darkblue' }}>HOBBIES</Form.Label></h4>
                                <Form.Label style={{ color: 'darkblue' }}>Hobby 1</Form.Label>
                                <Form.Control as="textarea" value={hobbies1} onChange={event => setHobbies1(event.target.value)} rows={2} />
                                <Form.Label style={{ color: 'darkblue' }}>Hobby 2</Form.Label>
                                <Form.Control as="textarea" value={hobbies2} onChange={event => setHobbies2(event.target.value)} rows={2} />
                                <Form.Label style={{ color: 'darkblue' }}>Hobby 3</Form.Label>
                                <Form.Control as="textarea" value={hobbies3} onChange={event => setHobbies3(event.target.value)} rows={2} />
                                <Form.Label style={{ color: 'darkblue' }}>Hobby 4</Form.Label>
                                <Form.Control as="textarea" value={hobbies4} onChange={event => setHobbies4(event.target.value)} rows={2} />
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
                    internshipCompany={internshipCompany}
                    internship={internship}
                    internship_date={internship_date}
                    internship_title={internship_Title}
                    educationBachelor_University={educationBachelor_University}
                    educationBachelor={educationBachelor}
                    educationBachelor_date={educationBachelor_date!}
                    educationMasters={educationMasters}
                    educationMasters_date={educationMasters_date!}
                    educationMasters_University={educationMasters_University}
                    education_HighSchool_Percentage={educationHighSchool_Percentage}
                    education_HighSchool_Board={educationHighSchool_Board}
                    education_HighSchool_date={educationHighSchool_date!}
                    education_Intermediate_Percentage={educationIntermediate_Percentage}
                    education_Intermediate_Board={educationIntermediate_Board}
                    education_Intermediate_Branch={educationIntermediate_Branch}
                    education_Intermediate_date={educationIntermediate_date!}



                />

            }
        </React.Fragment>
    );


}
export default Information2;
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import CV2 from './CV2';




const InformationCV2 = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState<number>();
    const [linkedIn, setLinkedIn] = useState("");
    const [twitter, setTwitter] = useState("");
    const [educationBachelor, setEducationBachelor] = useState("");
    const [educationBachelor_date, setEducationBachelor_date] = useState<number>();
    const [educationBachelor_University, setEducationBachelor_University] = useState("");
    const [educationMasters, setEducationMasters] = useState("");
    const [educationMasters_date, setEducationMasters_date] = useState<number>()
    const [educationMasters_University, setEducationMasters_University] = useState("");
    const [educationIntermediate_Branch, setEducationIntermediate_Branch] = useState("");
    const [educationIntermediate_date, setEducationIntermediate_date] = useState<number>();
    const [educationIntermediate_School, setEducationIntermediate_School] = useState("");

    const [educationHighSchool, setEducationHighSchool] = useState("");
    const [educationHighSchool_date, setEducationHighSchool_date] = useState<number>();

    const [skill1, setSkill1] = useState("");
    const [skill1_level, setSkill1_level] = useState<number>();
    const [skill2, setSkill2] = useState("");
    const [skill2_level, setSkill2_level] = useState<number>();
    const [skill3, setSkill3] = useState("");
    const [skill3_level, setSkill3_level] = useState<number>();
    const [skill4, setSkill4] = useState("");
    const [skill4_level, setSkill4_level] = useState<number>();
    const [currentWorkPost, setCurrentWorkPost] = useState("");
    const [resume, setResume] = useState("");
    
    const [experience1, setExperience1] = useState("");
    const [experience2, setExperience2] = useState("");
    const [experience3, setExperience3] = useState("");

    const [experience1Post, setExperience1Post] = useState("");
    const [experience2Post, setExperience2Post] = useState("");
    const [experience3Post, setExperience3Post] = useState("");

    const [experience1Company, setExperience1Company] = useState("");
    const [experience2Company, setExperience2Company] = useState("");
    const [experience3Company, setExperience3Company] = useState("");

    const [experience1Start, setExperience1Start] = useState("");
    const [experience2Start, setExperience2Start] = useState("");
    const [experience3Start, setExperience3Start] = useState("");

    const [experience1End, setExperience1End] = useState("");
    const [experience2End, setExperience2End] = useState("");
    const [experience3End, setExperience3End] = useState("");

    const [speakingLanguage1, setSpeakingLanguage1] = useState("");
    const [speakingLanguage2, setSpeakingLanguage2] = useState("");
    const [speakingLanguage3, setSpeakingLanguage3] = useState("");
    const [interest1, setInterest1] = useState("");
    const [interest2, setInterest2] = useState("");
    const [interest3, setInterest3] = useState("");
    const [experience1Tech1, setExperience1Tech1] = useState("")
    const [experience2Tech1, setExperience2Tech1] = useState("")
    const [experience3Tech1, setExperience3Tech1] = useState("")
    const [experience1Tech2, setExperience1Tech2] = useState("")
    const [experience2Tech2, setExperience2Tech2] = useState("")
    const [experience3Tech2, setExperience3Tech2] = useState("")
    const [experience1Tech3, setExperience1Tech3] = useState("")
    const [experience2Tech3, setExperience2Tech3] = useState("")
    const [experience3Tech3, setExperience3Tech3] = useState("")
    const [experience1Tech4, setExperience1Tech4] = useState("")
    const [experience2Tech4, setExperience2Tech4] = useState("")
    const [experience3Tech4, setExperience3Tech4] = useState("")

    const [project1Description, setProject1Description] = useState("");
    const [project2Description, setProject2Description] = useState("");
    const [project3Description, setProject3Description] = useState("");
    const [project1Title, setProject1Title] = useState("");
    const [project2Title, setProject2Title] = useState("");
    const [project3Title, setProject3Title] = useState("");
    const [project1DurationStart, setProject1DurationStart] = useState("");
    const [project2DurationStart, setProject2DurationStart] = useState("");
    const [project3DurationStart, setProject3DurationStart] = useState("");
    const [project1DurationEnd, setProject1DurationEnd] = useState("");
    const [project2DurationEnd, setProject2DurationEnd] = useState("");
    const [project3DurationEnd, setProject3DurationEnd] = useState("");
    const [project1Tech1, setProject1Tech1] = useState("");
    const [project2Tech1, setProject2Tech1] = useState("");
    const [project3Tech1, setProject3Tech1] = useState("");
    const [project1Tech2, setProject1Tech2] = useState("");
    const [project2Tech2, setProject2Tech2] = useState("");
    const [project3Tech2, setProject3Tech2] = useState("");
    const [project1Tech3, setProject1Tech3] = useState("");
    const [project2Tech3, setProject2Tech3] = useState("");
    const [project3Tech3, setProject3Tech3] = useState("");
    const [github, setGithub] = useState("");




    const [formSubmitted, setFormSubmitted] = useState(false);
    const submit = (e: any) => {
        if (!name || !mobileNumber || !email || !educationHighSchool || !experience1 || !experience1Company || !experience1Post || !experience1Tech1 || !experience1Tech2 || !experience1Start || !experience1End ||
            !educationHighSchool_date || !speakingLanguage1 || !speakingLanguage2 || !currentWorkPost || !educationIntermediate_School || !educationIntermediate_Branch || !educationIntermediate_date) {
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
                                <Form.Label style={{ color: 'darkblue' }}>Enter Post</Form.Label>
                                <Form.Control className="mb-2" type="text" value={currentWorkPost} onChange={event => setCurrentWorkPost(event.target.value)}
                                    placeholder="Enter the Post" />


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
                                                <Form.Label style={{ color: 'darkblue' }}>Enter your Twitter</Form.Label>
                                                <Form.Control className="mb-2" type="email" value={twitter} onChange={event => setTwitter(event.target.value)} placeholder="Enter your e-mail address" />
                                            </Form.Group>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col lg >
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label style={{ color: 'darkblue' }}>Enter your LinkedIn</Form.Label>
                                                <Form.Control className="mb-2" type="email" value={linkedIn} onChange={event => setLinkedIn(event.target.value)} placeholder="Enter your e-mail address" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg >
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label style={{ color: 'darkblue' }}>Enter your GitHub Id</Form.Label>
                                                <Form.Control className="mb-2" type="email" value={github} onChange={event => setGithub(event.target.value)} placeholder="Enter your e-mail address" />
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

                                    </Row>
                                </Row>
                            </Form.Group>
                        </Form>
                        <Form >

                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <h4> <Form.Label style={{ color: 'darkblue' }}>PROJECTS</Form.Label></h4>
                                <h5><Form.Label style={{ color: 'darkblue' }}>PROJECT 1</Form.Label></h5>
                                <Row>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>PROJECT 1 Title</Form.Label>
                                        <Form.Control as="textarea" value={project1Title} onChange={event => setProject1Title(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>PROJECT 1 start Date</Form.Label>
                                        <Form.Control as="textarea" value={project1DurationStart} onChange={event => setProject1DurationStart(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>PROJECT 1 end date</Form.Label>
                                        <Form.Control as="textarea" value={project1DurationEnd} onChange={event => setProject1DurationEnd(event.target.value)} rows={1} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Form.Label style={{ color: 'darkblue' }}>PROJECT 1 Description</Form.Label>
                                    <Form.Control as="textarea" value={project1Description} onChange={event => setProject1Description(event.target.value)} rows={2} />

                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}> Technology 1</Form.Label>
                                        <Form.Control as="textarea" value={project1Tech1} onChange={event => setProject1Tech1(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Technology 2</Form.Label>
                                        <Form.Control as="textarea" value={project1Tech2} onChange={event => setProject1Tech2(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Technology 3</Form.Label>
                                        <Form.Control as="textarea" value={project1Tech3} onChange={event => setProject1Tech3(event.target.value)} rows={1} />
                                    </Col>
                                </Row>
                                <h5><Form.Label style={{ color: 'darkblue' }}>PROJECT 2</Form.Label></h5>
                                <Row>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>PROJECT 2 Title</Form.Label>
                                        <Form.Control as="textarea" value={project2Title} onChange={event => setProject2Title(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>PROJECT 2 start Date</Form.Label>
                                        <Form.Control as="textarea" value={project2DurationStart} onChange={event => setProject2DurationStart(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>PROJECT 2 end date</Form.Label>
                                        <Form.Control as="textarea" value={project2DurationEnd} onChange={event => setProject2DurationEnd(event.target.value)} rows={1} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Form.Label style={{ color: 'darkblue' }}>PROJECT 2 Description</Form.Label>
                                    <Form.Control as="textarea" value={project2Description} onChange={event => setProject2Description(event.target.value)} rows={2} />

                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}> Technology 1</Form.Label>
                                        <Form.Control as="textarea" value={project2Tech1} onChange={event => setProject2Tech1(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Technology 2</Form.Label>
                                        <Form.Control as="textarea" value={project2Tech2} onChange={event => setProject2Tech2(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Technology 3</Form.Label>
                                        <Form.Control as="textarea" value={project2Tech3} onChange={event => setProject2Tech3(event.target.value)} rows={1} />
                                    </Col>
                                </Row>
                                <h5><Form.Label style={{ color: 'darkblue' }}>PROJECT 3</Form.Label></h5>
                                <Row>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>PROJECT 3 Title</Form.Label>
                                        <Form.Control as="textarea" value={project3Title} onChange={event => setProject3Title(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>PROJECT 3 start Date</Form.Label>
                                        <Form.Control as="textarea" value={project3DurationStart} onChange={event => setProject3DurationStart(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>PROJECT 3 end date</Form.Label>
                                        <Form.Control as="textarea" value={project3DurationEnd} onChange={event => setProject3DurationEnd(event.target.value)} rows={1} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Form.Label style={{ color: 'darkblue' }}>PROJECT 3 Description</Form.Label>
                                    <Form.Control as="textarea" value={project3Description} onChange={event => setProject3Description(event.target.value)} rows={2} />

                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}> Technology 1</Form.Label>
                                        <Form.Control as="textarea" value={project3Tech1} onChange={event => setProject3Tech1(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Technology 2</Form.Label>
                                        <Form.Control as="textarea" value={project3Tech2} onChange={event => setProject3Tech2(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Technology 3</Form.Label>
                                        <Form.Control as="textarea" value={project3Tech3} onChange={event => setProject3Tech3(event.target.value)} rows={1} />
                                    </Col>
                                </Row>

                            </Form.Group>
                        </Form>

                        <Form >
                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <h4> <Form.Label style={{ color: 'darkblue' }}>WORK EXPERIENCE</Form.Label></h4>
                                <h5><Form.Label style={{ color: 'darkblue' }}>EXPERIENCE 1</Form.Label></h5>
                                <Row>
                                    <Col lg>
                                        <Form.Label style={{ color: 'darkblue' }}>Company</Form.Label>
                                        <Form.Control as="textarea" value={experience1Company} onChange={event => setExperience1Company(event.target.value)} rows={1} />
                                    </Col>
                                    <Col lg>
                                        <Form.Label style={{ color: 'darkblue' }}>Post</Form.Label>
                                        <Form.Control as="textarea" value={experience1Post} onChange={event => setExperience1Post(event.target.value)} rows={1} />
                                    </Col>
                                    <Form.Label style={{ color: 'darkblue' }}>Experience</Form.Label>
                                    <Form.Control as="textarea" value={experience1} onChange={event => setExperience1(event.target.value)} rows={2} />
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Starting Year</Form.Label>
                                        <Form.Control type="text" value={experience1Start} onChange={event => setExperience1Start(event.target.value)} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>End Year</Form.Label>
                                        <Form.Control type="text" value={experience1End} onChange={event => setExperience1End(event.target.value)} />
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Technology 1</Form.Label>
                                        <Form.Control as="textarea" value={experience1Tech1} onChange={event => setExperience1Tech1(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>

                                        <Form.Label style={{ color: 'darkblue' }}>Technology 2</Form.Label>
                                        <Form.Control as="textarea" value={experience1Tech2} onChange={event => setExperience1Tech2(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>

                                        <Form.Label style={{ color: 'darkblue' }}>Technology 3</Form.Label>
                                        <Form.Control as="textarea" value={experience1Tech3} onChange={event => setExperience1Tech3(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>

                                        <Form.Label style={{ color: 'darkblue' }}>Technology 4</Form.Label>
                                        <Form.Control as="textarea" value={experience1Tech4} onChange={event => setExperience1Tech4(event.target.value)} rows={1} />
                                    </Col>
                                </Row>
                                <h5><Form.Label style={{ color: 'darkblue' }}>EXPERIENCE 2</Form.Label></h5>
                                <Row>
                                    <Col lg>
                                        <Form.Label style={{ color: 'darkblue' }}>Company</Form.Label>
                                        <Form.Control as="textarea" value={experience2Company} onChange={event => setExperience2Company(event.target.value)} rows={1} />
                                    </Col>
                                    <Col lg>
                                        <Form.Label style={{ color: 'darkblue' }}>Post</Form.Label>
                                        <Form.Control as="textarea" value={experience2Post} onChange={event => setExperience2Post(event.target.value)} rows={1} />
                                    </Col>
                                    <Form.Label style={{ color: 'darkblue' }}>Experience</Form.Label>
                                    <Form.Control as="textarea" value={experience2} onChange={event => setExperience2(event.target.value)} rows={2} />
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Starting Year</Form.Label>
                                        <Form.Control type="text" value={experience2Start} onChange={event => setExperience2Start(event.target.value)} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>End Year</Form.Label>
                                        <Form.Control type="text" value={experience2End} onChange={event => setExperience2End(event.target.value)} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Technology 1</Form.Label>
                                        <Form.Control as="textarea" value={experience2Tech1} onChange={event => setExperience2Tech1(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>

                                        <Form.Label style={{ color: 'darkblue' }}>Technology 2</Form.Label>
                                        <Form.Control as="textarea" value={experience2Tech2} onChange={event => setExperience2Tech2(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>

                                        <Form.Label style={{ color: 'darkblue' }}>Technology 3</Form.Label>
                                        <Form.Control as="textarea" value={experience2Tech3} onChange={event => setExperience2Tech3(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>

                                        <Form.Label style={{ color: 'darkblue' }}>Technology 4</Form.Label>
                                        <Form.Control as="textarea" value={experience2Tech4} onChange={event => setExperience2Tech4(event.target.value)} rows={1} />
                                    </Col>
                                </Row>
                                <h5><Form.Label style={{ color: 'darkblue' }}>EXPERIENCE 3</Form.Label></h5>
                                <Row>
                                    <Col lg>
                                        <Form.Label style={{ color: 'darkblue' }}>Company</Form.Label>
                                        <Form.Control as="textarea" value={experience3Company} onChange={event => setExperience3Company(event.target.value)} rows={1} />
                                    </Col>
                                    <Col lg>
                                        <Form.Label style={{ color: 'darkblue' }}>Post</Form.Label>
                                        <Form.Control as="textarea" value={experience3Post} onChange={event => setExperience3Post(event.target.value)} rows={1} />
                                    </Col>
                                    <Form.Label style={{ color: 'darkblue' }}>Experience</Form.Label>
                                    <Form.Control as="textarea" value={experience3} onChange={event => setExperience3(event.target.value)} rows={2} />
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Starting Year</Form.Label>
                                        <Form.Control type="text" value={experience3Start} onChange={event => setExperience3Start(event.target.value)} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>End Year</Form.Label>
                                        <Form.Control type="text" value={experience3End} onChange={event => setExperience3End(event.target.value)} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Technology 1</Form.Label>
                                        <Form.Control as="textarea" value={experience3Tech1} onChange={event => setExperience3Tech1(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>

                                        <Form.Label style={{ color: 'darkblue' }}>Technology 2</Form.Label>
                                        <Form.Control as="textarea" value={experience3Tech2} onChange={event => setExperience3Tech2(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>

                                        <Form.Label style={{ color: 'darkblue' }}>Technology 3</Form.Label>
                                        <Form.Control as="textarea" value={experience3Tech3} onChange={event => setExperience3Tech3(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>

                                        <Form.Label style={{ color: 'darkblue' }}>Technology 4</Form.Label>
                                        <Form.Control as="textarea" value={experience3Tech4} onChange={event => setExperience3Tech4(event.target.value)} rows={1} />
                                    </Col>
                                </Row>
                            </Form.Group>

                        </Form>
                        <Form >

                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <h4> <Form.Label style={{ color: 'darkblue' }}>Brief about Resume</Form.Label></h4>
                                <Form.Control as="textarea" value={resume} onChange={event => setResume(event.target.value)} rows={2} />
                            </Form.Group>
                        </Form>
                        <Form >
                            <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                <h4><Form.Label style={{ color: 'darkblue' }}>Skills</Form.Label></h4>
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
                                <Row>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Level of First</Form.Label>
                                        <Form.Control as="textarea" value={skill1_level} onChange={event => setSkill1_level(parseInt(event.target.value))} rows={1} placeholder='1-100' />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Level of Second</Form.Label>
                                        <Form.Control as="textarea" value={skill2_level} onChange={event => setSkill2_level(parseInt(event.target.value))} rows={1} placeholder='1-100' />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Level of Third</Form.Label>
                                        <Form.Control as="textarea" value={skill3_level} onChange={event => setSkill3_level(parseInt(event.target.value))} rows={1} placeholder='1-100' />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Level of Fourth</Form.Label>
                                        <Form.Control as="textarea" value={skill4_level} onChange={event => setSkill4_level(parseInt(event.target.value))} rows={1} placeholder='1-100' />
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                        <Form >
                            <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                <h4><Form.Label style={{ color: 'darkblue' }}>Interests</Form.Label></h4>
                                <Row>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>First Interest</Form.Label>
                                        <Form.Control as="textarea" value={interest1} onChange={event => setInterest1(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Second Interest</Form.Label>
                                        <Form.Control as="textarea" value={interest2} onChange={event => setInterest2(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Third Interest</Form.Label>
                                        <Form.Control as="textarea" value={interest3} onChange={event => setInterest3(event.target.value)} rows={1} />
                                    </Col>

                                </Row>
                            </Form.Group>
                        </Form>
                        <Form >
                            <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                <h4><Form.Label style={{ color: 'darkblue' }}>Languages</Form.Label></h4>
                                <Row>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>First</Form.Label>
                                        <Form.Control as="textarea" value={speakingLanguage1} onChange={event => setSpeakingLanguage1(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Second</Form.Label>
                                        <Form.Control as="textarea" value={speakingLanguage2} onChange={event => setSpeakingLanguage2(event.target.value)} rows={1} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>Third</Form.Label>
                                        <Form.Control as="textarea" value={speakingLanguage3} onChange={event => setSpeakingLanguage3(event.target.value)} rows={1} />
                                    </Col>

                                </Row>
                            </Form.Group>
                        </Form>

                        <div className="form-group">
                            <button type="button" onClick={submit} className="btn btn-primary btn-lg">Submit</button>
                        </div>
                    </div>
                </>


                : <CV2
                    name={name}
                    mobileNumber={mobileNumber!}
                    email={email}
                    educationBachelor={educationBachelor}
                    skill1={skill1}
                    skill2={skill2}
                    skill3={skill3}
                    skill4={skill4}
                    skill1Level={skill1_level!}
                    skill2Level={skill2_level!}
                    skill3Level={skill3_level!}
                    skill4Level={skill4_level!}
                    educationBachelor_date={educationBachelor_date!}
                    educationBachelor_University={educationBachelor_University}
                    educationMasters={educationMasters}
                    educationMasters_date={educationMasters_date!}
                    educationMasters_University={educationMasters_University}
                    education_HighSchool={educationHighSchool}

                    education_HighSchool_date={educationHighSchool_date!}

                    education_Intermediate_Branch={educationIntermediate_Branch}
                    education_Intermediate_date={educationIntermediate_date!}
                    education_Intermediate_School={educationIntermediate_School}
                    currentWorkPost={currentWorkPost}

                    experience1={experience1}
                    experience2={experience2}
                    experience3={experience3}

                    experience1Start={experience1Start}
                    experience2Start={experience2Start}
                    experience3Start={experience3Start}

                    experience1End={experience1End}
                    experience2End={experience2End}
                    experience3End={experience3End}
                    experience1Tech1={experience1Tech1}
                    experience2Tech1={experience2Tech1}
                    experience3Tech1={experience3Tech1}
                    experience1Tech2={experience1Tech2}
                    experience2Tech2={experience2Tech2}
                    experience3Tech2={experience3Tech2}
                    experience1Tech3={experience1Tech3}
                    experience2Tech3={experience2Tech3}
                    experience3Tech3={experience3Tech3}
                    experience1Tech4={experience1Tech4}
                    experience2Tech4={experience2Tech4}
                    experience3Tech4={experience3Tech4}
                    experience1Post={experience1Post}
                    experience2Post={experience2Post}
                    experience3Post={experience3Post}

                    experience1Company={experience1Company}
                    experience2Company={experience2Company}
                    experience3Company={experience3Company}
                    project1Description={project1Description}
                    project2Description={project2Description}
                    project3Description={project3Description}
                    project1Title={project1Title}
                    project2Title={project2Title}
                    project3Title={project3Title}
                    project1DurationStart={project1DurationStart}
                    project2DurationStart={project2DurationStart}
                    project3DurationStart={project3DurationStart}
                    project1DurationEnd={project1DurationEnd}
                    project2DurationEnd={project2DurationEnd}
                    project3DurationEnd={project3DurationEnd}
                    project1Tech1={project1Tech1}
                    project2Tech1={project2Tech1}
                    project3Tech1={project3Tech1}
                    project1Tech2={project1Tech2}
                    project2Tech2={project2Tech2}
                    project3Tech2={project3Tech2}
                    project1Tech3={project1Tech3}
                    project2Tech3={project2Tech3}
                    project3Tech3={project3Tech3}

                    linkedIn={linkedIn}
                    twitter={twitter}
                    speakingLanguage1={speakingLanguage1}
                    speakingLanguage2={speakingLanguage2}
                    speakingLanguage3={speakingLanguage3}
                />

            }
        </React.Fragment>
    );


}
export default InformationCV2;
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import CV1 from './CV1';




const InformationCV1 = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState<number>();
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [addressLine3, setAddressLine3] = useState("");
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
    const [achievement, setAchievement] = useState("");
    const [currentWorkPostDescription, setCurrentWorkPostDescription] = useState("");
    const [experience1, setExperience1] = useState("");
    const [experience2, setExperience2] = useState("");
    const [experience3, setExperience3] = useState("");

    const [experience1Post, setExperience1Post] = useState("");
    const [experience2Post, setExperience2Post] = useState("");
    const [experience3Post, setExperience3Post] = useState("");

    const [experience1Company, setExperience1Company] = useState("");
    const [experience2Company, setExperience2Company] = useState("");
    const [experience3Company, setExperience3Company] = useState("");

    const [experience1Start, setExperience1Start] = useState<number>();
    const [experience2Start, setExperience2Start] = useState<number>();
    const [experience3Start, setExperience3Start] = useState<number>();

    const [experience1End, setExperience1End] = useState<number>();
    const [experience2End, setExperience2End] = useState<number>();
    const [experience3End, setExperience3End] = useState<number>();

    const [speakingLanguage1, setSpeakingLanguage1] = useState("");
    const [speakingLanguage2, setSpeakingLanguage2] = useState("");
    const [speakingLanguage3, setSpeakingLanguage3] = useState("");






    const [formSubmitted, setFormSubmitted] = useState(false);
    const submit = (e: any) => {
        if (!name || !mobileNumber || !email || !educationHighSchool || !experience1 || !experience1Company || !experience1Post || !experience1Start || !experience1End ||
            !educationHighSchool_date || !speakingLanguage1 || !speakingLanguage2 || !currentWorkPost || !currentWorkPostDescription || !educationIntermediate_School || !educationIntermediate_Branch || !educationIntermediate_date) {
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
                                <Form.Label style={{ color: 'darkblue' }}>Enter  Work Description</Form.Label>
                                <Form.Control className="mb-2" type="text" value={currentWorkPostDescription} onChange={event => setCurrentWorkPostDescription(event.target.value)}
                                    placeholder="Description" />

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
                                                <Form.Label style={{ color: 'darkblue' }}>Enter your LinkedIn</Form.Label>
                                                <Form.Control className="mb-2" type="email" value={linkedIn} onChange={event => setLinkedIn(event.target.value)} placeholder="Enter your e-mail address" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg >
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label style={{ color: 'darkblue' }}>Enter your Twitter</Form.Label>
                                                <Form.Control className="mb-2" type="email" value={twitter} onChange={event => setTwitter(event.target.value)} placeholder="Enter your e-mail address" />
                                            </Form.Group>
                                        </Col>
                                    </Row>


                                    <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                        <h4><Form.Label style={{ color: 'darkblue' }}>Address</Form.Label></h4>
                                        <Row>
                                            <Col>
                                                <Form.Label style={{ color: 'darkblue' }}>Address Line 1</Form.Label>
                                                <Form.Control as="textarea" value={addressLine1} onChange={event => setAddressLine1(event.target.value)} rows={1} />
                                            </Col>
                                            <Col>
                                                <Form.Label style={{ color: 'darkblue' }}>Address Line 2</Form.Label>
                                                <Form.Control as="textarea" value={addressLine2} onChange={event => setAddressLine2(event.target.value)} rows={1} />
                                            </Col>
                                            <Col>
                                                <Form.Label style={{ color: 'darkblue' }}>Address Line 3</Form.Label>
                                                <Form.Control as="textarea" value={addressLine3} onChange={event => setAddressLine3(event.target.value)} rows={1} />
                                            </Col>

                                        </Row>
                                    </Form.Group>



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
                                        <Form.Control type="number" value={experience1Start} onChange={event => setExperience1Start(parseInt(event.target.value))} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>End Year</Form.Label>
                                        <Form.Control type="number" value={experience1End} onChange={event => setExperience1End(parseInt(event.target.value))} />
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
                                        <Form.Control type="number" value={experience2Start} onChange={event => setExperience2Start(parseInt(event.target.value))} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>End Year</Form.Label>
                                        <Form.Control type="number" value={experience2End} onChange={event => setExperience2End(parseInt(event.target.value))} />
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
                                        <Form.Control type="number" value={experience3Start} onChange={event => setExperience3Start(parseInt(event.target.value))} />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: 'darkblue' }}>End Year</Form.Label>
                                        <Form.Control type="number" value={experience3End} onChange={event => setExperience3End(parseInt(event.target.value))} />
                                    </Col>
                                </Row>
                            </Form.Group>

                        </Form>
                        <Form >

                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <h4> <Form.Label style={{ color: 'darkblue' }}>Achievements</Form.Label></h4>
                                <Form.Control as="textarea" value={achievement} onChange={event => setAchievement(event.target.value)} rows={2} />
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


                : <CV1
                    name={name}
                    mobileNumber={mobileNumber!}
                    email={email}
                    educationBachelor={educationBachelor}
                    achievement={achievement}
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
                    currentWorkDescription={currentWorkPostDescription}
                    experience1={experience1}
                    experience2={experience2}
                    experience3={experience3}

                    experience1Start={experience1Start!}
                    experience2Start={experience2Start!}
                    experience3Start={experience3Start!}

                    experience1End={experience1End!}
                    experience2End={experience2End!}
                    experience3End={experience3End!}

                    experience1Post={experience1Post}
                    experience2Post={experience2Post}
                    experience3Post={experience3Post}

                    experience1Company={experience1Company}
                    experience2Company={experience2Company}
                    experience3Company={experience3Company}

                    addressLine1={addressLine1}
                    addressLine2={addressLine2}
                    addressLine3={addressLine3}
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
export default InformationCV1;
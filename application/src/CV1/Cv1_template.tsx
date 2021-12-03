import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ProgressBar } from "react-bootstrap";

const Cv1_template = () => {
    return (
        <React.Fragment>
            <Container>
                <div className='name mb-2 p-0.9' style={{ backgroundColor: 'black' }}>
                    <h3 className="m-2" style={{ color: 'white' }}>Gina N. Bertrand</h3>
                    <p className="m-2 mb-3 p-0.5" style={{ color: 'white' }}>PR Specialist</p>
                </div>
                <div>
                    <Row>
                        <Col>
                            <div className='details'>
                                <p className="mb-2">PR specialist with 7+ years of experience in corporation and marketing public relations.
                                    Pitched press releases to the most prominent industry magazines to secure over 25
                                    leads a month int top media outlets. Managed multiple PR and marketing annual
                                    budgets from $5,000 to $300,000. Helped increase clients annual salesby up to
                                    35%.
                                </p>
                                <div className="experience mb-3">
                                    <h5 style={{ margin: '0em' }}>Experience</h5>
                                    <hr style={{
                                        color: 'dark',
                                        //backgroundColor: 'black',
                                        height: 3,
                                        fontWeight: 'bold',
                                        margin: '0'
                                        //borderColor: 'yellow'
                                    }} />
                                    <Row>
                                        <Col xs lg="2">
                                            <div className="date1 mt-1">
                                                <h6>2019-23 present</h6>
                                            </div>
                                        </Col>
                                        <Col>
                                            <h6 className="mt-1">PR Specialist</h6>
                                            TAIS Agency
                                            <ul>
                                                <li>
                                                    Supervised the preparation and distribution of materials such as
                                                    news releases, fact sheets, and scripts to, media offers.
                                                </li>
                                                <li>
                                                    Reviewed all forms of communication prior release.
                                                </li>
                                                <li>
                                                    Worked collaboratively in team environment.
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs lg="2">
                                            <h6>2016-01-2019-02</h6>
                                        </Col>
                                        <Col>
                                            <h6>PR Specialist</h6>
                                            Adidas Original, London
                                            <ul>
                                                <li>
                                                    Created and maintined lists of media contacts.
                                                </li>
                                                <li>
                                                    Researched opportunities across online media channels.
                                                </li>
                                                <li>
                                                    Resolved all issues professionaly and in a omely manner
                                                </li>
                                            </ul>
                                            <h6 style={{ display: 'inline-block' }}>Key achievements: </h6> Lead a project learn designing and implementing
                                            a comprehensive social media releases strategy for a new line of lifestyle producers -
                                            grew Facebook fan base from 0 to 12,000 in 4 months, general 39,000 instagram in 3, months.
                                        </Col>
                                    </Row>
                                </div>
                                <div className="education">
                                    <h5 style={{margin:'0'}}>Education</h5>
                                    <hr style={{
                                        color: 'dark',
                                        //backgroundColor: 'black',
                                        height: 3,
                                        fontWeight: 'bold',
                                        margin: '0'
                                        //borderColor: 'yellow'
                                    }} />
                                    <Row>
                                        <Col xs lg={2}>
                                            <div className="date"></div>
                                            <h6>2015</h6>
                                        </Col>
                                        <Col>
                                            <h6>B.A. in Communication</h6>
                                            University of London
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col xs lg="3">
                            <div className="details p-3" style={{ backgroundColor: "#B0A8B9" }}>
                                <div className="Personal_Info">
                                    <h5 style={{margin:'0'}}>Personal Info</h5>
                                    <hr style={{
                                        color: 'dark',
                                        //backgroundColor: 'black',
                                        height: 3,
                                        fontWeight: 'bold',
                                        margin: '0'
                                        //borderColor: 'yellow'
                                    }} />
                                    <h6 className="mt-2">Address</h6>
                                    <p style={{margin:'0'}}>65 Victor Lane</p>
                                    <p style={{margin:'0'}}>SARON</p>
                                    <p style={{margin:'0'}}>SA44 INY</p>
                                    <h6 className="mt-3">Phone</h6>
                                    <p>012345 6789</p>
                                    <h6>E-mail</h6>
                                    <p>abc@gmail.com</p>
                                    <h6>Linkedin</h6>
                                    <p>linked.com</p>
                                    <h6>Twitter</h6>
                                    <p>twitter.com</p>
                                    <h5>Skills</h5>
                                    <p style={{margin:'0'}}>Press releases</p>
                                    <ProgressBar style={{width:'75'}} animated now={75} />
                                    <p style={{margin:'0'}}>Brand management</p>
                                    <ProgressBar style={{width:'75%'}} animated now={65} />
                                    <p style={{margin:'0'}}>CMS platforms</p>
                                    <ProgressBar style={{width:'75%'}} animated now={65} />
                                    <p style={{margin:'0'}}>Fcaebook Marketing</p>
                                    <ProgressBar style={{width:'75%'}} animated now={55} />
                                    <h5 className="Languages mt-3">Languages</h5>
                                    <p>Italian</p>
                                    <p>Japenese</p>
                                    <p>English</p>
                                </div>

                            </div>
                        </Col>
                    </Row>

                </div>
            </Container>
        </React.Fragment>
    );

}

export default Cv1_template;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { fontWeight } from 'html2canvas/dist/types/css/property-descriptors/font-weight';
const Preveiw2 = () => {
    return(
        <React.Fragment>
            <Container>
                <div className='details' style={{ justifyContent: 'center', textAlign: 'center' }}>
                    <h3>Abc xyz</h3>
                    <p style={{ margin: '0' }}>xyz.xyz@gmail.com | +91-999999999 | abc.github.io</p>
                    <p style={{ margin: '0' }}>Github://abcxyz | LinkedIn://xyzabc | CodeChef://absnx | HcakerRank://absnxy</p>
                </div>
                <hr style={{
                    color: 'dark',
                    //backgroundColor: 'black',
                    height: 3,
                    fontWeight:'bold',
                    //borderColor: 'yellow'
                }} />
                <div className='Education'>
                    <h5>Education</h5>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Degree / Certificate</th>
                                <th>Institute / Board</th>
                                <th>CGPA/Percentage</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>2015-Present</td>
                                <td>B.Tech</td>
                                <td>National Institute of Technology Warangal</td>
                                <td>9.00 (Current)</td>
                            </tr>
                            <tr>
                                <td>2015</td>
                                <td>Senior seconadry</td>
                                <td>CBSE board</td>
                                <td>97.0%</td>
                            </tr>
                            <tr>
                                <td>2013</td>
                                <td>Seconadry</td>
                                <td>CBSE board</td>
                                <td>10.0</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <hr style={{
                    color: 'black',
                    backgroundColor: 'black',
                    height: 3,
                    borderColor: '#000000'
                }} />
                <div className="Experience">
                    <h5>Experience</h5>
                    <Row>
                        <Col>
                            <ul>
                                <li>XYZ Engineer at 'ABC'</li>
                                Analysed app usgae staistics to recommend itmes based on user's preference.
                                <li>XYZ Engineer at 'ABC'</li>
                                Designed methods to improve the existing unit test mechanism
                            </ul>
                        </Col>
                        <Col>
                            <p style={{ margin: '0', textAlign: 'right' }}>May 2016-July 2016</p>
                            <p style={{ margin: '0', textAlign: 'right' }}>www.abc.in</p>
                            <p style={{ margin: '0', textAlign: 'right' }}>Dec 2015</p>
                            <p style={{ margin: '0', textAlign: 'right' }}>www.abc.in</p>
                        </Col>
                        <hr style={{
                            color: 'black',
                            backgroundColor: 'black',
                            height: 3,
                            borderColor: '#000000'
                        }} />
                    </Row>
                    {/* <hr style={{
                    color: 'black',
                    backgroundColor: 'black',
                    height: 1,
                    borderColor: '#000000'
                }} /> */}
                </div>
                {/* <hr style={{
                    color: 'black',
                    backgroundColor: 'black',
                    height: 1,
                    borderColor: '#000000'
                }} /> */}
                <div className="Publications">
                    <h5>Publications</h5>
                    <Row>
                        <Col>
                            <ul>
                                <li>Advanced analysts of damping motion</li>
                                Mentors

                            </ul>
                        </Col>
                        <Col>
                            <p style={{ textAlign: 'right' }}>PCES 2010</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li>Efficient ranking of search results</li>
                                Mentors
                            </ul>
                        </Col>
                        <Col>
                            <p style={{ textAlign: 'right' }}>LOCS 2010</p>
                        </Col>
                        <hr style={{
                            color: 'black',
                            backgroundColor: 'black',
                            height: 3,
                            borderColor: '#000000'
                        }} />
                    </Row>
                </div>
                <div className='Projects'>
                    <h5>Projects</h5>
                    <Row>
                        <Col>
                            <ul>
                                <li>
                                    <p style={{fontWeight:'bold', margin:'0'}}>Project title</p>
                                    Dr.XYZ, Associate Professor, Dept. of XXX, IIT Guwahati
                                    Graphical interface to share files over institute's network.
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <p style={{ margin: '0', textAlign: 'right' }}>Apr 2016</p>
                            <p style={{ margin: '0', textAlign: 'right' }}>goo.gl/link</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li>
                                    <p style={{fontWeight:'bold', margin:'0'}}>Project Title</p>
                                    Graphical interface to share files over institute's network.
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <p style={{ margin: '0', textAlign: 'right' }}>Jan 2016-Mar 2016</p>
                            <p style={{ margin: '0', textAlign: 'right' }}>www.xyz.in</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li>
                                    <p style={{fontWeight:'bold', margin:'0'}}>Project title</p>
                                    Graphical interface to share files over institute's network.
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <p style={{ margin: '0', textAlign: 'right' }}>Feb 2016</p>
                            <p style={{ margin: '0', textAlign: 'right' }}>goo.gl/link</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li>
                                    <p style={{fontWeight:'bold', margin:'0'}}>Project title</p>
                                    Mentor Name
                                    Graphical interface to share files over institute's network.
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <p style={{ margin: '0', textAlign: 'right' }}>Nov 2015</p>
                            <p style={{ margin: '0', textAlign: 'right' }}>github.com/link</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li>
                                    <p style={{fontWeight:'bold', margin:'0'}}>Project title</p>
                                    Graphical interface to share files over institute's network.
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <p style={{ margin: '0', textAlign: 'right' }}>Apr 2015-Sep 2015</p>
                            <p style={{ margin: '0', textAlign: 'right' }}>goo.gl/link</p>
                        </Col>
                        <hr style={{
                            color: 'black',
                            backgroundColor: 'black',
                            height: 3,
                            borderColor: '#000000'
                        }} />
                    </Row>
                </div>
                <div className='Technical Skills'>
                    <h5>Technical Skills</h5>
                    <ul>
                        <li> <p>Programming languages:C++, Python, Java* </p></li>
                        <li> <p>Web Technologies:HTML, CSS, JavaScript</p></li>
                        <li> <p>Database management:mySQL</p></li>
                        <li> <p>Miscellaneous:Android programming*</p></li>
                        <li> <p>Operating system:Windows, Linux</p></li>
                    </ul>
                </div>
                <hr style={{
                    color: 'black',
                    backgroundColor: 'black',
                    height: 3,
                    borderColor: '#000000'
                }} />
                <div className='Positions of Responsibility'>
                    <h5>Positions of Responsibility</h5>
                    <ul>
                        <li>XYZ Head, ABC 2016(the annual XYZ of IIT Guwahati)</li>
                        <li>City representative, New Delhi, ABC 2015</li>
                    </ul>
                </div>
                <hr style={{
                    color: 'black',
                    backgroundColor: 'black',
                    height: 3,
                    borderColor: '#000000'
                }} />
                <div className='Achievements'>
                    <h5>Achievements</h5>
                    <Row>
                        <Col>
                            <ul>
                                <li style={{ fontWeight: 'bold' }}>ABC contest 2016:</li>Secured 1st position in the National level contest.
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li style={{ fontWeight: 'bold' }}>Joint Entrance Examination</li>Secured 1st position in the National level contest.
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li style={{ fontWeight: 'bold' }}>KVPY 2013-2014</li>Secured 1st position in the National level contest.
                            </ul>
                        </Col>
                        <hr style={{
                            color: 'black',
                            backgroundColor: 'black',
                            height: 1,
                            borderColor: '#000000'
                        }} />
                    </Row>
                </div>
                <div className="Key courses taken">
                    <h5>Key courses taken</h5>
                    <Row>
                        <Col>
                            <ul>
                                <li>
                                    Computer lab
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>
                                    Advanced calculus
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li>
                                    Process design
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>
                                    XYZ Architecture
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li>
                                    Statistics
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>
                                    ABC lab
                                </li>
                            </ul>
                        </Col>
                        <hr style={{
                            color: 'black',
                            backgroundColor: 'black',
                            height: 3,
                            borderColor: '#000000'
                        }} />
                    </Row>
                </div>
                <div className="Links">
                    <h5>Links</h5>
                    <Row>
                        <Col>
                            <ul>
                                <li>
                                    Github://xyz
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>
                                    CodeChef://xyz
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li>
                                    LinkedIn://xyz
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>
                                    HackerRank://xyz
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li>
                                    Medium://xyz
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>
                                    Web-Page://xyz.github.io
                                </li>
                            </ul>
                        </Col>
                        <hr style={{
                            color: 'black',
                            backgroundColor: 'black',
                            height: 1,
                            borderColor: '#000000'
                        }} />
                    </Row>
                </div>
                <div className="Hobbies">
                    <h5>Hobbies</h5>
                    <ul>
                        <li>PHOTOGRAPHY</li>
                        <li>QUORA WRITING</li>
                        <li>VIDEO EDITING</li>
                        <li>WATCHING STANDUP COMEDY</li>
                    </ul>
                </div>
            </Container>
        </React.Fragment>
    );
}
export default Preveiw2;
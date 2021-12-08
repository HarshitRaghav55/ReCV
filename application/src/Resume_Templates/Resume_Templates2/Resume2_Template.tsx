import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";
type Props = {
    name?: string,
    email?: string,
    mobileNumber?: number,
    educationBachelor?: string,
    educationBachelor_date?: number,
    educationBachelor_University?: string,
    educationBachelorCpi?: number,
    educationMasters?: string,
    educationMasters_date?: number,
    educationMasters_University?: string,
    educationMastersCpi?: number,
    education_HighSchool_Percentage?: string,
    education_HighSchool_Board?: string,
    education_HighSchool_date?: number,
    education_Intermediate_Board?: string,
    education_Intermediate_Branch?: string,
    education_Intermediate_date?: number,
    education_Intermediate_Percentage?: string,
    programmingSkill1?: string,
    programmingSkill2?: string,
    programmingSkill3?: string,
    webSkill1?: string,
    webSkill2?: string,
    webSkill3?: string,
    databaseSkill1?: string,
    databaseSkill2?: string,
    databaseSkill3?: string,
    osSkill1?: string,
    osSkill2?: string,
    misSkill1?: string,
    misSkill2?: string,
    internship?: string,
    internship_title?: string,
    internship_date?: string,
    course1?: string,
    course2?: string,
    course3?: string,
    course4?: string,
    project1?: string,
    project2?: string,
    project3?: string,
    project4?: string,
    project1Date?: string,
    project2Date?: string,
    project3Date?: string,
    project4Date?: string,
    project1Link?: string,
    project2Link?: string,
    project3Link?: string,
    project4Link?: string,
    project1Title?: string,
    project2Title?: string,
    project3Title?: string,
    project4Title?: string,
    achievement1?: string,
    achievement2?: string,
    achievement1Title?: string,
    achievement2Title?: string,
    link1?: string,
    link2?: string,
    link3?: string,
    link4?: string,
    hobbies1?: string,
    hobbies2?: string,
    hobbies3?: string,
    hobbies4?: string,
    internshipCompany?: string
};
const Resume2_Template: React.FC<Props> = (props: Props) => {
    const printResume = () => {

        const input = document.getElementById('PrintResume');
        html2canvas(input!)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 10, 200, 200);
                pdf.save("download.pdf");
            });
    }
    return (
        <React.Fragment>
            <Container>
                <div id="PrintResume">
                    <div className='details' style={{ justifyContent: 'center', textAlign: 'center' }}>
                        <h3>{props.name}</h3>
                        <p style={{ margin: '0' }}>{props.email} | {props.mobileNumber} | abc.github.io</p>
                        <p style={{ margin: '0' }}>Github://abcxyz | LinkedIn://xyzabc | CodeChef://absnx | HcakerRank://absnxy</p>
                    </div>
                    <hr style={{
                        color: 'dark',
                        //backgroundColor: 'black',
                        height: 3,
                        fontWeight: 'bold',
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
                                {props.educationMasters && <>
                                    <tr>
                                        <td>{props.educationMasters_date}</td>
                                        <td>{props.educationMasters}</td>
                                        <td>{props.educationMasters_University}</td>
                                        <td>{props.educationMastersCpi} (Current)</td>
                                    </tr>
                                </>}
                                {props.educationBachelor && <>
                                    <tr>
                                        <td>{props.educationBachelor_date}</td>
                                        <td>{props.educationBachelor}</td>
                                        <td>{props.educationBachelor_University}</td>
                                        <td>{props.educationBachelorCpi}</td>
                                    </tr>
                                </>}
                                <tr>
                                    <td>{props.education_Intermediate_date}</td>
                                    <td>Senior seconadry</td>
                                    <td>{props.education_Intermediate_Board}</td>
                                    <td>{props.education_Intermediate_Percentage}</td>
                                </tr>
                                <tr>
                                    <td>{props.education_HighSchool_date}</td>
                                    <td>Seconadry</td>
                                    <td>{props.education_HighSchool_Board}</td>
                                    <td>{props.education_HighSchool_Percentage}</td>
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
                        {props.internship && <>
                            <h5>Internship Experience</h5>
                            <Row>
                                <Col>
                                    <ul>
                                        <li>{props.internship_title}</li>
                                        {props.internship}

                                    </ul>
                                </Col>
                                <Col>
                                    <p style={{ margin: '0', textAlign: 'right' }}>{props.internship_date}</p>
                                    <p style={{ margin: '0', textAlign: 'right' }}>{props.internshipCompany}</p>

                                </Col>
                                <hr style={{
                                    color: 'black',
                                    backgroundColor: 'black',
                                    height: 3,
                                    borderColor: '#000000'
                                }} />
                            </Row>
                        </>}
                    </div>


                    <div className='Projects'>
                        {(props.project1 || props.project2 || props.project3 || props.project4) && <>
                            <h5>Projects</h5>
                            <Row>
                                {props.project1 && <>
                                    <Col>
                                        <ul>
                                            <li>
                                                <p style={{ fontWeight: 'bold', margin: '0' }}>{props.project1Title}</p>
                                                {props.project1}
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <p style={{ margin: '0', textAlign: 'right' }}>{props.project1Date}</p>
                                        <p style={{ margin: '0', textAlign: 'right' }}>{props.project1Link}</p>
                                    </Col>
                                </>}
                            </Row>
                            <Row>
                                {props.project2 && <>
                                    <Col>
                                        <ul>
                                            <li>
                                                <p style={{ fontWeight: 'bold', margin: '0' }}>{props.project2Title}</p>
                                                {props.project2}
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <p style={{ margin: '0', textAlign: 'right' }}>{props.project2Date}</p>
                                        <p style={{ margin: '0', textAlign: 'right' }}>{props.project2Link}</p>
                                    </Col>
                                </>}
                            </Row>
                            <Row>
                                {props.project3 && <>
                                    <Col>
                                        <ul>
                                            <li>
                                                <p style={{ fontWeight: 'bold', margin: '0' }}>{props.project3Title}</p>
                                                {props.project3}
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <p style={{ margin: '0', textAlign: 'right' }}>{props.project3Date}</p>
                                        <p style={{ margin: '0', textAlign: 'right' }}>{props.project3Link}</p>
                                    </Col>
                                </>}
                            </Row>
                            <Row>
                                {props.project4 && <>
                                    <Col>
                                        <ul>
                                            <li>
                                                <p style={{ fontWeight: 'bold', margin: '0' }}>{props.project4Title}</p>
                                                {props.project4}
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <p style={{ margin: '0', textAlign: 'right' }}>{props.project4Date}</p>
                                        <p style={{ margin: '0', textAlign: 'right' }}>{props.project4Link}</p>
                                    </Col>
                                </>}
                            </Row>

                            <Row>

                                <hr style={{
                                    color: 'black',
                                    backgroundColor: 'black',
                                    height: 3,
                                    borderColor: '#000000'
                                }} />
                            </Row>
                        </>}
                    </div>
                    {(props.programmingSkill1 || props.databaseSkill1 || props.misSkill1 || props.osSkill1 || props.webSkill1 ||
                        props.programmingSkill2 || props.databaseSkill2 || props.misSkill2 || props.osSkill2 || props.webSkill2 ||
                        props.programmingSkill3 || props.databaseSkill3 || props.webSkill3) && <>
                            <div className='Technical Skills'>

                                <h5>Technical Skills</h5>
                                <ul>
                                    {(props.programmingSkill1 || props.programmingSkill2 || props.programmingSkill3) && <>
                                        <li> <p>Programming languages:{props.programmingSkill1}, {props.programmingSkill2}, {props.programmingSkill3} </p></li>
                                    </>}
                                    {(props.webSkill1 || props.webSkill2 || props.webSkill3) && <>
                                        <li> <p>Web Technologies:{props.webSkill1}, {props.webSkill2}, {props.webSkill3}</p></li>
                                    </>}
                                    {(props.databaseSkill1 || props.databaseSkill2 || props.databaseSkill3) && <>
                                        <li> <p>Database management:{props.databaseSkill1},{props.databaseSkill2},{props.databaseSkill3}</p></li>
                                    </>}
                                    {(props.misSkill1 || props.misSkill2) && <>
                                        <li> <p>Miscellaneous:{props.misSkill1},{props.misSkill2}</p></li>
                                    </>}
                                    {(props.osSkill1 || props.osSkill2) && <>
                                        <li> <p>Operating system:{props.osSkill1}, {props.osSkill2}</p></li>
                                    </>}
                                </ul>

                            </div>


                            <hr style={{
                                color: 'black',
                                backgroundColor: 'black',
                                height: 3,
                                borderColor: '#000000'
                            }} />
                        </>}
                    {(props.achievement1 || props.achievement2) && <>
                        <div className='Achievements'>
                            <h5>Achievements</h5>
                            <Row>
                                {props.achievement2 && <>
                                    <Col>

                                        <ul>
                                            <li style={{ fontWeight: 'bold' }}>{props.achievement1Title}:</li>{props.achievement1}
                                        </ul>
                                    </Col>
                                </>}
                            </Row>
                            <Row>
                                {props.achievement2 && <>
                                    <Col>
                                        <ul>
                                            <li style={{ fontWeight: 'bold' }}>{props.achievement2Title}</li>{props.achievement2}
                                        </ul>
                                    </Col>
                                </>}
                            </Row>
                            <Row>

                                <hr style={{
                                    color: 'black',
                                    backgroundColor: 'black',
                                    height: 1,
                                    borderColor: '#000000'
                                }} />
                            </Row>

                        </div>
                    </>}
                    {(props.course1 || props.course2 ||
                        props.course3 || props.course4) && <>
                            <div className="Key courses taken">
                                <h5>Key courses taken</h5>
                                <Row>
                                    {props.course1 && <>
                                        <Col>
                                            <ul>
                                                <li>
                                                    {props.course1}
                                                </li>
                                            </ul>
                                        </Col>
                                    </>}
                                    {props.course2 && <>
                                        <Col>
                                            <ul>
                                                <li>
                                                    {props.course2}
                                                </li>
                                            </ul>
                                        </Col>
                                    </>}
                                </Row>
                                <Row>
                                    {props.course3 && <>
                                        <Col>
                                            <ul>
                                                <li>
                                                    {props.course3}
                                                </li>
                                            </ul>
                                        </Col>
                                    </>}
                                    {props.course4 && <>
                                        <Col>
                                            <ul>
                                                <li>
                                                    {props.course4}
                                                </li>
                                            </ul>
                                        </Col>
                                    </>}
                                </Row>
                                <Row>

                                    <hr style={{
                                        color: 'black',
                                        backgroundColor: 'black',
                                        height: 3,
                                        borderColor: '#000000'
                                    }} />
                                </Row>

                            </div>
                        </>}
                    {(props.link1 || props.link2 ||
                        props.link3 || props.link4) && <>
                            <div className="Links">
                                <h5>Links</h5>
                                <Row>
                                    {props.link1 && <>
                                        <Col>
                                            <ul>
                                                <li>
                                                    {props.link1}
                                                </li>
                                            </ul>
                                        </Col>
                                    </>}
                                    <Col>
                                        {props.link2 && <>
                                            <ul>
                                                <li>
                                                    {props.link2}
                                                </li>
                                            </ul>
                                        </>}
                                    </Col>

                                </Row>
                                <Row>
                                    {props.link3 && <>
                                        <Col>
                                            <ul>
                                                <li>
                                                    {props.link3}
                                                </li>
                                            </ul>
                                        </Col>
                                    </>}
                                    {props.link4 && <>
                                        <Col>
                                            <ul>
                                                <li>
                                                    {props.link4}
                                                </li>
                                            </ul>
                                        </Col>
                                    </>}
                                </Row>
                                <Row>

                                    <hr style={{
                                        color: 'black',
                                        backgroundColor: 'black',
                                        height: 1,
                                        borderColor: '#000000'
                                    }} />
                                </Row>
                            </div>
                        </>}
                    {(props.hobbies1 || props.hobbies2 ||
                        props.hobbies3 || props.hobbies4) && <>
                            <div className="Hobbies">
                                <h5>Hobbies</h5>
                                <ul>

                                    {props.hobbies1 && <> <li>{props.hobbies1}</li> </>}
                                    {props.hobbies2 && <><li>{props.hobbies2}</li></>}
                                    {props.hobbies3 && <><li>{props.hobbies3}</li></>}
                                    {props.hobbies4 && <><li>{props.hobbies4}</li></>}
                                </ul>
                            </div>
                        </>}
                </div>
            </Container>

            <button className="btn btn-primary" onClick={printResume}>Export To PDF</button>
        </React.Fragment>
    );
}

export default Resume2_Template;
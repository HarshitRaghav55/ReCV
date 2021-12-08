import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
// import styles from './appStyles.module.css'
import jsPDF from 'jspdf';
    // import pdfMake from 'pdfmake/build/pdfmake';
    // import pdfFonts from 'pdfmake/build/vfs_fonts';
    // import htmlToPdfmake from 'html-to-pdfmake';
    // import { listeners } from "process";
import html2canvas from "html2canvas";

type Props = {
    name: string,
    email: string,
    mobileNumber: number,
    educationBachelor?: string,
    educationBachelor_date?: number,
    educationBachelor_University?: string,
    educationMasters?: string,
    educationMasters_date?: number,
    educationMasters_University?: string,
    education_HighSchool?: string,
    education_HighSchool_Board?: string,
    education_HighSchool_date?: number,
    education_Intermediate_Board?: string,
    education_Intermediate_Branch?: string,
    education_Intermediate_date?: number,
    education_Intermediate_School?: string,
    internship?: string,
    internship_title?: string,
    internship_date?: string,
    trainingAndCourse_date?: string,
    trainingAndCourse?: string,
    trainingAndCourse_title?: string,
    project1?: string,
    skill1?: string,
    skill2?: string,
    skill3?: string,
    skill4?: string,
    skill1_level?: string,
    skill2_level?: string,
    skill3_level?: string,
    skill4_level?: string,
    summary?: string,
    extraCurricular?: string,
    city?: string
};

const InternshalaResume = (props: Props) => {
    // const pdfResume = document.getElementById('PrintResume');
    const printResume = () => {
        // const doc = new jsPDF();

        //   { //get table html
        // const pdfResume = document.getElementById('PrintResume');
        // html to pdf format
        //    }
        // if(document.getElementById(""))
        // const pdfResume = document.getElementById('PrintResume');
        // var html = htmlToPdfmake(pdfResume!.innerHTML);

        // const documentDefinition = { content: html };
        // pdfMake.vfs = pdfFonts.pdfMake.vfs;
        // pdfMake.createPdf(documentDefinition).download('resume.pdf');
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
                    <div className='conatiner' style={{ margin: "4%" }}>
                        <Row className="mb-1">
                            <Col>
                                <div className='header'>
                                    <div className='name'>
                                        <h2 style={{
                                            textDecorationLine: 'underline',
                                            textDecorationColor: 'aquamarine'
                                        }}>
                                            {props.name}
                                        </h2>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='details mb-5'>
                                    <p style={{
                                        display: 'flex',
                                        justifyContent: 'right',
                                        alignItems: 'right', margin: '0'
                                    }}>{
                                            props.email}
                                    </p>
                                    <p style={{
                                        display: 'flex',
                                        justifyContent: 'right',
                                        alignItems: 'right', margin: '0'
                                    }}>
                                        {props.mobileNumber}
                                    </p>
                                    <p style={{
                                        display: 'flex',
                                        justifyContent: 'right', alignItems: 'right', margin: '0'
                                    }}>
                                        {props.city}
                                    </p>
                                </div>
                            </Col>
                            <hr style={{
                                color: 'black',
                                backgroundColor: 'green',
                                height: .5,
                                borderColor: '#000000'
                            }} />
                        </Row>

                        <div className="information">
                            <Row>
                                <Col>
                                    <div className="education">
                                        <h3>EDUCATION</h3>
                                    </div>
                                </Col>
                                <Col>

                                    <div>
                                        {props.educationMasters && (<>
                                            <h5>{props.educationMasters}</h5>
                                            <p className="styles.educationStyling"
                                                style={{ margin: '0' }}>
                                                {props.educationMasters_University}
                                            </p>
                                            <p className="styles.educationStyling">
                                                {props.educationMasters_date}
                                            </p></>)}
                                    </div>
                                    <div>
                                        {props.educationBachelor && (<>
                                            <h5>{props.educationBachelor}</h5>
                                            <p className="styles.educationStyling"
                                                style={{ margin: '0' }}>
                                                GLA University
                                            </p>
                                            <p className="styles.educationStyling">
                                                {props.educationBachelor_date}
                                            </p>
                                        </>)}
                                        <div>
                                            <h5>Senior Seconadry(XII),{props.education_Intermediate_Branch}</h5>
                                            <p className="styles.educationStyling"
                                                style={{ margin: '0' }}>{props.education_Intermediate_School}</p>
                                            <p className="styles.educationStyling" style={{ margin: '0' }}>({props.education_Intermediate_Board})</p>
                                            <p>Year of completion: {props.education_Intermediate_date}</p>
                                        </div>
                                        <div>
                                            <h5>Secondary(X)</h5>
                                            <p className="styles.educationStyling" style={{ margin: '0' }}>{props.education_HighSchool}</p>
                                            <p className="styles.educationStyling" style={{ margin: '0' }}>({props.education_HighSchool_Board})</p>
                                            <p className="styles.educationStyling mb-5" style={{ margin: '0' }}>Year of completion: {props.education_HighSchool_date}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row>{(props.trainingAndCourse || props.internship) &&(<>
                                <Col>
                                
                                    <div className='trainings'>
                                        <h3>TRAININGS</h3>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <div>
                                            {props.trainingAndCourse && (<>
                                            <h5>Training & Courses</h5>
                                            <p>{props.trainingAndCourse_title}</p>
                                            <p style={{ margin: '0' }}>
                                                {props.trainingAndCourse_date}
                                            </p>
                                            <p style={{ margin: '1' }}>
                                                {props.trainingAndCourse}
                                            </p>
                                            </>)}
                                        </div>
                                        
                                        <div>
                                            {props.internship && (<>
                                            <h5>Internships & Job Preparation</h5>
                                            <p>{props.internship_title}</p>
                                            <p style={{ margin: '0' }}>{props.internship_date}</p>
                                            <p style={{ margin: '1' }}>
                                                {props.internship}
                                            </p>
                                            </>)}
                                        </div>
                                    </div>
                                </Col>
                                </>)}
                            </Row>
                            <Row>
                                <Col>
                                    <h3>SKILLS</h3>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col>
                                            <h5>{props.skill1}</h5>
                                            <p>{props.skill1_level}</p>
                                        </Col>
                                        <Col>
                                            <h5>{props.skill2}</h5>
                                            <p>{props.skill2}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h5>{props.skill3}</h5>
                                            <p>{props.skill3_level}</p>
                                        </Col>
                                        <Col>
                                            <h5>{props.skill4}</h5>
                                            <p>{props.skill4_level}</p>
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <button className="btn btn-primary" onClick={printResume}>Export To PDF</button>

            </Container >
        </React.Fragment >

    );
}

export default InternshalaResume;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import styles from './appStyles.module.css'
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';
import { listeners } from "process";
import html2canvas from "html2canvas";

type Props = {
    name: String,
    email: String,
    mobileNumber: number,
    education1: String,
    education2?: String,
    education3?: String,
    internship?: String,
    project1?: String,
    skill: String,
    summary: String,
    extraCurricular: String
};

const InternshalaResume = (props: Props) => {
    const pdfResume = document.getElementById('PrintResume');
    const printResume = () => {
        const doc = new jsPDF();

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
                // pdf.output('dataurlnewwindow');
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
                                    <h2 style={{ textDecorationLine: 'underline', textDecorationColor: 'aquamarine' }}>{props.name}</h2>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className='details mb-5'>
                                <p style={{ display: 'flex', justifyContent: 'right', alignItems: 'right', margin: '0' }}>{props.email}</p>
                                <p style={{ display: 'flex', justifyContent: 'right', alignItems: 'right', margin: '0' }}>{props.mobileNumber}</p>
                                <p style={{ display: 'flex', justifyContent: 'right', alignItems: 'right', margin: '0' }}>Mathura</p>
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
                                    <h5>{props.education1}</h5>
                                    <p className="styles.educationStyling" style={{ margin: '0' }}>GLA University</p>
                                    <p className="styles.educationStyling">2019-2023</p>
                                    <h5>Senior Seconadry(XII),Science</h5>
                                    <p className="styles.educationStyling" style={{ margin: '0' }}>N.R Public School</p>
                                    <p className="styles.educationStyling" style={{ margin: '0' }}>(CBSE Board)</p>
                                    <p>Year of completion: 2019</p>
                                    <h5>Secondary(X)</h5>
                                    <p className="styles.educationStyling" style={{ margin: '0' }}>Alpine Public School</p>
                                    <p className="styles.educationStyling" style={{ margin: '0' }}>(CBSE board)</p>
                                    <p className="styles.educationStyling mb-5" style={{ margin: '0' }}>Year of complete:2016</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <div className='trainings'>
                                    <h3>TRAININGS</h3>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <h5>Internships & Job Preparation</h5>
                                    <p>Internshala Trainings, Online</p>
                                    <p style={{ margin: '0' }}>Jun 2021-Jul 2021</p>
                                    <p style={{ margin: '1' }}>Sucessfully complete a four weeks online certified trainig on
                                        Internships & Job Preparation. The training consisted of Getting
                                        Started with the Job Hunt, Building up your Gears and Going at the
                                        Front Modules. In the final assessment, I scored 80% marks.
                                    </p>
                                    <h5 className="mb-5">Programming with Python</h5>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>SKILLS</h3>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <h5>Java</h5>
                                        <p>Intermediate</p>
                                    </Col>
                                    <Col>
                                        <h5>Python</h5>
                                        <p>Beginner</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h5>HTML</h5>
                                        <p>Beginner</p>
                                    </Col>
                                    <Col>
                                        <h5>CSS</h5>
                                        <p>Beginner</p>
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
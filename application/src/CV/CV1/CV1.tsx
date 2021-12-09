import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { ProgressBar } from "react-bootstrap";

import jsPDF from 'jspdf';    
import html2canvas from "html2canvas";
type Props = {
    name: string,
    email: string,
    mobileNumber: number,
    educationBachelor?: string,
    achievement?:string,
    skill1?:string,
    skill2?:string,
    skill3?:string,
    skill4?:string,
    skill1Level?:number,
    skill2Level?:number,
    skill3Level?:number,
    skill4Level?:number,
    educationBachelor_date?: number,
    educationBachelor_University?: string,
    educationMasters?: string,
    educationMasters_date?: number,
    educationMasters_University?: string,
    education_HighSchool?: string,
    
    education_HighSchool_date?: number,
    
    education_Intermediate_Branch?: string,
    education_Intermediate_date?: number,
    education_Intermediate_School?: string,
    currentWorkPost?: string,
    currentWorkDescription?: string,
    experience1?: string,
    experience2?: string,
    experience3?: string,
    
    experience1Start?: number,
    experience2Start?: number,
    experience3Start?: number,
    
    experience1End?: number,
    experience2End?: number,
    experience3End?: number,
    
    experience1Post?: string,
    experience2Post?: string,
    experience3Post?: string,
    
    experience1Company?: string,
    experience2Company?: string,
    experience3Company?: string,
    
    addressLine1? : string,
    addressLine2? : string,
    addressLine3? : string,
    linkedIn?:string,
    twitter?:string
    speakingLanguage1?:string,
    speakingLanguage2?:string,
    speakingLanguage3?:string,

}
const CV1: React.FC<Props> = (props: Props) => {
    const printCV = () => {
       
        const input = document.getElementById('printCv');
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
            <div id="printCv">
            <Container>
                <div className='name mb-2 p-0.9' style={{ backgroundColor: 'black' }}>
                    <h3 className="m-2" style={{ color: 'white' }}>{props.name} </h3>
                    <p className="m-2 mb-3 p-0.5" style={{ color: 'white' }}>{props.currentWorkPost} </p>
                </div>
                <div>
                    <Row>
                        <Col>
                            <div className='details'>
                                <p className="mb-2">
                                    {props.currentWorkDescription}
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
                                                <h6>{props.experience1Start}-{props.experience1End}</h6>
                                            </div>
                                        </Col>
                                        <Col>
                                            <h6 className="mt-1">{props.experience1Post}</h6>
                                            {props.experience1Company}
                                            <ul>
                                                {props.experience1}
                                            </ul>
                                        </Col>
                                    </Row>
                                    {props.experience2 && <>
                                    <Row>
                                        <Col xs lg="2">
                                            <h6>{props.experience2Start}-{props.experience2End}</h6>
                                        </Col>
                                        <Col>
                                            <h6>{props.experience2Post}</h6>
                                            {props.experience2Company}
                                            <ul>
                                                {props.experience2}
                                            </ul>
                                        </Col>
                                    </Row>
                                    </>}
                                    {props.experience3 && <>
                                    <Row>
                                        <Col xs lg="2">
                                            <h6>{props.experience3Start}-{props.experience3End}</h6>
                                        </Col>
                                        <Col>
                                            <h6>{props.experience3Post}</h6>
                                            {props.experience3Company}
                                            <ul>
                                                {props.experience3}
                                            </ul>
                                        </Col>
                                    </Row>
                                    </>}

                                </div>
                                {props.achievement && <>
                                <div className="experience mb-3">
                                    <h5 style={{ margin: '0em' }}>Achievements:</h5>
                                    <hr style={{
                                        color: 'dark',
                                        //backgroundColor: 'black',
                                        height: 3,
                                        fontWeight: 'bold',
                                        margin: '0'
                                        //borderColor: 'yellow'
                                    }} />
                                    <Row>
                                        <Col>
                                            {props.achievement}
                                        </Col>
                                    </Row>
                                </div>
                                </>}
                                <div className="education">
                                    <h5 style={{ margin: '0' }}>Education</h5>
                                    <hr style={{
                                        color: 'dark',
                                        //backgroundColor: 'black',
                                        height: 3,
                                        fontWeight: 'bold',
                                        margin: '0'
                                        //borderColor: 'yellow'
                                    }} />
                                    {props.educationMasters && <>
                                    <Row>
                                        <Col xs lg={2}>
                                            <div className="date"></div>
                                            <h6>{props.educationMasters_date}</h6>
                                        </Col>
                                        <Col>
                                            <h6>{props.educationMasters}</h6>
                                            {props.educationMasters_University}
                                        </Col>
                                    </Row>
                                    </>}
                                    {props.educationBachelor && <>
                                    <Row>
                                        <Col xs lg={2}>
                                            <div className="date"></div>
                                            <h6>{props.educationBachelor_date}</h6>
                                        </Col>
                                        <Col>
                                            <h6>{props.educationBachelor}</h6>
                                            {props.educationBachelor_University}
                                        </Col>
                                    </Row>
                                    </>}
                                    <Row>
                                        <Col xs lg={2}>
                                            <div className="date"></div>
                                            <h6>{props.education_Intermediate_date}</h6>
                                        </Col>
                                        <Col>
                                            <h6>Senior Secondary, {props.education_Intermediate_Branch}</h6>
                                            {props.education_Intermediate_School}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs lg={2}>
                                            <div className="date"></div>
                                            <h6>{props.education_HighSchool_date}</h6>
                                        </Col>
                                        <Col>
                                            <h6>Secondary(X)</h6>
                                            {props.education_HighSchool}
                                        </Col>
                                    </Row>
                                   
                                </div>
                            </div>
                        </Col>
                        <Col xs lg="3">
                            <div className="details p-3" style={{ backgroundColor: "#B0A8B9" }}>
                                <div className="Personal_Info">
                                    <h5 style={{ margin: '0' }}>Personal Info</h5>
                                    <hr style={{
                                        color: 'dark',
                                        //backgroundColor: 'black',
                                        height: 3,
                                        fontWeight: 'bold',
                                        margin: '0'
                                        //borderColor: 'yellow'
                                    }} />
                                    <h6 className="mt-2">Address</h6>
                                    <p style={{ margin: '0' }}>{props.addressLine1}</p>
                                    <p style={{ margin: '0' }}>{props.addressLine2}</p>
                                    <p style={{ margin: '0' }}>{props.addressLine3}</p>
                                    <h6 className="mt-3">Phone</h6>
                                    <p>{props.mobileNumber}</p>
                                    <h6>E-mail</h6>
                                    <p>{props.email}</p>
                                    <h6>Linkedin</h6>
                                    <p>{props.linkedIn}</p>
                                    <h6>Twitter</h6>
                                    <p>{props.twitter}</p>
                                    {(props.skill1 || props.skill2 || props.skill3 || props.skill4) && <>
                                    <h5>Skills</h5>
                                    <p style={{ margin: '0' }}>{props.skill1}</p>
                                    <ProgressBar style={{ width: '75' }} animated now={props.skill1Level} />
                                    <p style={{ margin: '0' }}>{props.skill2}</p>
                                    <ProgressBar style={{ width: '75%' }} animated now={props.skill2Level} />
                                    {props.skill3 && <>
                                    <p style={{ margin: '0' }}>{props.skill3}</p>
                                    <ProgressBar style={{ width: '75%' }} animated now={props.skill3Level} />
                                    </>}
                                    {props.skill4 && <>
                                    <p style={{ margin: '0' }}>{props.skill4}</p>
                                    <ProgressBar style={{ width: '75%' }} animated now={props.skill4Level} />
                                    </>}
                                    </>}
                                    <h5 className="Languages mt-3">Languages</h5>
                                    <p>{props.speakingLanguage1}</p>
                                    <p>{props.speakingLanguage2}</p>
                                    {props.speakingLanguage3 && <>
                                    <p>{props.speakingLanguage3}</p>
                                    </>}
                                </div>

                            </div>
                        </Col>
                    </Row>

                </div>
            </Container>
            
            </div>
            <button className="btn btn-primary" onClick={printCV}>Export To PDF</button>
        </React.Fragment>
    );
}
export default CV1;